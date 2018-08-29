/**
 * MessagesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {

  /**
   * `MessagesController.msg()`
   */
  friendlyName: 'View Messages',


  description: 'Display all messages on site.',


  exits: {
    success: {
      viewTemplatePath: 'pages/message-board',

    },
  },
    fn: async function (inputs, exits) {

      //db.Messages.find().toArray(console.log);
      var messages = await Messaging.find({parent:'root'});
      sails.log(messages);
      var children = await Messaging.find({parent: {'!=' : 'root'}})
      sails.log(children);
      return exits.success({msg:messages, child:children});

    },

};
