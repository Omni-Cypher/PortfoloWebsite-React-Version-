let searchButton = document.querySelector("#search")

searchButton.addEventListener("click" , ()=> {
    document.querySelector("#content").innerHTML = ""; //clearing previous results
    console.log("button pressed")
    sendApiRequest()
})
async function sendApiRequest(){
    let App_Id = "bf15898f"
    let App_key = "115506593a3e80b81c9f3e13daf7996b"
    let Food = document.querySelector("#searchbar").value;
    let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${Food}&app_id=${App_Id}&app_key=${App_key}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}

function useApiData(data){
    for(items in data.hits){
    document.querySelector("#content").innerHTML +=
    `
    <div class="col">
        <div class="card" style="width: 18rem;">
            <img src="${data.hits[items].recipe.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.hits[items].recipe.label}</h5>
                <p class="card-text"> Origin: ${data.hits[items].recipe.cuisineType}</p>
                <p class="card-text"> Dish Type: ${data.hits[items].recipe.dishType}</p>
                <p class="card-text"> Source: ${data.hits[items].recipe.source}</p>
                <a href="${data.hits[items].recipe.url}" class="btn btn-primary">View Recipe!</a>
            </div>
        </div>
    </div>
    `
    }
}