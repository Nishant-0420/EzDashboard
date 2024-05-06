import { ActionIcon, Button, Container, Flex, Tabs, useMantineTheme,Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react';
import classes from './header.module.css';
import { useRouter } from 'next/navigation';
import { IconBrandGithub,IconBrandTwitter,IconBrandNpm } from '@tabler/icons-react';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();
  const theme = useMantineTheme();

  return (
    <div>
      <Container size="md" style={{ paddingTop: 11, paddingBottom: 11,}} >
         
        <Flex justify="space-around" align="center" gap={7}>
<Image src='/image/logo.png' alt='library logo' style={{height: 60,width: 290}}/>
          <Flex justify="space-between" align="center" gap={10}>

            <Button variant='filled' onClick={()=>router.push('/docs/navItems/Document')} >Docs</Button>
            <Button variant='filled' onClick={()=>router.push('/docs/navItems/About')}>About</Button>
            <Button variant='filled' onClick={()=>router.push('/docs/navItems/Feedback')} >Feedback</Button>
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
