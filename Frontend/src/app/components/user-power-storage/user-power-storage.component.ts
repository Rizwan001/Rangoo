import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user-power-storage',
  templateUrl: './user-power-storage.component.html',
  styleUrls: ['./user-power-storage.component.css']
})
export class UserPowerStorageComponent implements OnInit {

   energyProductionDetails:any;
  constructor( private dataService:DataService) { }

  ngOnInit() {

    this.dataService.getPowerStorateData().subscribe(res =>{
      this.energyProductionDetails = res[0]['energyProductionDetails'];
      
      console.log('Power Storage Data', res[0]['energyProductionDetails']);
    })
  }

}
