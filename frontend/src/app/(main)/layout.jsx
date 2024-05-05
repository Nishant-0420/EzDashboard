'use client';
import React from 'react'

import { useDisclosure } from '@mantine/hooks';
import AffixComponent from '../AffixComponent';

const MainLayout = ({ children }) => {

    const [opened, { toggle }] = useDisclosure();

    return (
        
            {children}
       
    )
}

export default MainLayout;