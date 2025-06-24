import ProductDetailsScreen from '@/components/ui/screen/ProductDetailsScreen';
import ChangePasswordScreen from '@/components/ui/screen/Security/ChangePasswordScreen';
import LoginPageScreen from '@/components/ui/screen/Security/LoginPageScreen';
import ResetPasswordScreen from '@/components/ui/screen/Security/ResetPasswordScreen';
import ResetPasswordVerifyScreen from '@/components/ui/screen/Security/ResetPasswordVerifyScreen';
import SignupScreen from '@/components/ui/screen/Security/SignupScreen';
import SignUpVerifyScreen from '@/components/ui/screen/Security/SignUpVerifyEmailScreen';
import { createStackNavigator } from '@react-navigation/stack';
import CustomerCareScreen from '../../../../components/ui/screen/other/CustomerCareScreen';
import DailyDealsScreen from '../../../../components/ui/screen/other/DailyDealsScreen';
import LogoutScreen from '../../../../components/ui/screen/other/LogoutScreen';
import NotificationScreen from '../../../../components/ui/screen/other/NotificationScreen';
import ProfileScreen from '../../../../components/ui/screen/other/ProfileScreen';
import SettingsScreen from '../../../../components/ui/screen/other/SettingsScreen';
import VoucherScreen from '../../../../components/ui/screen/other/VoucherScreen';
import HomeBottomTabNavigation from '../tab-navigation/HomeBottomTabNavigation';
import MyOrdersTopTabNavigator from '../tab-navigation/MyOrdersTopTabNavigator';

const Stack = createStackNavigator();
export default function StackNavigator() {
   return(
    <Stack.Navigator>
        <Stack.Screen name='Process'
                      options={{headerShown: false, headerLeft:()=> null}}//process words removed
                      component={HomeBottomTabNavigation}/>

        <Stack.Screen name='My Orders'
                      options={{title:'My Orders'}}
                      component={MyOrdersTopTabNavigator}/>

        <Stack.Screen name='Settings'
                      options={{title:'Settings'}}
                      component={SettingsScreen}/>

        <Stack.Screen name='Voucher'
                      options={{title:'Voucher'}}
                      component={VoucherScreen}/>

        <Stack.Screen name='Daily Deals'
                      options={{title:'Daily Deals'}}
                      component={DailyDealsScreen}/>

        <Stack.Screen name='Notification'
                      options={{title:'Notification'}}
                      component={NotificationScreen}/>
        
        <Stack.Screen name='Profile'
                      options={{title:'Profile'}}
                      component={ProfileScreen}/>

        <Stack.Screen name='CustomerCare'
                      options={{title:'Customer Care'}}
                      component={CustomerCareScreen}/>              

        <Stack.Screen name='Logout'
                      options={{title:'Logout'}}
                      component={LogoutScreen}/>

        <Stack.Screen name='Login'
                      options={{title:'Login Here'}}
                      component={LoginPageScreen}/>

         <Stack.Screen name='SignUp'
                      options={{title:'Register Here'}}
                      component={SignupScreen}/>

         <Stack.Screen name='verifyEmail'
                      options={{title:'Verify Your Email'}}
                      component={SignUpVerifyScreen}/>

         <Stack.Screen name='ChangePasswordScreen'
                      options={{title:'Change Password'}}
                      component={ChangePasswordScreen}/>
      
         <Stack.Screen name='ResetPasswordVerifyScreen'
                      options={{title:'Verify Email'}}
                      component={ResetPasswordVerifyScreen}/>
      
         <Stack.Screen name='ResetPasswordScreen'
                      options={{title:'Reset Password'}}
                      component={ResetPasswordScreen}/>
      
         <Stack.Screen name='ProductDetails'
                      options={{title:'Product Details'}}
                      component={ProductDetailsScreen}/>
      
    </Stack.Navigator>   
   )

}