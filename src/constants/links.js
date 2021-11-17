import DashboardIcon from '@mui/icons-material/Dashboard'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import BusinessIcon from '@mui/icons-material/Business'

const data = [
  {
    id: 0,
    text: 'Dashboard',
    link: '/dashboard',
    icon: <DashboardIcon />,
  },
  {
    id: 1,
    text: 'User Profile',
    link: '/user',
    icon: <AccountCircleIcon />,
  },
  {
    id: 2,
    text: 'Cubicles',
    link: '/cubicles',
    icon: <BusinessIcon />,
  },
]

export default data
