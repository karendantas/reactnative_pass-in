import { colors } from "@/styles/colors"
import QRcodeSvg from "react-native-qrcode-svg"

type Props = {
    value: string,
    size: number
}
export function QRcode ({ value, size }:Props){
    return (
        <QRcodeSvg 
            value = {value}
            size = {size}
            color = {colors.white}
            backgroundColor="transparent"
        />
    )
}