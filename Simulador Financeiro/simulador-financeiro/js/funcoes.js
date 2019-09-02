function calcular(){

    var qtd_poste = parseFloat(quantidade_poste.value);
    var qtd_dia = parseFloat(quantidade_dia.value);

    //Calculo para quantidade de Watts gastos por quantidade de dias e quantidade de postes
    var gasto_energia_watts = (100 * 12 * qtd_dia) * qtd_poste;
    //Calculo para quantidade de quilowatts gastos
    var gasto_energia_quilo_watts = gasto_energia_watts / 1000;
    //Calculo para quantidade gasta em reais
    var gasto_energia_real = gasto_energia_quilo_watts * 0.484;

    //Calculo para valor gasto por dia
    var gasto_dia = gasto_energia_real / qtd_dia;
    
    //Calculo para valor gasto por semana
    var gasto_semana = gasto_dia * 7;
    
    //Calculo para valor gasto por mês
    var gasto_mes = gasto_dia * 30;

    //Caculo para valor gasto por ano
    var gasto_ano = gasto_mes * 12;


    div_total_watts.innerHTML = `Disperdicio total em Watt ${gasto_energia_watts}W/h`;
    div_quilowatts.innerHTML = `Disperdicio total em quilowatt ${gasto_energia_quilo_watts}KW/h`;
    div_real.innerHTML = `Valor em reais diperdisados R$${gasto_energia_real.toFixed(2)}`;
    div_real_dia.innerHTML = `Disperdiçado por dia R$${gasto_dia.toFixed(2)}`;
    div_real_semana.innerHTML = `Disperdiçado por semana R$${gasto_semana.toFixed(2)}`;
    div_real_mes.innerHTML = `Disperdiçado por mes R$${gasto_mes.toFixed(2)}`;
    div_real_ano.innerHTML = `Disperdicado por ano R$${gasto_ano.toFixed(2)}`;

}