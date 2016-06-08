import React from 'react';
import { Platform, BackAndroid } from 'react-native';
import { connect } from 'react-redux';
import { ExNavigator } from 'react-native-autopilot';
import { mapRoute } from '../routes';
import actions from '../actions';

export class MainView extends React.Component {

  constructor() {
    super();
    this.mapRouteWithProps = (route) => mapRoute(this.props, route);
  }

  componentDidMount() {
    if (Platform.OS === 'android' && !this.backButtonListener) {
      this.backButtonListener = () => {
        if (this.props.routes.length > 1) {
          this.props.popNavigationRoute();
          return true;
        }

        return false;
      };
      BackAndroid.addEventListener('hardwareBackPress', this.backButtonListener);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener(this.backButtonListener);
      this.backButtonListener = null;
    }
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
  popNavigationRoute: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actions)(MainView);
