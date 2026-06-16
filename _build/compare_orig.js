const puppeteer=require('puppeteer-core');
const CHROME='C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const UA='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
 const b=await puppeteer.launch({executablePath:CHROME,headless:'new',args:['--no-sandbox','--autoplay-policy=no-user-gesture-required','--mute-audio','--window-size=1920,1080']});
 const p=await b.newPage(); await p.setUserAgent(UA); await p.setViewport({width:1920,height:1080});
 await p.goto('https://mieszkania.kozielskapark.pl/Kozielska/Zone_A',{waitUntil:'networkidle2',timeout:90000});
 await sleep(9000);
 await p.screenshot({path:'original_compare.png'});
 console.log('saved original_compare.png');
 await b.close();
})().catch(e=>{console.error(e);process.exit(1)});
