
import axios from "axios";

const agregar = async(vehiculoBody)=>{
    const data = await axios.post(`http://localhost:8080/API/v1.0/Concesionario/vehiculos`,vehiculoBody).then(r=>r.data)
    console.log(data)
    return data
}

const ver = async(placa)=>{
    const data = await axios.get(`http://localhost:8080/API/v1.0/Concesionario/${placa}`).then(r=>r.data)
    console.log(data)
    return data
}



const eliminar = async(placa, vehiculoBody)=>{
    const data = await axios.delete(`http://localhost:8080/API/v1.0/Concesionario/${placa}`,vehiculoBody).then(r=>r.data)
    console.log(data)
    return data
}

const consultar = async(vehiculoBody)=>{
    const data = await axios.get(`http://localhost:8080/API/v1.0/Concesionario/todos`,vehiculoBody).then(r=>r.data)
    console.log(data)
    return data
}


export const agregarFachada = async(vehiculoBody)=>{ 
    return await agregar(vehiculoBody);
    
}

export const verFachada = async(placa)=>{ 
    return await ver(placa);
    
}

export const eliminarFachada = async(placa, vehiculoBody)=>{ 
    return await eliminar(placa, vehiculoBody);
    
}

export const consultarFachada = async(vehiculoBody)=>{
    return await consultar(vehiculoBody);
}





