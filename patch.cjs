const fs = require('fs');
let c = fs.readFileSync('src/pages/TeamsAWC2526.jsx', 'utf8');

c = c.replace(/text-gray-900/g, 'text-slate-300');
c = c.replace(/border-gray-300/g, 'border-slate-600');
c = c.replace(/text-red-700/g, 'text-red-400');
c = c.replace(/border-gray-400/g, 'border-slate-700');
c = c.replace(/bg-red-400/g, 'bg-red-900/50');
c = c.replace(/bg-red-100/g, 'bg-red-900/20');
c = c.replace(/bg-red-200/g, 'bg-red-900/30');
c = c.replace(/text-white/g, 'text-slate-100');
c = c.replace(/bg-blue-200/g, 'bg-blue-900/40');
c = c.replace(/text-blue-900/g, 'text-blue-200');
c = c.replace(/bg-white/g, 'bg-slate-800/40');
c = c.replace(/bg-blue-50/g, 'bg-blue-900/20');
c = c.replace(/<h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-300 mb-4 sm:mb-6">/g, '<h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-50 mb-4 sm:mb-6">');
c = c.replace(/<select className="w-full sm:w-auto border border-slate-600 rounded px-3 py-2 text-sm text-slate-300 font-medium bg-slate-800\/40">/g, '<select className="w-full sm:w-auto border border-slate-600 rounded px-3 py-2 text-sm text-slate-300 font-medium bg-slate-800">');

fs.writeFileSync('src/pages/TeamsAWC2526.jsx', c);
console.log('patched');
