import React from "react";
import { View, Image, Text } from "react-native";
import dynamicStyles from "./styles";
import AppIntroSlider from "react-native-app-intro-slider";

const OnboardingScreen = ({ slides }) => {
  const styles = dynamicStyles();

  const processedSlides = slides.map((slide, index) => {
    return {
      key: `${index}`,
      text: slide.description,
      title: slide.title,
      image: slide.icon
    }
  });

  const _renderItem = ({item, dimensions}) => (
    <View style={[styles.container, dimensions]}>
      <Image
        style={styles.image}
        source={item.image}
        size={100}
        color="white"
      />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <AppIntroSlider
      data={processedSlides}
      slides={processedSlides}
      renderItem={_renderItem}
      showSkipButton={true}
      showDoneButton={true}
      showNextButton={true}
    />
  );
}

export default OnboardingScreen;