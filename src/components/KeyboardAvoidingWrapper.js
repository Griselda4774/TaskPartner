import React, { Children } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

import { useHeaderHeight } from "@react-navigation/elements";

const KeyboardAvoidingWrapper = ({children}) => {

    const height = useHeaderHeight();

    return(
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding" keyboardVerticalOffset={height + 64}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );  
};

export default KeyboardAvoidingWrapper;