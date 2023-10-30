import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main>
        <h1>Oops! Something went wrong!</h1>
    </main>
  );
};

export default ErrorPage;
