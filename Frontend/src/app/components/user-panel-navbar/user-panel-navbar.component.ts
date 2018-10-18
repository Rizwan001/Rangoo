import { Component, OnInit,ViewChild } from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {AuthService} from '../../services/auth.service';
import {DataService} from '../../services/data.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import { Subject } from 'rxjs';
import { Observable } from "rxjs/Observable";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

declare var $:any;
declare var Highcharts:any;
@Component({
  selector: 'app-user-panel-navbar',
  templateUrl: './user-panel-navbar.component.html',
  styleUrls: ['./user-panel-navbar.component.css']
})
export class UserPanelNavbarComponent implements OnInit {

  @ViewChild(NavbarComponent ) navbar: NavbarComponent;
  user:string;
   energies:any;
   timestamps:any;
 // consumptions[]:any;

  constructor(
              private authService:AuthService,
              private dataService:DataService,
              private router:Router,
              private spinnerService: Ng4LoadingSpinnerService,
              private flashMessage:FlashMessagesService) { }

  ngOnInit() {

    this.dataService.getConsumption().subscribe(res =>{
         this.energies = res.map(item => item.energyConsumed);
         this.timestamps = res.map(item => item.timestamp.split("T")[0]);
         console.log('Consumption Response', res); 
        console.log('Consumption Response', this.timestamps);
        console.log('Consumption Response', this.energies);
        this.renderHighchart();
    
    });


    this.authService.getProfile().subscribe(profile => {
      
      this.user = profile['user']['username'];
      console.log(this.user);
      this.spinnerService.hide();
    },
     err => {
       this.spinnerService.hide();
       return false;
     });
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessage.show('You are logged out', {
      cssClass:'alert-success',
      timeout: 3000
    });
    this.router.navigate(['/login']);
    return false;
  }

  renderHighchart(){
    Highcharts.chart('consumption', {
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Consumption Usage'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: this.timestamps,
            plotBands: [{ // visualize the weekend
                from: 4.5,
                to: 6.5,
                color: 'rgba(68, 170, 213, .2)'
            }]
        },
        yAxis: {
            title: {
                text: 'Units'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' units'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'Energy Consumed',
            data: this.energies
        }]
    });
  }

}
