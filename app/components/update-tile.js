import Ember from 'ember';

export default Ember.Component.extend({
  updateShows: false,
  actions: {
    updatePost(){
    this.set('updateShows',true);
  },
  update(blog) {
    var params = {
      title: this.get('edit_title'),
      date: this.get('edit_date'),
      content: this.get('edit_content'),
    };
    this.set('updateShows', false);
    this.sendAction('update', blog, params);
  },
  delete(blog){
    this.sendAction('deleteBlog', blog);
  }
}
});
