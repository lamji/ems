import { useState } from 'react';
import { useIsMobile } from '@/src/utils/helper';
import useStyles from './useStyles';
import { Row } from '@/src/utils/types/tableTypes';
import { dashboardData } from '@/src/utils/constants';

export default function useViewModel() {
  const { isMobilV1 } = useIsMobile();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRow, setSelectedRow] = useState<Row | null>(null);
  const [editingRow, setEditingRow] = useState<Row | null>(null);
  const [sortingColumn, setSortingColumn] = useState<string | null>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const sortActive = sortDirection === 'asc' || '';

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

  return {
    constants: {
      sortActive,
      isMobilV1,
      anchorEl,
      editingRow,
      isSaving,
      isSaved,
      currentPage,
      sortingColumn,
      sortDirection,
      handleMenuClose,
      dashboardData,
    },
    actions: {
      handleSave,
      handleSort,
      handleDelete,
      handleEdit,
      handleMenuOpen,
      setCurrentPage,
      handlePageChange,
    },
    classes,
  };
}
