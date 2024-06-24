import { View, Image, ImageBackground, Text, Pressable } from "react-native";

export function Credential(){
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
                        <Text className="text-zinc-50 text-sm font-bold "> Unit submmit </Text>
                        <Text className="text-zinc-50 text-sm font-bold "> #123 </Text>

                    </View>

                    <View className="w-40 h-40 bg-black rounded-full" />
                </ImageBackground>

                <Image  
                    source={ { uri: "https://github.com/karendantas.png" } }
                    className="w-36 h-36 rounded-full -mt-24"
                />

                <Text className="text-zinc-50 font-bold text-2xl mt-4"> Karen Dantas </Text>
                <Text className="text-zinc-300 font-regular text-base mb-4 "> karennobre74@gmail.com </Text>

                <Image 
                    source={require('@/assets/ticket/qrcode.png')}
                    className="w-32 h-32"
                />

                <Pressable className="mt-6">
                    <Text className="text-sm font-body text-orange-400 " > Ampliar Qrcode</Text>
                </Pressable>
            </View>
        </View>
    )
}