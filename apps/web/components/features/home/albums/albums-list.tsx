import Link from "next/link";
import { Box, SimpleGrid, Image, Text } from "@chakra-ui/react";
import { albumConfig } from "../../../../config/global";

type AlbumsProps = {
  title: string;
  albums: { topalbums: any };
};

export const AlbumsList = ({ title, albums }: AlbumsProps) => {
  return (
    <Box>
      <Text as="h6" fontSize="2xl" mb="4" textDecoration="underline">
        {title}
      </Text>

      <SimpleGrid
        gap={6}
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
      >
        {albums.topalbums.album.map(
          (album: {
            image: {
              "#text": string;
            }[];
            name: string;
            artist: {
              name: string;
            };
          }) => {
            return (
              <Link
                key={album.name}
                href={`${album.artist.name.toLowerCase()}/${album.name
                  .replace(/\//g, "-")
                  .toLowerCase()}`}
              >
                <Box w="100%" cursor="pointer">
                  <Image
                    fallback={
                      <Box
                        bg="gray.1"
                        height="100%"
                        width="100%"
                        borderRadius="radius.8"
                      />
                    }
                    boxShadow="lg"
                    src={
                      !!album.image[3]["#text"]
                        ? album.image[3]["#text"]
                        : albumConfig.placeholder
                    }
                    alt=""
                  />

                  <Text fontSize="14" mt="1" fontWeight="semibold">
                    {album.name}
                  </Text>

                  <Text fontSize="12">775337 Times Played</Text>
                </Box>
              </Link>
            );
          }
        )}
      </SimpleGrid>
    </Box>
  );
};
