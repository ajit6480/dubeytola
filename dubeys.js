/* globals Tree */
'use strict';

var tree = new Tree(document.getElementById('tree'), {
  navigate: true // allow navigate with ArrowUp and ArrowDown
});
tree.on('open', e => console.log('open', e));
tree.on('select', e => console.log('select', e));
tree.on('action', e => console.log('action', e));
tree.on('fetch', e => console.log('fetch', e));
tree.on('browse', e => console.log('browse', e));

tree.on('fetch', folder => window.setTimeout(() => {
  tree.file({
    name: 'file 2/1'
  }, folder);
  tree.file({
    name: 'file 2/2'
  }, folder);

  folder.resolve();
}, 1000));

var structure = [{id:"1",name:"बकस दुबे",parentid:"0",type:Tree.FOLDER,children:[{id:"2",name:"साहेब दुबे",parentid:"1",type:Tree.FOLDER,children:[{id:"6",name:"पंचानंद दुबे ",parentid:"2",type:Tree.FOLDER},{id:"7",name:"भगवन दुबे ",parentid:"2",type:Tree.FOLDER},{id:"8",name:"शिवशंकर दुबे",parentid:"2",type:Tree.FOLDER,children:[{id:"11",name:"हरी दुबे",parentid:"8",type:Tree.FOLDER}]},{id:"9",name:"महाराज दुबे ",parentid:"2",type:Tree.FOLDER,children:[{id:"12",name:"रामशीतल दुबे ",parentid:"9",type:Tree.FOLDER}]},{id:"10",name:"संत सुदामा दुबे",parentid:"2",type:Tree.FOLDER,children:[{id:"13",name:"हेमंत ",parentid:"10",type:Tree.FOLDER},{id:"14",name:"भिखारी ",parentid:"10",type:Tree.FOLDER},{id:"15",name:"राघव ",parentid:"10",type:Tree.FOLDER},{id:"16",name:"माधव ",parentid:"10",type:Tree.FOLDER}]}]},{id:"3",name:"शिवसहाय दुबे",parentid:"1",type:Tree.FOLDER,children:[{id:"17",name:"अभिमन दुबे ",parentid:"3",type:Tree.FOLDER,children:[{id:"30",name:"रामरूप दुबे ",parentid:"17",type:Tree.FOLDER},{id:"31",name:"मुखलाल दुबे ",parentid:"17",type:Tree.FOLDER}]},{id:"18",name:"बाबूराम दुबे ",parentid:"3",type:Tree.FOLDER},{id:"19",name:"सीताराम दुबे ",parentid:"3",type:Tree.FOLDER,children:[{id:"32",name:"रामस्वरूप दुबे ",parentid:"19",type:Tree.FOLDER},{id:"33",name:"रामसुभग दुबे ",parentid:"19",type:Tree.FOLDER},{id:"34",name:"रामजी दुबे ",parentid:"19",type:Tree.FOLDER}]},{id:"20",name:"जीयन दुबे ",parentid:"3",type:Tree.FOLDER,children:[{id:"35",name:"रामलाल दुबे (रामगढ़वा वाली)",parentid:"20",type:Tree.FOLDER},{id:"36",name:"दलसिंगार दुबे ",parentid:"20",type:Tree.FOLDER,children:[{id:"37",name:"मजलीश दुबे",parentid:"36",type:Tree.FOLDER,children:[{id:"39",name:"जोजन दुबे",parentid:"37",type:Tree.FOLDER},{id:"40",name:"विद्या दुबे",parentid:"37",type:Tree.FOLDER,children:[{id:"41",name:"सचिदानंद दुबे",parentid:"40",type:Tree.FOLDER,children:[{id:"42",name:"अमित दुबे",parentid:"41",type:Tree.FOLDER}]}]}]},{id:"38",name:"धर्मदेव दुबे",parentid:"36",type:Tree.FOLDER,children:[{id:"43",name:"विश्‍वनाथ दुबे",parentid:"38",type:Tree.FOLDER,children:[{id:"46",name:"रामएकबाल दुबे",parentid:"43",type:Tree.FOLDER,children:[{id:"49",name:"डॉ वीरेंद्र दुबे",parentid:"46",type:Tree.FOLDER,children:[{id:"51",name:"मनीष दुबे",parentid:"49",type:Tree.FOLDER},{id:"52",name:"तनिश दुबे",parentid:"49",type:Tree.FOLDER},{id:"53",name:"अनीश दुबे",parentid:"49",type:Tree.FOLDER}]},{id:"50",name:"बिनय कुमार दुबे",parentid:"46",type:Tree.FOLDER,children:[{id:"54",name:"अजित कुमार दुबे",parentid:"50",type:Tree.FOLDER,children:[{id:"55",name:"आर्यन दुबे",parentid:"54",type:Tree.FOLDER}]}]}]},{id:"47",name:"श्रीकृष्ण दुबे",parentid:"43",type:Tree.FOLDER},{id:"48",name:"श्रीराम दुबे",parentid:"43",type:Tree.FOLDER}]},{id:"44",name:"रामनरायन दुबे",parentid:"38",type:Tree.FOLDER},{id:"45",name:"शिवनाथ दुबे",parentid:"38",type:Tree.FOLDER}]}]}]}]},{id:"4",name:"प्रकाश दुबे",parentid:"1",type:Tree.FOLDER,children:[{id:"21",name:"धर्मराज दुबे ",parentid:"4",type:Tree.FOLDER},{id:"22",name:"रामराज दुबे ",parentid:"4",type:Tree.FOLDER},{id:"23",name:"रामनरायन दुबे ",parentid:"4",type:Tree.FOLDER},{id:"24",name:"रामकृष्ण दुबे ",parentid:"4",type:Tree.FOLDER},{id:"25",name:"रमेश्वर दुबे ",parentid:"4",type:Tree.FOLDER},{id:"26",name:"जलेशर दुबे ",parentid:"4",type:Tree.FOLDER},{id:"27",name:"किशुनदेव दुबे ",parentid:"4",type:Tree.FOLDER},{id:"28",name:"व्यास दुबे ",parentid:"4",type:Tree.FOLDER},{id:"29",name:"रामपूजन दुबे ",parentid:"4",type:Tree.FOLDER}]},{id:"5",name:"भूपमन दुबे ",parentid:"1",type:Tree.FOLDER}]}];
// keep track of the original node objects
tree.on('created', (e, node) => {
  e.node = node;
});
tree.json(structure);

document.getElementById('browse-1').addEventListener('click', () => {
  tree.browse(a => {
    if (a.node.name === 'folder 2 (asynced)' || a.node.name === 'file 2/2') {
      return true;
    }
    return false;
  });
});

document.getElementById('browse-2').addEventListener('click', () => {
  tree.browse(a => {
    if (a.node.name.startsWith('folder 1') || a.node.name === 'file 1/1/1/1/2') {
      return true;
    }
    return false;
  });
});

document.getElementById('unload').addEventListener('click', () => {
  const d = tree.hierarchy().pop();
  tree.unloadFolder(d);
});

document.getElementById('previous').addEventListener('click', () => {
  tree.navigate('backward');
});
document.getElementById('next').addEventListener('click', () => {
  tree.navigate('forward');
});
