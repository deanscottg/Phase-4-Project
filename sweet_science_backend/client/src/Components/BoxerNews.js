import React, { useEffect } from "react";

function BoxerNews() {
  useEffect(() => {
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-timeline");
    anchor.setAttribute("data-theme", "dark");
    anchor.setAttribute("data-tweet-limit", "unlimited");
    anchor.setAttribute("data-chrome", "noheader nofooter noborders");
    anchor.setAttribute("data-height", "800");
    anchor.setAttribute("data-width", "750");
    anchor.setAttribute("href", "https://twitter.com/BoxingNewsED");
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <section className="twitterContainer">
      <div className="twitter-embed"></div>
    </section>
  );
}

export default BoxerNews;
