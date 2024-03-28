'use client';
import React from 'react'
import Navbar from './navbar';
import { useDisclosure } from '@mantine/hooks';

const MainLayout = ({ children }) => {

    const [opened, { toggle }] = useDisclosure();

    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default MainLayout;