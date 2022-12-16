function searchButtonOnClick()
{
    var searchText = document.getElementById("searchbar").value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => display(data))
    
    document.getElementById("searchbar").value = "";
    document.getElementById("container").textContent = "";
}

function display(data)
{
    var oldContent = document.getElementById("container");
    var ItemNumber = parseInt(document.getElementById("itemNumber").value);
    
    for(var a = 0; a < ItemNumber; a++)
    {
        var newDiv = document.createElement("div");
        newDiv.innerHTML =  
        `<div class="card m-2" style = "width: 20em" >
            <img src="${data.meals[a].strMealThumb}" class="card-img-top">
            <div class="card-body">
                <a href = ><h4 class = "card-title text-center">${data.meals[a].strMeal}</h4>
            </div>
        </div>`

        oldContent.appendChild(newDiv);
    }
    document.getElementById("itemNumber").value = "";

}