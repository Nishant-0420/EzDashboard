'use client';
import { Container, Tabs, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react'
import classes from './header.module.css'; 

const Header = () => {
    const tabs = [
        'DOCS',
        'User',
        'Enterprise',
        'Feedback',
    ];

    const theme = useMantineTheme();
    const [opened, { toggle }] = useDisclosure(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);

    const items = tabs.map((tab) => (
        <Tabs.Tab value={tab} key={tab}>
            {tab}
        </Tabs.Tab>
    ));
    return (
        <div>
        
        
            <Container size="md">
                <Tabs
                  
                    defaultValue="Home"
                    variant="outline"
                    visibleFrom="sm"
                    classNames={{
                        root: classes.tabs,
                        list: classes.tabsList,
                        tab: classes.tab,
                    }}
                >
                    <Tabs.List>{items}</Tabs.List>
                </Tabs>
            </Container>
        </div>
    )
}

export default Header
