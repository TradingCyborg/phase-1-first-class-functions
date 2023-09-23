function receivesAFunction(callback) {
    // Call the provided callback function
    callback();
  }
  
  // Example of how to use receivesAFunction
  function myCallback() {
    console.log("Callback function called!");
  }
  
  receivesAFunction(myCallback);
  function returnsANamedFunction() {
    // Define a named function
    function namedFunction() {
      console.log("This is a named function.");
    }
  
    // Return the named function
    return namedFunction;
  }
  
  // Example of how to use returnsANamedFunction
  const myFunction = returnsANamedFunction();
  myFunction(); // Call the named function
  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
      console.log("This is an anonymous function.");
    };
  }
  
  // Example of how to use returnsAnAnonymousFunction
  const myFunction = returnsAnAnonymousFunction();
  myFunction(); // Call the anonymous function
  
  