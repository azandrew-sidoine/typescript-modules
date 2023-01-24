// // Import stylesheets
// import './style.css';

// // Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
// import * as math from './math'; // Importation de tout le module math
import { multiply } from './math'; // Importation partiel de la function multiply du module math

// import('./math').then((module) => {
//   const result = module.multiply(3, 2);
//   appDiv.innerHTML = `Result (3 * 2) = ${result}`;
// }); // Importation asynchrone

const result = multiply(3, 2);
appDiv.innerHTML = `Result (3 * 2) = ${result}`;

// <script src="..." defer>
