import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  contactsRef: AngularFirestoreCollection<any>;
  subscribersRef: AngularFirestoreCollection<any>;
  consultationsRef: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.contactsRef = afs.collection('contacts');
    this.subscribersRef = afs.collection('subscribers');
    this.consultationsRef = afs.collection('consultations');
  }

  addContact(data: any) {
    console.log("DataService ~ addContact ~ data", data)
    this.contactsRef.add(data);
  }

  addSubscriber(data: any) {
    console.log("DataService ~ addSubscriber ~ data", data)
    this.subscribersRef.add(data);
  }

  addConsultation(data: any) {
    this.consultationsRef.add(data);
  }

  getAllConsultations() {
    return this.consultationsRef.valueChanges();
  }


}
