'use client';
import { AppShell } from '@mantine/core'
import React from 'react'
import Aside from '../Aside'

const Layout = ({ children }) => {
    return (
        <>{children}
            <AppShell.Aside p="md" >
                <Aside />
            </AppShell.Aside>
        </>
    )
}

export default Layout