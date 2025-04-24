let grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];
var countNegatives = function (grid) {
    let countNegatives = 0;
    let i=0; 
    
    while(i<grid.length) {
    let j = 0;
        while(j<grid[i].length) {
            if(grid[i][j]<0) {
                countNegatives++;
            } j++;
        }i++;
    }
    return countNegatives;
};
countNegatives(grid);
