var productCounter={
  count:0,									
  incrementCounter:function(){
if(this.count<10){
    return this.count = this.count + 1;
}else{
  alert("maximum limit reached, you can buy only 10 items");
  return this.count;
}

  },
  decrementCounter:function(){
        if (this.count>0){
        return this.count = this.count - 1;
      } else {
        return this.count=0;
      }
  },
  

};

var displayCout = document.getElementById('displayCounter');
displayCout.innerHTML=0;
document.getElementById('increment').onclick=function(){
displayCout.innerHTML=productCounter.incrementCounter();
}
document.getElementById('decrement').onclick=function(){
displayCout.innerHTML = productCounter.decrementCounter();
}



var productCounter2={
count:0,									
incrementCounter:function(){
if(this.count<10){
  return this.count = this.count + 1;
}else{
alert("maximum limit reached, you can buy only 10 items");
return this.count;
}

},
decrementCounter:function(){
      if (this.count>0){
      return this.count = this.count - 1;
    } else {
      return this.count=0;
    }
},


};

var displayCout2 = document.getElementById('displayCounter2');
displayCout2.innerHTML=0;
document.getElementById('increment2').onclick=function(){
displayCout2.innerHTML=productCounter.incrementCounter();
}
document.getElementById('decrement2').onclick=function(){
displayCout2.innerHTML = productCounter.decrementCounter();
}
