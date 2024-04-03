'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import useStyles from './useStyles';
import { useAppDispatch } from '@/src/utils/redux/hooks';
import { setDrawerOpen } from '@/src/utils/redux/slices/common';
import { ListSideNav } from '@/src/utils/constants';

export default function ViewModel() {
  const [activeItem, setActiveItem] = useState('');
  const classes = useStyles();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const handleListClick = () => {
    console.log('test');
    dispatch(setDrawerOpen(false));
  };

  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  return {
    classes,
    ListSideNav,
    activeItem,
    handleListClick,
  };
}
