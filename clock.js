const date=new Date
var x=date.getHours()
var y=date.getMinutes()
var z=date.getSeconds()+1
document.getElementsByClassName('str')[0].innerText=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
setInterval(() => {
    document.getElementsByClassName('str')[0].innerText=`${x}:${y}:${z}`
    z=z+1
    if (z==60){
        z=0
        y=y+1
        if (y==60){
            y=0
            x=x+1
            if(x==24)
                x=0
        }
    }
}, 1000);

