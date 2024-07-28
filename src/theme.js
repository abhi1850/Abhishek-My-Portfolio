import { createTheme } from '@mui/material/styles';

import colors from './assets/scss/theme-variables.module.scss';

const theme = createTheme({
    palette: {
        primary: {
            main: colors.primaryMain,
            light: colors.primaryLight,
        },
        secondary: {
            main: colors.secondaryMain,
        },
        common: {
            grey: colors.colorGrey,
            white: colors.colorWhite,
            whiteSmoke: colors.colorWhitesmoke,
            whiteSmokeLight: colors.whiteSmokeLight,
            orange: colors.colorOrange,
            secondaryOrange: colors.secondaryOrange,
            superBlack: colors.superBlack,
            blue: colors.colorBlue,
            reject: colors.reject,
            pinkSwan: colors.pinkSwan,
            silverGrey: colors.oldSilverGrey,
            black: colors.colorBlack,
            platinum: colors.platinum,
            darkGrey: colors.colorDarkGrey,
            positiveGreen: colors.positiveGreen,
            negativeRed: colors.negativeRed,
            primaryGreen: colors.primaryGreen,
            secondaryGreen: colors.secondaryGreen,
            mainGrey: colors.mainGrey,
        },
        grey: {
            main: 'rgba(0,0,0,0.05)',
            dark: 'rgba(0,0,0)',
            darkLite: 'rgba(0,0,0,0.7)',
        },
        pipeline: {
            completed: colors.pipelineCompleted,
            active: colors.primaryLight,
            inactive: colors.pipelineInactive,
            mode: colors.pipelineBordermode,
            state: colors.pipelineOwnerstate,
        },
        creditruleBackground: {
            pass: '#D7FFD8',
            fail: '#FFEAEA',
        },
        creditruleText: {
            pass: '#4ECB71',
            fail: colors.negativeRed,
        },
        navigate: {
            icons: colors.navigateIcons,
        },
        download: {
            link: colors.downloadLink,
        },
    },
    typography: {
        fontSize: 16,
        fontWeight: 400,
        fontFamily: 'Poppins',
    },
    spacing: (factor) => `${0.25 * factor}rem`, // Custom spacing function
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.oldSilverGrey,
                    color: colors.whitesmoke,
                    borderRadius: '0.25rem',
                    fontSize: '1rem',
                    fontWeight: '700',
                    padding: '0.5rem 0.75rem',
                },
                arrow: {
                    display: 'none',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        background: colors.disableButtonBgColor,
                        color: colors.disableButtonColor,
                        borderColor: colors.disableButtonBgColor,
                        cursor: 'no-drop',
                        pointerEvents: 'auto',
                    },
                    '&.Mui-disabled:hover': {
                        background: colors.disableButtonBgColor,
                        color: colors.disableButtonColor,
                    },
                },
            },
        },
    },
});

export { theme };
