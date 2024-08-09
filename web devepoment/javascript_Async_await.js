function login (username, password){
    return new Promise((resolve, reject)=>{
    console.log('login working');
    if(username == 'sajid' && password == '12345'){
        resolve(username);
       

    }else{
       reject('username or passwornd dont match')
    }
    })
}

function displayData(username){
    return  new Promise((resolve,reject)=>{
        console.log('display data');
        resolve("hello"+ username);
    })
}

// login('sajd','12345').then((data)=>{
//     console.log(data);
//     displayData(data).then((res)=>{
//         console.log(res)
//     })
// })
// .catch((err)=>{
//     console.log(err);
// })

async function dothis(){
    try{
        const data = await login('sajid','12345');
        console.log(data);
        const res = await displayData(data);
        console.log(res);
    }
    catch(err){
        console.log(err)
    }
}

dothis();