import {View, Image} from "react-native" 

export default function Home (){
    return (
        <View className = "bg-green-500 flex-1 justify-center items-center"> 
           <Image 
           source={require("@/assets/logo.png")}
           className = "h-16"
           resizeMode="contain"
           />

        </View>
    )
}