import { Button, Text, View } from 'react-native';
import globalStyles from "../GlobalStyles"
export default function HowToHelp({ navigation }){
    const goToHomepage = () =>{
        navigation.goBack()
    }

    return(
        <View style={globalStyles.container}>
        <Text>How to help someone who suffers from bullying</Text>
        <Button onPress={goToHomepage} title="Go back to home page"></Button>
        </View>
    )
}