const fs = require('fs');
const path = require('path');

// Read HTML files
const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
const statsHtml = fs.readFileSync(path.join(__dirname, 'stats.html'), 'utf-8');

// Read images as base64
const wechatImg = fs.readFileSync(path.join(__dirname, 'images/wechhat.jpg'));
const alipayImg = fs.readFileSync(path.join(__dirname, 'images/alipay.jpg'));

const wechatBase64 = wechatImg.toString('base64');
const alipayBase64 = alipayImg.toString('base64');

// Read worker template
const workerTemplate = fs.readFileSync(path.join(__dirname, 'worker.source.js'), 'utf-8');

// Create constants for HTML files and images
const htmlConstants = `
const INDEX_HTML = \`${indexHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
const STATS_HTML = \`${statsHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;

// Base64 encoded images
const WECHAT_IMG_BASE64 = '${wechatBase64}';
const ALIPAY_IMG_BASE64 = '${alipayBase64}';

`;

// Insert HTML constants at the beginning of the worker
const bundledWorker = htmlConstants + workerTemplate;

// Write the bundled worker to root directory
fs.writeFileSync(path.join(__dirname, 'worker.js'), bundledWorker, 'utf-8');

console.log('✅ Worker bundled successfully!');
console.log('📦 Output: worker.js');
console.log('📸 Images embedded as base64');
