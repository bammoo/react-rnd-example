import * as React from "react";
import { render } from "react-dom";
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#4AA034"
};

const App = () => (
  <Rnd
    dragAxis={"x"}
    enableResizing={{
      top: false,
      right: true,
      bottom: false,
      left: true,
      topRight: false,
      bottomRight: false,
      bottomLeft: false,
      topLeft: false
    }}
    resizeGrid={[20, 0]}
    style={style}
    default={{
      x: 0,
      y: 0,
      width: 320,
      height: 20
    }}
    onResize={(e, dir, ref, delta, pos) => {
      console.log(delta);
    }}
  >
    Rnd
  </Rnd>
);

render(<App />, document.getElementById("root"));
