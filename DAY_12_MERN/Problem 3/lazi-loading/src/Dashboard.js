// Dashboard.js

import React from 'react';

const LazyCharts = React.lazy(() => import('./Charts'));

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Suspense fallback={<div>Loading Charts...</div>}>
        <LazyCharts />
      </Suspense>
    </div>
  );
}

export default Dashboard;
