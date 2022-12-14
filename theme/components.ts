const components = {
  Button: {
    baseStyle: {
      rounded: "xl",
      _text: {
        //fontWeight: 800,
        fontFamily: "Urbanist_700Bold",
      },
      // size: "lg",
    },
    defaultProps: {
      size: "lg",
      //colorScheme: "primary",
      //    colorScheme: "brand",
    },
    variants: {
      primary: {
        _text: {
          color: `primary.500`,
          //lineHeight: "xl",
        },
        /*    _icon: {
            color: `${colorScheme}.900`,
          },
          _spinner: {
            color: `${colorScheme}.900`,
          }, */

        _light: {
          bg: "white",
          /*  _hover: {
              bg: `${colorScheme}.200`,
            }, */
          _pressed: {
            //    bg: `${colorScheme}.300`,
          },
        },
        /*      _dark: {
            bg: `${colorScheme}.300`,
            _hover: {
              bg: `${colorScheme}.200`,
            },
            _pressed: {
              bg: `${colorScheme}.100`,
            },
          }, */
      },
      outlined: {
        _text: { color: "white", fontFamily: "Urbanist_500Medium" },
        borderWidth: 1,
        borderColor: "primary.300",
      },
      outline: {
        _text: { color: "gray.900", fontFamily: "Urbanist_500Medium" },
        //  borderWidth: 1,
        // borderColor: "primary.300",
      },
      poutline: {
        _text: {
          color: "primary.500",
          fontFamily: "Urbanist_700Bold",
          lineHeight: "sm",
        },

        borderWidth: 1,
        borderColor: "primary.500",
      },
    },
    sizes: {
      lg: {
        py: "4",
        _text: {
          fontSize: "md",
        },
      },
    },
  },
  Input: {
    baseStyle: {
      borderRadius: "xl",
      _light: {
        py: 4,
        // px: 7,
        // borderRadius: "xl",
        bg: "gray.50",

        // variant: "filled",
        _text: {
          //fontWeight: 800,
          fontFamily: "Urbanist_700Bold",
        },
      },
      // size: "lg",
    },
    variants: {},
  },
  Text: { baseStyle: { fontSize: "md" } },
  Divider: { baseStyle: { bg: "gray.200" } },
};
export default components;
