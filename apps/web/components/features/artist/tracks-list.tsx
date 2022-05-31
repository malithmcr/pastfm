import Link from "next/link";
import {
  Box,
  Image,
  Text,
  Stack,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { formatDuration } from "../../../utils/format-duration";
type CoverProps = {
  album: {
    tracks?: {
      track: { name: string; duration: Number; "@attr": { rank: Number } }[];
    };
  };
};

export const TrackList = ({ album }: CoverProps) => {

  const { tracks } = album;
  return (
    <Stack mt="20">
      <Text fontSize="16" fontWeight="semibold" mb="2">
        Songs:
      </Text>
      {tracks?.track.map((track) => {
        return (
          <Flex key={track.name} mb="2">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/747/747965.png"
              height="8"
              alt="play"
            />
            <Box ml="3">
              <Text fontWeight="bold">
                {track.name}
                <Badge ml="1" colorScheme="green">
                  {track["@attr"].rank}
                </Badge>
              </Text>
              <Text fontSize="sm">{formatDuration(track.duration)}</Text>
            </Box>
          </Flex>
        );
      })}
    </Stack>
  );
};
