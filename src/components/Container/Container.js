import * as React from "react";

import "./Container.scss";

export default function SimpleContainer({ children }) {
  return <div className="simpleContainer">{children}</div>;
}
