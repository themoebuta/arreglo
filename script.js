let animales =["conejo","perro","oso", "rana", "gato","puma","canguro"];

let texto="";


for (let index = 0; index < animales.length; index++) {
    // -> "" + animales[0] (conejo) + salto de linea;
    // -> "conejo"+ animales [1] (perro)+ salto de linea;
    texto = texto+ animales[index]+"<br>";
}

document.getElementById("lista1").innerHTML = texto;

/////////////////////////////////////////////////////////////////////////////

let reversa=[];

for (let index = animales.length-1; index >=0 ; index--) {
    // agregar animales[6] (canguro);
    //agregar animales [5] (puma);
    reversa.push(animales[index]);
}

texto="";



for (let index = 0; index < reversa.length; index++) {

    texto = texto+ reversa[index]+"<br>";
}

document.getElementById("lista2").innerHTML = texto;



//let animales =["conejo","perro","oso", "rana", "gato","puma","canguro"];

let numeros = [[1,2],[3,4],[5,6]];
 /// primer dato ->[1,2] ///segundo dato-> [3,4] //tercer dato ->[5,6]

/// 1 y 2



let empleados = [["jose",26],["Juliana",25],["Pamela",20]];



alert(empleados[1][0]);

alert(empleados);









/*let items = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
  console.log(items[0][0]); // 1
  console.log(items[0][1]); // 2
  console.log(items[1][0]); // 3
  console.log(items[1][1]); // 4
  console.log(items);*/