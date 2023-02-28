function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {
  let merge = new ListNode(0);
  let result = merge;
  let value = 0; 
  while(list1 || list2) {
    if(list1 && list2) {
      if(list1.val < list2.val) {
          merge.next = new ListNode(list1.val);
          list1 = list1.next 
      } else {
          merge.next = new ListNode(list2.val); 
          list2 = list2.next; 
      }
    } else if(list1 && !list2) {
      merge.next = new ListNode(list1.val);
      list1 = list1.next 
    } else {
      merge.next = new ListNode(list2.val); 
      list2 = list2.next; 
    }
    merge = merge.next; 
  }

  return result.next; 
};