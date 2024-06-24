import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Link } from "expo-router"

import {View, Image, Text} from "react-native" 


export default function Home (){
    return (
        <View className = "bg-green-500 flex-1 justify-center items-center p-8"> 
           <Image 
            source={require("@/assets/logo.png")}
            className = "h-16"
            resizeMode="contain"
           />


            <View className="w-full mt-12 gap-3">
                <Input>
                    <Input.Field placeholder="Código de ingresso"/>
                </Input>
          

                <Button 
                    title="Acessar credencial"
                    onPress={ () => console.warn('oii')}    
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