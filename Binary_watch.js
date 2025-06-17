function Binarywatch(target){
     let time = [];
     for(let h = 0; h < 12; h++){
        for(let m = 0; m < 60 ; m++){
            bith = h.toString(2).split('1').length - 1;
            bitm = m.toString(2).split('1').length - 1;

            if(bith + bitm === target){
                let times = `${h} : ${m < 10 ? '0' + m : m}`;
                time.push(times);
                // time = [...time, times]; // Using spread operator to append
            }
        }
     }
     console.log(time);

     return time;
}

Binarywatch(1);