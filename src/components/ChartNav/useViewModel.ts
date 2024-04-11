// import { useEffect, useState } from 'react';
import { useIsMobile } from '@/src/utils/helper';
import { useStyles } from './useStyles';

// import { getAll } from '@/app/api/getData';
// import { useDispatch } from 'react-redux';
// import {
//   showLoadingScreen,
//   hideLoadingScreen,
// } from '@/app/globalRedux/Features/flashScreen/index.js';
// import { setData } from '@/app/globalRedux/Features/data/dataSlice';
// import useAuth from '@/app/utils/auth';
import { dashboardData } from '@/src/utils/constants';

export default function useViewModel() {
  const { isMobilV1 } = useIsMobile();
  // const { handleSignOut } = useAuth();
  // const dispatch = useDispatch();
  // const dataStore = dashboardData;
  const classes = useStyles();
  // const [isAuth, setIsAuth] = useState(true);
  // const [mainData, setMainData] = useState({});
  // const filter = useSelector((state) => state?.data?.categoryFilter);
  // const typeFilter = useSelector((state) => state?.data?.filterType);
  // const filter = '';
  // const typeFilter = '';

  /**
   * get initial data
   */
  // const getInitialData = async () => {
  //   try {
  //     // dispatch(showLoadingScreen());
  //     const params = {
  //       category: filter || undefined,
  //       type: typeFilter || undefined,
  //     };

  //     const { data } = await getAll(params);
  //     if (data.auth === 'failed') {
  //       setIsAuth(false);
  //     } else {
  //       setIsAuth(true);
  //       dispatch(setData(data));
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     dispatch(hideLoadingScreen());
  //   }
  // };

  function calculatePercentageSpent(totalBalance: number, amountSpent: number) {
    if (amountSpent > totalBalance) {
      return "You've overspent your total balance!";
    }

    const percentageSpent = (amountSpent / totalBalance) * 100;
    return percentageSpent.toFixed(2) + '%';
  }

  const incomeLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  // useEffect(() => {
  //   // getInitialData();
  //   if (Object.keys(dataStore).length === 0) {
  //     getInitialData();
  //   }
  //   setMainData(dataStore);
  // }, [dataStore]);

  return {
    classes,
    // isAuth,
    mainData: dashboardData,
    // handleSignOut,
    calculatePercentageSpent,
    incomeLabels,
    isMobilV1,
  };
}
