fetch("json-example.json") //fetch API with path or URL
.then(response=>response.json()) //then function will run json data response
.then(data=>{
    console.log(data.sentence)
    document.querySelector("#example1").innerText = data.sentence // div ID
})
