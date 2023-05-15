import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MangaPage from "./manga-page/manga-page";


const MainBottomNavigation = createMaterialBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <MainBottomNavigation.Navigator
      initialRouteName="MangaListRoute"
      activeColor="#47ff75"
      inactiveColor="#FFFFFF"
      barStyle={{ backgroundColor: "#2A2525" }}
    >
      <MainBottomNavigation.Screen
        name="MangaListRoute"
        component={MangaPage}
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
        component={MangaPage}
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
        component={MangaPage}
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
