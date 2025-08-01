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
const name_of_html='header';
const classes=new Set();
const ids=new Set();
const array_width_names_of_files = ['styles/style.css'];

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

array_width_names_of_files.forEach(name_of_file => {
    let data = fs.readFileSync(name_of_file, 'utf8');
    for(let i of indexAllBrackets(data)){
        let indexe_di_la_braceta_figura_paste=i, indexe_di_la_braceta_figura_future=i+1;
        while(indexe_di_la_braceta_figura_paste!==0 && data[indexe_di_la_braceta_figura_paste-1]!=='}'){
            indexe_di_la_braceta_figura_paste--;
            //console.log(indexe_di_la_braceta_figura_paste)
        }
        let numerum_parenthesium_clausarum_inspice=1;
        while(indexe_di_la_braceta_figura_future!==data.length-1 && numerum_parenthesium_clausarum_inspice!==0){
            if (data[indexe_di_la_braceta_figura_future]==='{'){
                numerum_parenthesium_clausarum_inspice++;
            }
            else if (data[indexe_di_la_braceta_figura_future]==='}'){
                numerum_parenthesium_clausarum_inspice--;
            }
            /*console.log(numerum_parenthesium_clausarum_inspice)
            console.log(data[indexe_di_la_braceta_figura_future])*/
            indexe_di_la_braceta_figura_future++;
        }
        console.log(data.slice(indexe_di_la_braceta_figura_paste, i)+data.slice(i, indexe_di_la_braceta_figura_future));
        console.log('------');
    }

})