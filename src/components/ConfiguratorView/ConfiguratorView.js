import React from 'react'
import { Palette as PaletteIcon } from '@material-ui/icons'
import { useUID } from '@twilio-paste/core/uid-library'
import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Heading,
} from '@twilio-paste/core'

import FlexThemeProvider from '../Common/FlexThemeProvider'
import StyleSettings from './StyleSettings'

import { PageContainer } from './Shared.Components'

const DemoConfiguratorView = ({ manager, accountSid }) => {
  const selectedId = useUID()

  return (
    <FlexThemeProvider>
      <PageContainer>
        <Tabs selectedId={selectedId} baseId="configurator-tabs">
          <TabList>
            <Tab id={selectedId}>
              <PaletteIcon fontSize="large" />
              <Heading as="h4" variant="heading40">
                Styles
              </Heading>
            </Tab>
          </TabList>
          <TabPanels paddingTop="space20">
            <TabPanel>
              <StyleSettings accountSid={accountSid} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </PageContainer>
    </FlexThemeProvider>
  )
}

export default DemoConfiguratorView
