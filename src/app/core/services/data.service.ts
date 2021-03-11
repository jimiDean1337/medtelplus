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
  featuredItemsRef: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.contactsRef = afs.collection('contacts');
    this.subscribersRef = afs.collection('subscribers');
    this.consultationsRef = afs.collection('consultations');
    this.featuredItemsRef = afs.collection('featured');
  }

  addContact(data: any) {
    return this.contactsRef.add(data);
  }

  addSubscriber(data: any) {
    return this.subscribersRef.add(data);
  }

  addConsultation(data: any) {
    return this.consultationsRef.add(data);
  }

  getAllConsultations() {
    return this.consultationsRef.valueChanges();
  }

  getAllFeaturedItems() {
    return this.featuredItemsRef.valueChanges();
  }

  verifyUser(type: 'consultaion' | string, id: string) {
    return this.consultationsRef.doc(id).update({verified: true})
  }


}
