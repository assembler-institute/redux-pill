import React from "react";
import withLayout from "../../HOC/withLayout";

function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default withLayout(Home);
