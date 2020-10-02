import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
/*
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
test('renders without creashing', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Última búsqueda/i);//octiene el documento
  expect(title).toBeInTheDocument();//expect espra que el elemento title este en el documento -> toBeInTheDocument
});
