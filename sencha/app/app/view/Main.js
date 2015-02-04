Ext.define('CiMA.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        layout: 'vbox',

        items: [
            {
                   xtype:'titlebar',
                   title: 'CIMA',
                   cls: 'titlebar-cls'
                   
            },
            
            {
                style: 'background:#DB0A5B',
                flex:1,
                
                layout: 'vbox',
                items:[{
                     layout: 'hbox',
                items: [{
                    cls: ['side-title'],
                     style: 'background:#F62459',
                    html:'CI<i>M</i>A',
                    flex:1
                },{
                     cls: ['side-description'],
                    html:'Chartered Institute of Management Accountants',
                    flex:3
                }]
                },{
                     
                    flex:2,
                    layout: 'hbox',
                    items:[{
                        
                         cls: ['top-container', 'tiles'],
                        flex:1,
                        
                         listeners:[ {
                                fn: function(){
                                    alert("srini");
                                },
                                event: 'tap'
                            }],
                        items:[{
                           

                             flex:3
                        },{
                            style: 'background:#16a085',
                           cls: 'tile-footer',
                            flex:1,
                            html:'MAP',
                            docked: 'bottom'
                        }]
                    },{
                         
                          cls: ['top-container', 'tiles'],
                    flex:1,
                    items:[{
                            

                             flex:3
                        },{
                            style: 'background:#8e44ad',
                           cls: 'tile-footer',
                            flex:1,
                            html:'IN PROGRESS',
                            docked: 'bottom'
                        }]
                    }]
                },{
                   
                    flex:2,
                    layout: 'hbox',

                    items:[{
                        
                         cls: ['bottom-container', 'tiles'],
                    flex:1,
                      items:[{
                           

                             flex:3
                        },{
                            style: 'background:#2980b9',
                           cls: 'tile-footer',
                            flex:1,
                            html:'OFFICE INFO',
                            docked: 'bottom'
                        }]
                    },{
                         
                         cls: ['bottom-container', 'tiles'],
                    flex:1,
                      items:[{
                            

                             flex:3
                        },{
                            style: 'background:#c0392b',
                            cls: 'tile-footer',
                            flex:1,
                            html:'WORKING HERE',
                            docked: 'bottom'
                        }]
                    }]
                },{
                    flex:1
                }]
            }
        ]
    }
});
