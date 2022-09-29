import React from 'react'
import { withTheme } from '@twilio/flex-ui'
import { ChevronDownIcon } from '@twilio-paste/icons/esm/ChevronDownIcon'
import { ChevronUpIcon } from '@twilio-paste/icons/esm/ChevronUpIcon'
import { getAccountSidShortened } from '../../../helpers'
import { CardHeaderText } from './Shared.Components'

class SubheadingComponent extends React.Component {
  constructor(props) {
    super(props)
    const accountSid = getAccountSidShortened()
    // console.log('subheading theme', this.props.theme)
    let defaultBackground = this.props.theme.SideNav.Container.background
    if (props.bgColor) defaultBackground = props.bgColor

    const bgColor =
      localStorage.getItem('fte-main-header-background-color-' + accountSid) ??
      defaultBackground

    const txtColor =
      localStorage.getItem('fte-main-header-text-color-' + accountSid) ??
      this.props.theme.SideNav.Button.color

    this.state = {
      bgColor,
      txtColor,
    }
  }

  render() {
    // console.log('subheading state', this.state)
    const { bgColor: backgroundColor, txtColor: color } = this.state
    const styles = {
      container: {
        backgroundColor,
        color,
      },
      containerRounded: {
        borderRadius: '13px 13px 0px 0px',
        backgroundColor,
        color,
      },
      btn: {
        float: 'right',
        backgroundColor,
        color,
        height: 36,
        width: 36,
      },
    }

    const containerStyle =
      this.props.type === 'rounded' ? styles.containerRounded : styles.container

    const hasCollapse =
      typeof this.props.isCollapsed === 'boolean' && this.props.collapseAction

    return (
      <CardHeaderText style={containerStyle}>
        {this.props.title}
        {hasCollapse && this.props.isCollapsed ? (
          <span style={styles.btn} onClick={this.props.collapseAction}>
            <ChevronUpIcon decorative={false} title="Section open" />
          </span>
        ) : null}
        {hasCollapse && !this.props.isCollapsed ? (
          <span style={styles.btn} onClick={this.props.collapseAction}>
            <ChevronDownIcon decorative={false} title="Section close" />
          </span>
        ) : null}
      </CardHeaderText>
    )
  }
}
export default withTheme(SubheadingComponent)
