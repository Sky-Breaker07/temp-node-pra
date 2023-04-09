// const {readFile, writeFile} = require('fs');
// readFile('./content/firsttext.txt', `utf-8`, (err, result) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(result);
// })

// const http = require(`http`);
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end(`Welcome to NodeJS`);
//     }
//     else if (req.url === '/about') {
//         res.end(`About Me`);
//     } else {
//         res.end(`<h1>Oops! We can't find the page you are looking for</h1>
//         <p><a href='/'>Back to Home<a/></p>`)
//     }

// })

// server.listen(5000);

const _ = require('lodash');
const items = [1, [2, [3, [4, [5, [6]]]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)