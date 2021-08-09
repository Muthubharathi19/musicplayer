import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import Slider from '@react-native-community/slider'
import appTheme from '../../../../constants/theme';

const IndividualSong = ({ route }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const { id, title, url, songImage, singer, duration } = route.params;
    const selectedSongs = {
        id: id,
        url: url
    }


    // const start = async () => {
    //     console.log(title)
    //     // Set up the player
    //     await TrackPlayer.setupPlayer();
    //     // Add a track to the queue
    //     await TrackPlayer.add({
    //         id: id,
    //         url:url,
    //         title: title,
    //         songImage: songImage,
    //         singer: singer,
    //         duration: duration

    //     });
    //     setIsPlaying(!isPlaying)
    //     // Start playing it
    //     if (isPlaying){
    //         await  TrackPlayer.pause();
    //     }
    //    else{
    //         await TrackPlayer.play();
    //    }
    // };
    const songs = [
        {
            id: 1,
            title: 'Alayae sitralaye...',
            singer: 'AR Rahman, Sweetha Menon',
            duration: '04:23',
            songImage: require('../../../../././assets/songImage.png'),
            url: require('../../../../assets/songs/Alayae.mp3'),
    
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

    TrackPlayer.updateOptions({
        stopWithApp: false,
        capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
        compactCapabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE]
    });
    const nextSong = async () => {
        await TrackPlayer.skipToNext();
    }
    const setUpTrackPlayer = async () => {

        try {
            await TrackPlayer.setupPlayer();
            await TrackPlayer.add(songs)

            let trackIndex = await TrackPlayer.getCurrentTrack();
            let trackObject = await TrackPlayer.getTrack(trackIndex);
            console.log(`Title: ${trackObject.id}`);

            setIsPlaying(!isPlaying)
            // Start playing it
            if (isPlaying) {
                await TrackPlayer.pause();
            }
            else {
                await TrackPlayer.play();
            }
        }
        catch (e) {
            console.log(e)
        }

    }
    useEffect(() => {
        setUpTrackPlayer();

        return () => TrackPlayer.destroy();
    }, [])
    return (
        <View style={styles.container}>
            <Image
                style={styles.songImage}
                source={songImage}
            />
            <Text style={styles.songTitle}>{title}</Text>
            <Text style={styles.singers}>{singer}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 300, marginTop: appTheme.SIZES.padding2 }}>
                <Text style={styles.duration}>02:50</Text>
                <Text style={styles.duration}>{duration}</Text>
            </View>
            <View>
                <Slider
                    style={{ width: 300, marginVertical: 20 }}
                    maximumValue={100}
                    minimumValue={40}
                    minimumTrackTintColor="#a1a1a1"
                    maximumTrackTintColor="#a1a1a1"
                    step={1}

                //   value={sliderValue}
                // //   onValueChange={
                // //     (sliderValue) => setSliderValue(sliderValue)
                //   }
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: 250, margin: appTheme.SIZES.padding2 }}>
                <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
                    <Image
                        style={styles.icon}
                        source={require('../../../../././assets/icons/next.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setUpTrackPlayer()}>
                    {isPlaying ?
                        <Image
                            style={styles.icon}
                            source={require('../../../../././assets/icons/pause.png')}
                        /> :
                        <Image
                            style={styles.icon}
                            source={require('../../../../././assets/icons/play.png')}
                        />
                    }

                </TouchableOpacity>
                <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
                    <Image
                        style={styles.icon}
                        source={require('../../../../././assets/icons/nextone.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        backgroundColor: appTheme.COLORS.primary
    },
    songImage: {
        width: 300,
        height: 300,
        margin: appTheme.SIZES.padding,
        borderRadius: appTheme.SIZES.radius
    },
    songTitle: {
        color: appTheme.COLORS.secondary,
        ...appTheme.FONTS.h2,
    },
    singers: {
        color: '#a1a1a1',
        ...appTheme.FONTS.body4,
        marginVertical: 3
    },
    duration: {
        color: appTheme.COLORS.secondary,
        ...appTheme.FONTS.body4
    },
    icon: {
        width: 30,
        height: 30
    }
});

export default IndividualSong;