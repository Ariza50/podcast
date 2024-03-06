import {render, screen} from '@testing-library/react'
import {ListPodcast} from "./ListPodcast";
import {Provider} from "react-redux";
import {store, useDispatch, useSelector} from "../../redux/store";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

const podcasts = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  }];

jest.mock('../../redux/store')

describe('ListPodcast', () => {

  beforeEach(() => {
    useSelector.mockImplementation(callback => (callback({podcast: {podcastList: podcasts, isLoading: true}})))
    useDispatch.mockImplementation(() => jest.fn());
  })

  test('Render: renders <ListPodcast/>', async () => {

    render(
      <Provider store={store}>
        <ListPodcast/>
      </Provider>
    )


    expect(screen.getAllByTestId('cardLink')).toHaveLength(4)
  })

})
