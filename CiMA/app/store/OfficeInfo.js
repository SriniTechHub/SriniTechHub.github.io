Ext.define('CiMA.store.OfficeInfo', {
    extend: 'Ext.data.Store',

    config: {
        model: 'CiMA.model.OfficeInfo',

        proxy: {
            type: 'rest',
            url: "data/OFFICE_INFO.json",
            reader: {
                type: 'json',
                rootProperty: "officeinfo"
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