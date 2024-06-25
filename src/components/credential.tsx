import { View, Image, ImageBackground, Text, Pressable } from "react-native";
import { QRcode } from "@/components/qrcode";

import { BadgeStore } from "@/store/badge-store";

type Props = {
    data: BadgeStore
    onChangeAvatar?:() => void
    onExpandQrcode?: () => void
}
export function Credential({data, onChangeAvatar,onExpandQrcode }:Props){
    return (
        <View className="w-full self-stretch items-center">
            <Image 
                source={require("@/assets/ticket/band.png")}
                className="w-24 h-52 z-10"
            />

            <View className="bg-black/20 self-stretch items-center pb-6 border-b border-white/10 mx-3 rounded-2xl -mt-5">
                <ImageBackground 
                    source={require("@/assets/ticket/header.png")}
                    className="h-40 px-6 py-8 self-stretch overflow-hidden border-b border-white/10 items-center"
                >
                    <View className="w-full flex-row items-center justify-between">
                        <Text className="text-zinc-50 text-sm font-bold "> {data.eventTitle} </Text>
                        <Text className="text-zinc-50 text-sm font-bold "> # {data.id}</Text>

                    </View>

                    <View className="w-40 h-40 bg-black rounded-full" />
                </ImageBackground>

                {
                    data.image
                    ? 
                    (   
                        <Pressable onPressOut={onChangeAvatar}>

                            <Image  
                                source={ { uri: data.image } }
                                className="w-36 h-36 rounded-full -mt-24"
                            />
                        </Pressable>
                    )
                    :
                    (
                        <Pressable 
                            className="w-36 h-36 rounded-full bg-slate-500 items-center justify-center -mt-24"
                            onPressOut={onChangeAvatar}    
                        >
                            <Text className="text-green-500 text-base"> Add Photo </Text>
                        </Pressable>
                    )
                }
                

                <Text className="text-zinc-50 font-bold text-2xl mt-4"> {data.name} </Text>
                <Text className="text-zinc-300 font-regular text-base mb-4 "> {data.email}</Text>

                <QRcode value={data.checkInURL}  size={120}/>

                <Pressable className="mt-6" onPressOut={onExpandQrcode}>
                    <Text className="text-sm font-body text-orange-400 " > Ampliar Qrcode</Text>
                </Pressable>
            </View>
        </View>
    )
}