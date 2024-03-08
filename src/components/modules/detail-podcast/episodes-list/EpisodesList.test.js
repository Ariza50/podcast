import {EpisodesList, handleClick} from "./EpisodesList";
import {render, screen} from "@testing-library/react";
import {duration} from "../../../utils/format";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

const episodes = [
  {
    trackName: "trackName",
    releaseDate: "2023-03-06T00:00:00-07:00",
    trackTimeMillis: 11551000,
    collectionId: "collectionId0",
    trackId: "trackId0"
  },
  {
    trackName: "trackName",
    releaseDate: "2022-03-01T06:31:00-07:00",
    trackTimeMillis: 13353000,
    collectionId: "collectionId1",
    trackId: "trackId1"
  },
  {
    trackName: "trackName",
    releaseDate: "2024-03-07T08:06:00-07:00",
    trackTimeMillis: 12114000,
    collectionId: "collectionId2",
    trackId: "trackId2"
  }
]

test('Render: renders <EpisodesList /> without loading', () => {
  render(<EpisodesList episodes={episodes} />)

  expect(mockedUsedNavigate).not.toHaveBeenCalled()
  screen.getByText('Title')
  screen.getByText('Date')
  screen.getByText('Duration')

  const episodeLinks = screen.getAllByTestId('episodeLink')
  expect(episodeLinks).toHaveLength(3)
  episodeLinks.forEach((episodeLink, index) => {
    expect(episodeLink).toHaveTextContent(episodes[index].trackName)
  })
})

test('Render: renders <EpisodesList /> with proper date format', () => {
  render(<EpisodesList episodes={episodes} />)

  expect(mockedUsedNavigate).not.toHaveBeenCalled()
  screen.getByText('01/03/2022')
  screen.getByText('06/03/2023')
  screen.getByText('07/03/2024')
})

test('Render: renders <EpisodesList /> with proper time format', () => {
  render(<EpisodesList episodes={episodes} />)

  expect(mockedUsedNavigate).not.toHaveBeenCalled()
  screen.getByText(duration(episodes[0].trackTimeMillis))
  screen.getByText(duration(episodes[1].trackTimeMillis))
  screen.getByText(duration(episodes[2].trackTimeMillis))
})

test('Interaction: renders <EpisodesList />', () => {
  render(<EpisodesList episodes={episodes} />)

  expect(mockedUsedNavigate).not.toHaveBeenCalled()

  const episodeLinks = screen.getAllByTestId('episodeLink')

  expect(episodeLinks).toHaveLength(3)
  episodeLinks.forEach((episodeLink, index) => {
    episodeLink.click()
  })

  expect(mockedUsedNavigate).toHaveBeenCalledTimes(3)
})
