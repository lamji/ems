/** @format */

export const useStyles = () => ({
  root: {},
  container: {
    padding: '10px',
    height: 'auto',
  },
  head: {
    color: 'primary.main',
  },
  incomeExpenseWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    padding: '10px',
    borderRadius: 2,
    background: 'rgba(76, 175, 80, 0.1)',
    height: '200px',
    border: '1px solid',
    borderColor: 'rgba(76, 175, 80, 0.4)',
  },
  redCard: {
    padding: '10px',
    borderRadius: 2,
    background: 'rgba(225, 99, 71, 0.1)',
    height: '200px',
    border: '1px solid',
    borderColor: 'rgba(225, 99, 71, 0.4)',
  },
  cardHeader: {
    fontWeight: 700,
    marginBottom: '10px',
  },
  cardSubHeaderIncome: {
    fontSize: '13px',
    color: 'success.dark',
    marginTop: '10px',
    fontWeight: 700,
  },
  cardSubHeaderExpense: {
    fontSize: '13px',
    color: 'error.dark',
    marginTop: '10px',
    fontWeight: 700,
  },
  incomeAmount: {
    color: 'success.dark',
    marginTop: '10px',
    fontWeight: 700,
    fontSize: {
      md: '26px',
      xs: '18px',
    },
  },
  expenseAmount: {
    color: 'error.dark',
    marginTop: '10px',
    fontWeight: 700,
    fontSize: {
      md: '26px',
      xs: '18px',
    },
  },
});
