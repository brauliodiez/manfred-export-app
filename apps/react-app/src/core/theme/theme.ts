const BASE_SPACING = 4;

export const theme = {
  palette: {
    primary: {
      50: '#EAF3F3',
      100: '#BCD9DB',
      200: '#9CC7CA',
      300: '#6FAEB1',
      400: '#539EA2',
      500: '#28868B',
      600: '#247A7E',
      700: '#1C5F63',
      800: '#164A4C',
      900: '#11383A',
    },
    secondary: {
      50: '#FCEFEB',
      100: '#F6CDC0',
      200: '#F1B5A2',
      300: '#EB9477',
      400: '#E77F5D',
      500: '#E15F34',
      600: '#CD562F',
      700: '#A04325',
      800: '#7C341D',
      900: '#5F2816',
    },
    info: {
      50: '#FBFBFA',
      100: '#F4F2F1',
      200: '#EEECEA',
      300: '#E6E4E0',
      400: '#E1DEDA',
      500: '#DAD6D1',
      600: '#C6C3BE',
      700: '#9B9894',
      800: '#787673',
      900: '#5C5A58',
    },
    success: {
      50: '#E9F9EF',
      100: '#BAECCD',
      200: '#98E3B4',
      300: '#6AD692',
      400: '#4DCE7D',
      500: '#20C25D',
      600: '#1DB155',
      700: '#178A42',
      800: '#126B33',
      900: '#0D5127',
    },
    warning: {
      50: '#FEFAE8',
      100: '#FCF0B9',
      200: '#FAE997',
      300: '#F8DF67',
      400: '#F6D949',
      500: '#F4CF1C',
      600: '#DEBC19',
      700: '#AD9314',
      800: '#86720F',
      900: '#66570C',
    },
    error: {
      50: '#FFE8EB',
      100: '#FEB8C2',
      200: '#FE96A4',
      300: '#FE667A',
      400: '#FD4961',
      500: '#FD1B39',
      600: '#E61934',
      700: '#B41328',
      800: '#8B0F1F',
      900: '#6A0B18',
    },
    light: {
      50: '#FEFEFE',
      100: '#FAFDFD',
      200: '#F8FCFC',
      300: '#F5FAFB',
      400: '#F3F9FA',
      500: '#F0F8F9',
      600: '#DAE2E3',
      700: '#AAB0B1',
      800: '#848889',
      900: '#656869',
    },
    dark: {
      50: '#E9EAEB',
      100: '#B9BFC1',
      200: '#989FA3',
      300: '#68747A',
      400: '#4B5960',
      500: '#1E2F38',
      600: '#1B2B33',
      700: '#152128',
      800: '#111A1F',
      900: '#0D1418',
    },
    commons: {
      black: '#000',
      white: '#fff',
    },
  },
  typography: {
    h6: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '18px',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
    },
    desktop: {
      h1: {
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '72px',
        lineHeight: '96px',
        fontFamily: 'Sanchez',
      },
      h2: {
        fontFamily: 'Sanchez',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '56px',
        lineHeight: '72px',
      },
      h3: {
        fontFamily: 'Sanchez',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '48px',
        lineHeight: '64px',
      },
      h4: {
        fontFamily: 'Sanchez',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '32px',
        lineHeight: '40px',
      },
      h5: {
        fontFamily: 'Sanchez',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '24px',
        lineHeight: '32px',
      },
    },
    tablet: {
      h1: {
        fontFamily: 'Sanchez',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '56px',
        lineHeight: '72px',
      },
      h2: {
        fontFamily: 'Sanchez',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '48px',
        lineHeight: '64px',
      },
      h3: {
        fontFamily: 'Sanchez',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '40px',
        lineHeight: '51px',
        letterSpacing: '-0.5px',
      },
      h4: {
        fontFamily: 'Sanchez',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '28px',
        lineHeight: '32px',
      },
      h5: {
        fontFamily: 'Sanchez',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '24px',
      },
    },
    mobile: {
      h1: {
        fontFamily: 'Sanchez',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '40px',
        lineHeight: '56px',
      },
      h2: {
        fontFamily: 'Sanchez',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '36px',
        lineHeight: '48px',
        letterSpacing: '-0.5px',
      },
      h3: {
        fontFamily: 'Sanchez',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '32px',
        lineHeight: '40px',
        letterSpacing: '-0.5px',
      },
      h4: {
        fontFamily: 'Sanchez',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '24px',
        lineHeight: '28px',
      },
      h5: {
        fontFamily: 'Sanchez',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '24px',
      },
    },
  },
  spacing: (multiplier: number = 1) => `${multiplier * BASE_SPACING}px`,
};
