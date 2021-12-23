<code>

//Redimensiona un iFrame dinamicamente
function myIFrameResize(){
    //Obtenemos la altura que queremos dar al iFrame con la clase del div de referencia
    var altura = document.getElementsByClassName("flex-slider-custom")[0].clientHeight;
    //Obtenemos el objeto iframe por su ID
    var iframe = document.getElementById("visita-virtual");

    //Setea nueva dimension
    iframe.height = altura;

    //Recarga de contenido tras la redimension
    iframe.src = iframe.src;
}

//Nuestra funcion autoejecutable al cargar la web
window.onload = function(){

    //Si necesitamos redimensionar nada mas cargar la pagina llamamos a la funcion
    myIFrameResize();

    //Manejador que lee si cambia algo (en este caso si se redimensiona la ventana del nav)
    window.onresize = function(){
        myIFrameResize();
    }

};

</code>