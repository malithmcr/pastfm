import { Box, Text, Stack, Flex } from "@chakra-ui/react";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

export const FavoritesList = () => {
  const [favorites] = useLocalStorage("album", "");
  

  return (
    <Stack mt="20">
      {!favorites ? (
        <>No favorites Found</>
      ) : (
        <>
          <Text fontSize="16" fontWeight="semibold" mb="2">
            Your favorites:
          </Text>
          {favorites &&
            favorites.map((favorite: string) => {
              return (
                <Flex mb="2" key={favorite}>
                  <Box ml="3">
                    <Text fontWeight="bold">{favorite}</Text>
                  </Box>
                </Flex>
              );
            })}
        </>
      )}
    </Stack>
  );
};
