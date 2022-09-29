import React from 'react'
import DemoConfiguratorSideLink from '../DemoConfiguratorSideLink'
import DemoConfiguratorView from '../components/ConfiguratorView/ConfiguratorView'

const addViewsConfigurator = (flex, manager, accountSid) => {
  flex.SideNav.Content.add(
    <DemoConfiguratorSideLink key="demo-configurator-sidelink" />,
    {
      sortOrder: -1,
      align: 'end',
    },
  )

  flex.ViewCollection.Content.add(
    <flex.View name="demo-config" key="demo-config">
      <DemoConfiguratorView
        key="demo-configurator-settings"
        manager={manager}
        accountSid={accountSid}
      />
    </flex.View>,
  )
}

export default addViewsConfigurator
