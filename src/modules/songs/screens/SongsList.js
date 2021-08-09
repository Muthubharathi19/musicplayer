import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Image,
    FlatList,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import appTheme from '../../../../constants/theme';
const songs = [
    {
        id: 1,
        title: 'Alayae sitralaye...',
        singer: 'AR Rahman, Sweetha Menon',
        duration: '04:23',
        songImage: require('../../../../././assets/songImage.png'),
        url: require('../../../../assets/songs/AnbeUnnalManam.mp3'),

    },
    {
        id: 2,
        title: 'Anbae unal manam...',
        singer: 'AR Rahman, Sweetha Menon',
        duration: '04:23',
        songImage: require('../../../../././assets/Aadhavan.gif'),
        url: require('../../../../assets/songs/AnbeUnnalManam.mp3'),
    },
    {
        id: 3,
        title: 'Aanantha yaalai...',
        singer: 'AR Rahman, Sweetha Menon',
        duration: '04:23',
        songImage: require('../../../../././assets/aanandhayaalai.jpg'),
        url: require('../../../../assets/songs/aanandha.mp3'),
    },
    {
        id: 4,
        title: 'Palapalakura pagala ne...',
        singer: 'AR Rahman, Sweetha Menon',
        duration: '04:23',
        songImage: require('../../../../././assets/Ayan.jpg'),
        url: require('../../../../assets/songs/pala.mp3'), 
    },
    {
        id: 5,
        title: 'Alayae sitralaye...',
        singer: 'AR Rahman, Sweetha Menon',
        duration: '04:23',
        songImage: require('../../../../././assets/songImage.png'),
        url: require('../../../../assets/songs/AnbeUnnalManam.mp3'),

    },
    {
        id: 6,
        title: 'Anbae unal manam...',
        singer: 'AR Rahman, Sweetha Menon',
        duration: '04:23',
        songImage: require('../../../../././assets/Aadhavan.gif'),
        url: require('../../../../assets/songs/AnbeUnnalManam.mp3'),

    },
    {
        id: 7,
        title: 'Aanantha yaalai...',
        singer: 'AR Rahman, Sweetha Menon',
        duration: '04:23',
        songImage: require('../../../../././assets/aanandhayaalai.jpg'),
        url: require('../../../../assets/songs/aanandha.mp3'),

    },
]
function currentSong( id, title, singer, duration, songImage,url, navigation){
    navigation.navigate('IndividualSong',
    {
        id: id,
        url: url ,
        title: title,
        singer:singer,
        duration: duration,
        songImage: songImage
      }
    )
}
const Item = ({ id, title, singer, duration, songImage,url, navigation }) => (
    <TouchableOpacity style={styles.songCard}  onPress={() => currentSong( id, title, singer, duration, songImage,url, navigation)}>
        <View>
            <Image
                style={styles.image}
                source={songImage}
            />
        </View>
        <View style={{ flexDirection: 'column', flex: 1, marginLeft: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.songTitle}>{title}</Text>
                <Text style={styles.duration}>{duration}</Text>
            </View>
            <View>
                <Text style={styles.singers}>{singer}</Text>
            </View>
        </View>
    </TouchableOpacity>
);
const SongsList = ({navigation}) => {
    const renderItem = ({ item }) => (
        <Item title={item.title} id={item.id} url={item.url} singer={item.singer} duration={item.duration} songImage={item.songImage} navigation={navigation} />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.nameText}>Hello, Muthu!</Text>
            <Text style={styles.subText}>Enjoy your favourite music</Text>
            {/* <View style={{flexDirection:'row', alignItems:'center'}}> */}
                
            <TextInput style={styles.input} placeholder="Looking for song? enter here" />
            {/* <Image
                 style={{width:20,height:20,position:'absolute', marginLeft:40}}
                source={ require('../../../../././assets/image2.png')}
                /> */}
            {/* </View> */}
            <View>
                <Text style={styles.categoryTitle}>From your library</Text>
                <FlatList
                    data={songs}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}                    
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: appTheme.COLORS.primary
    },
    nameText: {
        color: appTheme.COLORS.secondary,
        ...appTheme.FONTS.h1,
        paddingTop: appTheme.SIZES.padding,
        paddingLeft: appTheme.SIZES.padding,
        fontWeight: '700'
    },
    subText: {
        color: appTheme.COLORS.secondary,
        ...appTheme.FONTS.body3,
        paddingTop: 10,
        paddingLeft: appTheme.SIZES.padding
    },
    input: {
        // width: '85%',
        backgroundColor: appTheme.COLORS.secondary,
        margin: appTheme.SIZES.padding,
        borderRadius: appTheme.SIZES.radius,
        paddingLeft: appTheme.SIZES.padding
    },
    categoryTitle: {
        color: appTheme.COLORS.secondary,
        ...appTheme.FONTS.h2,
        paddingTop: appTheme.SIZES.padding,
        paddingLeft: appTheme.SIZES.padding,
        fontWeight: '700'

    },
    songCard: {
        color: appTheme.COLORS.secondary,
        borderBottomColor: '#a1a1a1',
        borderBottomWidth: 0.2,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        padding: appTheme.SIZES.padding
    },
    songTitle: {
        color: appTheme.COLORS.secondary,
        ...appTheme.FONTS.h3,
    },
    duration: {
        color: appTheme.COLORS.secondary,
        ...appTheme.FONTS.body4
    },
    singers: {
        color: '#a1a1a1',
        ...appTheme.FONTS.body4,
        marginVertical: 3
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: appTheme.SIZES.radius,

    }
});

export default SongsList