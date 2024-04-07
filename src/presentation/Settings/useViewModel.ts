import useUploadImage from '@/src/utils/query/mutation/uploadImages';
import useStyles from './useStyles';
import { useIsMobile } from '@/src/utils/helper';
import { useAppDispatch, useAppSelector } from '@/src/utils/redux/hooks';
import { setAddDialog, setFullWidthOpen } from '@/src/utils/redux/slices/common';
import { useEffect, useState } from 'react';

export default function useViewModel() {
  const state = useAppSelector((state) => state.common);
  const dispatch = useAppDispatch();
  const { isMobilV1 } = useIsMobile();
  const [isEdit, setIsEdit] = useState(false);
  const [activeId, setActiveId] = useState('');
  const classes = useStyles();

  // Disable eslint rule for exhaustive-deps because some dependencies are not needed for this useEffect
  /* eslint-disable react-hooks/exhaustive-deps */
  const { mutate: handleUploadMutate, isSuccess, data, isPending } = useUploadImage();

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

  /**
   * Handle edit action
   * @param {string} id - The ID of the item being edited
   */
  const handleEdit = (id: string) => {
    setIsEdit(true);
    setActiveId(id);
  };

  /**
   * Handle save action
   */
  const handleSave = () => {
    handleUploadMutate();
  };

  /**
   * Handle cancel action
   */
  const handleCancel = () => {
    state.dialog.isAdd ? dispatch(setAddDialog(false)) : setActiveId('');
  };

  /**
   * Perform side effects on success and data change
   */
  useEffect(() => {
    if (isSuccess && data) {
      if (state.dialog.isAdd) {
        // add category integrations
      } else {
        // edit category integrations
      }
    }
  }, [isSuccess, data]);

  return {
    classes,
    isMobilV1,
    handleButtonClick,
    isEdit,
    handleEdit,
    activeId,
    handleSave,
    handleCancel,
    state,
    isSuccess,
    data,
    isPending,
  };
}
