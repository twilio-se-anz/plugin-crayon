import React from 'react'
import { withTheme } from '@twilio/flex-ui'
import { Grid } from '@material-ui/core'

import {
  LogoIconContainer,
  LabelContainer,
  EventDescription,
  MarginedHR,
} from './Shared.Components'

function InfoComponent({ icon, title, value, hr }) {
  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <LogoIconContainer>{icon}</LogoIconContainer>
        </Grid>
        <Grid item xs={10}>
          <LabelContainer>{title}</LabelContainer>
          <EventDescription>{value}</EventDescription>
        </Grid>
      </Grid>
      {hr && <MarginedHR />}
    </>
  )
}

export default withTheme(InfoComponent)
