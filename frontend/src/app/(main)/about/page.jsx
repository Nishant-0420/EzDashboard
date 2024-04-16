'use client'
import React from 'react';
import { Container, Paper, Text, Button } from '@mantine/core';
import styles from './About.module.css';

const AboutUsPage = () => {
  return (
    <Container size="lg" className={styles.container}>
      <Paper padding="xl" shadow="lg" className={styles.paper}>
        <Text size="xl" weight={700} align="center" className={styles.sectionTitle}>
          About Our Library
        </Text>
        <Text align="justify" className={styles.paragraph}>
          Mantine is a modern React component library that empowers developers to build elegant
          and accessible user interfaces. With Mantine, you can create beautiful and responsive
          web applications quickly and easily.
        </Text>
        <Text align="justify" className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sapiente amet tempore nihil fuga, accusamus dignissimos obcaecati molestiae quae facilis ratione quo, odit et asperiores sit. Repellat consectetur, quam, quo accusamus, molestias dolorum nulla enim aliquid rerum aspernatur quos? Unde nemo ipsum commodi quia molestiae omnis esse sequi, odit autem?
        </Text>

        <Text size="xl" weight={700} align="center" className={styles.sectionTitle}>
          Our Team
        </Text>
        <div className={styles.team}>
          <div className={styles.teamMember}>
            <img src="/image/avatar1.png" alt="Team Member 1" className={styles.avatar} />
            <Text size="md" weight={700} align="center" className={styles.memberName}>
              VAIBHAV YADAV
            </Text>
            <Text align="center" className={styles.memberPosition}>
              Library Components
            </Text>
          </div>
          <div className={styles.teamMember}>
            <img src="/image/avatar2.png" alt="Team Member 2" className={styles.avatar} />
            <Text size="md" weight={700} align="center" className={styles.memberName}>
              NISHANT BISHT
            </Text>
            <Text align="center" className={styles.memberPosition}>
              Backend Developer
            </Text>
          </div>
        </div>

        <Button variant="gradient" fullWidth className={styles.button}>
          Learn More
        </Button>
      </Paper>
    </Container>
  );
};

export default AboutUsPage;
