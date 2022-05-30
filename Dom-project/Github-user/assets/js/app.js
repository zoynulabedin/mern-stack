const input = document.querySelector('.input');
const btn = document.querySelector('.searchbtn');
const githubUser = document.querySelector('.githubUser');
const githubJoinedDate = document.querySelector('.githubJoinedDate');
const githubBio = document.querySelector('.githubBio');
const repoTotal = document.querySelector('.repoTotal');
const followerTotal = document.querySelector('.followerTotal');
const followingTotal = document.querySelector('.followingTotal');
const img = document.createElement('img');
const mainImg = document.querySelector('.mainImg');

btn.addEventListener('click', () => {
    const user = input.value;
    const url = `https://api.github.com/users/${input.value}`;
    
});