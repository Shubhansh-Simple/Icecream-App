import React from 'react';

// FOR NAVIGATION
import { NavigationContainer }      from '@react-navigation/native';
import { createStackNavigator }     from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// LOCAL
import HomeScreen          from './src/Screens/HomeScreen';
import CurrentStockScreen  from './src/Screens/CurrentStockScreen';


const HomeStack = createStackNavigator();

function HomeStackScreen(){
  return (
    <HomeStack.Navigator
      screenOptions={{ headerTitleAlign : 'center', 
                       headerStyle : { height : 60},
                       title : 'Icrecream Tracker'
                    }}
    >
      <HomeStack.Screen 
        name='Home' 
        component={HomeScreen} />
    </HomeStack.Navigator>
  )
}

const CurrentStockStack = createStackNavigator();

function CurrentStockStackScreen(){
  return (
    <CurrentStockStack.Navigator 
      screenOptions={{ headerTitleAlign : 'center', 
                       headerStyle : { height : 60},
                       title : 'CurrentStocks'

                    }}
    >
      <CurrentStockStack.Screen 
        name='CurrentStocks' 
        component={CurrentStockScreen} />
    </CurrentStockStack.Navigator>
  )
}

const Tab   = createBottomTabNavigator()


export default () => {

  /*
  useEffect( ()=>{
     * Execute only once
     * at the starting of app
    createPocket()
    createCredit()
    createSource()

  },[]) 

  */


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
        <Tab.Screen name='Home'         component={ HomeStackScreen } />
        <Tab.Screen name='CurrentStock' component={ CurrentStockStackScreen } />
      </Tab.Navigator>
    </NavigationContainer>
  )
};








