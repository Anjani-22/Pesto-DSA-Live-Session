class GraphNode {
        public int value;
        public List<GraphNode> neighbors;

        public GraphNode(int value) {
            this.value = value;
            this.neighbors = new List<GraphNode>(3);
        }
    }
    */
    public static HashSet<int> visited;
    public static GraphNode resultNode;
    public static GraphNode create_transpose(GraphNode node) {
        visited = new();
        dfs(node);
        return node;
    }
    

 public static void dfs(GraphNode node){
        //DFS
        
        visited.Add(node.value);
        List<GraphNode> ngbs = new(node.neighbors);
        foreach(var ngb in ngbs){
            node.neighbors.Remove(ngb);
            if(!visited.Contains(ngb.value)){
                dfs(ngb);
            }
            ngb.neighbors.Add(node);
            
        }
    }
