import { navigate } from "expo-router/build/global-state/routing";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "react-native-paper";
import ProductListViewWidget from "./Home/Widget/ProductListViewWidget";
import ProductReviewWidget from "./Home/Widget/ProductReviewWidget";


export default function HomeProductScreen() {
    
    const productImages=[
        {uri:'https://i5.walmartimages.com/seo/Walmart-Family-Mobile-Apple-iPhone-12-5G-64GB-Black-Prepaid-Smartphone-Locked-to-Walmart-Family-Mobile_66b2853b-6cb5-4f20-b73a-b60b39b6de44.6b3bf83a920058a47342318925f1dc2b.jpeg'},
        {uri:'https://media.very.co.uk/i/very/W57JY_SQ1_0000000063_PINK_SLf?$pdp_300x400_x2$&fmt=jpg'},
        {uri:'https://acdn-us.mitiendanube.com/stores/001/097/819/products/445317-product-0-i-638615209206725457-81a0d6d39e238edb9f17298233702277-1024-1024.png'},
    ];
    const [primaryImage, setprimaryImage] = useState(productImages[0].uri);
    const [status, setStatus] = useState(true);

    return (
        <View style={styles.container }> 
            <View style={styles.top}> 
                <View style={styles.imagebg}>
                <Image 
                  source={{uri: primaryImage}}
                  style={styles.image}
                  resizeMode="contain"    
                /> 
                </View>
                <View style={styles.productImageList}>
                    {productImages.map((item, index) => (
                        <TouchableOpacity style={{width: 80, padding: 4,height:60,borderWidth:1,marginTop:10 , borderRadius:5}} key={index} 
                        onPress={() => setprimaryImage(item.uri)}
                        >
                            <Image 
                                source={{uri: item.uri}}
                                style={styles.displayImage}
                                resizeMode="contain"    
                            /> 
                        </TouchableOpacity>
                    
                    ))}

                
            </View>    


            </View>

            <View style={{}}>
                <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>
                    Apple iPhone 12 5G 64GB Black 
                </Text>
                <Text style={{fontSize: 16}}>
                    description of the product goes here. It can be a long text that describes the features and specifications of the product in detail.
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#f0753c'}}>$599.99 </Text>
                <Text style={{fontSize:18,fontWeight: 'bold',textDecorationLine:"line-through",marginLeft:10  }}>$699.99 </Text>
                </View > 
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'flex-end'}}>
                    

                    <TouchableOpacity style={styles.btn}>
                        <View style={{}}>
                            
                            <Icon
                                size={24}
                                source={'cart'}
                                 
                            />
                        </View>    
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <Text>Buy Now</Text>
                    </TouchableOpacity>
                </View>        


                 <View > 
                    
                 </View>  

            </View>

            <View style={styles.tabContainer}>
                <TouchableOpacity style={styles.tab} onPress={() => setStatus(true)}>
                    <Text style={[styles.tabText, status && styles.activeTabText]}>Review</Text>
                    {status && <View style={styles.tabUnderline} />}
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab} onPress={() => setStatus(false)}>
                    <Text style={[styles.tabText, !status && styles.activeTabText]}>Recommended</Text>
                    {!status && <View style={styles.tabUnderline} />}
                </TouchableOpacity>
            </View>
            {
                        status ?
                        (
                            <ScrollView>
                                <ProductReviewWidget/>
                                <ProductReviewWidget/>
                                <ProductReviewWidget/>
                                <ProductReviewWidget/>
                                <ProductReviewWidget/>
                            </ScrollView>
                        
                        )
                        :
                        (
                            <ScrollView>
                                <ProductListViewWidget navigation={navigate} />
                                <ProductListViewWidget navigation={navigate} />
                                <ProductListViewWidget navigation={navigate} />
                            </ScrollView>
                            
                        )
                    }





        </View>
            
                
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
        borderBottomWidth: 1,
        borderColor: '#ddd',
      },
      tab: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 12,
      },
      tabText: {
        fontSize: 16,
        color: '#888',
      },
      activeTabText: {
        fontWeight: 'bold',
        color: '#f0753c',
      },
      tabUnderline: {
        height: 3,
        width: '60%',
        backgroundColor: '#f0753c',
        marginTop: 6,
        borderRadius: 10,
      },
      
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f9f9f9',
    },
    top: {
      width: '100%',
      borderBottomWidth: 1,
      borderColor: '#e0e0e0',
      paddingBottom: 16,
      marginBottom: 16,
    },
    imagebg: {
      backgroundColor: '#f0f0f0',
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 12,
    },
    image: {
      width: '100%',
      height: 200,
    },
    productImageList: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 12,
      paddingHorizontal: 6,
    },
    displayImage: {
      width: '100%',
      height: '100%',
      borderRadius: 8,
    },
    btn: {
      backgroundColor: '#f0753c',
      marginLeft: 10,
      height: 30,
      width: 100,
      paddingHorizontal: 10,
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    bottomBtnContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 16,
    },
    bottomBtn: {
      width: '40%',
      paddingVertical: 10,
      marginHorizontal: 8,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: '#ccc',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
  });
  