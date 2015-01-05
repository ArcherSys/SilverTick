window.SilverTick = Ember.Application.create();
SilverTick.ApplicationSerializer = DS.LSSerializer.extend();
SilverTick.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'silvertick-emberjs'
});
window.SilverTick.ApplicationAdapter = DS.FixtureAdapter.extend();

