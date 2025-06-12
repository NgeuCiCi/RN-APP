import { BaseToast, ErrorToast } from 'react-native-toast-message';
import colors from 'react-native-ui-lib/src/style/colors';

const Default = {
  contentContainerStyle: {
    backgroundColor: colors.$backgroundSuccessHeavy,
    borderRadius: 6,
    elevation: 11,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 6.68,
  },
  style: { borderLeftWidth: 0, borderWidth: 0 },
  text1: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  text2: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '400',
    textAlign: 'center',
  },
};

const toastConfig = {
  /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
  success: (props) => (
    <BaseToast
      {...props}
      contentContainerStyle={Default.contentContainerStyle}
      style={Default.style}
      text1Style={Default.text1}
      text2Style={Default.text2}
    />
  ),
  /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
  error: (props) => (
    <ErrorToast
      {...props}
      contentContainerStyle={{
        ...Default.contentContainerStyle,
        backgroundColor: colors.red30,
      }}
      style={Default.style}
      text1Style={Default.text1}
      text2Style={Default.text2}
    />
  ),
};

export default toastConfig;
