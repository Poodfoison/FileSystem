const fs = require('fs/promises')


const readJSON = async () => {
  try {
      const rawData = await fs.readFile("./details.json", { encoding: 'utf8' });
      const data = JSON.parse(rawData);
      console.log(data)
  } catch(err) {
      console.log(err);
  }
}


//readJSON();
document.querySelector(`aboutData`).innerHTML = readJSON.Name;
