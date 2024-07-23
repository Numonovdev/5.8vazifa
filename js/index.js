const wrapper = document.getElementById('wrapper');
const loader = document.querySelector('#loader');
const img = document.getElementById('img');

// img.addEventListener('click', function(event){
// event.preventDefault();
// img.style.position = 'absolute';
// img.style.width = '850px'
// img.style.top = '10px'
// img.style.left= '200px'
// img.style.zIndex = '10'
// });
// img.addEventListener('dblclick', function(eve){
// eve.preventDefault();
// img.style.position = 'relative'
// img.style.width = '50%'
// img.style.top = '0px'
// img.style.left= '0px'
// })
function createruser(user){
     return `
       <div class="card">
                    <img id="img" src="https://www.worldometers.info/img/flags/af-flag.gif" alt="rasm">
                    <div class="info">
                    <p>${user.country}</p>
                    <p>${user.code}</p>
                         <p>${user.id}</p>
                    </div>
               </div>     
     `;
}
document.addEventListener('DOMContentLoaded', function(){
     fetch('https://cars-pagination.onrender.com/all-countries/')
     .then(response => {
          if(response.status == 200){
               return response.json() 
          }
     })
   
     .then(data => {
         data.length && data.forEach(function(user){
               let card = createruser(user);
               wrapper.innerHTML += card;
          })
     console.log(data);
     })
     .catch(err =>{
          console.log(err)
     })
     .finally(function(){
          loader.remove();
     })
})
     