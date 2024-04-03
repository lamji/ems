/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { NextPageContext } from 'next';

const ErrorPage = () => {
  const router = useRouter();

  console.log(router);

  useEffect(() => {
    // Redirect to dashboard if user visits 404 page
    // if (router.isFallback) return;
    router.push('/dashboard');
  }, [router]);

  return null; // Render nothing, as we're redirecting
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
