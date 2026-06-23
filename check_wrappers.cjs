const fs = require('fs');
const p = require('path');
fs.readdirSync('src/pages').forEach(f => {
  if (f.endsWith('.jsx')) {
    const c = fs.readFileSync(p.join('src/pages', f), 'utf8');
    const m = c.match(/<div className="([^"]*overflow-x-auto[^"]*)">/g);
    if (m) console.log(f, m);
  }
});
