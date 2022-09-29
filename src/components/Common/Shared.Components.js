import { styled } from '@twilio/flex-ui'

export const LogoIconContainer = styled.div`
  margin-top: ${(props) => props.theme.tokens.spacings.space50};
  text-align: center;
`
export const EventDescription = styled.div`
  padding-bottom: ${(props) => props.theme.tokens.spacings.space20};
  font-size: ${(props) => props.theme.tokens.fontSizes.fontSize40};
  line-height: ${(props) => props.theme.tokens.lineHeights.lineHeight40};
  text-align: left;
`

export const LabelContainer = styled.div`
  font-size: ${(props) => props.theme.tokens.fontSizes.fontSize30};
  line-height: ${(props) => props.theme.tokens.lineHeights.lineHeight40};
  text-align: left;
  margin-top: ${(props) => props.theme.tokens.spacings.space40};
`

export const MarginedHR = styled.hr`
  margin: ${(props) => props.theme.tokens.spacings.space30}
    ${(props) => props.theme.tokens.spacings.space90};
`

export const CardHeaderText = styled.h2`
  font-size: ${(props) => props.theme.tokens.fontSizes.fontSize30};
  line-height: ${(props) => props.theme.tokens.lineHeights.lineHeight30};
  padding: ${(props) => props.theme.tokens.spacings.space60};
  line-height: 1.5;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: left;
`
