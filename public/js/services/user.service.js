'use  strict';

app.factory('User', function(DS) {
	
  /*
    create a User jsdata resource 
  */

  return DS.defineResource({
    // basePath: '/api',
    // idAttribute: '_id'
    name: 'users'
  });
}).run(function (User) {});

