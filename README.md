# nodejs-puppeteer-web-scrape
A sample showing how to scrape a website using the Puppeteer Node library and Headless Chrome

Our sample.js will crawl a single job post and then input some of the crawled content into https://www.editpad.org. We have disabled headless chrome when inputting the crawled content so that you can see it in action.

We use `optimist` to parse our argument (url) when running sample.js and `prompt` to illustrate how a user can input additional data that isn't part of the crawl.

To see more about how to crawl and what you can do with the crawled data, check out https://github.com/GoogleChrome/puppeteer.

![gif](http://g.recordit.co/o4VA7KH8Gg.gif)

## Run it locally

```bash
# Clone this repo
git clone https://github.com/wellstyler/nodejs-puppeteer-web-scrape.git

# Install dependencies
npm install

# Crawl a job listing, input a string, and output some data to editpad.org
node sample.js --url=http://www.eslteachersboard.com/cgi-bin/China/index.pl?read=310980
```
