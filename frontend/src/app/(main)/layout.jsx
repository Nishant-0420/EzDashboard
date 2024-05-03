'use client';
import React from 'react'
import Navbar from './navbar';
import { useDisclosure } from '@mantine/hooks';
import AffixComponent from '../AffixComponent';

const MainLayout = ({ children }) => {

    const [opened, { toggle }] = useDisclosure();

    return (
        <>
          
            {/* <AffixComponent /> */}
            {children}
        </>
    )
}

export default MainLayout;