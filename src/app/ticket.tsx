import { useState } from "react";
import { StatusBar, View, Text, ScrollView, Pressable, Alert, Modal } from "react-native";

import * as ImagePicker from "expo-image-picker";

import { Button } from "@/components/button";
import { Credential } from "@/components/credential";
import { Header } from "@/components/header";
import { QRcode } from "@/components/qrcode";



export default function Ticket(){
    const [image, setImage] = useState("")
    const [expandQrcode, setExpandQrcode] = useState(false)

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
                    onExpandQrcode={() => setExpandQrcode(true)}
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

            <Modal visible={expandQrcode} statusBarTranslucent>
                <View className="flex-1 bg-green-500 items-center justify-center">

                    <QRcode value="karen" size={300}/>
                    <Pressable onPressOut={() => setExpandQrcode(false)}>
                        <Text className="text-sm font-body text-orange-400 text-center mt-10"> Fechar Qrcode </Text>
                    </Pressable>
                </View>
            </Modal>
        </View>
    )
}