export const useStyles = () => ({
  container: {},
  button: {
    marginTop: '20px',
  },
  selectBox: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'primary',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '15px',
  },
  muiPaperRoot: {
    '.MuiPaper-root': {
      marginTop: '6px',
      maxHeight: '200px',
      overFlow: 'scroll',
      width: {
        md: '560px',
        xs: '100%',
      },
    },
  },
  helper: {
    color: 'error.main',
    fontSize: '11px',
    mt: '5px',
  },
  imageWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  imageStyles: {
    marginRight: '10px',
  },
  amount: {
    fontSize: '12px',
    marginLeft: '10px',
  },
});
