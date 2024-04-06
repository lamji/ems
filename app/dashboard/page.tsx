import React from 'react';
import Dashboard from '@/src/presentation/Dashborad';
import RootLayout from '../layout';

// export default function dashboardPage() {
//   return (
//     <div>
//       <Dashboard />
//     </div>
//   );
// }

function dashboardPage() {
  return <Dashboard />;
}

dashboardPage.getLayout = (page: React.ReactElement) => <RootLayout>{page}</RootLayout>;
export default dashboardPage;
