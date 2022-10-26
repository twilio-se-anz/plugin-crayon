import { taskCanvasTabsList } from './TaskCanvasTabsList';
import { Tab } from '@twilio/flex-ui';

function addTaskCanvasTabs(flex, accountSid, customerData) {
  for (const tabKey in taskCanvasTabsList) {
    const tab = taskCanvasTabsList[tabKey];
    const IconName = tab.icon;
    const TabContentComponent = tab.component;

    flex.TaskCanvasTabs.Content.add(
      <Tab
        icon={IconName}
        iconActive={IconName}
        uniqueName={tab.id}
        key={tab.id}
      >
        <TabContentComponent key={tab.id} data={customerData} />
      </Tab>,
      tab.options
    );
  }
}

export { taskCanvasTabsList, addTaskCanvasTabs };
