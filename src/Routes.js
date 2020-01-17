import React, { Component } from 'react';
import CatList from './CatList';
import CatDetails from './CatDetails';
import { Switch, Route, Redirect } from 'react-router-dom';

class Routes extends Component {
  render() {
    const getCat = props => {
      let name = props.match.params.name;
      let currentCat = this.props.cats.find(
        cat => cat.name.toLowerCase() === name.toLowerCase()
      );
      return <CatDetails {...props} cat={currentCat} />;
    }
    return (
      <Switch>
        <Route
          exact
          path='/cats'
          render={() => <CatList cats={this.props.cats} />} />
        <Route exact path='/cats/:name' render={getCat} />
        <Redirect to="/cats" />
      </Switch>
    );
  }
}

export default Routes;
