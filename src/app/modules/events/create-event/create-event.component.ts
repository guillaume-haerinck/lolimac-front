import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'app/core/services/responsive.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  bMobile = true;

  constructor(responsiveService: ResponsiveService) {
    responsiveService.isMobile().subscribe(result => {
      if (result.matches) {
          this.bMobile = false;
      } else {
          this.bMobile = true;
      }
    });
  }

  ngOnInit() {
  }

}
