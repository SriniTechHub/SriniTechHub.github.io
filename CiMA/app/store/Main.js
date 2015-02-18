Ext.define('CiMA.store.Main', {
    extend: 'Ext.data.Store',

    config: {
        model: 'CiMA.model.Main',

        proxy: {
            type: 'rest',
            url: "data/static_content.json",
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