export function saveNavigationStack(stack) {
  return {
    type: 'SAVE_NAVIGATION_STACK',
    stack: [],
  };
}

export function setNavigationRoutes(routes) {
  return {
    type: 'SET_NAVIGATION_ROUTES',
    routes,
  };
}

export function pushNavigationRoute(route) {
  return {
    type: 'PUSH_NAVIGATION_ROUTE',
    route,
  };
}

export function popNavigationRoute() {
  return {
    type: 'POP_NAVIGATION_ROUTE',
  };
}

export function openSceneA() {
  return pushNavigationRoute({ type: 'sceneA' });
}

export function openSceneB() {
  return pushNavigationRoute({ type: 'sceneB' });
}

export default {
  saveNavigationStack,
  setNavigationRoutes,
  pushNavigationRoute,
  popNavigationRoute,
  openSceneA,
  openSceneB,
};
