import React from 'react';
import { SideLink, Actions } from '@twilio/flex-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

export default class DemoConfiguratorSideLink extends React.Component {
  render() {
    return (
      <SideLink
        {...this.props}
        icon={<FontAwesomeIcon icon={faSlidersH} />}
        iconActive={<FontAwesomeIcon icon={faSlidersH} size="2x" />}
        isActive={this.props.activeView === 'demo-config'}
        onClick={() => Actions.invokeAction('NavigateToView', { viewName: 'demo-config' })}
      >
        Flex Configuration
      </SideLink>
    );
  }
}
