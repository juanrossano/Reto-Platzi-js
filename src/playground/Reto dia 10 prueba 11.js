// console.log();
console.log("Crea un planificador de tareas");
const planner1 = createTaskPlanner();

planner1.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});
planner1.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});

planner1.markTaskAsCompleted("Llamar a Juan")
console.log(planner1.getCompletedTasks());

const planner2 = createTaskPlanner();

planner2.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});

planner2.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});

console.log(planner2.filterTasksByTag("shopping"));


function createTaskPlanner() {
    // Tu código aquí 👈
    let tareas = [];
    return {
        addTask:tarea => {tarea.completed = false;
            tareas.push(tarea)},
        agregarTarea:tarea => tareas.push([id = tarea.id, 
            name = tarea.name, 
            priority = tarea.priority, 
            tags = tarea.tags, 
            completed = false]),
        removeTask:function(value){
            tareas = tareas.filter((tarea) => tarea.id != value && tarea.name != value);
        },
        getTasks:function () {
            return tareas;
          },
        getPendingTasks:() => tareas.filter(task => task.completed == true),
        markTaskAsCompleted: (taskNameOrId) => {
            let taskIndex = tareas.findIndex(task => task.name == taskNameOrId || task.id == taskNameOrId);
            tareas[taskIndex].completed = false;
        },
        getCompletedTasks:() => tareas.filter(task => task.completed == true),
        markTaskAsCompleted: (taskNameOrId) => {
            let taskIndex = tareas.findIndex(task => task.name == taskNameOrId || task.id == taskNameOrId);
            tareas[taskIndex].completed = true;
        },
        getSortedTasksByPriority: function() {
            return [...tareas].sort((b,a)=> b.priority - a.priority);
        },
        filterTasksByTag: (taskTag) => {
            return tareas.filter(task => task.tags.includes(taskTag));
        },
        updateTask:function(taskId, updates){
            let index = tareas.findIndex(task =>task.id == taskId );
            tareas[index] = {...tareas[index],...updates};
          }
    }
}

/**
En este desafío, debes implementar la lógica de un planificador de tareas que permita agregar, eliminar y marcar como completadas las tareas, así como también mostrar un registro de las mismas. Para ello, debes construir la lógica de la función closure llamada createTaskPlanner para que devuelva los siguientes métodos:

addTask(task): recibe un objeto que contiene la tarea y la agrega al array de tareas. La tarea debe estar conformada por las siguientes propiedades: id, name, priority, tags y completed, donde el estado completed se agrega automáticamente como falso al momento de agregar una tarea.
removeTask(value): recibe el id o nombre de la tarea y la elimina del array de tareas.
getTasks(): Devuelve el array de tareas.
getPendingTasks(): Devuelve solo las tareas pendientes.
getCompletedTasks(): Devuelve solo las tareas completadas.
markTaskAsCompleted(value): Recibe el id o nombre de la tarea y la marca como completada.
getSortedTasksByPriority(): Devuelve una copia de las tareas ordenadas según su prioridad (3: poco urgente, 2: urgente, 1: muy urgente), sin modificar la lista de tareas original.
filterTasksByTag(tag): Filtra las tareas por una etiqueta específica.
updateTask(taskId, updates): Buscar la tarea correspondiente con el id especificado y actualizar sus propiedades con las especificadas en el objeto updates.
Ejemplo 1:

Input:
const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});


planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});

planner.markTaskAsCompleted("Llamar a Juan")

Output:
planner.getCompletedTasks()
[{
    id: 2,
    name: "Llamar a Juan",
    completed: true,
    priority: 3,
    tags: ["personal"]
}]

Ejemplo 2:

Input:
const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});

planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});

Output:
planner.filterTasksByTag("shopping")
[{
    id: 1,
    name: "Comprar leche",
    completed: false,
    priority: 3,
    tags: ["shopping", "home"]
}]
 */