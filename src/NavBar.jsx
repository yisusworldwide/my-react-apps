import { AppBar, Box, Toolbar, Typography, IconButton} from '@mui/material';

import InventorySharpIcon from '@mui/icons-material/InventorySharp';
import EmojiObjectsTwoToneIcon from '@mui/icons-material/EmojiObjectsTwoTone';

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
            sx={{ mr: 1.5 }}
          >
            <InventorySharpIcon />
          </IconButton>
          <Typography 
            variant="h5" 
            component="div" 
            sx={{ flexGrow: 1, textAlign:"auto", fontWeight: 'bold' }}
          >
           Todo List
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label= "menu"
            style={{ color: "#ffc93c" }}
            sx={{ mr: -2 }}
          >
            <EmojiObjectsTwoToneIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}