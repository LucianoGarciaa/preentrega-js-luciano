
    const login = () =>{
        let intentos = 3
        let identificar = true
    do{
        let usuario = prompt("como te llamas")
        let contraseña = prompt("ingrese la contraseña")
        if((usuario === null)||(contraseña === null)){
            alert("pone tu usuario")
            break
        }
        if(usuario === "juanceto01" && intentos > 0){
            alert("bienvenido "+ usuario)
            identificar = false
        }else{
            alert("no se reconoce el usuario "+ usuario)
            intentos--
            if(intentos<1){
                alert("demasiados intentos")
                break 
            }
        }
    }while(identificar === true)
    }
    login ()


    const planMensual = () =>{
        let membresia = prompt("elija un plan de 3, 6, o 12 meses")
    if(membresia !="3" && membresia !="6" && membresia !="12"){
        alert("selecciona una membresia valida")
    }if(membresia === "3"){
        alert("solo se puede pagar en 3 cuotas sin interes de $40.000")
    }if(membresia === "6"){
            let cuotas = prompt("eleji entre 3 o 6 cuotas sin interes")
        if((cuotas === "3") || (cuotas === "6")){
            if(cuotas === "3"){
                alert("serian 3 cuotas de $78.000")
            }else{
                alert("serian 6 cuotas sin interes de $38.900")
            }
        }else{
            alert("selecciona cuotas validas")
        }
    }if(membresia === "12"){
        let cuotas = prompt("eleji entre 3 o 6 cuotas sin interes")
    if((cuotas === "3") || (cuotas === "6")){
        if(cuotas === "3"){
            alert("serian 3 cuotas de $125.000")
        }else{
            alert("serian 6 cuotas sin interes de $60.000")
        }
    }else{
        alert("selecciona cuotas validas")
    }
    }
    }
    planMensual()

