import React from "react";

import Footer from "../Components/Footer/Footer";
import Main from "../Components/Main";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

function withLayout(WrappedComponent) {
  WrappedComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent
  )})`;

  function WrapperComponent({ ...props }) {
    return (
      <div>
        <Main>
          <WrappedComponent {...props} />
        </Main>
        <Footer />
      </div>
    );
  }
  return WrapperComponent;
}
export default withLayout;
