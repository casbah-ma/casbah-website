import React, { createContext, useReducer } from 'react';
import { CursorContext } from './CursorContext';

const initialState = {
  isVisible: false,
  isExpanded: false,
};

export default function CursorProvider({ children }) {
  const [state, dispatch] = useReducer(cursorReducuer, initialState);

  const toggleVisible = () => {
    dispatch({ type: 'TOGGLE_VISIBLE' });
  };

  const toggleExpand = () => {
    dispatch({ type: 'TOGGLE_EXPAND' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <CursorContext.Provider
      value={{ state, toggleExpand, toggleVisible, reset }}
    >
      {children}
    </CursorContext.Provider>
  );
}

function cursorReducuer(state, action) {
  switch (action.type) {
    case 'TOGGLE_VISIBLE':
      return { ...state, isVisible: !state.isVisible };
    case 'RESET':
      return initialState;
    case 'TOGGLE_EXPAND':
      return { ...state, isExpanded: !state.isExpanded };
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
