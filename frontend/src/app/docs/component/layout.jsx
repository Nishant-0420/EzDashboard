'use client';
import { AppShell, Box } from '@mantine/core'
import React from 'react'
import Aside from '../Aside'
import { usePathname } from 'next/navigation';

const Layout = ({ children }) => {
    
    const pathname = usePathname();

    return (
        <>
        <Box w={pathname.includes('component') ? '90%' : '100%'}>
        {children}
        </Box>
            <AppShell.Aside p="md" >
                <Aside />
            </AppShell.Aside>
        </>
    )
}

export default Layout