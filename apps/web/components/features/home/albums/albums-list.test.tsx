import { render, fireEvent, waitFor, screen } from "@testing-library/react";

import { AlbumsList } from "./albums-list";

it("<AlbumsList /> renders without errors", () => {
  const mockedData =   {
    topalbums: {
      album: [
        {
          name: 'Nevermind',
          playcount: 46280429,
          mbid: 'f7930de3-081a-452a-bafe-f7285a2abb6d',
          url: 'https://www.last.fm/music/Nirvana/Nevermind',
          artist: {
            name: 'Nirvana',
            mbid: '9282c8b4-ca0b-4c6b-b7e3-4f7762dfc4d6',
            url: 'https://www.last.fm/music/Nirvana'
          },
          image: [
            {
              '#text': 'https://lastfm.freetls.fastly.net/i/u/34s/570021b68d3d9d2db08bc99a473303b0.png',
              size: 'small'
            },
            {
              '#text': 'https://lastfm.freetls.fastly.net/i/u/64s/570021b68d3d9d2db08bc99a473303b0.png',
              size: 'medium'
            },
            {
              '#text': 'https://lastfm.freetls.fastly.net/i/u/174s/570021b68d3d9d2db08bc99a473303b0.png',
              size: 'large'
            },
            {
              '#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/570021b68d3d9d2db08bc99a473303b0.png',
              size: 'extralarge'
            }
          ]
        },
        {
          name: 'Live and Loud',
          playcount: 380726,
          mbid: '229b1dee-ac34-4608-951d-38ed57d25606',
          url: 'https://www.last.fm/music/Nirvana/Live+and+Loud',
          artist: {
            name: 'Nirvana',
            mbid: '9282c8b4-ca0b-4c6b-b7e3-4f7762dfc4d6',
            url: 'https://www.last.fm/music/Nirvana'
          },
          image: [
            {
              '#text': 'https://lastfm.freetls.fastly.net/i/u/34s/5cda3bb9e4a54901c9de62bbac83d004.png',
              size: 'small'
            },
            {
              '#text': 'https://lastfm.freetls.fastly.net/i/u/64s/5cda3bb9e4a54901c9de62bbac83d004.png',
              size: 'medium'
            },
            {
              '#text': 'https://lastfm.freetls.fastly.net/i/u/174s/5cda3bb9e4a54901c9de62bbac83d004.png',
              size: 'large'
            },
            {
              '#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/5cda3bb9e4a54901c9de62bbac83d004.png',
              size: 'extralarge'
            }
          ]
        },
        {
          name: 'The Rolling Stone Magazines 500 Greatest Songs Of All Time',
          playcount: 161031,
          url: 'https://www.last.fm/music/Nirvana/The+Rolling+Stone+Magazines+500+Greatest+Songs+Of+All+Time',
          artist: {
            name: 'Nirvana',
            mbid: '9282c8b4-ca0b-4c6b-b7e3-4f7762dfc4d6',
            url: 'https://www.last.fm/music/Nirvana'
          },
          image: [
            {
              '#text': 'https://lastfm.freetls.fastly.net/i/u/34s/69f50154dec44cafb020aae2ef589036.png',
              size: 'small'
            },
            {
              '#text': 'https://lastfm.freetls.fastly.net/i/u/64s/69f50154dec44cafb020aae2ef589036.png',
              size: 'medium'
            },
            {
              '#text': 'https://lastfm.freetls.fastly.net/i/u/174s/69f50154dec44cafb020aae2ef589036.png',
              size: 'large'
            },
            {
              '#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/69f50154dec44cafb020aae2ef589036.png',
              size: 'extralarge'
            }
          ]
        }
      ],
      '@attr': {
        artist: 'Nirvana',
        page: '1',
        perPage: '50',
        totalPages: '1908',
        total: '95383'
      }
    }
  }
  render(
    <AlbumsList
      title="test"
      albums={mockedData}
    />
  );
});
