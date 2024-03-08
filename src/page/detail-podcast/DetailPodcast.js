import Page from "../../components/infrastructure/Page";
import {useParams} from "react-router-dom";
import {PodcastBanner} from "../../components/modules/common/podcast-banner/PodcastBanner";
import {Grid} from "@mui/material";
import {EpisodesCounter} from "../../components/modules/detail-podcast/episodes-counter/EpisodesCounter";
import {EpisodesList} from "../../components/modules/detail-podcast/episodes-list/EpisodesList";
import {usePodcastDetails} from "../../hooks/usePodcastDetails";

export const DetailPodcast = () => {
  const { podcastId } = useParams();
  const { podcast } = usePodcastDetails({podcastId});

  if (!podcast) {
    return
  }

  const podcastDetails = podcast.results[0];
  const episodes = podcast.results.slice(1);

  return (
    <Page title="Podcast">
      <Grid container>
        <Grid item xs={4}>
          <PodcastBanner {...podcastDetails}/>
        </Grid>
        <Grid item xs={8}>
            <EpisodesCounter counter={podcastDetails.trackCount}/>
            <EpisodesList episodes={episodes}/>
        </Grid>

      </Grid>
    </Page>
  );
}
