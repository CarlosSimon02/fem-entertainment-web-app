// const theme = {
//   colors: {
//     primary: {
//       main: '#141414',
//       sub1: '#0f0f0f',
//       sub2: '#1A1A1A'
//     },
//     secondary: {
//       main: '#FFFFFF',
//       sub1: '#999999'
//     },
//     accent: {
//       main: '#e60000'
//     }
//   }
// };

const COLOR = {
  WHITE: '#FFF',
  BLACK: '#000',
  BLACK30: 'hsl(0,0%,30%)',
  BLACK25: 'hsl(0,0%,25%)',
  BLACK20: 'hsl(0,0%,20%)',
  BLACK15: 'hsl(0,0%,15%)',
  BLACK12: 'hsl(0,0%,12%)',
  BLACK10: 'hsl(0,0%,10%)',
  BLACK08: 'hsl(0,0%,8%)',
  BLACK06: 'hsl(0,0%,6%)',
  RED99: 'hsl(0,100%,99%)',
  RED95: 'hsl(0,100%,95%)',
  RED90: 'hsl(0,100%,90%)',
  RED80: 'hsl(0,100%,80%)',
  RED60: 'hsl(0,100%,60%)',
  RED55: 'hsl(0,100%,55%)',
  RED50: 'hsl(0,100%,50%)',
  RED45: 'hsl(0,100%,45%)',
  GREY99: 'hsl(0,100%,99%)',
  GREY97: 'hsl(240,7%,97%)',
  GREY95: 'hsl(240,7%,95%)',
  GREY90: 'hsl(240,7%,90%)',
  GREY75: 'hsl(240,7%,75%)',
  GREY70: 'hsl(240,7%,70%)',
  GREY65: 'hsl(240,7%,65%)',
  GREY60: 'hsl(240,7%,60%)'
};

const accented = {
  textfieldCaret: COLOR.RED45,
  accentButtonBg: COLOR.RED45
};

const darkTheme = {
  color: {
    bodyBg: COLOR.BLACK08,
    bodyText: COLOR.WHITE,
    paragraphText: COLOR.GREY60,
    outlineBoxShallowBg: COLOR.BLACK10,
    outlineBoxDeepBg: COLOR.BLACK06,
    outlineBoxBorder: COLOR.BLACK12,
    focusOutline: COLOR.RED45,
    logoFg: COLOR.WHITE,
    navBarLinkText: COLOR.GREY75,
    navBarLinkTextSelected: COLOR.WHITE,
    navBarLinkBgSelected: COLOR.BLACK10,
    buttonFg: COLOR.WHITE,
    footerBg: COLOR.BLACK06,
    separator: COLOR.BLACK15,
    slideIndicatorBg: COLOR.BLACK20,
    ...accented
  }
};

const lightTheme = {};

const theme = {
  dark: darkTheme,
  light: lightTheme
};

export default theme;
