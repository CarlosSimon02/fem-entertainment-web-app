export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700
};

export const breakpoints = {
  up: {
    mobile: 390, // for small screen mobile
    tablet: 830, // for tablets
    laptop: 1440, // for laptops
    desktop: 1920 // for desktop / monitors
  },
  down: {
    mobile: 389.99, // for small screen mobile
    tablet: 829.99, // for tablets
    laptop: 1439.99, // for laptops
    desktop: 1919.99 // for desktop / monitors
  }
};

export const device = {
  up: {
    mobile: `(min-width: ${breakpoints.down.mobile / 16}em)`,
    tablet: `(min-width: ${breakpoints.down.tablet / 16}em)`,
    laptop: `(min-width: ${breakpoints.down.laptop / 16}em)`,
    desktop: `(min-width: ${breakpoints.down.desktop / 16}em)`
  },
  down: {
    mobile: `(max-width: ${breakpoints.up.mobile / 16}em)`,
    tablet: `(max-width: ${breakpoints.up.tablet / 16}em)`,
    laptop: `(max-width: ${breakpoints.up.laptop / 16}em)`,
    desktop: `(max-width: ${breakpoints.up.desktop / 16}em)`
  }
};
