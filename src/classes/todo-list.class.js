import { Todo } from "./todo.class";
import { añadirPendientes } from "../js/componentes";


export class TodoList {

    constructor() {

        // this.todos = [];
        this.cargarLocalStorage();
        this.añadirPendientes();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
        this.añadirPendientes();

    }

    eliminarTodo(id) {

        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
        this.añadirPendientes();

    }

    marcarCompletado(id) {

        for(const todo of this.todos){

            if(todo.id == id){

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                this.añadirPendientes();
                break;

            }
        }

    }

    añadirPendientes() {

        let pendientes = 0;

        let countBox = añadirPendientes.firstElementChild;
        for (let todo of this.todos) {
            (!todo.completado === true) ? pendientes++ : null;
        }

        countBox.innerHTML = pendientes;

    }
    

    eliminarCompletados() {

        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();

    }

    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todos) );

    }

    cargarLocalStorage() {

        // if(localStorage.getItem('todo')){
        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        // }else {
        //     this.todo = [];
        // }

        // ↿ Lo pasamos a operador ternario ⇂
        this.todos = (localStorage.getItem('todo')) 
                        ? JSON.parse(localStorage.getItem('todo')) 
                        : [];

        this.todos = this.todos.map(Todo.fromJson);

    }
    

}