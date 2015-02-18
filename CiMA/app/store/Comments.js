Ext.define('CiMA.store.Comments', {
    extend: 'Ext.data.Store',

    config: {
        model: 'CiMA.model.Comments',

        proxy: {
            type: 'rest',
            url: "data/COMMENTS.json",
            reader: {
                type: 'json',
                rootProperty: "comments"
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