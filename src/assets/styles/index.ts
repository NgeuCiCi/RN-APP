import { StyleSheet } from 'react-native';
import { radius, spacingVertical, spacingHorizontal } from '../metrics';

const Styles = StyleSheet.create({
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
});

export default Styles;
