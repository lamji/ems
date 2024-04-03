const fontSize = '14px';

export const useStyles = () => ({
  root: {},
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: 2,
    py: '5px',
    borderBottom: '1px solid #e5e4e4',
    marginBottom: '5px',
  },
  income: {
    fontSize: fontSize,
    textTransform: 'uppercase',
    marginRight: '20px',
    width: '90px',
  },
  title: {
    fontSize: fontSize,
    fontWeight: 700,
    width: '158px',
  },
  descriptionWrapper: {
    maxWidth: '190px',
  },
  incomeAmount: {
    fontSize: fontSize,
    fontWeight: 700,
    color: 'success.dark',
  },
  expenseAmount: {
    fontSize: fontSize,
    fontWeight: 700,
    color: 'error.dark',
  },
  date: {
    fontSize: fontSize,
    color: 'grey',
  },
  category: {
    width: '150px',
    textAlign: 'left',
  },
  descWrapper: {
    width: '200px',
  },
  firstWrapper: {
    width: '200px',
    display: 'flex',
    alignItems: 'center',
  },
  images: {
    marginRight: '10px',
  },
});
