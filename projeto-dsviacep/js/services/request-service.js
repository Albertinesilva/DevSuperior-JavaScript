import RequestException from "./exceptions/request-exception.js";

export async function getJson(url) {
  try {
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
  }
  catch (error) {
    throw new RequestException('Informe um CEP válido.');
  }
}