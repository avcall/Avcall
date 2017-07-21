import React from 'react'
import {Image} from 'react-native'
import {TabNavigator} from 'react-navigation'

import Home from './components/Home'

const App = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Avcall',
            tabBarIcon: ({tintColor}) =>(
                <Image
                    source={{uri: 'avcall'}}
                    style={[tabBarIcon,{tintColor: tintColor}]}
                />
            )
        }
    },
    tabBarPosition: 'bottom',
    swipeEnabled:false,
    animationEnabled:false,
    tabBarOptions: {
        style: {
            height:49
        },
        activeBackgroundColor:'white',
        activeTintColor:'#4ECBFC',
        inactiveBackgroundColor:'white',
        inactiveTintColor:'#aaa',
        showLabel:false,
    }
})

export default App