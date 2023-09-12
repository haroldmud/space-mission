import  { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  const imageUrl = 'https://imgur.com/DaCfMsj.jpg'
  return (
    <ScrollView>
      <View className="bg-teal-300 flex  justify-center pt-10 pb-2 rounded-b-2xl">
        <View className="flex flex-row justify-between px-4">
          <TouchableOpacity>
            <Image className="w-12 h-12 my-auto" source={require('./assets/icons/adjust.png')} alt='adjust button'/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image className="w-32 h-32" source={require('./assets/icons/logo.png')} alt='adjust button'/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image className="w-12 h-12 my-auto" source={require('./assets/icons/search.png')} alt='adjust button'/>
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView className='mt-8'>
        <View className='w-11/12 mx-auto rounded-t-2xl mb-4'>
          <Image className="w-full object-cover h-56 mx-auto rounded-t-2xl" source={require("./assets/image/dummy.jpeg")}/>
          <View className="p-2 bg-teal-100">
            <Text className="text-4xl my-4 font-bold">Falcon 1</Text>
            <Text>
            The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
            </Text>
            <TouchableOpacity className="bg-teal-400 py-2 my-2 rounded-lg">
              <Text className="r text-white font-bold text-center">RESERVE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='w-11/12 mx-auto rounded-t-2xl mb-4'>
          <Image className="w-full object-cover h-56 mx-auto rounded-t-2xl" source={require("./assets/image/dummy.jpeg")}/>
          <View className="p-2 bg-teal-100">
            <Text className="text-4xl my-4 font-bold">Falcon 1</Text>
            <Text>
            The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
            </Text>
            <TouchableOpacity className="bg-teal-400 py-2 my-2 rounded-lg">
              <Text className="r text-white font-bold text-center">RESERVE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='w-11/12 mx-auto rounded-t-2xl mb-4'>
          <Image className="w-full object-cover h-56 mx-auto rounded-t-2xl" source={require("./assets/image/dummy.jpeg")}/>
          <View className="p-2 bg-teal-100">
            <Text className="text-4xl my-4 font-bold">Falcon 1</Text>
            <Text>
            The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
            </Text>
            <TouchableOpacity className="bg-teal-400 py-2 my-2 rounded-lg">
              <Text className="r text-white font-bold text-center">RESERVE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='w-11/12 mx-auto rounded-t-2xl mb-4'>
          <Image className="w-full object-cover h-56 mx-auto rounded-t-2xl" source={require("./assets/image/dummy.jpeg")}/>
          <View className="p-2 bg-teal-100">
            <Text className="text-4xl my-4 font-bold">Falcon 1</Text>
            <Text>
            The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
            </Text>
            <TouchableOpacity className="bg-teal-400 py-2 my-2 rounded-lg">
              <Text className="r text-white font-bold text-center">RESERVE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='w-11/12 mx-auto rounded-t-2xl mb-4'>
          <Image className="w-full object-cover h-56 mx-auto rounded-t-2xl" source={require("./assets/image/dummy.jpeg")}/>
          <View className="p-2 bg-teal-100">
            <Text className="text-4xl my-4 font-bold">Falcon 1</Text>
            <Text>
            The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
            </Text>
            <TouchableOpacity className="bg-teal-400 py-2 my-2 rounded-lg">
              <Text className="r text-white font-bold text-center">RESERVE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='w-11/12 mx-auto rounded-t-2xl mb-4'>
          <Image className="w-full object-cover h-56 mx-auto rounded-t-2xl" source={require("./assets/image/dummy.jpeg")}/>
          <View className="p-2 bg-teal-100">
            <Text className="text-4xl my-4 font-bold">Falcon 1</Text>
            <Text>
            The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
            </Text>
            <TouchableOpacity className="bg-teal-400 py-2 my-2 rounded-lg">
              <Text className="r text-white font-bold text-center">RESERVE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='w-11/12 mx-auto rounded-t-2xl mb-4'>
          <Image className="w-full object-cover h-56 mx-auto rounded-t-2xl" source={require("./assets/image/dummy.jpeg")}/>
          <View className="p-2 bg-teal-100">
            <Text className="text-4xl my-4 font-bold">Falcon 1</Text>
            <Text>
            The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
            </Text>
            <TouchableOpacity className="bg-teal-400 py-2 my-2 rounded-lg">
              <Text className="r text-white font-bold text-center">RESERVE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='w-11/12 mx-auto rounded-t-2xl mb-4'>
          <Image className="w-full object-cover h-56 mx-auto rounded-t-2xl" source={require("./assets/image/dummy.jpeg")}/>
          <View className="p-2 bg-teal-100">
            <Text className="text-4xl my-4 font-bold">Falcon 1</Text>
            <Text>
            The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
            </Text>
            <TouchableOpacity className="bg-teal-400 py-2 my-2 rounded-lg">
              <Text className="r text-white font-bold text-center">RESERVE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='w-11/12 mx-auto rounded-t-2xl mb-4'>
          <Image className="w-full object-cover h-56 mx-auto rounded-t-2xl" source={require("./assets/image/dummy.jpeg")}/>
          <View className="p-2 bg-teal-100">
            <Text className="text-4xl my-4 font-bold">Falcon 1</Text>
            <Text>
            The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
            </Text>
            <TouchableOpacity className="bg-teal-400 py-2 my-2 rounded-lg">
              <Text className="r text-white font-bold text-center">RESERVE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='w-11/12 mx-auto rounded-t-2xl mb-4'>
          <Image className="w-full object-cover h-56 mx-auto rounded-t-2xl" source={require("./assets/image/dummy.jpeg")}/>
          <View className="p-2 bg-teal-100">
            <Text className="text-4xl my-4 font-bold">Falcon 1</Text>
            <Text>
            The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
            </Text>
            <TouchableOpacity className="bg-teal-400 py-2 my-2 rounded-lg">
              <Text className="r text-white font-bold text-center">RESERVE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='w-11/12 mx-auto rounded-t-2xl mb-4'>
          <Image className="w-full object-cover h-56 mx-auto rounded-t-2xl" source={require("./assets/image/dummy.jpeg")}/>
          <View className="p-2 bg-teal-100">
            <Text className="text-4xl my-4 font-bold">Falcon 1</Text>
            <Text>
            The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
            </Text>
            <TouchableOpacity className="bg-teal-400 py-2 my-2 rounded-lg">
              <Text className="r text-white font-bold text-center">RESERVE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='w-11/12 mx-auto rounded-t-2xl mb-4'>
          <Image className="w-full object-cover h-56 mx-auto rounded-t-2xl" source={require("./assets/image/dummy.jpeg")}/>
          <View className="p-2 bg-teal-100">
            <Text className="text-4xl my-4 font-bold">Falcon 1</Text>
            <Text>
            The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
            </Text>
            <TouchableOpacity className="bg-teal-400 py-2 my-2 rounded-lg">
              <Text className="r text-white font-bold text-center">RESERVE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='w-11/12 mx-auto rounded-t-2xl mb-4'>
          <Image className="w-full object-cover h-56 mx-auto rounded-t-2xl" source={require("./assets/image/dummy.jpeg")}/>
          <View className="p-2 bg-teal-100">
            <Text className="text-4xl my-4 font-bold">Falcon 1</Text>
            <Text>
            The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
            </Text>
            <TouchableOpacity className="bg-teal-400 py-2 my-2 rounded-lg">
              <Text className="r text-white font-bold text-center">RESERVE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='w-11/12 mx-auto rounded-t-2xl mb-4'>
          <Image className="w-full object-cover h-56 mx-auto rounded-t-2xl" source={require("./assets/image/dummy.jpeg")}/>
          <View className="p-2 bg-teal-100">
            <Text className="text-4xl my-4 font-bold">Falcon 1</Text>
            <Text>
            The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
            </Text>
            <TouchableOpacity className="bg-teal-400 py-2 my-2 rounded-lg">
              <Text className="r text-white font-bold text-center">RESERVE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='w-11/12 mx-auto rounded-t-2xl mb-4'>
          <Image className="w-full object-cover h-56 mx-auto rounded-t-2xl" source={require("./assets/image/dummy.jpeg")}/>
          <View className="p-2 bg-teal-100">
            <Text className="text-4xl my-4 font-bold">Falcon 1</Text>
            <Text>
            The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
            </Text>
            <TouchableOpacity className="bg-teal-400 py-2 my-2 rounded-lg">
              <Text className="r text-white font-bold text-center">RESERVE</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </SafeAreaView>
    </ScrollView>
  );
}
