// palantir interview 2 code

// This is the text editor interface. 
// Anything you type or change here will be seen by the other person in real time.

// took a trip, started in city A -> B ->... -> X
// No cycles 
// Unordered collection of airline tickets
Ticket
    - departureCity (String)
    - arrivalCity (String)
    
    
    
// Example
    // actual trip: A -> B -> C -> D -> B -> E
    // [T(b,c), T(a,b), T(d,b), T(c,d), T(b,e)] 
    
    
// linked list
// nodes are cities
// edges are trips, given by tickets

var cityB = {
    arrivedFrom: cityA,
    departedTo: cityC
}

var Tickets = [];

var Cities = {};

Tickets.forEach(function(ticket){
    if (!Cities[ticket.departureCity]) {
        Cities[ticket.departureCity] = {
            city: ticket.departureCity
        };
    }
    if (!Cities[ticket.arrivalCity]) {
        Cities[ticket.arrivalCity] = {
            city: ticket.arrivalCity
        };
    }
});


Tickets.forEach(function(ticket){
    Cities[ticket.departedCity].departedTo = ticket.arrivalCity;
    Cities[ticket.arrivalCity].arrivedFrom = ticket.departedCity;
});


var start = Cities[Tickets[0].arrivedFrom];
while (start.arrivalCity) {
    start = start.arrivalCity;
}


// So start is what we want


var findNthCity = function(n) {
    var nthCity = start;
    for (var i=0; i<n; ++i) {
        nthCity = Cities[nthCity.departedTo];
    }
    return nthCity.city;
}








