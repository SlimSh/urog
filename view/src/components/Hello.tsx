import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    pein: number = 10000;
    percent: number = 8;
    years: number = 40;

    getYears(pein: number, percent: number, lastYear: number){
        const yearSumm = pein*4;
        const result = (yearSumm)+lastYear*(percent/100);
        return Math.round(result);
    }
    getPension() {
        let result: number = 0;
        
        
        for (let i=0; i < this.years+1; i++){
            result += this.getYears(this.pein, this.percent, result);
        }
        return result;
    }
    mounthPension() {
        let result: number;
        result = this.getPension()/72;
        return Math.round(result);
    }
    render() {
        return <h1>...Вся пенсия составит {this.getPension()} Вся пенсия составит {this.mounthPension()}</h1>;
             
    }
}