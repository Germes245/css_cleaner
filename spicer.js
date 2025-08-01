function indexAllBrackets(s, caseSensitive = true) {
  let numerum_parenthesium_clausarum_inspice=0;
  const indices = [];
  let position = s.indexOf('{');
  console.log(position)
  while (position <= s.length) {
    if(s[position]==='{'){
      if(!(numerum_parenthesium_clausarum_inspice)){
        indices.push(position)
      }
      numerum_parenthesium_clausarum_inspice++;
    }
    else if(s[position]==='}'){
      numerum_parenthesium_clausarum_inspice--;
    }
    position++;
  }
  
  return indices;
}

const fs=require('fs');
console.log(indexAllBrackets(fs.readFileSync('styles/style.css', 'utf8')))