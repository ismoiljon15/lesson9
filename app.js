// console.log("JS started");

// let num = 5.345678
    



// // Math.round(num) yaxlitlash
// console.log( Math.round(num) )


// // Math.floor - pastga yaxlitlaydi
// console.log( Math.floor( 4.99 ) );


// // Math.ceil - tepaga yaxlitlaydi
// console.log( Math.ceil( 4.1 ) );


// // Math.sqrt - sonning ildizini topish
// console.log( Math.sqrt(40) );


// // Math.pow - sonning darajasi
// console.log( Math.pow(5, 3));

// // Math.abs - doim musbat son qaytadi
// console.log( Math.abs(-55));



// // Math.random - 0 dan 1 gacha tasodifiy son qaytadi
// let tasodifiySon = Math.random() * 10
// let butunSon = Math.floor(tasodifiySon)

// console.log(butunSon);



// const won = document.querySelector(".won")
// // Omad qanday ishlaydi
// let raqamlar = ["+99833 743 07 13","+99893 192 18 85", "+99891 178 91 97", "+99833 077 52 62", "+99833 171 12 12", "+99891 178 91 61", "+99891 343 06 68"]


// let tSon = Math.random() * raqamlar.length
// let bSon = Math.floor(tSon)

// console.log( raqamlar [bSon]);


// won.innerHTML = `${raqamlar[bSon]} ushbu raqam egasi G'olib bo'ldi`




const btn = document.querySelector(".btn")
const h3 = document.querySelector(".h3")

h3.innerHTML = "Barca    Real     Psg"



btn.innerHTML = "random",addEventListener('click', (event)=>{
       event.preventDefault()
       
    
       barcaCount++
       realCount++
       psgCount++
})


let = footballClubs = ["Real", "Barcelona", "PSG"]

let barcaCount = 0;
let realCount = 0;
let psgCount = 0;




btn.addEventListener('click', ()=>{
    let tClub = footballClubs[Math.floor(Math.random() * footballClubs.length)]

    if( tClub === "Real"){
        realCount++
    }else if( tClub === "Barcelona"){
        barcaCount++
    }else if( tClub === "PSG"){
        psgCount++
    }
    console.log(tClub);
    
    console.log("Real", realCount);
    console.log("Barcelona", barcaCount);
    console.log("PSG", psgCount);
})


















































