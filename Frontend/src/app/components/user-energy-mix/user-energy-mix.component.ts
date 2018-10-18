import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user-energy-mix',
  templateUrl: './user-energy-mix.component.html',
  styleUrls: ['./user-energy-mix.component.css']
})
export class UserEnergyMixComponent implements OnInit {

  engergyResources = ['WIND_POWER' ,'SOLAR_POWER','NUCLEAR','GEO_POWER','BIO','GAS', 'COAL','DIESEL'];
  windPower_totalPercentage :any = 0;
  windPowoer_engergyResource:any;
  windPower_totalunitsPurchased:any = 0;
  
  solarPower_totalPercentage :any = 0;
  solarPowoer_engergyResource:any;
  solarPower_totalunitsPurchased:any = 0;

  nuclear_totalPercentage :any = 0;
  nuclear_engergyResource:any;
  nuclear_totalunitsPurchased:any = 0;

  geoPower_totalPercentage :any = 0;
  geoPower_engergyResource:any;
  geoPower_totalunitsPurchased:any = 0;

  bioPower_totalPercentage :any = 0;
  bioPowoer_engergyResource:any;
  bioPower_totalunitsPurchased:any = 0;

  gasPower_totalPercentage :any = 0;
  gasPower_engergyResource:any;
  gasPower_totalunitsPurchased:any = 0;


  coalPower_totalPercentage :any = 0;
  coalPower_engergyResource:any;
  coalPower_totalunitsPurchased:any = 0;


  dieselPower_totalPercentage :any = 0;
  dieselPower_engergyResource:any;
  dieselPower_totalunitsPurchased:any = 0;


  constructor(
    private dataService:DataService
  ) { }

  ngOnInit() {

    this.dataService.getMix().subscribe(res =>{

      
  
      console.log('Repsonse from mix is ',res['energyConsumption']);
        res['energyConsumption'].forEach(element => {
        console.log('Element is', element.unitsPurchased);
        console.log('Element Response',element.energyResource === "WIND_POWER")
        if(element.energyResource == 'WIND_POWER'){
          this.windPowoer_engergyResource = 'WIND POWER';
          this.windPower_totalPercentage += element.percentage;
          this.windPower_totalunitsPurchased +=element.unitsPurchased;

      
              
        }
        if(element.energyResource == 'SOLAR_POWER'){
          this.solarPowoer_engergyResource = 'SOLAR POWER';
          this.solarPower_totalunitsPurchased += element.unitsPurchased;
          this.solarPower_totalPercentage += element.percentage;
          
        }

        if(element.energyResource === 'NUCLEAR'){
          this.nuclear_engergyResource = 'NUCLEAR';
          this.nuclear_totalunitsPurchased += element.unitsPurchased;
          this.nuclear_totalPercentage += element.percentage;
          
        }

        if(element.energyResource == 'GEO_POWER'){
          this.geoPower_engergyResource = 'GEO POWER';
          this.geoPower_totalunitsPurchased += element.unitsPurchased;
          this.geoPower_totalPercentage += element.percentage;
          
        }

        if(element.energyResource == 'BIO'){
          this.bioPowoer_engergyResource = 'BIO';
          this.bioPower_totalunitsPurchased += element.unitsPurchased;
          this.bioPower_totalPercentage += element.percentage;
          
        }

        if(element.energyResource == 'GAS'){
          this.gasPower_engergyResource = 'GAS';
          this.gasPower_totalunitsPurchased += element.unitsPurchased;
          this.gasPower_totalPercentage += element.percentage;
          
        }

        if(element.energyResource == 'COAL'){
          console.log('I am inside coal');
          this.coalPower_engergyResource = 'COAL';
          this.coalPower_totalunitsPurchased = element.unitsPurchased;
          this.coalPower_totalPercentage += element.percentage;
          
        }

        if(element.energyResource == 'DIESEL'){
          this.dieselPower_engergyResource = 'DIESEL';
          this.dieselPower_totalunitsPurchased += element.unitsPurchased;
          this.dieselPower_totalPercentage += element.percentage;
          
        }
 
      console.log('Wind power units purchased',this.geoPower_totalunitsPurchased);

        
        
      }); 

     



    
     // this.energies = this.arrayMap(res, item => item.energyConsumed);       
     //this.timestamps = this.arrayMap(res, item => item.timestamp.split("T")[0])
      // console.log('Response for mix about energyResource', res['energyConsumption'][0]['energyResource']);
      // console.log('Response for mix about percentage', res['energyConsumption'][0]['percentage']);
      // console.log('Response for mix about production', res['energyConsumption'][0]['production']);
 
 });


  }

  arrayMap(obj, fn){   
    var aray = [];  
    for(var i = 0; i < obj.length; i++)
    {     
           aray.push(fn(obj[i])); 
   }     
             return aray; 
    }

}
