export default function useStyles() {
  return {
    root: {},
    rootMobile: {},
    historyBox: {
      padding: '10px',
      borderRadius: '10px',
      boxShadow: '1px 1px 8px 0px rgba(0,0,0,0.10)',
      mt: 1,
      mb: 3,
    },
    tableContainer: {
      borderRadius: '10px',
      position: 'relative',
      backgroundColor: 'secondary.contrastText',
      p: 3,
      border: '1px solid',
      borderColor: 'secondary.dark',
    },
    columnsTableCell: {
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    actionsTableCell: {
      fontWeight: 'bold',
    },
    tableCellsInputBase: {
      border: '1px solid',
      borderColor: 'gray',
      color: '#777',
      width: '100%',
      padding: '5px 10px',
      borderRadius: '10px',
    },
    stack: {
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '20px',
    },
    fab: {
      position: 'fixed',
      bottom: 16,
      right: 16,
      color: '#fff',
    },
  };
}
