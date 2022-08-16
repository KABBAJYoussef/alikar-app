import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import Header from "../components/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const ScoreScreen = () => {
  const navigation = useNavigation();
  const {
    params: { lost, score, totalQuestions, resetQuiz },
  } = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const redirectQuestionScreen = () => {
    resetQuiz();
    navigation.navigate("questions", {});
  };

  return (
    <SafeAreaView className="flex-1">
      <Header showInfoContainer={false} />
      <View className="flex-1 bg-white justify-center items-center">
        <View
          className="items-center justify-center ml-4 mr-4 py-5 w-[90%] h-auto border-0"
          style={{ elevation: 5 }}
        >
          <Text className="font-bold text-lg">
            {" "}
            {score >= totalQuestions / 2 ? "Félicitation !" : "Oups !"}{" "}
          </Text>
          <Text className="mb-3">Voici votre score</Text>
          <View className="bg-blue-300 items-center justify-center rounded-md h-10 w-20">
            <Text className="font-bold text-lg text-blue-900">
              {score}/{totalQuestions}
            </Text>
          </View>
          <TouchableOpacity
            className="mt-4 w-24 h-6 bg-blue-400 rounded-full justify-center items-center"
            onPress={redirectQuestionScreen}
          >
            <Text className="font-medium text-white text-xs">
              Refaire le test
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ScoreScreen;
