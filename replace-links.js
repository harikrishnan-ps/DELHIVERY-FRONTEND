const fs = require('fs');
const path = require('path');

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      // Replace href="#" with routerLink="/auth" for a tags containing Get started or Contact Us
      content = content.replace(/<a([^>]*?)href="#"([^>]*?)>([\s\S]*?)(Get started|Contact Us|Contact us|Know More)([\s\S]*?)<\/a>/gi, (match, p1, p2, p3, p4, p5) => {
        modified = true;
        return `<a${p1}routerLink="/auth"${p2}>${p3}${p4}${p5}</a>`;
      });
      
      // Update buttons that say Get started etc if any
      content = content.replace(/<button([^>]*?)>([\s\S]*?)(Sign Up Here)([\s\S]*?)<\/button>/gi, (match, p1, p2, p3, p4) => {
        modified = true;
        // Strip type="button" from p1
        const cleanP1 = p1.replace(/\s*type="button"\s*/, ' ');
        return `<a routerLink="/auth"${cleanP1}>${p2}${p3}${p4}</a>`;
      });

      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

processDirectory('d:\\DELHIVERY\\delhivery-clone\\src\\app\\features');
processDirectory('d:\\DELHIVERY\\delhivery-clone\\src\\app\\shared');
console.log('Done');