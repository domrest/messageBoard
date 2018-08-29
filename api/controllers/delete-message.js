/**
 * MessaggesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  friendlyName: 'Delete Message',

  description: 'Deleting a message',


  exits: {

    redirect: {
      description: 'Deleted the Message.',
      extendedDescription: 'After logging out from a web browser, the user is redirected away.',
      responseType: 'redirect'
    }

  },

  fn: async function(exits){

    await Messaging.destroy({id:this.req.path.substring(8)});
    await Messaging.destroy({parent:this.req.path.substring(8)});

    return this.res.redirect("/");

  }



};
