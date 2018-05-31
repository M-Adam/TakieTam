const poziomPow99 = false;
var toParse = $('div.expbar').attr('onmouseover');
var level =parseInt(toParse.substr(toParse.indexOf('POZIOM ') + 'POZIOM '.length, poziomPow99 ? 3 : 2));

$('span.expedition-invite-list-entry').each(function(i,j){
    var checkbox = $($(j).children()[0]);
    var levelToInvite = parseInt($($($(j).children()[1]).children()[0]).children()[0].textContent);
    if(levelToInvite <= level){
        checkbox.prop('checked', true);
    }else{
        checkbox.prop('checked', false);
    } 
});
