const fs = require('fs');

let file = 'src/pages/TeamsAWC2526.jsx';
let content = fs.readFileSync(file, 'utf8');

// Container fixes
content = content.replace(/className="min-h-screen bg-transparent"/g, 'className="min-h-screen bg-white"');
content = content.replace(/text-slate-50/g, 'text-gray-900');
content = content.replace(/border-slate-600/g, 'border-gray-300');
content = content.replace(/text-slate-300/g, 'text-gray-900');
content = content.replace(/bg-slate-800/g, 'bg-white');
content = content.replace(/text-red-400/g, 'text-red-700');

// Table 1
content = content.replace(/bg-red-900\/50/g, 'bg-red-400');
content = content.replace(/text-slate-100/g, 'text-white');
content = content.replace(/bg-red-900\/20/g, 'bg-red-100');
content = content.replace(/bg-red-900\/30/g, 'bg-red-200');

// Table 2
content = content.replace(/bg-blue-900\/40/g, 'bg-blue-200');
content = content.replace(/text-blue-200/g, 'text-blue-900');
content = content.replace(/bg-slate-800\/40/g, 'bg-white');
content = content.replace(/bg-blue-900\/20/g, 'bg-blue-50');

// Borders
content = content.replace(/border-slate-700/g, 'border-gray-400');

fs.writeFileSync(file, content);
console.log('Fixed TeamsAWC2526.jsx');
