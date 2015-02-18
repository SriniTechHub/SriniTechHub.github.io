Ext.define('CiMA.store.Review', {
    extend: 'Ext.data.Store',

    config: {
        model: 'CiMA.model.Review',

        proxy: {
            type: 'rest',
            url: "data/REVIEW.json",
            reader: {
                type: 'json',
                rootProperty: "review"
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