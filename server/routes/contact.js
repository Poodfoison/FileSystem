export const fetchJSONContact = async () => {

  fetch('http://localhost:3000/contact_data_json', {
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
          const contact = document.getElementById('contact-data');
          contact.innerHTML = `
      <p>Phone number: ${data.phone}</p>
      <p>E-mail address: ${data.emailAddress}</p>
      `;
      })
}