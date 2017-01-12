function printerError(controlString) {

    function isBetweenAndM (data){
      const aToM = "abcdefghijklm".split("");   
      const arrayOfControlString = controlString.split("");
      
      let filtered = arrayOfControlString.filter(function(element){
          return !aToM.includes(element);
        });
        
      const numerator = filtered.length;
      const denomenator = arrayOfControlString.length;
      
      return String(numerator) + "/" + String(denomenator);

    };

    return isBetweenAndM(controlString);

}