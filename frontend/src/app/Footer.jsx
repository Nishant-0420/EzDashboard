'use client'
import React from 'react'
import { Text, Container, ActionIcon, Group,Image, rem,groups, Box } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';

import classes from './Footer.module.css'

const data = [
  
    {
      title: 'Project',
      links: [
        { label: 'Contribution', link: '/docs/contribution' },
        { label: 'Feedback', link: '/docs/navItems/Feedback' },
        { label: 'Releases', link: '/docs/Release-note/releasenote' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Follow on Instagram', link: '#' },
        { label: 'NPM', link: 'https://www.npmjs.com/package/ez-dashboard' },   
        { label: 'GitHub discussions', link: ' https://github.com/Nishant-0420/EzDashboard' },
      ],
    },
  ];
const Footer = () => {   
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
     
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
   });
        
  return (
    <footer className={classes.footer}>

     <Box py={30} style={{backgroundColor:'#00000'}}>
       <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image src='/image/logo.png' alt='library logo' style={{height: 85,width: 250}}/> 
            <Text size="xs" c="dimmed" className={classes.description}>
            Build fully functional accessible Dashboard faster than ever
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      </Box>
    
      <div style={{backgroundColor:'#00000'}}>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 EzDashboard  All rights reserved.
        </Text>

      </Container>
      </div>
    
    </footer>
  )
}

export default Footer