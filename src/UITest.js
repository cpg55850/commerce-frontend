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
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import Buttons from './TestComponents/Buttons'
import FAB from './TestComponents/FAB'
import DateTime from './TestComponents/DateTime'

const drawerWidth = 240

// Structure
// Box (Container)
// | - Appbar (Content Header)
// | - Drawer (Sidebar)
// |    - Toolbar (Sidebar Header)
// | - Box (Content)
const UITest = () => {
	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			{/* Right - Content Header */}
			<AppBar
				position='fixed'
				sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
			>
				<Toolbar>
					<Typography variant='h6' noWrap component='div'>
						Dashboard
					</Typography>
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
					{['Dashboard', 'User Profile', 'Cubicles', 'Logout'].map(
						(text, index) => (
							<ListItem button key={text}>
								<ListItemIcon sx={{ color: 'primary.contrastText' }}>
									{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						)
					)}
				</List>
			</Drawer>
			{/* Content */}
			<Box
				component='main'
				sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
			>
				<Toolbar />
				<Typography paragraph>
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
				</Typography>
				<Buttons />
				<FAB />
				<DateTime />
			</Box>
		</Box>
	)
}

export default UITest
