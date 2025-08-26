(function(){
  // Require the external testing repo
  const testing = require("testing-repo");
  
  // If that repo exports a function, run it
  if (typeof testing === "function") {
    testing();
  }

  module.exports = testing;
})();
