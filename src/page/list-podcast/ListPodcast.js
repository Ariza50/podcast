import Page from "../../components/infrastructure/Page";
import {Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "../../redux/store";
import {getPodcastList} from "../../redux/slices/podcast";
import {PodcastCard} from "../../components/modules/List-podcast/podcast-card/PodcastCard";
import {PodcastFilter} from "../../components/modules/List-podcast/podcast-filter/PodcastFilter";

export const ListPodcast = () => {
  const dispatch = useDispatch();
  const { podcastList } = useSelector((state) => state.podcast);
  const [filteredPodcastList, setFilteredPodcastList] = useState(podcastList);

  useEffect(() => {
    dispatch(getPodcastList());
  }, [dispatch]);

  useEffect(() => {
    setFilteredPodcastList(podcastList)
  }, [podcastList]);

  const onFilter = (value) => {
    if (value === '') {
      setFilteredPodcastList(podcastList);
    } else {
      setFilteredPodcastList(podcastList.filter(podcast => podcast['im:artist'].label.toLowerCase().includes(value.toLowerCase()) || podcast['im:name'].label.toLowerCase().includes(value.toLowerCase())));
    }
  }

  return (
    <Page title="Podcast: Listado">
      <PodcastFilter length={filteredPodcastList.length} onFilter={onFilter} />
      <Grid container>
        {filteredPodcastList.map((podcast, idx) => (<PodcastCard key={idx} podcast={podcast} />))}
      </Grid>
    </Page>
  )
}
