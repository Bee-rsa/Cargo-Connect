import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Camera, Edit3, Save, MapPin, Users, Building, Mail, Briefcase } from "lucide-react";
import { createCompanyProfile, fetchCompanyProfile, updateCompanyProfile, clearProfileError } from "../redux/slices/profileSlice";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { company, loading, error } = useSelector((state) => state.profile || {});
  const [formData, setFormData] = useState({
    companyName: "",
    numberOfEmployees: "",
    country: "",
    city: "",
    companyOverview: "",
    typeOfCompany: "",
    image: null
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);

  // Fetch profile on mount
  useEffect(() => {
    dispatch(fetchCompanyProfile());
  }, [dispatch]);

  // Update form when profile data changes
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
    }
  }, [company]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle image input
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

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(clearProfileError());

    try {
      if (company && company.id) {
        await dispatch(updateCompanyProfile(formData)).unwrap();
        setIsEditing(false);
      } else {
        await dispatch(createCompanyProfile(formData)).unwrap();
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  // Toggle edit mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  // Determine which data to display
  const displayData = isEditing ? formData : company || formData;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-8 md:py-12 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-6 md:mb-0">
                <div className="relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm overflow-hidden border-4 border-white/30">
                    {displayData.image ? (
                      <img 
                        src={displayData.image} 
                        alt="Company Logo" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-blue-100/20 flex items-center justify-center">
                        <Building className="text-white" size={40} />
                      </div>
                    )}
                  </div>
                  {isEditing && (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current.click()}
                      className="absolute -bottom-2 -right-2 bg-white text-blue-600 p-2 rounded-full shadow-lg hover:bg-blue-50 transition-all"
                    >
                      <Camera size={16} />
                    </button>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">
                    {displayData.companyName || "Your Company"}
                  </h1>
                  <p className="text-blue-100 mt-1">
                    {displayData.typeOfCompany || "Company Type"}
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-3">
                {isEditing ? (
                  <button
                    onClick={toggleEditMode}
                    className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center"
                  >
                    Cancel
                  </button>
                ) : (
                  <button
                    onClick={toggleEditMode}
                    className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center"
                  >
                    <Edit3 size={16} className="mr-2" />
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
            {/* Left Column - Company Details */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Briefcase className="text-blue-500 mr-2" size={20} />
                  Company Information
                </h2>
                
                {isEditing ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        name="companyName"
                        type="text"
                        required
                        value={displayData.companyName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Number of Employees
                      </label>
                      <input
                        name="numberOfEmployees"
                        type="number"
                        required
                        value={displayData.numberOfEmployees}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <input
                        name="country"
                        type="text"
                        required
                        value={displayData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        name="city"
                        type="text"
                        required
                        value={displayData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Type
                      </label>
                      <input
                        name="typeOfCompany"
                        type="text"
                        value={displayData.typeOfCompany}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                      />
                    </div>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-700">
                      <Users className="text-blue-500 mr-3" size={20} />
                      <div>
                        <p className="text-sm text-gray-500">Employees</p>
                        <p>{displayData.numberOfEmployees || "Not specified"}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-700">
                      <MapPin className="text-blue-500 mr-3" size={20} />
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p>
                          {displayData.city || "City"}, {displayData.country || "Country"}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-700">
                      <Building className="text-blue-500 mr-3" size={20} />
                      <div>
                        <p className="text-sm text-gray-500">Company Type</p>
                        <p>{displayData.typeOfCompany || "Not specified"}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Right Column - Company Overview */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Briefcase className="text-blue-500 mr-2" size={20} />
                  Company Overview
                </h2>
                
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Overview
                      </label>
                      <textarea
                        name="companyOverview"
                        rows={6}
                        value={displayData.companyOverview}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                        placeholder="Describe your company..."
                      />
                    </div>
                    
                    <div className="flex justify-end space-x-3 pt-4">
                      <button
                        type="button"
                        onClick={toggleEditMode}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 flex items-center"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.3 0 0 5.3 0 12h4z" />
                            </svg>
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save size={16} className="mr-2" />
                            Save Changes
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="prose max-w-none">
                    <p className="text-gray-700">
                      {displayData.companyOverview || "No company overview provided. Add a description to tell others about your company."}
                    </p>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Mail className="text-blue-500 mr-2" size={20} />
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium text-gray-700 mb-2">Primary Contact</h3>
                    <p className="text-blue-600">contact@company.com</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium text-gray-700 mb-2">Support</h3>
                    <p className="text-blue-600">support@company.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;