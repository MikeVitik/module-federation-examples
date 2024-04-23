import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import * as ReactDOMServer from 'react-dom/server';
import Counter from './Counter';

export const inject = (useHydration, parentElement, props) => {
  if (useHydration) {
    return hydrateRoot(parentElement, <Counter {...props} />);
  } else {
    const root = createRoot(parentElement);
    root.render(<Counter {...props} />);
    return root;
  }
};
export const renderToString = props => {
  global.__IS_SERVER__ = true;
  return ReactDOMServer.renderToString(<Counter {...props} />);
};
