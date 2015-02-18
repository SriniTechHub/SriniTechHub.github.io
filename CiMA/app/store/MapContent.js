Ext.define('CiMA.store.MapContent', {
    extend: 'Ext.data.Store',

    config: {
        model: 'CiMA.model.MapContent',

        proxy: {
            type: 'rest',
            url: "data/MAP_CONTENTS.json",
            reader: {
                type: 'json',
                rootProperty: "mapcontent"
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