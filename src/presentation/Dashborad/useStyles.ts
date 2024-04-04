export default function useStyles() {
  return {
    root: {},
    transactionsWrapper: {
      padding: {
        md: 2,
      },
    },
    searchWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    PaperSx: {
      p: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: {
        xs: 300,
        md: 400,
      },
      boxShadow: 'none',
      // backgroundColor: "#f1f1f1",
      border: '1px solid',
      borderColor: 'primary.main',
    },
    iconSx: {
      p: '10px',
      backgroundColor: 'success.dark',
      marginRight: '5px',
      color: 'white',
      '&:hover': {
        backgroundColor: 'success.main',
      },
    },
  };
}
