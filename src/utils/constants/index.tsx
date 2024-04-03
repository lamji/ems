import FastfoodIcon from '@mui/icons-material/Fastfood';
import FlightIcon from '@mui/icons-material/Flight';
import HomeIcon from '@mui/icons-material/Home';
import CarIcon from '@mui/icons-material/DriveEta';
import ShoppingIcon from '@mui/icons-material/ShoppingCart';
import FitnessIcon from '@mui/icons-material/FitnessCenter';
import WorkIcon from '@mui/icons-material/Work';
import EntertainmentIcon from '@mui/icons-material/LocalMovies';
import HealthIcon from '@mui/icons-material/FitnessCenter';
import EducationIcon from '@mui/icons-material/School';

export const dashboardData = {
  _id: '64984dbb980a584a90733efd',
  categories: [
    {
      dateAdded: '2023-09-30T12:50:07.772Z',
      totalBudget: 20000,
      totalSpend: 0,
      _id: '65181bfab135704b209266ef',
      categoryName: 'House',
    },
    {
      dateAdded: '2023-09-30T14:19:13.285Z',
      totalBudget: 0,
      totalSpend: 0,
      _id: '65183f6e42701e004cb85272',
      categoryName: 'Food',
    },
  ],
  fullName: 'Jick Lampago',
  email: 'debugMe2@gmail.com',
  image: 'https://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
  balance: 9910,
  expenses: 100,
  EmailRecovery: '',
  loginType: 'Email',
  transactions: [
    {
      description: 'Test2',
      dateAdded: '2023-06-26T14:31:29.406Z',
      isActive: true,
      _id: '6499a2a1d2ee090adcfaa44b',
      categoryName: 'Allowance',
      type: 'Income',
      amount: 10000,
      balanceAfterTransaction: 30000,
    },
    {
      description: 'Test money',
      dateAdded: '2023-09-22T14:59:18.563Z',
      isActive: true,
      _id: '650dad6ee43d5b1ae825ea86',
      categoryName: 'Salary',
      type: 'Income',
      amount: 10,
      balanceAfterTransaction: 10010,
    },
    {
      description: 'description',
      dateAdded: '2023-09-30T08:24:24.620Z',
      isActive: true,
      _id: '6517db4450e9cb2b04ada2c6',
      categoryName: 'Food',
      type: 'Expenses',
      amount: 100,
    },
  ],
  __v: 32,
  income: 10010,
  savings: [],
  monthlyIncomeSummary: [
    {
      month: 'January 2024',
      totalTransactions: 0,
      monthCode: 1,
    },
    {
      month: 'February 2024',
      totalTransactions: 0,
      monthCode: 2,
    },
    {
      month: 'March 2024',
      totalTransactions: 0,
      monthCode: 3,
    },
    {
      month: 'April 2024',
      totalTransactions: 0,
      monthCode: 4,
    },
    {
      month: 'May 2024',
      totalTransactions: 0,
      monthCode: 5,
    },
    {
      month: 'June 2023',
      totalTransactions: 10000,
      monthCode: 6,
    },
    {
      month: 'June 2024',
      totalTransactions: 0,
      monthCode: 6,
    },
    {
      month: 'July 2024',
      totalTransactions: 0,
      monthCode: 7,
    },
    {
      month: 'August 2024',
      totalTransactions: 0,
      monthCode: 8,
    },
    {
      month: 'September 2023',
      totalTransactions: 10,
      monthCode: 9,
    },
    {
      month: 'September 2024',
      totalTransactions: 0,
      monthCode: 9,
    },
    {
      month: 'October 2024',
      totalTransactions: 0,
      monthCode: 10,
    },
    {
      month: 'November 2024',
      totalTransactions: 0,
      monthCode: 11,
    },
    {
      month: 'December 2024',
      totalTransactions: 0,
      monthCode: 12,
    },
  ],
  monthlyExpensesSummary: [
    {
      month: 'January 2024',
      totalTransactions: 0,
      monthCode: 1,
    },
    {
      month: 'February 2024',
      totalTransactions: 0,
      monthCode: 2,
    },
    {
      month: 'March 2024',
      totalTransactions: 0,
      monthCode: 3,
    },
    {
      month: 'April 2024',
      totalTransactions: 0,
      monthCode: 4,
    },
    {
      month: 'May 2024',
      totalTransactions: 0,
      monthCode: 5,
    },
    {
      month: 'June 2024',
      totalTransactions: 0,
      monthCode: 6,
    },
    {
      month: 'July 2024',
      totalTransactions: 0,
      monthCode: 7,
    },
    {
      month: 'August 2024',
      totalTransactions: 0,
      monthCode: 8,
    },
    {
      month: 'September 2023',
      totalTransactions: 100,
      monthCode: 9,
    },
    {
      month: 'September 2024',
      totalTransactions: 0,
      monthCode: 9,
    },
    {
      month: 'October 2024',
      totalTransactions: 0,
      monthCode: 10,
    },
    {
      month: 'November 2024',
      totalTransactions: 0,
      monthCode: 11,
    },
    {
      month: 'December 2024',
      totalTransactions: 0,
      monthCode: 12,
    },
  ],
};

export const ListSideNav2 = [
  {
    id: 1,
    label: 'Restaurants',
    name: 'restaurants',
    url: '/category/restaurants',
    icon: <FastfoodIcon />,
  },
  {
    id: 2,
    label: 'Flights',
    name: 'flights',
    url: '/category/flights',
    icon: <FlightIcon />,
  },
  {
    id: 3,
    label: 'Home Expenses',
    name: 'home-expenses',
    url: '/category/home-expenses',
    icon: <HomeIcon />,
  },
  {
    id: 4,
    label: 'Car Rentals',
    name: 'car-rentals',
    url: '/category/car-rentals',
    icon: <CarIcon />,
  },
  {
    id: 5,
    label: 'Shopping',
    name: 'shopping',
    url: '/category/shopping',
    icon: <ShoppingIcon />,
  },
  {
    id: 6,
    label: 'Fitness',
    name: 'fitness',
    url: '/category/fitness',
    icon: <FitnessIcon />,
  },
  {
    id: 7,
    label: 'Work Expenses',
    name: 'work-expenses',
    url: '/category/work-expenses',
    icon: <WorkIcon />,
  },
  {
    id: 8,
    label: 'Entertainment',
    name: 'entertainment',
    url: '/category/entertainment',
    icon: <EntertainmentIcon />,
  },
  {
    id: 9,
    label: 'Healthcare',
    name: 'healthcare',
    url: '/category/healthcare',
    icon: <HealthIcon />,
  },
  {
    id: 10,
    label: 'Education',
    name: 'education',
    url: '/category/education',
    icon: <EducationIcon />,
  },
];

export const ListSideNav = [
  {
    id: 1,
    label: 'Category 1',
    name: 'category 1',
    url: '/category/1',
  },
  {
    id: 2,
    label: 'Category 2',
    name: 'category 2',
    url: '/category/2',
  },
];
