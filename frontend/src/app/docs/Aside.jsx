'use client'
import React from 'react'
import cx from 'clsx';
import { Box, Text, Group, rem, active } from '@mantine/core';
import { IconListSearch } from '@tabler/icons-react';
import classes from './Aside.module.css';
import Link from 'next/link';

const links = [
  { label: 'Alert', link: '/docs/component/alert', order: 1 },
  { label: 'StatCard', link: '/docs/component/statcard', order: 1 },
  { label: 'Table', link: '/docs/component/table', order: 1 },
  { label: 'ProgressBar', link: '/docs/component/progressbar', order: 1 },
  { label: 'Button', link: '/docs/component/button', order: 1 },
  { label: 'Avatar', link: '/docs/component/avatar', order: 1 },
  { label: 'Link', link: '/docs/component/link', order: 1 },
  { label: 'TextInput', link: '/docs/component/textinput', order: 1 },
  { label: 'CheckBox', link: '/docs/component/checkbox', order: 1 },
  { label: 'Radio', link: '/docs/component/radio', order: 1 },
  { label: 'Stepper', link: '/docs/component/stepper', order: 1 },
  { label: 'ScatterPlot', link: '/docs/component/scatterplot', order: 1 },
  { label: 'LineChart', link: '/docs/component/linechart', order: 1 },
  { label: 'RadialBar', link: '/docs/component/radialbar', order: 1 },
  { label: 'Bump', link: '/docs/component/bump', order: 1 },
  { label: 'HeatMap', link: '/docs/component/heatmap', order: 1 },
  { label: 'PieChart', link: '/docs/component/piechart', order: 1 },

]

const Aside = () => {
  const items = links.map((item) => (
    <Box
      component={Link}
      href={item.link}
      key={item.label}
      className={cx(classes.link, { [classes.linkActive]: active === item.link })}
      style={{ paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))` }}
    >
      {item.label}
    </Box>
  ));

  return (
    <div style={{width : 200}}>
      <Group mb="md" >
        <IconListSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        <Text>Components</Text>
      </Group>
      {items}
    </div>
  )
}

export default Aside