import { colors } from "@/styles/colors"

import { ReactNode } from "react"
import { TextInput, View, TextInputProps } from "react-native"

function Input({ children }: { children: ReactNode}){
    return (
        <View className="w-full h-14 flex-row items-center border border-green-400 rounded-lg p-3 gap-3">  
           
            {children}
        </View>
    )
}

function Field({ ...rest }:TextInputProps){
    return (
        <TextInput 
            className="flex-1 text-base text-white font-regular" 
            placeholderTextColor={colors.gray[200]}
            {...rest} />
    )
}

Input.Field = Field

export { Input }