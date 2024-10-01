import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";
import { DataContext } from "./Context.js";

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState("light");

  const contextValues = {
    tweets,
    setTweets,
    theme,
    setTheme,
    user,
  };

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <div className="container">
      <DataContext.Provider value={contextValues}>
        <Header />
        <Tweets />
        <RightSide />
      </DataContext.Provider>
    </div>
  );
}

export { App };
