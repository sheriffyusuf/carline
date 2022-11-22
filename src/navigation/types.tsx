import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Onboarding: undefined;
  GetStarted: undefined;
  Login: undefined;
  Signup: undefined;
  Otp: undefined;
  ForgotPassword: undefined;
  NewPassword: undefined;
  LocalAuth: undefined;
  PickInterest: undefined;
  Dashboard: undefined;
  PickLocation: undefined;
  ListCar: undefined;
  // Home: undefined;
  // Profile: { userId: string };
  // Feed: { sort: 'latest' | 'top' } | undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type DashboardTabParamList = {
  Home: undefined;
  Favorites: undefined;
  Message: undefined;
  Profile: undefined;
  //  Popular: undefined;
};

export type DashboardTabScreenProps<T extends keyof DashboardTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<DashboardTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
