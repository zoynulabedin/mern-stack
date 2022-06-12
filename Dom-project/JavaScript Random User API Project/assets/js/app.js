const btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    getPerson();
});

function getPerson(data) {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      
        const person = data.results[0];
        const location = person.location;
        console.log(location);
        const name = person.name;
        let img = `
        <img src="${person.picture['large']}" />
        `
        let output = `
        
        <ul>
                <li>
                  <i class="fa fa-user"></i> First Name: <span>${name['title']} ${name['first']}</span>
                </li>
                <li>
                  <i class="fa fa-user"></i> Last Name: <span>${name['first']}</span>
                </li>
                <li>
                  <i class="fa fa-map-marker"></i> Location: <span>${location.country}</span>
                </li>
                <li>
                  <i class="fa fa-phone"></i> Phone: <span>${person.cell}</span>
                </li>
                <li>
                  <i class="fa fa-envelope-o"></i> Email:
                  <span>${person.email}</span>
                </li>
              </ul>
        
        
        `
        document.querySelector('.profile').innerHTML = img;
        document.querySelector('.card-content').innerHTML = output;
    });

}