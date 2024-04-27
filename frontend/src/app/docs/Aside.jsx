import React from 'react'
import cx from 'clsx';
import { Box, Text, Group, rem,active } from '@mantine/core';
import { IconListSearch } from '@tabler/icons-react';
import classes from './Aside.module.css';

const links = [
  { label: 'Alert', link: '#usage', order: 1 },
  { label: 'StatCard', link: '#position', order: 1 },
  { label: 'Table', link: '#overlays', order: 1 },
  { label: 'ProgressBar', link: '#focus', order: 1 },
  { label: 'Button', link: '#tabs', order: 1 },
  { label: 'Avatar', link: '#badge', order: 1 },
  { label: 'Link', link: '#badge', order: 1 },
  { label: 'TextInput', link: '#badge', order: 1 },]

const Aside = () => {
    const items = links.map((item) => (
        <Box
          component="a"
          href={item.link}
          onClick={(event) => event.preventDefault()}
          key={item.label}
          className={cx(classes.link, { [classes.linkActive]: active === item.link })}
          style={{ paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))` }}
        >
          {item.label}
        </Box>
      ));
    
  return (  
    <div>
        <Group mb="md">
        <IconListSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        <Text>Components</Text>
      </Group>
      {items}
    </div>
  )
}

export default Aside