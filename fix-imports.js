const fs = require('fs');
const path = require('path');

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.ts') && !fullPath.endsWith('.spec.ts') && !fullPath.includes('content.ts')) {
      // Check if corresponding html has routerLink
      const htmlPath = fullPath.replace('.ts', '.html');
      if (fs.existsSync(htmlPath)) {
        const htmlContent = fs.readFileSync(htmlPath, 'utf8');
        if (htmlContent.includes('routerLink')) {
          let tsContent = fs.readFileSync(fullPath, 'utf8');
          let modified = false;

          if (!tsContent.includes('RouterLink')) {
            // Add import { RouterLink } from '@angular/router';
            if (tsContent.includes('@angular/router')) {
              tsContent = tsContent.replace(/import\s+{([^}]*)}\s+from\s+'@angular\/router';/, (match, p1) => {
                return `import { ${p1}, RouterLink } from '@angular/router';`;
              });
            } else {
              tsContent = `import { RouterLink } from '@angular/router';\n` + tsContent;
            }
            modified = true;
          }

          // Add to imports array
          if (modified || !tsContent.includes('RouterLink')) {
             const importsRegex = /imports:\s*\[([^\]]*)\]/;
             const match = tsContent.match(importsRegex);
             if (match) {
                 const currentImports = match[1];
                 if (!currentImports.includes('RouterLink')) {
                     const newImports = currentImports.trim().length > 0 ? `${currentImports}, RouterLink` : `RouterLink`;
                     tsContent = tsContent.replace(importsRegex, `imports: [${newImports}]`);
                     modified = true;
                 }
             }
          }

          if (modified) {
            fs.writeFileSync(fullPath, tsContent);
            console.log(`Updated imports in: ${fullPath}`);
          }
        }
      }
    }
  }
}

processDirectory('d:\\DELHIVERY\\delhivery-clone\\src\\app\\features');
processDirectory('d:\\DELHIVERY\\delhivery-clone\\src\\app\\shared');
console.log('Done');
