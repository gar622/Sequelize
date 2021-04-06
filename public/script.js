async function getData(){
    console.log('data request');
    const diningRequest = await fetch('/api/dining')
    const diningData = await diningRequest.json();

    diningData.data.forEach((restaurant) => {
        const appendItem = document.createElement("div");
        appendItem.classList.add("tile", "had-text-centered", "is-parent", "is-3");
        appendItem.innerHTML = `
        <article class = "tie is-child box has-background-link-dark ">
        <span class = "subtitle has-text-ight has-text-weight-bold">
        ${restaurant["hall_name"]}</span>
        <br />
        <span class = "has-text-light">
        ${restaurant.hall_address.split(",")[0]}</span>
        <br/>
        <span class = "has-text-light">
        ${restaurant.hall_address.split(",")[1]}</span>
        </article>`;
        
    });
 

async function getDining(){
    console.log('data request');
    const diningRequest = await fetch ('/api/dining');
    const diningData = await diningRequest.json();
    return diningData;
}
}


async function windowActions(){
    console.log('data request');
    const data = await getData();
    console.table(data);
}

window.onload = windowActions;