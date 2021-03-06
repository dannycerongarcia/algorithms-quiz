class SearchTree{
    
    constructor(data,left=null,right=null){
        this.data=data;
        this.left=left;
        this.right=right;
        this.arr = []
    }
    nodeData(){
        return this.data;
    }
    leftChild(){
        return this.left;
    }
    rightChild(){
        return this.right
    }

    static DFS(parent,arr){
        
        if(parent===null){
            return;
        }

        arr.push(parent.data)
        // recurence on left child
        this.DFS(parent.left,arr);
        this.DFS(parent.right,arr);
    }

    static BFS(arr,graph,node){
        let visited= [node];
        let queue = [node,];

        while (queue.length!==0){
            let i = queue.shift();
            arr.push(i);
            let neighborNodes = graph[i];
            neighborNodes.forEach(element => {
                visited.push(element);
                queue.push(element);
            });
        }
    }
}

module.exports = SearchTree;