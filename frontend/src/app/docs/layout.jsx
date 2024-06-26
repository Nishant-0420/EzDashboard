'use client';
import React from 'react'
import Navbar from './navbar';
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Header from './header';
import AffixComponent from '../AffixComponent';

const DocsLayout = ({ children }) => {

    const [opened, { toggle }] = useDisclosure();

    return (
        <>
            <AffixComponent />

            <AppShell
                header={{ height: 60 }}
                navbar={{ width: 250, breakpoint: 'sm', collapsed: { mobile: !opened } }}
                // aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
                // sidebar={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
                padding="md"
                layout='alt'
            >
                <AppShell.Header>
                    <Header />
                </AppShell.Header>
                <AppShell.Navbar>
                    <Navbar />
                </AppShell.Navbar>
                {/* <AppShell.Aside p="md">
                    <Aside/>
                </AppShell.Aside> */}
                {/* <AppShell.Sidebar p="md">
                    <Sidebar />
                </AppShell.Sidebar> */}

                <AppShell.Main>{children}</AppShell.Main>
            </AppShell>
        </>
    )
}

export default DocsLayout;