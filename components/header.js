import  { Text, View, Image, TouchableOpacity } from 'react-native';

export default function Header() {
  return (
    <View>
      <View className="bg-blue-200 flex  justify-center pt-20 pb-2 rounded-b-2xl">
        <Text className="text-8xl">Open up App.js to start working on your app!</Text>
        <View className="flex flex-row justify-between px-4">
          <TouchableOpacity>
            <Image className="w-12 h-12 my-auto" source={require('../assets/icons/adjust.png')} alt='adjust button'/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image className="w-32 h-32" source={require('../assets/icons/logo.png')} alt='adjust button'/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image className="w-12 h-12 my-auto" source={require('../assets/icons/search.png')} alt='adjust button'/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
