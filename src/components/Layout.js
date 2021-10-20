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
import { Avatar, Container } from '@mui/material'
import { useAuth } from '../context/AuthContext'

const drawerWidth = 240

// Structure
// Box (Container)
// | - Appbar (Content Header)
// | - Drawer (Sidebar)
// |    - Toolbar (Sidebar Header)
// | - Box (Content)
const Layout = ({ children }) => {
	const { user } = useAuth()

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
				{/* <Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
					dolor purus non enim praesent elementum facilisis leo vel. Risus at
					ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
					quisque non tellus. Convallis convallis tellus id interdum velit
					laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
					adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
					integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
					eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
					quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
					vivamus at augue. At augue eget arcu dictum varius duis at consectetur
					lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
					faucibus et molestie ac.
				</Typography> */}
				<Container maxWidth='md'>{children}</Container>
				{/* <Buttons />
				<FAB />
				<DateTime /> */}
			</Box>
		</Box>
	)
}

export default Layout
