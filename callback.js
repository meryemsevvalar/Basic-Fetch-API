import fetch from 'node-fetch';

fetch ("https://jsonplaceholder.typicode.com/users")
.then((data) => data.json())
.then((users) => {
    console.log("Users yüklendi!", users);

fetch("https://jsonplaceholder.typicode.com/posts")
.then ((data) => data.json())
.then ((posts) => console.log(posts, "Posts Yüklendi!"));

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then ((data) => data.json())
.then ((post) => console.log(post, "Post Yüklendi!"));
});
