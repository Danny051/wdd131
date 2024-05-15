const currentyear = document.querySelector("#currentyear");


// use the date object
const today = new Date();

currentyear.innerHTML = `&copy;${today.getFullYear()} 🐱‍👤 Daniel Hassan Fiyinfoluwa 🐱‍👤 Nigeria`;

const lastModified = document.querySelector("#lastModified")

lastModified.innerHTML = `Last Modification ${document.lastModified}`;