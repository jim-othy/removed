function closeall() {
    document.getElementById("newsp").style.color = "rgba(255, 255, 255, 0.35)"
    document.getElementById("webp").style.color = "rgba(255, 255, 255, 0.35)"
    document.getElementById("netp").style.color = "rgba(255, 255, 255, 0.35)"
    document.getElementById("codep").style.color = "rgba(255, 255, 255, 0.35)"
    document.getElementById("textp").style.color = "rgba(255, 255, 255, 0.35)"
    document.getElementById("discp").style.color = "rgba(255, 255, 255, 0.35)"
    document.getElementById("fraudp").style.color = "rgba(255, 255, 255, 0.35)"
    document.getElementById("miscp").style.color = "rgba(255, 255, 255, 0.35)"
    document.getElementById("news").hidden = true;
    document.getElementById("web").hidden = true;
    document.getElementById("net").hidden = true;
    document.getElementById("code").hidden = true;
    document.getElementById("text").hidden = true;
    document.getElementById("fraud").hidden = true;
    document.getElementById("disc").hidden = true;
    document.getElementById("misc").hidden = true;
}


function news() {
    closeall()
    document.getElementById("news").hidden = false;
    document.getElementById("newsp").style.color = "white";
    document.getElementById("newsContainer").style.overflow = "hidden";
    document.getElementById("newsContainer").innerHTML = '<iframe style="height: 100%; width: 100%;" id="newsHTML" src="./Tools/news.html"></iframe>';
}

function webtools() {
    closeall()
    document.getElementById("web").hidden = false;
    document.getElementById("webp").style.color = "white";
    document.getElementById("webContainer").style.overflow = "hidden";
    document.getElementById("webContainer").innerHTML = '<iframe style="height: 100%; width: 100%;" id="webHTML" src="./Tools/website.html"></iframe>';
}

function nettools() {
    closeall()
    document.getElementById("net").hidden = false;
    document.getElementById("netp").style.color = "white";
}

function codetools() {
    closeall()
    document.getElementById("code").hidden = false;
    document.getElementById("codep").style.color = "white";
}

function texttools() {
    closeall()
    document.getElementById("text").hidden = false;
    document.getElementById("textp").style.color = "white";
}

function fraudtools() {
    closeall()
    document.getElementById("fraud").hidden = false;
    document.getElementById("fraudp").style.color = "white";
}

function disctools() {
    closeall()
    document.getElementById("disc").hidden = false;
    document.getElementById("discp").style.color = "white";
}

function misctools() {
    closeall()
    document.getElementById("misc").hidden = false;
    document.getElementById("miscp").style.color = "white";
}

news();