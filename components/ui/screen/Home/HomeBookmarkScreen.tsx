import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper";
import DisplayTypeWidget from "../Share/DisplayTypeWidget";
import ProductGridViewWidget from "./Widget/ProductGridViewWidget";
import ProductListViewWidget from "./Widget/ProductListViewWidget";

export default function HomeBookmarkScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isGridEnabled, setisGridEnabled] = useState(true);
    
    return (
        <View style={styles.container }> 
            <Searchbar 
                  placeholder="Search"
                  onChangeText={setSearchQuery}
                  value={searchQuery}
             />
                <DisplayTypeWidget callback={(state: boolean) => setisGridEnabled(state)} />

                {isGridEnabled ? (
                    <ScrollView 
                    showsVerticalScrollIndicator={false}
                   >
                      <ProductGridViewWidget/>
                      <ProductGridViewWidget/>
                      <ProductGridViewWidget/>
                      <ProductGridViewWidget/>
                      <ProductGridViewWidget/>
                    </ScrollView> 

                ) : <ScrollView 
                showsVerticalScrollIndicator={false}
               >
                  <ProductListViewWidget/>
                  <ProductListViewWidget/>
                  <ProductListViewWidget/>
                  <ProductListViewWidget/>
                  <ProductListViewWidget/>
                  <ProductListViewWidget/>
                  
                </ScrollView> }

               
                
            
            
        
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