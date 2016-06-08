import React from 'react';
import { connect } from 'react-redux';
import { ExNavigator } from 'react-native-autopilot';
import { mapRoute } from '../routes';
import actions from '../actions';

export class MainView extends React.Component {

  constructor() {
    super();
    this.mapRouteWithProps = (route) => mapRoute(this.props, route);
  }

  render() {
    const { routes, setNavigationRoutes } = this.props;

    return (
      <ExNavigator
        ref="navigator"
        routes={routes}
        routeMapping={this.mapRouteWithProps}
        persistRoutes={setNavigationRoutes}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  routes: state.navigation.routes,
});

MainView.propTypes = {
  routes: React.PropTypes.array.isRequired,
  setNavigationRoutes: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actions)(MainView);
