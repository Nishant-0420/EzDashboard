import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import classes from './ContactIcons.module.css';



function ContactIcon({ icon: Icon, title, description, ...others }) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: 'Email', description: 'KUMAR.VAIBHAV2204@GMAIL,THAKURNISHANT0420@GMAIL.COM', icon: IconAt },
  { title: 'Phone', description: '7054868004,7307336837', icon: IconPhone },
  { title: 'Address', description: 'Lucknow, Uttar Pradesh, India', icon: IconMapPin },
  { title: 'Working hours', description: '10 a.m. – 5 p.m.', icon: IconSun },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}