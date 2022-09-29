import React from 'react';
import { withTaskContext } from '@twilio/flex-ui';

import Banner from './Banner';

import viewsList from '../data/ViewsList';


class Panel extends React.Component {
  render() {
    const data = this.props.data;
    const screenpop =
      this.props.task?.attributes?.screenpop ?? this.props.screenpop;

    const view = viewsList.find((e) => e.key === screenpop);

    const TagName = view ? view.componentName : Banner;

    return <TagName data={data} />;
  }
}

export default withTaskContext(Panel);
