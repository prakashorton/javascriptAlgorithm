function PromiseTest(){
    return new Promise(resole => {
       setTimeout(() => {
           console.log('Javascript Everything');
       }, 2000); 
    });
}

async function testPromise(){
    const p1 = await PromiseTest();
    console.log('Run Promise');
}


// Output after  2 sec
//  Javascript Everything