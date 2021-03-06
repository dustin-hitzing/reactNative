import React from 'react';
import {View, Text, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({album}) => {

    const {title, artist, thmubnail_image} = album;

    return (
        <Card>
            <CardSection>
                <View>
                    <Image 
                    source={{uri: thumbnail_image}} 
                    style={style.thumbnailStyle}
                    />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    }
}

export default AlbumDetail;