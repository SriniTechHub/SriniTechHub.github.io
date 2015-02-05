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
                        margin: '10 10 0 0'},
                        {ui: 'decline', text: 'In Progress',margin: '10 0 0 0',  handler: function(){
                            var view = Ext.getCmp('nav-view');
                            view.push({
                                title: 'In Progress',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'list',
                                        id:'list-view',
                                        store: 'Main',
                                        itemTpl: ['<p>{name}</p>'],
                                        flex:1,
                                        onItemDisclosure: true,
                                        handler: function(){
                                           console.log("srini");
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
                        margin: '10 10 0 0'},
                        {ui: 'decline', text: 'Working Here',margin: '10 0 0 0'}

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
                        margin: '10 10 0 0'},
                        {ui: 'decline', text: 'Dolar Site',margin: '10 0 0 0'}

                    ]
                }]
            }
           
         ]   
    }
});
