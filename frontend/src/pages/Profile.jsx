import { useRef, useState, useEffect } from "react"; 
import { useSelector, useDispatch } from "react-redux";
import { Camera, User, Edit3, Save } from "lucide-react";
import { fetchCompanyProfile, updateCompanyProfile, clearProfileError } from "../redux/slices/profileSlice";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { company, loading, error } = useSelector((state) => state.profile);
  
  const [formData, setFormData] = useState({
    companyName: "",
    numberOfEmployees: "",
    country: "",
    city: "",
    companyOverview: "",
    typeOfCompany: "",
    image: null
  });

  const [formErrors, setFormErrors] = useState({}); // Validation errors

  // Control if we're editing or just viewing
  const [isEditing, setIsEditing] = useState(false);

  const fileInputRef = useRef(null);

  // Fetch profile on mount
  useEffect(() => {
    dispatch(fetchCompanyProfile());
  }, [dispatch]);

  // Update formData when company changes
  useEffect(() => {
    if (company) {
      setFormData({
        companyName: company.companyName || "",
        numberOfEmployees: company.numberOfEmployees || "",
        country: company.country || "",
        city: company.city || "",
        companyOverview: company.companyOverview || "",
        typeOfCompany: company.typeOfCompany || "",
        image: company.image || null
      });
      setFormErrors({});
    }
  }, [company]);

  // Validate required fields
  const validate = () => {
    const errors = {};
    if (!formData.companyName.trim()) errors.companyName = "Company Name is required.";
    if (!formData.numberOfEmployees || formData.numberOfEmployees <= 0) errors.numberOfEmployees = "Please enter a valid number of employees.";
    if (!formData.country.trim()) errors.country = "Country is required.";
    if (!formData.city.trim()) errors.city = "City is required.";
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => ({ ...prev, [name]: undefined })); // Clear error on change
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type and size (max 5MB)
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validTypes.includes(file.type)) {
        alert("Only JPG, PNG, and GIF images are allowed.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // When clicking Edit, enable editing
  // When clicking Save, submit the form
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    if (company) {
      // Reset form data to company values if cancel
      setFormData({
        companyName: company.companyName || "",
        numberOfEmployees: company.numberOfEmployees || "",
        country: company.country || "",
        city: company.city || "",
        companyOverview: company.companyOverview || "",
        typeOfCompany: company.typeOfCompany || "",
        image: company.image || null
      });
    }
    setFormErrors({});
    setIsEditing(false);
    dispatch(clearProfileError());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(clearProfileError());

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      await dispatch(updateCompanyProfile(formData)).unwrap();
      setIsEditing(false);
    } catch (error) {
      console.error("Profile update error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      <div className="flex-grow flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
              <User className="text-custom-blue" size={28} />
              Company Profile
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {isEditing ? "Edit and save your company details" : "View your company details"}
            </p>
            {error && (
              <div className="mt-4 p-2 bg-red-100 text-red-700 rounded" role="alert">
                {error}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
          <div className="bg-white py-8 px-6 shadow-xl rounded-2xl sm:px-10 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Profile Picture */}
              <div className="flex flex-col items-center">
                <div className="relative group">
                  <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-md">
                    {formData.image ? (
                      <img src={formData.image} alt="Company Logo" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
                        <User className="text-gray-400" size={40} />
                      </div>
                    )}
                  </div>
                  {isEditing && (
                    <>
                      <button
                        type="button"
                        onClick={() => fileInputRef.current.click()}
                        className="absolute -bottom-2 -right-2 bg-custom-blue text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-all"
                        title="Change Company Logo"
                        aria-label="Change Company Logo"
                      >
                        <Camera size={16} />
                      </button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/jpeg,image/png,image/gif"
                        className="hidden"
                        onChange={handleImageChange}
                        aria-describedby="imageHelp"
                      />
                      <p id="imageHelp" className="text-xs text-gray-500 mt-1 text-center">Allowed formats: JPG, PNG, GIF. Max size: 5MB.</p>
                    </>
                  )}
                </div>
              </div>

              {/* Company Name */}
              <div className="space-y-1">
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                  Company Name <span className="text-red-500">*</span>
                </label>
                {isEditing ? (
                  <>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-custom-blue focus:border-custom-blue ${
                        formErrors.companyName ? "border-red-500" : "border-gray-300"
                      }`}
                      aria-invalid={!!formErrors.companyName}
                      aria-describedby={formErrors.companyName ? "companyName-error" : undefined}
                    />
                    {formErrors.companyName && (
                      <p id="companyName-error" className="text-sm text-red-600 mt-1">
                        {formErrors.companyName}
                      </p>
                    )}
                  </>
                ) : (
                  <p className="p-3 bg-gray-50 rounded border border-gray-200">{formData.companyName || "-"}</p>
                )}
              </div>

              {/* Number of Employees */}
              <div className="space-y-1">
                <label htmlFor="numberOfEmployees" className="block text-sm font-medium text-gray-700">
                  Number of Employees <span className="text-red-500">*</span>
                </label>
                {isEditing ? (
                  <>
                    <input
                      id="numberOfEmployees"
                      name="numberOfEmployees"
                      type="number"
                      min={1}
                      required
                      value={formData.numberOfEmployees}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-custom-blue focus:border-custom-blue ${
                        formErrors.numberOfEmployees ? "border-red-500" : "border-gray-300"
                      }`}
                      aria-invalid={!!formErrors.numberOfEmployees}
                      aria-describedby={formErrors.numberOfEmployees ? "numberOfEmployees-error" : undefined}
                    />
                    {formErrors.numberOfEmployees && (
                      <p id="numberOfEmployees-error" className="text-sm text-red-600 mt-1">
                        {formErrors.numberOfEmployees}
                      </p>
                    )}
                  </>
                ) : (
                  <p className="p-3 bg-gray-50 rounded border border-gray-200">{formData.numberOfEmployees || "-"}</p>
                )}
              </div>

              {/* Country and City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    Country <span className="text-red-500">*</span>
                  </label>
                  {isEditing ? (
                    <>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-custom-blue focus:border-custom-blue ${
                          formErrors.country ? "border-red-500" : "border-gray-300"
                        }`}
                        aria-invalid={!!formErrors.country}
                        aria-describedby={formErrors.country ? "country-error" : undefined}
                      />
                      {formErrors.country && (
                        <p id="country-error" className="text-sm text-red-600 mt-1">
                          {formErrors.country}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="p-3 bg-gray-50 rounded border border-gray-200">{formData.country || "-"}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City <span className="text-red-500">*</span>
                  </label>
                  {isEditing ? (
                    <>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-custom-blue focus:border-custom-blue ${
                          formErrors.city ? "border-red-500" : "border-gray-300"
                        }`}
                        aria-invalid={!!formErrors.city}
                        aria-describedby={formErrors.city ? "city-error" : undefined}
                      />
                      {formErrors.city && (
                        <p id="city-error" className="text-sm text-red-600 mt-1">
                          {formErrors.city}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="p-3 bg-gray-50 rounded border border-gray-200">{formData.city || "-"}</p>
                  )}
                </div>
              </div>

              {/* Company Overview */}
              <div className="space-y-1">
                <label htmlFor="companyOverview" className="block text-sm font-medium text-gray-700">
                  Company Overview
                </label>
                {isEditing ? (
                  <textarea
                    id="companyOverview"
                    name="companyOverview"
                    rows={4}
                    value={formData.companyOverview}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-custom-blue focus:border-custom-blue"
                  />
                ) : (
                  <p className="p-3 bg-gray-50 rounded border border-gray-200 whitespace-pre-wrap">{formData.companyOverview || "-"}</p>
                )}
              </div>

              {/* Type of Company */}
              <div className="space-y-1">
                <label htmlFor="typeOfCompany" className="block text-sm font-medium text-gray-700">
                  Type of Company
                </label>
                {isEditing ? (
                  <input
                    id="typeOfCompany"
                    name="typeOfCompany"
                    type="text"
                    value={formData.typeOfCompany}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-custom-blue focus:border-custom-blue"
                  />
                ) : (
                  <p className="p-3 bg-gray-50 rounded border border-gray-200">{formData.typeOfCompany || "-"}</p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-4">
                {isEditing ? (
                  <>
                    <button
                      type="button"
                      onClick={handleCancelClick}
                      className="inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                        loading
                          ? "bg-blue-300 cursor-not-allowed"
                          : "bg-custom-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue"
                      }`}
                    >
                      {loading ? "Saving..." : <><Save size={16} className="mr-2" /> Save</>}
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={handleEditClick}
                    className="inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-custom-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue"
                  >
                    <Edit3 size={16} className="mr-2" /> Edit Profile
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
