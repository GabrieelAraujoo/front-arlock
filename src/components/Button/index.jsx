import React from "react";
import { Button, ButtonGroup } from '@chakra-ui/react';

export function ButtonExit({title}){
    return(
        <Button colorScheme='teal' variant='outline' marginLeft="20px" marginTop="40px" width="590px" height="45px">
                  {title}
               </Button>

 );
}