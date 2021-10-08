import React from "react";
import Image from "next/image";
import { Heading, Text, SimpleGrid } from "@chakra-ui/react";

const Characters = ({ characters }) => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="40px">
      {characters.map(chara => {
        return (
          <div key={chara.id}>
            <Image src={chara.image} width={300} height={300} />
            <Heading as="h4" align="center" size="md">
              {chara.name}
            </Heading>
            <Text align="center">Origin: {chara.origin.name}</Text>
            <Text align="center">Location: {chara.location.name}</Text>
          </div>
        );
      })}
    </SimpleGrid>
  );
};

export default Characters;
