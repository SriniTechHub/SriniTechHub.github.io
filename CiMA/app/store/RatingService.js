Ext.define('CiMA.store.RatingService', {
    extend: 'Ext.data.Store',

    config: {
        model: 'CiMA.model.RatingService',

        proxy: {
            type: 'rest',
            url: "data/RATING_SERVICE.json",
            reader: {
                type: 'json',
                rootProperty: "ratingservice"
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