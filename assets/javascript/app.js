// Made by Lummit | https://obnoxious.club/ | https://github.com/Lumm1t/ | Discord: Lummit#0201
// Credits to expl0it, shellcode.team

var _app = function ()
{
    this.id = 0;
    this.videoElement = null;
    this.audioElement = null;
    this.musicVolume = 0.2;
    this.musicFadeIn = 4000;
    this.skippedIntro = false;
    this.backgroundToggler = false;
    this.shouldIgnoreVideo = false;
    this.effects = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello"];
    this.brandDescription = [
        "Toxic.solutions By JohnG", 
        "Best Cheats/Tools/Stressers/Spoofers", 
        "Quality Cheats", 
        "Strong DDOS", 
        "Best Devs", 
		"JohnG#6666",
    ];

    this.titleChanger = function (text, delay)
    {
        text = text ||
            ['Toxic.solutions', 'JohnG', 'Toxic.solutions', 'Song name: Travis Scott - goosebumps (Official Music Video) ft. Kendrick Lamar'];
        delay = delay || 2000;

        var counter = 0;

        setInterval(function () {
            if(counter < text.length) 
                document.title = text[counter++]; 
            else 
                document.title = text[counter = 0];
        }, delay);
    }

    // It's future, dear pasters.

    this.iconChanger = function (urls, delay)
    {
        if (!urls)
            return;

        delay = delay || 2000;

        var counter = 0;
        
        setInterval(function () {
            if(counter < urls.length) 
            {
                var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                link.type = 'image/x-icon';
                link.rel = 'shortcut icon';
                link.href = urls[counter];
                document.getElementsByTagName('head')[0].appendChild(link);
            }
            else 
                counter = 0;

           ++counter;
        }, delay);
    }
};

var app = new _app();
