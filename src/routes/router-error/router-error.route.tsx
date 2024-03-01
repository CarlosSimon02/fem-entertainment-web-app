import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const RouterError = () => {
  const error = useRouteError() as Error;
  return <div>{isRouteErrorResponse(error) && error.statusText}</div>;
};

export default RouterError;
