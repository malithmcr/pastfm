import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { albumConfig } from "../../../config/global";

type CoverProps = {
  album: {
    name: string;
    wiki: { summary?: string; published?: string };
    image: { "#text": string }[];
  };
};

export const Cover = ({ album }: CoverProps) => {
  const toast = useToast();

  const { name, wiki, image } = album;

  const [favorites, setFavorite] = useLocalStorage("album", "");
  return (
    <Box mt="4">
      <SimpleGrid templateColumns="repeat(2, 1fr)" gap={6}>
        <Box>
          <Image
            src={!!image[3]["#text"] ? image[3]["#text"] : albumConfig.placeholder}
            alt="Album Cover"
          />
        </Box>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Text as="h1" fontWeight="bold" fontSize="3xl">
              {name}
            </Text>
            <Button
              onClick={() => {
                setFavorite([...favorites, name]);
                toast({
                  title: `${name} Added to your favorite.`,
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              }}
              _hover={{ bg: "#ebedf0" }}
              leftIcon={<StarIcon />}
              variant="dark"
            >
              Add To Favorite
            </Button>
          </Flex>
          <Text fontSize="16" fontWeight="semibold">
            {wiki?.published}
          </Text>
          <Text fontSize="16" noOfLines={5} mt="4">
            {wiki?.summary}
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
