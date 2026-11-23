window.BANK = window.BANK || [];
(function(){
const D = q => window.BANK.push(Object.assign({area:'te', tipo:'disc'}, q));
const R = String.raw;

// ============ 2º/2010 ============
D({id:'ted-2010-2-q5', ano:2010, prova:'EUF 2º/2010 · Parte 1 · Q5', topicos:['ens','gas'],
enunciado:R`<p>A função de partição de um gás monoatômico de \(N\) partículas interagentes é \(Z=\left(\dfrac{V-Nb}{N}\right)^N\left(\dfrac{mk_BT}{2\pi\hbar^2}\right)^{3N/2}\exp\left(\dfrac{N^2a}{Vk_BT}\right)\), com \(a,b>0\).</p>`,
itens:[R`Determine a energia livre de Helmholtz.`,R`Determine a equação de estado (pressão em função de \(v=V/N\), \(T\) e constantes).`,R`Determine a energia interna por partícula \(u=U/N\).`,R`O gás sofre expansão livre (recipiente adiabático) de \(V\) para \(2V\). Calcule a variação da temperatura.`],
dica:R`\(F=-k_BT\ln Z\), \(p=-\partial F/\partial V\), \(U=-\partial\ln Z/\partial\beta\). Na expansão livre, \(U\) se conserva.`,
solucao:R`<p><b>(a)</b> \(F=-Nk_BT\left[\ln\dfrac{V-Nb}{N}+\dfrac32\ln\dfrac{mk_BT}{2\pi\hbar^2}\right]-\dfrac{N^2a}{V}\).</p>
<p><b>(b)</b> \(p=\dfrac{k_BT}{v-b}-\dfrac a{v^2}\) (van der Waals).</p>
<p><b>(c)</b> \(u=\tfrac32k_BT-\dfrac av\).</p>
<p><b>(d)</b> \(\tfrac32k_BT_i-\dfrac{aN}V=\tfrac32k_BT_f-\dfrac{aN}{2V}\Rightarrow\Delta T=-\dfrac{aN}{3k_BV}\lt0\): o gás esfria.</p>`});

D({id:'ted-2010-2-q10', ano:2010, prova:'EUF 2º/2010 · Parte 2 · Q10', topicos:['entr'],
enunciado:R`<p>Um corpo de capacidade térmica \(C_P\) constante, a \(T_1\), é posto em contato com um reservatório a \(T_2\), com \(x\equiv T_1/T_2\lt1\). Após o equilíbrio, determine:</p>`,
itens:[R`a variação de entropia do corpo;`,R`a variação de entropia do reservatório;`,R`a variação de entropia do universo;`,R`se o resultado de (c) está de acordo com a 2ª lei.`],
dica:R`\(\Delta S_{corpo}=C_P\ln(T_2/T_1)\); \(\Delta S_{res}=-C_P(T_2-T_1)/T_2\).`,
solucao:R`<p><b>(a)</b> \(-C_P\ln x\).</p>
<p><b>(b)</b> \(-C_P(1-x)\).</p>
<p><b>(c)</b> \(\Delta S_U=C_P(x-1-\ln x)\).</p>
<p><b>(d)</b> \(g(x)=x-1-\ln x\) tem \(g(1)=0\) e \(g'(x)=1-1/x\lt0\) para \(x\lt1\), logo \(g>0\): \(\Delta S_U>0\), como exige a 2ª lei para um processo irreversível. (Vale também para \(x>1\).)</p>`});

// ============ 1º/2011 ============
D({id:'ted-2011-1-q5', ano:2011, prova:'EUF 1º/2011 · Parte 1 · Q5', topicos:['ens','entr'],
enunciado:R`<p>Um material magnético 1D é modelado como uma cadeia de \(N+1\) spins, com energia \(E=n\epsilon\), onde \(n\) é o número de paredes de domínio (fronteiras entre regiões ↑ e ↓) e \(\epsilon\) a energia por parede. Considere \(N\gg1\) e \(n\gg1\).</p>`,
itens:[R`De quantas maneiras as \(n\) paredes podem ser arranjadas?`,R`Determine a entropia \(S(E)\).`,R`Determine \(E(T)\) em termos de \(N\), \(\epsilon\), \(T\) e constantes.`,R`Esboce \(E(T)\), indicando os valores para \(T=0\) e \(T\to\infty\).`],
dica:R`Há \(N\) ligações entre vizinhos, e cada uma pode ou não ter parede. Use Stirling e \(1/T=\partial S/\partial E\).`,
solucao:R`<p><b>(a)</b> \(\Omega=\dbinom Nn\) (vezes 2 pela escolha do primeiro spin, irrelevante).</p>
<p><b>(b)</b> \(S=k_B[N\ln N-n\ln n-(N-n)\ln(N-n)]\), com \(n=E/\epsilon\).</p>
<p><b>(c)</b> \(\dfrac1T=\dfrac{k_B}\epsilon\ln\dfrac{N-n}{n}\Rightarrow E=\dfrac{N\epsilon}{e^{\epsilon/k_BT}+1}\).</p>
<p><b>(d)</b> \(E(0)=0\) (ferromagneto perfeito) e cresce monotonamente até \(E\to N\epsilon/2\) para \(T\to\infty\) (metade das ligações com parede). Não há transição de fase em 1D.</p>`});

D({id:'ted-2011-1-q10', ano:2011, prova:'EUF 1º/2011 · Parte 2 · Q10', topicos:['entr','gas'],
enunciado:R`<p>Um mol de gás ideal monoatômico a \(T\) ocupa \(V\), com \(u=c_VT\).</p>`,
itens:[R`Em contato com um reservatório a \(T\), o gás se expande quase-estaticamente de \(V\) a \(2V\). Calcule o trabalho realizado.`,R`Determine o calor trocado com o reservatório.`,R`Determine as variações de entropia do gás e do reservatório.`,R`Agora o gás, isolado, sofre expansão livre de \(V\) a \(2V\). Determine as variações de entropia do gás e do universo.`],
dica:R`A entropia é função de estado: a expansão livre tem o mesmo \(\Delta S_{gás}\) da isotérmica.`,
solucao:R`<p><b>(a)</b> \(W=RT\ln2\).</p>
<p><b>(b)</b> \(Q=W=RT\ln2\) (\(\Delta U=0\)).</p>
<p><b>(c)</b> \(\Delta S_{gás}=R\ln2\), \(\Delta S_{res}=-R\ln2\) (universo: 0, reversível).</p>
<p><b>(d)</b> \(\Delta S_{gás}=R\ln2\) e, como nada mais muda, \(\Delta S_U=R\ln2>0\) (irreversível).</p>`});

// ============ 2º/2013 ============
D({id:'ted-2013-2-q5', ano:2013, prova:'EUF 2º/2013 · Parte 1 · Q5', topicos:['gas','entr'],
enunciado:R`<p>Um cilindro de paredes externas rígidas e adiabáticas tem uma parede interna móvel, adiabática, impermeável e sem atrito, que o divide em A e B, cada um com 1 mol de gás ideal monoatômico, inicialmente com \((P_0,V_0,T_0)\) iguais. Calor é introduzido quase-estaticamente em A até \(P_A=32P_0\).</p>`,
itens:[R`Com \(U=\tfrac32NRT=\tfrac32PV\) e \(S/N=\tfrac32R\ln T+R\ln V+\)const., mostre que num processo isentrópico \(P^3V^5=\)const.`,R`Obtenha \(V_A\) e \(V_B\) em termos de \(V_0\).`,R`Obtenha \(T_A\) e \(T_B\), verificando que \(T_A=15T_B\).`,R`Obtenha \(\Delta S_A\) e \(\Delta S_B\). Qual o sinal da variação total?`],
dica:R`B sofre compressão adiabática reversível (isentrópica). As pressões são iguais no fim.`,
solucao:R`<p><b>(a)</b> \(S\) constante ⇒ \(T^{3/2}V=\)const.; com \(T\propto PV\): \((PV)^{3/2}V=\)const. ⇒ \(P^3V^5=\)const.</p>
<p><b>(b)</b> \(V_B=V_0(1/32)^{3/5}=V_0/8\); \(V_A=2V_0-V_0/8=\tfrac{15}8V_0\).</p>
<p><b>(c)</b> \(T_B=T_0\dfrac{32\cdot1/8}{1}=4T_0\); \(T_A=T_0\cdot32\cdot\tfrac{15}8=60T_0=15T_B\).</p>
<p><b>(d)</b> \(\Delta S_B=0\). \(\Delta S_A=\tfrac32R\ln60+R\ln\tfrac{15}8\approx6{,}8R\). Total positivo (a entropia vem com o calor recebido por A).</p>`});

D({id:'ted-2013-2-q10', ano:2013, prova:'EUF 2º/2013 · Parte 2 · Q10', topicos:['ens'],
enunciado:R`<p>Um oscilador modificado tem \(V(x)=\tfrac12m\omega^2x^2\) para \(x\ge0\) e \(V=\infty\) para \(x\lt0\), em equilíbrio a \(T\).</p>`,
itens:[R`Justifique, pela paridade das autofunções, por que só valem \(n\) ímpares em \(\epsilon_n=(n+\tfrac12)\hbar\omega\).`,R`Obtenha a função de partição canônica quântica \(z\) e a energia livre \(f\).`,R`Obtenha a energia interna média por \(u=-\partial\ln z/\partial\beta\).`,R`Demonstre \(u=-\partial\ln z/\partial\beta\) a partir de \(u=\langle\epsilon_n\rangle\).`,R`Mostre que a função de partição clássica é \(z_{cl}=(2\beta\hbar\omega)^{-1}\) e determine \(u_{cl}\).`],
dica:R`\(\psi(0)=0\) exige autofunções ímpares do oscilador completo. Série geométrica de razão \(e^{-2\beta\hbar\omega}\).`,
solucao:R`<p><b>(a)</b> A parede impõe \(\psi(0)=0\); para \(x>0\) as soluções são as do oscilador completo, e só as ímpares (\(n\) ímpar) se anulam na origem.</p>
<p><b>(b)</b> \(z=\displaystyle\sum_{k\ge0}e^{-\beta\hbar\omega(2k+3/2)}=\frac{e^{-3\beta\hbar\omega/2}}{1-e^{-2\beta\hbar\omega}}\); \(f=-k_BT\ln z=\tfrac32\hbar\omega+k_BT\ln(1-e^{-2\beta\hbar\omega})\).</p>
<p><b>(c)</b> \(u=\tfrac32\hbar\omega+\dfrac{2\hbar\omega}{e^{2\beta\hbar\omega}-1}\).</p>
<p><b>(d)</b> \(u=\dfrac{\sum\epsilon_ne^{-\beta\epsilon_n}}{z}=-\dfrac1z\dfrac{\partial z}{\partial\beta}=-\dfrac{\partial\ln z}{\partial\beta}\).</p>
<p><b>(e)</b> \(z_{cl}=\dfrac1h\displaystyle\int dp\,e^{-\beta p^2/2m}\int_0^\infty dx\,e^{-\beta m\omega^2x^2/2}=\frac1h\sqrt{\frac{2\pi m}\beta}\cdot\frac12\sqrt{\frac{2\pi}{\beta m\omega^2}}=\frac1{2\beta\hbar\omega}\); \(u_{cl}=k_BT\) (dois termos quadráticos), que é o limite de (c) para \(k_BT\gg\hbar\omega\).</p>`});

// ============ 1º/2016 ============
D({id:'ted-2016-1-q5', ano:2016, prova:'EUF 1º/2016 · Parte 1 · Q5', topicos:['ciclo','potenc'],
enunciado:R`<p>Uma máquina de Carnot opera com um paramagneto ideal (lei de Curie \(M=DH/T\)), com \(dU=T\,dS+H\,dM\) (o termo \(H\,dM\) é análogo a \(-P\,dV\)) e \(dU=C_MdT\), \(C_M\) constante.</p>`,
itens:[R`Determine a relação entre \((M_i,T_i)\) e \((M_f,T_f)\) numa adiabática, em termos de \(C_M\) e \(D\).`,R`Represente o ciclo (duas adiabáticas, duas isotermas a \(T_Q\) e \(T_F\)) num diagrama \(H\)–\(M\), marcando \((M_1,H_1)\) (maior magnetização, a \(T_Q\)), \((M_2,H_2)\), \((M_3,H_3)\), \((M_4,H_4)\).`,R`Calcule o trabalho total no ciclo em função de \(M_1\), \(M_2\), \(T_Q\), \(T_F\) e \(D\).`,R`Obtenha a eficiência (trabalho total / calor absorvido a \(T_Q\)).`],
dica:R`Adiabática: \(C_MdT=H\,dM=\dfrac{TM}{D}dM\). Na isoterma, \(dU=0\Rightarrow T\,dS=-H\,dM\).`,
solucao:R`<p><b>(a)</b> \(C_M\dfrac{dT}{T}=\dfrac{M\,dM}{D}\Rightarrow C_M\ln\dfrac{T_f}{T_i}=\dfrac{M_f^2-M_i^2}{2D}\).</p>
<p><b>(b)</b> As isotermas são retas pela origem, \(H=(T/D)M\); a de \(T_Q\) é mais inclinada. O ciclo: 1→2 isoterma a \(T_Q\) (desmagnetização, \(M\) diminui), 2→3 adiabática até \(T_F\), 3→4 isoterma a \(T_F\), 4→1 adiabática de volta.</p>
<p><b>(c)</b> Calor na isoterma \(T\): \(Q=-\int H\,dM=-\dfrac{T}{2D}(M_f^2-M_i^2)\). \(Q_Q=\dfrac{T_Q}{2D}(M_1^2-M_2^2)>0\). Pelas adiabáticas, \(M_4^2-M_3^2=M_1^2-M_2^2\), logo \(Q_F=-\dfrac{T_F}{2D}(M_1^2-M_2^2)\). Trabalho realizado: \(W=\dfrac{(T_Q-T_F)(M_1^2-M_2^2)}{2D}\).</p>
<p><b>(d)</b> \(\eta=1-T_F/T_Q\): Carnot, independente da substância.</p>`});

D({id:'ted-2016-1-q10', ano:2016, prova:'EUF 1º/2016 · Parte 2 · Q10', topicos:['ens'],
enunciado:R`<p>\(N\) spins 1/2 não interagentes, com momento magnético \(\mu\), estão num campo \(B\) uniforme.</p>`,
itens:[R`Escreva a hamiltoniana.`,R`Em equilíbrio a \(\beta=1/k_BT\), calcule \(Z(\beta,B)\).`,R`Calcule a magnetização \(M(T,B)\).`,R`Obtenha \(M\) no limite de alta temperatura e campo fraco.`],
dica:R`Cada spin: energias \(\mp\mu B\).`,
solucao:R`<p><b>(a)</b> \(H=-\mu B\sum_i\sigma_i\), \(\sigma_i=\pm1\).</p>
<p><b>(b)</b> \(Z=[2\cosh(\beta\mu B)]^N\).</p>
<p><b>(c)</b> \(M=\dfrac1\beta\dfrac{\partial\ln Z}{\partial B}=N\mu\tanh(\beta\mu B)\).</p>
<p><b>(d)</b> \(\tanh x\approx x\): \(M\approx\dfrac{N\mu^2B}{k_BT}\) (lei de Curie).</p>`});

// ============ 2º/2016 ============
D({id:'ted-2016-2-q5', ano:2016, prova:'EUF 2º/2016 · Parte 1 · Q5', topicos:['ciclo'],
enunciado:R`<p>Uma máquina com gás ideal monoatômico opera no ciclo: expansão adiabática de A (volume \(V_0\)) a B (\(rV_0\), \(r>1\)); contração isotérmica de B a C (volume \(V_0\)); compressão isocórica de C a A.</p>`,
itens:[R`Represente o ciclo no diagrama \(PV\).`,R`Calcule (i) o trabalho total e (ii) o calor injetado no gás por ciclo, em função de \(r\), \(\gamma=c_P/c_V\), \(T_{\max}\) e \(T_{\min}\) (\(c_P-c_V=R\)).`,R`Determine o rendimento.`,R`Escreva o rendimento só em função de \(T_{\max}\) e \(T_{\min}\). Para \(T_{\max}=2T_{\min}\), compare com Carnot. Isso é coerente com a 2ª lei?`],
dica:R`\(T_{\max}=T_A\), \(T_{\min}=T_B=T_C\). Adiabática: \(T_{\max}=T_{\min}r^{\gamma-1}\). O calor entra em C→A.`,
solucao:R`<p><b>(a)</b> A no alto à esquerda; adiabática descendo até B; isoterma de B até C, em \(V_0\) abaixo de A; vertical de C até A.</p>
<p><b>(b)</b> Por mol: \(Q_{in}=c_V(T_{\max}-T_{\min})\); \(Q_{out}=RT_{\min}\ln r\). \(W=c_V(T_{\max}-T_{\min})-RT_{\min}\ln r\). Com \(\ln r=\dfrac{\ln(T_{\max}/T_{\min})}{\gamma-1}\) e \(R/(\gamma-1)=c_V\): \(W=c_V\left[T_{\max}-T_{\min}-T_{\min}\ln\dfrac{T_{\max}}{T_{\min}}\right]\).</p>
<p><b>(c)</b> \(\eta=1-\dfrac{T_{\min}\ln(T_{\max}/T_{\min})}{T_{\max}-T_{\min}}\).</p>
<p><b>(d)</b> Com \(T_{\max}=2T_{\min}\): \(\eta=1-\ln2\approx0{,}31\), contra \(\eta_C=0{,}5\): razão ≈ 0,61. Carnot é maior, como exige a 2ª lei (calor entra em temperaturas abaixo de \(T_{\max}\)).</p>`});

D({id:'ted-2016-2-q10', ano:2016, prova:'EUF 2º/2016 · Parte 2 · Q10', topicos:['ens'],
enunciado:R`<p>Num modelo de sólido, \(N\) átomos equivalem a \(3N\) osciladores clássicos 1D independentes (massa \(m\), frequência \(\omega\)), com \(U=m\omega^2x^2/2\), a temperatura \(T\). Quer-se estimar o deslocamento quadrático médio na fusão em termos da distância interatômica \(d\).</p>`,
itens:[R`Com o número de estados \(dx\,dp/h\), obtenha \(Z(T,\omega)\) do oscilador.`,R`Calcule o número médio de osciladores com posição entre \(x\) e \(x+dx\).`,R`Obtenha \(\langle U\rangle\) por oscilador e compare com a equipartição.`,R`Com \(\langle U\rangle=m\omega^2x_0^2/2\) e \(f=x_0/d\), estime \(f\) para \(m=1{,}0\times10^{-25}\) kg, \(T_F=1400\) K, \(d=10/3\) Å e \(\hbar\omega/k_B=300\) K.`],
dica:R`Gaussianas. Em (d), \(x_0^2=k_BT/m\omega^2\) (critério de Lindemann).`,
solucao:R`<p><b>(a)</b> \(Z=\dfrac{k_BT}{\hbar\omega}\).</p>
<p><b>(b)</b> \(dN=3N\sqrt{\dfrac{m\omega^2}{2\pi k_BT}}e^{-m\omega^2x^2/2k_BT}dx\).</p>
<p><b>(c)</b> \(\langle U\rangle=k_BT/2\), conforme a equipartição.</p>
<p><b>(d)</b> \(\omega=\dfrac{300k_B}{\hbar}\approx3{,}9\times10^{13}\) s\(^{-1}\). \(x_0^2=\dfrac{k_BT_F}{m\omega^2}=\dfrac{1{,}38\times10^{-23}\cdot1400}{10^{-25}\cdot1{,}55\times10^{27}}\approx1{,}25\times10^{-21}\) m², \(x_0\approx3{,}5\times10^{-11}\) m. \(f\approx\dfrac{0{,}35}{3{,}33}\approx0{,}1\) (valor típico de Lindemann).</p>`});

// ============ 1º/2017 ============
D({id:'ted-2017-1-q5', ano:2017, prova:'EUF 1º/2017 · Parte 1 · Q5', topicos:['gas'],
enunciado:R`<p>Um estudante quer determinar o calor específico \(c_x\) de uma substância usando um calorímetro ideal de capacidade térmica \(K\), inicialmente a \(T_{amb}\). Coloca \(m_{H_2O}\) de água a \(T_{amb}\), adiciona \(m_x\) da substância a \(T_x>T_{amb}\) e mede \(T_{eq}\). Use \(\sqrt2\approx1{,}4\), \(\sqrt{26}\approx5{,}1\).</p>`,
itens:[R`Escreva a equação para obter \(c_x\).`,R`Com \(K=30{,}0\) cal/°C, \(c_{H_2O}=1{,}0\) cal/(g°C), \(m_{H_2O}=50{,}0\) g, \(m_x=200\) g, \(T_x=37{,}8\) °C, \(T_{amb}=25{,}0\pm0{,}1\) °C e \(T_{eq}=27{,}8\pm0{,}1\) °C, calcule \(c_x\) com o erro associado.`],
dica:R`\(m_xc_x(T_x-T_{eq})=(K+m_{H_2O}c_{H_2O})(T_{eq}-T_{amb})\). Propague os erros de \(T_{amb}\) e \(T_{eq}\).`,
solucao:R`<p><b>(a)</b> \(c_x=\dfrac{(K+m_{H_2O}c_{H_2O})(T_{eq}-T_{amb})}{m_x(T_x-T_{eq})}\).</p>
<p><b>(b)</b> \(c_x=\dfrac{80\cdot2{,}8}{200\cdot10{,}0}=0{,}112\) cal/(g°C). Erro: \(\Delta(T_{eq}-T_{amb})=0{,}1\sqrt2=0{,}14\) (relativo 5%); \(T_x-T_{eq}\) tem erro 0,1 (1%). Relativo total \(\approx\sqrt{0{,}05^2+0{,}01^2}=0{,}051\) (\(\sqrt{26}/100\)). \(c_x=0{,}112\pm0{,}006\) cal/(g°C).</p>`});

D({id:'ted-2017-1-q10', ano:2017, prova:'EUF 1º/2017 · Parte 2 · Q10', topicos:['ens','entr'],
enunciado:R`<p>\(N\) osciladores quânticos 1D localizados e independentes, a \(T\), têm energias \(E_n=\hbar\omega_0(n+\tfrac12)\) apenas com \(n=1,3,5,\dots\)</p>`,
itens:[R`Obtenha a energia interna por oscilador \(u(T)\). Qual o limite clássico (\(\hbar\omega_0\ll k_BT\))? Esboce \(u\times T\).`,R`Obtenha a entropia por oscilador \(s(T)\). Qual o limite clássico? Esboce \(s\times T\).`],
dica:R`\(z=\dfrac{e^{-3x/2}}{1-e^{-2x}}\), \(x=\beta\hbar\omega_0\); \(s=k_B(\ln z+\beta u)\).`,
solucao:R`<p><b>(a)</b> \(u=\tfrac32\hbar\omega_0+\dfrac{2\hbar\omega_0}{e^{2\beta\hbar\omega_0}-1}\). Para \(T\to0\), \(u\to\tfrac32\hbar\omega_0\); no limite clássico \(u\approx k_BT+\tfrac12\hbar\omega_0\to k_BT\).</p>
<p><b>(b)</b> \(s=k_B\left[\dfrac{2x}{e^{2x}-1}-\ln(1-e^{-2x})\right]\). Vai a 0 para \(T\to0\) e, no limite clássico, \(s\approx k_B\left[1+\ln\dfrac{k_BT}{2\hbar\omega_0}\right]\), crescendo logaritmicamente.</p>`});

// ============ 2º/2017 ============
D({id:'ted-2017-2-q5', ano:2017, prova:'EUF 2º/2017 · Parte 1 · Q5', topicos:['ciclo'],
enunciado:R`<p>Um ciclo de Stirling com 1 mol de gás monoatômico ideal (\(C_V=3R/2\)): (1) compressão isotérmica até \(V_0/3\) a \(T_0\); (2) aquecimento isocórico até \(2T_0\); (3) expansão isotérmica até \(V_0\); (4) resfriamento isocórico até \(T_0\).</p>`,
itens:[R`Esboce o ciclo num diagrama \(P\times V\).`,R`Determine \(\Delta U\) nos processos 1 e 2.`,R`Determine o trabalho do gás no processo 3.`,R`Determine o rendimento.`],
dica:R`O calor absorvido é o de 2 e de 3 (sem regenerador).`,
solucao:R`<p><b>(a)</b> Duas hipérboles (\(T_0\) e \(2T_0\)) unidas por verticais em \(V_0/3\) e \(V_0\).</p>
<p><b>(b)</b> \(\Delta U_1=0\); \(\Delta U_2=\tfrac32RT_0\).</p>
<p><b>(c)</b> \(W_3=2RT_0\ln3\).</p>
<p><b>(d)</b> \(W=2RT_0\ln3-RT_0\ln3=RT_0\ln3\). \(Q_{in}=\tfrac32RT_0+2RT_0\ln3\). \(\eta=\dfrac{\ln3}{1{,}5+2\ln3}\approx0{,}30\) (Carnot seria 0,5; com regenerador ideal o Stirling chegaria a ele).</p>`});

D({id:'ted-2017-2-q10', ano:2017, prova:'EUF 2º/2017 · Parte 2 · Q10', topicos:['ens'],
enunciado:R`<p>\(N\) íons magnéticos localizados de spin 1 a \(T\), com \(H=D\sum\sigma_i^2-h\sum\sigma_i\), \(\sigma_i\in\{0,\pm1\}\), \(h>0\), \(D>0\).</p>`,
itens:[R`Determine a função de partição.`,R`Determine a energia livre de Helmholtz por íon.`,R`Determine a energia interna por íon.`,R`Para \(h=0\), determine o calor específico.`],
dica:R`\(z=1+2e^{-\beta D}\cosh\beta h\).`,
solucao:R`<p><b>(a)</b> \(Z=(1+2e^{-\beta D}\cosh\beta h)^N\).</p>
<p><b>(b)</b> \(f=-k_BT\ln(1+2e^{-\beta D}\cosh\beta h)\).</p>
<p><b>(c)</b> \(u=\dfrac{2e^{-\beta D}(D\cosh\beta h-h\sinh\beta h)}{1+2e^{-\beta D}\cosh\beta h}\).</p>
<p><b>(d)</b> \(h=0\): \(u=\dfrac{2De^{-\beta D}}{1+2e^{-\beta D}}\); \(c=\dfrac{du}{dT}=k_B(\beta D)^2\dfrac{2e^{-\beta D}}{(1+2e^{-\beta D})^2}\) (pico de Schottky).</p>`});

// ============ 1º/2020 ============
D({id:'ted-2020-1-q5', ano:2020, prova:'EUF 1º/2020 · Parte 1 · Q5', topicos:['gas'],
enunciado:R`<p>Comparação de duas etapas: (1) compressão de \(n\) mols de gás ideal diatômico (\(\gamma=1{,}4\), \(C_V=5R/2\)) de \(P_0=1{,}01\times10^5\) Pa, \(T_0=330\) K, \(V_0=1{,}00\) L para 100 mL; (2) exaustão de parte do gás para que a pressão volte a \(P_0\), mas a 300 K. Compara-se a compressão isotérmica com a adiabática. Use \(10^{1{,}3}\approx20\), \(10^{1{,}4}\approx25\), \(10^{1{,}7}\approx50\).</p>`,
itens:[R`Caso isotérmico: pressão logo após a compressão.`,R`Caso adiabático: pressão logo após a compressão.`,R`Fração do gás inicial liberada na etapa (2).`,R`Esboce as duas compressões num \(P\times V\) e diga em qual o trabalho sobre o gás é menor.`],
dica:R`Na etapa (2), o estado final (100 mL, \(P_0\), 300 K) é o mesmo nos dois casos.`,
solucao:R`<p><b>(a)</b> \(P=10P_0\approx1{,}0\times10^6\) Pa.</p>
<p><b>(b)</b> \(P=P_0\cdot10^{1{,}4}\approx25P_0\approx2{,}5\times10^6\) Pa.</p>
<p><b>(c)</b> \(\dfrac{n_f}{n_0}=\dfrac{P_0(V_0/10)/300}{P_0V_0/330}=0{,}11\): libera-se 89% do gás.</p>
<p><b>(d)</b> A adiabática é mais íngreme e fica acima da isoterma; a área (trabalho sobre o gás) é menor na isotérmica.</p>`});

D({id:'ted-2020-1-q10', ano:2020, prova:'EUF 1º/2020 · Parte 2 · Q10', topicos:['ens','entr'],
enunciado:R`<p>\(N\) átomos localizados não interagentes têm três estados: energia 0 e dois estados degenerados de energia \(\epsilon\), a \(T\).</p>`,
itens:[R`Calcule a energia interna.`,R`Calcule a entropia.`,R`Obtenha \(S\) nos limites \(T\to0\) e \(T\to\infty\) para \(\epsilon>0\).`,R`Idem para \(\epsilon\lt0\).`],
dica:R`\(z=1+2e^{-\beta\epsilon}\).`,
solucao:R`<p><b>(a)</b> \(U=\dfrac{2N\epsilon e^{-\beta\epsilon}}{1+2e^{-\beta\epsilon}}\).</p>
<p><b>(b)</b> \(S=Nk_B\left[\ln(1+2e^{-\beta\epsilon})+\dfrac{2\beta\epsilon e^{-\beta\epsilon}}{1+2e^{-\beta\epsilon}}\right]\).</p>
<p><b>(c)</b> \(\epsilon>0\): \(T\to0\), \(S\to0\) (fundamental único); \(T\to\infty\), \(S\to Nk_B\ln3\).</p>
<p><b>(d)</b> \(\epsilon\lt0\): o fundamental é o par degenerado, logo \(S\to Nk_B\ln2\) para \(T\to0\) e \(Nk_B\ln3\) para \(T\to\infty\).</p>`});

// ============ 2º/2011 ============
D({id:'ted-2011-2-q5', ano:2011, prova:'EUF 2º/2011 · Parte 1 · Q5', topicos:['ciclo','entr'], fig:'fig/ted_11b_q5.png',
enunciado:R`<p>Considere \(n\) mols de gás ideal monoatômico.</p>`,
itens:[R`Usando a 1ª lei, expresse a entropia em função de \(T\), \(V\) e \(n\).`,R`Um ciclo de Carnot: (1) expansão isotérmica reversível a \(T_q\) (A→B); (2) expansão adiabática reversível até \(T_f\) (B→C); (3) compressão isotérmica a \(T_f\) (C→D); (4) compressão adiabática (D→A). Calcule o trabalho e o calor em cada processo.`,R`Calcule a eficiência.`],
dica:R`\(dS=\dfrac{dU+p\,dV}{T}=nC_V\dfrac{dT}T+nR\dfrac{dV}V\). Nas adiabáticas, \(V_C/V_B=V_D/V_A\).`,
solucao:R`<p><b>(a)</b> \(S=nR\left[\tfrac32\ln T+\ln V\right]+\)const. (ou \(\tfrac32nR\ln T+nR\ln(V/n)+\)const., extensiva).</p>
<p><b>(b)</b> A→B: \(Q=W=nRT_q\ln(V_B/V_A)\). B→C: \(Q=0\), \(W=\tfrac32nR(T_q-T_f)\). C→D: \(Q=W=-nRT_f\ln(V_C/V_D)\). D→A: \(Q=0\), \(W=-\tfrac32nR(T_q-T_f)\).</p>
<p><b>(c)</b> Como \(V_B/V_A=V_C/V_D\): \(\eta=1-T_f/T_q\).</p>`});

D({id:'ted-2011-2-q10', ano:2011, prova:'EUF 2º/2011 · Parte 2 · Q10', topicos:['qst','potenc'],
enunciado:R`<p>A lei de Stefan–Boltzmann diz que a densidade de energia da radiação numa cavidade em equilíbrio é \(u(T)=aT^4\).</p>`,
itens:[R`Com \(U=u(T)V\), \(S=s(T)V\) e a pressão de radiação \(P=u/3\), use a 1ª lei para demonstrar a lei de Stefan–Boltzmann.`,R`Agora via física estatística, com a radiação como gás de fótons: (i) calcule \(Z\) e mostre que o número médio de fótons de energia \(\epsilon_j\) é \(\bar n_j=-\dfrac1\beta\dfrac{\partial\ln Z}{\partial\epsilon_j}=\dfrac1{e^{\beta\epsilon_j}-1}\); (ii) obtenha a lei de Stefan–Boltzmann usando \(g(\omega)d\omega=\kappa\dfrac{\omega^2d\omega}{e^{\beta\hbar\omega}-1}\).`],
dica:R`\(dU=T\,dS-P\,dV\) ⇒ \(\left(\dfrac{\partial U}{\partial V}\right)_T=T\left(\dfrac{\partial P}{\partial T}\right)_V-P\). Fótons: \(\mu=0\), número livre.`,
solucao:R`<p><b>(a)</b> \(u=\dfrac T3u'-\dfrac u3\Rightarrow4u=Tu'\Rightarrow u=aT^4\).</p>
<p><b>(b)</b> (i) Cada modo \(j\) é um oscilador com \(n_j=0,1,2,\dots\) fótons: \(Z=\prod_j\dfrac{1}{1-e^{-\beta\epsilon_j}}\); derivando, \(\bar n_j=\dfrac{1}{e^{\beta\epsilon_j}-1}\) (Bose–Einstein com \(\mu=0\)). (ii) \(u=\displaystyle\int\hbar\omega\,g\,d\omega=\kappa\hbar\left(\frac{k_BT}{\hbar}\right)^4\int_0^\infty\frac{x^3dx}{e^x-1}=\kappa\hbar\frac{\pi^4}{15}\left(\frac{k_BT}\hbar\right)^4\propto T^4\).</p>`});

// ============ 1º/2012 ============
D({id:'ted-2012-1-q5', ano:2012, prova:'EUF 1º/2012 · Parte 1 · Q5', topicos:['ens'],
enunciado:R`<p>Duas partículas distinguíveis, 1 e 2, estão cada uma num de dois compartimentos, A ou B. A energia de uma partícula é 0 em A e \(\varepsilon\) em B; se as duas estão no mesmo compartimento, há um custo adicional \(\Delta\). O sistema está a \(T\).</p>`,
itens:[R`Quais as configurações possíveis e suas energias?`,R`Calcule a função de partição \(Z\).`,R`Qual a probabilidade de cada configuração?`,R`Calcule a energia média.`,R`Obtenha a entropia em termos de \(Z\).`],
dica:R`Quatro configurações: AA, AB, BA, BB.`,
solucao:R`<p><b>(a)</b> AA: \(\Delta\); AB e BA: \(\varepsilon\); BB: \(2\varepsilon+\Delta\).</p>
<p><b>(b)</b> \(Z=e^{-\beta\Delta}+2e^{-\beta\varepsilon}+e^{-\beta(2\varepsilon+\Delta)}\).</p>
<p><b>(c)</b> \(P_i=e^{-\beta E_i}/Z\).</p>
<p><b>(d)</b> \(\langle E\rangle=\dfrac{\Delta e^{-\beta\Delta}+2\varepsilon e^{-\beta\varepsilon}+(2\varepsilon+\Delta)e^{-\beta(2\varepsilon+\Delta)}}{Z}=-\dfrac{\partial\ln Z}{\partial\beta}\).</p>
<p><b>(e)</b> \(S=k_B(\ln Z+\beta\langle E\rangle)=k_B\left(\ln Z-\beta\dfrac{\partial\ln Z}{\partial\beta}\right)\).</p>`});

D({id:'ted-2012-1-q10', ano:2012, prova:'EUF 1º/2012 · Parte 2 · Q10', topicos:['gas','entr'],
enunciado:R`<p>Um mol de gás ideal monoatômico, em \((P_0,V_0)\), sofre compressão adiabática reversível até \(V_0/2\). Depois, sempre isolado, sofre expansão livre até \(V_0\).</p>`,
itens:[R`Variação da energia interna na compressão.`,R`Variação da entropia na compressão.`,R`Variação da temperatura na expansão livre.`,R`Variação da entropia na expansão livre.`],
dica:R`\(TV^{2/3}\) constante; na expansão livre de gás ideal, \(T\) não muda.`,
solucao:R`<p><b>(a)</b> \(T_1=T_0 2^{2/3}\): \(\Delta U=\tfrac32P_0V_0(2^{2/3}-1)\approx0{,}88P_0V_0\).</p>
<p><b>(b)</b> 0 (adiabática reversível).</p>
<p><b>(c)</b> 0.</p>
<p><b>(d)</b> \(\Delta S=R\ln2>0\).</p>`});

// ============ 2º/2012 ============
D({id:'ted-2012-2-q5', ano:2012, prova:'EUF 2º/2012 · Parte 1 · Q5', topicos:['entr','ciclo'],
enunciado:R`<p>Dois corpos idênticos de capacidade térmica \(C_P\) constante estão a \(T_1\) e \(T_2>T_1\), a pressão constante e sem mudança de fase.</p>`,
itens:[R`Se forem postos em contato, isolados do resto do universo, qual a temperatura de equilíbrio?`,R`Qual a variação de entropia nesse processo?`,R`Agora os corpos são as fontes de uma pequena máquina térmica reversível que opera até o equilíbrio. Qual a temperatura final?`,R`Quanto trabalho a máquina produz?`],
dica:R`Reversível: entropia total constante.`,
solucao:R`<p><b>(a)</b> \(T_f=\dfrac{T_1+T_2}2\).</p>
<p><b>(b)</b> \(\Delta S=C_P\ln\dfrac{(T_1+T_2)^2}{4T_1T_2}\ge0\).</p>
<p><b>(c)</b> \(C_P\ln\dfrac{T_f^2}{T_1T_2}=0\Rightarrow T_f=\sqrt{T_1T_2}\).</p>
<p><b>(d)</b> \(W=C_P(T_1+T_2-2\sqrt{T_1T_2})=C_P(\sqrt{T_2}-\sqrt{T_1})^2\).</p>`});

D({id:'ted-2012-2-q10', ano:2012, prova:'EUF 2º/2012 · Parte 2 · Q10', topicos:['ens','gas'],
enunciado:R`<p>Um gás de \(N\) partículas ultrarrelativísticas (\(\varepsilon=cp\)), indistinguíveis e não interagentes, ocupa \(V\) a \(T\), no regime clássico.</p>`,
itens:[R`Mostre que \(Z=\dfrac{(8\pi V)^N}{N!\,(hc/k_BT)^{3N}}\).`,R`Determine a pressão.`,R`Calcule a entropia.`,R`Determine a energia interna.`],
dica:R`\(Z_1=\dfrac{V}{h^3}\int4\pi p^2e^{-\beta cp}dp=\dfrac{8\pi V}{(\beta hc)^3}\).`,
solucao:R`<p><b>(a)</b> Integral acima; \(Z=Z_1^N/N!\).</p>
<p><b>(b)</b> \(P=k_BT\,\partial_V\ln Z=Nk_BT/V\) (o mesmo que o gás não relativístico).</p>
<p><b>(c)</b> Com Stirling: \(S=Nk_B\left[\ln\dfrac{8\pi V(k_BT)^3}{N(hc)^3}+4\right]\).</p>
<p><b>(d)</b> \(U=-\partial_\beta\ln Z=3Nk_BT\) (e \(PV=U/3\)).</p>`});

// ============ 1º/2013 ============
D({id:'ted-2013-1-q5', ano:2013, prova:'EUF 1º/2013 · Parte 1 · Q5', topicos:['ens'],
enunciado:R`<p>Um gás ideal monoatômico de \(N\) moléculas de massa \(m\), a \(T\), está numa caixa cúbica de aresta \(L\) com base e topo horizontais, sob gravidade \(g\). Determine:</p>`,
itens:[R`a função de partição de uma molécula;`,R`a energia cinética média de uma molécula;`,R`a energia potencial média de uma molécula;`,R`a energia potencial média para \(mgL/k_BT\ll1\), até 2ª ordem nessa razão.`],
dica:R`\(z=\dfrac{L^2}{\lambda^3}\displaystyle\int_0^Le^{-\beta mgz}dz\). Use \(\langle U\rangle=-\partial_\beta\ln z_{pot}\).`,
solucao:R`<p><b>(a)</b> \(z=\dfrac{L^2}{\lambda^3}\dfrac{1-e^{-\beta mgL}}{\beta mg}\), \(\lambda=h/\sqrt{2\pi mk_BT}\).</p>
<p><b>(b)</b> \(\tfrac32k_BT\).</p>
<p><b>(c)</b> \(\langle U\rangle=k_BT-\dfrac{mgL}{e^{\beta mgL}-1}\).</p>
<p><b>(d)</b> Com \(x=\beta mgL\): \(\dfrac{x}{e^x-1}\approx1-\dfrac x2+\dfrac{x^2}{12}\), logo \(\langle U\rangle\approx\dfrac{mgL}2\left(1-\dfrac{mgL}{6k_BT}\right)\): começa no centro da caixa e desce levemente.</p>`});

D({id:'ted-2013-1-q10', ano:2013, prova:'EUF 1º/2013 · Parte 2 · Q10', topicos:['qst','gas'],
enunciado:R`<p>Um gás de fótons numa cavidade de volume \(V\) tem \(P=aT^4/3\) e \(U=aT^4V\). Inicialmente, \(T_0\) e \(V_0\).</p>`,
itens:[R`Determine o trabalho num processo isotérmico que duplica o volume (em termos de \(T_0\), \(V_0\), \(a\)).`,R`Determine o calor fornecido nesse processo.`,R`Com \(dQ=\left(\frac{\partial U}{\partial T}\right)_VdT+\left[\left(\frac{\partial U}{\partial V}\right)_T+P\right]dV\), obtenha a equação da adiabática em \(V\) e \(T\).`,R`Determine o trabalho numa expansão adiabática que duplica o volume.`],
dica:R`Na isoterma, \(P\) é constante.`,
solucao:R`<p><b>(a)</b> \(W=\tfrac13aT_0^4V_0\).</p>
<p><b>(b)</b> \(Q=\Delta U+W=aT_0^4V_0+\tfrac13aT_0^4V_0=\tfrac43aT_0^4V_0\).</p>
<p><b>(c)</b> \(4aT^3V\,dT+\tfrac43aT^4dV=0\Rightarrow VT^3=\)const.</p>
<p><b>(d)</b> \(T_f=T_02^{-1/3}\); \(W=-\Delta U=aT_0^4V_0(1-2^{-1/3})\approx0{,}21aT_0^4V_0\).</p>`});

// ============ 1º/2014 ============
D({id:'ted-2014-1-q5', ano:2014, prova:'EUF 1º/2014 · Parte 1 · Q5', topicos:['gas','entr'],
enunciado:R`<p>Um mol de gás ideal simples, com \(pv=RT\) e \(u=cRT\), está em \((v_0,p_0)\) e expande-se até \(2v_0\). Determine o trabalho \(W\) realizado pelo gás e o calor \(Q\) recebido, em termos de \(v_0\), \(p_0\) e \(c\), para cada processo:</p>`,
itens:[R`Expansão livre (determine também \(\Delta T\)).`,R`Expansão quase-estática isentrópica (obtenha também \(p_f\), usando \(pv^\gamma=\)const., \(\gamma=(c+1)/c\)).`,R`Expansão quase-estática isobárica.`,R`Expansão quase-estática isotérmica.`],
dica:R`\(\Delta u=c\,\Delta(pv)\).`,
solucao:R`<p><b>(a)</b> \(W=0\), \(Q=0\), \(\Delta T=0\).</p>
<p><b>(b)</b> \(p_f=p_02^{-\gamma}\); \(Q=0\); \(W=-\Delta u=c\,p_0v_0(1-2^{1-\gamma})=c\,p_0v_0(1-2^{-1/c})\).</p>
<p><b>(c)</b> \(W=p_0v_0\); \(\Delta u=c\,p_0v_0\); \(Q=(c+1)p_0v_0\).</p>
<p><b>(d)</b> \(W=Q=p_0v_0\ln2\).</p>`});

D({id:'ted-2014-1-q10', ano:2014, prova:'EUF 1º/2014 · Parte 2 · Q10', topicos:['ens'],
enunciado:R`<p>Um material tem \(N\) átomos magnéticos não interagentes cujos momentos podem apontar em três direções: \(\vec\mu_0=\mu\hat y\), \(\vec\mu_1=\mu\hat x\), \(\vec\mu_2=-\mu\hat x\). Com campo \(\vec H=H\hat y\), as energias são \(\epsilon_0=-\mu H\), \(\epsilon_1=\epsilon_2=0\). O sistema está a \(T\).</p>`,
itens:[R`Obtenha \(z\) de um átomo, \(Z\) do sistema e a energia livre \(f\) por átomo.`,R`Determine a energia média \(u\) e a entropia \(s\) por átomo.`,R`Obtenha a magnetização por átomo \(\vec m=\langle\vec\mu_n\rangle\).`,R`Verifique que a susceptibilidade a campo nulo, \(\chi_T=(\partial m_y/\partial H)_T\), obedece à lei de Curie.`],
dica:R`\(z=e^{\beta\mu H}+2\).`,
solucao:R`<p><b>(a)</b> \(z=2+e^{\beta\mu H}\), \(Z=z^N\), \(f=-k_BT\ln(2+e^{\beta\mu H})\).</p>
<p><b>(b)</b> \(u=-\dfrac{\mu He^{\beta\mu H}}{2+e^{\beta\mu H}}\); \(s=\dfrac{u-f}T=k_B\ln(2+e^{\beta\mu H})-\dfrac{\mu He^{\beta\mu H}}{T(2+e^{\beta\mu H})}\).</p>
<p><b>(c)</b> \(m_x=0\) (±x se cancelam); \(m_y=\dfrac{\mu e^{\beta\mu H}}{2+e^{\beta\mu H}}\).</p>
<p><b>(d)</b> \(\chi_T=\dfrac{\partial m_y}{\partial H}\Big|_{H=0}=\dfrac{2\beta\mu^2}{9}=\dfrac{2\mu^2}{9k_BT}\propto\dfrac1T\).</p>`});

// ============ 2º/2014 ============
D({id:'ted-2014-2-q5', ano:2014, prova:'EUF 2º/2014 · Parte 1 · Q5', topicos:['potenc','gas'],
enunciado:R`<p>Um gás tem equação de estado \(p=\dfrac{RT}v-\dfrac a{v^2}\), \(a>0\).</p>`,
itens:[R`Use \(\left(\dfrac{\partial u}{\partial v}\right)_T=T\left(\dfrac{\partial p}{\partial T}\right)_v-p\) para obter \(u\) como função de \(v\).`,R`Com \(c_v\) constante e igual a \(c\), ache \(u(T,v)\).`,R`Numa expansão livre (\(u\) constante, \(v\) cresce), a temperatura cresce ou decresce?`,R`Demonstre a identidade de (a).`],
dica:R`Em (d): \(du=T\,ds-p\,dv\) e a relação de Maxwell \((\partial s/\partial v)_T=(\partial p/\partial T)_v\).`,
solucao:R`<p><b>(a)</b> \(T\dfrac Rv-p=\dfrac a{v^2}\Rightarrow u=-\dfrac av+\phi(T)\).</p>
<p><b>(b)</b> \(u=cT-\dfrac av+\)const.</p>
<p><b>(c)</b> \(c\,\Delta T=a\left(\dfrac1{v_i}-\dfrac1{v_f}\right)\cdot(-1)\): \(T\) <b>diminui</b>.</p>
<p><b>(d)</b> \(\left(\dfrac{\partial u}{\partial v}\right)_T=T\left(\dfrac{\partial s}{\partial v}\right)_T-p\), e Maxwell (de \(df=-s\,dT-p\,dv\)) dá \((\partial s/\partial v)_T=(\partial p/\partial T)_v\).</p>`});

D({id:'ted-2014-2-q10', ano:2014, prova:'EUF 2º/2014 · Parte 2 · Q10', topicos:['ens'],
enunciado:R`<p>Gás monoatômico clássico de \(N\) átomos não interagentes de massa \(m\), em \(V\), a \(T\), com \(\mathcal H=p^2/2m\) por átomo.</p>`,
itens:[R`Mostre que a função de partição atômica é \(\zeta=V/\lambda^3\), \(\lambda=h/\sqrt{2\pi mk_BT}\).`,R`Obtenha \(Z\), \(F\) e \(f=F/N\) no limite termodinâmico (\(v=V/N\) fixo).`,R`Obtenha \(U\) e \(p\).`,R`Calcule a entropia por átomo no limite termodinâmico.`],
dica:R`\(Z=\zeta^N/N!\); Stirling.`,
solucao:R`<p><b>(a)</b> \(\zeta=\dfrac V{h^3}\left(\displaystyle\int e^{-\beta p^2/2m}dp\right)^3=\dfrac V{\lambda^3}\).</p>
<p><b>(b)</b> \(F=-k_BT\ln\dfrac{\zeta^N}{N!}\Rightarrow f=-k_BT\left[\ln\dfrac{v}{\lambda^3}+1\right]\).</p>
<p><b>(c)</b> \(U=\tfrac32Nk_BT\), \(p=Nk_BT/V\).</p>
<p><b>(d)</b> \(s=k_B\left[\ln\dfrac v{\lambda^3}+\dfrac52\right]\) (Sackur–Tetrode).</p>`});

// ============ 1º/2015 ============
D({id:'ted-2015-1-q5', ano:2015, prova:'EUF 1º/2015 · Parte 1 · Q5', topicos:['ciclo'],
enunciado:R`<p>Um gás ideal em \((p_A,V_A)\) (estado A) sofre expansão isobárica até \(V_B\) (B), depois expansão adiabática até \(p_C\) (C), contração isobárica até D e compressão adiabática de volta a A. É dada a razão \(\gamma\).</p>`,
itens:[R`Represente o ciclo num diagrama \(p\)–\(V\), indicando A, B, C e D.`,R`Calcule o calor em cada trecho em termos de \(p_A\), \(V_A\), \(V_B\), \(p_C\) e \(\gamma\).`,R`Determine a eficiência.`],
dica:R`Ciclo de Brayton. Nas isobáricas, \(Q=\dfrac{\gamma}{\gamma-1}p\,\Delta V\).`,
solucao:R`<p><b>(a)</b> Duas horizontais (\(p_A\) em cima, \(p_C\) embaixo) ligadas por adiabáticas.</p>
<p><b>(b)</b> A→B: \(Q_{AB}=\dfrac\gamma{\gamma-1}p_A(V_B-V_A)\). B→C e D→A: \(Q=0\). C→D: \(Q_{CD}=\dfrac\gamma{\gamma-1}p_C(V_D-V_C)\), com \(V_C=V_B(p_A/p_C)^{1/\gamma}\) e \(V_D=V_A(p_A/p_C)^{1/\gamma}\): \(Q_{CD}=-\dfrac\gamma{\gamma-1}p_C\left(\dfrac{p_A}{p_C}\right)^{1/\gamma}(V_B-V_A)\).</p>
<p><b>(c)</b> \(\eta=1-\left(\dfrac{p_C}{p_A}\right)^{1-1/\gamma}\).</p>`});

D({id:'ted-2015-1-q10', ano:2015, prova:'EUF 1º/2015 · Parte 2 · Q10', topicos:['ens'],
enunciado:R`<p>\(N\) osciladores harmônicos tridimensionais clássicos, independentes, de massa \(m\) e frequência \(\omega\), estão a \(T\).</p>`,
itens:[R`Escreva a hamiltoniana e obtenha a função de partição canônica.`,R`Obtenha a energia média por oscilador e a capacidade térmica do sistema.`],
dica:R`Cada oscilador 3D tem 6 termos quadráticos.`,
solucao:R`<p><b>(a)</b> \(\mathcal H=\sum_i\left(\dfrac{p_i^2}{2m}+\tfrac12m\omega^2r_i^2\right)\); \(Z=\left(\dfrac{k_BT}{\hbar\omega}\right)^{3N}\) (osciladores distinguíveis).</p>
<p><b>(b)</b> \(\langle\varepsilon\rangle=3k_BT\); \(C=3Nk_B\) (Dulong–Petit).</p>`});

// ============ 2º/2015 ============
D({id:'ted-2015-2-q5', ano:2015, prova:'EUF 2º/2015 · Parte 1 · Q5', topicos:['gas'],
enunciado:R`<p>Um cilindro vertical de seção \(A\) contém gás ideal, fechado no topo por um êmbolo de massa \(M\) que desliza sem atrito. É dado \(\gamma\).</p>`,
itens:[R`Calcule a pressão de equilíbrio do gás, com \(p_0\) a pressão atmosférica.`,R`Escreva a variação de \(p\) em termos da variação de volume \(V\) para pequenos deslocamentos, supondo processo quase-estático adiabático.`,R`Determine a força adicional sobre o êmbolo para um deslocamento \(dx\).`,R`Obtenha a frequência angular de pequenas oscilações em termos de \(V\), \(A\), \(M\), \(p_0\) e \(\gamma\).`],
dica:R`Experimento de Rüchardt: \(pV^\gamma\) constante.`,
solucao:R`<p><b>(a)</b> \(p=p_0+\dfrac{Mg}A\).</p>
<p><b>(b)</b> \(dp=-\gamma\dfrac pV\,dV\).</p>
<p><b>(c)</b> \(dV=A\,dx\Rightarrow dF=A\,dp=-\dfrac{\gamma pA^2}V\,dx\) (restauradora).</p>
<p><b>(d)</b> \(\omega=\sqrt{\dfrac{\gamma pA^2}{MV}}=\sqrt{\dfrac{\gamma A^2}{MV}\left(p_0+\dfrac{Mg}A\right)}\). Mede-se assim \(\gamma\).</p>`});

D({id:'ted-2015-2-q10', ano:2015, prova:'EUF 2º/2015 · Parte 2 · Q10', topicos:['ens','entr'],
enunciado:R`<p>Um sistema de \(N\gg1\) moléculas distinguíveis não interagentes, cada uma com energias 0 ou \(\epsilon>0\).</p>`,
itens:[R`Obtenha \(S/N\) em função apenas de \(E/N\), \(\epsilon\) e \(k_B\).`,R`Em equilíbrio a \(\beta=1/k_BT\), calcule \(E/N\).`,R`Qual o valor máximo de \(E/N\) nesse caso? Compare com o máximo se todas estivessem no estado de energia máxima.`],
dica:R`Microcanônico: \(\Omega=\binom Nn\), \(n=E/\epsilon\).`,
solucao:R`<p><b>(a)</b> Com \(x=E/N\epsilon\): \(S/N=-k_B[x\ln x+(1-x)\ln(1-x)]\).</p>
<p><b>(b)</b> \(E/N=\dfrac\epsilon{e^{\beta\epsilon}+1}\).</p>
<p><b>(c)</b> Para \(T\to\infty\), \(E/N\to\epsilon/2\); o máximo absoluto seria \(\epsilon\) (todas excitadas), acessível só com "temperatura negativa" (inversão de população).</p>`});

// ============ 1º/2018 ============
D({id:'ted-2018-1-q5', ano:2018, prova:'EUF 1º/2018 · Parte 1 · Q5', topicos:['gas'], fig:'fig/ted_18a_q5.png',
enunciado:R`<p>Um cilindro de seção \(A=5\times10^{-3}\) m² e comprimento inicial \(L=25\) cm contém \(5\times10^{-2}\) mol de gás monoatômico ideal (\(c_V=12{,}5\) J/(mol·K)). Uma base é um êmbolo sem atrito acoplado a uma mola de constante 400 N/cm, inicialmente não deformada e presa num anteparo. O gás está a 300 K, isolado, com pressão externa de \(10^5\) Pa. Fornece-se calor quase-estaticamente e o gás se expande, comprimindo a mola de 2 cm.</p>`,
itens:[R`Determine a pressão final do gás.`,R`Determine a temperatura final.`,R`Determine o trabalho realizado pelo gás.`,R`Determine o calor fornecido.`],
dica:R`Equilíbrio do êmbolo: \(pA=p_0A+kx\). O gás trabalha contra a atmosfera e a mola.`,
solucao:R`<p><b>(a)</b> \(p_f=p_0+\dfrac{kx}A=10^5+\dfrac{4\times10^4\cdot0{,}02}{5\times10^{-3}}=2{,}6\times10^5\) Pa.</p>
<p><b>(b)</b> \(V_f=A\cdot0{,}27=1{,}35\times10^{-3}\) m³; \(T_f=\dfrac{p_fV_f}{nR}=\dfrac{351}{0{,}4155}\approx8{,}4\times10^2\) K.</p>
<p><b>(c)</b> \(W=p_0\Delta V+\tfrac12kx^2=10+8=18\) J.</p>
<p><b>(d)</b> \(Q=nc_V\Delta T+W\approx0{,}625\cdot545+18\approx3{,}6\times10^2\) J.</p>`});

D({id:'ted-2018-1-q10', ano:2018, prova:'EUF 1º/2018 · Parte 2 · Q10', topicos:['ens'],
enunciado:R`<p>Um gás de \(N\gg1\) partículas clássicas de massa \(m\) numa caixa cúbica de aresta \(L\), perto da superfície da Terra, com \(V(z)=mgz\), está a \(T\).</p>`,
itens:[R`Escreva a hamiltoniana de uma partícula.`,R`Encontre a função de partição do sistema de \(N\) partículas clássicas.`,R`Para \(mgL\ll k_BT\), encontre a função de partição (use \(e^{-x}\approx1-x\)).`,R`Obtenha a pressão nesse regime em função de \(N\), \(T\) e \(V=L^3\).`],
dica:R`\(Z_1=\dfrac{L^2}{\lambda^3}\displaystyle\int_0^Le^{-\beta mgz}dz\).`,
solucao:R`<p><b>(a)</b> \(H=\dfrac{p_x^2+p_y^2+p_z^2}{2m}+mgz\).</p>
<p><b>(b)</b> \(Z=\dfrac1{N!}\left[\dfrac{L^2}{\lambda^3}\dfrac{1-e^{-\beta mgL}}{\beta mg}\right]^N\).</p>
<p><b>(c)</b> Até 2ª ordem: \(Z_1\approx\dfrac{V}{\lambda^3}\left(1-\dfrac{\beta mgL}{2}\right)\) (com só 1ª ordem em \(e^{-x}\), \(Z_1\approx V/\lambda^3\), um gás ideal).</p>
<p><b>(d)</b> \(p=k_BT\dfrac{\partial\ln Z}{\partial V}\approx\dfrac{Nk_BT}{V}-\dfrac{Nmg}{6V^{2/3}}\), ou seja \(p\approx Nk_BT/V\) na ordem dominante. A correção representa a média sobre as paredes (no fundo a pressão é maior que no topo).</p>`});

// ============ 2º/2018 ============
D({id:'ted-2018-2-q5', ano:2018, prova:'EUF 2º/2018 · Parte 1 · Q5', topicos:['gas'], fig:'fig/ted_18b_q5.png',
enunciado:R`<p>Um tubo em U de seção 20 cm², com paredes diatérmicas, contém água (densidade \(10^3\) kg/m³), aberto em ambas as extremidades à pressão de \(1{,}0\times10^5\) Pa, a \(3{,}0\times10^2\) K. Na extremidade direita, um êmbolo móvel sem atrito, de massa e espessura desprezíveis, é ajustado na superfície. A boca esquerda é vedada, aprisionando uma coluna de ar de \(L_i=5{,}0\) cm. Um líquido denso X é introduzido lentamente sobre o êmbolo, comprimindo o ar a temperatura constante. Com coluna de X de altura \(H=5{,}0\) cm, a coluna de ar mede \(L_f=4{,}5\) cm (ar como gás ideal).</p>`,
itens:[R`Qual a pressão do ar aprisionado após a compressão?`,R`Qual o trabalho realizado sobre o ar?`,R`Qual o calor trocado entre o ar e o ambiente?`,R`Ache a densidade do líquido X.`],
dica:R`Isotérmico: \(pV\) constante e \(W=nRT\ln(V_i/V_f)\). A água subiu 0,5 cm à esquerda e desceu 0,5 cm à direita.`,
solucao:R`<p><b>(a)</b> \(p=p_0\dfrac{5{,}0}{4{,}5}=1{,}11\times10^5\) Pa.</p>
<p><b>(b)</b> \(W_{sobre}=p_0V_i\ln\dfrac{10}9=10^5\cdot10^{-4}\cdot0{,}105\approx1{,}1\) J.</p>
<p><b>(c)</b> \(\Delta U=0\Rightarrow Q=-1{,}1\) J (o ar cede calor).</p>
<p><b>(d)</b> Desnível de água: 1,0 cm (lado esquerdo mais alto). \(p_{ar}+\rho_wg(0{,}01)=p_0+\rho_XgH\Rightarrow\rho_X=\dfrac{1{,}11\times10^4+100}{10\cdot0{,}05}\approx2{,}2\times10^4\) kg/m³.</p>`});

D({id:'ted-2018-2-q10', ano:2018, prova:'EUF 2º/2018 · Parte 2 · Q10', topicos:['ens','entr'],
enunciado:R`<p>\(N\) átomos localizados e independentes têm quatro estados: energia 0; dois degenerados de energia \(2\varepsilon\); um de energia \(3\varepsilon\) (\(\varepsilon>0\)), a \(T\).</p>`,
itens:[R`Calcule a energia livre de Helmholtz.`,R`Calcule a energia interna por partícula.`,R`Calcule a entropia.`,R`Obtenha a entropia por partícula nos limites \(T\to0\) e \(T\to\infty\) e interprete.`],
dica:R`\(z=1+2e^{-2\beta\varepsilon}+e^{-3\beta\varepsilon}\).`,
solucao:R`<p><b>(a)</b> \(F=-Nk_BT\ln(1+2e^{-2\beta\varepsilon}+e^{-3\beta\varepsilon})\).</p>
<p><b>(b)</b> \(u=\dfrac{4\varepsilon e^{-2\beta\varepsilon}+3\varepsilon e^{-3\beta\varepsilon}}{1+2e^{-2\beta\varepsilon}+e^{-3\beta\varepsilon}}\).</p>
<p><b>(c)</b> \(S=Nk_B\left[\ln z+\beta u\right]\).</p>
<p><b>(d)</b> \(T\to0\): \(s\to0\) (só o fundamental, terceira lei). \(T\to\infty\): \(s\to k_B\ln4\) (os 4 estados igualmente prováveis).</p>`});

// ============ 1º/2019 ============
D({id:'ted-2019-1-q5', ano:2019, prova:'EUF 1º/2019 · Parte 1 · Q5', topicos:['gas','entr'], fig:'fig/ted_19a_q5.png',
enunciado:R`<p>O compartimento esquerdo (volume \(V_0\)) contém 2 mols de gás ideal a \(P_0\); o direito (\(4V_0\)) está vazio. Ao abrir a válvula, o gás sofre expansão livre e ocupa os dois compartimentos.</p>`,
itens:[R`Qual a pressão após a expansão livre?`,R`Determine a variação de entropia na expansão livre.`,R`Depois, o gás é comprimido adiabática e quase-estaticamente até \(V_0\), terminando com \(P=5^{2/5}P_0\). O gás é mono, di ou poliatômico?`,R`Determine \(U_f/U_i\) (após a compressão / antes da expansão).`],
dica:R`Expansão livre de gás ideal: \(T\) constante.`,
solucao:R`<p><b>(a)</b> \(P_0/5\).</p>
<p><b>(b)</b> \(\Delta S=nR\ln5=2R\ln5\).</p>
<p><b>(c)</b> \(\dfrac{P_0}5\cdot5^\gamma=5^{\gamma-1}P_0=5^{2/5}P_0\Rightarrow\gamma=1{,}4\): diatômico.</p>
<p><b>(d)</b> \(U\propto T\propto PV\): \(\dfrac{U_f}{U_i}=5^{2/5}\approx1{,}9\).</p>`});

D({id:'ted-2019-1-q10', ano:2019, prova:'EUF 1º/2019 · Parte 2 · Q10', topicos:['ens'],
enunciado:R`<p>\(N\) íons magnéticos (\(N\) par) com \(\sigma_i=\pm1\), a \(T\), têm \(H=-J\displaystyle\sum_{k=1}^{N/2}\sigma_{2k-1}\sigma_{2k}-\mu_Bh\sum_i\sigma_i\): o 1º íon interage só com o 2º, o 3º só com o 4º, etc.</p>`,
itens:[R`Calcule a função de partição para \(N=2\).`,R`Generalize para \(N\) íons (\(N/2\) pares).`,R`Calcule o momento magnético total médio em função de \(h\), \(T\), \(J\) e \(\mu_B\).`,R`Qual o limite para \(h\to0\)? O sistema pode representar um ferromagneto?`],
dica:R`Estados do par: (++) \(-J-2\mu_Bh\); (−−) \(-J+2\mu_Bh\); (+−),(−+) \(+J\).`,
solucao:R`<p><b>(a)</b> \(Z_2=2e^{\beta J}\cosh(2\beta\mu_Bh)+2e^{-\beta J}\).</p>
<p><b>(b)</b> \(Z=Z_2^{N/2}\).</p>
<p><b>(c)</b> \(M=\dfrac1\beta\dfrac{\partial\ln Z}{\partial h}=\dfrac{N\mu_Be^{\beta J}\sinh(2\beta\mu_Bh)}{e^{\beta J}\cosh(2\beta\mu_Bh)+e^{-\beta J}}\).</p>
<p><b>(d)</b> \(M\to0\): não há magnetização espontânea. Pares independentes (sistema finito em cada bloco) não têm transição de fase, logo não é ferromagneto, embora \(J>0\) favoreça o alinhamento dentro de cada par.</p>`});

// ============ 2º/2019 ============
D({id:'ted-2019-2-q5', ano:2019, prova:'EUF 2º/2019 · Parte 1 · Q5', topicos:['ciclo','entr'], fig:'fig/ted_19b_q5.png',
enunciado:R`<p>1,0 mol de gás ideal monoatômico percorre, no sentido horário, o ciclo reversível A \((V_i,P_i)\) → B \((4V_i,P_i/16)\) (reta) → C \((V_i,P_i/16)\) (isobárica) → A (isocórica). Responda em termos de \(R\), \(P_i\), \(V_i\).</p>`,
itens:[R`Encontre \(T_A\), \(T_B\), \(T_C\).`,R`Encontre o calor total trocado por ciclo.`,R`Calcule o calor trocado entre A e B.`,R`Calcule \(\Delta S_{AB}=S_B-S_A\).`],
dica:R`Calor no ciclo = trabalho = área do triângulo.`,
solucao:R`<p><b>(a)</b> \(T_A=\dfrac{P_iV_i}R\), \(T_B=\dfrac{P_iV_i}{4R}\), \(T_C=\dfrac{P_iV_i}{16R}\).</p>
<p><b>(b)</b> \(Q_{ciclo}=W=\tfrac12\cdot3V_i\cdot\tfrac{15}{16}P_i=\tfrac{45}{32}P_iV_i\).</p>
<p><b>(c)</b> \(W_{AB}=\tfrac12\left(P_i+\tfrac{P_i}{16}\right)3V_i=\tfrac{51}{32}P_iV_i\); \(\Delta U_{AB}=\tfrac32R(T_B-T_A)=-\tfrac98P_iV_i\). \(Q_{AB}=\tfrac{15}{32}P_iV_i\).</p>
<p><b>(d)</b> \(\Delta S_{AB}=\tfrac32R\ln\tfrac14+R\ln4=-R\ln2\). (Mesmo com \(Q_{AB}>0\) no total, o gás recebe calor no início e cede no fim do trecho.)</p>`});

D({id:'ted-2019-2-q10', ano:2019, prova:'EUF 2º/2019 · Parte 2 · Q10', topicos:['ens','entr'],
enunciado:R`<p>\(N\) partículas distinguíveis não interagentes, \(H=\sum\varepsilon_i\), cada uma com \(\varepsilon_i=0\) ou \(\Delta>0\).</p>`,
itens:[R`Com energia total \(E\) (múltiplo de \(\Delta\)), \(\Omega=\dfrac{N!}{(E/\Delta)!(N-E/\Delta)!}\). Qual a probabilidade de um microestado específico?`,R`Calcule \(s=S/N\) em função de \(u=E/N\) para \(N\gg1\) (Stirling).`,R`Determine a temperatura em função de \(u\). Há intervalo de \(u\) com temperatura negativa?`,R`Calcule o calor específico. Há regime com calor específico negativo?`],
dica:R`\(1/T=\partial s/\partial u\).`,
solucao:R`<p><b>(a)</b> \(1/\Omega\) (probabilidades iguais a priori).</p>
<p><b>(b)</b> Com \(x=u/\Delta\): \(s=-k_B[x\ln x+(1-x)\ln(1-x)]\).</p>
<p><b>(c)</b> \(\dfrac1T=\dfrac{k_B}\Delta\ln\dfrac{1-x}{x}\): \(T\lt0\) para \(\Delta/2\lt u\lt\Delta\) (inversão de população).</p>
<p><b>(d)</b> \(u=\dfrac{\Delta}{e^{\Delta/k_BT}+1}\Rightarrow c=k_B\left(\dfrac{\Delta}{k_BT}\right)^2\dfrac{e^{\Delta/k_BT}}{(e^{\Delta/k_BT}+1)^2}\ge0\) sempre (inclusive para \(T\lt0\)): não há calor específico negativo.</p>`});

})();
