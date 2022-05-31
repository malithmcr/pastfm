import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState, AppThunk } from '..';
import axios from "axios"
export const albumSlice = createSlice({
  name: 'album',

  initialState: {
    data: null
  },

  reducers: {
    setAlbumData: (state, action) => {
      state.data = action.payload;
    }
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {        
      if (!action.payload.album) {
        return state;
      }
      state.data = action.payload.album;
    }
  }
});

export const { setAlbumData } = albumSlice.actions;

export const selectAlbum = (state: AppState) => state.album;

export const fetchAlbum =
    (artist: string, album: string): AppThunk =>
      async dispatch => {
        //TODO: add to .env
        const albums = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=bb2b994fc307327770f70783ad4d8829&artist=${artist}&album=${album}&format=json`)
        
        dispatch(
            setAlbumData(albums.data.album)
        );
      };


export default albumSlice.reducer;