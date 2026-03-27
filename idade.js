function verificar(){
    let data=new Date()
    let ano=data.getFullYear()
    let fano=document.getElementById('ano')
    let res=document.querySelector('div#res')
    if (fano.value.length==0||Number(fano.value)>ano){
        window.alert('[ERRO ]Verifique e tente novamente')
    }else{
        let fsex=document.getElementsByName('radsex')
    }
}
