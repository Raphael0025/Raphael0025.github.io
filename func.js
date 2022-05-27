function highlight(id, id2){ 
    el = document.getElementById(id);
    lab = document.getElementById(id2);
    switch(id){
        case "food":
            el.src = "img/hfp.png";
            lab.style.color = "rgba(237,60,87)";
            break;
        case "hotel":
            el.src = "img/hho.png";
            lab.style.color = "rgba(237,60,87)";
            break;
        case "shop":
            el.src = "img/hshop.png";
            lab.style.color = "rgba(237,60,87)";
            break;
        case "muse":
            el.src = "img/hmuse.png";
            lab.style.color = "rgba(237,60,87)";
            break;
        case "park":
            el.src = "img/hpark.png";
            lab.style.color = "rgba(237,60,87)";
            break;
        case "land":
            el.src = "img/hland.png";
            lab.style.color = "rgba(237,60,87)";
            break;
    }
    
} 
function unhighlight(id, id2){
    el = document.getElementById(id);
    lab = document.getElementById(id2);
    switch(id){
        case "food":
            el.src = "img/fp.png";
            lab.style.color = "green";
            break;
        case "hotel":
            el.src = "img/ho.png";
            lab.style.color = "green";
            break;
        case "shop":
            el.src = "img/shop.png";
            lab.style.color = "green";
            break;
        case "muse":
            el.src = "img/muse.png";
            lab.style.color = "green";

            break;
        case "park":
            el.src = "img/park.png";
            lab.style.color = "green";
            break;
        case "land":
            el.src = "img/land.png";
            lab.style.color = "green";
            break;
    }
} 
function getMessage(){
    alert("Message has been sent to the office.")
}