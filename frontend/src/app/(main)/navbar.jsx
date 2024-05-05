'use client';
import { useState } from 'react';
import { Container, Group, Burger, Title, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const links = [
  { link: '/about' , label: 'About' },
  { link: '/contact', label: 'Contact' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const router = useRouter();
  console.log(window.location.pathname);

  const items = links.map((link) => (
    <Button
    component={Link}
      key={link.label}
      href={link.link}
      className={classes.link}
      variant={window.location.pathname === link.link ? 'filled' : 'transparent'}
    >
      {link.label}
    </Button>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Title order={3} onClick={() => router.push('/')}>EzDashboard</Title>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
export default Navbar;