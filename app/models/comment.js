import DS from 'ember-data';

export default DS.Model.extend({
    statement: DS.attr(),
    user: DS.attr(),
    blog: DS.belongsTo('blog', { async: true })
});
