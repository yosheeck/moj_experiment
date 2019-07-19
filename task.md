MOJ Digital Code Test
=====================

Intro
-----

Thank you for your interest in a developer position at the Ministry of Justice Digital Services team. As part of our recruitment process, we ask that you complete a short code test. You can do this in your own time, there is no time limit. Please submit your solution as a git repository we can access (e.g. on github).

The task
--------

You need to put together a simple web application that can produce anagrams of words from a wordlit.


-  You can find a copy of our wordlist attached
-  Non-alphanumeric characters should be considered as part of the anagram (e.g. "he's" is not an anagram of "she")
-  The application should be able to respond to a request made every second
-  Assume that the application will be hosted on heroku


Details
-------

The application should be able to receive an HTTP GET request with the requested word as the path. It should return the results as JSON.
See the example below:



    GET /crepitus
    {"crepitus":["cuprites","pictures","piecrust"]}


    GET /crepitus,paste,kinship,enlist,boaster,fresher,sinks,knits,sort
    {"crepitus":["cuprites","pictures","piecrust"],"paste":["pates","peats","septa","spate","tapes","tepas"],"kinship":["pinkish"],"enlist":["elints","inlets","listen","silent","tinsel"],"boaster":["boaters","borates","rebatos","sorbate"],"fresher":["refresh"],"sinks":["skins"],"knits":["skint","stink","tinks"],"sort":["orts","rots","stor","tors"]}


    GET /sdfwehrtgegfg
    {"sdfwehrtgegfg":[]}