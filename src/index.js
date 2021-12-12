import fetch from 'node-fetch';
import { randomValue } from './random.js';

const BASE_API = 'https://countriesnow.space/api/v0.1/countries'

export async function getCountry() {
    const response = await fetch(`${BASE_API}`)

    if (response.status === 404) {
        console.log('Error de Conexion 404')
        return false
    }
    const result = await response.json()
    const valuePosition = randomValue()


    const getCountry = result.data[valuePosition].country

    const sizeCities = result.data[valuePosition].cities

    const getCities = sizeCities.length === 0 ? 'No posee ciudad alguna' : result.data[valuePosition].cities
    console.log('Consulta Exitosa')
    console.log(`Pais: ${getCountry}`)
    console.log(`Ciudades: ${getCities}`)
    return true
}