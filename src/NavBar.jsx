import { AppBar, Box, Toolbar, Typography, IconButton} from '@mui/material';

import InventorySharpIcon from '@mui/icons-material/InventorySharp';

export default function navBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <InventorySharpIcon />
          </IconButton>
          <Typography 
            variant="h5" 
            component="div" 
            sx={{ flexGrow: 1, textAlign:"center", fontWeight: 'bold' }}
          >
            Todo List
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}