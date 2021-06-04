import Home from "../Pages/home";
import PageAssunto from "../Pages/assunto";
import PageQuestoes from "../Pages/questoes";
import PageResultado from "../Pages/resultado";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function EGPN_Router() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/assunto">
          <PageAssunto />
        </Route>
        <Route exact path="/questoes">
          <PageQuestoes />
        </Route>
        <Route exact path="/resultado">
          <PageResultado />
        </Route>
      </Switch>
    </Router>
  );
}
