/*
Build all of your functions for displaying and gathering information below (GUI).
*/

<<<<<<< HEAD
//calculate age from DOB

// app is the function called to start the entire application
=======
// app is the function called to start the entire application








>>>>>>> abd4c7114449c531ba1135393a8f1e2794c3d047
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
		searchByName(people);
		break;
    case 'no':
		searchByTraits(people);
		break;
    default:
    alert("Wrong! Please try again, following the instructions dummy. :)");
    app(people); // restart app
    break;
  }
}

function searchByTraits(people) {
  let userSearchChoice = prompt("What would you like to search by? 'height', 'weight', 'eye color', 'gender', 'age', 'occupation'.");
  let filteredPeople = [];
  switch(userSearchChoice) {
    case "height":
      filteredPeople = searchByHeight(people);
      break;
    case "weight":
      filteredPeople = searchByWeight(people);
      break;
    case "eye color":
      filteredPeople = searchByEyeColor(people);
      break;
    case "gender":
      filteredPeople = searchByGender(people);
      break;
    case "age":
      filteredPeople = searchByAge(people);
      break;
    case "occupation":
      filteredPeople = searchByOccupation(people);
      break;
    default:
      alert("You entered an invalid search type! Please try again.");
      searchByTraits(people);
      break;
  }  

if (filteredPeople.length > 1)
{
  displayPeople(filteredPeople);

}

else{
  let foundPerson = filteredPeople[0];

  mainMenu(foundPerson, people);
}

// function displayPeople(people){
//   alert(people.map(function(person){return person.firstName + " " + person.lastName;}).join("\n"));
//   let searchType = promptFor("Do you see the person your looking for?",yesNo).toLowerCase();
//   switch (searchType)
//   {search}

//   }
// }

function searchByWeight(people) {
  let userInputWeight = prompt("How much does the person weight?");         //Iam using this function for testing how to list multiple results
 let newArray = people.filter(function (el) {
    if(el.weight == userInputWeight) {
      return true;
    }
    // return true if el.height matches userInputHeight
  });
  return newArray;
}


function searchByHeight(people) {
  let userInputHeight = prompt("What is the person's height?");

  let newArray = people.filter(function (el) {
    if(el.height == userInputHeight) {
      return true;
    }
    // return true if el.height matches userInputHeight
  });
  
  return newArray;
}
function searchByOccupation(people) {
  let userInputOccupation = prompt("What is the person's occupation?");

  let newArray = people.filter(function (el) {
    if(el.occupation == userInputOccupation) {
      return true;
    }
    // return true if el.height matches userInputHeight
  });
  
  return newArray;
}
function searchByEyeColor(people) {
  let userInputEyeColor = prompt("What is the person's eye color?");           // SHOULD all these functions be combined into one since they all do nearly the same thing. 

  let newArray = people.filter(function (el) {
    if(el.eyeColor == userInputEyeColor) {
      return true;
    }
});

 
}

function searchByGender(people) {
  let userInputGender = prompt("What is the person's gender?");

  let newArray = people.filter(function (el) {
    if(el.gender == userInputGender) {
      return true;
    }
    // return true if el.height matches userInputHeight
  });
  
  return newArray;
}

function searchByAge(people) {
  let userInputAge = prompt("What is the person's age?");

  let newArray = people.filter(function (el) {
    if(el.age == userInputAge) {
      return true;
    }
    // return true if el.height matches userInputHeight
  });
  return newArray;
}


// Menu function to call once you find who you are looking for
function mainMenu(person, people){
  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
  switch(displayOption){
    case "info":
		displayPerson(person);

    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}


function searchByName(people){

var userFirstName = promptFor("What is the person's first name?", chars);
var userLastName = promptFor("What is the person's last name?", chars);
  // TO DO: find the person using the name they entered
	
	let newArray = people.filter(function (el){
		if ((el.firstName == userFirstName) && (el.lastName == userLastName)) {
			return true;
		}
		//could be typed lowercase/no results found
	});
}


// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}
// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){return person.firstName + " " + person.lastName;}).join("\n"));
<<<<<<< HEAD
 switch(searchType){
    case 'yes':
    searchByName(people)
    break;
    case 'no':
    searchByTraits(people);
    break;
    default:
    alert("Wrong! Please try again, following the instructions dummy. :)");
    app(people); // restart app
    break;

  }
=======
  promptFor("Do you see the person your looking for?",yesNo).toLowerCase();

>>>>>>> 6feb2994c9134fc3d4bb4e8eedb2fe961a6f56e4
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
