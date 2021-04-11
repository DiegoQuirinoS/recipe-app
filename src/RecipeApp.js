import RecipeHeader from "./component/RecipeHeader";
import RecipeContent from "./component/RecipeContent";
import RecipeDetail from "./component/RecipeDetail";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import RecipeEdit from "./component/RecipeEdit";

function RecipeApp() {
  return (
    <>
      <Router>
        <RecipeHeader />
        <Container>
          <Switch>
            <Route path="/" exact component={RecipeContent} />
            <Route path="/detail/:index" component={RecipeDetail} />
            <Route path="/edit" component={RecipeEdit} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default RecipeApp;
