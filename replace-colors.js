const fs = require('fs');

const dir = 'x:/Namith/DENTO_NEURO-main/client/src';

function replaceColors(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  const replacements = [
    { from: /#D7A58C/gi, to: '#999999' },
    { from: /#C8A25A/gi, to: '#777777' },
    { from: /#e5c178/gi, to: '#999999' },
    { from: /#9a7635/gi, to: '#555555' },
    { from: /#241616/gi, to: '#222222' },
    { from: /#140c0c/gi, to: '#111111' },
    { from: /#0d0707/gi, to: '#000000' },
    { from: /#271919/gi, to: '#222222' },
    { from: /#1e1616/gi, to: '#111111' },
    { from: /#1a1210/gi, to: '#222222' },
    { from: /#2c1e1e/gi, to: '#222222' },
    { from: /#191010/gi, to: '#111111' },
    { from: /#36261b/gi, to: '#333333' },
    { from: /#150d0d/gi, to: '#111111' },
    { from: /#e2c488/gi, to: '#aaaaaa' },
    { from: /#181111/gi, to: '#111111' },
    { from: /#221818/gi, to: '#222222' },
    { from: /#a6813d/gi, to: '#555555' },
    { from: /#140d0d/gi, to: '#111111' },
    { from: /#241818/gi, to: '#222222' }
  ];

  for (let r of replacements) {
    if (content.match(r.from)) {
      content = content.replace(r.from, r.to);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (let file of files) {
    const fullPath = dir + '/' + file;
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else {
      if (fullPath.endsWith('.css') || fullPath.endsWith('.js')) {
        replaceColors(fullPath);
      }
    }
  }
}

walk(dir);
console.log('Colors replaced successfully!');
