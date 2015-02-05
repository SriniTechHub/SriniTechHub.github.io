Ext.define('CiMA.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [ 'Ext.Menu', 'Ext.layout.VBox','Ext.layout.HBox'],
    config: {
             layout: {
                        type: 'card'
                      },
           
            items: [
               {
                 xtype: 'container',
                 padding: '0 0 10 0',
                 scrollable : {
                
                     direction: 'vertical',
                     directionLock: true  
                  },
                 items: [  {
                                xtype: 'toolbar',
                                docked: 'top',
                                title: 'CIMA',
                                items: [
                                    {
                                        xtype: 'button',
                                        id: 'listButton',
                                        iconCls: 'list',
                                        ui: 'plain',
                                        handler: function(){
                                            if(Ext.Viewport.getMenus().left.isHidden()){
                                                Ext.Viewport.showMenu('left');
                                            }
                                            else
                                            {
                                                Ext.Viewport.hideMenu('left');
                                            }
                                        }
                                    }
                                ]
                            },
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
                        {ui: 'decline', text: 'In Progress',margin: '10 0 0 0'}

                    ]
                },{
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

        
    },
    initialize: function(){
        Ext.Viewport.setMenu(this.createMenu(),{
            side: 'left',
            reveal: true
        });
    },
       createMenu: function(){
        var menu = Ext.create('Ext.Menu', {
            width: 250,
            scrollable: 'vertical',
            items: [
                {
                    xtype: 'button',
                    text: 'Option 1',
                    handler: function(){
                        Ext.Viewport.hideMenu('left');
                    }
                },
                {
                    xtype: 'button',
                    text: 'Option 2',
                    handler: function(){
                         Ext.Viewport.hideMenu('left');
                    }
                }
            ]
        });
        return menu;
    }
});
