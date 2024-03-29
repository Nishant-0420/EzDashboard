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
  { label: 'API reference ', icon: IconGauge, link: '/docs/api-reference' },
  {
    label: 'Contributing',
    icon: IconNotes,
    link: '/docs/contributing'
  },
  {
    label: 'Release-Note',
    icon: IconCalendarStats,
    link: '/docs/Release-note',
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Data Integration ', icon: IconPresentationAnalytics, link: '/docs/data-integration' },
  { label: 'Example ', icon: IconFileAnalytics, link: '/docs/example' },
  { label: 'FAQs Trrobleshooting', icon: IconAdjustments, link: '/docs/Faqs-troubleshooting' },
  {
    label: 'Getting Started ',
    icon: IconLock,
    link: '/docs/gettingStarted'
   
  },
  { label: 'License Legal ', icon: IconAdjustments, link: '/docs/License-Legal' },
  { label: 'Performance Optimization ', icon: IconAdjustments, link: '/docs/performance-optimization' },
  { label: 'Theme styling ', icon: IconAdjustments, link: '/docs/theme-styling' },
];

export function Navbar() {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between" >
          <Title order={2}>EzDashboard </Title>
          
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