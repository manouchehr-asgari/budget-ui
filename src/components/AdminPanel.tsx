import React from 'react';
import Sidebar from './Sidebar';
import GridWithSearch from './GridWithSearch';
import TopBar from './TopBar';

const AdminPanel: React.FC = () => {
return (
<div className="admin-panel">
<Sidebar />
<div className="main-content">
<TopBar />
<GridWithSearch />
{/* Other main content here */}
</div>
</div>
);
};

export default AdminPanel;