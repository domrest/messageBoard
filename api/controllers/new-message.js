/**
 * MessaggesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  friendlyName: 'Message',

  description: 'adding a message',

  inputs: {

    message: {
      type: 'string',
      required: true
    },
    user: {

      type: 'string',
      default: 'Anonymous'


    },

    parent: {

      type: 'string',

    },

  },

  exits:{
    redirect: {
      description: 'Added new Message',
      extendedDescription: 'Only Logged-in users can view and post on the board."',
      responseType: 'redirect',
    }

  },

  fn: async function(inputs, exits){

    var message = inputs.message;
    var user = inputs.user;
    sails.log(message);
    var time = Date.now();

    var parent = inputs.parent;
    if (parent){
      await Messaging.create({
        time: time,
        parent: parent,
        message: message,
        user: user
      });

    }
    else {
      await Messaging.create({
        time: time,
        parent: 'root',
        message: message,
        user: user
      });
    }
    return exits.redirect("/");

  }



};
