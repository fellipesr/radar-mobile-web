import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Route = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github'
            }
        },
    },
        {
            defaultNavigationOptions: {
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: {
                    backgroundColor: '#7d40e7'
                }
            }
        }
    )
);

export default Route;
