import {Navigate, useRoutes} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {ListPodcast} from "../page/list-podcast/ListPodcast";

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <>
          <MainLayout />
          <ListPodcast />
        </>
      ),
      children: [
        {
          path: 'podcast',
          children: [
            { path: ':podcastId', element: <div>podcastId</div> },
            { path: ':podcastId/episode/:episodeId', element: <div>episodeId</div> },
          ]
        },
      ]
    },
    { path: '404', element: <div>Página no encontrada</div> },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
