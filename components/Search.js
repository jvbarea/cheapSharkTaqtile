import React, { useEffect, useState } from "react";

import {
  Text,
  TextInput,
  View,
  ActivityIndicator,
  Button,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";

import styles from "./cardStyles";
import { GameCard } from "./GameCard";

const website = "https://www.cheapshark.com/api/1.0/";
const steamWebsite = "https://store.steampowered.com/app/";

export function Search() {
  const [isLoading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [minValue, setminValue] = useState("");
  const [maxValue, setmaxValue] = useState("");
  const [games, setGames] = useState([]);

  const getGames = async (title, lowerPrice, upperPrice) => {
    const storeID = 1;
    var urlLink = `${website}deals?storeID=${storeID}`;
    try {
      if (title != "deals") {
        urlLink += `&title=${title}`;
      }
      if (lowerPrice > 0) {
        urlLink += `&lowerPrice=${lowerPrice}`;
      }
      if (upperPrice > 0) {
        urlLink += `&upperPrice=${upperPrice}`;
      }

      const response = await fetch(urlLink);
      const json = await response.json();
      if (json == "") {
        console.log("É nulo");
        setGames("noGamesFound");
      } else {
        setGames(json);
      }
      //   console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    getGames(inputValue.toString(), minValue, maxValue);
  };

  const redirectSteam = (gameID) => {
    var steamLink = `${steamWebsite}${gameID}`;
    console.log(steamLink);
    Linking.openURL(steamLink);
  };

  useEffect(() => {
    getGames("deals", minValue, maxValue);
  }, []);

  return (
    <View style={styles.layout}>
      <View>
        <View>
          <TextInput
            placeholder="Buscar por títulos"
            value={inputValue}
            style={styles.inputStyle}
            onChangeText={(text) => setInputValue(text)}
            onSubmitEditing={handleSubmit}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.minStyle}>
            <Text>MENOR PREÇO:</Text>
            <TextInput
              placeholder="Valor Mínimo"
              value={minValue}
              style={styles.minMaxStyle}
              onChangeText={(text) => setminValue(text)}
            />
          </View>
          <View style={styles.maxStyle}>
            <Text>MAIOR PREÇO:</Text>
            <TextInput
              placeholder="Valor Máximo"
              value={maxValue}
              style={styles.minMaxStyle}
              onChangeText={(text) => setmaxValue(text)}
            />
          </View>
        </View>
        <View>
          <Button
            color={"#F6C224"}
            style={styles.button}
            title="Mostrar Resultados"
            onPress={handleSubmit}
          />
        </View>
      </View>
      <View style={styles.list}>
        {isLoading ? (
          <ActivityIndicator />
        ) : games == "noGamesFound" ? (
          <Text style={styles.empty}>Sem resultados</Text>
        ) : (
          <FlatList
            data={games}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => redirectSteam(item.steamAppID)}>
                <GameCard
                  gameID={item.gameID}
                  title={item.title}
                  thumb={item.thumb}
                  metacriticScore={item.metacriticScore}
                  normalPrice={item.normalPrice}
                  salePrice={item.salePrice}
                />
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
}
