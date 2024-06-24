import { ActivityIndicator, Pressable, Text, PressableProps } from "react-native";

type Props = PressableProps & {
    title: string
    isLoading?: boolean
}
export function Button({title, isLoading = false, ...rest}: Props){
    return ( 
        <Pressable  
            disabled = {isLoading}
            className= "w-full h-14 items-center justify-center bg-orange-500 rounded-lg"
            {...rest}
            >
            {
                isLoading 
                ? 
                <ActivityIndicator  className="text-green-500" />
                : 
                (
                <Text className="text-green-500 text-base uppercase"> {title} </Text>
                )
            }
            
        </Pressable>
    )
}