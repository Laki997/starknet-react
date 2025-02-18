import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { Layout } from '../components/Layout'
import { Markdown } from '../components/Markdown'
import { Section, SectionHeading } from '../components/Section'

const CREATE_STARKNET_HELP = `
  \`\`\`bash
  Usage: create-starknet [project-directory] [options]

  Create starknet apps with one command
  
  Options:
    -V, --version          output the version number
    -t, --template <name>  Explicitly tell the CLI to bootstrap the app using the specified template (choices: "next", "vite")
    --use-npm              Explicitly tell the CLI to bootstrap the app using npm
    --use-yarn             Explicitly tell the CLI to bootstrap the app using yarn
    --use-pnpm             Explicitly tell the CLI to bootstrap the app using pnpm
    -h, --help             display help for command  
  \`\`\`
`

const PROVIDER_IMPORT = `
\`\`\`ts
import { StarknetConfig, InjectedConnector } from '@starknet-react/core'
\`\`\`
`
const PROVIDER_NEXT = `
\`\`\`ts
function MyApp({ Component, pageProps }) {
  const connectors = [
    new InjectedConnector({ options: { id: 'braavos' }}),
    new InjectedConnector({ options: { id: 'argentX' }}),
  ]
  return (
    <StarknetConfig connectors={connectors}>
      <Component {...pageProps} />
    </StarknetConfig>
  )
}
\`\`\`
`

export default function GetStartedPage() {
  return (
    <Layout>
      <Head>
        <title>Get Started - Starknet React</title>
      </Head>
      <Box maxW="70rem" mx="auto" pt="12" mb="20">
        <Heading fontSize="6xl" as="h1" textAlign="center">
          Get Started
        </Heading>
        <Heading mt="4" as="h2" color="cat.peach" fontSize="xl" textAlign="center">
          Start building Starknet applications in less than a minute.
        </Heading>
        <Section>
          <SectionHeading>Quick setup</SectionHeading>
          <Text mt="10">
            We recommend creating a new starknet-react app using create-starknet, which sets up a
            starknet app using TypeScript automatically for you. To create a project, run:
          </Text>
          <Tabs colorScheme="whiteAlpha" variant="soft-rounded" mt="4">
            <TabList>
              <Tab>pnpm</Tab>
              <Tab>yarn</Tab>
              <Tab>npm</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Markdown>`pnpm create starknet`</Markdown>
              </TabPanel>
              <TabPanel>
                <Markdown>`yarn create starknet`</Markdown>
              </TabPanel>
              <TabPanel>
                <Markdown>`npx create-starknet`</Markdown>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Text mt="4">
            You can also pass command line arguments to set up a new project non-interactively. See
            create-starknet --help:
          </Text>
          <Markdown>{CREATE_STARKNET_HELP}</Markdown>
        </Section>
        <Section>
          <SectionHeading>Manual setup</SectionHeading>
          <Heading size="lg" mb="4" mt="10">
            Installation
          </Heading>
          <Text>Add `@starknet-react/core` using your favorite package manager.</Text>
          <Tabs colorScheme="whiteAlpha" variant="soft-rounded" mt="4">
            <TabList>
              <Tab>pnpm</Tab>
              <Tab>yarn</Tab>
              <Tab>npm</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Markdown>`pnpm add @starknet-react/core`</Markdown>
              </TabPanel>
              <TabPanel>
                <Markdown>`yarn add @starknet-react/core`</Markdown>
              </TabPanel>
              <TabPanel>
                <Markdown>`npm add @starknet-react/core`</Markdown>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Heading size="lg" mb="4" mt="10">
            Usage with Next.js
          </Heading>
          <Text>Start by adding the following import statement to your `_app.tsx` file.</Text>
          <Markdown>{PROVIDER_IMPORT}</Markdown>
          <Text>Then edit the application component to include the Starknet provider.</Text>
          <Markdown>{PROVIDER_NEXT}</Markdown>
        </Section>
      </Box>
    </Layout>
  )
}
