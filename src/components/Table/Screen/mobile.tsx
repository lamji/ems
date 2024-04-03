/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
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
  Divider,
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

type Column = {
  id: string;
  label: string;
};

type Row = {
  [key: string]: string | number;
};

type Props = {
  columns: Column[];
  rows: Row[];
};

const CustomTable: React.FC<Props> = ({ columns, rows }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRow, setSelectedRow] = useState<Row | null>(null);
  const [editingRow, setEditingRow] = useState<Row | null>(null);
  const [sortingColumn, setSortingColumn] = useState<string | null>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const sortActiv = sortDirection === 'asc' || '';

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, row: Row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const handleEdit = () => {
    console.log('Edit clicked for row:', selectedRow);
    setEditingRow(selectedRow);
    handleMenuClose();
  };

  const handleDelete = () => {
    console.log('Delete clicked for row:', selectedRow);
    handleMenuClose();
  };

  const handleSort = (columnId: string) => {
    console.log('Sort clicked for column:', columnId);
    if (sortingColumn === columnId) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortingColumn(columnId);
      setSortDirection('asc');
    }
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaved(true);
      setIsSaving(false);
      setTimeout(() => {
        setIsSaved(false);
        setEditingRow(null);
      }, 2000);
    }, 5000);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    console.log('Current page:', page);
  };

  return (
    <>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          border: '1px solid',
          borderColor: 'primary.dark',
          borderRadius: '10px',
          position: 'relative',
        }}
      >
        <Table aria-label="custom table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={column.id}
                  onClick={() => handleSort(column.id)}
                  sx={{
                    fontWeight: 'bold',
                    borderBottom: '1px solid',
                    borderBottomColor: 'primary.dark',
                    borderRight: index < columns.length - 0 ? '1px solid' : 'none',
                    borderColor: 'primary.dark',
                    cursor: 'pointer',
                  }}
                >
                  {column.label}
                  {sortingColumn === column.id && sortActiv && <ArrowUpwardIcon />}
                  {sortingColumn === column.id && sortDirection === 'desc' && <ArrowDownwardIcon />}
                </TableCell>
              ))}
              <TableCell
                align="right"
                sx={{
                  fontWeight: 'bold',
                  borderBottom: '1px solid',
                  borderBottomColor: 'primary.dark',
                  borderColor: 'primary.dark',
                }}
              >
                Actions
              </TableCell>
              <Divider />
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                {columns.map((column) => (
                  <TableCell key={column.id} sx={{ padding: '2px 10px' }}>
                    <InputBase
                      defaultValue={row[column.id]?.toString()}
                      disabled={!editingRow || editingRow !== row}
                      sx={{
                        border: '1px solid',
                        borderColor: 'primary.dark',
                        color: '#777',
                        cursor: !editingRow || editingRow !== row ? 'not-allowed' : 'text',
                        width: '100%',
                        padding: '5px 10px',
                        borderRadius: '10px',
                      }}
                    />
                  </TableCell>
                ))}
                <TableCell align="right">
                  <IconButton
                    aria-label="more"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={(e) => handleMenuOpen(e, row)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleEdit}>Edit</MenuItem>
                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                    <MenuItem onClick={handleDelete}>View</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack
        spacing={2}
        sx={{
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '20px',
        }}
      >
        <Pagination
          count={10} // Total number of pages
          page={currentPage} // Current active page
          onChange={handlePageChange} // Event handler for page change
          renderItem={(item) => (
            <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />
          )}
        />
      </Stack>

      {editingRow && (
        <Fab
          color="primary"
          aria-label="save"
          sx={{ position: 'fixed', bottom: 16, right: 16, color: '#fff' }}
          onClick={handleSave}
        >
          {isSaving ? (
            <CircularProgress size={24} color="inherit" />
          ) : isSaved ? (
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
