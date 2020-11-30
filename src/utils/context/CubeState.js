import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { IS_LOADING } from "./types";

export const CubeContext = createContext();

export const CubeState = ({ children }) => {
  const initialState = {
    isLoading: false,
    cube: {
      top_face: Array(9).fill("yellow"),
      right_face: Array(9).fill("red"),
      left_face: Array(9).fill("white"),
      front_face: Array(9).fill("orange"),
      back_face: Array(9).fill("blue"),
      bottom_face: Array(9).fill("green"),
    },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CubeContext.Provider
      value={{ cube: state.cube, isLoading: state.isLoading }}>
      {children}
    </CubeContext.Provider>
  );
};
