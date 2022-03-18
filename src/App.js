import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Main = lazy(() => import("./Pages/Main"));
const Login = lazy(() => import("./Pages/Login"));
const NotFound = lazy(() => import("./Pages/NotFound"));
export default function App() {
  return (
    <Suspense fallback={<p className="text-center col-12">Loading...</p>}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" exact>
            <Login></Login>
          </Redirect>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/Main/:Id">
          <Main></Main>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Suspense>
  );
}
