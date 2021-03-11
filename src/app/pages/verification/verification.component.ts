import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'mtp-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
  verificationId: string;
  consultations$: Observable<any[]>;
  user: any;
  isValid: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
        this.validateUser(params.get('verificationId'))
      });
  }
  validateUser(verificationId: string) {
    this.dataService.consultationsRef
      .valueChanges({ idField: 'docId' })
      .subscribe(appts => {
        appts.filter(appt => {
          console.log("validateUser ~ appts", verificationId, appt)
          if (appt.verificationId === verificationId) {
          this.user = appt;
          this.isValid = true;
          this.dataService.verifyUser('consultation', appt.docId)
        }
      });
    });

  }

}
