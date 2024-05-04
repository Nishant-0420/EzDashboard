import { ActionIcon, Button, Container, Flex, Tabs, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react';
import classes from './header.module.css';
import { usePathname, useRouter } from 'next/navigation';
import { IconBrandGithub, IconBrandTwitter, IconBrandNpm } from '@tabler/icons-react';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();
  const theme = useMantineTheme();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <Container size="md" style={{ paddingTop: 11, paddingBottom: 11, paddingRight: pathname.includes('component') ? 100 : 20 }} >
        <Flex justify="right" align="center" gap={7}>
          <Flex justify="space-between" align="center" gap={10}>

            <Button variant='filled' onClick={() => router.push('/docs/navItems/Document')} >Docs</Button>
            <Button variant='filled' onClick={() => router.push('/docs/navItems/About')}>About</Button>
            <Button variant='filled' onClick={() => router.push('/docs/navItems/Feedback')} >Feedback</Button>
          </Flex>
          <Flex justify="space-between" align="center" gap={10}>

            <ActionIcon variant='filled' color='dark' component={Link} href="">
              <IconBrandGithub />
            </ActionIcon>
            <ActionIcon variant='filled' color='dark' component={Link} href="">
              <IconBrandTwitter />
            </ActionIcon>
            <ActionIcon variant='filled' color='dark' component={Link} href="">
              <IconBrandNpm />
            </ActionIcon>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
