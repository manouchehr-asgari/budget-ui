import React from 'react';

const Sidebar: React.FC = () => {
return (
<div className="sidebar">
<div className="logo">
<img src="/path/to/your/logo.png" alt="Logo" />
</div>
<nav>
<ul>
<li><a href="/dashboard">داشبورد</a></li>
<li><a href="/users">کاربران</a></li>
<li><a href="/settings">تنظیمات</a></li>
{/* Add more navigation links as needed */}
</ul>
</nav>
</div>
);
};

export default Sidebar;
