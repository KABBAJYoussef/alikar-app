import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { CheckIcon } from "react-native-heroicons/outline";

const CheckBox = ({ id, selected, option, setSelectedResponse }) => {
  return (
    <View className="flex-row space-x-2 mb-2 mt-2">
      <TouchableOpacity
        className={`w-6 h-6 rounded-md justify-center items-center ${
          selected ? "bg-green-700" : "bg-gray-400"
        }`}
        onPress={() => setSelectedResponse(id)}
      >
        {selected && <CheckIcon size={14} color="white" />}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedResponse(id)}>
        <Text className={`${
          selected ? "text-green-700" : "text-gray-600"
        }`}>{option}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckBox;
