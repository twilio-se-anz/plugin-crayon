import { styled } from '@twilio/flex-ui';

export const PageContainer = styled.div`
  flex-grow: 1;
  padding: ${(props) => props.theme.tokens.spacings.space30};
  overflow: scroll;
`;

export const Spacer = styled.div`
  height: ${(props) => props.theme.tokens.spacings.space50};
`;

export const LoadingTextContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoadingText = styled.div`
  margin: auto 0;
`;

export const Dropzone = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: #eeeeee;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

export const Bordered = styled.div`
  border-bottom: 1px solid black;
  margin-bottom: ${(props) => props.theme.tokens.spacings.space50};
  margin-top: ${(props) => props.theme.tokens.spacings.space30};
`;

export const ImageInputContainer = styled.div`
  width: 100%;
`;

export const ImagePreviewContainer = styled.div`
  margin: ${(props) => props.theme.tokens.spacings.space70};
`;

export const ImagePreview = styled.img`
  margin-left: ${(props) => props.theme.tokens.spacings.space40};
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  max-width: 240px;
  max-height: 36px;
  width: auto;
  height: auto;
`;
export const ProfilePreview = styled.img`
  margin-left: ${(props) => props.theme.tokens.spacings.space40};
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  max-width: 120px;
  min-width: 120px;
  max-height: 120px;
  min-height: 120px;
  border-radius: 60px;
  width: auto;
  height: auto;
`;
export const SplashPreview = styled.img`
  margin-left: ${(props) => props.theme.tokens.spacings.space40};
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  max-width: 120px;
  max-height: 120px;
  width: auto;
  height: auto;
`;
export const ColorInputContainer = styled.div`
  padding-right: 0px;
`;
