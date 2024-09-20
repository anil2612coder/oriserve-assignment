import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to search NPM packages
export const searchPackages = createAsyncThunk('npm/searchPackages', async (searchQuery) => {
  const response = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${searchQuery}`);
  return response.data.objects;
});

// Thunk to get package details
export const fetchPackageDetails = createAsyncThunk('npm/fetchPackageDetails', async (packageName) => {
  const response = await axios.get(`https://registry.npmjs.org/${packageName}`);
  return response.data;
});

// Thunk to get version details
export const fetchPackageVersion = createAsyncThunk('npm/fetchPackageVersion', async ({ packageName, version }) => {
  const response = await axios.get(`https://registry.npmjs.org/${packageName}/${version}`);
  return response.data;
});

const npmSlice = createSlice({
  name: 'npm',
  initialState: {
    searchResults: [],
    packageDetails: null,
    versionDetails: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Search Packages
      .addCase(searchPackages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchPackages.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(searchPackages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
      // Fetch Package Details
      .addCase(fetchPackageDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPackageDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.packageDetails = action.payload;
      })
      .addCase(fetchPackageDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.packageDetails = null; // Reset packageDetails on error
      })

      // Fetch Version Details
      .addCase(fetchPackageVersion.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPackageVersion.fulfilled, (state, action) => {
        state.loading = false;
        state.versionDetails = action.payload;
      })
      .addCase(fetchPackageVersion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.versionDetails = null; // Reset versionDetails on error
      });
  },
});

export default npmSlice.reducer;
