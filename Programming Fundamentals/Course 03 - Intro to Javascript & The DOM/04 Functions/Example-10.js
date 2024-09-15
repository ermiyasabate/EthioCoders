let triangles = ""
function triangle(num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j <= i; j++) {
            triangles += "*"
        }
        triangles += "\n"
    }

    return triangles
}


console.log(triangle(6));