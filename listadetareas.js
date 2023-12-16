const readline = require("readline-sync");

const tareas = [];

function añadir(){
    return new Promise(() => {
        const indicador = readline.question("indicador: " )
        const descripcion = readline.question("descripcion: " )
        tareas.push({indicador, descripcion, estado:false})
    
        console.log("se añadio exitosamente la tarea")
    })
};

function eliminar(){
    return new Promise(() => {
        
        const id = readline.question("id de la tareas que deseas eliminar: ") 
        if(id >= 0 && tareas.length){
            tareas.splice(id,1)
            console.log("se elimino la tarea seleccionada")
        } else{
                 console.log("id no encontrado")
        }
        
    })
};

function completarTareas(){
    return new Promise(() => {
        const id = readline.question("id de la tareas a completar: ") 
        if(id >= 0 && tareas.length){
            tareas[id].estado = true

            console.log("tarea completada exitosamente")
        } else{
                 console.log("no se pudo completar la tarea por id incorrecto")
        }
    })
};


function mostrarTareas(){
        console.log("lista de tareas")
        tareas.forEach((tareas, id)=>{

        console.log(`${id}.[${tareas.estado?`COMPLETADO`:` `}]${tareas.indicador}:${tareas.descripcion}`)
        }); 
}



async function menu(){
        while(true)
        {
            console.log("\n opciones"); 
            console.log("1: añadir tareas");
            console.log("2: eliminar tareas");
            console.log("3: completar tareas");
            console.log("4: mostrar tareas");
            console.log("5: salir ");
            
            
         const opcion = readline.question("elige una opcion: \n");
         console.log("\n");
         
         switch(opcion){
                case "1": await añadir();
                break;
                case "2": eliminar().then((respuesta)=>console.log(respuesta)).catch((errores)=>console.error(errores));
                break;
                case "3": completarTareas().then((respuesta)=>console.log(respuesta)).catch((errores)=>console.error(errores));
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
