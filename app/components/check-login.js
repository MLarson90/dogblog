import Ember from 'ember';

export default Ember.Component.extend({
  model(){
    return Ember.RSVP.hash({
      logins: this.store.findAll('login')
    });
  },
  correctLogin: false,
  actions: {
    checkLogin(){
      var params = {
        username: this.get('username'),
      };
      console.log(params);
      if (params.username==='4'){
        this.set('correctLogin', true);
      }

    }
  }
});
