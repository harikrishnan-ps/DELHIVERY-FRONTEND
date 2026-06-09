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

      // 1. Convert <a routerLink="/auth" ... > ... </a> to <button routerLink="/auth" ... > ... </button>
      const aToButtonRegex = /<a([^>]*?)routerLink="\/auth"([^>]*?)>([\s\S]*?)<\/a>/gi;
      if (aToButtonRegex.test(content)) {
        content = content.replace(aToButtonRegex, '<button$1routerLink="/auth"$2>$3</button>');
        modified = true;
      }

      // 2. Find any button that has {{ content.hero.ctaText }} or {{ content.bottomCta.ctaText }} and ensure it has routerLink="/auth"
      const buttonCtaRegex = /<button([^>]*?)>([\s\S]*?\{\{\s*content\.(hero|bottomCta)\.ctaText\s*\}\}[\s\S]*?)<\/button>/gi;
      content = content.replace(buttonCtaRegex, (match, p1, p2) => {
        if (!p1.includes('routerLink')) {
          modified = true;
          return `<button${p1} routerLink="/auth">${p2}</button>`;
        }
        return match;
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
