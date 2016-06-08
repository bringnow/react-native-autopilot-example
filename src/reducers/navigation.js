const INITIAL_STATE = {
  routes: [{ type: 'sceneA' }],
};

export default function NavigationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case 'OPEN_SCENE_1': {
      return {
        ...state,
        routes: [...state.routes, { type: 'scene1' }],
      };
    }

    case 'OPEN_SCENE_2': {
      return {
        ...state,
        routes: [...state.routes, { type: 'scene2' }],
      };
    }

    case 'SAVE_NAVIGATION_STACK': {
      return {
        ...state,
        navigationStacks: {
          ...state.navigationStacks,
          [state.drawerTab]: action.stack,
        },
      };
    }

    case 'SET_NAVIGATION_ROUTES': {
      return {
        ...state,
        routes: action.routes,
      };
    }

    case 'PUSH_NAVIGATION_ROUTE': {
      return {
        ...state,
        routes: [...state.routes, action.route],
      };
    }

    case 'POP_NAVIGATION_ROUTE': {
      if (state.routes.length === 1) {
        return state;
      }
      return {
        ...state,
        routes: state.routes.slice(0, state.routes.length - 1),
      };
    }

    default:
      return state;
  }
}
