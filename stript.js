let btn1 = document.querySelector("#btn1");

let in1_text = document.querySelector("#in1").value;

document.querySelector("#in1").addEventListener("keyup", function(event){
  if(event.key=="Enter"){
    console.log("enter pressed!")
  }
})

// btn1.addEventListener("click", function(){
//
//   console.log(btn1.closest(".boxy").querySelector("input").value());
// })

var button = document.querySelectorAll('button');

for (var i = 0; i < button.length; i++) {

  button[i].addEventListener("click", function(event) {
    if (this.previousElementSibling.value) {
      var newWord = document.createElement("span")
      newWord.innerText = this.previousElementSibling.value
      this.parentNode.nextElementSibling.appendChild(newWord)
      this.previousElementSibling.value = ""
      var spanEls = document.querySelector(".output").childNodes
      for(var j = 0; j < spanEls.length; j++){
        spanEls[j].addEventListener("click", function(){
          this.parentNode.removeChild(this)
        })
      }
    }


  })
  button[i].previousElementSibling.addEventListener("keyup", function(event) {
    if(event.key=="Enter" && this.value){
    var newWord = document.createElement("span")
    newWord.innerText = this.value
    this.parentNode.nextElementSibling.appendChild(newWord)
    this.value = null
    var spanEls = document.querySelector(".output").childNodes
    for(var j = 0; j < spanEls.length; j++){
      spanEls[j].addEventListener("click", function(){
        this.parentNode.removeChild(this)
      })
    }
    }
  })
  }



//
//
//
// document.addEventListener("keyup", function(event){
//
//   console.log(event)
// })



// btn1.addEventListener("click", function(){
//
//   console.log(document.querySelector("#in1").value);
//
//   document.querySelector("#out1").innerHTML = document.querySelector("#in1").value;
//   document.querySelector('#in1').value = null
// })
//
// btn2.addEventListener("click", function(){
//
//   console.log(document.querySelector("#in2").value);
//
//   document.querySelector("#out2").innerHTML = document.querySelector("#in2").value;
//   document.querySelector('#in2').value = null
// })
//
// btn3.addEventListener("click", function(){
//
//   console.log(document.querySelector("#in3").value);
//
//   document.querySelector("#out3").innerHTML = document.querySelector("#in3").value;
//   document.querySelector('#in3').value = null
// })
