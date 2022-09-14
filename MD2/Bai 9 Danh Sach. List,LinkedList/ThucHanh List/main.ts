import {ArrayList} from "./ArrList";

interface Post{
    title:string
}
let arraylist = new ArrayList<Post>();
arraylist.add({title:'Lập trình js'});
arraylist.add({title:'Lập trình ts'});
arraylist.add({title:'Lập trình ns'});
console.log(arraylist.container)