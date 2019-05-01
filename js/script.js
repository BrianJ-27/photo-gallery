lightbox.option({
    'resizeDuration': 700,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true,
    'showImageNumberLabel' : false
  })

  lightbox.option()


 function searchField (){
//create a variable to hold the value of the search field and change the input to lowercase
  let inputField = document.getElementById('search').value.toLowerCase();
//create a variable that stores the anchor tags for the images
   let aTag = document.querySelector('.photo_container a')
// create a loop that iterates theu each data-title caption values.
   for (var i = 0; i < aTag.length; i++ ){
     let imgCap = aTag[i].getAttribute("data-title").toLowerCase();
     let match = imgCap.includes(inputField);
//Then program compares what is typed into search field to what is in captions and filters images
     if (match){
       aTag[i].style.display = "";
     }else{
      aTag[i].style.display = none;
     }
   }
 }

 searchField();
