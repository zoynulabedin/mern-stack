// title: 
document.title = 'Agency - Start Bootstrap Theme';
// logo



// menu

let menu = ['services','portfolio','about','team','contact'];
menu.forEach(function(item){
    document.querySelector('.navbar-nav').innerHTML += `<li class="nav-item"><a class="nav-link" href="#${item}">${item}</a></li>`;
});


// Hero section 

let masthead = document.querySelector('.masthead-subheading');
masthead.innerHTML = 'Welcome To Our Studio!';

let mastheadheading = document.querySelector('.masthead-heading');
mastheadheading.innerHTML = 'It\'s Nice To Meet You';
let heroBtn = document.getElementById('hbtn');
heroBtn.innerHTML = 'Tell Me More';


// Services section

let serviceHeading = document.querySelector('.service-heading');
serviceHeading.innerHTML = 'Services';
let serviceSubheading = document.querySelector('.service-sec_subheading');
serviceSubheading.innerHTML = 'What We Offer';

let services = [
    {
        icon:'<i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>',
        title: 'Web Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.',
    },
    {
        icon:'<i class="fas fa-laptop fa-stack-1x fa-inverse"></i>',
        title: 'Responsive Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.',
    },
    {
        icon:'<i class="fas fa-lock fa-stack-1x fa-inverse"></i>',
        title: 'Web Security',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.',
    }
];

services.forEach(function(item){
    document.getElementById('services-row').innerHTML += `
   
    <div class="col-md-4">
    <span class="fa-stack fa-4x">
    <i class="fas fa-circle fa-stack-2x text-primary"></i>
    ${item.icon};
  </span>
    <h3 class="my-3">${item.title}</h3>
    <p class="text-muted">${item.description}</p></div></div>`;
});


// portfolio section
let portfolioHeading = document.querySelector('.portfolio-heading');
portfolioHeading.innerHTML = 'Portfolio';
let portfolioSubheading = document.querySelector('.portfolio-subheading');
portfolioSubheading.innerHTML = 'Our Latest Work';

let portfolioItem = [
    {
        projectName:'woocommerce website',
        projectSubtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.',
        image:'<img class="img-fluid" src="assets/img/portfolio/1.jpg" alt="..."/>',
        description: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
        clientName:'Threads',
        cat:'Illustration'  
    },
    {
        projectName:'shopify website',
        projectSubtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.',
        image:'<img class="img-fluid" src="assets/img/portfolio/2.jpg" alt="..."/>',
        description: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
        clientName:'Explore',
        cat:' Graphic Design'  
    },
    {
        projectName:'React website',
        projectSubtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.',
        image:'<img class="img-fluid" src="assets/img/portfolio/3.jpg" alt="..."/>',
        description: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
        clientName:'Finish',
        cat:'Identity'  
    },
    {
        projectName:'Laravel website',
        projectSubtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.',
        image:'<img class="img-fluid" src="assets/img/portfolio/4.jpg" alt="..."/>',
        description: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
        clientName:'Lines',
        cat:'Branding'  
    },
    {
        projectName:'static website',
        projectSubtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.',
        image:'<img class="img-fluid" src="assets/img/portfolio/5.jpg" alt="..."/>',
        description: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
        clientName:'Southwest',
        cat:'Website Design'  
    },
    {
        projectName:'wordpress Blog',
        projectSubtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.',
        image:'<img class="img-fluid" src="assets/img/portfolio/6.jpg" alt="..."/>',
        description: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
        clientName:'Window',
        cat:'Photography'  
    }
];

portfolioItem.forEach(function(item,index){
    document.getElementById('portfolio-row').innerHTML += `
    <div class="col-lg-4 col-sm-6 mb-4">
    <div class="portfolio-item">
    <a class="portfolio-link" href="#portfolioModal${index+1}" data-bs-toggle="modal">
        <div class="portfolio-hover">
            <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
            </div>
        </div>
      ${item.image};
      <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
          <i class="fas fa-search-plus fa-3x"></i>
        </div>
      </div>
    </a> 
    <div class="portfolio-caption">
    <div class="portfolio-caption-heading">${item.clientName}</div>
    <div class="portfolio-caption-subheading text-muted">
     ${item.cat}
    </div>
  </div>
    </div>
  </div>`;
});

portfolioItem.forEach(function(modal,index){
    document.getElementById('portfolio-modal').innerHTML += `<div
    class="portfolio-modal modal fade"
    id="portfolioModal${index+1}"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-bs-dismiss="modal">
          <img src="assets/img/close-icon.svg" alt="Close modal" />
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="modal-body">
                <!-- Project details-->
                <h2 class="text-uppercase">${modal.projectName}</h2>
                <p class="item-intro text-muted">
                    ${modal.projectSubtitle}
                </p>
                ${modal.image}
                <p>
                    ${modal.description}
                </p>
                <ul class="list-inline">
                  <li>
                    <strong>Client:</strong>
                    ${modal.clientName}
                  </li>
                  <li>
                    <strong>Category:</strong>
                    ${modal.cat}
                  </li>
                </ul>
                <button
                  class="btn btn-primary btn-xl text-uppercase"
                  data-bs-dismiss="modal"
                  type="button"
                >
                  <i class="fas fa-xmark me-1"></i>
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
});


// about us
let aboutTtile = document.querySelector('.about-title');
let aboutSubtitle = document.querySelector('.about-subtitle');
aboutTtile.innerHTML = 'About Us';
aboutSubtitle.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.';

let timeLine = [
    {
      years:'2009-2011',
      title: 'Our Humble Beginnings',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab vero maiores enim dicta quae non, facilis aliquid architecto neque sunt quia! Assumenda modi corrupti vero ipsa ut quasi provident.',
      image:'<img class="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..."/>'
    },
    {
        years:'March 2011',
        title: 'An Agency is Born',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab vero maiores enim dicta quae non, facilis aliquid architecto neque sunt quia! Assumenda modi corrupti vero ipsa ut quasi provident.',
        image:'<img class="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..."/>'
      },
      {
        years:'March 2011',
        title: 'An Agency is Born',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab vero maiores enim dicta quae non, facilis aliquid architecto neque sunt quia! Assumenda modi corrupti vero ipsa ut quasi provident.',
        image:'<img class="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..."/>'
      },
      {
        years:'December 2015',
        title: 'Transition to Full Service',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab vero maiores enim dicta quae non, facilis aliquid architecto neque sunt quia! Assumenda modi corrupti vero ipsa ut quasi provident.',
        image:'<img class="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..."/>'
      },
      {
        years:'July 2020',
        title: 'Phase Two Expansion',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab vero maiores enim dicta quae non, facilis aliquid architecto neque sunt quia! Assumenda modi corrupti vero ipsa ut quasi provident.',
        image:'<img class="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..."/>'
      },
      {
        years:'July 2020',
        title: 'Be Part<br />Of Our<br />Story!',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab vero maiores enim dicta quae non, facilis aliquid architecto neque sunt quia! Assumenda modi corrupti vero ipsa ut quasi provident.',
        image:'<img class="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..."/>'
      }
];
const timlime = document.getElementById('timeline');
let output = '';
let li = '';
timeLine.forEach(function(blog,index){

  if(index%2==0){
    li = '<li>';
  }else{
     li = '<li class="timeline-inverted">';
  }

  
 
  output += `${li}
    <div class="timeline-image">
      ${blog.image}
    </div>
    <div class="timeline-panel">
      <div class="timeline-heading">
        <h4>${blog.years}</h4>
        <h4 class="subheading">${blog.title}</h4>
      </div>
      <div class="timeline-body">
        <p class="text-muted">
          ${blog.desc}
        </p>
      </div>
    </div>
  </li>`;



});
timlime.innerHTML = output;


// team members

let teamHeading = document.querySelector('.team-title');
teamHeading.innerHTML = 'Our Amazing Team';
let teamsubtitle = document.querySelector('.team-subtitle');
teamsubtitle.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.';
let teamDescription = document.querySelector('.team-description');
teamDescription.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam
corporis ea, alias ut unde.`;

let members = [
  { image: ` <img class="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="..."/>`,
    name: 'Larry Parker',
    position: 'Lead Marketer',
    socialLinks:[
      {
        icon: 'fab fa-twitter',
        url: '#'
      },
      {
        icon: 'fab fa-facebook-f',
        url: '#'
      },
      {
        icon: 'fab fa-linkedin-in',
        url: '#'
      }
    ]
  
  },
  { image: ` <img class="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..."/>`,
  name: 'Diana Petersen',
  position: 'Lead Designer',
  socialLinks:[
    {
      icon: 'fab fa-twitter',
      url: '#'
    },
    {
      icon: 'fab fa-facebook-f',
      url: '#'
    },
    {
      icon: 'fab fa-linkedin-in',
      url: '#'
    }
  ]

},
{ image: ` <img class="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..."/>`,
name: 'Larry Parker',
position: 'Lead Designer',
socialLinks:[
  {
    icon: 'fab fa-twitter',
    url: '#',
    sname: 'twitter'
  },
  {
    icon: 'fab fa-facebook-f',
    url: '#',
    sname: 'facebook'
  },
  {
    icon: 'fab fa-linkedin-in',
    url: '#',
    sname: 'linkedin'
  }
]

}
];

members.forEach(function(member){
  let output = '';
 
  output += `<div class="col-lg-4">
  <div class="team-member">
    ${member.image};
  <h4>${member.name}</h4>
  <p class="text-muted">${member.position}</p>
  `;
  member.socialLinks.forEach(function(social){
    output += `<a
    class="btn btn-dark btn-social mx-2"
    href="${social.url}"
    aria-label="${member.name} Profile"><i class="${social.icon}"></i
  ></a>`;
  });
  output += `</div></div>`;

  document.querySelector('.team-row').innerHTML += output;

});



// client logo
let clientsLogos = [ 
 { 
   image: '<img class="img-fluid img-brand d-block mx-auto" src="assets/img/logos/microsoft.svg" alt="..." aria-label="Microsoft Logo">',
    url: 'www.microsoft.com'

},
{ 
  image: '<img class="img-fluid img-brand d-block mx-auto" src="assets/img/logos/google.svg" alt="..." aria-label="Google Logo">',
   url: 'www.google.com'

},
{ 
  image: '<img class="img-fluid img-brand d-block mx-auto" src="assets/img/logos/facebook.svg" alt="..." aria-label="Facebook Logo">',
   url: 'www.facebook.com'

},
{ 
  image: '<img class="img-fluid img-brand d-block mx-auto" src="assets/img/logos/ibm.svg" alt="..." aria-label="IBM Logo">',
   url: 'www.ibm.com'

}
];

clientsLogos.forEach(function(logo){
  let logosOutPut = '';
  logosOutPut += `<div class="col-md-3 col-sm-6 my-3">
  <a href="${logo.url}">
    >${logo.image}</a>
</div>`;
  document.querySelector('.clients-logos').innerHTML += logosOutPut;
});


// contact us 
let contactusBg = document.getElementById('contact');
contactusBg.style.backgroundImage = 'url(/Dom-project/assets/img/map-image.png)';
let contactusTitle = document.querySelector('.contact-title');
contactusTitle.innerHTML = 'Contact Us';
let contactusSubtitle = document.querySelector('.contact-subtitle');
contactusSubtitle.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.';


// footer
let currentYear = new Date().getFullYear();
let copyright = document.querySelector('.copyright');
copyright.innerHTML = `Copyright &copy; Your Website ${currentYear}`;
let footerSocialLinks = [
  {
    icon: 'fab fa-twitter',
    url: '#',
    fsname: 'twitter'
  },
  {
    icon: 'fab fa-facebook-f',
    url: '#',
    fsname: 'facebook'
  },
  {
    icon: 'fab fa-linkedin-in',
    url: '#',
    fsname: 'linkedin'
  }
];
footerSocialLinks.forEach(function(footerlinks){
  let footerlinksOutPut = '';
  footerlinksOutPut += `<a
  class="btn btn-dark btn-social mx-2"
  href="${footerlinks.url}"
  aria-label="${footerlinks.fsname}"
  ><i class="${footerlinks.icon}"></i
></a>`;
  document.querySelector('.sociallinkss').innerHTML += footerlinksOutPut;
});
let footermenu = [
  {
    name: 'Privacy Policy',
    url: '#',
    class: 'link-dark text-decoration-none me-3'
  },
  {
    name: 'Terms & Conditions',
    url: '#',
    class: 'link-dark text-decoration-none'
  }
];
footermenu.forEach(function(footermenus){
  let footermenusOutPut = '';
  footermenusOutPut += `<a class="${footermenus.class}" href="${footermenus.url}">${footermenus.name}</a>`;
  document.querySelector('.footer-privacy-links').innerHTML += footermenusOutPut;
});
