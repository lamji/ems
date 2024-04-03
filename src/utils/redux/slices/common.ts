import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  drawer: {
    isOpen: false,
  },
};

// Create a Redux slice for managing card data
const commonSlice = createSlice({
  name: 'common', // Name of the slice
  initialState, // Initial state
  reducers: {
    // Reducer for updating cardDetails after a successful resource fetch
    setDrawerOpen(state, action) {
      state.drawer.isOpen = action.payload;
    },
  },
});

// Export the action creator for getResourcesSuccess
export const { setDrawerOpen } = commonSlice.actions;

// Export the reducer
export default commonSlice.reducer;
