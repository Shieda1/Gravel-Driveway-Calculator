// https://www.omnicalculator.com/construction/gravel-driveway

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const totalcrushedstoneRadio = document.getElementById('totalcrushedstoneRadio');
const lengthRadio = document.getElementById('lengthRadio');
const widthRadio = document.getElementById('widthRadio');
const depthRadio = document.getElementById('depthRadio');

let totalcrushedstone;
let length = v1;
let width = v2;
let depth = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

totalcrushedstoneRadio.addEventListener('click', function() {
  variable1.textContent = 'Length';
  variable2.textContent = 'Width';
  variable3.textContent = 'Depth';
  length = v1;
  width = v2;
  depth = v3;
  result.textContent = '';
});

lengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Total crushed stone';
  variable2.textContent = 'Width';
  variable3.textContent = 'Depth';
  totalcrushedstone = v1;
  width = v2;
  depth = v3;
  result.textContent = '';
});

widthRadio.addEventListener('click', function() {
  variable1.textContent = 'Total crushed stone';
  variable2.textContent = 'Length';
  variable3.textContent = 'Depth';
  totalcrushedstone = v1;
  length = v2;
  depth = v3;
  result.textContent = '';
});

depthRadio.addEventListener('click', function() {
  variable1.textContent = 'Total crushed stone';
  variable2.textContent = 'Length';
  variable3.textContent = 'Width';
  totalcrushedstone = v1;
  length = v2;
  width = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(totalcrushedstoneRadio.checked)
    result.textContent = `Total crushed stone = ${computetotalcrushedstone().toFixed(2)}`;

  else if(lengthRadio.checked)
    result.textContent = `Length = ${computelength().toFixed(2)}`;

  else if(widthRadio.checked)
    result.textContent = `Width = ${computewidth().toFixed(2)}`;

  else if(depthRadio.checked)
    result.textContent = `Depth = ${computedepth().toFixed(2)}`;
})

// calculation

function computetotalcrushedstone() {
  return Number(length.value) * Number(width.value) * (Number(depth.value) / 100);
}

function computelength() {
  return Number(totalcrushedstone.value) / (Number(width.value) * (Number(depth.value) / 100));
}

function computewidth() {
  return Number(totalcrushedstone.value) / (Number(length.value) * (Number(depth.value) / 100));
}

function computedepth() {
  return (Number(totalcrushedstone.value) / (Number(length.value) * Number(width.value))) * 100;
}