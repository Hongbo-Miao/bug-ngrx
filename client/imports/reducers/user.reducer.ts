import { ActionReducer, Action } from '@ngrx/store';

const initialState = {
  init: 'init value'
};

export const userReducer: ActionReducer<any> = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'LOAD_SUCCESS': {
      return Object.assign({}, state, { userGeneratedData: action.payload });
    }
    default: {
      return state;
    }
  }
};
