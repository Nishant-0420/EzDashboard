import { Group, Code, ScrollArea, rem, Title } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
import { UserButton } from './UserButton/UserButton';
import { LinksGroup } from './NavbarLinkgroup/NavbarLinkGroup';
import { Logo } from './logo';
import classes from './navbarNested.module.css';

const mockdata = [
  { label: 'API reference ', icon: IconGauge },
  {
    label: 'Contributing',
    icon: IconNotes
    
  },
  {
    label: 'Release-Note',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Data Integration ', icon: IconPresentationAnalytics },
  { label: 'Example ', icon: IconFileAnalytics },
  { label: 'FAQs Trrobleshooting', icon: IconAdjustments },
  {
    label: 'Getting Started ',
    icon: IconLock
   
  },
  { label: 'License Legal ', icon: IconAdjustments },
  { label: 'Performance Optimization ', icon: IconAdjustments },
  { label: 'Theme styling ', icon: IconAdjustments },
];

export function Navbar() {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          <Title order={3}>EzDashboard </Title>
          <Code fw={700}>v3.1.2</Code>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}

export default Navbar ;