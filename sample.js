const puppeteer = require('puppeteer');
var argv = require('optimist').argv;
var prompt = require('prompt');

async function crawl(url) {
    console.log('### Crawl started ###')
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitFor(500);
    // Scrape data
    const result = await page.evaluate(() => {
        // Scrape some selectors
        headline = document.querySelector('#msg_wrap > div.msg_headln').innerText;
        text = document.querySelector('#msg_wrap > div.msg_text').innerText;
        return {
            headline,
            text,
        }
    });
    await browser.close();
    await prompt.start();
    console.log('### Crawl complete ###')
    return result;
}

async function handleData(data) {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.editpad.org/');
    await page.waitFor(500);
    await page.type('#text', data.headline + '\n\n' + data.text + '\n\n' + data.textInput + '\n\n')
    console.log('### Text input completed. Ctrl+C to end script and close Chromium ###');
}

crawl(argv.url).then(response => {
    prompt.start();
    prompt.get(['TextInput'], function (err, data) {
        response.textInput = data.TextInput;
        handleData(response);
    })
}).catch(function (err) { 
    throw err;
})