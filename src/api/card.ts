import { Card } from '../utils/types/cardTypes';
import axios from 'axios';

// Define an asynchronous action creator to fetch card resources from an API
export function getResources() {
  return async () => {
    try {
      // Make an HTTP GET request to the API
      const response = await axios.get('https://www.boredapi.com/api/activity');

      // Extract card resources from the API response
      const resources: Card = response.data;

      return resources;

      // Dispatch the getResourcesSuccess action to update the Redux state
      //   dispatch(getResourcesSuccess(resources));
    } catch (error) {
      console.error('Error fetching card resources:', error);
    }
  };
}
