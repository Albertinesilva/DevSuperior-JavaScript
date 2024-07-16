const cep = '44441346';

const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`)

async function getJsonResponse(url) {
  const response = await fetch(url);
  const jsonBody = await response.json();
  return jsonBody;
}

// getJsonResponse(`https://viacep.com.br/ws/${cep}/json/`)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));


// getJsonResponse(`https://viacep.com.br/ws/${cep}/json/`)
//   .then(result => {
//     console.log(result);
//   })

async function showCepData(cep){
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const json = await getJsonResponse(url);
  console.log(json);
}

showCepData('44441346');

console.log("A");
console.log("B");