var fluid_1_4=fluid_1_4||{};(function($,fluid){fluid.defaults("fluid.tabs",{gradeNames:["fluid.viewComponent","autoInit"],tabOptions:{},events:{tabsselect:"preventable",tabsload:null,tabsshow:null},finalInitFunction:"fluid.tabs.finalInit"});fluid.tabs.finalInit=function(that){that.container.tabs(that.options.tabOptions);fluid.each(that.options.events,function(value,eventName){that.container.bind(eventName,function(event,ui){return that.events[eventName].fire(that,event,ui)})})}})(jQuery,fluid_1_4);