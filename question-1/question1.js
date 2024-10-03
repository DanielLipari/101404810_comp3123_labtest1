function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(array)) {
        reject("Input is not an array");
      } else {
        const filteredArray = array
          .filter(item => typeof item === 'string')
          .map(word => word.toLowerCase());
        
        resolve(filteredArray);
      }
    });
  }
  
  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  
  lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));