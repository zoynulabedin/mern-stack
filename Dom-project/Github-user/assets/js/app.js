const btn = document.getElementById('submitbtn');
const input = document.getElementById('input');
const user_img = document.getElementById('user_img');
const userName = document.getElementById('userName');
const img = document.createElement('img');
const followers = document.getElementById('followers');
const following = document.getElementById('following');
const repolist = document.getElementById('repolist');
const user_bio = document.getElementById('user_bio');
const user_location = document.getElementById('user_location');
const user_web = document.getElementById('user_web');
const created_at = document.getElementById('created_at');

btn.addEventListener('click', function() {
    const user = input.value;
    const url = `https://api.github.com/users/${user}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            userName.innerHTML = data.name;
            img.classList.add('img-fluid');
            img.src = data.avatar_url;
            user_img.appendChild(img);
            followers.innerHTML = 'Followers '+ data.followers;
            following.innerHTML = 'Following '+ data.following;
            userName.href = data.html_url;
            user_bio.innerHTML = data.bio;
            user_location.innerHTML = data.location;
            user_web.innerHTML = data.blog;
            user_web.href = data.blog;
            created_at.innerHTML = data.created_at;
        });
});
