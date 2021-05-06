function calculateSoilVolume(){

   let gardenLength = parseInt(document.getElementById("garden-length").value);
   // While it is not required to store these variables in session or local storage, for this coding example, I wanted to show the use of get and set
   // as it could be used with an API in a more complex application. 
   sessionStorage.setItem('length', gardenLength);

   let gardenWidth = parseInt(document.getElementById("garden-width").value);
   sessionStorage.setItem('width', gardenWidth);

   let gardenHeight = parseInt(document.getElementById("garden-height").value);
   sessionStorage.setItem('height', gardenHeight);

   let gardenVolume = (gardenLength*gardenWidth*gardenHeight);
   sessionStorage.setItem('totalVolume', gardenVolume);
   document.getElementById("totalSoilVolume").innerHTML = sessionStorage.getItem('totalVolume');

};

    
