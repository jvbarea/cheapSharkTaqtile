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
      // Verifica se há um titulo de interesse
      if (title != "deals") {
        urlLink += `&title=${title}`;
      }
      // Verifica se há restrições por preço
      if (lowerPrice > 0) {
        urlLink += `&lowerPrice=${lowerPrice}`;
      }
      if (upperPrice > 0) {
        urlLink += `&upperPrice=${upperPrice}`;
      }
      // // Ordenar por Descontos, Titulo, Preco ou nota no Metacritic
      // if (sortBy == "Maiores Descontos") {
      // }
      // if (sortBy == "Titulo") {
      //   urlLink += `$sortBy=Title`;
      // }
      // if (sortBy == "Preco") {
      //   urlLink += `$sortBy=Price`;
      // }
      // if (sortBy == "Metacritic") {
      //   urlLink += `$sortBy=Metacritic`;
      // }
      // // Crescente ou Decrescente
      // if (order == "crescente") {
      //   urlLink += `$desc=0`;
      // }
      // if (order == "decrescente") {
      //   urlLink += `$desc=1`;
      // }
      // Faz a requisicao a API
      const response = await fetch(urlLink);
      // 'converte' pra Json
      const json = await response.json();
      // Handling empty Json(Busca vazia)
      if (json == "") {
        console.log("É nulo");
        setGames("noGamesFound");
      } else {
        setGames(json);
      }
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
    // console.log(steamLink);
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
            selectTextOnFocus
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
              onSubmitEditing={handleSubmit}
              selectTextOnFocus
            />
          </View>
          <View style={styles.maxStyle}>
            <Text>MAIOR PREÇO:</Text>
            <TextInput
              placeholder="Valor Máximo"
              value={maxValue}
              style={styles.minMaxStyle}
              onChangeText={(text) => setmaxValue(text)}
              onSubmitEditing={handleSubmit}
              selectTextOnFocus
            />
          </View>
        </View>
        {/* <View style={{flexDirection:'row',justifyContent: 'space-around'}}>
          <Text>Orderby</Text>
          <Text>Ordem</Text>
        </View> */}
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
