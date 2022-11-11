import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon } from "native-base";
import React from "react";
import { Platform } from "react-native";
import TablerIcons from "../components/TablerIcons/TablerIcons";
import FavoritesScreen from "../screens/Dashboard/Favorites/FavoritesScreen";
import HomeScreen from "../screens/Dashboard/Home/HomeScreen";
import MessageScreen from "../screens/Dashboard/Message/MessageScreen";
import ProfileScreen from "../screens/Dashboard/Profile/ProfileScreen";
import ForgotPasswordScreen from "../screens/ForgotPassword/ForgotPassword";
import NewPasswordScreen from "../screens/ForgotPassword/NewPassword";
import GetStartedScreen from "../screens/GetStarted/GetStartedScreen";
import LocalAuthScreen from "../screens/LocalAuth/LocalAuthScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import OnboardingScreen from "../screens/Onboarding/OnboardingScreen";
import OtpScreen from "../screens/Otp/OtpScreen";
import PickInterestScreen from "../screens/PickInterest/PickInterestScreen";
import SignupScreen from "../screens/Signup/SignupScreen";
import {
  DashboardTabParamList,
  DashboardTabScreenProps,
  RootStackParamList,
} from "./types";

import Heart from "../../assets/svg/heart.svg";
import Home from "../../assets/svg/home.svg";
import Message from "../../assets/svg/message.svg";
import Profile from "../../assets/svg/profile.svg";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStartedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Otp"
        component={OtpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewPassword"
        component={NewPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LocalAuth"
        component={LocalAuthScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PickInterest"
        component={PickInterestScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

/**
 * Bottom Tabs
 */
const BottomTab = createBottomTabNavigator<DashboardTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
      screenOptions={({ navigation }) => ({
        headerShadowVisible: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
        },
        tabBarActiveTintColor: "#4038ff",

        tabBarLabelStyle: {
          fontFamily: "Urbanist_700Bold",
          fontSize: 12,
          letterSpacing: 0.5,
          /*  fontSize: 12, */
          marginBottom: Platform.OS === "ios" ? 4 : 6,
        },
      })}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: DashboardTabScreenProps<"Home">) => ({
          title: "Home",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Home />
            ) : (
              <Icon as={TablerIcons} name="smart-home" size={6} color={color} />
            ),
        })}
      />

      <BottomTab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={({ navigation }: DashboardTabScreenProps<"Favorites">) => ({
          title: "Favorites",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Heart fill="#4038FF" />
            ) : (
              <Icon as={TablerIcons} name="heart" size={6} color={color} />
            ),
        })}
      />

      <BottomTab.Screen
        name="Message"
        component={MessageScreen}
        options={({ navigation }: DashboardTabScreenProps<"Message">) => ({
          title: "Message",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Message />
            ) : (
              <Icon as={TablerIcons} name="message" size={6} color={color} />
            ),
        })}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }: DashboardTabScreenProps<"Profile">) => ({
          title: "Profile",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Profile />
            ) : (
              <Icon as={TablerIcons} name="user" size={6} color={color} />
            ),
        })}
      />
    </BottomTab.Navigator>
  );
}
