import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Link } from "expo-router"

import {View, Image, StatusBar} from "react-native" 


export default function Home (){
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
                    <Input.Field placeholder="Nome completo"/>
                </Input>
                <Input>
                    <Input.Field placeholder="Email" keyboardType="email-address"/>
                </Input>
          

                <Button 
                    title="Realizer inscrição"
                    onPress={ () => console.warn('oii')}    
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