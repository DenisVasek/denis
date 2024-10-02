"use client";

import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Link from 'next/link';

const Navbar = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation
            value={value}
            onChange={handleChange}
            showLabels
            sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        >
            <BottomNavigationAction
                label="Domov" // Home
                icon={<HomeIcon />}
                component={Link}
                href="/"
            />
            <BottomNavigationAction
                label="Profily" // Profiles
                icon={<PersonIcon />}
                component={Link}
                href="/profil"
            />
            <BottomNavigationAction
                label="Príspevky" // Posts
                icon={<PostAddIcon />}
                component={Link}
                href="/prispevok"
            />
            <BottomNavigationAction
                label="Prihlásenie" // Login
                icon={<LoginIcon />}
                component={Link}
                href="/auth/prihlasenie"
            />
            <BottomNavigationAction
                label="Registrácia" // Register
                icon={<HowToRegIcon />}
                component={Link}
                href="/auth/registracia"
            />
        </BottomNavigation>
    );
};

export default Navbar;
