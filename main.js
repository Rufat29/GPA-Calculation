// GENERAL
function semacil() {
    document.querySelector(".ilk").style.display = "none";
    document.querySelector(".semestr").style.display = "block";
    document.querySelector(".umumi").style.display = "none";
}

function umumacil() {
    document.querySelector(".ilk").style.display = "none";
    document.querySelector(".umumi").style.display = "block";
    document.querySelector(".semestr").style.display = "none";
}

// INPUT QUANTITY
function deyis() {
    var say = document.getElementById("fensayi").value;


    if (say == 4) {
        document.getElementById("fen4").style.display = "table-row";
        document.getElementById("fen5").style.display = "none";
        document.getElementById("fen6").style.display = "none";
        document.getElementById("fen7").style.display = "none";
        document.getElementById("fen8").style.display = "none";

    } else if (say == 5) {
        document.getElementById("fen5").style.display = "table-row";
        document.getElementById("fen4").style.display = "table-row";
        document.getElementById("fen6").style.display = "none";
        document.getElementById("fen7").style.display = "none";
        document.getElementById("fen8").style.display = "none";

    } else if (say == 6) {
        document.getElementById("fen4").style.display = "table-row";
        document.getElementById("fen5").style.display = "table-row";
        document.getElementById("fen6").style.display = "table-row";
        document.getElementById("fen7").style.display = "none";
        document.getElementById("fen8").style.display = "none";


    } else if (say == 7) {
        document.getElementById("fen4").style.display = "table-row";
        document.getElementById("fen5").style.display = "table-row";
        document.getElementById("fen6").style.display = "table-row";
        document.getElementById("fen7").style.display = "table-row";
        document.getElementById("fen8").style.display = "none";
    } else if (say == 8) {
        document.getElementById("fen4").style.display = "table-row";
        document.getElementById("fen5").style.display = "table-row";
        document.getElementById("fen6").style.display = "table-row";
        document.getElementById("fen7").style.display = "table-row";
        document.getElementById("fen8").style.display = "table-row";
    } else {
        document.getElementById("fen4").style.display = "none";
        document.getElementById("fen5").style.display = "none";
        document.getElementById("fen6").style.display = "none";
        document.getElementById("fen7").style.display = "none";
        document.getElementById("fen8").style.display = "none";
    }
}

// VALIDATION
var el = document.getElementsByClassName('enterScore');
for (var i = 0; i < el.length; i++) {
    el[i].oninput = function () {
        if (this.value > 100) {
            this.value = 100;
        }
    };
}
var el1 = document.getElementsByClassName('enterCredit');
for (var i = 0; i < el1.length; i++) {
    el1[i].onchange = function () {
        if (this.value < 2) {
            this.value = 2;
        }
        else if (this.value > 7) {
            this.value = 7;
        }
        else {
            this.value = this.value;
        }
    };
}

var el2 = document.getElementsByClassName('enterTotal');
for (var i = 0; i < el2.length; i++) {
    el2[i].oninput = function () {
        if (this.value > 100) {
            this.value = 100;
        }
    };
}
var el3 = document.getElementsByClassName('enterTotalCred');
for (var i = 0; i < el3.length; i++) {
    el3[i].onchange = function () {
        if (this.value < 20) {
            this.value = 20;
        }
        else if (this.value > 40) {
            this.value = 40;
        }
        else {
            this.value = this.value;
        }
    };
}

// CALCULATION
function hesabla() {
    var b1 = document.getElementById("bal-1").value;
    var b2 = document.getElementById("bal-2").value;
    var b3 = document.getElementById("bal-3").value;
    var b4 = document.getElementById("bal-4").value;
    var b5 = document.getElementById("bal-5").value;
    var b6 = document.getElementById("bal-6").value;
    var b7 = document.getElementById("bal-7").value;
    var b8 = document.getElementById("bal-8").value;
    var k1 = document.getElementById("kredit-1").value;
    var k2 = document.getElementById("kredit-2").value;
    var k3 = document.getElementById("kredit-3").value;
    var k4 = document.getElementById("kredit-4").value;
    var k5 = document.getElementById("kredit-5").value;
    var k6 = document.getElementById("kredit-6").value;
    var k7 = document.getElementById("kredit-7").value;
    var k8 = document.getElementById("kredit-8").value;


    var deger;
    deger = ((Number(b1) * Number(k1) + Number(b2) * Number(k2) + Number(b3) * Number(k3) + Number(b4) * Number(k4) + Number(b5) * Number(k5) + Number(b6) * Number(k6) + Number(b7) * Number(k7) + Number(b8) * Number(k8)) /
        (Number(k1) + Number(k2) + Number(k3) + Number(k4) + Number(k5) + Number(k6) + Number(k7) + Number(k8))).toFixed(2);
    document.getElementById("cavab").value = deger;
}

// INPUT QUANTITY
function deyis2() {
    var say = document.getElementById("semsayi").value;


    if (say == 3) {
        document.getElementById("sem3").style.display = "table-row";
        document.getElementById("sem4").style.display = "none";
        document.getElementById("sem5").style.display = "none";
        document.getElementById("sem6").style.display = "none";
        document.getElementById("sem7").style.display = "none";
        document.getElementById("sem8").style.display = "none";

    } else if (say == 4) {
        document.getElementById("sem3").style.display = "table-row";
        document.getElementById("sem4").style.display = "table-row";
        document.getElementById("sem5").style.display = "none";
        document.getElementById("sem6").style.display = "none";
        document.getElementById("sem7").style.display = "none";
        document.getElementById("sem8").style.display = "none";
    } else if (say == 5) {
        document.getElementById("sem3").style.display = "table-row";
        document.getElementById("sem4").style.display = "table-row";
        document.getElementById("sem5").style.display = "table-row";
        document.getElementById("sem6").style.display = "none";
        document.getElementById("sem7").style.display = "none";
        document.getElementById("sem8").style.display = "none";

    } else if (say == 6) {
        document.getElementById("sem3").style.display = "table-row";
        document.getElementById("sem4").style.display = "table-row";
        document.getElementById("sem5").style.display = "table-row";
        document.getElementById("sem6").style.display = "table-row";
        document.getElementById("sem7").style.display = "none";
        document.getElementById("sem8").style.display = "none";


    } else if (say == 7) {
        document.getElementById("sem3").style.display = "table-row";
        document.getElementById("sem4").style.display = "table-row";
        document.getElementById("sem5").style.display = "table-row";
        document.getElementById("sem6").style.display = "table-row";
        document.getElementById("sem7").style.display = "table-row";
        document.getElementById("sem8").style.display = "none";
    } else if (say == 8) {
        document.getElementById("sem3").style.display = "table-row";
        document.getElementById("sem4").style.display = "table-row";
        document.getElementById("sem5").style.display = "table-row";
        document.getElementById("sem6").style.display = "table-row";
        document.getElementById("sem7").style.display = "table-row";
        document.getElementById("sem8").style.display = "table-row";
    } else {
        document.getElementById("sem3").style.display = "none";
        document.getElementById("sem4").style.display = "none";
        document.getElementById("sem5").style.display = "none";
        document.getElementById("sem6").style.display = "none";
        document.getElementById("sem7").style.display = "none";
        document.getElementById("sem8").style.display = "none";
    }
}

// CALCULATION
function umhesabla() {
    var b1 = document.getElementById("umbal-1").value;
    var b2 = document.getElementById("umbal-2").value;
    var b3 = document.getElementById("umbal-3").value;
    var b4 = document.getElementById("umbal-4").value;
    var b5 = document.getElementById("umbal-5").value;
    var b6 = document.getElementById("umbal-6").value;
    var b7 = document.getElementById("umbal-7").value;
    var b8 = document.getElementById("umbal-8").value;
    var k1 = document.getElementById("umkredit-1").value;
    var k2 = document.getElementById("umkredit-2").value;
    var k3 = document.getElementById("umkredit-3").value;
    var k4 = document.getElementById("umkredit-4").value;
    var k5 = document.getElementById("umkredit-5").value;
    var k6 = document.getElementById("umkredit-6").value;
    var k7 = document.getElementById("umkredit-7").value;
    var k8 = document.getElementById("umkredit-8").value;


    var deger;
    deger = ((Number(b1) * Number(k1) + Number(b2) * Number(k2) + Number(b3) * Number(k3) + Number(b4) * Number(k4) + Number(b5) * Number(k5) + Number(b6) * Number(k6) + Number(b7) * Number(k7) + Number(b8) * Number(k8)) /
        (Number(k1) + Number(k2) + Number(k3) + Number(k4) + Number(k5) + Number(k6) + Number(k7) + Number(k8))).toFixed(2);
    document.getElementById("umcavab").value = deger;
}

// BACK TO HOME
function geri() {
    document.querySelector(".ilk").style.display = "block";
    document.querySelector(".umumi").style.display = "none";
    document.querySelector(".semestr").style.display = "none";
}

// SIDENAV
$('#toggler-button').click(function () {
    $('.side').css('transform', 'translateX(0px)');
});
$('#toggler-button2').click(function () {
    $('.side').css('transform', 'translateX(0px)');
});
$('#close-sidenav').click(function () {
    $('.side').css('transform', 'translateX(-100%)');
});

// PRELOADER
var load = document.getElementById('preloader');
setTimeout(function loadfun() {
    load.style.display = "none";
}, 1000);