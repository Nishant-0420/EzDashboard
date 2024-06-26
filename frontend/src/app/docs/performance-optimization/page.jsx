import React from 'react';
import { Container, Paper,Title, Text, Code, Alert, Group, List, ListItem } from '@mantine/core';

const PerformanceOptimization = () => {
  return (
    <Container size="lg">
      <Paper shadow="xs" padding="lg">
        <u><Title order={1} style={{ marginBottom: '20px' }}>
          Performance Optimization Guide for <b> ez-dashboard</b>
        </Title></u>

        <Text>
          Welcome to the performance optimization guide for <Code>ez-dashboard</Code>! In this guide,
          you&quot;ll learn how to optimize the performance of applications using <Code>ez-dashboard</Code> to
          ensure fast rendering and responsive user experiences.
        </Text>
        <br />

        <Alert color="blue" title="Why Performance Optimization Matters">
          Efficient performance is crucial for delivering smooth and responsive web applications. By
          optimizing the performance of <Code>ez-dashboard</Code>, you can enhance the overall user
          experience and ensure optimal usage of your library.
        </Alert>
        <br />

        {/* Common Performance Issues */}
        <section style={{ marginTop: '30px' }}>
          <Title  order={2} style={{ marginBottom: '10px' }}>
            Common Performance Issues
          </Title>
          {/* Rendering Optimization */}
          <Text size="md" weight={700} style={{ marginBottom: '5px' }}>
            <b>*Rendering Optimization</b>
          </Text>
          <Text>
            - Utilize techniques like `React.memo` to prevent unnecessary re-renders of components.
          </Text>
          <Text>
            - Implement virtualized lists or tables to handle large datasets efficiently.
          </Text>

          {/* State Management */}
          <Text size="md" weight={700} style={{ marginBottom: '5px', marginTop: '15px' }}>
            <b>*State Management</b>
          </Text>
          <Text>
            - Use `useState` and `useEffect` strategically to minimize re-renders.
          </Text>
          <Text>
            - Leverage React Context API for managing shared state efficiently.
          </Text>

          {/* Data Fetching */}
          <Text size="md" weight={700} style={{ marginBottom: '5px', marginTop: '15px' }}>
            <b>*Data Fetching</b>
          </Text>
          <Text>
            - Implement lazy loading for components and data to improve initial load times.
          </Text>
          <Text>
            - Integrate efficient data fetching strategies, such as GraphQL, for optimized data retrieval.
          </Text>
        </section>

        {/* Best Practices for ez-dashboard */}
        <section style={{ marginTop: '30px' }}>
          <Title order={2} style={{ marginBottom: '10px' }}>
            Best Practices for <b>ez-dashboard</b>
          </Title>
          {/* Component Optimization */}
          <Text size="md" weight={700} style={{ marginBottom: '5px' }}>
            <b>*Component Optimization</b>
          </Text>
          <Text>
            - Utilize memoization techniques like `React.memo` for caching expensive computations within
              ez-dashboard components.
          </Text>
          <Text>
            - Prefer functional components over class components for better performance in ez-dashboard.
          </Text>

          {/* Bundle Optimization */}
          <Text size="md" weight={700} style={{ marginBottom: '5px', marginTop: '15px' }}>
            <b>*Bundle Optimization</b>
          </Text>
          <Text>
            - Enable code splitting to reduce the initial bundle size of your ez-dashboard application.
          </Text>
          <Text>
            - Ensure support for tree shaking to minimize the final bundle size of your ez-dashboard app.
          </Text>
        </section>

        {/* Tools and Techniques */}
        <section style={{ marginTop: '30px' }}>
          <Title order={2}  style={{ marginBottom: '10px' }}>
            Tools and Techniques
          </Title>
          {/* Performance Monitoring */}
          <Text size="md" weight={700} style={{ marginBottom: '5px' }}>
            <b>*Performance Monitoring</b>
          </Text>
          <Text>
            - Use React DevTools to profile component renders and state changes within your
              ez-dashboard application.
          </Text>
          <Text>
            - Run Lighthouse audits to identify performance bottlenecks in your ez-dashboard applications.
          </Text>
        </section>

        {/* Additional Resources */}
        <section style={{ marginTop: '30px' }}>
          <Title order={2}  style={{ marginBottom: '10px' }}>
            Additional Resources
          </Title>

          {/* External Links */}
          <List>
            <ListItem>
              <Text>
                <a
                  href="https://reactjs.org/docs/optimizing-performance.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Optimization Techniques
                </a>
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <a
                  href="https://reactjs.org/docs/optimizing-performance.html#use-the-production-build"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Best Practices for React Performance
                </a>
              </Text>
            </ListItem>
          </List>
        </section>
      </Paper>
    </Container>
  );
};

export default PerformanceOptimization;
