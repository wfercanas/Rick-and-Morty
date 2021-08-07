import React from 'react';

class ErrorHandling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(`${error}`);
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
  //   this.setState({ hasError: true });
  // }

  render() {
    if (this.state.hasError) {
      console.log(`Error: ${this.state.hasError}`);
      return <h1>Oops!! Something failed... please try again soon</h1>;
    }
    return this.props.children;
  }
}

export { ErrorHandling };
