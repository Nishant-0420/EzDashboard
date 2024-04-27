'use client'
import React from 'react'
import { Center, Title, Affix, Button, Transition, rem  } from '@mantine/core'
import { IconArrowUp } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import { useWindowScroll } from '@mantine/hooks';

const ApiReference = () => {
  const { y } = useWindowScroll();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    setScroll(y);
  }, [y]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div>
        <Title order={1} align={'Center'} mt={50}>Coming Soon</Title>
        <Affix
          top={0}
          right={0}
          left={0}
          style={{ transition: 'all 200ms ease' }}
          shadow="xs"
          style={{ display: scroll > 100 ? 'block' : 'none' }}>
          </Affix>
    </div>
  )
}

export default ApiReference