Red Balls exercice
==================

Hey hello guys!

I could replicate [this](http://embed.plnkr.co/22eP0y9fgmjrkb5xcOnW/preview) but using [jQuery](http://jquery.com).
I had some setbacks, but I could fix them (finally).

Links I used for help
---------------------
[Examples of transitions (lot of examples)](http://www.the-art-of-web.com/css/css-animation/)
[As usual...](http://stackoverflow.com/questions/4979738/fire-jquery-event-on-div-change)

Why I used setTimeout() to add the active class
-----------------------------------------------
That was a very odd case, that I don't understand until now, because I added a event listener to each col container to detect if a node is added to their DOM, but the transition effect didn't worked as expected. However, when I added an "alert()" before to add the class ('jq-enter-active') the transition worked (yes, believe me, I am not kidding), but when I removed the "alert()" the transition was not made (honestly, I still without understand why).
So, as a better "workaround" for that, I decided to use a delay to add the class name, and... magically.. worked well. I think the dark side of the force has been conspiring against this test hahaha.

Ok guys, hope to hear about you soon!