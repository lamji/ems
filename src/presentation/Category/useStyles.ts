export default function useStyles() {
  return {
    root: {
      marginBottom: '50px',
    },
    filterWrapper: {
      display: 'flex',
      alignItems: 'center',
      my: 2,
      p: 1,
      border: '1px solid',
      borderColor: 'primary.main',
      width: '150px',
      borderRadius: '10px',
      cursor: 'pointer',
      backgroundColor: 'primary.light',
    },
    headerWrapper: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    balanceWrapper: {
      border: '1px solid',
      borderColor: 'primary.main',
      backgroundColor: 'primary.light',
      borderRadius: '10px',
      padding: '10px',
    },
    expenseWrapper: {
      border: '1px solid',
      borderColor: 'error.main',
      backgroundColor: 'rgba(225, 99, 71, 0.1);',
      borderRadius: '10px',
      padding: '10px',
    },
    filterBoxWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    chartWrapper: {
      backgroundColor: 'primary.contrastText',
      borderRadius: '10px',
      mb: '20px',
      padding: '20px',
      py: 3,
      width: '100%',
      overflowX: 'auto', // Enable horizontal scrolling
      overflowY: 'hidden', // Hide vertical scrolling
      maxWidth: '100%', // Ensure box takes full width of parent container
    },
  };
}
