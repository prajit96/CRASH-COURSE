import React, { Suspense } from 'react';

const LazyCharts = React.lazy(() => import('./Charts'));

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyCharts />
      </Suspense>
    </div>
  );
}

export default App;
