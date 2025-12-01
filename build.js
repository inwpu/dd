const fs = require('fs');
const path = require('path');

// Read HTML files
const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
const statsHtml = fs.readFileSync(path.join(__dirname, 'stats.html'), 'utf-8');

// Read worker template
const workerTemplate = fs.readFileSync(path.join(__dirname, 'worker.js'), 'utf-8');

// Create constants for HTML files
const htmlConstants = `
const INDEX_HTML = \`${indexHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
const STATS_HTML = \`${statsHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;

`;

// Insert HTML constants at the beginning of the worker
const bundledWorker = htmlConstants + workerTemplate;

// Ensure dist directory exists
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Write the bundled worker
fs.writeFileSync(path.join(distDir, 'worker.js'), bundledWorker, 'utf-8');

console.log('✅ Worker bundled successfully!');
console.log('📦 Output: dist/worker.js');
