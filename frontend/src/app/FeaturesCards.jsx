'use client'
import React from 'react'
import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
  } from '@mantine/core';
  import {IconChartBar ,IconLayout,IconSettings} from '@tabler/icons-react';
  import classes from './FeaturesCards.module.css';
  
  const mockdata = [
    {
      title: 'Effortless Dashboard Creation',
    description:
      'Build professional-looking dashboards in record time with EzDashboard\'s pre-built components and flexible design system.',
    icon: IconChartBar,
    },
    {
      title: 'Seamless Data Visualization',
    description:
      'EzDashboard offers a rich set of chart types to perfectly visualize your data and gain valuable insights.',
    icon: IconLayout,
    },
    {
      title: 'Highly Customizable',
    description:
      'Tailor your dashboards to match your brand identity and specific needs with EzDashboard\'s extensive customization options.',
    icon: IconSettings,
    },
  ];

const   FeaturesCards = () => {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl" >
        <feature.icon
          style={{ width: rem(50), height: rem(50) }}
          stroke={2}
          color={theme.colors.blue[6]}
        />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
  return (
    <div style={{backgroundColor:'#00000'}}> 
    <Container size="lg" py="xl">
    <Group justify="center">
      <Badge variant="filled" size="lg">
      EzDashboard - Revolutionize Your Dashboards
      </Badge>
    </Group>

    <Title order={2} className={classes.title} ta="center" mt="sm">
    Effortlessly build and manage data insights
    </Title>

    <Text c="dimmed" className={classes.description} ta="center" mt="md">
    Make informed decisions faster with EzDashboard&lsquo;s intuitive features.
    </Text>

    <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
      {features}
    </SimpleGrid>
  </Container></div>
  )
}

export default FeaturesCards