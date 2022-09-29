import React from 'react';
import Panel from './components/Panel';
import { FlexPlugin, loadCSS } from '@twilio/flex-plugin';
import { customerData } from './data/CustomerData';

import {
  addViewsConfigurator,
  applyThemeOverrides,
  getAccountSidShortened,
  fetchCustomData,
} from './helpers';

import { addTaskCanvasTabs } from './taskCanvasTabs';

const PLUGIN_NAME = 'CrayonPlugin';

export default class CrayonPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */

   async init(flex, manager) {

    loadCSS('https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css');

    //Basic generic Flex UI changes

    const accountSid = getAccountSidShortened();
    addViewsConfigurator(flex, manager, accountSid);
    applyThemeOverrides(flex, manager, accountSid);
    addTaskCanvasTabs(flex, accountSid, customerData);
    const splashURL = fetchCustomData(accountSid);
    customerData["fte-splash-url"] = splashURL;

    //Change the default string that appears above the agent avatar on login
    // manager.strings.NoTasks = "Insurance Made Simple";

    // Remove the black bar at the top pf the screen that let's you switch Twilio projects - This exposes all your other customer environments
    flex.RootContainer.Content.remove('project-switcher');

    //Logo for use in the main header - Always store them in this assets service - images-5674.twil.io

    //This sets the default size for panel 1 and panel 2 - This is not necessary when hosted on flex.twilio.com. 400px is a sensible panel 1 size on MBP screens
    flex.AgentDesktopView.defaultProps.splitterOptions = {
      initialFirstPanelSize: '400px',
      minimumFirstPanelSize: '400px',
    };

    //This replaces "CRM Container" or "Panel2" with our own custom panel that we use to swtich between screen pops
    flex.AgentDesktopView.Panel2.Content.replace(
      <Panel key="panel-replacement" data={customerData} />,
      { sortOrder: -1 }
    );
  }
}
