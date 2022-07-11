document.querySelector("#myForm").addEventListener("submit", function (event) {
    event.preventDefault();// Paraliza el envío del formulario

    let formValidated = true; // para saber si el form es válido o no

    const respuestas = {
        bloquesDeRoca: "bulder",
        calzado: "gatos",
        imprescindible: "arnes",
        griGri: "asegurador",
        cuerda: "dinamica",
    }//respuestas correctas
    //contador
    let count = 0;
    // Comprobar respuestas y mostrar correcta
    for (let i = 0; i < 20; i++) {
        console.log(i);
        if (document.querySelectorAll("input")[i].checked === true) {
            console.log(document.querySelectorAll("input")[i].checked)
            for (var key in respuestas) {
                if (respuestas[key] === document.querySelectorAll("input")[i].value) {
                    console.log("Correcto!");
                    document.getElementsByTagName("label")[i].style.backgroundColor = "green";
                    break;
                } else {
                    console.log("Incorrecto!");
                    console.log(respuestas[key]);
                    console.log(document.querySelectorAll("input")[i].value);
                    document.getElementsByTagName("label")[i].style.backgroundColor = "Red";

                }
            }
        } else {
            count++;

        }
    }
    if (count === 20) {
        alert("Por favor seleccione alguna respuesta")
        formValidated = false;
    }



    //     if(document.querySelectorAll("input")[0].value===)
    //     document.getElementsByTagName("label")[0].style.backgroundColor = "green";

    // } else if (document.querySelectorAll("input")[0].value != correctAn && document.querySelectorAll("input")[0].checked === true) {
    //     alert("Incorrecto!");
    //     document.getElementsByTagName("label")[0].style.backgroundColor = "Red";
    // } else {
    //     alert("Incorrecto!!!!")
    //     formValidated = false;
    // }


    // if (keys[i] === document.querySelectorAll("input")[i].name) {
    //     if (document.querySelectorAll("input")[0].value === respuestas[i] && document.querySelectorAll("input")[0].checked === true) {
    //         alert("Correcto!");
    //         document.getElementsByTagName("label")[0].style.backgroundColor = "green";

    //     } else if (document.querySelectorAll("input")[0].value != correctAn && document.querySelectorAll("input")[0].checked === true) {
    //         alert("Incorrecto!");
    //         document.getElementsByTagName("label")[0].style.backgroundColor = "Red";
    //     } else {
    //         alert("Incorrecto!!!!")
    //         formValidated = false;
    //     }
    // }



    // } else if (an2 === correctAn && event.target.an2.checked === true) {
    //     alert("Correcto!");
    //     document.getElementById("lab2").style.backgroundColor = "green";

    // } else if (an2 != correctAn && event.target.an2.checked === true) {
    //     alert("Incorrecto!");
    //     document.getElementById("lab2").style.backgroundColor = "Red";

    // } else if (an3 === correctAn && event.target.an3.checked === true) {
    //     alert("Correcto!");
    //     document.getElementById("lab3").style.backgroundColor = "green";

    // } else if (an3 != correctAn && event.target.an3.checked === true) {
    //     alert("Incorrecto!");
    //     document.getElementById("lab3").style.backgroundColor = "Red";

    // } else if (an4 === correctAn && event.target.an4.checked === true) {
    //     alert("Correcto!");
    //     document.getElementById("lab4").style.backgroundColor = "green";

    // } else if (an4 != correctAn && event.target.an4.checked === true) {
    //     alert("Incorrecto!");
    //     document.getElementById("lab4").style.backgroundColor = "Red";








    // if (fname.length > 3 && fname.length <= 30) {
    //     console.log("nombre OK: " + fname);
    // }
    // else {
    //     alert("Nombre tiene que que estar entre 3 y 30");
    //     formValidated = false;
    //     // Cambios en el DOM para que se vea el error
    //     //...
    //     //...
    // }

    // /**** Validar apellidos ****/
    // if (lname.length > 3 && lname.length <= 30) {
    //     console.log("apellidos OK:" + lname);
    // }
    // else {
    //     alert("Apellidos tiene que que estar entre 3 y 30");
    //     formValidated = false;
    //     // Cambios en el DOM para que se vea el error
    //     //...
    //     //...
    // }

    // /**** Validar email ****/
    // /*
    // //Con RegExp
    //     let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     if (email.match(mailformat))
    // */

    // if (email.endsWith(".com")) {
    //     console.log("apellidos OK:" + lname);
    // } else {
    //     alert("Sólo dominio .com en mi empresa");
    //     formValidated = false;
    //     // Cambios en el DOM para que se vea el error
    //     //...
    //     //...
    // }

    // /**** Condiciones de uso ****/
    // console.log("***¿aceptas?***");
    // console.log(event.target.elements.accept.checked);
    // let accept = event.target.accept.checked;

    // if (accept == true) {
    //     console.log("Ha aceptado las condiciones");
    // } else {
    //     alert("Tienes que aceptar las condiciones");
    //     formValidated = false;
    // }

    // Para hacer el envío final del formulario
    if (formValidated == true) {
        // Reanuda el envío del formulario
        event.target.submit();
    }
    else {
        alert("Fomulario no validado");
    }
})