import { Container, Flex } from "@chakra-ui/react";
import { wrapper } from "../store";
import { fetchAlbums } from "../store/slices/albums";

import { AlbumsList } from "../components/features/home/albums/albums-list";
import Link from "next/link";

export default function Home(props: {
  albums: {
    data: { topalbums: any };
  };
}) {
  const { albums } = props;

  return (
    <Container maxW="1000" w="full" mt="2">
      <Flex justifyContent="flex-end">
      <Link href="/favorites">Your Favorites</Link>
      </Flex>
      <AlbumsList albums={albums.data} title="Albums" />
    </Container>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ }) => {
      await store.dispatch(fetchAlbums());

      const data = store.getState();

      return {
        props: {
          ...data,
        },
      };
    }
);
