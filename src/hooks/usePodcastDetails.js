import {useDispatch, useSelector} from "../redux/store";
import {getPodcastDetail} from "../redux/slices/podcast";

export const usePodcastDetails = ({podcastId}) => {
  const dispatch = useDispatch();
  const { podcast } = useSelector((state) => state.podcast);

  const index = podcast.findIndex(podcast => podcast.podcastId === podcastId);

  if (index === -1) {
    dispatch(getPodcastDetail(podcastId));
  }

  return {
    podcast: podcast[index]?.details
  };
}
