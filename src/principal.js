import Pessoa from './pessoa'
// import './modulos/moduloA'   // posso importar aqui ou em outro arquivo do projeto. Foi posto no pessoa.js
import './assets'               // procura arquivo index.js no diretório indicado.

const atendente = new Pessoa
console.log(atendente.cumprimentar());
