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
        <Container>
          <Switch>
            <Route path="/" exact component={RecipeContent} />
            <Route path="/detail/:index" component={RecipeDetail} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default RecipeApp;
