// StyleSheet used in the Search.js and GameCards.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "#E0E0E0",
  },
  image: {
    flex: 1,
    width: 100,
    height: 40,
    alignItems: "flex-start",
    borderRadius: 4,
    paddingLeft: 20,
    marginLeft: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },

  text: {
    flex: 2,
    fontSize: 14,
    fontWeight: "bold",
    paddingHorizontal: 8,
    flexDirection: "column",
  },

  price: {
    flex: 0.7,
    fontSize: 12,
    alignSelf: "flex-end",
    flexDirection: "column",
  },

  discountPrice: {
    fontSize: 12,
  },

  normalPrice: {
    fontSize: 10,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },

  metacriticPos: {
    fontSize: 12,
    width: 28,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "green",
    borderRadius: 10,
  },

  metacriticMed: {
    fontSize: 12,
    width: 28,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    backgroundColor: "#F6C224",
    borderRadius: 10,
  },

  metacriticLow: {
    fontSize: 12,
    width: 28,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    backgroundColor: "red",
    borderRadius: 10,
  },
  // verde > 74 - 74 > amarelo > 49 - 49 > vermelho

  card: {
    width: "96%",
    height: 50,
    borderRadius: 6,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 6,
    marginHorizontal: "2%",
  },
  cardElevated: {
    backgroundColor: "#FFFFFF",
    elevation: 4,
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
  cardImage: {
    height: 120,
    width: "100%",
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },

  inputStyle: {
    height: 40,
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
  },

  minStyle: {
    flex: 1,
    width: "100%",
    alignContent: "flex-start",
  },

  maxStyle: {
    flex: 1,
    width: "100%",
    alignContent: "flex-start",
  },

  minMaxStyle: {
    backgroundColor: "#FFFFFF",
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    width: "80%",
  },
  empty: {
    width: "100%",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
  },
  layout: {
    flex: 1,
    flexDirection: "column",
    padding: 4,
    backgroundColor: "#E0E0E0",
  },
});

export default styles;
