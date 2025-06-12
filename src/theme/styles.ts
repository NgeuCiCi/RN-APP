import type { ViewStyle } from 'react-native';
import { radius, spacingHorizontal, spacingVertical } from './assets/metrics';

export default {
  rowCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //
  // center
  //
  rowAlignCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  // flex-start
  //
  //
  rowAlignStart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  //
  //
  // flex-end
  rowAlignEnd: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  // - center -
  rowJustifyCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  // flex-start - -
  rowJustifyStart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  // - - flex-end
  rowJustifyEnd: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rowJustifyAround: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rowJustifyBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowJustifyEvenly: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  flexChild: {
    alignSelf: 'stretch',
    flex: 1,
  },
  modalBottom: {
    borderTopLeftRadius: radius.md,
    borderTopRightRadius: radius.md,
  },
  modalCenter: {
    borderRadius: radius.lg,
    marginHorizontal: spacingHorizontal.lg,
    marginVertical: spacingVertical.lg,
  },
  modalTop: {
    borderBottomLeftRadius: radius.md,
    borderBottomRightRadius: radius.md,
  },

  fullHeight: {
    height: '100%',
  },
  fullWidth: {
    width: '100%',
  },
  /* Positions */
  absolute: {
    position: 'absolute',
  },
  bottom0: {
    bottom: 0,
  },
  left0: {
    left: 0,
  },
  relative: {
    position: 'relative',
  },
  right0: {
    right: 0,
  },
  shadows1: {
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 8.3,
  },
  top0: {
    top: 0,
  },
  z1: {
    zIndex: 1,
  },
  z10: {
    zIndex: 10,
  },
} as const satisfies Record<string, ViewStyle>;
