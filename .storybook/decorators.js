import * as React from "react";

import { GlobalStyle } from "@/styles/global";

export const GlobalStyleDecorator = storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);
