import { Box, Container, SimpleGrid, Image, Text } from "@chakra-ui/react";

import { FavoritesList } from "../components/features/favorites/favorites-list";
import Link from "next/link";

export default function Favorites() {
  
  return (
    <Container maxW="1000" w="full">
      <Link href="/" >Go Back</Link>
      
      <FavoritesList/>
    </Container>
  );
}
