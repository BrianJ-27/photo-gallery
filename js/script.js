lightbox.option({
    'resizeDuration': 700,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true,
    'showImageNumberLabel' : false
  });

  lightbox.option();
  
/*=-=-=-=-=-SEARCH FIELD FUNCTIONALITY=-=-=-=-=-*/
 document.querySelector('input').addEventListener('keyup', ()=>{
   //Selecting value from the search field and all the "a" elements
   const inputField = document.getElementById('search').value.toLowerCase(); 
   const aTag = document.querySelectorAll('#my_photos a');
   aTag.forEach(element => {
    // search filter logic
    var imgCap = element.getAttribute("data-title").toLowerCase();
    var match = imgCap.includes(inputField);
    (match) ? element.style.display = "" : element.style.display = "none";  
    });  
   });


