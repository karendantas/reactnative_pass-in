import { Button } from "@/components/button";
import { Credential } from "@/components/credential";
import { Header } from "@/components/header";
import { StatusBar, View, Text, ScrollView, Pressable } from "react-native";


export default function Ticket(){
    return (
        <View className ="flex-1 bg-green-500">
            <StatusBar barStyle="light-content" />
            <Header title = "Minha credencial"/>

            <ScrollView 
                className="-mt-28 -z-10"
                contentContainerClassName="px-8 pb-8"
                showsVerticalScrollIndicator = {false}    
            >

                <Credential />

                <Text className="text-white self-center mt-6 font-bold text-2xl">
                    v
                </Text>

                <Text className="text-white mt-6 font-bold text-2xl">
                    Compartilhar Credencial
                </Text>

                
                <Text className="text-white font-regular mt-1 mb-6 text-base">
                    Mostre ao mundo que voce vai participar do web submmit!
                </Text>

                <Button  title="Compartilhar" />

                <Pressable className="mt-10">
                    <Text className="text-white font-bold text-base self-center"> Remover Ingresso </Text>
                </Pressable>
            </ScrollView>
        </View>
    )
}