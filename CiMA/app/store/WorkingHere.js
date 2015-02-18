Ext.define('CiMA.store.WorkingHere', {
    extend: 'Ext.data.Store',

    config: {
        model: 'CiMA.model.WorkingHere',

        proxy: {
            type: 'rest',
            url: "data/WORKING_HERE.json",
            reader: {
                type: 'json',
                rootProperty: "workinghere"
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