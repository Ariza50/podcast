import Page from "../../components/infrastructure/Page";
import {useParams} from "react-router-dom";
import {PodcastBanner} from "../../components/modules/common/podcast-banner/PodcastBanner";
import {Grid} from "@mui/material";
import {EpisodesCounter} from "../../components/modules/detail-podcast/episodes-counter/EpisodesCounter";
import {EpisodesList} from "../../components/modules/detail-podcast/episodes-list/EpisodesList";
import {useDispatch, useSelector} from "../../redux/store";
import {useEffect} from "react";
import {getPodcastDetail} from "../../redux/slices/podcast";
import {usePodcastDetails} from "../../hooks/usePodcastDetails";

export const DetailPodcast = () => {
  const { podcastId } = useParams();
  const dispatch = useDispatch();
  // const { podcast } = useSelector((state) => state.podcast);
  const { podcast } = usePodcastDetails({podcastId});

  useEffect(() => {
    dispatch(getPodcastDetail(podcastId));
  }, [dispatch, podcastId]);

  if (!podcast) {
    return
  }

  console.log('-> podcast', podcast)

  const podcastDetails = podcast.results[0];
  const episodes = podcast.results.slice(1);

  return (
    <Page title="Podcast">
      <Grid container>
        <Grid item xs={4}>
          <PodcastBanner {...podcastDetails}/>
        </Grid>
        <Grid item xs={8}>
            <EpisodesCounter counter={podcast.resultCount}/>
            <EpisodesList episodes={episodes}/>
        </Grid>

      </Grid>
    </Page>
  );
}
