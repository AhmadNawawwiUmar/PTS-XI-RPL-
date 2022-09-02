function samplePromise(){
    return Promise.resolve("Ahmad");
}

const name = await samplePromise();
console.info(name);