import React from "react";
export default class LifecycleB extends React.Component {
  constructor() {
    super();
    console.log("LifecycleB Constructor done")
  }
  static getDerivedStateFromProps(){
    return null;
    console.log("LifecycleB Get derived")
  }
  render() {
    return (
        console.log("LifecycleB reder executed")
    )
  }
  componentDidMount(){
    console.log("LifecycleB Mounting done")
  }
}
