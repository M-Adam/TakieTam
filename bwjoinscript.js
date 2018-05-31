// Here You can type your custom JavaScript...
var toParse = $('div.expbar').attr('onmouseover');
var level =parseInt(toParse.substr(toParse.indexOf('POZIOM ') + 'POZIOM '.length, 2));

var checkboxes = $('span.expedition-invite-list-entry').each(function(i,j){
    var checkbox = $(j).children()[0];
    var levelToInvite = parseInt($($($(j).children()[1]).children()[0]).children()[0].textContent);
    if(levelToInvite <= level){
        $(checkbox).prop('checked', true);
    }
    else{
        $(checkbox).prop('checked', false);
    }
    
});
