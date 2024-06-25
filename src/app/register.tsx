import { Link, router } from "expo-router"
import { useState } from "react"

import {View, Image, StatusBar, Alert} from "react-native" 

import axios from "axios"
import { api } from "@/server/api"

import { useBadgeStore } from "@/store/badge-store"

import { Button } from "@/components/button"
import { Input } from "@/components/input"

const EVENT_ID = "9e9bd979-9d10-4915-b339-3786b1634f33"

export default function Home (){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const badgeStore = useBadgeStore()

    async function handleCreateAcess() {
        
        try {
            if (!name.trim() || !email.trim()){
                return Alert.alert("Inscrição", "Preencha todos os campos!")
            }
            
            setIsLoading(true)
            const registerResponse = await api.post(`events/${EVENT_ID}/attendees`, {name, email})

            if (registerResponse.data.attendeeId){

                //persistindo os dados no storage
                const badgeResponse = await api.get(`attendees/${registerResponse.data.attendeeId}/badge`)
                badgeStore.save(badgeResponse.data.badge)

                Alert.alert("Inscrição", "Inscrição realizada com sucesso!", [
                    { text: "OK", onPress: () => router.push('/ticket')}
                ])
            }
          
        }catch (err){
            console.log(err)

            //Botão para de carregar somente quando ocorre um erro
            setIsLoading(false)
            //verificando se o erro vem da requisição
            if (axios.isAxiosError(err)){
                //verificando se é um erro de email
                if (String(err.response?.data.message).includes("already registered")){
                    return Alert.alert("Inscrição", "Esse email já foi cadastrado.")
                }
            }
            Alert.alert("Inscrição", "Inscrição não pode ser realizada.")
        }
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
                    isLoading  = {isLoading}   
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