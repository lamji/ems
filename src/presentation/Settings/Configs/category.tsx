import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import useViewModel from '../useViewModel';
import { ListSideNav2 } from '@/src/utils/constants';
import Image from 'next/image';
import EditModeBox from '@/src/components/EditMode';

export function MobileCategoryConfig() {
  const { classes, handleEdit, activeId, state, handleCancel, handleSave, isPending } =
    useViewModel();
  return (
    <div>
      {ListSideNav2.map((item, idx) => {
        return (
          <Box
            className="list-item-container default-box-shadow"
            sx={classes.tableWrapper}
            fontSize="12px"
            key={idx}
          >
            {activeId === (item.id as unknown as string) ? (
              <>
                <Box
                  sx={{
                    border: '1px solid',
                    borderColor: 'gray',
                    padding: '5px',
                    borderRadius: '5px',
                  }}
                >
                  <EditModeBox
                    item={item}
                    state={state}
                    handleSave={handleSave}
                    handleCancel={handleCancel}
                    isPending={isPending}
                    type="edit"
                  />
                </Box>
              </>
            ) : (
              <></>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <Box className="icon-container" mr={2} sx={{}}>
                <Image src={item.icon} width={40} height={40} alt="Picture of the author" />
              </Box>
              <Typography className="label" fontWeight={700} variant="h6">
                {item.label}
              </Typography>
            </Box>

            <Button
              variant="text"
              sx={classes.tableButton}
              onClick={() => handleEdit(item.id as unknown as string)}
              className="edit-button"
            >
              Edit
            </Button>
            <Button
              variant="text"
              sx={{ ...classes.tableButton, color: 'error.main' }}
              onClick={() => null}
              className="edit-button"
            >
              Delete
            </Button>
          </Box>
        );
      })}
      {state.dialog.isAdd && (
        <EditModeBox
          state={state}
          handleSave={handleSave}
          handleCancel={handleCancel}
          isPending={isPending}
          type="add"
        />
      )}
    </div>
  );
}

export function DesktopCategoryConfig() {
  return <></>;
}
