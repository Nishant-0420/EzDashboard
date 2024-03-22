'use client';
import React from 'react'
import Navbar from './navbar';
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const MainLayout = ({ children }) => {

    const [opened, { toggle }] = useDisclosure();

    return (
        <>
            

            <AppShell
                header={{ height: 60 }}
                navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
                padding="md"
            >
                <AppShell.Header>
                <Navbar />
                </AppShell.Header>
                <AppShell.Navbar p="md">
                    
                </AppShell.Navbar>
                <AppShell.Main>{children}</AppShell.Main>
            </AppShell>
        </>
    )
}

export default MainLayout;