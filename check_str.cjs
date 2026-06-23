const fs = require('fs');
const c = fs.readFileSync('src/pages/TeamsAWC2425.jsx', 'utf8');

let inS = false;
let sC = '';
let lL = 1;
for(let i=0; i<c.length; i++) {
    if(c[i] === '\n') lL++;
    if(!inS && (c[i] === '"' || c[i] === "'")) {
        inS = true;
        sC = c[i];
        continue;
    }
    if(inS && c[i] === sC) {
        // check for escaping? no backslashes in this jsx hopefully, but let's check
        if(c[i-1] !== '\\') {
            inS = false;
        }
    }
}
console.log('Unclosed string:', inS, 'Line:', lL);
