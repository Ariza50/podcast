import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import {PodcastCard} from "./PodcastCard";
import {trimLabel} from "./utils/format";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

const podcast = {
  id: {
    attributes: {
      'im:id': '123',
    },
  },
  'im:name': {
    label: 'The Joe Rogan Experience',
  },
  'im:artist': {
    label: 'Joe Rogan',
  },
  'im:image': [
    {
      label: 'https://example.com/image1.jpg',
    },
    {
      label: 'https://example.com/image2.jpg',
    },
    {
      label: 'https://example.com/image3.jpg',
    }
  ],
}

test('Render: renders <PodcastCard />', () => {
  render(<PodcastCard podcast={podcast} />)

  screen.getByText(trimLabel(podcast["im:name"].label, 22).toUpperCase())
  screen.getByText(`Author: ${trimLabel(podcast["im:artist"].label, 20)}`)
  screen.getAllByAltText(podcast["im:image"][2].label)
})

test('Interaction: Navigates to podcast details', () => {
  const podcast = {
    id: {
      attributes: {
        'im:id': '123',
      },
    },
    'im:name': {
      label: 'The Joe Rogan Experience',
    },
    'im:artist': {
      label: 'Joe Rogan',
    },
    'im:image': [
      {
        label: 'https://example.com/image1.jpg',
      },
      {
        label: 'https://example.com/image2.jpg',
      },
      {
        label: 'https://example.com/image3.jpg',
      }
    ],
  }

  render(<PodcastCard podcast={podcast} />)

  screen.getByTestId('cardLink').click()
  expect(mockedUsedNavigate).toHaveBeenCalledWith(`/podcast/${podcast.id.attributes['im:id']}`)
})
