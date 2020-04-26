import React from "react";
import { Theme } from "react-native-paper";

export type ThemedSFC<T = {}> = React.SFC<T & { theme: Theme }>;
