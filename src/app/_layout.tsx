import "../styles/global.css"
import {Slot} from "expo-router"
import { StatusBar} from "expo-status-bar"

export default function Layout(){
    return (
        <>
            <StatusBar style = "light"/>
        
            {/*esse componente pega todas as rotas 
                (os arquivos tsx) e renderiza*/}
            <Slot/>
        </>
    )
}