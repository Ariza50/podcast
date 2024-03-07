import Page from "../../components/infrastructure/Page";
import {Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {PodcastCard} from "../../components/PodcastCard";
import {PodcastFilter} from "../../components/PodcastFilter";
import {useGetListPodcastQuery} from "../../redux/apiPodcast";

export const ListPodcast = () => {
  const { data: podcastList } = useGetListPodcastQuery();
  const [filteredPodcastList, setFilteredPodcastList] = useState([]);

  useEffect(() => {
    if (podcastList) {
      setFilteredPodcastList(podcastList)
    }
  }, [podcastList]);

  const onFilter = (value) => {
    if (value === '') {
      setFilteredPodcastList(podcastList);
    } else {
      setFilteredPodcastList(podcastList.filter(podcast => podcast['im:artist'].label.toLowerCase().includes(value.toLowerCase()) || podcast['im:name'].label.toLowerCase().includes(value.toLowerCase())));
    }
  }

  if (!podcastList) {
    return null;
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
