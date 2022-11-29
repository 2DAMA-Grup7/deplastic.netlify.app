const {readFileSync, promises: fsPromises} = require('fs');

async function asyncReadFile(filename) {
    try {
      const contents = await fsPromises.readFile(filename, 'utf-8');
  
      const arr = contents.split(/\r?\n/);
  
      console.log(arr); 
      return arr;
    } catch (err) {
      console.log(err);
    }
  }
  
  asyncReadFile("../../netlify/funtions/routes/log.");



export default getLog;