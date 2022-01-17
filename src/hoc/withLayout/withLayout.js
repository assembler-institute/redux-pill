import React from "react";

// import "./withLayout.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function withLayout(WrappedComponent) {
  function WrapperComponent({ ...props }) {
    return (
      <>
        <main>
          <Navbar />
          <WrappedComponent {...props} />
          <Footer />
        </main>
      </>
    );
  }
  return WrapperComponent;
}

export default withLayout;
