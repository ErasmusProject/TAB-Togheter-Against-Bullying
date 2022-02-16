import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import Home from "../screens/Home"
import BullyingTypes from "../screens/BullyingTypes"
import Contacts from "../screens/Contacts"
import HowToHelp from "../screens/HowToHelp"
import Statistics from "../screens/Statistics"

const screens = {
    Home: {
        screen: Home
    },
    BullyingTypes: {
        screen: BullyingTypes
    },
    HowToHelp:{
        screen: HowToHelp
    },
    Statistics:{
        screen: Statistics
    },
    Contacts: {
        screen: Contacts
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)