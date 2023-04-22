function clock()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes() ;
    var ss=date.getSeconds();
    var day=date.getDay();
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
           hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    var fullTime=`${hh}:${mm} ${am_pm}`
    document.getElementById("time").innerHTML=fullTime
    if(mo==0)
    {
        mo="jan"
    }
    else if(mo==1)
    {
        mo="feb"
    }
    else if(mo==2)
    {
        mo="mar"
    }
    else if(mo==3)
    {
        mo="apr"
    }
    else if(mo==4)
    {
        mo="may"
    }
    else if(mo==5)
    {
        mo="jun"
    }
    else if(mo==6)
    {
        mo="jul"
    }
    else if(mo==7)
    {
        mo="aug"
    }
    else if(mo==8)
    {
        mo="sep"
    }
    else if(mo==9)
    {
        mo="oct"
    }
    else if(mo==10)
    {
        mo="nov"
    }
    else if(mo==11)
    {
        mo="dec"
    }
    var fulldate=`${dd}/${mo}/${yy}`
    document.getElementById("date").innerHTML=fulldate
    switch(day)
    {
            case 0:
            day="Sunday"
            document.body.style.backgroundImage="URL(sun.jpg)"
            break;
            case 1:
            day="monday"
            document.body.style.backgroundImage="url(mon.webp)"
            break;
            case 2:
            day="Tuesday"
            document.body.style.backgroundImage="url(tue.webp)"
            break;
            case 3:
            day="wednesday"
            document.body.style.backgroundImage="url(wed.jpg)"
            break;
            case 4:
            day="Thursday"
            document.body.style.backgroundImage="url(thurs.jpg)"
            break;
            case 5:
            day="Friday"
            document.body.style.backgroundImage="url(fri.jpg)"
            break;
            case 6:
            day="Saturday"
            document.body.style.backgroundImage="url(sat.webp)"
            break;
    }
    document.getElementById("day").innerHTML=day;
    document.getElementById("sec").innerHTML=ss;
    var updateTheTime=setTimeout(clock,1000)
}
function greet()
{
        var date=new Date();
        var hh=date.getHours();
   if (hh>=6 && hh<=12) 
   {
    document.getElementById("GreetMessage").innerHTML="Good morning!"
    document.getElementById("bgvid").src= "MORNING.mp4"
   } 
   else if (hh>12 && hh<=16) 
   {
     document.getElementById("GreetMessage").innerHTML="Good Afternoon!"
   document.getElementById("bgvid").src = "Afternoon.mp4"
   document.getElementById("bgvid").style.width = "100%"
   document.getElementById("bgvid").style.bottom = "-100%"
   } 
   else if (hh>16 && hh<=20) 
   {
    document.getElementById("GreetMessage").innerHTML="Good Evening"
    document.getElementById("bgvid").src = "Evening.mp4"
    document.getElementById("bgvid").style.width = "100%"
   document.getElementById("bgvid").style.bottom = "-100%"
   }
   else 
   {
    document.getElementById("GreetMessage").innerHTML="Good Night!"
    document.getElementById("bgvid").src = "Night.mp4"
    document.getElementById("bgvid").style.width = "100%"
   document.getElementById("bgvid").style.bottom = "-100%"
   }
}
Greeting()
   function closewind()
   {
    document.getElementById("Greet").style.display = "none"
   }
   var a=setTimeout(closewind,5000);