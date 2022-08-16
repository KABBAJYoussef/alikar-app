import { View, Text } from "react-native";
import React, { useEffect } from "react";
import useTimer from "../utils/useTimer";

const InfoContainer = ({ question, totalQuestions, times }) => {
  return (
    <View
      className="w-full h-auto py-3 bg-white rounded-lg absolute left-8 -bottom-14 px-6 flex-row justify-between items-center"
      style={{
        elevation: 7,
      }}
    >
      <View className="space-y-1">
        <Text>Question</Text>
        <View className="bg-blue-300 items-center justify-center rounded-md h-10">
          <Text className="font-bold text-lg text-blue-900">
            {question}/{totalQuestions}
          </Text>
        </View>
      </View>
      <View className="space-y-1">
        <Text>Temps écoulé</Text>
        <View className="flex-row justify-between gap-2">
          <View className="flex-1 bg-blue-300 items-center justify-center rounded-md h-10 w-10">
            <Text className="font-bold text-lg text-blue-900">
              {parseInt(times / 60)}
            </Text>
          </View>
          <View className="bg-blue-300 items-center justify-center rounded-md h-10 w-10">
            <Text className="text-xs font-semibold text-orange-400 absolute top-0">
              {times % 60}
            </Text>
            <Text className="font-bold text-lg text-orange-400">
              {times % 60}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InfoContainer;
