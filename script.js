let state = {
  capturedOverwork: [
    {overWorkType: "Plusstunden", overWorkDate: "06.09.2022", overWorkMinutes: 90, },
    {overWorkType: "Minusstunden", overWorkDate: "09.09.2022", overWorkMinutes: 180, }, 
    {overWorkType: "Plusstunden", overWorkDate: "06.09.2022", overWorkMinutes: 60, },
  ],
  
  
  totalOverworkDone: 0, 
  totalOverWorkUsed: 0, 
  remainingOverworkHours: 0, 
  
}


// Functions to calculate overworkdone, used, and remaining
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

getTotalOverworkDone()
getTotalOverworkUsed()
getRemainingOverworkHours()



// select the overwork container
// and create DOM elements for it with a function

let capturedOverworkContainer = document.querySelector('#capturedOverWorkContainer')
let capturedOverworkElement
let overWorkTypeEl
let overWorkDateEl
let overWorkMinutesEl
let overWorkDeleteCont
let overWorkDeleteButton
   
function createAndAppendDOM(){
  let capturedOverworkElement=document.createElement('tr')
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






// select total overwork container and elements
let overworkDone = document.querySelector('.total-overwork-done')
let overWorkUsed = document.querySelector('.total-overwork-used')
let remainingOverwork = document.querySelector('.remaining-overwork')





// create a function to initialize the state object with the created dom elements
  // loop through state captured overwork Objects length and append the created Dom elements 
  // take the textContent for the DOM Elements from the State objects elements

function initState (){  
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
  }

  overworkDone.textContent = `${state.totalOverworkDone} min`
  overWorkUsed.textContent = `${state.totalOverWorkUsed} min`
  remainingOverwork.textContent = `${state.remainingOverworkHours} min`  
  if(state.remainingOverworkHours>0){
    remainingOverwork.style.color = "green"
  }
  else{remainingOverwork.style.color = "red"}
}



initState ()













