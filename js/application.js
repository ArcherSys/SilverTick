window.SilverTick = Ember.Application.create();

SilverTick.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'silvertick-emberjs'
});
window.SilverTick.ApplicationAdapter = DS.FixtureAdapter.extend();

