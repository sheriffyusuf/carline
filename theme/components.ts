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
        },
        /*    _icon: {
            color: `${colorScheme}.900`,
          },
          _spinner: {
            color: `${colorScheme}.900`,
          }, */

        _light: {
          bg: `white`,
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
      /*   outline: {
        borderWidth: 2,
      }, */
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
};
export default components;
