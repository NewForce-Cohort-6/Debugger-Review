import { useZodiac } from "./database.js";

console.log("Welcome to the main module")




const htmlbox = document.querySelector("#boxybox")

const zodiacInfo = useZodiac()
// const writeToDOM = () => {
// for( const obj of zodiacInfo){
//   htmlbox.innerHTML += `<div>
//   <ul id="zodiac--${obj.id}">
//   <li>${obj.name}</li>
//   <li>${obj.mascot}</li>
//   <li>${obj.dates}</li>
//   <li>${obj.element}</li>
//   <li>${obj.wvAnimal}</li>
//   </ul>
//   </div>`

// }
// }

htmlbox.innerHTML = zodiacInfo.map(obj => `<div>
<ul id="zodiac--${obj.id}">
<li>${obj.name}</li>
<li>${obj.mascot}</li>
<li>${obj.dates}</li>
<li>${obj.element}</li>
<li>${obj.wvAnimal}</li>
</ul>
</div>`).join("")

// writeToDOM()

document.addEventListener("click", (e) => {
 
  if(+e.target.id.split("--")[1] === 4){
    window.alert("I'm feeling Crabby")
  }

})
// {
//   id: 12,
//   name: "Pisces",
//   mascot: "Fish",
//   dates: "February 19-March 20",
//   element: "Water",
//   wvAnimal: "White-Tailed Deer"
// }
