// fetch('https://api.github.com/users/Amirullah23/followers')

// .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let loop = data


//         for (let i = 0; i < loop.length; i++) {
//             let get = data[i];
//             return get


// var para = document.createElement("h3");
// var node = document.createTextNode(get.name);
// para.appendChild(node);

// var para1 = document.createElement("h3");
// var node1 = document.createTextNode(get.avatar_url);
// para1.appendChild(node1);
// save
// var element = document.getElementById("div1");
// element.appendChild(para);
// element.appendChild(para1);



// }


// console.log(get)
// console.log(get.avatar_url)

//your name
// document.getElementById("myName").innerHTML = get.login;
//your pict
// document.getElementById("myImg").src = get.avatar_url;

// document.getElementById("yourName").innerHTML = get.name;
// document.getElementById("yourId").innerHTML = get.id;
// document.getElementById("followers").innerHTML = get.followers;
// document.getElementById("following").innerHTML = get.following;
// document.getElementById("public_repos").innerHTML = get.public_repos;
// document.getElementById("link").href = get.html_url;




// var para = document.createElement("h3");
// var node = document.createTextNode(get.name);
// para.appendChild(node);

// var para1 = document.createElement("h3");
// var node1 = document.createTextNode(get.avatar_url);
// para1.appendChild(node1);
//save
// var element = document.getElementById("div1");
// element.appendChild(para);
// element.appendChild(para1);

//     console.log(get)
// })
// .catch(err => {

// })









let userName = localStorage.getItem('name')


function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = `https://api.github.com/users/${userName}/following`;
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let authors = data;
        return authors.map(function(author) {
            let li = createNode('li'),
                span = createNode('p');
            img = createNode('img'),


                span.innerHTML = `${author.login}`;
            img.src = author.avatar_url;
            append(li, img);
            append(li, span);
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });