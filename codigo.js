// contador  de like y no like con premedio
let btninc = document.getElementById('btninc');
let btndec = document.getElementById('btndec');
let like = 0;
let unlike=0;
let clike = document.getElementById('clike');
let cnlike = document.getElementById('cnlike');


function adlike(){
    like++;
    clike.innerHTML =like;
}

btninc.addEventListener('click', adlike);

function dclike(){

    unlike++;
    cnlike.innerHTML = unlike;
}
btndec.addEventListener('click', dclike);
