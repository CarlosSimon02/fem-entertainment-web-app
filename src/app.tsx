import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { WindowProvider } from './contexts/window.context';
import BookMarked from './routes/bookmarked/bookmarked.route';
import Home from './routes/home/home.route';
import LogIn from './routes/log-in/log-in.route';
import Main from './routes/main/main.route';
import Movies from './routes/movies/movies.route';
import RouterError from './routes/router-error/router-error.route';
import SignUp from './routes/sign-up/sign-up.route';
import TVSeries from './routes/tv-series/tv-series.route';
import GlobalStyle from './styles/global-style';
import theme from './styles/theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <RouterError />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/movies',
        element: <Movies />
      },
      {
        path: '/tvseries',
        element: <TVSeries />
      },
      {
        path: '/bookmarked',
        element: <BookMarked />
      }
    ]
  },
  {
    path: '/login',
    element: <LogIn />
  },
  {
    path: '/signup',
    element: <SignUp />
  }
]);

const App = () => {
  return (
    <WindowProvider>
      <ThemeProvider theme={theme.dark}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </WindowProvider>
  );
};

export default App;
