import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import { ToggleIcon } from './'

const backgroundColor = 'transparent'

const styles = StyleSheet.create({
  container: {
    height: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 12,
  },
})

const TopBar = (props) => {
  const {
    logo,
    more,
    title,
    theme,
    onMorePress,
    onClosePress,
  } = props
  return (
    <LinearGradient colors={['rgba(0,0,0,0.75)', 'rgba(0,0,0,0)']} style={styles.container}>
      <View style={styles.row}>
        <ToggleIcon
          onPress={() => onClosePress()}
          paddingLeft
          iconOff="close"
          iconOn="close"
          theme={theme}
          size={26}
        />
        { more &&
          <ToggleIcon
            onPress={() => onMorePress()}
            paddingRight
            iconOff="more-horiz"
            iconOn="more-horiz"
            theme={theme}
            size={25}
          />
        }
      </View>
    </LinearGradient>
  )
}

TopBar.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
  more: PropTypes.bool,
  onMorePress: PropTypes.func,
  theme: PropTypes.string
}

TopBar.defaultProps = {
  title: '',
  logo: undefined,
  more: false,
  onMorePress: undefined,
  theme: null
}

export { TopBar }
