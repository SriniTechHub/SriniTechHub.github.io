Ext.define('CiMA.controller.Main', {
 extend : 'Ext.app.Controller',
 config: {
stores : ['Main','CountDown'],
  models : ['Main','CountDown'],
  views : ['Main'],
  control: {
  	'list[id=list-view]':{
  		itemtap: function(button, e, eOpts){
  			console.log("control");
  		}
  	}
  }
 }
});