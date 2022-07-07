import React, { Suspense } from "react";
import ReactDOM from "react-dom";

const RemoteButton = React.lazy(() => import("dsl/Button"));
import { Page } from "./Main";
import ErrorBoundary from "./Error";

import "./index.scss";

const App = () => {
  return (
    <Page>
      <Suspense fallback="Loading...">
        <ErrorBoundary>
          <RemoteButton />
        </ErrorBoundary>
      </Suspense>
    </Page>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
