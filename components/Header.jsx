import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { UserIcon } from "react-native-heroicons/solid";
import InfoContainer from "./InfoContainer";

const Header = ({ question, totalQuestions, time, showInfoContainer }) => {
  return (
    <View
      className="w-full min-h-[180px] bg-[#45aaf2] rounded-b-[30px] justify-end py-4 px-8"
      style={{
        elevation: 12,
      }}
    >
      <TouchableOpacity className="absolute right-8 top-9 w-11 h-11 bg-gray-300 justify-center items-center rounded-lg">
        <UserIcon size={30} color="black" />
      </TouchableOpacity>
      <View className="mb-6">
        <Text className="font-extrabold text-lg text-white">Hi, User name</Text>
        <Text>Lorem ipsum side dolores</Text>
      </View>
      {showInfoContainer === true ? (
        <InfoContainer
          question={question}
          totalQuestions={totalQuestions}
          times={time}
        />
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default Header;
