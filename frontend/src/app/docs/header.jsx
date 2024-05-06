import { ActionIcon, Button, Container, Flex, Tabs, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react';
import classes from './header.module.css';
import { usePathname, useRouter } from 'next/navigation';
import { IconBrandGithub, IconBrandTwitter, IconBrandNpm, IconBrandInstagram } from '@tabler/icons-react';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();
  const theme = useMantineTheme();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div  >
      <Container size="xl" style={{ paddingTop: 9, paddingBottom: 18,paddingRight:70 , paddingLeft:50}} >
        <Flex justify="right" align="center" gap={12}>
          <Flex justify="space-between" align="center" gap={12}>

            <Button variant='filled' onClick={() => router.push('/docs/navItems/Document')} >Docs</Button>
            <Button variant='filled' onClick={() => router.push('/docs/navItems/About')}>About</Button>
            <Button variant='filled' onClick={() => router.push('/docs/navItems/Feedback')} >Feedback</Button>
          </Flex>
          <Flex justify="space-between" align="center" gap={12}>

            <ActionIcon variant='filled' color='dark' component={Link} href="https://github.com/Nishant-0420/EzDashboard">
              <IconBrandGithub />
            </ActionIcon>
            <ActionIcon variant='filled' color='dark' component={Link} href="https://www.instagram.com/ez_dashboard_?igsh=cGFtYXIwcGl5ZHNh">
              <IconBrandInstagram />
            </ActionIcon>
            <ActionIcon variant='filled' color='dark' component={Link} href="https://www.npmjs.com/package/ez-dashboard">
              <IconBrandNpm />
            </ActionIcon>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
