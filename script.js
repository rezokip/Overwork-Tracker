let addButton = document.querySelector('.add-button')
let formElement = document.querySelector('.record-section-form')


let state = {
  capturedOverwork: [
  ],
  
  
  totalOverworkDone: 0, 
  totalOverWorkUsed: 0, 
  remainingOverworkHours: 0, 
  
}



  // Helper Functions to calculate overworkdone, used, and remaining
    // look to to capturedoverwork object and use the values for the respective functions

  function getTotalOverworkDone(){
    for(i of state.capturedOverwork){
      if(i.overWorkType==="Plusstunden"){
        state.totalOverworkDone += i.overWorkMinutes
      }    
    }    
  }
  
  function getTotalOverworkUsed(){
    for(i of state.capturedOverwork){
      if(i.overWorkType==="Minusstunden"){
        state.totalOverWorkUsed += i.overWorkMinutes
      }
    }
  }
  
  function getRemainingOverworkHours(){
    state.remainingOverworkHours = state.totalOverworkDone - state.totalOverWorkUsed
  }

  // create a function to update the state everytime you refresh or click on the submit button
    // begin the state values with 0 to prevent adding values which already exist
    // call the Helper functions
    // everytime you update the state store the state in the localstorage 
    // call the render function to render from scratch everytime you update 
      //(prevents double calling the objects, that already exist)
  function updateState(){
    state.totalOverworkDone = 0;
    state.totalOverWorkUsed =0;
    state.remainingOverworkHours =0;
    getTotalOverworkDone()
    getTotalOverworkUsed()
    getRemainingOverworkHours()
    localStorage.setItem('overworkCalculatorState', JSON.stringify(state))
    render()
  }
  
  


// select the capture overwork container
// Outside of the Function Create the Variables you need 
// Use a helper function to creating and appending the DOM elements to the container
let overworkDone = document.querySelector('.total-overwork-done')
let overWorkUsed = document.querySelector('.total-overwork-used')
let remainingOverwork = document.querySelector('.remaining-overwork')

let capturedOverworkContainer = document.querySelector('#capturedOverWorkContainer')
let capturedOverworkElement
let overWorkTypeEl
let overWorkDateEl
let overWorkMinutesEl
let overWorkDeleteCont
let overWorkDeleteButton
   
function createAndAppendDOM(){
  capturedOverworkElement=document.createElement('tr')
  capturedOverworkContainer.appendChild(capturedOverworkElement)

  overWorkTypeEl= document.createElement('td')
  overWorkDateEl= document.createElement('td')
  overWorkMinutesEl= document.createElement('td')
  overWorkDeleteCont= document.createElement('td')
  overWorkDeleteButton = document.createElement('button')


  capturedOverworkElement.appendChild(overWorkTypeEl)
  capturedOverworkElement.appendChild(overWorkDateEl)
  capturedOverworkElement.appendChild(overWorkMinutesEl)
  capturedOverworkElement.appendChild(overWorkDeleteCont)
  overWorkDeleteCont.appendChild(overWorkDeleteButton)
}


// create a function to render the state object with the created Helper function for the DOM elements
  // Begin the state with an empty captured overwork container
  // loop through states CapturedOverwork object which has arrays
  // for each array assgin the textContent of the DOM Elements to the Objects in the specific array
  // give the textContent appropriate colors depending on the value
  // assign the remaining textcontent (result section), to the remaining elements in State Object

function render(){
  capturedOverworkContainer.textContent=""
  for(let i = 0; i<state.capturedOverwork.length; i++){
    createAndAppendDOM()  
    overWorkTypeEl.textContent = state.capturedOverwork[i].overWorkType
    overWorkDateEl.textContent = state.capturedOverwork[i].overWorkDate
    overWorkMinutesEl.textContent = state.capturedOverwork[i].overWorkMinutes
    overWorkDeleteButton.textContent='x'

  
    if(overWorkTypeEl.textContent === "Plusstunden"){
      overWorkTypeEl.style.color= "green";
      overWorkMinutesEl.style.color = "green";
    }
    else{
      overWorkTypeEl.style.color= "red";
      overWorkMinutesEl.style.color = "red";
    } 

    overworkDone.textContent = `${state.totalOverworkDone} min`
    overWorkUsed.textContent = `${state.totalOverWorkUsed} min`
    remainingOverwork.textContent = `${state.remainingOverworkHours} min`  
    if(state.remainingOverworkHours>0){
      remainingOverwork.style.color = "green"
    }
    else{remainingOverwork.style.color = "red"}

// Eventlistener for the delete button
  // delete the respective array from the capturevoverwork object 
  // by using splice method with the appropriate index when clicking the button
  // after deleting update the state to render the new DOM and get the updated values
    overWorkDeleteButton.addEventListener('click', function(){  
      state.capturedOverwork.splice(i,1)
      updateState()
    })
  }
}



// function to initialize the State with the update functions
// look if there is already a state in the localstorage
  // if so then set it to the localstate
// after getting the saved state update the state  

function initState (){  
  let localState = JSON.parse(localStorage.getItem('overworkCalculatorState'))
  if(localState!== null){
    state = localState;
  }
  updateState()
}

initState()



// Eventlistener for the Add Button.
  // look if the formelement has values,
    // then after clicking, get the values from the form (formElement[...].value) and
      // push them to the capturedoverwork object 
    // now Update the State with the UpdateState function (to prevent double objects )


addButton.addEventListener('click', function(){
  if(formElement[0].value!='' && formElement[1].value!='' && formElement[2].value!=''){
    state.capturedOverwork.push(
      {overWorkType: formElement[0].value, 
      overWorkDate: formElement[1].value, 
      overWorkMinutes: Number(formElement[2].value), },
    )
    updateState()
  }
  else {alert('Bitte vollständig ausfüllen')}
  formElement[1].value= ''
  formElement[2].value= ''
  
})
















