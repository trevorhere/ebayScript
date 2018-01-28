
function getAvgPrice(){
  var newArr = [];
  var Arr = document.querySelectorAll("[class*=bidsold]");
  for(var i = 0; i <Arr.length; i++){ newArr.push(Arr[i].innerText)};
  for(var i = 0; i < newArr.length; i++){ newArr[i] =  parseInt(newArr[i].slice(1,4)); };
  var avv = 0;
  for(var i = 0; i < newArr.length; i++){ avv += newArr[i] };
  console.log(Math.round(avv/newArr.length))
  }


  getAvgPrice();