function mincost(arr)
{ 
//write your code here
// return the min cost
   const heap = [...arr];
  
  const heapify = () => heap.sort((a, b) => a - b);

  let totalCost = 0;
  
  heapify();
  
  while (heap.length > 1) {
    const first = heap.shift();
    const second = heap.shift();
    
    const newRope = first + second;
    totalCost += newRope;
    
    heap.push(newRope);
    heapify();
  }
  
  return totalCost;
}

module.exports=mincost;
