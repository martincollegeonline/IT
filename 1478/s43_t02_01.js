    /**
     * Refresh App Settings
     */
    var refreshAppSettings = function() {
        // Retrieve the local storage object
        var localStorage = window.localStorage;
        // Retrieve the font size setting from local storage
        var fontSize = localStorage.getItem("fontSize");
        // Remove all of the font setting classes from the body
        $('body').removeClass('settings-font-large');
        $('body').removeClass('settings-font-normal');
        $('body').removeClass('settings-font-small');
        // If a font size setting was returned
        if (typeof fontSize != 'undefined') {
            // Add class based on font size setting
            switch (fontSize) {    
                case 'large':
                    // Add the large font setting to the body element
                    $('body').addClass('settings-font-large');
                    
                    $('#settingsSizeLarge').attr('checked', 'checked');
                    break;
                case 'normal':
                    // Add the normal font setting to the body element
                    $('body').addClass('settings-font-normal');
                    
                    $('#settingsSizeNormal').attr('checked', 'checked');
                    break;
                case 'small':
                    // Add the small font setting to the body element
                    $('body').addClass('settings-font-small');
                    
                    $('#settingsSizeSmall').attr('checked', 'checked');
                    break;
            }
        }
    }
