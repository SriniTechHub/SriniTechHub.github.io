Ext.define('CiMA.store.Main', {
    extend: 'Ext.data.Store',

    config: {
        model: 'CiMA.model.Main',

        proxy: {
            type: "ajax",
            url: "data/user.json",
            reader: {
                type: 'json',
                rootProperty: "user"
            }
        },
        autoLoad: true
    }
});