import Page from "../../components/infrastructure/Page";
import {Grid} from "@mui/material";
import {useEffect} from "react";
import {useDispatch, useSelector} from "../../redux/store";
import {getPodcastList} from "../../redux/slices/podcast";
import {PodcastCard} from "../../components/PodcastCard";

export const ListPodcast = () => {
  const dispatch = useDispatch();
  const { podcastList } = useSelector((state) => state.podcast);

  useEffect(() => {
    dispatch(getPodcastList());
  }, [dispatch]);

  return (
    <Page title="Podcast: Listado">
        <Grid container>
          {
            podcastList.map((podcast, idx) => (<PodcastCard key={idx} podcast={podcast} />))
          }
        </Grid>
    </Page>
  )
}
