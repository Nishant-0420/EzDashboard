import { ActionIcon, Button, Container, Flex, Tabs, useMantineTheme,Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react';
import classes from './Header.module.css';
import { useRouter } from 'next/navigation';
import { IconBrandGithub,IconBrandTwitter,IconBrandNpm,IconBrandInstagram } from '@tabler/icons-react';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();
  const theme = useMantineTheme();

  return (
    <div>
      <Container size="full" style={{ paddingTop: 11, paddingBottom: 11 , paddingLeft: 20 , paddingRight: 20}} >
         
        <Flex justify="space-between" align="center" gap={10}>
<Image src='/image/logo.png' alt='library logo' style={{height: 80,width: 300}}/>
          <Flex justify="space-between" align="center" gap={15}>

            <Button variant='filled' onClick={()=>router.push('/login')} >login</Button>
            <Button variant='filled' onClick={()=>router.push('/contact')}>Contact</Button>
            <Button variant='filled' onClick={()=>router.push('/docs/navItems/Feedback')} >Feedback</Button>
          
            <ActionIcon variant='filled' color='dark' component={Link} href=" https://github.com/Nishant-0420/EzDashboard">
              <IconBrandGithub />
            </ActionIcon>
            <ActionIcon variant='filled' color='dark' component={Link} href="">
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