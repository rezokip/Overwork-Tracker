let state = {
  capturedOverwork: [
    {overWorkType: "Plusstunden", overWorkDate: "06.09.2022", overWorkMinutes: 30, }
  ],
  
  totalOverwork: [
    {totalOverworkDone: 30, totalOverWorkUsed: 0, remainingOverworkHours: 30 , }
  ],
}


// select Print secton Body
// and create DOM elements for it

let printSectionBodyContainer = document.querySelector('#print-section-body-container')
let newPrintSectionBodyElement=document.createElement('tr')
let newPrintSectionHourType= document.createElement('td')
let newPrintSectionDate= document.createElement('td')
let newPrintSectionMinutes= document.createElement('td')
let newPrintSectionDeleteContainer= document.createElement('td')
let newPrintSectionDeleteButton = document.createElement('button')
console.log(printSectionBodyContainer)


// create a function to append the created DOM elements to the Print section Body

function appendNewPrintSectionElements(){  
  printSectionBodyContainer.appendChild(newPrintSectionBodyElement)
  newPrintSectionBodyElement.appendChild(newPrintSectionHourType)
  newPrintSectionBodyElement.appendChild(newPrintSectionDate)
  newPrintSectionBodyElement.appendChild(newPrintSectionMinutes)
  newPrintSectionBodyElement.appendChild(newPrintSectionDeleteContainer)
  newPrintSectionDeleteContainer.appendChild(newPrintSectionDeleteButton)

  newPrintSectionHourType.textContent="Minusstunden"
  newPrintSectionDate.textContent='09.09.2022'
  newPrintSectionMinutes.textContent=30
  newPrintSectionDeleteButton.textContent='x'
}
appendNewPrintSectionElements()



