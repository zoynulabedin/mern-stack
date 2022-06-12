const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const btnSearch = document.getElementById('btnSearch');
const my_token = "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";
searchForm.onsubmit = function(e) {
  e.preventDefault();
 const users =  fetch ('https://api.github.com/search/users?q=' + searchInput.value, {
    'headers': {
      'Authorization': `token ${my_token}` 
    }
  })
  .then(response => response.json());
  users.then(data => {
    console.log(data);
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = '';
    data.items.forEach(user => {
      const  list = `
      <div class="col-lg-3 my-3 text-center">
      <div class="card p-3 shadow">
        <div class="profile-img">
          <img src="${user.avatar_url}" alt="" />
        </div>
        <div class="user-info">
          <h5>${user.login}</h5>
         
          <div class="button">
            <a class="btn btn-primary w-50 text-uppercase" href="${user.html_url}">Details</a>
          </div>
        </div>
      </div>
    </div>
      `;
      usersList.innerHTML += list;
    });
    
  })

 
}

