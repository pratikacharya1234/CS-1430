const fs = require('fs');
const path = require('path');
const scanner = require('web-vuln-scanner');
const { generateReport } = require('web-vuln-scanner/lib/reporters/html-reporter');
const open = (...args) => import('open').then(m => m.default(...args));

(async () => {
  const url = 'https://portalapps.weber.edu/eweber/default.aspx?usecas=true';
  const results = await scanner.scan(url, {
    scanModules: ['xss', 'headers', 'ssl'],
    timeout: 30000,
    depth: 1,
    concurrency: 5
  });

  const report = {
    target: url,
    summary: results.summary,
    vulnerabilities: results.vulnerabilities
  };

  const filePath = path.resolve(__dirname, 'scan-report.html');
  fs.writeFileSync(filePath, generateReport(report));
  console.log(`📄 Report saved at: ${filePath}`);
  await open(filePath);
})();