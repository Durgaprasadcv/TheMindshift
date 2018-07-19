import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WebService } from '../webservice/web.service';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  providers: [WebService],
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  online$: Observable<boolean>;
  data: Object;
  dataSource: Object;
  dataSource1: Object;
  dataSource2: Object;
  dataSource3: Object;
  demoId: Object;
  side_menu_visibility;
  constructor(private webservice: WebService) {
    this.side_menu_visibility=this.webservice.side_menu_visibility;
      //check for connectivity
    this.online$ = Observable.merge(
      Observable.of(navigator.onLine),
      Observable.fromEvent(window, 'online').mapTo(true),
      Observable.fromEvent(window, 'offline').mapTo(false)
    );
  this.data = {
    chart: {
      subcaption: 'MindShift',
      "bgColor": "#ffffff"
     },
    data: [
      {value: 500},
      {value: 600},
      {value: 700}
    ]
  };

  this.dataSource = {
    chart: {
    subcaption: 'MindShift',
    startingangle: '120',
    showlabels: '0',
    showlegend: '1',
    enablemultislicing: '0',
    slicingdistance: '15',
    showpercentvalues: '1',
    showpercentintooltip: '0',
    plottooltext: 'Age group : $label Total visit : $datavalue',
    theme: 'ocean'
    },
    data: [
    {
    label: 'Sales',
    value: '125040'
    },
    {
    label: 'Communication',
    value: '146330'
    },
    {
    label: 'Product Training',
    value: '105700'
    },
    {
    label: 'Motivated Selling',
    value: '49100'
    }
    ]
    };

    this.dataSource1 = {
    'categories': [
    {
    'category': [
    {
    'label': 'Jan'
    },
    {
    'label': 'Feb'
    },
    {
    'label': 'Mar'
    },
    {
    'label': 'Apr'
    },
    {
    'label': 'May'
    },
    {
    'label': 'Jun'
    },
    {
    'label': 'Jul'
    },
    {
    'label': 'Aug'
    },
    {
    'label': 'Sep'
    },
    {
    'label': 'Oct'
    },
    {
    'label': 'Nov'
    },
    {
    'label': 'Dec'
    }
    ]
    }
    ],
    'dataset': [
    {
    'seriesname': 'Actual Sales',
    'data': [
    {
    'value': '16000'
    },
    {
    'value': '20000'
    },
    {
    'value': '18000'
    },
    {
    'value': '19000'
    },
    {
    'value': '15000'
    },
    {
    'value': '21000'
    },
    {
    'value': '16000'
    },
    {
    'value': '20000'
    },
    {
    'value': '17000'
    },
    {
    'value': '25000'
    },
    {
    'value': '19000'
    },
    {
    'value': '23000'
    }
    ]
    },
    {
    'seriesname': 'Projected Sales',
    'renderas': 'line',
    'showvalues': '0',
    'data': [
    {
    'value': '15000'
    },
    {
    'value': '16000'
    },
    {
    'value': '17000'
    },
    {
    'value': '18000'
    },
    {
    'value': '19000'
    },
    {
    'value': '19000'
    },
    {
    'value': '19000'
    },
    {
    'value': '19000'
    },
    {
    'value': '20000'
    },
    {
    'value': '21000'
    },
    {
    'value': '22000'
    },
    {
    'value': '23000'
    }
    ]
    },
    {
    'seriesname': 'Communication',
    'renderas': 'area',
    'showvalues': '0',
    'data': [
    {
    'value': '4000'
    },
    {
    'value': '5000'
    },
    {
    'value': '3000'
    },
    {
    'value': '4000'
    },
    {
    'value': '1000'
    },
    {
    'value': '7000'
    },
    {
    'value': '1000'
    },
    {
    'value': '4000'
    },
    {
    'value': '1000'
    },
    {
    'value': '8000'
    },
    {
    'value': '2000'
    },
    {
    'value': '7000'
    }
    ]
    }
    ]
    };
    this.dataSource2 = {
        "chart": {
            "caption": "The MindShift",
            "subCaption": "",
            "yAxisname": "Sales",
            "numberPrefix": "",
            "paletteColors": "#ff00000,#636dfb",
            "bgColor": "#ffffff",
            "showBorder": "0",
            "showHoverEffect":"1",
            "showCanvasBorder": "0",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "10",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "placevaluesInside": "1",
            "valueFontColor": "#ffffff",
            "showXAxisLine": "1",
            "xAxisLineColor": "#999999",
            "divlineColor": "#999999",
            "divLineIsDashed": "1",
            "showAlternateVGridColor": "0",
            "subcaptionFontBold": "0",
            "subcaptionFontSize": "14"
        },
        "categories": [
            {
                "category": [
                    {
                        "label": "Sales"
                    },
                    {
                        "label": "Communication"
                    },
                    {
                        "label": "Motivation"
                    },
                    {
                        "label": "Skill"
                    },
                    {
                        "label": "Training"
                    }
                ]
            }
        ],
        "dataset": [
            {
                "seriesname": "Internal",
                "data": [
                    {
                        "value": "17000"
                    },
                    {
                        "value": "19500"
                    },
                    {
                        "value": "12500"
                    },
                    {
                        "value": "14500"
                    },
                    {
                        "value": "17500"
                    }
                ]
            },
            {
                "seriesname": "External",
                "data": [
                    {
                        "value": "25400"
                    },
                    {
                        "value": "29800"
                    },
                    {
                        "value": "21800"
                    },
                    {
                        "value": "19500"
                    },
                    {
                        "value": "11500"
                    }
                ]
            }
        ],
        "trendlines": [
            {
                "line": [
                    {
                        "startvalue": "15000",
                        "color": "#ff00000",
                        "valueOnRight": "1",
                        "displayvalue": "Avg. for{br}internal"
                    },
                    {
                        "startvalue": "22000",
                        "color": "#636dfb",
                        "valueOnRight": "1",
                        "displayvalue": "Avg. for{br}external"
                    }
                ]
            }
        ]
    };

    this.dataSource3 ={
      "chart": {
        "caption": "Mindshift",
        "subCaption": "The Driving Shift",
        "xAxisName": "Person Name",
        "yAxisName": "Completed",
        "theme": "fint",
        "numberPrefix": "",
        "placevaluesInside": "1",
        "rotatevalues": "1",
        //Showing canvas bg to apply background color
        "showCanvasBg": "1",
        //Shwoing canvas base to apply base color
        "showCanvasBase": "1",
        //Changing canvas base depth
        "canvasBaseDepth": "14",
        //Changing canvas background depth
        "canvasBgDepth": "5",
        //Changing canvas base color
        "canvasBaseColor": "#ff0000",
        //Changing canvas background color
        "canvasBgColor": "#0000ee"
    },
    "data": [
        {
            "label": "a",
            "value": "420"
        },
        {
            "label": "b",
            "value": "310"
        },
        {
            "label": "c",
            "value": "220"
        },
        {
            "label": "d",
            "value": "150"
        },
        {
            "label": "e",
            "value": "210"
        },
        {
            "label": "f",
            "value": "310"
        },
        {
            "label": "g",
            "value": "280"
        },
        {
            "label": "h",
            "value": "120"
        },
        {
            "label": "i",
            "value": "410"
        },
        {
            "label": "j",
            "value": "390"
        },
        {
            "label": "k",
            "value": "400"
        },
        {
            "label": "l",
            "value": "330"
        }
    ]
    };

   }

  ngOnInit() {
  }

}
