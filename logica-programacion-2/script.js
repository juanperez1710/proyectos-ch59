document.addEventListener('DOMContentLoaded',function(){
   
    const inputCelsius = document.getElementById('celsiusInput');
    const botonConvertir = document.getElementById('convertirBtn');
    const divResultado = document.getElementById('resultado');
    const divError = document.getElementById('error-message');

    const spanCelsius = document.getElementById('outputCelsius');
    const spanFahrenheit = document.getElementById('outputFahrenheit');
    const spanKelvin = document.getElementById('outputKelvin');

    botonConvertir.addEventListener('click', convertirTemp);

    function convertirTemp(){
        
        divError.style.display = 'none';
        divResultado.style.display = 'none';

        const entrada=inputCelsius.value.trim();
        const celsius=parseFloat(entrada);

        if(isNaN(celsius) || entrada===""){
            divError.textContent="Error: debes de ingresar un número válido."
            divError.style.display='block';
            inputCelsius.focus();
            return;
        }
        const fahrenheit=(celsius*1.8)+32;
        const kelvin=celsius+273.15;

        spanCelsius.textContent = celsius.toFixed(2);
        spanFahrenheit.textContent = fahrenheit.toFixed(2);
        spanKelvin.textContent = kelvin.toFixed(2);

        divResultado.style.display = 'block';
        inputCelsius.value = '';

    }
})