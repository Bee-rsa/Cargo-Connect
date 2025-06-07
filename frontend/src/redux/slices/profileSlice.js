import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "https://cargo-connect-5hof.vercel.app";

// ✅ Updated fetchCompanyProfile with log and fallback
export const fetchCompanyProfile = createAsyncThunk(
  "profile/fetchCompanyProfile",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("userToken");
      const response = await axios.get(`${API_BASE_URL}/api/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      console.log("Fetched profile response:", response.data); // 🔍 Debug log

      // Return either company or full data depending on response structure
      return response.data.company || response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message || "Failed to fetch profile"
      );
    }
  }
);

// ✅ Unchanged: Create Company Profile
export const createCompanyProfile = createAsyncThunk(
  "profile/createCompanyProfile",
  async (profileData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken");
      const response = await axios.post(
        `${API_BASE_URL}/api/profile`,
        profileData,
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
      return response.data.company;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || "Failed to create profile"
      );
    }
  }
);

// ✅ Unchanged: Update Company Profile
export const updateCompanyProfile = createAsyncThunk(
  "profile/updateCompanyProfile",
  async (profileData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken");
      const response = await axios.put(
        `${API_BASE_URL}/api/profile`,
        profileData,
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
      return response.data.company;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || "Failed to update profile"
      );
    }
  }
);

const initialState = {
  company: null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearProfileError: (state) => {
      state.error = null;
    },
  },
extraReducers: (builder) => {
  builder
    // Fetch company profile
    .addCase(fetchCompanyProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchCompanyProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.company = action.payload; // ✅ Direct assignment
    })
    .addCase(fetchCompanyProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to fetch profile";
    })

    // Create company profile
    .addCase(createCompanyProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(createCompanyProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.company = action.payload;
    })
    .addCase(createCompanyProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    // Update company profile
    .addCase(updateCompanyProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(updateCompanyProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.company = action.payload;
    })
    .addCase(updateCompanyProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
},
});

export const { clearProfileError } = profileSlice.actions;
export default profileSlice.reducer;
