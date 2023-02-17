import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'src/components/App/App';

const root = createRoot(document.getElementById('root'));

const rootReactElement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

root.render(rootReactElement);
