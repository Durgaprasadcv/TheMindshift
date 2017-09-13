var videoObject = (function() { 
return{
    init: function() {
        $(document).ready(function()
		{
            $ ('#button_id').click();
             window.plugins.orientationLock.lock("landscape");
             var elem = document.getElementById("singleVideo");
             if (elem.requestFullscreen) {
             elem.requestFullscreen();
            }
    });
}
}
}
)(videoObject||{})