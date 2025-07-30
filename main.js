function indexAll(str, search, caseSensitive = true) {
  const s = caseSensitive ? str : str.toLowerCase();
  const searchValue = caseSensitive ? search : search.toLowerCase();
  
  const indices = [];
  let position = s.indexOf(searchValue);
  
  while (position !== -1) {
    indices.push(position);
    position = s.indexOf(searchValue, position + 1);
  }
  
  return indices;
}

const fs=require('fs');
const name_of_html='header';
const classes=new Set();
const ids=new Set();

let data=fs.readFileSync(name_of_html+'.html','utf-8');
let array_of_classes=data.split('class=');
array_of_classes.slice(1,array_of_classes.length).forEach(element => {
    element=element.slice(1,element.length-1);
    element=element.slice(0, element.indexOf('"'))
    element.split(' ').forEach(element => {
        classes.add(element)
    });
});
let array_of_ids=data.split('id=');
array_of_ids.slice(1,array_of_ids.length).forEach(element => {
    console.log(element)
    element=element.slice(1,element.length-1);
    element=element.slice(0, element.indexOf('"'))
    element.split(' ').forEach(element => {
        ids.add(element)
    });
});
console.log(classes,ids);
/*let links_of_styles=data.split('<link');
console.log(links_of_styles)*/
let links_of_styles=fs.readdirSync('./styles');
for(let name_of_file of links_of_styles){
    let data=fs.readFileSync('./styles/'+name_of_file, 'utf-8');
    console.log('переносы строки',indexAll(data, ''))
    for(let class_ of classes){
        console.log(indexAll(data, class_));
    }
    console.log('------')
}