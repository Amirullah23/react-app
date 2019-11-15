export default function amir() {
  fetch(`https://api.github.com/users/Amirullah23`)
    .then(Response => Response.json())
    .then(function(data) {
      let repos = data;
    });
}
