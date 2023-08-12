import React from "react";
export default class Lifecycle extends React.Component {
  constructor() {
    super();
    console.log("LifeCycleA Constructor done")
  }
  static getDerivedStateFromProps(){
    return null;
    console.log("LifeCycleA Get derived")
  }
  render() {
    return (
        console.log("LifeCycleA reder executed")
    )
  }
  componentDidMount(){
    console.log("LifeCycleA Mounting done")
  }
}
