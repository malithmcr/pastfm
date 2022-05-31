import {render, fireEvent, waitFor, screen} from '@testing-library/react'


import { FavoritesList } from './favorites-list';

it('<FavoritesList /> renders without errors', () => {
  render(<FavoritesList />);
});


