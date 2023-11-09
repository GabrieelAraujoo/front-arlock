import React from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  extendTheme,
  ChakraProvider,
  FormControl,
  FormLabel,
  Box,
} from "@chakra-ui/react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

// export function InputLabelIcon({ label, status, showPassword, ml, ...rest }) {
//   return (
//     <InputGroup
//       display="Flex"
//       flexDir="column"
//       mt="1rem"
//       p="10px"
//       marginLeft={ml}
//       color="black"
//       borderRadius="12px"
//       border="1px solid #EDE7F6"
//       boxShadow=" 0 2px 5px rgb(0, 0, 0, .5);"
//       _hover={{ border: "1px solid", borderColor: "#558085" }}
//     >
//       <Text textStyle="Bold" fontSize="0.7rem" pl="3%" color="gray.500">
//         {label}
//       </Text>
//       <Input
//         w="100%"
//         h="30px"
//         borderRadius="12px"
//         borderColor="none"
//         fontSize="16px"
//         border="none"
//         fontWeight="bold"
//         color="#000"
//         _focusVisible={{ border: "none" }}
//         _focus={{ border: "none" }}
//         {...rest}
//       />
//       <InputRightElement
//         mt="20px"
//         mr="10px"
//         cursor="pointer"
//         display="flex"
//         justifyContent="center"
//         onClick={showPassword}
//       >
//         {status === true ? (
//           <AiFillEyeInvisible color="green.500" />
//         ) : (
//           <AiFillEye color="green.500" />
//         )}
//       </InputRightElement>
//     </InputGroup>
//   );
// }

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};

export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});

export function InputLabelIcon({
  erro,
  label,
  status,
  showPassword,
  marginRight,
  ...rest
}) {
  return (
    <InputGroup
      display="Flex"
      flexDir="column"
      marginRight={marginRight}
      mt="1.5rem"
    >
      <ChakraProvider theme={theme}>
        <Box>
          <FormControl
            variant="floating"
            id="first-name"
            isRequired
            borderColor={erro ? "red" : "#558085"}
          >
            <Input placeholder=" " paddingY="18px" {...rest} />
            <FormLabel>{label}</FormLabel>
            <InputRightElement
              mr="10px"
              cursor="pointer"
              display="flex"
              justifyContent="center"
              onClick={showPassword}
            >
              {status === true ? (
                <AiFillEyeInvisible color="green.500" />
              ) : (
                <AiFillEye color="green.500" />
              )}
            </InputRightElement>
          </FormControl>
        </Box>
      </ChakraProvider>
    </InputGroup>
  );
}
