export default function useStyles() {
  return {
    rootCategory: {
      width: '100%',
      maxWidth: 460,
      bgcolor: '#fefefe',
      borderRadius: '10px',
      padding: '5px',
      height: '400px',
      overflowY: 'auto', // Enable vertical scrolling
      scrollbarWidth: 'thin', // Add a thin scrollbar
      '&::-webkit-scrollbar': {
        width: '1em',
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'red',
        outline: '1px solid red',
        borderRadius: '8px',
      },
    },
    link: {
      width: '100%',
      color: 'inherit',
      textDecoration: 'none',
      borderRadius: '10px',
    },
    categoryListWrapper: {
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    images: {
      marginRight: '15px',
    },
  };
}
