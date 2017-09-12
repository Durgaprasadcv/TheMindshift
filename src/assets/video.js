var videoObject = (function() { 
return{
    init: function() {
        $(document).ready(function()
		{
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