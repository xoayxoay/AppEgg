import React from 'react';
import { images } from 'assets/images';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { decrementTurn, setEggStatus } from './actions';
import dragons from './data/dragons';
import { makeSelectEggStatus } from './selectors';
import { homeStyle, eggStyle } from './style';

function Egg({ dispatch, eggStatus }) {
  const onSetChangeEgg = () => {
    if (eggStatus === 3) {
      dispatch(decrementTurn(1));
    }
    dispatch(setEggStatus(eggStatus - 1 < 0 ? 3 : eggStatus - 1));
  };

  const RenderEggImage = () => {
    let eggImage = images.home.eggOriginal;
    switch (eggStatus) {
      case 2:
        eggImage = images.home.eggCracked;
        break;
      case 1:
        eggImage = images.home.eggBroken;
        break;
      case 0:
        eggImage = dragons[Math.floor(Math.random() * dragons.length)]?.img;
        break;
      default:
        eggImage = images.home.eggOriginal;
        break;
    }
    return <Image source={eggImage} style={eggStyle.eggs} />;
  };

  return (
    <>
      <View style={homeStyle.containerTutorial}>
        {eggStatus === 3 ? (
          <Image style={homeStyle.tutorial} source={images.home.tutorial} />
        ) : null}
      </View>
      <View style={homeStyle.container}>
        <TouchableOpacity onPress={onSetChangeEgg} onLongPress={onSetChangeEgg}>
          <RenderEggImage />
        </TouchableOpacity>
      </View>
    </>
  );
}

Egg.propTypes = {
  dispatch: PropTypes.func,
  eggStatus: PropTypes.oneOf([3, 2, 1, 0]),
};

const mapStateToProps = createStructuredSelector({
  eggStatus: makeSelectEggStatus(),
});

export default connect(mapStateToProps)(Egg);
