import constants from '../constants'
const { themeableItems } = constants

const applyThemeOverrides = (flex, manager, accountSid) => {
  var brandOverrides = {}

  // loop through config settings and populate brandOverrides object appropriately
  for (let i = 0; i < themeableItems.length; i++) {
    // get the value
    var valueInLocalStorage = localStorage.getItem(
      themeableItems[i].id + '-' + accountSid,
    )

    if (themeableItems[i].settingPaths === null) {
      // handle special cases which require unique commands
      if (themeableItems[i].id === 'fte-main-header-logo-url') {
        if (
          flex.MainHeader.defaultProps &&
          valueInLocalStorage &&
          valueInLocalStorage !== 'https://some.url/image.png' &&
          valueInLocalStorage !== ''
        ) {
          flex.MainHeader.defaultProps.logoUrl = valueInLocalStorage
        }
      } else if (themeableItems[i].id === 'fte-splash-url') {
        console.log('found splash url')
      }
    } else {
      // loop through setting paths and set value in each
      const pathsToSet = themeableItems[i].settingPaths
      for (const pathIdx in pathsToSet) {
        if (valueInLocalStorage != null) {
          const path = pathsToSet[pathIdx]

          setValue(brandOverrides, path, valueInLocalStorage)

          // work-around for setting Agent messageBubble background color
          if (path.includes('FromMe.Bubble.background')) {
            for (const [key] of Object.entries(flex.DefaultTaskChannels)) {
              if (
                [
                  'Chat',
                  'ChatMessenger',
                  'ChatWhatsApp',
                  'ChatSms',
                  'ChatEmail',
                ].includes(key)
              ) {
                flex.DefaultTaskChannels[key].colors.main = valueInLocalStorage
              }
            }
          }

          // if we are setting a background color, lets remove the background image
          if (path.includes('backgroundColor')) {
            let imagePath =
              path.slice(0, path.lastIndexOf('.')) + '.backgroundImage'
            setValue(brandOverrides, imagePath, 'none')
          }
        }
      }
    }
  }

  // override branding options if the user specified any
  if (brandOverrides !== {}) {
    manager.updateConfig({
      theme: {
        ...manager.configuration.theme,
        componentThemeOverrides: brandOverrides,
      },
    })
  }
}

const setValue = (obj, path, value) => {
  path
    .split('.') // split on the dots
    .reduce((o, k, i, a) => {
      o[k] =
        i + 1 === a.length // check if we are at last index
          ? value // if last index use the value
          : o[k] || {} // else return object or set new one
      return o[k] // return the current step in the object
    }, obj) // start location
}

export default applyThemeOverrides
