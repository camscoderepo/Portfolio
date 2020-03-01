const repos = document.querySelector('.repos');

document.addEventListener('DOMContentLoaded', function() {
   
});

//render recipe data

const renderRepo = (data, id) => {
    const html = `
    <li onclick="" class="websites col-xs-6 col-sm-4 col-md-3 col-lg-3">
    <div class="item">
      <img src=${data.img}>
      <div class="icons">
        <a href=${data.icon} title="View image" class="openButton" data-fancybox data-caption="This is a shopping list app I wrote.">
          <i class="fa fa-search"></i>
        </a>

        <a href="" target="_blank" class="projectLink">
          <i class="fa fa-link"></i>
        </a>
      </div>
      <div class="imageOverlay"></div>
    </div>
   </li>
    `;
    repos.innerHTML += html
};

