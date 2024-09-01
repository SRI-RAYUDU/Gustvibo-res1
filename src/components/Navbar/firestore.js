import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseconfi';

const testAddDoc = async () => {
  try {
    await addDoc(collection(db, 'test-collection'), { testField: 'testValue' });
    console.log('Document added successfully');
  } catch (error) {
    console.error('Error adding document: ', error.message);
  }
};

testAddDoc();
