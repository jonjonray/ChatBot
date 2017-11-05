const mongoose = require('mongoose');
// Load schema
//const User = require('./models/user-list');

// function createLunch(lunch_id, result) {
//   if (result === null) {
//     const newLunch = new User({
//       id: lunch_id
//     });
//     newUser.save();
//     console.log('Added a new lunch into collection');
//     return newLunch;
//   }
//   else {
//     return result;
//   }
// }

// Protect bot token ID
require('dotenv').config('private.env');
const tokenID = process.env.tokenID;


// confirms validity of slack bot token received from user
function validate(token){
    return token === tokenID;
}

// //for displaying text in dropdown
// function droptext(lunch){
//     let display = [];
//
//     lunch.forEach(function(el, index){
//
//         display[index] = {
//             text: el.location, ///lunch location
//             value: el.number
//         };
//
//     });
//
//     return display;
// }


function view(lunch) {

  let outputString = "```";
  lunch.forEach((el) => {
    if (el.open) {
      outputString += `${el.location}\t\t${el.attendees}\t\n`;
    }
  });
  return outputString + '```';
}


module.exports = {
  //createLunch: createLunch, //user
  validate: validate,
  view: view,
  // droptext: droptext


};
