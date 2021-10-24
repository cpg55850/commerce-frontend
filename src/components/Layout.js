import React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Link } from 'react-router-dom'
import DrawerLinks from '../constants/links'
import { Alert, Avatar, Container, Snackbar, Stack } from '@mui/material'
import { useAuth } from '../context/AuthContext'
import { useAlert } from '../context/AlertContext'

const drawerWidth = 240

// Structure
// Box (Container)
// | - Appbar (Content Header)
// | - Drawer (Sidebar)
// |    - Toolbar (Sidebar Header)
// | - Box (Content)
const Layout = ({ children }) => {
	const { user } = useAuth()
	const { open, handleClose, alertMsg, alertType } = useAlert()

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			{/* Right - Content Header */}
			<AppBar
				position='fixed'
				sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
			>
				<Toolbar>
					<Avatar
						component={Link}
						to='/user'
						sx={{ ml: 'auto', textDecoration: 'none' }}
					>
						{user[0]?.toUpperCase()}
					</Avatar>
				</Toolbar>
			</AppBar>
			{/* Sidebar */}
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
						backgroundColor: 'primary.main',
						color: 'primary.contrastText',
					},
				}}
				variant='permanent'
				anchor='left'
			>
				{/* Sidebar Header */}
				<Toolbar>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ flexGrow: 1, display: { sm: 'block' } }}
					>
						Commerce Bank
					</Typography>
				</Toolbar>
				<Divider />
				<List>
					{DrawerLinks.map((item, index) => (
						<ListItem component={Link} to={item.link} button key={item.id}>
							<ListItemIcon sx={{ color: 'primary.contrastText' }}>
								{item.icon}
							</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItem>
					))}
				</List>
			</Drawer>
			{/* Content */}
			<Box
				component='main'
				sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
			>
				<Toolbar />

				<Container maxWidth='md'>
					<Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
						<Alert severity={alertType}>{alertMsg}</Alert>
					</Snackbar>

					{children}
				</Container>
			</Box>
		</Box>
	)
}

export default Layout
