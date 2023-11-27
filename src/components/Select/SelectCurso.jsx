import React from "react";
import {
  Select,
  InputGroup,
  extendTheme,
  FormControl,
  Box,
} from "@chakra-ui/react";

// export default function SelectLabel({
//   label,
//   ml,
//   placeholder,
//   options,
//   ...rest
// }) {
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
//       <Select
//         w="100%"
//         h="30px"
//         borderColor="none"
//         border="none"
//         _focusVisible={{ border: "none" }}
//         _focus={{ border: "none" }}
//         placeholder={placeholder}
//         {...rest}
//       >
//         {options.map((item) => {
//           return (
//             <option key={item.id} value={item.name}>
//               {item.nome}
//             </option>
//           );
//         })}
//       </Select>
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

export function SelectLabel({ placeholder, options, mgLeft, ...rest }) {
  return (
    <InputGroup
      display="Flex"
      flexDir="column"
      mt="1.5rem"
      h="46px"
      marginLeft={mgLeft}
    >
      <Box>
        <FormControl variant="floating" id="first-name" isRequired>
          <Select
            borderColor="#558085"
            placeholder={placeholder}
            h="45px"
            {...rest}
          >
            {options.map((item) => {
              return (
                <option key={item.id} value={item.name}>
                  {item.nome}
                </option>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </InputGroup>
  );
}
