var apos = require('apostrophe')({
	shortName: 'seroj',
	title: 'seroj',

	// See lib/modules for basic project-level configuration of our modules
	// responsible for serving static assets, managing page templates and
	// configuring user acounts.

	bundles: [ 'apostrophe-blog' ],
	modules: {
		// 'apostrophe-blog': {},
		// 'apostrophe-blog-pages': {},
		// 'apostrophe-blog-widgets': {},
		'apostrophe-pages': {
			filters: {
		      // Grab our ancestor pages, with two levels of subpages
		      ancestors: {
		        children: {
		          depth: 2
		        }
		      },
		      // We usually want children of the current page, too
		      children: true
		    },
		    // We must list `apostrophe-blog-page` as one of the available page types
		    types: [
				{
					name: 'blogs',
					label: 'Blogs'
				},
				{
					name: 'default',
					label: 'Default'
				},
				{
					name: 'home',
					label: 'Home'
				}
      		]
    	},
		// This configures the apostrophe-assets module to push a 'site.less'
		// stylesheet
		'apostrophe-assets': {
			stylesheets: [
				{
					name: 'main'
				}
			],
            scripts: [
                // {
                    // name: 'nav'
                // },
                {
                    name: 'site'
                }
            ]
		},
  }
});
