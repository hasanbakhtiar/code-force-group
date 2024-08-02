var infoOne:number = 5;
var infoTwo:string = "Hello";
var infoThree:boolean = true; 

var infoFour:string[] = ["hello","front","ts"];
var infoFive:Array<number> = [1,2,3];

type infoSixType = {
    id:number,
    title:string
}

var infoSix:infoSixType = {
    id:1,
    title:"test",
    
}

type infoSevenType={
    id:number,
    title:string
}
var infoSeven:infoSevenType[] = [
    {
        id:1,
        title:"hello"
    }
]
console.log(infoOne,infoTwo,infoThree,infoFour,infoFive,infoSix,infoSeven);
