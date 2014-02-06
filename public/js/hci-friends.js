'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

    // add additional listeners
    $("h3").click(nameClick);
}

function nameClick(e) {
    // Cancel the default action, which prevents the page from reloading
    e.preventDefault();
 
    // In an event listener, $(this) is the leement that fired the event
//    var currName = $(this).find("h3").text();   // $(this) points to the <a> tag, which is what the eventhandler is on
    var currName = $(this).text();  // changed listener to point to the direct object
    var anagName = anagrammedName(currName);

    // replaces text with the following anagName
    $(this).text(anagName);
}

function anagrammedName(name) {
	// Thanks, Internet Anagram Server!
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}
