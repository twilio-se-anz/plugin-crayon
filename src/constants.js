const themeableItems = [
  {
    id: 'fte-main-header-logo-url',
    label: 'Main Header Logo URL',
    placeholder: 'https://some.url/image.png',
    settingPaths: null,
  },
  {
    id: 'fte-main-header-background-color',
    label: 'Background Color',
    placeholder: '#a1b2c3',
    sectionTitle: 'Main Header',
    settingPaths: [
      'MainHeader.Container.backgroundColor',
      'MainHeader.Container.background',
      'MainHeader.Button.background',
      'MainHeader.Button.backgroundColor',
    ],
  },
  {
    id: 'fte-main-header-text-color',
    label: 'Text Color',
    placeholder: '#a1b2c3',
    sectionTitle: 'Main Header',
    settingPaths: ['MainHeader.Button.color', 'MainHeader.Container.color'],
  },
  {
    id: 'fte-side-nav-background-color',
    label: 'Background Color',
    placeholder: '#a1b2c3',
    sectionTitle: 'Side Navigation',
    settingPaths: [
      'SideNav.Container.background',
      'SideNav.Button.background',
      'SideNav.Container.backgroundColor',
      'SideNav.Button.backgroundColor',
    ],
  },
  {
    id: 'fte-side-nav-text-color',
    label: 'Text Color',
    placeholder: '#a1b2c3',
    sectionTitle: 'Side Navigation',
    settingPaths: ['SideNav.Button.color', 'SideNav.Icon.color'],
  },
  {
    id: 'fte-msg-bubbles-from-others-background-color',
    label: 'Background Color',
    placeholder: '#a1b2c3',
    sectionTitle: 'Message Bubbles from Customer',
    settingPaths: [
      'Chat.MessageListItem.FromOthers.Avatar.background',
      'Chat.MessageListItem.FromOthers.Bubble.background',
      'Chat.MessageListItem.FromOthers.Header.background',
    ],
  },
  {
    id: 'fte-msg-bubbles-from-others-text-color',
    label: 'Text Color',
    placeholder: '#a1b2c3',
    sectionTitle: 'Message Bubbles from Customer',
    settingPaths: [
      'Chat.MessageListItem.FromOthers.Avatar.color',
      'Chat.MessageListItem.FromOthers.Bubble.color',
      'Chat.MessageListItem.FromOthers.Header.color',
    ],
  },
  {
    id: 'fte-msg-bubbles-from-me-background-color',
    label: 'Background Color',
    placeholder: '#a1b2c3',
    sectionTitle: 'Message Bubbles from Agent',
    settingPaths: ['Chat.MessageListItem.FromMe.Bubble.background'],
  },
  {
    id: 'fte-msg-bubbles-from-me-text-color',
    label: 'Text Color',
    placeholder: '#a1b2c3',
    sectionTitle: 'Message Bubbles from Agent',
    settingPaths: [
      'Chat.MessageListItem.FromMe.Bubble.color',
      'Chat.MessageListItem.FromMe.Header.color',
    ],
  },
  {
    id: 'fte-splash-url',
    label: 'Splash Screen URL',
    placeholder: 'https://some.url/image.png',
    settingPaths: null
  },
];

const localStorageKeys = {
  showPanel2: 'fdc-show-panel2-',
  panel2Selected: 'fdc-panel2-',
  mapEnabled: 'fdc-show-map-',
};

const constants = {
  themeableItems,
  localStorageKeys,
};
export default constants;
