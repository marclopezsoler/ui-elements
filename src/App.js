import { useState } from "react";
import "./App.scss";

import ShoeParent from "./components/ShoeParent";
import addIcon from "./images/add.svg";
import cross from "./images/cross.svg";
import moreInfo from "./images/moreInfo.svg";
import watch from "./images/watch.png";

function App() {
  const [count, setCounter] = useState(0);

  function oneLess() {
    if (count > 0) {
      setCounter(count - 1);
    }
  }

  function oneMore() {
    setCounter(count + 1);
  }

  function showInfo() {
    document.querySelector(".info").classList.add("show");
    document.querySelector(".cross").classList.add("showCross");
    document.querySelector(".details").classList.add("blur");
    document.querySelector(".moreInfo").classList.add("hide");
  }

  function closeInfo() {
    document.querySelector(".info").classList.remove("show");
    document.querySelector(".cross").classList.remove("showCross");
    document.querySelector(".details").classList.remove("blur");
    document.querySelector(".moreInfo").classList.remove("hide");
  }

  return (
    <div className="content">
      <div className="App">
        <a onClick={oneLess} className="btn button">
          -
        </a>
        <a className="count">{count}</a>
        <a onClick={oneMore} className="btn button2">
          +
        </a>
      </div>
      <section className="card">
        <div className="card_image">
          <img className="card_image_icon" src={addIcon} />
        </div>
        <h2 className="card_title">Write New Card</h2>
        <p className="card_text">
          Your entire product design workflow - connected
        </p>
      </section>

      <section className="product">
        <div className="details">
          <div>
            <h2>Smart Digital Watch For Luxurious Life</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="buttons">
              <button className="btn-1">Order Now</button>
              <button className="btn-2">Watch Video</button>
            </div>
          </div>
          <div className="image_parent">
            <img src={watch} className="watch" />
          </div>
        </div>
        <a className="moreInfo" onClick={showInfo}>
          <img src={moreInfo} />
        </a>
        <a className="cross" onClick={closeInfo}>
          <img src={cross} />
        </a>
        <section className="info">
          <p className="info_text">No more info to show</p>
        </section>
      </section>
      <section>
        <ShoeParent />
      </section>
    </div>
  );
}

export default App;
