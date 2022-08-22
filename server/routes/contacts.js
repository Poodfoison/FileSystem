const fs = require('fs/promises')


const readJSON = async () => {
  try {
      const rawData = await fs.readFile("./contacts.json", { encoding: 'utf8' });
      const data = JSON.parse(rawData);
      console.log(data)
  } catch(err) {
      console.log(err);
  }
}

// keep note that readJSON is asynchronous!
readJSON();
//document.getElementById(`aboutData`).innerHTML = readJSON.Name;
//Getting Error in trying to display json file data to HTML
//Error is that document is not defined