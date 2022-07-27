import hamburgerMenu from "./menu_hamburgesa.js";
import { digitalClock,alarm }  from "./reloj.js";
import {moveBall,shortcuts} from "./teclado.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) =>{
    //solo paso nombres de selectores.
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
});

//esto sirve para hacer una interfaz interactiva.

d.addEventListener("keydown", e =>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
})