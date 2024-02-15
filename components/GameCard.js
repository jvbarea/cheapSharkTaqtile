import React from "react";

import {
  Text,
  Image,
  View,
} from "react-native";

import styles from "./projectStyles";

export function GameCard(props) {
  return (
    <View key={props.gameID} style={[styles.card, styles.cardElevated]}>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 4,
          marginTop: 4,
        }}
      >
        <Image
          source={{
            uri: props.thumb,
          }}
          style={styles.image}
        />
        <View style={styles.text}>
          <Text numberOfLines={1} style={styles.title}>
            {props.title}
          </Text>
          <Text
            numberOfLines={1}
            style={[
              props.metacriticScore < 49 && styles.metacriticLow,
              props.metacriticScore > 49 && styles.metacriticMed,
              props.metacriticScore > 74 && styles.metacriticPos,
            ]}
          >
            {props.metacriticScore}
          </Text>
        </View>
        <View style={styles.price}>
          <Text numberOfLines={1} style={styles.discountPrice}>
            US${props.salePrice}
          </Text>
          <Text numberOfLines={1} style={styles.normalPrice}>
            {props.salePrice == props.normalPrice
              ? null
              : `US$${props.normalPrice}`}
          </Text>
        </View>
      </View>
    </View>
  );
}
