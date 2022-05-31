import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState, AppThunk } from '..';
import axios from "axios"
export const albumsSlice = createSlice({
  name: 'albums',

  initialState: {
    data: null
  },

  reducers: {
    setAlbumsData: (state, action) => {
      state.data = action.payload;
    }
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {        
      if (!action.payload.albums) {
        return state;
      }
      state.data = action.payload.albums;
    }
  }
});

export const { setAlbumsData } = albumsSlice.actions;

export const selectAlbum = (state: AppState) => state.album;

export const fetchAlbums =
    (): AppThunk =>
      async dispatch => {
        //TODO: add to .env
        const albums = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}?method=artist.gettopalbums&artist=Nirvana&api_key=bb2b994fc307327770f70783ad4d8829&format=json`)
        
        dispatch(
          setAlbumsData(albums.data)
        );
      };


export default albumsSlice.reducer;