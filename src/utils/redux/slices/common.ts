import { createSlice } from '@reduxjs/toolkit';
import { addDays } from 'date-fns';

const initialState = {
  drawer: {
    isOpen: false,
  },
  dialog: {
    isOpen: false,
    isAdd: false,
    fullWidth: {
      isOpen: false,
      data: {
        type: '',
      },
    },
  },
  uploadImagePreviews: {
    data: { previews: [], images: [] },
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
  path: {
    pathName: '',
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
    setPathName(state, action) {
      state.path.pathName = action.payload;
    },
    setFullWidthOpen(state, action) {
      state.dialog.fullWidth = action.payload;
    },
    setUpload(state, action) {
      state.uploadImagePreviews.data = action.payload;
    },
    setAddDialog(state, action) {
      state.dialog.isAdd = action.payload;
    },
  },
});

// Export the action creator for getResourcesSuccess
export const {
  setDrawerOpen,
  openDialog,
  setDateRange,
  setPathName,
  setFullWidthOpen,
  setUpload,
  setAddDialog,
} = commonSlice.actions;

// Export the reducer
export default commonSlice.reducer;
