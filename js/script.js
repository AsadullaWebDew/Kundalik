
// Arra ochish uchun funksiya

let allJamiMalumotlar = []
let aditAlle = -1
// Add funksiya bosganda ishlaydigan funksiya !!

function AddClick(){
    let OqtuvchiIsmi = document.getElementById("Oqtuvchi-ismi").value;
    let Fanlar = document.getElementById("Fanlar").value;
    let sinfi = document.getElementById("o'quvchi-snfi").value;
    let oquvchiIsmi = document.getElementById("Oquvchi-ismi").value;
    let bahosi =document.getElementById("baho").value;
    let sinfBelgisi = document.getElementById("sinf-bilgisi").value;

    // Add ni bosgandan song Input larni tozalab beradi !
    document.getElementById("Oqtuvchi-ismi").value = "";
    document.getElementById("Fanlar").value = "";
    document.getElementById("o'quvchi-snfi").value = "";
    document.getElementById("Oquvchi-ismi").value = "";
    document.getElementById("baho").value = "";
    document.getElementById("sinf-bilgisi").value = "";

    // console.log(OqtuvchiIsmi);
    // console.log(oquvchiIsmi);
    // console.log(Fanlar);
    // console.log(sinf);
    // console.log(baho);

    let MalumotSartirovka = {
        oqituvchi: OqtuvchiIsmi,
        fan: Fanlar,
        sinf: sinfi,
        belgi: sinfBelgisi,
        bola: oquvchiIsmi,
        baho: bahosi
    }

    if(aditAlle >= 0){
        allJamiMalumotlar[aditAlle] = MalumotSartirovka;
        aditAlle = -1
    } else{
        allJamiMalumotlar.push(MalumotSartirovka)
    }

    // allJamiMalumotlar.push(MalumotSartirovka);
    console.log(allJamiMalumotlar)
    tdCard()
}

document.getElementById("add").innerHTML = "Add"


// Carta chizish uchun Fuksiya !

function tdCard(){
    let cardPc = ""

    for(let i = 0; i<allJamiMalumotlar.length; i++){
        cardPc+=`
            <tr>
            <th>${i+1}</th>
            <th>${allJamiMalumotlar[i].oqituvchi}</th>
            <th>${allJamiMalumotlar[i].fan}</th>
            <th>${allJamiMalumotlar[i].sinf} - ${allJamiMalumotlar[i].belgi}</th>
            <th>${allJamiMalumotlar[i].bola}</th>
            <th>${allJamiMalumotlar[i].baho}</th>
            <th><button class="btn btn-info " onclick="editAll(${i})"><i class="fa-solid fa-pen"></i></button>
            <button class="btn btn-danger " onclick="Del(${i})"><i class="fa-solid fa-trash-can"></i></button></th>
            </tr>
        `
    }
    document.getElementById("result").innerHTML = cardPc;

}


// Edit qilish uchun funksiya tuzish !
function editAll(indeks){
    document.getElementById("Oqtuvchi-ismi").value = allJamiMalumotlar[indeks].oqituvchi;
    document.getElementById("Fanlar").value = allJamiMalumotlar[indeks].fan;
    document.getElementById("o'quvchi-snfi").value = allJamiMalumotlar[indeks].sinf;
    document.getElementById("Oquvchi-ismi").value = allJamiMalumotlar[indeks].bola;
    document.getElementById("baho").value = allJamiMalumotlar[indeks].baho;

    aditAlle = indeks

    document.getElementById("add").innerHTML = "Save"

}

// O'chirish uchu funksiya !

function Del(index){
    allJamiMalumotlar.splice(index,1);
    tdCard();
}

