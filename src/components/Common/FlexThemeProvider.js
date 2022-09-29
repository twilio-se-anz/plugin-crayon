import React from 'react'
import { withTheme } from '@twilio/flex-ui'
import { CustomizationProvider as PasteThemeProvider } from '@twilio-paste/core/customization'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

/*
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core'
  <MuiThemeProvider theme={createTheme(theme)}>
    {children}
  </MuiThemeProvider>
*/

const FlexThemeProvider = ({ theme, children }) => {
  return (
    <PasteThemeProvider
      baseTheme={theme.isLight ? 'default' : 'dark'}
      theme={theme.tokens}
      style={{ minWidth: '100%', minHeight: '100%', overflowY: 'scroll' }}
    >
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </PasteThemeProvider>
  )
}

export default withTheme(FlexThemeProvider)
