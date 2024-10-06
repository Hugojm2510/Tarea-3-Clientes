// Dado el array: 
const array = ["Joaquin", 1, ["Hola","Adios"], true]

/* 1) Recorrer el array e insertar dichos valores en el localstorage. El key de cada valor corresponderá a 
variable + i siendo i el indice en el que se encuentra el array. */

for (let i = 0; i < array.length; i++) {
    localStorage.setItem(`variable${i}`,JSON.stringify(array[i]));
}

// 2) Recorrer de 0 a la longitud del array y hacer la peticion de variable + i del localstorage
for (let i = 0; i < array.length; i++) {
    const nombre = localStorage.getItem(i);
    console.log(nombre);
}

// 3) Crear un div por cada variable e insertar el valor de dicha variable en el div
// 4) insertar estos divs en el body del html
for (let i = 0; i < array.length; i++) {
    const value = JSON.parse(localStorage.getItem(`variable${i}`));     
    const div = document.createElement('div');
    div.textContent = `Variable ${i}: ${value}`;
    document.body.appendChild(div);
}

// JSON.parse --> sirve para devolver el objeto, array... a su estado original, 
// ya que al meterlo en el localstorage lo tuvimos que pasar a un string




