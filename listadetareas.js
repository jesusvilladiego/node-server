const readline = require("readline-sync");

const tareas = [];

function añadir(){
    const indicador = readline.question("indicador: " )
    const descripcion = readline.question("descripcion: " )
    tareas.push({indicador, descripcion, estado:false})

    console.log("se añadio exitosamente la tarea")
};

function eliminar(){
        const id = readline.question("id de la tareas que deseas eliminar: ") 
        if(id >= 0 && tareas.length){
            tareas.splice(id,1)
            console.log("se elimino la tarea seleccionada")
        } else{
                 console.log("id no encontrado")
        }
        
};

function completarTareas(){
        const id = readline.question("id de la tareas a completar: ") 
        if(id >= 0 && tareas.length){
            tareas[id].estado = true

            console.log("tarea completada exitosamente")
        } else{
                 console.log("no se pudo completar la tarea por id incorrecto")
        }
};


function mostrarTareas(){
         console.log("lista de tareas")
         tareas.forEach((tareas, id)=>{

         console.log(`${id}.[${tareas.estado?`COMPLETADO`:` `}]${tareas.indicador}:${tareas.descripcion}`)
         }); 

}


function menu(){
        while(true)
        {
            console.log("\nopciones"); 
            console.log("1: añadir tareas");
            console.log("2: eliminar tareas");
            console.log("3: completar tareas");
            console.log("4: mostrar tareas");
            console.log("5: salir ");
            
            
         const opcion = readline.question("elige una opcion: \n");
         console.log("\n");
         
         switch(opcion){
                case "1": añadir();
                break;
                case "2": eliminar();
                break;
                case "3": completarTareas();
                break;
                case "4": mostrarTareas();
                break;
                case "5":
                return;

                default:
                console.log("opcion no valida")

         }
        }
}

menu()
