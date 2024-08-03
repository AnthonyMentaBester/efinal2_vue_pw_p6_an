<template>
  <div class="container">

    <div>
        <label for="placa" >Placa</label>
        <br>
        <input type="text" v-model="placa" id="placa" required>
    </div>
    <div>
        <label for="marca" >Marca</label>
        <br>
        <input type="text" v-model="marca">
    </div>
    <div>
        <label for="modelo" >Modelo</label>
        <br>
        <input type="text" v-model="modelo" >
    </div>
    <div>
        <label for="color" >Color</label>
        <br>
        <input type="text" v-model="color" >
    </div>
    <div>
        <label for="precio" >Precio</label>
        <br>
        <input type="text" v-model="precio" >
    </div>

    <div>
        <button type="boton" @click="agregar">Guardar</button>
    </div>

  </div>
</template>

<script>

import { agregarFachada } from "../clients/VehiculoCliente";
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
        async agregar(){

            const data = await agregarFachada();
            console.log(data)

        }

    }
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

</style>