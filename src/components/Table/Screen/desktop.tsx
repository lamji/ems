/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Menu,
  MenuItem,
  InputBase,
  Fab,
  CircularProgress,
  Pagination,
  Stack,
  PaginationItem,
} from '@mui/material';
import {
  MoreVert as MoreVertIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
  Save as SaveIcon,
  Check as CheckIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import { Props } from '@/src/utils/types/tableTypes';
import useViewModel from '../useViewModel';

const CustomTable: React.FC<Props> = ({ columns, rows }) => {
  const { classes, actions, constants } = useViewModel();

  return (
    <>
      <TableContainer component={Paper} elevation={0} sx={classes.tableContainer}>
        <Table aria-label="custom table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={column.id}
                  onClick={() => actions.handleSort(column.id)}
                  sx={{
                    ...classes.columnsTableCell,
                    borderRight: index < columns.length - 0 ? '1px solid #e3e3e3' : 'none',
                  }}
                >
                  {column.label}
                  {constants.sortingColumn === column.id && constants.sortActive && (
                    <ArrowUpwardIcon />
                  )}
                  {constants.sortingColumn === column.id && constants.sortDirection === 'desc' && (
                    <ArrowDownwardIcon />
                  )}
                </TableCell>
              ))}
              <TableCell align="right" sx={classes.actionsTableCell}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                {columns.map((column) => (
                  <TableCell key={column.id} sx={{ padding: '2px 10px' }}>
                    <InputBase
                      defaultValue={row[column.id]?.toString()}
                      disabled={!constants.editingRow || constants.editingRow !== row}
                      sx={{
                        ...classes.tableCellsInputBase,
                        backgroundColor:
                          constants.editingRow && constants.editingRow === row
                            ? 'white'
                            : '#f2f2f2',
                      }}
                    />
                  </TableCell>
                ))}
                <TableCell align="right">
                  <IconButton
                    aria-label="more"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={(e) => actions.handleMenuOpen(e, row)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    anchorEl={constants.anchorEl}
                    keepMounted
                    open={Boolean(constants.anchorEl)}
                    onClose={constants.handleMenuClose}
                  >
                    <MenuItem onClick={actions.handleEdit}>Edit</MenuItem>
                    <MenuItem onClick={actions.handleDelete}>Delete</MenuItem>
                    <MenuItem onClick={actions.handleDelete}>View</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack spacing={2} sx={classes.stack}>
        <Pagination
          count={10} // Total number of pages
          page={constants.currentPage} // Current active page
          onChange={actions.handlePageChange} // Event handler for page change
          renderItem={(item) => (
            <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />
          )}
        />
      </Stack>

      {constants.editingRow && (
        <Fab color="primary" aria-label="save" sx={classes.fab} onClick={actions.handleSave}>
          {constants.isSaving ? (
            <CircularProgress size={24} color="inherit" />
          ) : constants.isSaved ? (
            <CheckIcon />
          ) : (
            <SaveIcon />
          )}
        </Fab>
      )}
    </>
  );
};

export default CustomTable;
