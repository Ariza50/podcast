import {render, screen} from "@testing-library/react";
import {DetailEpisodeCard} from "./DetailEpisodeCard";

test('Render: render <DetailEpisodeCard />', () => {
  const episode = {
    trackName: 'Episode 1',
    description: 'This is a description of episode 1',
    episodeUrl: 'https://example.com/episode1.mp3',
  }
  render(<DetailEpisodeCard episode={episode} />)

  screen.getByText('Episode 1')
  screen.getByText('This is a description of episode 1')
  screen.getByTestId('audio')
})
