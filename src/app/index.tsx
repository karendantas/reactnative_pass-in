import { Link } from "expo-router"
import { useState } from "react"

import {View, Image, StatusBar, Alert} from "react-native" 

import { Button } from "@/components/button"
import { Input } from "@/components/input"


export default function Home (){
    const [code, setCode] = useState("")

    function handleAcessCredential (){
        if (!code.trim()){
            return Alert.alert("Ingresso", "Informe o código de ingresso!")
        }
        console.log('oiu')
    }
    return (
        <View className = "bg-green-500 flex-1 justify-center items-center p-8"> 

           <StatusBar barStyle = "light-content"/>
           <Image 
            source={require("@/assets/logo.png")}
            className = "h-16"
            resizeMode="contain"
           />


            <View className="w-full mt-12 gap-3">
                <Input>
                    <Input.Field 
                        placeholder="Código de ingresso"
                        onChangeText={setCode}
                        />
                </Input>
          

                <Button 
                    title="Acessar credencial"
                    onPress={handleAcessCredential}    
                />

                <Link 
                    href="/register"
                    className="text-base text-gray-100 font-bold text-center mt-8"
                >
                    Ainda não possui ingresso?
                </Link>
                
            </View>

        </View>
    )
}