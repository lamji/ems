/* eslint-disable @typescript-eslint/no-explicit-any */

import { useQuery } from '@tanstack/react-query';
import { useDispatch } from '../../redux/store';
import axios from 'axios';
import { getResourcesSuccess } from '../../redux/slices/mainSlices';

export const CardQueries = () => {
  const dispatch = useDispatch();
  const res = useQuery({
    queryKey: ['resources'],
    queryFn: async () => {
      try {
        const response = await axios.get('https://www.boredapi.com/api/activity');
        return response;
      } catch (error) {
        error;
      }
    },
  });

  if (res.isLoading) {
    // Dispatch loading action here
    // dispatch(someLoadingAction());
  }

  // Dispatch error action when isError is true
  if (res.isError) {
    // Dispatch error action here
    // dispatch(someErrorAction());
  }
  dispatch(getResourcesSuccess(res.data?.data));
  // This function doesn't return any UI, it's just for data fetching and dispatching
  // Therefore, you might want to remove it and use the useEffect hook in the component
  // where you want to fetch data and dispatch action
  return res;
  //   return   useQuery({
  //     queryFn: () => getResources(),
  //     queryKey: ['resources'],
  //   });

  //   // Dispatch loading action when isLoading is true
  //   if (isLoading) {
  //     // Dispatch loading action here
  //     // dispatch(someLoadingAction());
  //   }

  //   // Dispatch error action when isError is true
  //   if (isError) {
  //     // Dispatch error action here
  //     // dispatch(someErrorAction());
  //   }
  //   dispatch(getResourcesSuccess(data));
  //   // This function doesn't return any UI, it's just for data fetching and dispatching
  //   // Therefore, you might want to remove it and use the useEffect hook in the component
  //   // where you want to fetch data and dispatch actions

  //   // Ensure to handle isLoading and isError states in your UI component
};
