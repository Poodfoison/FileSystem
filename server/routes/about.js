export const fetchJSON = async () => {

  fetch('http://localhost:3000/details_json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    mode: "cors",
    cache: "default"
  })
    .then(res => res.json())
    .then(data => {
      const aboutdata = document.getElementById('about-data');
      aboutdata.innerHTML = `
      <p>Name: ${data.name}.</p>
      <p>Age: ${data.age}</p>
      <p>Hobbies: ${data.hobbies}</p>
      <p>Pet: ${data.pet}.</p>
      <p>Favorite Food: ${data.favoriteFood}.</p>
      `;
    })
}
