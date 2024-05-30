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
      boxShadow: 'none',
      width: '100%',
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
    amountCardWrapper: {
      mb: 4,
      padding: '10px 25px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    amountCard: {
      padding: '10px',
      mx: 2,
      borderRadius: '10px',
      width: '30%',
      height: '100px',
      border: '1px solid',
    },
  };
}
