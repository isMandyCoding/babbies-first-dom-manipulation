let btn1 = document.querySelector("#btn1");

let in1_text = document.querySelector("#in1").value;

document.querySelector("#in1").addEventListener("keyup", function(event){
  if(event.key=="Enter"){
    console.log("enter pressed!")
  }
})

//THE ABOVE CODE WAS PRE-WRITTEN.

// btn1.addEventListener("click", function(){
//
//   console.log(btn1.closest(".boxy").querySelector("input").value());
// })

//BUTTON VARIABLE IS A LIST OF ALL THE BUTTONS ON THE PAGE

var button = document.querySelectorAll('button');

//THIS LOOP RUNS FOR THE LENGTH OF THE LIST OF BUTTONS (3 TIMES)

for (var i = 0; i < button.length; i++) {

  //ADDED EVENT LISTENER FOR WHEN USER CLICKS FOR ALL BUTTONS

  button[i].addEventListener("click", function(event) {

    //THIS CONDITIONAL MAKES SURE THE BELOW FUNCTION ONLY HAPPENS WHERE THERE IS A VALUE IN INPUT FIELD
    if (this.previousElementSibling.value) {
      //VAR NEWWORD IS A NEW HTML SPAN
      var newWord = document.createElement("span")
      //THIS PART PUTS IN TEXT FROM THE INPUT FIELD TO THE NEWLY CREATED SPAN ELEMENT
      newWord.innerText = this.previousElementSibling.value
      //THIS PAT ACTUALLY PUTS THIS ELEMENT ON THE DOCUMENT AT THE END OF THE PARTENT ELEMENT
      this.parentNode.nextElementSibling.appendChild(newWord)
      //THIS PART MAKES THE INPUT FIELD BLANK
      this.previousElementSibling.value = ""
      //THIS VARIABLE IS A LIST OF THE NEW SPANS WE CREATED
      var spanEls = document.querySelectorAll("span")
      //THIS LOOP RUNS FOR THE LENGTH OF THE LIST OF SPANS WE NOW HAVE
      for(var j = 0; j < spanEls.length; j++){
        //ADDING AN EVENT LISTENER FOR WHEN A USER CLICKS ON THE NEW SPAN
        spanEls[j].addEventListener("click", function(){
          //THIS REMOVES THE CLICKED SPAN FROM THE PAGE
          this.parentNode.removeChild(this)
        })
      }
    }


  })

    //ADDED EVENT LISTENER FOR WHEN USER RELEASES A KEY FOR ALL INPUTS

  button[i].previousElementSibling.addEventListener("keyup", function(event) {
        //THIS CONDITIONAL MAKES SURE THE BELOW FUNCTION ONLY HAPPENS WHERE THERE IS A VALUE IN INPUT FIELD AND THE KEY IS "ENTER"
    if(event.key=="Enter" && this.value){
      //VAR NEWWORD IS A NEW HTML SPAN
    var newWord = document.createElement("span")
    //THIS PART PUTS IN TEXT FROM THE INPUT FIELD TO THE NEWLY CREATED SPAN ELEMENT
    newWord.innerText = this.value
    //THIS PAT ACTUALLY PUTS THIS ELEMENT ON THE DOCUMENT AT THE END OF THE PARTENT ELEMENT
    this.parentNode.nextElementSibling.appendChild(newWord)
    //THIS PART MAKES THE INPUT FIELD BLANK
    this.value = null
    //THIS VARIABLE IS A LIST OF THE NEW SPANS WE CREATED
    var spanEls = document.querySelectorAll("span")
    //THIS LOOP RUNS FOR THE LENGTH OF THE LIST OF SPANS WE NOW HAVE
    for(var j = 0; j < spanEls.length; j++){
      //ADDING AN EVENT LISTENER FOR WHEN A USER CLICKS ON THE NEW SPAN
      spanEls[j].addEventListener("click", function(){
        //THIS REMOVES THE CLICKED SPAN FROM THE PAGE
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
