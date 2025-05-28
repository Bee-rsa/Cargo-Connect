import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

// GET Profile
export const fetchCompanyProfile = createAsyncThunk(
  "profile/fetchCompanyProfile",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken"); // <-- fixed here

      const response = await axios.get(`${API_BASE_URL}/api/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      return response.data.company;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to fetch profile" }
      );
    }
  }
);

export const createCompanyProfile = createAsyncThunk(
  "profile/createCompanyProfile",
  async (profileData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken");

      const response = await axios.post(
        `${API_BASE_URL}/api/profile`,
        profileData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      return response.data.company;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: error.message || "Failed to create profile" }
      );
    }
  }
);


export const updateCompanyProfile = createAsyncThunk(
  "profile/updateCompanyProfile",
  async (profileData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken");

      const response = await axios.put(
        `${API_BASE_URL}/api/profile`,  // NO userId here
        profileData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      return response.data.company;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: error.message || "Failed to update profile" }
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
      .addCase(fetchCompanyProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCompanyProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.company = action.payload;
      })
      .addCase(fetchCompanyProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
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
        state.error = action.payload.message;
      });
  },
});

export const { clearProfileError } = profileSlice.actions;
export default profileSlice.reducer;
