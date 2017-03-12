'use strict';

angular.module('gsApp.version', [
  'gsApp.version.interpolate-filter',
  'gsApp.version.version-directive'
])

.value('version', '0.1');
