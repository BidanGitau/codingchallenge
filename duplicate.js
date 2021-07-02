const findDuplicate=(arr)=>{
    let noneDupAdj=[];
    const lowercase=arr.toLowerCase();
    const arrString=lowercase.split('');
     //     return string
//       .split('')
//       .filter(function(item, pos, self) {
//         return self.indexOf(item) == pos;
//       })
//       .join('');
    for (let i = 0; i < arrString.length; i++) {
        if (arrString[i] == noneDupAdj[noneDupAdj.length-1]) {
         noneDupAdj.pop()
        }else{
          noneDupAdj.push(arrString[i])
        }
      
      } 
      return noneDupAdj.join(""); 
}
console.log(findDuplicate('cKKaaeel'))



























// const findDuplicate=(arr)=>{
//     const noneDupAdj=[]
  
//     const arrString=arr.split('');
//     for (let i = 0; i < arrString.length; ++i) {
//         if (arrString == arrString[i + 1]) continue
            
//            return noneDupAdj.push(arrString[i])
       
//       } 
      
// }



// console.log(findDuplicate('abbaca'))

