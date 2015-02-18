Ext.define('CiMA.store.LocationService', {
    extend: 'Ext.data.Store',

    config: {
        model: 'CiMA.model.LocationService',

        proxy: {
            type: 'rest',
            url: "data/LOCATION_SERVICE.json",
            reader: {
                type: 'json',
                rootProperty: "locationservice"
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