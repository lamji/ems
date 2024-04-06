/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ViewModel from './viewModel';
import { ListSideNav2 } from '@/src/utils/constants';
import Image from 'next/image';
import { customTheme } from '@/src/utils/theme';
import CategoryIcon from '@mui/icons-material/Category';

export default function BasicList() {
  const { classes, activeItem, handleListClick } = ViewModel();
  const [isExpensesOpen, setIsExpensesOpen] = useState(false);

  const handleExpensesClick = () => {
    setIsExpensesOpen(!isExpensesOpen);
  };

  return (
    <Box>
      <nav aria-label="secondary mailbox folders">
        <List>
          <Link href="/dashboard" passHref style={classes.link}>
            <ListItemButton
              onClick={() => handleListClick()}
              sx={{
                borderRadius: '10px',
                color: activeItem === '/dashboard' ? 'white' : 'unset',
                backgroundColor: activeItem === '/dashboard' ? 'primary.dark' : 'inherit',
                '&:hover': {
                  backgroundColor: activeItem === '/dashboard' ? 'primary.dark' : '#ccc',
                },
              }}
            >
              <DashboardIcon style={{ marginRight: '10px' }} />
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </Link>

          <Link href="/setting" passHref style={classes.link}>
            <ListItemButton
              onClick={() => handleListClick()}
              sx={{
                borderRadius: '10px',
                color: activeItem === '/setting' ? 'white' : 'unset',
                backgroundColor: activeItem === '/setting' ? 'primary.dark' : 'inherit',
                '&:hover': {
                  backgroundColor: activeItem === '/setting' ? 'primary.dark' : '#ccc',
                },
              }}
            >
              <SettingsIcon style={{ marginRight: '10px' }} />
              <ListItemText primary="Configuration" />
            </ListItemButton>
          </Link>

          {/* Expenses Category List */}
          <Accordion
            expanded={isExpensesOpen}
            onChange={handleExpensesClick}
            sx={{
              borderRadius: '10px',
              backgroundColor: 'inherit',
              marginTop: '5px',
            }}
            elevation={0}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <CategoryIcon style={{ marginRight: '10px' }} />
              <Typography>Expenses Category</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                ...classes.rootCategory,
                paddingLeft: '40px',
                background: '#e8effc',
                borderRadius: '10px',
                height: '400px',
                overflowY: 'auto', // Enable vertical scrolling
              }}
            >
              <List>
                {ListSideNav2.map((item: any, idx: number) => (
                  <Link href={item.url} passHref style={classes.link} key={idx}>
                    <ListItemButton
                      onClick={() => handleListClick()}
                      sx={{
                        borderRadius: '10px',
                        color: activeItem === item.url ? 'white' : 'unset',
                        mb: '5px',
                        backgroundColor:
                          activeItem === item.url ? customTheme.palette.primary.dark : 'inherit',
                        '&:hover': {
                          backgroundColor: activeItem === item.url ? 'primary.light' : '#ccc',
                        },
                      }}
                    >
                      <Box>
                        <Image
                          src={item.icon}
                          width={24}
                          height={24}
                          alt="Picture of the author"
                          style={classes.images}
                        />
                      </Box>
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </Link>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

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
              <LogoutIcon style={{ marginRight: '10px' }} />
              <ListItemText primary="Logout" />
            </ListItemButton>
          </Link>
        </List>
      </nav>
    </Box>
  );
}
