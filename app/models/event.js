import DS from 'ember-data';

export default DS.Model.extend({
  name            : DS.attr('string'),
  type            : DS.attr('string'),
  date            : DS.attr('date'),
  description     : DS.attr('string')
});
