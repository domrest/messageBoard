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



  fn: async function(inputs){
    if(res.method==="DELETE"){
      sails.log("hi");
    }

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
    return this.req.redirect("/");

  }



};
