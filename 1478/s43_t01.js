    /**
     * Update Add Settings
     */
    var updateAppSettings = function() {
        // Show the udpating settings message
        $('.msg-settings-updating').show();
        // Retrieve the local storage object
        var localStorage = window.localStorage;
        // Retrieve the selected font size
        var selectedSize = $("input[name='settingsSize']:checked").val();
        // Set the font size variable
        localStorage.setItem("fontSize", selectedSize);
        // Refresh app settings using new stored settings
        refreshAppSettings();
        // Hide the udpating settings message
        $('.msg-settings-updating').hide();
    };
