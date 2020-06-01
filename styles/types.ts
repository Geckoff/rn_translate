import React from "react";
import { TranslateTheme } from "@styles/TranslateTheme";
export type ThemedSFC<T = {}> = React.SFC<T & { theme: TranslateTheme }>;
