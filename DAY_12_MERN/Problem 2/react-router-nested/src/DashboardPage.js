// DashboardPage.js

import React from 'react';
import { Route, Link, useParams, Routes } from 'react-router-dom';
import Profile from './Profile';
import Settings from './Settings';

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <ul>
        <li>
          <Link to="/dashboard/profile">Profile</Link>
        </li>
        <li>
          <Link to="/dashboard/settings">Settings</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/dashboard/profile" component={Profile} />
        <Route path="/dashboard/settings" component={Settings} />
        <Route path="/dashboard/:section" children={<Child />} />
      </Routes>
    </div>
  );
}

function Child() {
  let { section } = useParams();

  return <h3>{section}</h3>;
}

export default DashboardPage;
