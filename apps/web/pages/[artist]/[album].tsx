import { Box, Container, SimpleGrid, Image, Text } from "@chakra-ui/react";
import { wrapper } from "../../store";
import { fetchAlbum } from "../../store/slices/album";
import { Cover } from "../../components/features/artist/cover";
import { TrackList } from "../../components/features/artist/tracks-list";
import Link from "next/link";

export default function Album(props: {
  data: {
    album: { data: any };
  };
}) {
  const { data } = props.data.album;

  return (
    <Container maxW="1000" w="full">
      <Link href="/" >Go Back</Link>
      <Cover album={data} />
      <TrackList album={data} />
    </Container>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      // @ts-ignore: Unreachable code error
      await store.dispatch(fetchAlbum(etc.query.artist, etc.query.album));

      const data = store.getState();

      return {
        props: {
          query: etc.query,
          data,
        },
      };
    }
);
