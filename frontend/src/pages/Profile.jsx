import { useRef, useState, useEffect } from "react"; 
import { useSelector, useDispatch } from "react-redux";
import { Camera, User, Edit3, Save } from "lucide-react";
import { fetchCompanyProfile, updateCompanyProfile, createCompanyProfile, clearProfileError } from "../redux/slices/profileSlice";
import UserNavbar from "../components/Common/userNavbar";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { company, loading, error } = useSelector((state) => state.profile);
  const { user } = useSelector((state) => state.auth);
  
  const [formData, setFormData] = useState({
    companyName: "",
    numberOfEmployees: "",
    country: "",
    city: "",
    companyOverview: "",
    typeOfCompany: "",
    image: null,

    // New user fields
    name: "",
    email: "",
  });

  // Control if we're editing or just viewing
  const [isEditing, setIsEditing] = useState(false);
  // Control which form to show (company or user)
  const [activeForm, setActiveForm] = useState('company');

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
        image: company.image || null,

        // User fields
      name: user?.name || "",
      email: user?.email || "",
      });
    }
  }, [company, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
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
    if (company, user) {
      // Reset form data to company values if cancel
      setFormData({
        companyName: company.companyName || "",
        numberOfEmployees: company.numberOfEmployees || "",
        country: company.country || "",
        city: company.city || "",
        companyOverview: company.companyOverview || "",
        typeOfCompany: company.typeOfCompany || "",
        image: company.image || null,

         // User fields
      name: user?.name || "",
      email: user?.email || "",
      });
    }
    setIsEditing(false);
    dispatch(clearProfileError());
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  dispatch(clearProfileError());

  console.log("Submitting formData:", formData);  // <-- Add this to see what you send

  try {
    if (company && company.id) {
      await dispatch(updateCompanyProfile(formData)).unwrap();
    } else {
      await dispatch(createCompanyProfile(formData)).unwrap();
    }
    setIsEditing(false);
  } catch (error) {
    console.error("Profile update/create error:", error);
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-b from-custom-blue to-blue-700 flex flex-col">
      <UserNavbar />
      <div className="flex-grow flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mt-16 text-custom-sage flex items-center justify-center gap-2">
              <User className="text-custom-sage" size={28} />
              {activeForm === 'company' ? 'Company Profile' : 'User Profile'}
            </h2>
            <p className="mt-2 text-sm text-gray-400 min-h-[24px] sm:min-h-[32px]">
  {isEditing ? `Edit and save your ${activeForm} details` : `View your ${activeForm} details`}
</p>        
            {/* Add the toggle buttons */}
            <div className="flex justify-center mt-6 space-x-4">
  <button
    onClick={() => setActiveForm('company')}
    className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
      activeForm === 'company'
        ? 'bg-custom-blue text-white shadow-md hover:bg-custom-blue focus:ring-custom-blue'
        : 'bg-custom-blue text-gray-400 hover:bg-custom-blue focus:ring-custom-blue'
    }`}
  >
    Company
  </button>
  <button
    onClick={() => setActiveForm('user')}
    className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
      activeForm === 'user'
        ? 'bg-custom-blue text-white shadow-md hover:bg-custom-blue focus:ring-custom-blue'
        : 'bg-custom-blue text-gray-400 hover:bg-custom-blue focus:ring-custom-blue'
    }`}
  >
    User
  </button>
</div>

            
            {error && (
              <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">
                {error}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
          <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-6 shadow-xl rounded-2xl sm:px-10 border border-gray-100">
            {activeForm === 'company' ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Profile Form */}
                {/* Profile Picture */}
                <div className="flex flex-col items-left">
                  <div className="relative group">
                    <div className="w-28 h-28 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-md">
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
                        >
                          <Camera size={16} />
                        </button>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                      </>
                    )}
                  </div>
                </div>

                {/* Company Name */}
                <div className="space-y-1">
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  {isEditing ? (
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-custom-blue focus:border-custom-blue"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded border border-gray-200">{formData.companyName || "-"}</p>
                  )}
                </div>

                {/* Number of Employees */}
                <div className="space-y-1">
                  <label htmlFor="numberOfEmployees" className="block text-sm font-medium text-gray-700">
                    Number of Employees
                  </label>
                  {isEditing ? (
                    <input
                      id="numberOfEmployees"
                      name="numberOfEmployees"
                      type="number"
                      required
                      value={formData.numberOfEmployees}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-custom-blue focus:border-custom-blue"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded border border-gray-200">{formData.numberOfEmployees || "-"}</p>
                  )}
                </div>

                {/* Country and City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    {isEditing ? (
                      <input
                        id="country"
                        name="country"
                        type="text"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-custom-blue focus:border-custom-blue"
                      />
                    ) : (
                      <p className="p-3 bg-gray-50 rounded border border-gray-200">{formData.country || "-"}</p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    {isEditing ? (
                      <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-custom-blue focus:border-custom-blue"
                      />
                    ) : (
                      <p className="p-3 bg-gray-50 rounded border border-gray-200">{formData.city || "-"}</p>
                    )}
                  </div>
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
                      placeholder="Tell others about your company..."
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded border border-gray-200 whitespace-pre-wrap">{formData.companyOverview || "-"}</p>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 justify-end">
                  {isEditing ? (
                    <>
                      <button
                        type="button"
                        onClick={handleCancelClick}
                        className="px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition"
                        disabled={loading}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-custom-blue text-white hover:bg-blue-700 transition"
                        disabled={loading}
                      >
                        {loading ? (
                          <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.3 0 0 5.3 0 12h4z" />
                          </svg>
                        ) : (
                          <Save size={16} />
                        )}
                        Save
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={handleEditClick}
                      className="flex items-center gap-2 px-6 py-3 rounded-lg bg-custom-blue text-white hover:bg-blue-700 transition"
                    >
                      <Edit3 size={16} /> Edit
                    </button>
                  )}
                </div>
              </form>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Picture */}
                <div className="flex flex-col items-left">
                  <div className="relative group">
                    <div className="w-28 h-28 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-md">
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
                        >
                          <Camera size={16} />
                        </button>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                      </>
                    )}
                  </div>
                </div>
              {/* Name */}
              <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                {isEditing ? (
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-custom-blue focus:border-custom-blue"
                  />
                ) : (
                  <p className="p-3 bg-gray-50 rounded border border-gray-200">{formData.name || "-"}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                {isEditing ? (
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-custom-blue focus:border-custom-blue"
                  />
                ) : (
                  <p className="p-3 bg-gray-50 rounded border border-gray-200">{formData.email || "-"}</p>
                )}
              </div>

              {/* Country and City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    {isEditing ? (
                      <input
                        id="country"
                        name="country"
                        type="text"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-custom-blue focus:border-custom-blue"
                      />
                    ) : (
                      <p className="p-3 bg-gray-50 rounded border border-gray-200">{formData.country || "-"}</p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    {isEditing ? (
                      <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-custom-blue focus:border-custom-blue"
                      />
                    ) : (
                      <p className="p-3 bg-gray-50 rounded border border-gray-200">{formData.city || "-"}</p>
                    )}
                  </div>
                </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4 pt-4">
                {isEditing ? (
                  <>
                    <button
                      type="button"
                      onClick={handleCancelClick}
                      className="px-6 py-2 rounded-md text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 rounded-md text-sm bg-custom-blue hover:bg-blue-700 text-white font-medium flex items-center gap-2"
                    >
                      <Save size={16} />
                      Save
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={handleEditClick}
                    className="px-6 py-2 rounded-md text-sm bg-custom-blue hover:bg-blue-700 text-white font-medium flex items-center gap-2"
                  >
                    <Edit3 size={16} />
                    Edit
                  </button>
                )}
              </div>
            </form>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
          
          