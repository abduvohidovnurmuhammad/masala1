// let kilo = prompt("nech kilo olasiz kiriiting")
// let konfet = 7999.99
// document.write(kilo*konfet)

// --------------- 2-masala ---------------
  // let kvadrat = prompt("son kiriting kv aniqlaymiz")
  // document.write(kvadrat*kvadrat)

// --------------- case-1 ---------------
// let hafta = prompt("hafta kunini son bilan kiriting")
//   if(hafta==1){
//     document.write("dushanba")
//   }
//   if(hafta==2){
//     document.write("seyshanba")
//   }
//   if(hafta==3){
//     document.write("chorshanba")
//   }
//   if(hafta==4){
//     document.write("payshanba")
//   }
//   if(hafta==5){
//     document.write("juma")
//   }
//   if(hafta==6){
//     document.write("shanba")
//   }
//   if(hafta==7){
//     document.write("yakshanba")
//   }
//   if(hafta>=8 || hafta <= 0){
//     document.write("birdan yettigacha bo'lgan raqam kiriting")
//   }

// --------------case-2-----------------------
// let baho = prompt("balni kiriting")
//   if(baho==1){
//     document.write("yomon")
//   }
//   if(baho==2){
//     document.write("qoniqarsiz")
//   }
//   if(baho==3){
//     document.write("qoniqarli")
//   }
//   if(baho==4){
//     document.write("yaxshi")
//   }
//   if(baho==5){
//     document.write("a'lo")
//   }

//   if(baho>=6 || baho <= 0){
//     document.write("birdan beshgacha bo'lgan balni kiriting")
//   } 
//            -------case3-------------
  let oy =prompt("fasl kere")
  if(oy==12 || oy==1 || oy==2) {
    document.write(oy + " " + "chi oy, Qish");
  }
  if(oy==3 || oy==4 || oy==5) {
    document.write(oy + " " + "chi oy, Bahor");
  }
  if(oy==6 || oy==7 || oy==8) {
    document.write(oy + " " + "chi oy, Yoz");
  }
  if(oy==9 || oy==10 || oy==11) {
    document.write(oy + " " + "chi oy, kuz");
  }
  if (oy >= 13 || oy <= 0) {
    document.write("1 dan 12 gacha bolgan son kiriting");
  }

