import data from './data.json'

function getUsersBy (userData) {

    switch (userData) {
        case "firstNames": 
            getFirstNames();
            break;
        
        case "lastNames":
            getLastNames ();
            break; 

        case  "fullInfo":
            getFullInfo ();
            break;
    }
}

function getFirstNames () {
    data.users.filter ( function (item) {
        console.log (item.firstName)
    });
}

function getLastNames () {
    data.users.filter ( function (item) {
        console.log (item.lastName)
    });
}

function getFullInfo () {
    data.users.filter ( function (item) {
        let result = `${item.firstName} ${item.lastName}: ${item.dateOfBirth}, ${item.knowsAs}`
        console.log (result)
    });
}

// getUsersBy('firstNames')
// getUsersBy('lastNames')
getUsersBy ('fullInfo')

//node --experimental-json-modules main.mjs