function eventFire(el, etype)
{
    if (el.fireEvent)
    {
        el.fireEvent('on' + etype);
    } else 
    {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}
function SendMessage(msg) 
{
    var oldHTML = "";
    var test = document.getElementsByClassName("_1awRl copyable-text selectable-text");
    if(test && test.length > 0) 
    {
        for(var x = 0; x < test.length; x++)
        {
            oldHTML = test[x].innerHTML;
            test[x].innerHTML = msg;
            eventFire(test[x], 'click');
            eventFire(test[x], 'input');
            eventFire(test[x], 'textInput');
            const ke = new KeyboardEvent("keydown", 
            {
                bubbles: true, cancelable: false, keyCode: 13
            });
            test[x].dispatchEvent(ke);
            
            test[x].innerHTML = oldHTML;
            eventFire(test[x], 'click');
            eventFire(test[x], 'input');
            eventFire(test[x], 'textInput');
        }
    }
}
function loop(num)
{
    for (var i = 0; i < num; i++) 
    {
        SendMessage("TESTE | *BOT DO LUCAS*");
    }
}
/*var thiago= document.getElementsByClassName("_F7Vk selectable-text invisible-space copyable-text");
function ReceiveMessage(){
    var MsgsContainer = document.getElementsByClassName("_1ays2");
    var MsgList = MsgsContainer[0].children;
    for (var i = 0; i < MsgList.length; i++ ) 
    {
    }
}*/
