import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-Icons/Ionicons"
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost"

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if(route.name==="Feed") {
                    iconName=focused
                    ? "book"
                    : "book-outline";
                } else if(route.name=== "createPost") {
                    iconName=focused? "create": "create-outline";
                }
                return <Iconicons name={iconName} size={size} color={color}/>;
            },
        })}
        tabBarOptions={{
             activeTintColor: "tomato"
             inactiveTintColor: "gray"
        }}
        >
            <Tab.Screen name="Feed" component={Feed}/>
            <Tab.Screen name="createPost" component={CreatePost}/>
            </tab.Navigator>
    )
}
export default BottomTabNavigator