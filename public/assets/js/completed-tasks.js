;(function($) {
  function CompletedTasks(){};

  CompletedTasks.prototype = {
    config: {
      current: '.current-tasks.item',
      currentBtn: '.current-tasks button',
      completed: '.completed-tasks.item',
      completedBtn: '.completed-tasks button'
    },

    completeTask: function(){
      var self =  this;
      $(this.config.currentBtn).on('click', function(){
        var $item = $(this).parent().find(self.config.current),
        var $text = $item.text(),
        var $idx = $item.data("idx");
        localStorage.setItem('item_' + $idx, $text);
      });
    },
    removeAll: function(){},
    persist: function(){},
    init: function(){},
  };

var completedTasks = new CompletedTasks();
completedTasks.init();

}(jQuery));
