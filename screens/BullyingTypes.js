import { Button, Text, View } from 'react-native';
import globalStyles from "../GlobalStyles"
export default function BullyingTypes({ navigation }){
    const goToHomepage = () =>{
        navigation.goBack()
    }

    return(
        <View style={globalStyles.container}>
        <Text>Types of Bullying</Text>
        <Button onPress={goToHomepage} title="Go back to home page"></Button>
        </View>
    )
}