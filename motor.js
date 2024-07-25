                          // botao atualizar

let vg = document.querySelector("#VG")
let sp = document.querySelector("#SP")
let qg = document.querySelector("#QG")
let vb = document.querySelector("#VB")
let cs = document.querySelector("#CS")
let fr = document.querySelector("#FR")
let tt = document.querySelector("#TT")
let butao = document.querySelector("#BT")





let valordabarra = (valorbarra,spread,quantidadedagrama) => {
    let result = valorbarra.value*((spread.value/100)+1)*quantidadedagrama.value

   

    return result
}

 frete = (frete) => {
    fre = frete.value*1

    return fre
 }

butao.addEventListener("click", function() {

    vb.innerText = `R$ ${(valordabarra(vg,sp,qg)).toFixed(2)}`
    cs.innerText = `R$ ${((valordabarra(vg,sp,qg))*.02).toFixed(2)}`
    tt.innerText = `${((frete(fr))+(valordabarra(vg,sp,qg))*1.02).toFixed(2)}`
    console.log(fr.value)
    console.log(vg.value,vb)
    
})


 


   