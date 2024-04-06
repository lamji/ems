export default function useStyles() {
  return {
    root: {},
    mobileRoot: {
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80vh',
    },
    buttonWrapper: {
      backgroundColor: 'primary.main',
      padding: '10px',
      color: 'white',
      cursor: 'pointer',
      borderRadius: '10px',
      height: '100px',
      minWidth: '150px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        backgroundColor: 'primary.light',
      },
    },
    tableWrapper: {
      margin: '2px',
      borderRadius: '10px',
      padding: '10px',
      my: 2,
    },
    tableButton: {
      fontSize: 'inherit',
      p: 0,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      mt: 2,
      textTransform: 'lowercase',
    },
  };
}
