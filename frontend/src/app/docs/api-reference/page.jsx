import React from 'react';
import { Container, Text, List, ListItem } from '@mantine/core';

const ApiReferencePage = () => {
  // Define an array of components with their respective props
  const components = [
    {
      name: 'ComponentName1',
      description: 'Description of ComponentName1.',
      props: ['prop1', 'prop2', 'prop3'],
    },
    {
      name: 'ComponentName2',
      description: 'Description of ComponentName2.',
      props: ['propA', 'propB'],
    },
    // Add more components as needed
  ];

  return (
    <Container size="md">
      <Text size="lg" weight={700} style={{ marginBottom: '20px' }}>
        API Reference
      </Text>

      {/* List of Components */}
      <List style={{ marginBottom: '30px' }}>
        {components.map((component, index) => (
          <ListItem key={index}>
            <Text size="xl" weight={700} style={{ marginBottom: '10px' }}>
              {component.name}
            </Text>
            <Text style={{ marginBottom: '10px' }}>{component.description}</Text>
            {/* List of Props */}
            <Text size="md" weight={700} style={{ marginBottom: '5px' }}>
              Props:
            </Text>
            <List>
              {component.props.map((prop, idx) => (
                <ListItem key={idx}>
                  <code>{prop}</code>
                </ListItem>
              ))}
            </List>
          </ListItem>
        ))}
      </List>

      {/* Add additional content or links to detailed documentation pages */}

    </Container>
  );
};

export default ApiReferencePage;
