window.addEventListener("load", function ()               {                           

  let counter = 0;
  
function buttonClicked()
{
   counter ++ ;

  let clickCounterElement =
    document.getElementById("clickCounter");

  clickCounterElement.innerHTML = "Clicked " + counter +" times."
  
}
  

  let clickButtonElement = 
  document.getElementById("clickButton");

  clickButtonElement.addEventListener("click", buttonClicked);
});