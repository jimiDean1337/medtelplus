import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { DataService } from 'src/app/core/services/data.service';
import { ConsultationData } from 'src/app/interfaces/consultation.interface';

export interface Block {
  id: number;
  time: string;
  available: boolean;
}
@Component({
  selector: 'mtp-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {
  @Input() selectedDate = null;
  @Input() modelData: ConsultationData;

  blocksPerDay = 6;

  blocks: Block[];
  blocksDefaults: Block[] = [
    {id: 1, time: '12 pm', available: true},
    {id: 2, time: '1 pm', available: true},
    {id: 3, time: '2 pm', available: true},
    {id: 4, time: '3 pm', available: true},
    {id: 5, time: '4 pm', available: true},
    {id: 6, time: '5 pm', available: true},
  ]
  modalRef: BsModalRef;
  blocks$: Observable<Block[]>;
  constructor(private dataService: DataService) { }

  getAvailableDateBlocks(date: string) {
    this.dataService.getAllConsultations()
      .pipe(
        map((consultations: ConsultationData[]) => {
          consultations.map((appt: ConsultationData) => {
            if (appt.date === date) {
              this.blocksDefaults.map(block => {
                if (block.id === appt.block) {
                  block.available = false;
                }
              })
            }
          })
        })
      ).subscribe();
    //   .subscribe((res: ConsultationData[]) => {
    //     res.filter(block => {
    //       this.blocks.map((b: Block) => {
    //         if (block.date === date) {
    //           // console.log('same dates')
    //           b.available = block.block === b.id ? false : true;
    //         }
    //       })
    //     })

    //     console.log('consultation list', res)
    // })
  }

  selectBlock(block) {
    this.modelData.block = block.id;
    this.modelData.time = block.time;
  }


  ngOnInit(): void {
    this.getAvailableDateBlocks(this.selectedDate)

  }

}
