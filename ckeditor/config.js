/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.extraPlugins = 'embed';
	// config.extraPlugins = 'embedbase';
	// config.extraPlugins = 'widget';
	// config.extraPlugins = 'lineutils';
	//config.extraPlugins = 'notificationaggregator';
	// config.extraPlugins = 'notification';
	config.embed_provider = 'https://iframe.ly/api/oembed?url={url}&api_key=7e7dbbb40534dbb686e7af&callback={callback}';
 
};
