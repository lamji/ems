'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Grid } from '@mui/material';
import SideNav from '@/src/components/SideNavbar';

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: true,
            retry: 3,
            // 5 minutes
            staleTime: 5 * (60 * 1000),
            // 10 minutes
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {pathname === '/' ? (
        <>{children}</>
      ) : (
        <>
          <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
            <Grid item xs={12} md={0} position="fixed" sx={{ background: 'red' }}>
              <SideNav />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                padding: {
                  md: '10px',
                  xs: 0,
                },
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
        </>
      )}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
