/**
 * IAbroad App
 * @author: Jay
 * @Url: https://www.friendfill.com
 */

import { StyleSheet } from 'react-native';
import iPhoneSize from '../../helpers/utils';
import colors from '../../styles/colors';

let termsTextSize = 13;
let headingTextSize = 30;
if (iPhoneSize() === 'small') {
  termsTextSize = 12;
  headingTextSize = 26;
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.green00,
  },
  welcomeWrapper: {
    flex: 1,
    display: 'flex',
    marginTop: 30,
    padding: 20,
  },
  logoWrapper:{
    marginTop:80,
    flexDirection:'row'
  },
  logo: {
    width: 50,
    height: 50,
    marginRight:10,
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: headingTextSize,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40,
    flex:1,
  },
  facebookButtonIcon: {
    color: colors.green00,
    position: 'relative',
    left: 20,
    zIndex: 8,
  },
  moreOptionsButton: {
    marginTop: 10,
  },
  moreOptionsButtonText: {
    color: colors.white,
    fontSize: 16,
  },
  termsAndConditions: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 30,
  },
  termsText: {
    alignSelf:"flex-start",
    color: colors.white,
    fontSize: termsTextSize,
    fontWeight: '600',
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
});

export default styles;
