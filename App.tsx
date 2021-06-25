import React from 'react';
import * as SQLite from 'expo-sqlite';

// FOR NAVIGATION
import { NavigationContainer }      from '@react-navigation/native';
import { createStackNavigator }     from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// LOCAL
import SaleScreen          from './src/Screens/SaleScreen';
import CurrentStockScreen  from './src/Screens/CurrentStockScreen';
import IcecreamScreen      from './src/Screens/IcecreamScreen';

// DATABASE GLOBAL INSTANCE
global.db = SQLite.openDatabase('ShopDatabase.db')

/*
 * TAB AND STACK
 * Navigation Configuration 
 */

const HomeStack = createStackNavigator();

function HomeStackScreen(){
  return (
    <HomeStack.Navigator
      screenOptions={{ headerTitleAlign : 'center', 
                       headerStyle : { height : 60},
                       title : 'Sale Tracker'
                    }}
    >
      <HomeStack.Screen 
        name='Home' 
        component={SaleScreen} />
    </HomeStack.Navigator>
  )
}

const CurrentStockStack = createStackNavigator();

function CurrentStockStackScreen(){
  return (
    <CurrentStockStack.Navigator 
      screenOptions={{ headerTitleAlign : 'center', 
                       headerStyle : { height : 60},
                       title : 'Current Icecream Stock'

                    }}
    >
      <CurrentStockStack.Screen 
        name='CurrentStocks' 
        component={CurrentStockScreen} />
      </CurrentStockStack.Navigator>
  )
}

const IcecreamStack = createStackNavigator();

function IcecreamStackScreen(){
  return (
    <IcecreamStack.Navigator
      screenOptions={{ headerTitleAlign : 'center', 
                       headerStyle : { height : 60},
                       title : 'Icrecream Varieties'
                    }}
    >
      <IcecreamStack.Screen 
        name='Icecream' 
        component={IcecreamScreen} />
      </IcecreamStack.Navigator>
  )
}
const Tab   = createBottomTabNavigator()

export default () => {

  return (
    <NavigationContainer>

      <Tab.Navigator
        tabBarOptions={{
          activeTintColor : 'tomato',
          inactiveTintColor : 'gray',
          
          style : {
            backgroundColor : '#393b39',
          },

          labelStyle : {
            fontSize : 13,
            textTransform : 'capitalize',
            color : 'white',
          },
        }}
	  >
        <Tab.Screen name='Sales'         component={ HomeStackScreen } />
        <Tab.Screen name='Current Stock' component={ CurrentStockStackScreen } />
        <Tab.Screen name='Icecreams'     component={ IcecreamStackScreen } />
      </Tab.Navigator>

    </NavigationContainer>
  )
};








