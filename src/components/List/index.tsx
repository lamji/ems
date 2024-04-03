/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';
import { Divider, Typography } from '@mui/material';
import ViewModel from './viewModel';
import { ListSideNav2 } from '@/src/utils/constants';

// Import MUI icons for categories

export default function BasicList() {
  const { classes, activeItem, handleListClick } = ViewModel();

  return (
    <Box>
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <Link href="/dashboard" passHref style={classes.link}>
              <ListItemButton
                onClick={() => handleListClick()}
                sx={{
                  borderRadius: '10px',
                  backgroundColor: activeItem === '/dashboard' ? 'primary.dark' : 'inherit',
                  '&:hover': {
                    backgroundColor: activeItem === '/dashboard' ? 'primary.dark' : '#ccc',
                  },
                }}
              >
                <DashboardIcon style={{ marginRight: '10px' }} />{' '}
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </Link>
          </ListItem>
          <Divider sx={{ mb: '10px' }} />
          <Box sx={classes.categoryListWrapper}>
            <Typography>Expenses Category List</Typography>
          </Box>

          <Box sx={classes.rootCategory} className="sideBarCustom">
            {ListSideNav2.map((item: any, idx: number) => {
              return (
                <ListItem disablePadding key={idx}>
                  <Link href={item.url} passHref style={classes.link}>
                    <ListItemButton
                      onClick={() => handleListClick()}
                      sx={{
                        borderRadius: '10px',
                        mb: '5px',
                        backgroundColor: activeItem === item.url ? 'primary.dark' : 'inherit',
                        '&:hover': {
                          backgroundColor: activeItem === item.url ? 'primary.dark' : '#ccc',
                        },
                      }}
                    >
                      {item.icon} {/* Include the MUI icon */}
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              );
            })}
          </Box>
          <ListItem disablePadding sx={{ mt: 2 }}>
            <Link href="/setting" passHref style={classes.link}>
              <ListItemButton
                onClick={() => handleListClick()}
                sx={{
                  borderRadius: '10px',
                  backgroundColor: activeItem === '/setting' ? 'primary.dark' : 'inherit',
                  '&:hover': {
                    backgroundColor: activeItem === '/setting' ? 'primary.dark' : '#ccc',
                  },
                }}
              >
                <SettingsIcon style={{ marginRight: '10px' }} />{' '}
                <ListItemText primary="Configuration" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding sx={{ mb: 2 }}>
            <Link href="/logout" passHref style={classes.link}>
              <ListItemButton
                onClick={() => handleListClick()}
                sx={{
                  borderRadius: '10px',
                  '&:hover': {
                    backgroundColor: '#ccc',
                  },
                }}
              >
                <LogoutIcon style={{ marginRight: '10px' }} /> <ListItemText primary="Logout" />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
