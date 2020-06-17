import React from "react";

interface State {
  isError: boolean;
}
export default class DefaultErrorBoundary extends React.Component<
  unknown,
  State
> {
  state = {
    isError: false,
  };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;
    return isError ? <div>Smth went wrong</div> : children;
  }
}
