import {render, screen} from '@testing-library/react'
import {usePodcastDetails} from "../../hooks/usePodcastDetails";
import {DetailEpisode} from "./DetailEpisode";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
  useParams: () => ({
    podcastId: 'podcastId',
    episodeId: 3216543
  })
}));

jest.mock('../../hooks/usePodcastDetails');

describe('Render: <DetailEpisode />', () => {

  beforeEach(() => {
    usePodcastDetails.mockImplementation(() => ({
      podcast: {
        resultCount: 3,
        results: [
          {
            collectionName: 'The Joe Rogan Experience',
            trackName: 'Episode 0',
            artistName: 'Joe Rogan',
            artworkUrl100: 'https://example.com/image1.jpg',
            feedUrl: 'https://example.com/feed1.xml',
            releaseDate: '2023-03-06T00:00:00-07:00',
            trackTimeMillis: 12114000,
            trackId: 5165120
          },
          {
            collectionName: 'The Joe Rogan Experience',
            trackName: 'Episode 1',
            description: 'This is a description of episode 1',
            episodeUrl: 'https://example.com/episode1.mp3',
            releaseDate: '2022-03-01T06:31:00-07:00',
            trackTimeMillis: 13353000,
            trackId: 3216543
          },
          {
            collectionName: 'The Joe Rogan Experience',
            trackName: 'Episode 2',
            description: 'This is a description of episode 2',
            episodeUrl: 'https://example.com/episode2.mp3',
            releaseDate: '2024-03-07T08:06:00-07:00',
            trackTimeMillis: 11551000,
            trackId: 65653410
          },
        ],
      }
    }));
  });

  test('Render: renders <DetailPodcast />', () => {
    render(<DetailEpisode />)

    expect(mockedUsedNavigate).not.toHaveBeenCalled()
    screen.getByText('Episode 1')
    screen.getByText('This is a description of episode 1')
    screen.getByTestId('audio')
  })

})
