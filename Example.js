   // Example of calling multiple Promises
 // creating first  Promise
 let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(' The First Promise has resolved');
        resolve(10);
    }, 1 * 1000);
});
// creating second Promise
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second Promise has resolved');
        resolve(20);
    }, 2 * 1000);
});
// Creating third Promise
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The third Promise has  resolved ');
        resolve(30);
    }, 3 * 1000);
});

 // checking multiple Promises
        //checking multiple Promises using all function with the help of array  
        Promise.all([p1, p2, p3]).then((result) => {
            console.log(`Results: ${result}`);
        }).catch((error) => {
            console.log(`Error: ${error}`)
        });


// nested setTimeouts
setTimeout(() => {
    console.log('3');
    setTimeout(() => {
        console.log('2');
        setTimeout(() => {
            console.log('3');
        },1000);
    },1000);
},1000);


//error first callback
fs.readFile('./test2.txt',{encoding: 'utf-8'}, (err,data)=>{
    if(err){
        console.error('ERROR');
        console.error(err);
    } else {
        console.error('GOT DATA');
        console.log(data);
    }
   console.log(data) ;
});

//promises 
const myPromise = new Promise((resolve,reject) => {
    const rand = Math.floor(Math.random() * 2);
    if(rand === 0){
        resolve();
    }else {
        reject();
    }
});

myPromise
.then(() => console.log('success'))
.catch(() => console.error('something went wrong'));

//custom promise using constructor
var aPromise = new Promise(function (resolve, reject){
    request.get(options, function(err, resp,  body){
        if (err) {
            reject(err);
        } else {
            resolve(JSON.parse(body));
        }
    })
});

myPromise

.then(() => console.log("success"))
.catch(() => console.log("something went wrong"))

// sample Promise
const myPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('foo');
    }, 300);
    });

    myPromise
    .then(handleResolvedA, handledRejectedA)
    .then(handleResolvedB, handledRejectedB)
    .then(handledResolvedC, handledRejectedC)

    myPromise
    .then(handleResolvedA)
    .then(handleResolvedB)
    .then(handleResolvedC)
    .catch(handleRejectedAny);

//  fs readfile with promises
fs.promises
.readFile('./test.txt', {encoding:'utf-8'})
.then((data) => console.log(data))
.then ((err) => console.log(err))

//fetch with promises

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then((res) =>  res.json())
.then((data) => console.log(data))
.catch((err)   => console.error(err))

//loadfile with async await

const loadFile = async () => {
    try {
    const data = await fs.promises.readFile('./test.txt',{
        encoding: 'utf-8'
    });
    console.log(data);
} catch (error) {
    console.error(error);
}

//tetch pokemon with async/await without error handling

const fetchPokemon = async(id) => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/$')
      {id}
       const data = await res.json();
       console.log(data);
};
fetchPokemon();


const btn;
btn.addEventListener('click', () => {
})
 
}