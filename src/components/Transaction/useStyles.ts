const fontSize = '14px';

export const useStyles = () => ({
  root: {},
  primaryText: {
    fontSize: fontSize,
    marginRight: '10px',
  },
  container: {
    padding: '20px',
    width: {
      md: '600px',
      xs: '100%',
    },
    margin: '20px auto',
  },
  innerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    marginTop: '10px',
  },
  required: {
    color: 'red',
    marginLeft: '10px',
  },
  selectTransaction: {
    fontWeight: 600,
    marginBottom: '30px',
  },
  formContainer: {
    marginTop: '20px',
  },
  description: {
    fontSize: '12px',
    mt: 1,
  },
});
