/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

//const ENDPOINT = 'https://api.github.com/users';

const btn = document.getElementById("btn");
const output = document.getElementById("output");
const message = document.getElementById("message");

btn.addEventListener("click", fetchPosts);

async function fetchPosts() {
    try {
        const ENDPOINT = 'https://api.github.com/users';
        const response = await fetch(ENDPOINT);

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error("Error fetching posts:", error.message);
        message.style.display = "block";
    }
}

function displayPosts(posts) {
    output.innerHTML = '';
    message.style.display = 'none';
  
    posts.forEach(post => {
      const postCard = createPostCard(post);
      output.appendChild(postCard);
    });
}

function createPostCard(post) {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const title = document.createElement('h2');
    title.textContent = `User Login: ${post.login}`;
  
    const body = document.createElement('p');
    body.textContent = `Avatar URL: ${post.avatar_url}`
  
    card.appendChild(title);
    card.appendChild(body);
  
    return card;
}