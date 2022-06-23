import { createDrawerNavigator } from '@react-navigation/drawer'
import AboutScreen from './screens/about-screen'
import MainScreen from './screens/main-screen'
const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  )
}

export default App
