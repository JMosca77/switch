import { Component, OnInit } from "@angular/core";
import { ISwitch } from "./switch";


@Component({
    selector: 'app-switches',
    templateUrl: './switch-list.component.html',
    styleUrls: ['./switch-list.component.css']
})
export class SwitchListComponent implements OnInit{
    
    ngOnInit(): void {
        console.log('In OnInit');
    }
    pageTitle: string = 'WBB Switch Management';

    onUrl: string = 'https://openclipart.org/download/23156/dholler-ok.svg';
    offUrl: string = 'https://openclipart.org/download/15815/Arnoud999-Right-or-wrong-5.svg';
    imageWidth: number = 30;
    imageMargin: number = 2;
    showSwitchCode: boolean = true;
    
    _listFilter: string;
    get listFilter():string {
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredSwitches = this.listFilter ? this.performFilter(this.listFilter) : this.switches;
    }


    switches: ISwitch[] = [
        {
            "switchName" : "S&L Subprodcut Transfer",
            "switchDescription" : "This switch will control if the S&L subproduct transfer is turned on",
            "switchCode": "wbbSLSubprodTransfer",
            "switchState" : true
        },
        {
            "switchName" : "PP Homepage offers",
            "switchDescription" : "This switch will control if Purchase Payback Offers are displayed on the Account Summary page",
            "switchCode": "wbbPPAcctSummaryPage",
            "switchState" : false
        }
    ];

    toggleSwitchCode(): void {
        this.showSwitchCode = !this.showSwitchCode;
    }

    filteredSwitches: ISwitch[];

    performFilter(filterBy: string): ISwitch[]{
        filterBy = filterBy.toLocaleLowerCase();
        
        return this.switches.filter((s: ISwitch) => 
            (s.switchName.toLocaleLowerCase().indexOf(filterBy) !== -1) || s.switchCode.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    constructor(){
        this.filteredSwitches = this.switches;
        }
}