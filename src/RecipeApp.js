import RecipeHeader from "./component/RecipeHeader";
import RecipeContent from "./component/RecipeContent";
import RecipeDetail from "./component/RecipeDetail";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";

function RecipeApp() {
  return (
    <>
      <Router>
        <RecipeHeader />
        <Switch>
          <Container>
            <Route path="/" exact component={RecipeContent} />
            <Route path="/detail/:index" component={RecipeDetail} />
          </Container>
        </Switch>
      </Router>
    </>
  );
}

export default RecipeApp;
