import { Manager } from '@twilio/flex-ui'

export default function getFlexToken() {
  return Manager.getInstance().user.token
}
