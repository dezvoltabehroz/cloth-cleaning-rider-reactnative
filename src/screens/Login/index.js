import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity, Text, View, Alert, Platform } from 'react-native';
import { Button, Input } from '../../components';
import styles from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { AuthServices } from '../../services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../../assets/svg/logo.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '', loading: false, submit: false
        };
    }

    // ============== func_HandleLogin - Function Will allow user to get login ==============
    func_HandleLogin = () => {
        this.setState({ loading: true });
        const { replace } = this.props.navigation;
        const { email, password, submit } = this.state;
        if (email && password && submit) {
            let userData = {
                email: email,
                password: password
            }
            AuthServices.userLogin(userData)
                .then(async (response) => {
                    await AsyncStorage.setItem('USER_TOKEN', JSON.stringify(response.data.result.access_token));
                    await this.props.authActions.setUserProfile(response.data.result, replace)
                    this.setState({ loading: false, submit: false, });
                })
                .catch((error) => {
                    if (error.message == 'Request failed with status code 401') {
                        Alert.alert("Attension", "Invalid Credentials");
                        this.setState({ loading: false });
                    }
                })
        }
        else {
            this.setState({ submit: true, loading: false })
        }

    }

    isEmailValid(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    }

    // ============== func_HandleSignUp - Function Will allow user to register himself ==============
    func_HandleSignUp = () => {

    }

    // ============== func_HandleResetPassword - Function Will allow user to reset his/her password ==============
    func_HandleResetPassword = () => {

    }

    render() {
        const { email, password, loading, submit } = this.state;
        return (
            <View>
                <ImageBackground resizeMode="cover" style={styles.backgroundStyle} source={require('../../assets/images/login.jpg')}>
                    <View style={{ flex: 0.95, }}>
                        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.innerImageContainer}>
                                <Logo />
                            </View>
                            <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                                <Input
                                    placeholder="Phone Number / Email"
                                    onFocus={() => this.setState({ submit: true })}
                                    value={email}
                                    onChangeText={(email) => this.setState({ email: email })}
                                />
                                {
                                    submit && !email ? <Text style={[styles.errorText]}>Please fill this field</Text> : null
                                }
                                {
                                    submit && email.length && !this.isEmailValid(email) ? <Text style={[styles.errorText]}>Email is invalid</Text> : null
                                }
                            </View>
                            <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                                <Input
                                    placeholder="Password"
                                    value={password}
                                    secureTextEntry={true}
                                    onChangeText={(password) => this.setState({ password: password })}
                                />
                                {
                                    submit && !password ? <Text style={[styles.errorText]}>Please fill this field</Text> : null
                                }
                            </View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgetPassword')} style={{ marginHorizontal: '7%', alignItems: 'flex-end' }} >
                                <Text style={{ fontFamily: 'Nunito-Regular' }} >Forget Password?</Text>
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center', marginTop: '5%' }}>
                                <Button loading={loading} title='Login' onPress={() => this.func_HandleLogin()} />
                            </View>
                        </ KeyboardAwareScrollView>
                    </View>
                </ImageBackground>
            </View>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.authReducer || {}
    };
};

const mapDispatchToProps = dispatch => {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)