require("isomorphic-fetch");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

(async () => {
  const response = await fetch(
    "https://bretcameron.medium.com/how-to-build-a-web-scraper-using-javascript-11d7cd9f77f2"
  );
  const text = await response.text();
  if (text !== null) {
    const dom = new JSDOM(text);
    const { document } = dom.window;
    const h1Content = document.querySelectorAll("h1");
    if (h1Content && h1Content.length > 0) {
      console.log("Content", JSON.stringify(h1Content[0].textContent));
    }
  }
})();
