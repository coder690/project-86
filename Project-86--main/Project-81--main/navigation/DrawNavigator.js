import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator  from "./TabNavigator"
import profile from "../screens/Profile"

const drawer = createDrawerNavigator();

const drawerNavigator=()=> {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="home" component={TabNavigator}/>
            <Drawer.Screen name="Profile" component={profile}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;