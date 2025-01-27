import React from 'react';
import { AppBar, Toolbar, Typography, InputBase } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
position: 'relative',
borderRadius: theme.shape.borderRadius,
backgroundColor: alpha(theme.palette.common.white, 0.15),
'&:hover': {
backgroundColor: alpha(theme.palette.common.white, 0.25),
},
marginLeft: 0,
width: '100%',
[theme.breakpoints.up('sm')]: {
marginLeft: theme.spacing(1),
width: 'auto',
},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
padding: theme.spacing(0, 2),
height: '100%',
position: 'absolute',
pointerEvents: 'none',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
color: 'inherit',
'& .MuiInputBase-input': {
padding: theme.spacing(1, 1, 1, 0),
paddingLeft: `calc(1em + ${theme.spacing(4)})`,
transition: theme.transitions.create('width'),
width: '100%',
[theme.breakpoints.up('md')]: {
width: '20ch',
},
},
}));

const TopBar: React.FC = () => {
    return (
        <div className="topbar-search">
        <h1>Admin Panel</h1>
        <input type="text" placeholder="جستجو..." />
        </div>
        );
        };


export default TopBar;
