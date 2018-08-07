import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
// import * as fs from "fs";

@Component({
  selector: 'pm-listing',
  templateUrl: './listing.component.html'
})

export class ListingComponent{
    url: SafeResourceUrl;
    constructor(private http: HttpClient, sanitizer: DomSanitizer) {
        this.url = sanitizer.bypassSecurityTrustResourceUrl('https://www.google.co.in/output=embed');
        // let content = fs.readFileSync('./log.csv').toString();
        console.log('inside constructor');
        // var myReader: FileReader = new FileReader();
        // myReader.onloadend = function(e){
        //     console.log(myReader.result);
        // }
        // myReader.readAsText("./log.csv");
        this.http
         .get('assets/log.csv', { responseType: 'text' })
         .subscribe((data: any) => {
            // data from JSON
            let {header, ...content} = data.split('\n');
            
            let arr = [];
            for(let i = Object.keys(content).length-1;i>=1;i--) {
                arr.push( content[i].split(','));
            }
            this.logs = arr;
            console.log(this.logs);
         });
    }
    title = "Log Listing";
    logs:any;
//     logs = [{
//     "timestamp":"2018-07-18T14:20:34.522Z",
//     "user":"user1",
//     "log":"This is a sample log, there will be many more like this"
// },{
//     "timestamp":"2018-07-18T14:20:34.522Z",
//     "user":"user1",
//     "log":"This is a sample log, there will be many more like this"
// },{
//     "timestamp":"2018-07-18T14:20:34.522Z",
//     "user":"user1",
//     "log":"This is a sample log, there will be many more like this"
// },{
//     "timestamp":"2018-07-18T14:20:34.522Z",
//     "user":"user1",
//     "log":"This is a sample log, there will be many more like this"
// },{
//     "timestamp":"2018-07-18T14:20:34.522Z",
//     "user":"user1",
//     "log":"This is a sample log, there will be many more like this"
// },{
//     "timestamp":"2018-07-18T14:20:34.522Z",
//     "user":"user1",
//     "log":"This is a sample log, there will be many more like this"
// },{
//     "timestamp":"2018-07-18T14:20:34.522Z",
//     "user":"user1",
//     "log":"This is a sample log, there will be many more like this"
// },{
//     "timestamp":"2018-07-18T14:20:34.522Z",
//     "user":"user1",
//     "log":"This is a sample log, there will be many more like this"
// }]
}