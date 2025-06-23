import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper";
import DisplayTypeWidget from "../Share/DisplayTypeWidget";
import CartGridView from "./Widget/CartGridView";
import CartListView from "./Widget/CartListView";

export default function HomeProductScreen() {
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
                      <CartGridView/>
                      <CartGridView/>
                    </ScrollView> 

                ) : <ScrollView 
                showsVerticalScrollIndicator={false}
               >
                  <CartListView/>
                  <CartListView/>
                  <CartListView/>
                  
                  
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