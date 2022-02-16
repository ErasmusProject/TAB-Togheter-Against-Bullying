import { Button, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import globalStyles from "../GlobalStyles"

export default function Home({ navigation }){
    const goToBullyingTypes = () => {
        navigation.navigate("BullyingTypes")
    }

    const goToContacts = () => {
        navigation.navigate("Contacts")
    }

    const goToHowToHelp = () => {
        navigation.navigate("HowToHelp")
    }
    
    const goToStatistics = () => {
        navigation.navigate("Statistics")
    }
    return(
        <View style={globalStyles.container}>
        <Text>Home Screen</Text>
        <Button onPress={goToBullyingTypes} title="Types of Bullying"></Button>
        <Button onPress={goToHowToHelp} title="How to Help"></Button>
        <Button onPress={goToStatistics} title="Bullying Statistics"></Button>
        <Button onPress={goToContacts} title="Contacts"></Button>
        </View>
    )
}