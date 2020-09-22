import firebase from 'firebase/app';
import 'firebase/auth';
import pasture from '../../components/pasture/pasture';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#auth').addClass('hide');
      $('#pasture').removeClass('hide');
      $('#navbar-logout-button').removeClass('hide');
      pasture.buildCows();
    } else {
      $('#navbar-logout-button').addClass('hide');
      $('#auth').removeClass('hide');
      $('#pasture').addClass('hide');
    }
  });
};

export default { checkLoginStatus };
