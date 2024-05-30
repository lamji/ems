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
  sideBar: {
    isVisible: false,
  },
  puller: {
    isOpen: false,
    type: '',
  },
  transaction: {
    description: 'This transaction will add to main balance',
    active: {
      add_funds: true,
      transfer_funds: false,
      split_funds: false,
      spend: false,
      pay: false,
    },
  },
  transferFrom: {
    fundAmount: 0,
    value: '',
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
    setSideBarVisible(state, action) {
      state.sideBar.isVisible = action.payload;
    },
    openPuller(state, action) {
      state.puller = action.payload;
    },
    setTransaction(state, action) {
      state.transaction = action.payload;
    },
    setFundAmount(state, action) {
      state.transferFrom.fundAmount = action.payload;
    },
    setTransferFrom(state, action) {
      state.transferFrom.value = action.payload;
    },
  },
});

// Export the action creator for getResourcesSuccess
export const {
  openPuller,
  setDrawerOpen,
  openDialog,
  setDateRange,
  setPathName,
  setFullWidthOpen,
  setUpload,
  setAddDialog,
  setSideBarVisible,
  setTransaction,
  setTransferFrom,
  setFundAmount,
} = commonSlice.actions;

// Export the reducer
export default commonSlice.reducer;
