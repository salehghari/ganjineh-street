import { Button, Typography, Toolbar, ListItemText, ListItemButton, ListItem, List, IconButton, Drawer, Divider, CssBaseline, Box, AppBar } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import { Slide, useScrollTrigger } from '@mui/material';
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    text: "چطوری بازی کنم؟",
    link: "#how-to-play"
  },
  {
    text: "تماس با ما",
    link: "contact-us"
  },
  {
    text: "درباره ما",
    link: "#about-us"
  }
];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <div className="flex flex-col items-center mt-1 mb-2">
        <Link href="/" className="flex flex-col items-center">
          <Image src="/brand-logo.png" alt="logo" width="56" height="56" />
          <Typography className="text-sm text-gray-600" variant="subtitle2">
            گنجینه‌استریت
          </Typography>
        </Link>
      </div>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.link} disablePadding>
            <Link className="w-full" href={`/${item.link}`}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Slide className="border-b border-gray-400/30 shadow-none bg-black/5 backdrop-blur-md" appear={false} direction="down" in={!trigger}>
        <AppBar component="nav">
          <Toolbar className="sm:px-12">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' }, color: "#000" }}
            >
              <MenuIcon />
            </IconButton>
            <Link className="max-[599px]:hidden"  href="/">
              <Image src="/brand-logo.png" alt="logo" width="56" height="56" />
            </Link>
            <Box sx={{ display: { xs: 'none', sm: 'block' }, marginRight: 3 }}>
              {navItems.map((item) => (
                <Link className="mx-2" key={item.link} href={`/${item.link}`}>
                  <Button sx={{ color: '#000' }}>
                    {item.text}
                  </Button>
                </Link>
              ))}
            </Box>
            <div className="flex-1 flex justify-end">
              <Link href="/sign-up">
                <Button className="max-[599px]:py-1 py-2 px-3 main-bg-color main-bg-hover rounded-full" variant="contained" endIcon={<AccountCircleIcon className="-ml-2 mr-2" />}>ورود / ثبت نام</Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </Slide>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}
