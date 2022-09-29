import { Manager } from '@twilio/flex-ui'

export default function getAccountSidShortened() {
  const manager = Manager.getInstance()
  const accountSid = manager.serviceConfiguration.account_sid
  return accountSid.slice(accountSid.length - 6)
}
