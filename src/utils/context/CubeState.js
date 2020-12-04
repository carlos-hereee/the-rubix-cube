import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { IS_LOADING, SET_ERROR } from "./types";

export const CubeContext = createContext();

export const CubeState = ({ children }) => {
  const initialState = {
    errorMessage: "",
    isLoading: false,
    isTurned: false,
    cube: {
      bottom_face: {
        top: Array(3).fill("green"),
        mid: Array(3).fill("green"),
        bot: Array(3).fill("green"),
      },
      left_face: {
        top: Array(3).fill("white"),
        mid: Array(3).fill("white"),
        bot: Array(3).fill("white"),
      },
      front_face: {
        top: Array(3).fill("orange"),
        mid: Array(3).fill("orange"),
        bot: Array(3).fill("orange"),
      },
      right_face: {
        top: Array(3).fill("red"),
        mid: Array(3).fill("red"),
        bot: Array(3).fill("red"),
      },
      top_face: {
        top: Array(3).fill("yellow"),
        mid: Array(3).fill("yellow"),
        bot: Array(3).fill("yellow"),
      },
      back_face: {
        top: Array(3).fill("blue"),
        mid: Array(3).fill("blue"),
        bot: Array(3).fill("blue"),
      },
    },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const turnCube = () =>
    dispatch({ type: IS_LOADING, payload: (state.isTurned = !state.isTurned) });

  return (
    <CubeContext.Provider
      value={{
        isLoading: state.isLoading,
        isTurned: state.isTurned,
        cube: state.cube,
        turnCube,
      }}>
      {children}
    </CubeContext.Provider>
  );
};
