var DessertData;


async function FetchDessertData() {

    //fetch dessert data array and assign it to DesertData var
    try{
        await fetch('./data.json')
        .then((response) => response.json())
        .then((data) => {
        DessertData = data
        console.log("Data Fetched Succesfully");
        console.log("-----------------------");

        })
    }catch{
        console.log("Error: Data not fetched");
    }
    

}



function CreateDessertElement(dessert){

    //get Grid Container for parent assignment
    const GridContainer = document.getElementById("GridContainer");

    //create elements for dessert item
    const ItemContainer = document.createElement("div");
    const ItemImage = document.createElement("image");
    const ItemButton = document.createElement("button");
    const ItemButtonImage = document.createElement("image");
    const ItemCategory = document.createElement("h3");
    const ItemName = document.createElement("h3");
    const ItemPrice = document.createElement("h3");

    //set attributes off dessert item elements
    ItemContainer.setAttribute('class', 'ItemContainer');
    ItemImage.setAttribute('class', 'ItemImage');
    ItemButton.setAttribute('class', 'ItemButton');
    ItemButtonImage.setAttribute('class', 'ItemButtonImage');
    ItemCategory.setAttribute('class', 'ItemCategoryText');
    ItemName.setAttribute('class', 'ItemNameText');
    ItemPrice.setAttribute('class', 'ItemPriceText');

    //set text for elements
    ItemButton.textContent = "Add To Cart";
    ItemCategory.textContent = `${dessert.category}`;
    ItemName.textContent = `${dessert.name}`;
    ItemPrice.textContent = `$${dessert.price}`;

    //set image for elements
    ItemButtonImage.setAttribute('src', './assets/images/icon-add-to-cart.svg')
    // get window width and check if it should display mobile or desktop image version
    const WindowWidth = window.outerWidth;

    

    if(WindowWidth >= 500){
        //display desktop image version
        ItemImage.setAttribute('src', `${dessert.image.desktop}`)       
    }else{
        //display mobile image version
        ItemImage.setAttribute('src', `${dessert.image.mobile}`)
    }

    //assign all items to there respective parents
    GridContainer.appendChild(ItemContainer);
    ItemContainer.appendChild(ItemImage);
    ItemContainer.appendChild(ItemButton);
    ItemButton.appendChild(ItemButtonImage);
    ItemContainer.appendChild(ItemCategory);
    ItemContainer.appendChild(ItemName);
    ItemContainer.appendChild(ItemPrice);

}


async function DisplayDessertMenu(){

    await FetchDessertData();

    DessertData.forEach(dessert => {
        CreateDessertElement(dessert);
    });

}


DisplayDessertMenu();

