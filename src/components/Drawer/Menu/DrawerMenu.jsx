import React from "react";
import { Drawer, DrawerOverlay, DrawerContent } from "@chakra-ui/react";
import MenuLateral from "../../Menu/MenuLateral";

export default function DrawerMenu({ onClose, isOpen }) {
  return (
    <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent maxW="180px" backgroundColor="#fff">
        <MenuLateral />
      </DrawerContent>
    </Drawer>
  );
}
