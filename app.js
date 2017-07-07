var apos = require('apostrophe')({
	shortName: 'seroj',
	title: 'Seroj\'s Brain Stash',

	// See lib/modules for basic project-level configuration of our modules
	// responsible for serving static assets, managing page templates and
	// configuring user acounts.

	bundles: [ 'apostrophe-blog' ],
	modules: {
	    'apostrophe-templates': { viewsFolderFallback: __dirname + '/views' },

		'apostrophe-blog': {},
		'apostrophe-blog-pages': {},
		'apostrophe-blog-widgets': {},

		// This configures the apostrophe-assets module to push a 'site.less'
		// stylesheet
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
  }
});
