var apos = require('apostrophe')({
	shortName: 'seroj',
	title: 'Seroj\'s Brain Stash',

	bundles: [ 'apostrophe-blog' ],
	modules: {
	    'apostrophe-templates': { viewsFolderFallback: __dirname + '/views' },
		'apostrophe-blog': {},
		'apostrophe-blog-pages': {},
		'apostrophe-blog-widgets': {},
		'apostrophe-assets': {
			stylesheets: [
				{
					name: 'main'
				}
			],
            scripts: [
                {
                    name: 'site'
                }
            ]
		},

        'apostrophe-helpers': {}
  }
});
