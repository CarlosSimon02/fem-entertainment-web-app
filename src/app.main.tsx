import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import BookMarked from './pages/bookmarked/bookmarked.page';
import Home from './pages/home/home.page';
import LogIn from './pages/log-in/log-in.page';
import Main from './pages/main/main.page';
import Movies from './pages/movies/movies.page';
import RouterError from './pages/router-error/router-error.page';
import SignUp from './pages/sign-up/sign-up.page';
import TVSeries from './pages/tv-series/tv-series.page';
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
