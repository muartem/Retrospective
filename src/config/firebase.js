import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export const firebaseConfig = {
	apiKey: 'AIzaSyBdhUj8kAMmSOLwVg2ib2fg6Bet4UAFrVM',
	authDomain: 'retro-spec-tive.firebaseapp.com',
	projectId: 'retro-spec-tive',
	storageBucket: 'retro-spec-tive.appspot.com',
	messagingSenderId: '650692836251',
	appId: '1:650692836251:web:4f371dc4815eca2e3d3f3e'
}

firebase.initializeApp(firebaseConfig)
firebaseConfig.firestore()

export default firebase

