import { images } from 'assets/images';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { useInjectReducer } from 'redux-injectors';
import { createStructuredSelector } from 'reselect';
import Buttons from './Buttons';
import reducer from './reducer';
import { makeSelectTurn } from './selectors';
import { homeStyle, layoutStyle } from './style';
import Egg from './Egg';

const key = 'App';

function App({ turn }) {
  useInjectReducer({ key, reducer });
  const [isShowButtons, setShowButtons] = useState(false);

  const onSetShowButtons = () => {
    setShowButtons(!isShowButtons);
  };

  return (
    <ImageBackground
      source={images.home.background}
      style={layoutStyle.background}>
      <View>
        <View style={homeStyle.header}>
          <Image style={homeStyle.cursor} source={images.home.cursorIcon} />
          <Text style={homeStyle.textTitle}>{`YOUR TAP ${turn}`}</Text>
        </View>
        <View style={homeStyle.container}>
          <TouchableOpacity
            onPress={onSetShowButtons}
            onLongPress={onSetShowButtons}>
            <Image style={homeStyle.cart} source={images.home.cart} />
          </TouchableOpacity>
        </View>
        {isShowButtons ? <Buttons /> : <Egg />}
      </View>
    </ImageBackground>
  );
}

App.propTypes = {
  turn: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
});

export default connect(mapStateToProps)(App);
