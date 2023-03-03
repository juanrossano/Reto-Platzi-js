console.log(solution(["Huevo", "Gallina", "Vaca"]));
console.log(solution([1, "Gallina", "Vaca"]));


function solution(arraySecreto) {
    return typeof arraySecreto[0] == "string";
  }