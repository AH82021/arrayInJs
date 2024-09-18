
const fs = require('fs').promises


fs.readFile('file1.txt','utf-8')
.then(data => {
  console.log('File content:', data)
}
)
.catch(err =>{
  console.error("Error reading file ",err)
});





async function readFileAsync(){

try {
  const data = await fs.readFile('file1.txt','utf8')
  console.log(data);
  
} catch (err) {
  console.error("Error reading file ",err)
}

}


async function readFiles(params) {
  try {
    const data1 = await fs.readFile('file1.txt','utf8');
    const data2 = await fs.readFile('file2.txt','utf8');
    const data3 = await fs.readFile('file3.txt','utf8');
    console.log(data1,data2,data3);
    
  } catch (err) {
    console.error("Error reading file ",err)
  }
}

readFiles();

readFileAsync()






// HTTP
// Client
// Server 