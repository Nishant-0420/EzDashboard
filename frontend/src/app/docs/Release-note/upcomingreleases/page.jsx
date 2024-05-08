'use client'
import React, { useState, useEffect } from 'react';
import { Container, Title, Text, Badge } from '@mantine/core';

const ComingSoonPage = () => {
  const [countdown, setCountdown] = useState('');

  // Calculate countdown timer until a specific date
  const calculateCountdown = () => {
    const endDate = new Date('2024-7-31'); // Set your target end date here
    const now = new Date();

    const diff = endDate.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      calculateCountdown();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container size="xl" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Title order={1}>Coming Soon</Title>
      <Text size="lg" style={{ marginBottom: '30px' }}>
        We&quot;re working hard to bring you something amazing!
      </Text>
      <Badge variant="filled" color="teal" size="lg" style={{ marginBottom: '30px' }}>
        Launching in:
      </Badge>
      <Title order={2}>{countdown}</Title>
    </Container>
  );
};

export default ComingSoonPage;
