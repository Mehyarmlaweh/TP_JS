/*********1********/
var produits = [
    { nom: "robe", prix: 130, quantite: 9 }, 
    { nom: "jeans", prix: 253, quantite: 15 }, 
    { nom: "pull", prix: 131, quantite: 20 },
    { nom: "veste", prix: 8, quantite: 5},
    { nom: "espadries", prix: 130, quantite: 11 }  
 ]

 //BOUCLE 1.a
 for(let i=0 ; i<produits.length;i++)
 {
     console.log(produits[i].nom);
 }
  // map 1.b
  produits.map(x=>{console.log(x.nom)});

  //1.c 
   for(let i=0 ; i<produits.length;i++)
 {
     if (i==2) continue;
     console.log(produits[i].nom);

 }

 //1.d 
  for(let i=0 ; i<produits.length;i++)
 {
     if (produits[i].prix<10) break;
     console.log(produits[i].nom)
 }

 //1.e 
produits.filter(x=>{if (x.prix %2 == 0 )
console.log(x)})

//1.f 

function add(accumulator, a) {
  return accumulator + a.prix;
}
console.log(produits.reduce(add, 0));  // with initial value to avoid when the array is empty

//********2******//

var produits2 = [
    { nom: "robe", prix: 200, quantite: 9 }, 
    { nom: "jeans", prix: 101, quantite: 15 }, 
    { nom: "pull", prix: 131, quantite: 20 },
    { nom: "veste", prix: 7, quantite: 5},
    { nom: "espadries", prix: 13, quantite: 11 }  ,
 
 affichage_nom_produits = function()  {
      produits2.map(x=>{console.log(x.nom)});
},


 affichage_nom_produits_2 = function()  {
    for(let i=0 ; i<produits2.length;i++)
 {
     if (i==2) continue;
     console.log(produits2[i].nom);

 }
},


 affichage_nom_produits_3 = function()  {
for(let i=0 ; i<produits2.length;i++)
 {
     if (produits2[i].prix<10) break;
     console.log(produits2[i].nom)
 }},

  affichage_nom_produits_prixpair = function()  {
produits2.filter(x=>{if (x.prix %2 == 0 )
console.log(x)})
},

 somme_produits = function()  {
function add(accumulator, a) {
  return accumulator + a.prix;
}
return produits2.reduce(add, 0);  
}

]

console.log(produits2.somme_produits);