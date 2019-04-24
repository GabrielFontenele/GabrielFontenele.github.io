function questaoUm(){
  var custo_de_fabrica = 10000;
  var percentual_do_distribuidor = 28/100;
  var percentual_dos_impostos  = 45/100;

  var custo_final = custo_de_fabrica + (custo_de_fabrica * percentual_do_distribuidor) + (custo_de_fabrica * percentual_dos_impostos);
  return "Custo final: "+ custo_final; 
}

function questaoDois(){
  c = 23000;
  i = 3/100;
  n = 7;
  j = c*i*n;

  return "Juros simple: "+ j; 
}

function questaoTres(){
  str = "paralelepípedo";
  numV = str.match(/[aeiouAEIOUáéíóúÁÉÍÓÚÀÈÌÒÙãõÃÕâêîôûÂÊÎÔÛ]/gi);
  return "Quantidade de vogais: " +(numV === null ? 0 : numV.length) ;
}

function questaoQuatro(){
  var  a = [5, 3, 2, 4, 7, 1, 0, 6];
  var ordenado;
  do {
    ordenado = false;
    for(var i = 0; i < a.length-1; i++){
      if(a[i] > a[i+1]){
        var temp = a[i];
        a[i] = a[i+1];
        a[i+1] = temp;
        ordenado = true;
      }
    }
  }while(ordenado)
  return "Array ordenado: " + a;
}
function questaoCinco(){
  return "Ruby on Rails é um framework server-side para web escrita em Ruby que utiliza JSON e XML como padrão de dados e HTML,CSS e JavaScript  para interface.";
}
function questaoSeis(){
  return "React é uma biblioteca JavaScript para desenvovimento de interfaces mantida pelo Facebook.";
}

function myFunction(numDesafio ) {
  switch (numDesafio){
    case 1:
      document.getElementById("demo").innerHTML = 
      questaoUm()+
      "<p>Codigo:</p>"+
      "<pre>"+questaoUm.toString().replace("<","&lt;")+"</pre>"; 
      break;
    case 2:
      document.getElementById("demo").innerHTML = 
      questaoDois()+ 
      "<p>Codigo:</p>"+
      "<pre>"+questaoDois.toString().replace("<","&lt;")+"</pre>"; 
      break;
    case 3:
      document.getElementById("demo").innerHTML = 
      questaoTres()+ 
      "<p>Codigo:</p>"+
      "<pre>"+questaoTres.toString().replace("<","&lt;")+"</pre>"+
      "<br /><a href='https://github.com/GabrielFontenele/Vowel-counte-MIPS-32'>versão em assemble</a>"; 
      break;
    case 4:
      document.getElementById("demo").innerHTML = 
      questaoQuatro()+ 
      "<p>Codigo:</p>"+
      "<pre>"+questaoQuatro.toString().replace("<","&lt;")+"</pre>"; 
      break;
    case 5:
      document.getElementById("demo").innerHTML = 
      questaoCinco(); 
      break;
    case 6:
      document.getElementById("demo").innerHTML = 
      questaoSeis(); 
      break;
  }
}

