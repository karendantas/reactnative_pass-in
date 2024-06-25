import { Link, Redirect } from "expo-router"
import { useState } from "react"

import {View, Image, StatusBar, Alert} from "react-native" 

import { api } from "@/server/api"
import { useBadgeStore } from "@/store/badge-store"

import { Button } from "@/components/button"
import { Input } from "@/components/input"

export default function Home (){
    const [code, setCode] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const badgeStore = useBadgeStore()

    async function handleAcessCredential (){
        try { 
            if (!code.trim()){
                return Alert.alert("Ingresso", "Informe o código de ingresso!")
            }

            setIsLoading(true)

            const { data } = await api.get(`/attendees/${code}/badge`)
            badgeStore.save(data.badge)

        }catch (err){

            console.log(err)
            
            setIsLoading(false)
            Alert.alert("Ingresso", "Ingresso não encontrado!")
        }
    }

    //se o usuario já estiver cadastrado, ele vai direto para tela de ticket
    if (badgeStore.data?.checkInURL){
        return <Redirect href="/ticket" />
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
                    isLoading = {isLoading}    
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