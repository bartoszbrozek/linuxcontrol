import {Component} from '@angular/core';
import {DataService} from "./data.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private dataService: DataService) {
        dataService.myData();
    }

    ngOnInit() {
        console.log(this.dataService.myData());
        console.log(this.dataService.cars);
    }

}
