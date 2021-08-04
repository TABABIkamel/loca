import React, { useState, useEffect } from 'react'
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, theme, Text } from "galio-framework";
import { Card, Button } from "../components";
import articles from "../constants/articles";
const { width } = Dimensions.get("screen");
import axios from 'axios';

export default function Home() {
  const obj=[{
    prenom: 'TABABI kamel7',
    imgProfil: require("../assets/imgs/image2.jpg"),
    numTel: '0000000',
  }];
  const [data,setData]=useState(obj);
  useEffect(()=> {
    console.log('---------');   
      axios.get('http://192.168.1.16:8083/oauth/getAllPersonelAgence/5').then((response)=>{
       let donne =response.data
       alert(donne[0].agence.id)
        setData(donne) 
      }).catch((err)=>{ 
        alert(JSON.stringify(err.message))  
      }) 
  },[]) 
    function renderArticles(){
        return (
  
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.articles}
          >  
            <Block flex>
              {data ? data.map((particular,index)=>{
                return <Card key={index} item={particular} idAgence='5' horizontal />
              }):<Text>No paticular found</Text>}
            {/* <Card item={data[0]} horizontal /> */}
            {/* <Card item={articles[3]} horizontal /> */}
            </Block>
          </ScrollView> 
        
        );
       
      };
    return (
        <Block flex center style={styles.home}>
        {renderArticles()}
        </Block>
    )
}

const styles = StyleSheet.create({
    home: {
      width: width
    },
    articles: {
      width: width - theme.SIZES.BASE * 2,
      paddingVertical: theme.SIZES.BASE,
      paddingHorizontal: 2,
      fontFamily: 'montserrat-regular'
  
    },
    search: {
      height: 48,
      width: width - 32,
      marginHorizontal: 16,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: nowTheme.COLORS.BORDER
    }
  });
