import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import CheckBox from "../components/CheckBox";
import QUESTIONS from "../data/questions";
import useTimer from "../utils/useTimer";

const QuestionScreen = () => {
  const [selectedResponse, setSelectedResponse] = useState(-1);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [questions, setQuestions] = useState(QUESTIONS);
  const [question, setQuestion] = useState(0);
  const { time, startTimer, stopTimer, changeTimer } = useTimer(
    questions[question].time
  );
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    changeTimer(questions[question].time);
  }, [question]);

  useEffect(() => {
    if (time === 0) {
      generateQuestion();
      changeTimer(questions[question].time);
    }
  }, [time]);

  const resetQuiz = () => {
    setQuestion(0);
    setSelectedResponse(-1);
    setCorrectAnswers(0);
  };

  const generateQuestion = () => {
    if (question + 1 <= questions.length - 1) {
      if (time === 0) {
        if (selectedResponse !== -1) {
          if (questions[question].answers[selectedResponse].correct)
            setCorrectAnswers(correctAnswers + 1);
        }
        setQuestion(question + 1);
        setSelectedResponse(-1);
      } else {
        if (selectedResponse !== -1) {
          setQuestion(question + 1);
          setSelectedResponse(-1);

          if (questions[question].answers[selectedResponse].correct)
            setCorrectAnswers(correctAnswers + 1);
        }
      }
    } else {
      let correctAnswer = correctAnswers;
      if (selectedResponse !== -1) {
        if (questions[question].answers[selectedResponse].correct) {
          setCorrectAnswers(correctAnswers + 1);
          correctAnswer++;
        }
      }

      navigation.navigate("score", {
        lost: false,
        score: correctAnswer,
        totalQuestions: questions.length,
        resetQuiz: resetQuiz,
      });
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-white">
        <Header
          question={question + 1}
          totalQuestions={questions.length}
          time={time}
          showInfoContainer={true}
        />
        <View className="flex-1 items-center justify-center p-6">
          <Text className="font-bold text-lg w-full text-left">
            Question {question + 1}
          </Text>
          <Text className="w-full mb-3">{questions[question].label}</Text>
          <View className="w-full">
            {questions[question].answers.map((answer, id) => (
              <CheckBox
                key={id}
                id={id}
                selected={selectedResponse === id}
                setSelectedResponse={setSelectedResponse}
                option={answer.label}
              />
            ))}
          </View>

          <TouchableOpacity
            className="mt-10 w-48 h-10 bg-blue-400 rounded-full justify-center items-center"
            onPress={generateQuestion}
          >
            <Text className="font-semibold text-white">Suivant</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default QuestionScreen;
