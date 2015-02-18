Ext.define('CiMA.store.Main', {
    extend: 'Ext.data.Store',

    config: {
        model: 'CiMA.model.Main',

        proxy: {
            type: 'rest',
            url: "http://demoeappstech.uk/CIMA/rest/v1/static_content",
            reader: {
                type: 'json',
                rootProperty: "static_content"
            },
            noCache: true,
        limitParam: undefined,
        pageParam: undefined,
        startParam: undefined
        },
        autoLoad: true,
        autoSync: true
    }
});