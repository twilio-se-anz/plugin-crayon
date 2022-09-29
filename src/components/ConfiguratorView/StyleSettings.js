import React from 'react';
import {
  Label,
  Input,
  Heading,
  Paragraph,
  Button,
  Stack,
} from '@twilio-paste/core';
import { Grid } from '@material-ui/core';

import {
  PageContainer,
  Bordered,
  ImageInputContainer,
  ImagePreviewContainer,
  ImagePreview,
  ColorInputContainer,
} from './Shared.Components';

import constants from '../../constants';
const { themeableItems } = constants;
const headerLogoId = 'fte-main-header-logo-url';
const splashLogoId = 'fte-splash-url';
const imagePlaceHolder = 'https://some.url/image.png';
const splashPlaceHolder = 'https://some.url/image.png';

class StyleSettings extends React.Component {
  constructor(props) {
    super(props);
    //read local for style states
    const placeholderState = {};
    for (const itemKey in themeableItems) {
      const item = themeableItems[itemKey];
      placeholderState[item.id] = item.placeholder;
    }
    this.state = placeholderState;
  }

  componentDidMount() {
    const localStorageState = {};
    for (const itemKey in themeableItems) {
      const item = themeableItems[itemKey];
      const itemValue = this.getLocalStorageValue(item.id);

      localStorageState[item.id] = itemValue ? itemValue : '';
    }
    console.log('setting initial theme state', localStorageState);
    this.setState({ ...localStorageState });
  }

  getLocalStorageValue(key) {
    const { accountSid } = this.props;
    var lsValue = localStorage.getItem(key + '-' + accountSid);
    var result =
      lsValue === null && lsValue !== imagePlaceHolder ? '' : lsValue;
    return result;
  }

  handleChange = (e, id) => {
    this.setState({ [id]: e.target.value });
  };

  handleSave = () => {
    const { accountSid } = this.props;
    for (const themeKey in this.state) {
      const themeValue = this.state[themeKey];
      const lsKey = themeKey + '-' + accountSid;
      if (themeValue === '') {
        localStorage.removeItem(lsKey);
      } else {
        localStorage.setItem(lsKey, themeValue);
      }
    }

    window.location.reload();
  };

  handleClear = () => {
    const { accountSid } = this.props;
    for (const themeKey in this.state) {
      localStorage.removeItem(themeKey + '-' + accountSid);
    }
    window.location.reload();
  };

  displayHeaderImage(headerValue) {
    return (
      headerValue && headerValue !== '' && headerValue !== imagePlaceHolder
    );
  }

  render() {
    const headerValue = this.state[headerLogoId];
    const splashValue = this.state[splashLogoId];
    return (
      <PageContainer>
        <Grid container spacing={3}>
          <Grid container item xs={12} justify="flex-start">
            <Grid item>
              <Stack orientation="horizontal" spacing="space60">
                <Button variant="primary" onClick={this.handleSave}>
                  Save
                </Button>
                <Button
                  variant="destructive"
                  onClick={this.handleClear}
                  style={{ marginRight: 15 }}
                >
                  Reset
                </Button>
              </Stack>
            </Grid>
          </Grid>

          <Grid container item xs={12} md={4} alignContent="flex-start">
            <Grid item xs={12}>
              <Bordered>
                <Heading as="h2" variant="heading20">
                  Brand
                </Heading>
              </Bordered>
            </Grid>
            <Grid item xs={12}>
              <ImageInputContainer>
                <Label htmlFor="header-image">Main Header Logo</Label>
                <Input
                  type="url"
                  placeholder={imagePlaceHolder}
                  value={headerValue}
                  onChange={(e) => this.handleChange(e, headerLogoId)}
                  id="header-image"
                  name="header-image"
                ></Input>
              </ImageInputContainer>
            </Grid>
            <Grid item xs={12}>
              <ImagePreviewContainer>
                {this.displayHeaderImage(headerValue) ? (
                  <ImagePreview src={headerValue} alt="Preview header image" />
                ) : null}
              </ImagePreviewContainer>
            </Grid>
            <Grid item xs={12}>
              <ImageInputContainer>
                <Label htmlFor="header-image">Splash Screen Logo</Label>
                <Input
                  type="url"
                  placeholder={splashPlaceHolder}
                  value={splashValue}
                  onChange={(e) => this.handleChange(e, splashLogoId)}
                  id="splash-image"
                  name="splash-image"
                ></Input>
              </ImageInputContainer>
            </Grid>
            <Grid item xs={12}>
              <ImagePreviewContainer>
                {this.displayHeaderImage(splashValue) ? (
                  <ImagePreview src={splashValue} alt="Preview splash image" />
                ) : null}
              </ImagePreviewContainer>
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            md={4}
            spacing={2}
            alignContent="flex-start"
          >
            <Grid item xs={12}>
              <Bordered>
                <Heading as="h2" variant="heading20">
                  Colors
                </Heading>
              </Bordered>
            </Grid>
            <Grid item xs={12}>
              <Paragraph>
                Please prefer to use Hex color values (with the #) and a color
                picker to find the perfect match
              </Paragraph>
            </Grid>
            {themeableItems.map((item, idx) => {
              //Skip header
              if (item.id === headerLogoId || item.id === splashLogoId) return null;
              // check previous item to see if we need a section header
              const prevItem = themeableItems[idx - 1];
              return (
                <React.Fragment key={'theme-color-section-' + idx}>
                  {item.sectionTitle !== prevItem?.sectionTitle ? (
                    <React.Fragment>
                      <Grid item xs={12}>
                        <Bordered>
                          <Heading as="h3" variant="heading30">
                            {item.sectionTitle}
                          </Heading>
                        </Bordered>
                      </Grid>
                    </React.Fragment>
                  ) : null}
                  <Grid item xs={12} md={6}>
                    <ColorInputContainer>
                      <Label htmlFor={item.id}>{item.label}</Label>
                      <Input
                        type="text"
                        name={item.id}
                        id={item.id}
                        placeholder={item.placeholder}
                        value={this.state[item.id]}
                        onChange={(e) => this.handleChange(e, item.id)}
                      ></Input>
                    </ColorInputContainer>
                  </Grid>
                </React.Fragment>
              );
            })}
          </Grid>
        </Grid>
      </PageContainer>
    );
  }
}

export default StyleSettings;
