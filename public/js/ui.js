const repos = document.querySelector('.repos');

document.addEventListener('DOMContentLoaded', function() {
   
});

//Promise to get github repos
const getRepoNames = async () =>
{
        const response = await fetch(`https://api.github.com/users/camscoderepo/repos`);
        if(!response.status){
            throw new Error('Network response was not good')
        }
        const data = await response.json()

        const names = await data.map(name => {
            console.log(name.name)
        }) 
        return names
    } 

repos.innerHTML += getRepoNames(repos);


//render recipe data

// const renderRepo = (repos) => {
//     const html = `
//     <li onclick="" class="websites col-xs-6 col-sm-4 col-md-3 col-lg-3">
//     <div class="item">
//       <img src=${data.img}>
//       <div class="icons">
//         <a href=${data.icon} title="View image" class="openButton" data-fancybox data-caption="This is a shopping list app I wrote.">
//           <i class="fa fa-search"></i>
//         </a>

//         <a href="" target="_blank" class="projectLink">
//           <i class="fa fa-link"></i>
//         </a>
//       </div>
//       <div class="imageOverlay"></div>
//     </div>
//    </li>
//     `;
//     repos.innerHTML += html
// };

