import React from 'react';
import { fireEvent, render, waitForElement,screen} from '@testing-library/react';
import App from '../App';

test('renders without creashing async', async () => {
  const { findByText } = render(<App />);
  const title = await findByText(/Última búsqueda/i);//octiene el documento
  expect(title).toBeInTheDocument();//expect espra que el elemento title este en el documento -> toBeInTheDocument
});

//esta manera ya no se usa pero es porsi no hayas como hacerlo 
test('home work as expected', async () => {
  const { container } = render(<App />);
  const gifLink = await waitForElement(() => container.querySelector('.Gif-link'))
  expect(gifLink).toBeInTheDocument();
});

test('search form could be used', async () => {
  render(<App />)
  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')

  fireEvent.change(input,{target:{vlue:'rick'}})
  fireEvent.click(button)

  //screen.debug()

  const title = await screen.findByText('rick')
  expect(title).toBeVisible()
});
