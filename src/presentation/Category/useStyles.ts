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
  };
}
