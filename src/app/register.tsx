import { Link, router } from "expo-router"
import { useState } from "react"

import {View, Image, StatusBar, Alert} from "react-native" 

import { Button } from "@/components/button"
import { Input } from "@/components/input"


export default function Home (){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    function handleCreateAcess() {
        if (!name.trim() || !email.trim()){
            return Alert.alert("Inscrição", "Preencha todos os campos!")
        }
        
        router.push('/ticket')
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
                        placeholder="Nome completo"
                        onChangeText={setName}
                    />
                </Input>
                <Input>
                    <Input.Field 
                        placeholder="Email" 
                        keyboardType="email-address"
                        onChangeText={setEmail}
                    />
                </Input>
          

                <Button 
                    title="Realizer inscrição"
                    onPress={ handleCreateAcess}    
                />

                <Link 
                    href="/"
                    className="text-base text-gray-100 font-bold text-center mt-8"
                >
                    Já possui ingresso?
                </Link>
                
            </View>

        </View>
    )
}