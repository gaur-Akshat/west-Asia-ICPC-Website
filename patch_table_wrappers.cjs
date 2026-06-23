const fs = require('fs');
const path = require('path');

const dir = 'src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  let filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Find all divs that have overflow-x-auto (which wraps the tables)
  // We want to replace their class with a nice modern outlined container
  const newClass = 'bg-white/80 backdrop-blur-md border border-slate-300 rounded-xl shadow-md overflow-hidden overflow-x-auto mb-6';
  
  content = content.replace(/<div className="([^"]*?)overflow-x-auto([^"]*?)">/g, (match, p1, p2) => {
    // If it already has our new class, ignore
    if (match.includes('rounded-xl') && match.includes('shadow-md')) return match;
    
    return `<div className="${newClass}">`;
  });

  // Also in MainContent.jsx (though it's in components)
  fs.writeFileSync(filePath, content, 'utf8');
});

// Also patch MainContent.jsx if it wasn't caught
const mainContentPath = 'src/components/MainContent.jsx';
if (fs.existsSync(mainContentPath)) {
    let mc = fs.readFileSync(mainContentPath, 'utf8');
    mc = mc.replace(/<div className="([^"]*?)overflow-x-auto([^"]*?)">/g, (match, p1, p2) => {
        if (match.includes('rounded-xl') && match.includes('shadow-md')) return match;
        return `<div className="bg-white border border-slate-300 rounded-xl shadow-md overflow-hidden overflow-x-auto mb-6">`;
    });
    fs.writeFileSync(mainContentPath, mc, 'utf8');
}

console.log('Patched all table wrappers for outline.');
