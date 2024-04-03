import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Grid } from '@mui/material';
import ThemeRegistry from '@/src/utils/ThemeRegistry';
import SideNav from '@/src/components/SideNavbar';
import { Providers } from '@/src/utils/redux/provider';
import ReactQueryProvider from '@/src/utils/query/ReactQueryProvider';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ReactQueryProvider>
            <ThemeRegistry options={{ key: 'mui-theme' }}>
              <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
                <Grid
                  item
                  xs={12}
                  md={0}
                  bgcolor="primary.light"
                  position="fixed"
                  sx={{ width: '250px' }}
                >
                  <SideNav />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{
                    padding: '10px',
                    ml: '20px',
                    marginLeft: {
                      xs: 0,
                      md: '260px',
                    },
                  }}
                >
                  {children}
                </Grid>
              </Grid>
            </ThemeRegistry>
          </ReactQueryProvider>
        </Providers>
      </body>
    </html>
  );
}
