const first = readFileSync('./content/first.txt','utf-8');
console.log("Start")
const second = readFileSync('./content/second.txt','utf-8');

console.log(first,second);

writeFileSync(
    `./content/result-sync.txt`,
    `Here is the result ${first},${second}`,
     {flag:'a'}
    )
    console.log("Done");
    console.log("starting next task");