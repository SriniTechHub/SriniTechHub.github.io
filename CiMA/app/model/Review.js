Ext.define('CiMA.model.Review', {
	extend:'Ext.data.Model',

	config: {
		fields: [
			{name: 'id', type: 'string'},
			{name: 'content_name', type: 'string'},
			{name: 'content_title', type: 'string'},
			{name: 'content_description', type: 'string'}
		]
	}
});