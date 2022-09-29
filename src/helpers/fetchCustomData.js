
const fetchCustomData = (accountSid) => {
    const valueInLocalStorage = localStorage.getItem(
      'fte-splash-url-' + accountSid,
    )
  return valueInLocalStorage ? valueInLocalStorage : "https://www.twilio.com/docs/static/company/img/logos/blue/twilio-logo-blue.da90aba80.png";
}

export default fetchCustomData
