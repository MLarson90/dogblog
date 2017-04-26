import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
     var params = {
       user: this.get('user'),
       statement: this.get('statement'),
       blog: this.get('blog')
     };
     this.set('addNewComment', false);
     this.sendAction('saveComment', params);
   }
  }
});
