import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const GridWithSearch: React.FC = () => {
const [searchText, setSearchText] = useState('');

const columnDefs: ColDef[] = [
{ headerName: 'ID', field: 'id' },
{ headerName: 'Name', field: 'name' },
{ headerName: 'Age', field: 'age' },
];

const rowData = [
{ id: 1, name: 'John Doe', age: 25 },
{ id: 2, name: 'Jane Smith', age: 30 },
{ id: 3, name: 'Sam Green', age: 35 },
];

return (
<div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
<input
type="text"
placeholder="Search..."
value={searchText}
onChange={(e) => setSearchText(e.target.value)}
/>
<AgGridReact
columnDefs={columnDefs}
rowData={rowData.filter(row => 
row.name.toLowerCase().includes(searchText.toLowerCase())
)}
/>
</div>
);
};

export default GridWithSearch;