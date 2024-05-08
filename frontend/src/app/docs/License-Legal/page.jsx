import React from 'react';
import { Group, Text, Title, Code, ScrollArea } from '@mantine/core';

const LicenseLegal = () => {
  return (
    <div style={{marginLeft:'50px' , marginRight:'50px'}}>
        <u><Title order={1}>EzDashboard License</Title></u>
        <br />
        <Text order={2}>
          EzDashboard is open-source software licensed under the MIT License. This
          license grants you the freedom to use, modify, and distribute the
          library for any purpose, commercial or non-commercial.
        </Text>
        <br />
        <Code language="text">
          {/* MIT License text goes here */}
          The MIT License (MIT)
          <br />
          Copyright (c) 2024 Nishant & Vaibhav
          <br />
          Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
<br/>
<br/>

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.<br/>
<br/>

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
        </Code>
        <br />
        <h2>Third-Party Dependencies</h2>
        <Text size="md">
          *Tailwind <br />
          *Nivo


        </Text>
        <h2>Contact Information</h2>
        <Text size="md">
          Nishant Bisht @thakurnishant0420@gmail.com
          <br />
          Vaibhav Yadav @kumar.vaibhav2004@gmail.com
        </Text>
      
    </div>
  );
};

export default LicenseLegal;
