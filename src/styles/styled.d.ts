import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      textfieldCaret: string;
      bodyBg: string;
      bodyText: string;
      paragraphText: string;
      outlineBoxShallowBg: string;
      outlineBoxDeepBg: string;
      outlineBoxBorder: string;
      focusOutline: string;
      logoFg: string;
      navBarLinkText: string;
      navBarLinkTextSelected: string;
      navBarLinkBgSelected: string;
      buttonFg: string;
      accentButtonBg: string;
      footerBg: string;
      separator: string;
      slideIndicatorBg: string;
    };
  }
}
