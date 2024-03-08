import {fireEvent, render, screen} from '@testing-library/react';
import {PodcastFilter} from "./PodcastFilter";

test('Render: render <PodcastFilter />', () => {
  const Props = {
    length: 50,
    onFilter: jest.fn()
  }
  render(<PodcastFilter {...Props}  />);

  screen.getByPlaceholderText('Filter podcasts...');
  screen.getByText('50');
})

describe('Interactions', () => {
  test('Event: Initial value onFilter', () => {
    const Props = {
      length: 50,
      onFilter: jest.fn()
    }

    render(<PodcastFilter {...Props}  />);

    const input = screen.getByPlaceholderText('Filter podcasts...');
    expect(input).toBeInTheDocument()

    expect(input).toHaveValue('')
  })

  test('Event: Change value onFilter', () => {
    const Props = {
      length: 50,
      onFilter: jest.fn()
    }

    render(<PodcastFilter {...Props}  />);

    const input = screen.getByPlaceholderText('Filter podcasts...');
    const value = 'Test Text';

    fireEvent.change(input, {
      target: {
        value
      }
    })

    expect(input).toHaveValue('Test Text')
  })
})
