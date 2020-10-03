cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-actionsheet.ActionSheet",
      "file": "plugins/cordova-plugin-actionsheet/www/ActionSheet.js",
      "pluginId": "cordova-plugin-actionsheet",
      "clobbers": [
        "window.plugins.actionsheet"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open",
        "window.open"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection",
        "navigator.network.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "cordova-plugin-spinner-dialog.SpinnerDialog",
      "file": "plugins/cordova-plugin-spinner-dialog/www/spinner.js",
      "pluginId": "cordova-plugin-spinner-dialog",
      "merges": [
        "window.plugins.spinnerDialog"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-actionsheet": "2.3.3",
    "cordova-plugin-inappbrowser": "3.2.0",
    "cordova-plugin-network-information": "2.0.2",
    "cordova-plugin-spinner-dialog": "1.3.1",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-wkwebview-engine": "1.2.1"
  };
});