class Tarea {
let info_tarea = "";
let titulo_tarea = "";

construct (info_tarea, titulo_tarea){
	this.info_tarea = info_tarea;
	this.titulo_tarea = titulo_tarea;
}

mostrar_tarea (){
	return this.info_tarea;
}

modificar_tarea (nueva_tarea){
	this.info_tarea := nueva_tarea;
}
}