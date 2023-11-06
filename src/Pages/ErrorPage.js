import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main>
      <div className="needsMargin">
        <h1>Oops! This page does not exist!🤭</h1>
      </div>
    </main>
  );
};

export default ErrorPage;
