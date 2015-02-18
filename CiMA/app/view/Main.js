Ext.define('CiMA.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    requires: ['Ext.dataview.List'],
    
    config: {
         id: 'nav-view',
         fullscreen: true,
         items:[
            {
                title: 'CiMA',
            layout: 'vbox',
            scrollable: true,
                    title: '<div style="text-align:center;"><img src="resources/css/imgs/CIMA_header.png" width="124" height="30" alt="Company Name"></div>',

             items: [
              {
                    xtype: 'container',
                    padding: '0 10 0 10',
                    cls:'grid1',
                     layout:{
                        type: 'hbox',
                        align: 'middle'
                    },
                    defaults: {
                        xtype: 'button',
                        flex: 1,
                       
                        cls:'tile'
                    },
                    items: [
                        {ui: 'decline', text: 'Map',
                        margin: '10 10 0 0',
                        handler: function(){
                             Ext.StoreMgr.get('MapContent').load();
                            var view = Ext.getCmp('nav-view');
                             view.push({
                                title: 'Map',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'list',
                                        id:'map-list',
                                        store: 'MapContent',
                                        itemTpl: ['<p class="{content_name}" >{content_title}</p>'],
                                        flex:1,
                                        onItemDisclosure: true,
                                         listeners:{
                                            itemtap: function(index, target, record, e, eOpts){
                                                   var view = Ext.getCmp('nav-view');
                                                
                                                    if(e.data.content_name == "LOCATION SERVICE"){

                                                        Ext.StoreMgr.get('LocationService').load();
                                                     view.push({
                                                            title: "LOCATION SERVICE",
                                                            layout: 'vbox',
                                                            items: [
                                                                    {
                                                                        xtype: 'list',
                                                                        store: 'LocationService',
                                                                        itemTpl: ['<p class="{content_name}">{content_title}</p>'],
                                                                        flex:1,
                                                                        onItemDisclosure: true
                                                                    }]
                                                        }); 
                                                        
                                        
                                                    }
                                              else if(e.data.content_name == "COMMENTS"){
                                                Ext.StoreMgr.get('Comments').load();
                                                 view.push({
                                                            title: "COMMENTS",
                                                            margin: 20,
                                                            scrollable: true,
                                                            items: [
                                                                    {
                                                                        xtype: 'list',
                                                                        store: 'Comments',
                                                                        itemTpl: ['<p class="{content_name}" >{content_title}</p>'],
                                                                        flex:1,
                                                                        onItemDisclosure: true
                                                                    }]
                                                        }); 

                                              }
                                               else if(e.data.content_name == "RATING SERVICE"){
                                                Ext.StoreMgr.get('RatingService').load();
                                                 view.push({
                                                            title: "RATING SERVICE",
                                                            margin: 20,
                                                            scrollable: true,
                                                            items: [
                                                                    {
                                                                        xtype: 'list',
                                                                        store: 'RatingService',
                                                                        itemTpl: ['<p class="{content_name}" >{content_title}</p>'],
                                                                        flex:1,
                                                                        onItemDisclosure: true
                                                                    }]
                                                        }); 

                                              }
                                              else if(e.data.content_name == "REVIEW"){
                                                Ext.StoreMgr.get('Review').load();
                                                 view.push({
                                                            title: "REVIEW",
                                                            margin: 20,
                                                            scrollable: true,
                                                            items: [
                                                                    {
                                                                        xtype: 'list',
                                                                        store: 'Review',
                                                                        itemTpl: ['<p class="{content_name}" >{content_title}</p>'],
                                                                        flex:1,
                                                                        onItemDisclosure: true
                                                                    }]
                                                        }); 

                                              }
                                               
                                            }
                                         
                                        }
                                    }]

                            });
                        }},
                        {ui: 'decline', text: 'In Progress',margin: '10 0 0 0',  handler: function(){
                            Ext.StoreMgr.get('Main').load();
                            var view = Ext.getCmp('nav-view');
                            view.push({
                                title: 'In Progress',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'list',
                                        id:'list-view',
                                        store: 'Main',
                                        itemTpl: ['<p class="{content_name}" >{content_title}</p>'],
                                        flex:1,
                                        onItemDisclosure: true,
                                        listeners:{
                                            itemtap: function(index, target, record, e, eOpts){
                                                   var view = Ext.getCmp('nav-view');
                                                
                                                    if(e.data.content_name == "DAYONE"){

                                                        var des = e.data.content_description;
                                                             view.push({
                                                            title: e.data.content_title,
                                                            margin: 20,
                                                            scrollable: true,

                                                            html: e.data.content_description
                                                        }); 
                                        
                                                    }
                                              else if(e.data.content_name == "COUNTDOWN"){
                                                    Ext.StoreMgr.get('CountDown').load();
                                                view.push({
                                                    title: "Countdown",
                                                     layout: {
                                                        type: 'fit'
                                                    },
                                                    items:[{
                                                        xtype:'list',
                                                         layout: {
                                                        type: 'fit'
                                                    },
                                                    cls: 'count-down',
                                                        store: 'CountDown',
                                                         itemTpl: ['<div>{countdown} Days more</div>']

                                                    }]
                                                });

                                              }
                                               
                                            }
                                         
                                        }
                                      
                                    }
                                ]
                            });
                        }
                    }

                    ]
                },
                {
                    xtype: 'container',
                    padding: '0 10 0 10',
                    cls:'grid2',
                     layout:{
                        type: 'hbox',
                        align: 'middle'
                    },
                    defaults: {
                        xtype: 'button',
                        flex: 1,
                       
                        
                        
                        cls:'tile'
                    },
                    items: [
                        {ui: 'decline', text: 'Office Info',
                        margin: '10 10 0 0',
                        handler: function(){
                            Ext.StoreMgr.get('OfficeInfo').load();
                            var view = Ext.getCmp('nav-view');
                             view.push({
                                title: 'Office Info',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'list',
                                        id:'office-list',
                                        store: 'OfficeInfo',
                                        itemTpl: ['<p class="{content_name}" >{content_title}</p>'],
                                        flex:1,
                                        onItemDisclosure: true
                                    }]

                            });
                        }
                    },
                        {ui: 'decline', text: 'Working Here',margin: '10 0 0 0',
                        handler: function(){
                            Ext.StoreMgr.get('WorkingHere').load();
                            var view = Ext.getCmp('nav-view');
                             view.push({
                                title: 'Working Here',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'list',
                                        id:'working-list',
                                        store: 'WorkingHere',
                                        itemTpl: ['<p class="{content_name}" >{content_title}</p>'],
                                        flex:1,
                                        onItemDisclosure: true
                                    }]

                            });
                        }}

                    ]
                },
                 {
                    xtype: 'container',
                    cls:'grid3',
                    padding: '0 10 10 10',
                     layout:{
                        type: 'hbox',
                        align: 'middle'
                    },
                    defaults: {
                        xtype: 'button',
                        flex: 1,
                        cls:'tile'
                    },
                    items: [
                        {ui: 'decline', text: 'Lorem',
                        margin: '10 10 0 0',
                        handler: function(){
                            alert("Lorem");
                        }},
                        {ui: 'decline', text: 'Dolar Site',margin: '10 0 0 0',
                        handler: function(){
                            alert("Dolar Site");
                        }}

                    ]
                }]
            }
           
         ]   
    }
});
