import { ActionIcon, Button, Container, Flex, Tabs, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react';
import classes from './header.module.css';
import { IconBrandGithub } from '@tabler/icons-react';
import Link from 'next/link';

const Header = () => {
  const tabs = [
    {
      value: 'DOCS',
      label: 'Docs',
      href: '/docs/navitems/Document',
    },
    {
      value: 'FEEDBACK',
      label: 'Feedback',
      href: '/docs/navitems/feedback',
    },
  ];

  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const items = tabs.map((tab) => {
    if (typeof tab === 'string') {
      return <Tabs.Tab value={tab} key={tab}>{tab}</Tabs.Tab>;
    } else {
      return (
        <Tabs.Tab value={tab.value} key={tab.value}>
          <a href={tab.href} target="_blank" rel="noopener noreferrer">
            {tab.label}
          </a>
        </Tabs.Tab>
      );
    }
  });

  return (
    <div>
      <Container size="md" style={{ paddingTop: 11, paddingBottom: 11 }}>
        <Flex justify="" align="center">
          <Flex justify="space-between" align="center" gap={5}>

            <Button variant='filled'>Docs</Button>
            <Button variant='filled'>Examples</Button>
          </Flex>
          <Flex justify="space-between" align="center">

            <ActionIcon variant='filled' color='dark' component={Link} href="">
              <IconBrandGithub />
            </ActionIcon>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
