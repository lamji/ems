import useStyles from './useStyles';
import { useIsMobile } from '@/src/utils/helper';
import { useAppDispatch } from '@/src/utils/redux/hooks';
import { setFullWidthOpen } from '@/src/utils/redux/slices/common';
import { useState } from 'react';

export default function useViewModel() {
  const dispatch = useAppDispatch();
  const { isMobilV1 } = useIsMobile();
  const [isEdit, setIsEdit] = useState(false);
  const [activeId, setActiveId] = useState('');
  const classes = useStyles();

  const handleButtonClick = (type: string) => {
    dispatch(
      setFullWidthOpen({
        isOpen: true,
        data: {
          type: type,
        },
      })
    );
  };

  const handleEdit = (id: string) => {
    setIsEdit(true);
    setActiveId(id);
  };
  return {
    classes,
    isMobilV1,
    handleButtonClick,
    isEdit,
    handleEdit,
    activeId,
  };
}
