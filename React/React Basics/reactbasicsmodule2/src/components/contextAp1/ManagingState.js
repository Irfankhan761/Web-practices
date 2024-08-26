import React from "react";
import MealsProvider from "./MealsProvider";
import MainContainer from "./MainContainer";

export default function ManagingState2() {
  return (
    <MealsProvider>
      <MainContainer />
    </MealsProvider>
  );
}
