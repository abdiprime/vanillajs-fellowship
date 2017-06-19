console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Aragorn',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;  

var makeMiddleEarth = function(lands) {
   // create a section tag with an id of `middle-earth`
  var section =  document.createElement('section')
   section.id = 'middleEarth'

 	 // add each land as an `article` tag
   for(i = 0; i < lands.length; ++i){
	var article = document.createElement('article')
   	var h1 = document.createElement('h1')
    article.appendChild(h1);
    h1.innerHTML = [i];	
   	section.append(article)
}






var lands = 

  	 // loop through each land, add the text of the land, and append to the page
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`
   body.append(section)
};

makeMiddleEarth(lands);



var makeHobbits = function () {
	var ul = document.createElement('ul')
	for(i = 0; i < hobbits.length; i++){
		var li = document.createElement('li')
		li.className = 'hobbit'
		li.innerHTML = hobbits[i]
		ul.appendChild(li)

	}
	var shire = document.getElementsByTagName('article')[0]
	shire.appendChild(ul)
}

makeHobbits()

// display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`


var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   var div = document.createElement('div')
  div.id = 'theRing'
  div.className = 'magic-imbued-jewelry'
  var Frodo = document.getElementsByTagName('li')[0]
  Frodo.appendChild(div)
   // give the div a class of `'magic-imbued-jewelry'
}

keepItSecretKeepItSafe()


var makeBuddies = function () {
	var aside = document.createElement('aside')
	var ul = document.createElement('ul')
	aside.appendChild(ul)
	var rivendell = document.getElementsByTagName('article')[1]
	rivendell.appendChild(aside)
	for(i = 0; i < buddies.length; i++){
		var li = document.createElement('li')
		ul.appendChild(li)
		li.innerHTML = buddies[i];
	}
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
}
makeBuddies()

var leaveTheShire = function () {
	// Hobbies<List<String>> result = new ArrayList<List<String>>();
	// rivendell.appendChild(hobbit)

   // assemble the `hobbits` and move them to `rivendell`
};


var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party

var div = document.createElement('div')
	div.id= 'the-fellowship'
	var rivendell = document.getElementsByTagName('article')[1]
	rivendell.appendChild(div)
	var ul = document.createElement('ul')
var hobbitsAndBuddies = document.querySelectorAll('li')
console.log(hobbitsAndBuddies.length)
	for(i = 0; i < hobbitsAndBuddies.length; i++){
		ul.appendChild(hobbitsAndBuddies[i])
	}
  	
  	div.appendChild(ul)
};

forgeTheFellowShip()

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
	var list = document.getElementsByTagName('ul')[2];
	list.getElementsByTagName('li')[4].innerHTML = "Gandalf the White"
	list.getElementsByTagName('li')[4].style.backgroundColor = "white"
	list.getElementsByTagName('li')[4].style.border = "thick solid grey"	
};

theBalrog()



var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship

	alert('The horn of gondor has been blown')
	var list = document.getElementsByTagName('ul')[2];
	 var Boromir = document.getElementsByTagName('li')[8] 
	list.removeChild(Boromir)
		
	


};

hornOfGondor()




var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`

var Frodo = document.getElementsByTagName('li')[0]
var Sam = document.getElementsByTagName('li')[1]
var Mordor = document.getElementsByTagName('article')[2]
var ul = document.createElement('ul')
	ul.appendChild(Sam)
	ul.appendChild(Frodo)
Mordor.appendChild(ul)
var div = document.createElement('div')
div.id = "mount-doom"

};

itsDangerousToGoAlone()



var thereAndBackAgain = function(){
var list = document.getElementsByTagName('ul')[2];
var shire = document.getElementsByTagName('article')[0]
var hobbits = document.getElementsByTagName('li')
	for(i = 0; i < hobbits; i++){
		shire.append(hobbits[i])
	}



theRing.remove('li')

}

thereAndBackAgain()
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`



