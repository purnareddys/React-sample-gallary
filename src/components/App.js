import React, { Component } from "react";
import "./main.css";
import { Example } from "./ImageAnimate";
import unsplash from "./UnsplashApi";

class App extends Component {
  state = { images: [], isBtnVisible: false };

  someRequest = async () => {
    const responce = await unsplash.get("", {
      params: { orientation: "landscape", count: "30" },
    });
    const someArray = responce.data;
    const newArray = someArray.map((img) => {
      return img.urls.regular;
    });
    this.setState({ images: newArray, isClicked: true });
    console.log(this.setState.images);
  };
  toggleBtn() {
    this.setState((prevState) => ({ isBtnVisible: !prevState.isBtnVisible }));
  }
  render() {
    const { isBtnVisible } = this.state;
    return (
      <>
        <Example images={this.state.images} />
        <button
          style={{
            background: "#56ccf2",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            padding: "9px 20px",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)",
            position: "relative",
            top: "285px",
            left: "370px",
          }}
          className={`btn${isBtnVisible ? "" : "hidden"} `}
          onClick={() => {
            this.someRequest();
            this.toggleBtn();
          }}
        >
          Click to view Images
        </button>
      </>
    );
  }
}

export default App;
