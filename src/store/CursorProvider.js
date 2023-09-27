import React, { createContext, useReducer } from 'react';
import { CursorContext } from './CursorContext';

export default function CursorProvider({ children }) {
  const [state, dispatch] = useReducer(cursorReducuer, {
    isVisible: false,
    isExpanded: false,
  });

  const toggleVisible = () => {
    dispatch({ type: 'TOGGLE_VISIBLE' });
  };

  const toggleExpand = () => {
    dispatch({ type: 'TOGGLE_EXPAND' });
  };

  return (
    <CursorContext.Provider value={{ state, toggleExpand, toggleVisible }}>
      {children}
    </CursorContext.Provider>
  );
}

function cursorReducuer(state, action) {
  switch (action.type) {
    case 'TOGGLE_VISIBLE':
      return { ...state, isVisible: !state.isVisible };
    case 'TOGGLE_EXPAND':
      return { ...state, isExpanded: !state.isExpanded };
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
