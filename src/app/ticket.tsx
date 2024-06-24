import { useState } from "react";
import { StatusBar, View, Text, ScrollView, Pressable, Alert } from "react-native";

import * as ImagePicker from "expo-image-picker";

import { Button } from "@/components/button";
import { Credential } from "@/components/credential";
import { Header } from "@/components/header";



export default function Ticket(){
    const [image, setImage] = useState("")

    async function handleSelectImage(){
        try {

            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4,4]
            })

            if(result.assets){
                setImage(result.assets[0].uri)
            }
        }catch(err){
            console.log(err)
            Alert.alert("Foto", "Não foi possível selecionar a imagem.")
        }
    }
    return (
        <View className ="flex-1 bg-green-500">
            <StatusBar barStyle="light-content" />
            <Header title = "Minha credencial"/>

            <ScrollView 
                className="-mt-28 -z-10"
                contentContainerClassName="px-8 pb-8"
                showsVerticalScrollIndicator = {false}    
            >

                <Credential
                    image={image}
                    onChangeAvatar={handleSelectImage}
                />

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