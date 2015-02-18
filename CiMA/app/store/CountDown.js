Ext.define('CiMA.store.CountDown', {
    extend: 'Ext.data.Store',
requires:['CiMA.model.CountDown'],
    config: {
        model: 'CiMA.model.CountDown',

        proxy: {
            type: 'rest',
            url: "data/COUNTDOWN.json",
            reader: {
                type: 'json',
                rootProperty: "countdown"
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