function mouseTrapBindings() {
    Mousetrap.bind('g', function() { window.open("https://github.com", "_self"); });
    Mousetrap.bind("?", function() { console.log('show shortcuts!'); });
    Mousetrap.bind('esc', function() { console.log('escape'); }, 'keyup');

};