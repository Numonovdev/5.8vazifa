const wrapper = document.getElementById('wrapper');
const loader = document.querySelector('#loader');
// const img = document.getElementById('img');



// img.addEventListener('click', function(event){
//      event.preventDefault();
//      img.style.position = 'absolute';
//      img.style.width = '850px'
//      img.style.top = '10px'
//      img.style.left= '200px'
//      img.style.zIndex = '10'
// });
// img.addEventListener('dblclick', function(eve){
//      eve.preventDefault();
//      img.style.position = 'relative'
//      img.style.width = '50%'
//      img.style.top = '0px'
//      img.style.left= '0px'
// })
// {"flag":"https://twemoji.maxcdn.com/2/svg/1f1e6-1f1e8.svg","country":"Ascension Island","code":"ac","id":"id_1"}

function createruser(user){
     return `
       <div class="card">
                    <img id="img" src="https://www.worldometers.info/img/flags/af-flag.gif" alt="rasm">
                    <div class="info">
                         <p>${user.id}</p>
                         <p>${user.firstname}</p>
                         <p>${user.lastname}</p>
                    </div>
               </div>     
     `
}

document.addEventListener('DOMContentLoaded', function(){
     fetch('https://jsonplaceholder.org/users')
     .then(response => {
          if(response.status == 200){
               return response.json() 
          }

     })
     .then(data => {
         data.length && data.forEch(function(user){
               let card = createruser(user);
               wrapper.innerHTML += card

          })
     })
     .catch(err =>{
          console.log(err)
     })
     .finally(function(){
          loader.remove();
     })
})


// xatoyimni korib beringchi domla menda iwlamadi 