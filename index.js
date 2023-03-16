const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}


function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
  module.exports = {drivers,selectingDrivers};


function createFareMultiplier(multiplier) {
    return function fareMultiplier(fare) {
      return fare * multiplier;
    }}
  module.exports = {createFareMultiplier};
  
  function fareDoubler(fare){
        return fare * 2;
    }
  module.exports={fareDoubler};

  function fareTripler(fare){
    return fare*3;
  }module.exports={fareTripler};

  function selectDifferentDrivers( drivers){
    return drivers.slice(0,2);
  }
  function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
  }
  function selectDifferentDrivers(drivers){
    return drivers.slice(-2);
  }
  function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
  }