import {render, screen} from "@testing-library/react";
import React from "react";
import {PodcastBanner} from "./PodcastBanner";
import {trimLabel} from "../../../utils/format";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
  useParams: () => ({
    podcastId: "123"
  })
}));

describe('Render', () => {
  test('Render: renders <PodcastBanner />', () => {
    const props = {
      collectionName: "The Joe Rogan Experience",
      artistName: "Joe Rogan",
      artworkUrl600: "https://example.com/image1.jpg",
      feedUrl: "https://example.com/feed1"
    }
    render(<PodcastBanner {...props}  />)

    expect(mockedUsedNavigate).not.toHaveBeenCalled()
    screen.getByText(trimLabel(props.collectionName, 22))
    screen.getByText(`by ${trimLabel(props.artistName, 20)}`)
    screen.getAllByAltText(props.collectionName)
  })
})

describe('Interaction', () => {
  test('Render: renders <PodcastBanner />', () => {
    const props = {
      collectionName: "The Joe Rogan Experience",
      artistName: "Joe Rogan",
      artworkUrl600: "https://example.com/image1.jpg",
      feedUrl: "https://example.com/feed1"
    }
    render(<PodcastBanner {...props}  />)

    const bannerLink = screen.getByTestId('bannerLink')
    bannerLink.click()

    expect(mockedUsedNavigate).toHaveBeenCalled()
  })
})
