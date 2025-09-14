const radius = document.getElementById('radiii');
const result = document.getElementById('result2');

// calling function perimeter when user click the button
document.getElementById('perimeter').addEventListener('click', () => {
   perimeter();
});

// calling function area when user click the button
document.getElementById('area').addEventListener('click', () => {
   area();
});

// calling function volume when user click the button
document.getElementById('volume').addEventListener('click', () => {
   volume();
});

//function to calculate perimeter
function perimeter(){
   const radiusValue = radius.value;
   const perimResult = 2 * 3.14159 * radiusValue;
   result.textContent = perimResult;
}

//function to calculate area
function area(){
   const radiusValue = radius.value;
   const areaResult = 3.14159 * radiusValue * radiusValue;
   result.textContent = areaResult;
}

//function to calculate volume
function volume(){
   const radiusValue = radius.value;
   const volnResult = 4 / 3 * 3.14159 * radiusValue * radiusValue * radiusValue;
   result.textContent = volnResult;
}