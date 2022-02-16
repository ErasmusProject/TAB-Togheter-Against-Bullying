import { Button, Text, View } from 'react-native';
import globalStyles from "../GlobalStyles"
export default function Statistics({ navigation }){
    const goToHomepage = () =>{
        navigation.goBack()
    }

    return(
        <View style={globalStyles.container}>
        <Text>Bullying statistics. Is it increasing or not? Is it common?</Text>
        <Button onPress={goToHomepage} title="Go back to home page"></Button>
        </View>
    )
}