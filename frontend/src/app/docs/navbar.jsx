import { Group, Code, ScrollArea, rem, Title } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconComponents,
  IconApi,
  IconLicense,
  IconSettingsAutomation,
  IconHomeStar,



} from '@tabler/icons-react';
import { UserButton } from './UserButton/UserButton';
import { LinksGroup } from './NavbarLinkgroup/NavbarLinkGroup';
import classes from './navbarNested.module.css';

const mockdata = [
  {
    label: 'Getting Started ',
    icon: IconHomeStar
    ,
    link: '/docs/gettingStarted'
   
  },
  { label: 'API reference ', icon: IconApi, link: '/docs/api-reference' },
  {
    label: 'Contribution',
    icon: IconNotes,
    link: '/docs/contribution'
  },
  {
    label: 'Release-Note',
    icon: IconCalendarStats,
    link: '/docs/Release-note',
    links: [
      { label: 'Upcoming releases', link: '/docs/Release-note/upcomingreleases' },
      { label: 'Previous releases', link: '/docs/Release-note/releasenote' },
      
    ],
  },
  { label: 'Example ', icon: IconFileAnalytics, link: '#',
    links: [
      { label: 'Alert', link: '/docs/example/alert' },
      { label: 'Progress Bar', link: '/docs/example/progressbar' },
      { label: 'StatCard', link: '/docs/example/statcard' },
    ]},
    { label:'Components', icon: IconComponents
    , link: '/docs/component'},
  { label: 'FAQs Trrobleshooting', icon: IconAdjustments, link: '/docs/Faqs-troubleshooting' },
 
  { label: 'License Legal ', icon: IconLicense, link: '/docs/License-Legal' },
  { label: 'Performance Optimization ', icon: IconSettingsAutomation, link: '/docs/performance-optimization' },
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

      {/* <div className={classes.footer}>
        <UserButton />
      </div> */}
    </nav>
    
  );
}

export default Navbar ;