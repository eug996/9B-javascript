let arr = [10,20,30,40];

//for(let i=0; i<arr.length; i++){
   // console.log(arr[i]);}


//    var itr = arr[Symbol.iterator]();

//    console.log(itr.next());
//    console.log(itr.next());
//    console.log(itr.next());
//    console.log(itr.next());


   let fibonacci = {
    [Symbol.iterator]: function () {
        let pre =0;
        num = 1;
        return {
            next: function () {
                num++;
                return {
                    value: num, 
                    done: false,
                };
            },
        };
    },
   };


   for( let num of fibonacci ){
    if (num > 100) {
        break;
    }
    console.log(num);
   }