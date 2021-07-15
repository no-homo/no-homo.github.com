// haha der code ist ur nice bin stolz

var finds = 0;

var durability = {
    "stone": 3,
    "iron": 4,
    "gold": 2,
    "redstone": 3,
    "diamond": 5
};

function blockhtml(sidelen) {
    // hässlich aber schneller weg für weighted random
    var type = ["stone","stone","stone","stone","stone","stone","stone","stone","iron","iron","redstone","gold","diamond","stone"][Math.floor(Math.random() * 14)]
    return `<div class="block" data-dur="`+durability[type]+`" style="height: `+sidelen+`px; width: `+sidelen+`px; background-image: url('`+type+`.png');"><div class="breakol" data-state="0"></div></div>`
}

function setblocks() {
    var canv = document.getElementById("blockcanvas");
    var wlen = 20;
    var sidelen = window.innerWidth / wlen;
    var hlen = Math.ceil(window.innerHeight / sidelen);

    var spacehtml = '<div class="blockspace" onclick="mine(this)"></div>';
    var chesthtml = '<div class="chest" onclick="open(this)"></div>'
    var chests = 3;
    // generate blockspace
    for (let i = 0; i < wlen; i++) {
        canv.innerHTML += `
        <div class="block-row">
        ` +
        spacehtml.repeat(hlen)
        + `
        </div>`
    }
    // scatter blocks
    canv.childNodes.forEach(row => {
        row.childNodes.forEach(space => {
            space.innerHTML += blockhtml(sidelen);
        });
    });
    // hide chests
    for (let i = 0; i < chests; i++) {
        var x = Math.floor(Math.random() * wlen);
        var y = Math.floor(Math.random() * hlen);
        console.log(x,y);
        var targ = canv.querySelectorAll(".block-row")[x].querySelectorAll(".blockspace")[y];
        if (targ.querySelectorAll(".chest").length > 0) {
            i--;
        } else {
            targ.innerHTML += chesthtml;
        }
    }
}

function mine(blockspace) {
    var block = blockspace.querySelector(".block");
    console.log("getting mined", block.dataset.dur);
    console.log(block.childNodes)
    var breakol = block.childNodes[0];
    block.dataset.dur -= 1;
    breakol.style.backgroundImage = 'url("destroy_stage_'+block.dataset.dur+'.png")';
    if (block.dataset.dur == 0) {
        blockspace.onclick = function() { open(this); };
        block.style.background = "none";
        block.style.zIndex = "-10";
        breakol.style.display = "none";
    }
}

function open(blockspace) {
    var chest = blockspace.querySelector(".chest");
    console.log(chest);
    if (chest!=null) {
        finds++;
        document.getElementById("counter").innerHTML = finds + " / 3";
        blockspace.onclick = null;
        if (finds==3) {
            document.getElementById("letter").style.display = "flex";
        }
        chest.style.backgroundImage = 'url("map.png")';
        chest.style.backgroundSize = '70%';
        chest.style.backgroundPosition = 'center';
        chest.style.backgroundRepeat = 'no-repeat';
    }
}

setblocks()