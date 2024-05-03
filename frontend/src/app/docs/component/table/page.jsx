'use client';
import { Text, Title,Image } from '@mantine/core';
import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';

const TableComponent = () => {
  return (
    <div style={{ marginLeft: 70, marginRight: 90 }}>
                <u><Title order={1}>Table</Title></u>
                <br />
                <Text >
                    Table component is used to display data in tabular format.
                </Text>
                <Text >
                    To use the Table component, you need to import it from the ez-dashboard package.
                    <br />
                    <br />
                    <CodeBlock
                        text={`import  { Table }  from  'ez-dashboard';`}
                        language={'jsx'}
                        theme={dracula}
                        wrapLines />
                </Text>
                <Title order={2}>Usage</Title>
                <br />
                <CodeBlock
                    text={`import { Table } from 'ez-dashboard';
<Table data={[{"id": 1,"name": "Apple","price": 1.25,},
              {"id": 2,"name": "Banana","price": 0.75,},
              {"id": 3,"name": "JD","price": 250,}]}
alignHeading='center'
alignData='center' />`}
                    language={'jsx'}
                    theme={dracula}
                    showLineNumbers={false}
                    wrapLines />
                <br />
                <Image src="/image/table.png" alt="table image" style={{ height: '220px', width: '380px' }} />
                <br />
                <Title order={2}>Props</Title>
                <br />
                <Text >
                    The Table component has the following props: <br />
                    * Data <br />
                    * AlignHeading <br />
                    * AlignData
                </Text>
            </div>
  )
}

export default TableComponent