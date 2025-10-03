function ordenarNumeros(){
    const primero=document.getElementById('num1').value;
    const segundo = document.getElementById('num2').value;
    const tercero = document.getElementById('num3').value;

    let num1=parseFloat(primero);
    let num2=parseFloat(segundo);
    let num3=parseFloat(tercero);

    const resultadoDiv = document.getElementById('resultado');
    let outputHTML = '';
    let cardClass = '';
    
    if(num1==num2 && num2==num3){
        cardClass='border info';
        outputHTML=`
        <p class="text-info fw-bold fs-5"> Los tres números son iguales.</p>
        `
    }else{
        cardClass='border-succes';
        const numeros=[num1,num2,num3];
        const ordenMenorMayor=[...numeros].sort((a,b)=>a-b);
        const numeroMenor=ordenMenorMayor[0];
        const numeroMedio=ordenMenorMayor[1];
        const numeroMayor=ordenMenorMayor[2];

        const ordenMayorMenor=[...ordenMenorMayor].reverse();

       outputHTML=`
          <p><strong>Mayor a Menor:</strong> <span class="fw-bold">${ordenMayorMenor.join(" , ")}</span></p>
                        <p><strong>Menor a Mayor:</strong> <span class="fw-bold">${ordenMenorMayor.join(" , ")}</span></p>
                    `;
    }
      resultadoDiv.querySelector('.card-body').innerHTML = outputHTML;
            resultadoDiv.className = `card shadow-sm mx-auto mt-4 mb-5 card-custom ${cardClass}`;
            resultadoDiv.style.display = 'block'; 
}