export const useStyles = () => ({
  container: {
    textAlign: 'center',
    backgroundColor: 'primary.light',
    width: {
      md: '130px',
      xs: '150px',
    },
    borderRadius: '10px',
    padding: '10px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  containerActive: {
    textAlign: 'center',
    backgroundColor: 'primary.dark',
    color: 'primary.contrastText',
    width: {
      md: '130px',
      xs: '150px',
    },
    borderRadius: '10px',
    padding: '10px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  description: {
    fontSize: '10px',
  },
  title: {
    fontSize: '13px',
    fontWeight: 700,
  },
});
