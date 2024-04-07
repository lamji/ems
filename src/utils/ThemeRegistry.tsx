/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState } from 'react';
import createCache from '@emotion/cache';
import { usePathname, useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';
import SideNav from '../components/SideNavbar';
import { theme } from './theme';

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export default function ThemeRegistry(props: any) {
  const pathname = usePathname();
  const { options, children } = props;
  const [{ cache, flush }] = useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: any = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });
  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {pathname === '/' ? (
          <>{children}</>
        ) : (
          <>
            <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
              <Grid item xs={12} md={0} position="fixed" sx={{ backgroundColor: 'primary.main' }}>
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
      </ThemeProvider>
    </CacheProvider>
  );
}
