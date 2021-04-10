function getRandomIntInclusive(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) +min);
}

async function populateRestaurants(){
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
        targetBox.append(appendItem)
    });
} 

async function getDining(){
    console.log('data request');
    const diningRequest = await fetch ('/api/dining');
    const diningData = await diningRequest.json();
    return diningData;
}

async function getMeals(){
    console.log('data request');
    const mealRequest = await fetch ('/api/wholeMeal');
    const mealData = await mealRequest.json();
    return mealData;
}

async function getMacros(){
    console.log('data request');
    const macroRequest = await fetch ('/api/macros');
    const macroData = await macroRequest.json();
    return macroData;
}

async function windowActions(){
    console.log('data request');
    const data = await getDining();
    console.table(data);

    const maccyData = await getMacros();
    const maccyDataTime = maccyData.data;
    console.table(maccyDataTime);

    const results = await getMeals();
    const meals = results.data;
    console.table(meals);

    const mealArray = [1,2,3,4,5,6,7,8,9,10];
    const selectedMeals = mealArray.map((element) => {
        const random = getRandomIntInclusive(0, meals.length - 1);
        return meals[random];
    })
    console.table(selectedMeals);


const dataStack =[];
const chart = new CanvasJS.Chart("chartContainer",{
    animationEnabled: true,
    title:{
        text:"Meal and Macro Table"
    },
    axisX: {
		interval: 1,
	},
	axisY: {
		interval: 1,
	},
	toolTip: {
		shared: true
	},
	legend:{
		cursor: "pointer",
	},
    data: [{
        type: "stackedBar",
        showInLegend: true, 
        dataStack: dataStack,
	}]
});
async function testBaby(data) {  
	$.each(data, function(key, value){
		dataStack.push({x: value[0], y: parseInt(value[1])});
	});	
chart.render();
};
}

window.onload = windowActions;