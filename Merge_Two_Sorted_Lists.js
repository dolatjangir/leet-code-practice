/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let i = 0;
    let j = 0;
    let k = 0;
    const list3 = [];
    if(list1.length === 0){
        return list2
    };
    if(list2.length === 0){
        return list1
    };
    while(i < list1.length && j < list2.length){
        if(list1[i]<list2[j]){
            list3[k++] = list1[i++];
        }
        else if(list1[i]>list2[j]){
            list3[k++] = list2[j++];
        }
      
        // else if(list1[i] === list2[j]){
        //     list3[k++]=list1[i++];
        //     list3[k++]= list2[j++]
        // }
        
    }
    return list3;
};

console.log(mergeTwoLists([1,3,5,7],[2,4,6]));