class BinarySearch{
    static bSearch(n,array,location,key){
        var size = array.length;
        var count = 1;
        var low = 0;
        var high = size;
        while(low<=high && location===0){
            
            var mid = Math.floor((low + high)/2);
            
            console.log("index: ",mid,"item: ",array[mid])
            if(array[mid]===key){
                location = mid;
                
                return count;
            }
            else if(key > array[mid]){
                low = mid + 1;
            }
            else{
                high = mid - 1;
            }
            count++;
        }
    }
}
module.exports = BinarySearch;