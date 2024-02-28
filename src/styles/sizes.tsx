export const fontWeights = {
  light: 300,
  medium: 500
};

export const breakpoints = {
  up: {
    xs: 375, // for small screen mobile
    sm: 768, // for tablets
    md: 1000, // for laptops
    lg: 1450 // for desktop / monitors
  },
  down: {
    xs: 374.99, // for small screen mobile
    sm: 767.99, // for tablets
    md: 999.99, // for laptops
    lg: 1449.99 // for desktop / monitors
  }
};

export const device = {
  up: {
    xs: `(min-width: ${breakpoints.down.xs / 16}em)`,
    sm: `(min-width: ${breakpoints.down.sm / 16}em)`,
    md: `(min-width: ${breakpoints.down.md / 16}em)`,
    lg: `(min-width: ${breakpoints.down.lg / 16}em)`
  },
  down: {
    xs: `(max-width: ${breakpoints.up.xs / 16}em)`,
    sm: `(max-width: ${breakpoints.up.sm / 16}em)`,
    md: `(max-width: ${breakpoints.up.md / 16}em)`,
    lg: `(max-width: ${breakpoints.up.lg / 16}em)`
  }
};
