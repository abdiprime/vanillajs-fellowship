    makeMiddleEarth: function(lands){

     document.createElement('section').setAttribute('id','middle-earth');
     for (var i = 0; i<fellowship.lands.length; i++){
         var article = document.createElement('article');
         document.querySelector('#middle-earth').appendChild(article);
         var h1 = document.createElement('h1');
         h1.textContent = fellowship.lands[i];
         article.appendChild(h1);
       }
    }		    }
    makeHobbits: function(hobbits){

     var target = document.querySelector('#middle-earth').firstChild.nextSibling;
     var list = document.createElement('ul');
     target.appendChild(list);
     for(var i=0; i<fellowship.hobbits.length; i++){
       var item = document.createElement('li');
       item.setAttribute('class','hobbit');
       item.textContent = fellowship.hobbits[i];
       list.appendChild(item);
     }
    }		    
    keepItSecretKeepItSafe: function(){
     
     var frodo = document.querySelector('ul').firstChild;
     var ring = document.createElement('div');
     ring.setAttribute('id','the-ring');
     frodo.appendChild(ring);
 
    }		  
    makeBuddies: function(buddies){
  
     var aside = document.createElement('aside');
     var list = document.createElement('ul');
     var lands = document.querySelector('#middle-earth');
     var rivendell = document.querySelector('#middle-earth').lastChild.previousSibling;
     aside.appendChild(list);
     lands.insertBefore(aside, rivendell);
     for(var i=0; i<fellowship.buddies.length; i++){
       var item = document.createElement('li');
       item.textContent = fellowship.buddies[i];
       list.appendChild(item);
     }
    }		    
    beautifulStranger: function(){
  
     var strider = document.querySelector('aside').firstChild.lastChild.previousSibling;
     strider.innerHTML = "Aragorn";
    }
    
    forgeTheFellowShip: function(){
    
     var article = document.querySelector('#middle-earth').firstChild.nextSibling;
     var oldHobbits = document.querySelector('#middle-earth').firstChild.nextSibling.firstChild;
     var aside = document.querySelector('aside');
     var oldBuddies = document.querySelector('aside').firstChild;
     var hobbits = article.removeChild(oldHobbits);
     var buddies = aside.removeChild(oldBuddies);
     var rivendell = document.querySelector('#middle-earth').lastChild.previousSibling;
     rivendell.appendChild(hobbits);
     rivendell.appendChild(buddies);
     var theFellowship = document.createElement('div');
     for (var i=0; i<fellowship.hobbits.length; i++){
       theFellowship.textContent += fellowship.hobbits[i];
       alert(fellowship.hobbits[i]+" has joined the fellowship!");
     }
     for (var i=0; i<fellowship.buddies.length; i++){
       theFellowship.textContent += fellowship.buddies[i];
       alert(fellowship.buddies[i]+" has joined the fellowship!");
     }
 
    }	    






































