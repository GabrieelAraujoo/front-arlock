import React from "react";
import {
  Flex,
  Text,
  Button,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import DrawerMenu from "../Drawer/Menu/DrawerMenu";
import { MdMenu } from "react-icons/md";

export default function PageTitle({ title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const variant = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
  });

  return (
    <>
      <Flex
        backgroundColor="white"
        width="full"
        minHeight="80px"
        borderRadius="15px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          marginLeft="1rem"
          fontSize={{ base: "20px", md: "30px", lg: "30px" }}
          textColor="#558085"
          fontWeight="bold"
        >
          {title}
        </Text>

        {variant !== true && (
          <Button
            backgroundColor="#BFDDE0"
            onClick={onOpen}
            marginRight="1rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <MdMenu />
          </Button>
        )}
      </Flex>

      <DrawerMenu onClose={onClose} isOpen={isOpen} />
    </>
  );
}
