const fs = require('fs');
const p = require('path');

const files = [
  'src/components/MainContent.jsx',
  'src/pages/Committee.jsx',
  'src/pages/OrganisingCommittee.jsx',
  'src/pages/ResultsAWC2425.jsx',
  'src/pages/ResultsAWC2526.jsx',
  'src/pages/TeamsAWC2425.jsx',
  'src/pages/TeamsAWC2526.jsx'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('border-yellow-400')) {
    content = content.replaceAll('border-yellow-400', 'border-amber-200');
    fs.writeFileSync(f, content, 'utf8');
    console.log(`Updated ${f}`);
  }
});
