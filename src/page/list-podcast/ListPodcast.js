import Page from "../../components/Page";
import {Container, Grid} from "@mui/material";
import {useEffect} from "react";
import {useDispatch, useSelector} from "../../redux/store";
import {getPodcastList} from "../../redux/slices/podcast";

export const ListPodcast = () => {
  const dispatch = useDispatch();
  const { podcastList } = useSelector((state) => state.podcast);

  useEffect(() => {
    dispatch(getPodcastList());
  }, [dispatch]);

  return (
    <Page title="Podcast: Listado">
      <Container>
        Listado de PodCasts.
        <Grid container>
          {
            podcastList.map((pod, idx) => {
              return (
                <Grid item key={idx}>
                  {pod.title.label}
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </Page>
  )
}
