import { createSlice } from '@reduxjs/toolkit';
import { addDays } from 'date-fns';

const initialState = {
  drawer: {
    isOpen: false,
  },
  dialog: {
    isOpen: false,
  },
  date: {
    selectedDate: [
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 0),
        key: 'selection',
      },
    ],
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
    openDialog(state, action) {
      state.dialog.isOpen = action.payload;
    },
    setDateRange(state, action) {
      state.date.selectedDate = action.payload;
    },
  },
});

// Export the action creator for getResourcesSuccess
export const { setDrawerOpen, openDialog, setDateRange } = commonSlice.actions;

// Export the reducer
export default commonSlice.reducer;
