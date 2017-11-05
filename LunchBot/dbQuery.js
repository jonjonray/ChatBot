const helpers = require('./helpers');

// Load schema
const Lunch = require('./models/lunch-model');

function dbQuery(ID, command, text = null){

    return User.findOne({id: ID}).then(function(result) {

        const lunches = helpers.user(ID, result);

        return {
            response_type: 'ephemeral',
            attachments: [
                {
                    title: "Lunches",
                    text: (lunches.length ? helpers.view(user.list) : 'Your todo list is empty! :cry: \nAdd something by typing `/todo add <message>`'),
                    mrkdwn_in: ['text'],
                    callback_id: 'command',
                    actions: [
                        {
                            name: 'complete',
                            text: 'COMPLETE AN ITEM',
                            type: 'select',
                            value: 'complete',
                            style: 'primary',
                            options: helpers.display(user.list)
                        },
                        {
                            name: 'delete',
                            text: 'DELETE AN ITEM',
                            type: 'select',
                            value: 'delete',
                            style: 'danger',
                            options: helpers.display(user.list)
                        }]
                }
            ]
        };
    });
}


module.exports = dbQuery;
