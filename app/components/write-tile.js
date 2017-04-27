import Ember from 'ember';

export default Ember.Component.extend({
  model(){

  },
  actions: {
    saveBlog(){
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        content: this.get('content')
      };
      this.sendAction('saveBlog',params);
    },
    
  }
});
