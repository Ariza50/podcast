import { render, screen } from '@testing-library/react';
import MainLayout from "./MainLayout";
import configureMockStore from 'redux-mock-store';
import {Provider} from "react-redux";

test('Render: renders <MainLayout/> without loading', () => {
  jest.mock('axios')

  const store = configureMockStore()({ podcast: { isLoading: false } })

  render(
    <Provider store={store}>
      <MainLayout />
    </Provider>
  )

  screen.getByText('Podcaster')
  screen.getByRole('separator')
})

test('Render: renders <MainLayout/> with loading', () => {
  jest.mock('axios')

  const store = configureMockStore()({ podcast: { isLoading: true } })

  render(
    <Provider store={store}>
      <MainLayout />
    </Provider>
  )

  screen.getByText('Podcaster')
  screen.getByRole('separator')
  screen.getByRole('progressbar')
})
