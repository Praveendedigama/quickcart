import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper";
import DisplayTypeWidget from "../Share/DisplayTypeWidget";
import ProductGridViewWidget from "./Widget/ProductGridViewWidget";

export default function HomeProductScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <View style={styles.container }> 
            <Searchbar
                  placeholder="Search"
                  onChangeText={setSearchQuery}
                  value={searchQuery}
             />
                <DisplayTypeWidget/>

               <ScrollView 
                showsVerticalScrollIndicator={false}
               >
                  <ProductGridViewWidget/>
                  <ProductGridViewWidget/>
                  <ProductGridViewWidget/>
                  <ProductGridViewWidget/>
                  <ProductGridViewWidget/>
                </ScrollView> 
                
            
            
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,    
        padding: 16,
        backgroundColor: '#fff',
    
        
    }


})