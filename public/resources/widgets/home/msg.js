var messageList = [ 'lorem ipsum i want to buy a car',
'You will never be mod',
'Nothing beats a <code>gentle poop</code>',
'Updated <code>index.html</code>',
'this site isnt even 2MB',
'coded on a best buy kiosk macbook',
'pocket lint ahh hair',
'This is a text',
'i keep giving bad people good ideas',
'mao',
'must be a pibby glitch',
'putting the X (formerly Twitter) in xtreme',
'find me in the freezer aisle',
'floor flammable when hot',
'the wright brothers made airplane mode',
'jobs near me that pay trillion/hour',
'"I Know youre reading this wiichicken"',
'isnt it nice to have a computer',
'TV explodes in 30 seconds if not powered off',
'I have an angry bird',
'My grandma just discovered iOS 10',
'OH_AND_YOURE_A_BABY',
'can we get a "woot woot"',
'scrobbled fortnite\'s radio once',
'the reason schools block archive.org',
'uses win + ctrl + alt + shift + l',
'anti-anti-aliasing',
'bring back parallax',
'End of slide show, click to exit',
'enrolled in Temu University',
'taking AP Walking next semester',
'Woodpecker is the best BBC2 ident',
'i like to move it move it',
'StreetPass me sometime!',
'refunded Undertale and OMORI',
'your lion is waiting you',
'they should make instagram 2',
'get telnet trauma, dummy',
'awwww, you drew a kitty!',
'Invent a hammer w/ a hammer inside!',
'i crave violence and logo redesigns',
'<span style="animation: rainbow 1s linear infinite;">Merry Christmas Xbox</span>',
'just wait until youre in hummus',
'oh goody goody',
'is EURO the lastest gen z trend?',
'i love posting on X about shows on MAX',
'this really gets my goat, bahhh',
'pizza > homework',
'netflix and kill',
'guacamole gaming',
'what if imoji were real',
'ur finger is bleeding',
'wth is a framework',
'oo oo, temu temu'
]
function setRandomMessage() {
  document.getElementById('messageTxt').innerHTML = messageList[Math.floor(Math.random() * messageList.length)];
}
setRandomMessage();