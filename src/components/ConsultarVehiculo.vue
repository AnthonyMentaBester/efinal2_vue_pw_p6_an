<template>
  <div class="container">
    <div>
        <label for="placa">Placa</label>
        <input type="text" v-model="placa" id="placa" required>
    </div>

    <div>
        <label for="marca">Marca</label>
        <input type="text" v-model="marca">
    </div>

    <div>
        <label for="modelo">Modelo</label>
        <input type="text" v-model="modelo">
    </div>

    <div>
        <button type="boton" @click="ver">Ver</button>
        <button type="boton" @click="borrar">borrar</button>
    </div>


    <button type="boton" @click="consultar">Consultar</button>

  </div>
</template>

<script>
import { verFachada,eliminarFachada,consultarFachada } from '@/clients/VehiculoCliente'
export default {
    data(){
        return{
            placa: null,
            marca: null,
            modelo: null,
            color: null,
            precio: null,
        }
    },
    methods: {
        async consultar(){
            const data = await this.consultarFachada();
            console.log(data)
        },
        
        async ver(){
            const data = await verFachada();
            console.log(data)
        },
        async borrar(){
            const data = await eliminarFachada();
            console.log(data)

        },
    },

}
</script>

<style scoped>
label{
    display: flex;
    justify-content: center;

    text-align: initial;
    font-size: 20px;


    margin: 5px;
    color: blue;
}
input{
    border-color: blue;
    margin: 5px;
    border-radius: 5px;
    margin-right: -100px;
    

}
button {
    margin: 25px;
    color: blue;
    border: solid blue;
    border-radius: 10px;
    content: 15px;
}
.container{
    display: flex;
    grid-template: auto;
    grid-auto-columns: 2px;
    
}

</style>