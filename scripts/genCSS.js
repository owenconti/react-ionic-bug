const fs = require('fs');

let text = '';

for (let i = 0; i < 100000; i++) {
  text += `
   .some-class :not(p) {
     width: 100px;
   }
  `;
}

fs.writeFileSync('src/Output.css', text);