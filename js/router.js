SilverTick.Router.map(function () {
  this.resource('todos', { path: '/' }, function () {
      this.route('active');
      this.route('completed');
  });
});

SilverTick.TodosRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('todo');
  }
});

SilverTick.TodosIndexRoute = Ember.Route.extend({
    model: function(){
       return this.modelFor("todos");
   }
});

SilverTick.TodosActiveRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function(todo) {
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});

SilverTick.TodosCompletedRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('todo', function(todo) {
      return todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});