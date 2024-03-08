import {render, screen} from '@testing-library/react'
import {DetailPodcast} from "./DetailPodcast";
import {usePodcastDetails} from "../../hooks/usePodcastDetails";
import {trimLabel} from "../../components/utils/format";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock('../../hooks/usePodcastDetails');

describe('Render: <DetailPodcast />', () => {

  beforeEach(() => {
    usePodcastDetails.mockImplementation((podcastId) => ({
      podcast: {
        resultCount: 3,
        results: [
          {
            collectionName: 'The Joe Rogan Experience',
            trackName: 'The Joe Rogan Experience',
            artistName: 'Joe Rogan',
            artworkUrl100: 'https://example.com/image1.jpg',
            feedUrl: 'https://example.com/feed1.xml',
            releaseDate: '2023-03-06T00:00:00-07:00',
            trackTimeMillis: 12114000,
          },
          {
            collectionName: 'The Joe Rogan Experience',
            trackName: 'Episode 1',
            description: 'This is a description of episode 1',
            episodeUrl: 'https://example.com/episode1.mp3',
            releaseDate: '2022-03-01T06:31:00-07:00',
            trackTimeMillis: 13353000,
          },
          {
            collectionName: 'The Joe Rogan Experience',
            trackName: 'Episode 2',
            description: 'This is a description of episode 2',
            episodeUrl: 'https://example.com/episode2.mp3',
            releaseDate: '2024-03-07T08:06:00-07:00',
            trackTimeMillis: 11551000,
          },
        ],
      }
    }));
  });

  test('Render: renders <DetailPodcast />', () => {
    render(<DetailPodcast />)

    expect(mockedUsedNavigate).not.toHaveBeenCalled()
    screen.getByText(trimLabel('The Joe Rogan Experience', 22))
    screen.getByText('Episodes: 3')
    screen.getByText('Episode 2')

  })

})
