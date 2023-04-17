import { useEffect, useState } from "react";
import "./App.css";
import { ScrollProgress } from "./assets/hi";
import { InfinityScrollProgress } from "./assets/infinity";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset / window.innerHeight;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App" style={{ height: "200vh" }}>
      <div
        style={{
          width: "50vh",
          height: "50vh",
          position: "fixed",
          top: "50%",
          translate: "-50% -25%",
        }}
      >
        <InfinityScrollProgress progress={scrollPosition} />
      </div>
      {/* <div
        style={{
          width: "10vh",
          height: "10vh",
          position: "fixed",
          bottom: "10%",
          right: "10%",
          translate: "-50% -50%",
        }}
      >
        <ScrollProgress progress={Math.max(scrollPosition - 500, 0)} />
      </div> */}
    </div>
  );
}

export default App;
