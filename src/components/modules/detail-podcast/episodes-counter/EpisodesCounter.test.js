import {render, screen} from "@testing-library/react";
import React from "react";
import {EpisodesCounter} from "./EpisodesCounter";

test('Render: renders <EpisodesCounter />', () => {
  render(<EpisodesCounter counter={20} />)

  screen.getByText(`Episodes: 20`)
})
