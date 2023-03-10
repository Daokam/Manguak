import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MangaList from "./mangaList/manga-list";

const MainBottomNavigation = createMaterialBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <MainBottomNavigation.Navigator
      initialRouteName="MangaListRoute"
      activeColor="#15EA4A"
      inactiveColor="#FFFFFF"
      barStyle={{ backgroundColor: "#2A2525" }}
    >
      <MainBottomNavigation.Screen
        name="MangaListRoute"
        component={MangaList}
        options={{
          tabBarLabel: "Home",
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }}
      />
      <MainBottomNavigation.Screen
        name="FavoritesRoute"
        component={MangaList}
        options={{
          title: "Favorites",
          tabBarLabel: "Favorties",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cards-heart-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <MainBottomNavigation.Screen
        name="ProfileRoute"
        component={MangaList}
        options={{
          title: "Home",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </MainBottomNavigation.Navigator>
  );
}
