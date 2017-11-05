


example = "[{lunchLocation: 'Olive Garden', lunchId: 45, creator: 'jen',attendees: ['jen','larry']}]"



// Takes in an JSON array with lunch instance objects and returns a slack format message

function lunchBuilder(objectString) {
  let lunchArray = eval(objectString);
  let attachments = [];
    for (var i = 0; i < lunchArray.length; i++) {
      let intObject = lunchArray[i];
      let people = intObject["attendees"].join(",");
      let restaurantName = intObject['lunchLocation'];
      let text = people + " are going to " + restaurantName
      attachments.push( {
          "text": text,
          "fallback": "Shame... buttons aren't supported in this land",
          "callback_id": "lunch",
          "color": "#3AA3E3",
          "attachment_type": "default",
          "actions": [
              {
                  "name": "RSVP",
                  "text": "RSVP",
                  "type": "button",
                  "value": intObject["lunchId"]
              }
          ]
      } )
    }

    return attachments
  }
