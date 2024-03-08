import Page from "../../components/infrastructure/Page";
import {useParams} from "react-router-dom";
import {PodcastBanner} from "../../components/modules/common/podcast-banner/PodcastBanner";
import {Grid} from "@mui/material";
import {usePodcastDetails} from "../../hooks/usePodcastDetails";
import {DetailEpisodeCard} from "../../components/modules/detail-episode/DetailEpisodeCard";

export const DetailEpisode = () => {
  const { podcastId, episodeId } = useParams();
  const { podcast } = usePodcastDetails({podcastId});

  if (!podcast) {
    return
  }

  const podcastDetails = podcast.results[0];
  const episode = podcast.results.slice(1).find(track => track.trackId === Number(episodeId));

  return (
    <Page title="Podcast">
      <Grid container>
        <Grid item xs={4}>
          <PodcastBanner {...podcastDetails}/>
        </Grid>
        <Grid item xs={8} >
          <Grid sx={{padding: 2}}>
            <DetailEpisodeCard episode={episode} />
        </Grid>
      </Grid>

      </Grid>
    </Page>
  );
}
