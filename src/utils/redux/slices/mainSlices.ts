import { createSlice } from '@reduxjs/toolkit';
import { CardState } from '../../types/cardTypes';

const initialState: CardState = {
  cardDetails: {
    activity: '',
    type: '',
    participants: 0,
    price: 0,
    link: '',
    key: '',
    accessibility: 0,
  },
};

// Create a Redux slice for managing card data
const cardSlice = createSlice({
  name: 'cards', // Name of the slice
  initialState, // Initial state
  reducers: {
    // Reducer for updating cardDetails after a successful resource fetch
    getResourcesSuccess(state, action) {
      const resources = action.payload;
      state.cardDetails = resources;
    },
  },
});

// Export the action creator for getResourcesSuccess
export const { getResourcesSuccess } = cardSlice.actions;

// Export the reducer
export default cardSlice.reducer;
