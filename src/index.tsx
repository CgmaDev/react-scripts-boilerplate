import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/styles.scss';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { AboutPage, HomePage } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root')!);

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

root.render(<RouterProvider router={router} />);
