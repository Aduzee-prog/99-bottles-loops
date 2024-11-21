// for( i=99; i>=1; i--){
//     if (i>1){
//         body.innerHTML +=     <p>${i} bottle of beer on the wall, ${i} bottles of bear. <br> Take one down and pass it arround, ${i-1} bottle of bear on the wall  </p>; 
//     }else if(i <= 1){
//         body.innerHTML +=  <p>${i} bottle of beer on the wall, ${i} bottles of bear. <br> Take one down and pass it arround, no more bottle of bear on the wall  </p>;
//     }else  
// }
for( i=99; i>=1; i--){
    if (i>=1){
        console.log(i);
        
        body.innerHTML +=     `<p>${i} bottle of beer on the wall, ${i} bottles of bear. <br> Take one down and pass it arround, ${i-1} bottle of bear on the wall  </p>`; 
    }else if(i <= 1){
        body.innerHTML +=  `<p>${i} bottle of beer on the wall, ${i} bottles of bear. <br> Take one down and pass it arround, no more bottle of bear on the wall  </p>`;
    }else{
        `<p>No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.</p>`
    } 
}
