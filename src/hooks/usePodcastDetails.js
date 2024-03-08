import {useSelector} from "../redux/store";

export const usePodcastDetails = ({podcastId}) => {
  const { podcast } = useSelector((state) => state.podcast);

  const index = podcast.findIndex(podcast => podcast.podcastId === podcastId);

  return {
    podcast: podcast[index]?.details
  };
}
