var userid='ZGVtbw==';var affid='6228';var topCount = 1;var  winClose = 0;var topTime = 0;topTime = "-1";var topOK800x600 = false;
var topURL800x600='http://film-sensual.com?='+userid+'&affid='+affid;
var topWidth800x600=2000;
var topHeight800x600=1800;
var topName800x600="TopEuroAds800x600";
var topMaxCounter = 100;
var topInt = false;
var topRefTime = 240000;

function topsetTracker800x600(topURL800x600,topWin800x600)
{
try{
if ((topWin800x600) && (!topWin800x600.closed)) {topWin800x600.location.href = topURL800x600;}
} catch(e){}
}

function topsetRefresh800x600(topURL800x600,topWin800x600)
{
try{
if ((!topWin800x600) || (topWin800x600.closed)) {topOK800x600=false;topOpen800x600(topURL800x600);}
} catch(e){}
}

function topsetOpen800x600(topURL800x600,topWin800x600)
{
try{
if ((!topWin800x600) || (topWin800x600.closed)) {topOK800x600=false;}
} catch(e){}
}

function topOpen800x600(topURL800x600)
{
if (topMaxCounter < 1) {return true;}
{
if (topOK800x600 == true ) {return true;}
}
var winX = (document.all)?window.screenLeft:window.screenX;
var winY = (document.all)?window.screenTop:window.screenY;
topWin800x600 = window.open(topURL800x600, topName800x600, 'toolbar=no,status=no,resizable=yes,scrollbars=1,menubar=no,location=no,width='+topWidth800x600+',height='+topHeight800x600+'left='+winX+',top='+winY);
try{
if (topWin800x600) 
{
topWin800x600.blur();
if (topInt) clearInterval(topInt);
topInt = setInterval("topsetTracker800x600(topURL800x600,topWin800x600);",topRefTime);
topMaxCounter = topMaxCounter - 1;
topOK800x600 = true;
topWin800x600.blur();
return topWin800x600;
}
else return false;
} catch(e){}
}

function topsetCookie800x600(name, value, time)
{
var now = new Date();
now.setTime(now.getTime()+ time);
if (time > 0) document.cookie = name + '=' + value + '; expires=' + now.toGMTString();
else  document.cookie = name + '=' + value + ';';
}

function topgetCookie800x600(name)
{
var cookies = document.cookie.toString().split('; ');
var cookie, c_name, c_value;
for (var n=0; n<cookies.length; n++)
{
 cookie  = cookies[n].split('=');
 c_name  = cookie[0];
 c_value = cookie[1];
 if ( c_name == name ) {return c_value;}
}
return null;
}

function topInstall800x600()
{
if (parent)
 {
  try
   {
    if (parent.document.attachEvent){parent.document.attachEvent('onclick',topStart800x600);}
    else if (parent.document.addEventListener){parent.document.addEventListener('click',topStart800x600,false);}
   }
  catch(e)
   {
    if (document.attachEvent){document.attachEvent('onclick',topStart800x600);}
    else if (document.addEventListener){document.addEventListener('click',topStart800x600,false);}
   }
 }
else
 {
 if (document.attachEvent){document.attachEvent('onclick',topStart800x600);}
 else if (document.addEventListener){document.addEventListener('click',topStart800x600,false);}
 }
}

function topStart800x600(e)
{
if (topCount > "1") topCount = topCount - 1;
else
if (!topgetCookie800x600(topName800x600))
{
var e = e || window.event;
var topWin800x600 = topOpen800x600(topURL800x600);
if ((topWin800x600) && (topTime !== "-1")) topsetCookie800x600(topName800x600, 1, topTime);
}
}


if (winClose == 0)
{
aaa=topOpen800x600(topURL800x600);
      if (aaa) {setInterval("topsetRefresh800x600(topURL800x600,topWin800x600);",5000);}
      else {setInterval("topsetOpen800x600(topURL800x600,topWin800x600);",1000);}}
topInstall800x600();
