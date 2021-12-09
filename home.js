import { reduxForm, Field } from "redux-form";
import  {createStackNavigator} from '/app'
import App from "./App";

const navigation = () =>{
    return (
<stack.navigation initialeRouteName="home">
<stack.Screen name ="app" component={App} />

</stack.navigation>

    )
}


class LoginForm extends Component {
	render() {
		return (
			<View>
				<Field
					name="login"
					label="Identifiant"
					textContentType="username"
					autoCorrect={false}
					autoCapitalize="none"
					component={TextInput}
					icon="person"
				/>
				<Field
					name="password"
					label="Mot de passe"
					textContentType="password"
					secureTextEntry={true}
					autoCorrect={false}
					autoCapitalize="none"
					component={TextInput}
					icon="key"
				/>
				<Button full warning rounded onPress={this.props.handleSubmit}>
					<Text>Log in</Text>
				</Button>
			</View>
		);
	}
}

export default reduxForm({
	form: "login",
})(LoginForm);