import { hot } from "react-hot-loader/root";
import * as React from "react";

class App extends React.Component<Record<string, unknown>, unknown> {
  render() {
    return (
      <div>
        <h1>React PWA</h1>
      </div>
    );
  }
}

export default hot(App);
