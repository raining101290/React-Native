import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { withExpoSnack } from 'nativewind'; 
import { Platform, Text, View, SafeAreaView } from 'react-native'
import { styled } from "nativewind";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid";

const StyledText = styled(Text);
const StyledView = styled(View);
const ios = Platform.OS === 'ios'

function HomeScreen() {    
  return (
    <View className='flex-1 bg-neutral-800' style={{backgroundColor: 'rgb(38 38 38)'}}>
        <StatusBar style='light'/>
        <SafeAreaView>
            <StyledView className='flex-row justify-between'>
              <Bars3CenterLeftIcon color="white" strokeWidth={2} size={30}  />
              <StyledText>HOME</StyledText>
              <MagnifyingGlassIcon color="white"strokeWidth={2} size={30}  />
            </StyledView>
        </SafeAreaView>
    </View>
  )
}

export default withExpoSnack(HomeScreen);