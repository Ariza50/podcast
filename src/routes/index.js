import {Navigate, useRoutes} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {ListPodcast} from "../page/list-podcast/ListPodcast";
import {DetailPodcast} from "../page/detail-podcast/DetailPodcast";

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <>
          <MainLayout />
        </>
      ),
      children: [
        { path: '/', element: <ListPodcast /> },
        {
          path: 'podcast',
          children: [
            { path: ':podcastId', element: <DetailPodcast /> },
            { path: ':podcastId/episode/:episodeId', element: <div>episodeId</div> },
          ]
        },
      ]
    },
    { path: '404', element: <div>Página no encontrada</div> },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
