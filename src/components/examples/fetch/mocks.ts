import nock from "nock";

export const mockResponse = {
  domain: "digital_marketing",
  topics: [],
  data: [
    {
      title: {
        text: "What is page speed",
        topics: ["page_speed", "seo", "website_optimization"],
      },
      paragraph: {
        text: "Page speed is often confused with site speed, which is actually the page speed for a sample of page views on a site. Page speed can be described in either page load time (the time it takes to fully display the content on a specific page) or time to first byte (how long it takes for your browser to receive the first byte of information from the web server)",
        topics: ["page_speed", "website_optimization"],
        queries: ["def", "importance", "advantage"],
      },
    },
  ],
};

nock("https://api.jsonbin.io")
  .get("/b/61cabebfc277c467cb3770c0/2")
  .reply(200, mockResponse);
