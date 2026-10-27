// --- 1. FUNCIÓN PARA CAMELLOS ---
function resolverCamellos() {
    let n = parseInt(document.getElementById('camellosInput').value);
    let res = document.getElementById('resCamellos');

    if (isNaN(n) || n <= 0) {
        res.innerText = "Por favor, ingresa un número de camellos válido.";
        res.style.display = "block";
        return;
    }

    let totalConPrestamo = n + 1;
    let parteMayor = Math.floor(totalConPrestamo / 2);
    let parteMediano = Math.floor(totalConPrestamo / 3);
    let parteMenor = Math.floor(totalConPrestamo / 9);

    let suma = parteMayor + parteMediano + parteMenor;
    let sobrante = totalConPrestamo - suma;

    let texto = "--- SOLUCIÓN DE CAMELLOS ---\n";
    texto = texto + "Cantidad inicial: " + n + " camellos.\n";
    texto = texto + "Beremiz presta 1 camello. Total a repartir: " + totalConPrestamo + " camellos.\n\n";
    texto = texto + "• Hermano Mayor (1/2 de " + totalConPrestamo + "): " + parteMayor + " camellos.\n";
    texto = texto + "• Hermano Mediano (1/3 de " + totalConPrestamo + "): " + parteMediano + " camellos.\n";
    texto = texto + "• Hermano Menor (1/9 de " + totalConPrestamo + "): " + parteMenor + " camellos.\n\n";
    texto = texto + "Total de camellos repartidos: " + suma + "\n";
    texto = texto + "Sobrante: " + sobrante + " camello(s) (1 devuelto a Beremiz y 1 de ganancia).";

    res.innerText = texto;
    res.style.display = "block";
}

// --- 2. FUNCIÓN PARA PANES ---
function resolverPanes() {
    let p1 = parseFloat(document.getElementById('panesBeremiz').value);
    let p2 = parseFloat(document.getElementById('panesCompanero').value);
    let monedas = parseFloat(document.getElementById('monedasPago').value);
    let res = document.getElementById('resPanes');

    if (isNaN(p1) || isNaN(p2) || isNaN(monedas) || p1 <= 0 || p2 <= 0 || monedas <= 0) {
        res.innerText = "Por favor, ingresa datos válidos.";
        res.style.display = "block";
        return;
    }

    let totalPanes = p1 + p2;
    let consumoPorPersona = totalPanes / 3;

    let aporteBeremiz = p1 - consumoPorPersona;
    let aporteCompanero = p2 - consumoPorPersona;

    let texto = "--- SOLUCIÓN DE PANES ---\n";
    texto = texto + "Total de panes: " + totalPanes + "\n";
    texto = texto + "Cada persona comió: " + consumoPorPersona.toFixed(2) + " panes.\n\n";

    if (aporteCompanero <= 0) {
        texto = texto + "El compañero comió todo su aporte o más.\n";
        texto = texto + "Todas las " + monedas + " monedas pertenecen a Beremiz.";
    } else {
        let m1 = Math.round((aporteBeremiz / consumoPorPersona) * monedas);
        let m2 = Math.round((aporteCompanero / consumoPorPersona) * monedas);

        texto = texto + "• Beremiz entregó al jeque: " + aporteBeremiz.toFixed(2) + " panes → Recibe " + m1 + " monedas de oro.\n";
        texto = texto + "• El compañero entregó al jeque: " + aporteCompanero.toFixed(2) + " panes → Recibe " + m2 + " moneda(s) de oro.";
    }

    res.innerText = texto;
    res.style.display = "block";
}

// --- 3. FUNCIÓN PARA ECUACIÓN CUADRÁTICA ---
function resolverCuadratica() {
    let a = parseFloat(document.getElementById('coefA').value);
    let b = parseFloat(document.getElementById('coefB').value);
    let c = parseFloat(document.getElementById('coefC').value);
    let res = document.getElementById('resCuadratica');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        res.innerText = "Por favor, ingresa coeficientes válidos.";
        res.style.display = "block";
        return;
    }

    if (a === 0) {
        res.innerText = "El coeficiente 'a' no puede ser 0 en una ecuación cuadrática.";
        res.style.display = "block";
        return;
    }

    let D = b * b - 4 * a * c;
    let texto = "Discriminante (D) = " + D + "\n";

    if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        texto = texto + "La ecuación tiene dos raíces reales:\n";
        texto = texto + "x1 = " + x1 + "\n";
        texto = texto + "x2 = " + x2;
    } else if (D === 0) {
        let x = -b / (2 * a);
        texto = texto + "La ecuación tiene una única raíz real:\n";
        texto = texto + "x = " + x;
    } else {
        texto = texto + "La ecuación no tiene raíces reales.";
    }

    res.innerText = texto;
    res.style.display = "block";
}

// --- 4. FUNCIÓN PARA ESTIMACIÓN DE PI ---
function resolverPi() {
    let n = parseInt(document.getElementById('numN').value);
    let res = document.getElementById('resPi');

    if (isNaN(n) || n <= 0) {
        res.innerText = "Por favor, ingresa un número entero mayor a 0.";
        res.style.display = "block";
        return;
    }

    let suma = 0;
    for (let i = 1; i <= n; i = i + 1) {
        suma = suma + (1 / (i * i));
    }

    let piEstimado = Math.sqrt(6 * suma);
    let piReal = Math.PI;
    let diferencia = Math.abs(piReal - piEstimado);

    let texto = "--- ESTIMACIÓN DE PI ---\n";
    texto = texto + "Términos (n) : " + n + "\n";
    texto = texto + "π estimado   : " + piEstimado.toFixed(15) + "\n";
    texto = texto + "π real (Math): " + piReal.toFixed(15) + "\n";
    texto = texto + "Diferencia   : " + diferencia.toFixed(15);

    res.innerText = texto;
    res.style.display = "block";
}