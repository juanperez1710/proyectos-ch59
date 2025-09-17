//cuando exportamos una clase, todo lo que esté dentro de las llaves es exportado.  

export class Operations {

    static add(a,b){
        return a+b;
    }
    static getIVA(amount){
        return amount*0.16;
    }
    static getTotalWithIVA(amount){
        return amount*1.16;
    }
    static getISR(salary){
        const percentages=[0.1088,0.16,0.1792,0.2136,0.2352]
        const cuotaFija=[288.33,692.96,917.26,1271.87,3880.44]
        switch (true){
            case salary>=4910.19 && salary<=8629.2: 
                    return cuotaFija[0]+percentages[0]*(salary-4910.19);
            break;
            case salary>=8629.2 && salary<=10031.07: 
                    return cuotaFija[1]+percentages[1]*(salary-8629.2);
            break;
            case salary>=10031.07 && salary<=12009.94: 
                    return cuotaFija[2]+percentages[2]*(salary-10031.07);
            break;
            case salary>=12009.94 && salary<=24222.31: 
                    return cuotaFija[3]+percentages[3]*(salary-12009.94);
            break;
            case salary>=24222.31 && salary<=38177.69: 
                    return cuotaFija[4]+percentages[4]*(salary-24222.31);
            break;   
            default:
            return -1;
        }
    }
    static salaryWithoutISR(salary){
    
        return salary-this.getISR(salary);
    }

}