window.BANK = window.BANK || [];
(function(){
const D = q => window.BANK.push(Object.assign({area:'fm', tipo:'disc'}, q));
const R = String.raw;

// ============ 2º/2010 ============
D({id:'fmd-2010-2-q3', ano:2010, prova:'EUF 2º/2010 · Parte 1 · Q3', topicos:['ondapart'],
enunciado:R`<p>Uma fonte produz um feixe de nêutrons com energia cinética média de 0,0133 eV e incerteza relativa na velocidade \(\Delta v/v=1\times10^{-4}\). Num instante, a função de onda de um nêutron é o pacote</p><p>\(\Psi(x)=A\exp\left(-\dfrac{x^2}{2(\Delta x)^2}\right)e^{ik_0x}\),</p><p>com \(A\) constante, \(\Delta x\) a incerteza na posição e \(\hbar k_0\) o momento médio.</p>`,
itens:[R`Estime o comprimento de onda de de Broglie do nêutron e identifique a região do espectro eletromagnético correspondente.`,R`Estime a temperatura associada a essa fonte de nêutrons.`,R`Determine \(A\) em termos de \(\Delta x\).`,R`Esse pacote tem produto de incertezas mínimo. Estime \(\Delta x\).`],
dica:R`\(m_nc^2\approx940\) MeV, \(hc=1240\) eV·nm. Para a temperatura, \(\langle K\rangle=\tfrac32k_BT\). Para (d), \(\Delta p=m\Delta v=p\,(\Delta v/v)\) e \(\Delta x\Delta p=\hbar/2\).`,
solucao:R`<p><b>(a)</b> \(pc=\sqrt{2mc^2K}=\sqrt{2\cdot9{,}4\times10^8\cdot0{,}0133}\approx5{,}0\times10^3\) eV, logo \(\lambda=\dfrac{hc}{pc}=\dfrac{1240}{5000}\approx0{,}25\) nm = 2,5 Å: região de <b>raios X</b> (por isso nêutrons térmicos difratam em cristais).</p>
<p><b>(b)</b> \(T=\dfrac{2K}{3k_B}=\dfrac{2\cdot0{,}0133}{3\cdot8{,}62\times10^{-5}}\approx1{,}0\times10^2\) K (nêutrons "frios").</p>
<p><b>(c)</b> \(|A|^2\displaystyle\int e^{-x^2/\Delta x^2}dx=|A|^2\sqrt\pi\,\Delta x=1\Rightarrow A=(\pi\Delta x^2)^{-1/4}\).</p>
<p><b>(d)</b> \(\Delta p=\hbar k_0\times10^{-4}\). Com \(\Delta x\Delta p=\hbar/2\): \(\Delta x=\dfrac{1}{2k_0\times10^{-4}}=\dfrac{\lambda}{4\pi\times10^{-4}}\approx\dfrac{0{,}25\ \text{nm}}{1{,}26\times10^{-3}}\approx2\times10^{-7}\) m ≈ 0,2 μm, ou seja, muito maior que \(\lambda\).</p>`});

D({id:'fmd-2010-2-q4', ano:2010, prova:'EUF 2º/2010 · Parte 1 · Q4', topicos:['bohr'],
enunciado:R`<p>Átomos muônicos têm um múon negativo (carga do elétron, massa \(207m_e\)) orbitando um núcleo de carga \(Ze\). Para o átomo muônico com núcleo de um próton (\(m_p=1836m_e\)), estime:</p>`,
itens:[R`a massa reduzida do sistema, em termos de \(m_e\);`,R`o raio da primeira órbita de Bohr;`,R`o comprimento de onda da primeira linha da série de Lyman, sabendo que \(1/\lambda=R_\mu(1-1/n_i^2)\), com \(R_\mu\) a constante de Rydberg muônica;`,R`a região do espectro eletromagnético adequada para estudar essa série.`],
dica:R`Tudo escala com a massa reduzida: \(a\propto1/\mu\), \(E\propto\mu\), \(R\propto\mu\).`,
solucao:R`<p><b>(a)</b> \(\mu=\dfrac{207\cdot1836}{207+1836}m_e\approx186\,m_e\).</p>
<p><b>(b)</b> \(a_\mu=a_0\dfrac{m_e}{\mu}=\dfrac{0{,}529\ \text{Å}}{186}\approx2{,}8\times10^{-13}\) m (≈ 285 fm, ainda maior que o próton).</p>
<p><b>(c)</b> Lyman-α do H: 10,2 eV, ou seja 121,6 nm. Escalando: \(E=186\cdot10{,}2\approx1{,}9\) keV, então \(\lambda\approx\dfrac{121{,}6}{186}\approx0{,}65\) nm.</p>
<p><b>(d)</b> Raios X (moles).</p>`});

// ============ 1º/2011 ============
D({id:'fmd-2011-1-q3', ano:2011, prova:'EUF 1º/2011 · Parte 1 · Q3', topicos:['bohr','ondapart','foton'], fig:'fig/fmd_11a_q3.png',
enunciado:R`<p>Para (a)–(c), suponha que no modelo de Bohr, para uma partícula de massa \(m\) em órbita circular de raio \(r\) e velocidade \(v\), a força coulombiana seja substituída por uma força central atrativa de módulo \(kr\), valendo os postulados de Bohr.</p><p>Para (d), um feixe de raios X com dois comprimentos de onda é difratado por um cristal com distância interplanar de 1 nm. A figura mostra a intensidade em pequenos ângulos (medidos em relação ao feixe incidente). Use \(\pi=3\).</p>`,
itens:[R`Deduza os raios \(r_n\) das órbitas permitidas em função de \(n\), \(k\), \(\hbar\) e \(m\). Quais os valores possíveis de \(n\)?`,R`Com \(V(r)=kr^2/2\), deduza as energias \(E_n\) e a frequência irradiada numa transição entre órbitas adjacentes.`,R`Calcule o comprimento de onda de de Broglie para \(n=2\).`,R`Determine os comprimentos de onda dos raios X do feixe.`],
dica:R`\(mv^2/r=kr\) e \(mvr=n\hbar\). Em (d), o ângulo com o feixe incidente é \(2\theta\) e Bragg dá \(2d\sin\theta=n\lambda\). Procure quais picos são ordens sucessivas do mesmo \(\lambda\).`,
solucao:R`<p><b>(a)</b> \(v=r\sqrt{k/m}\); \(m r^2\sqrt{k/m}=n\hbar\Rightarrow r_n=\sqrt{\dfrac{n\hbar}{\sqrt{mk}}}\), \(n=1,2,3,\dots\) (\(n=0\) daria \(r=0\), sem órbita).</p>
<p><b>(b)</b> \(E=\tfrac12mv^2+\tfrac12kr^2=kr^2=n\hbar\sqrt{k/m}=n\hbar\omega\), com \(\omega=\sqrt{k/m}\). Entre órbitas adjacentes \(\Delta E=\hbar\omega\), logo \(f=\dfrac{\omega}{2\pi}=\dfrac1{2\pi}\sqrt{\dfrac km}\), que é a própria frequência orbital clássica.</p>
<p><b>(c)</b> \(\lambda=\dfrac{h}{mv}=\dfrac{2\pi r_n}{n}\Rightarrow\lambda_2=\pi r_2=\pi\sqrt{\dfrac{2\hbar}{\sqrt{mk}}}\).</p>
<p><b>(d)</b> Picos em 0,8°, 1,2°, 1,6° e 2,4°. A sequência 0,8; 1,6; 2,4 são as ordens 1, 2, 3 de \(\lambda_1\); 1,2° (e 2,4° como 2ª ordem) é \(\lambda_2\). Com \(2\theta=0{,}8^\circ\): \(\theta=0{,}4^\circ=\dfrac{0{,}4\cdot3}{180}\approx6{,}7\times10^{-3}\) rad e \(\lambda_1=2d\theta\approx0{,}013\) nm. Para \(2\theta=1{,}2^\circ\): \(\theta=0{,}01\) rad e \(\lambda_2=0{,}020\) nm. (Se o ângulo do gráfico for lido como \(\theta\), os valores dobram: 0,027 e 0,040 nm.)</p>`});

D({id:'fmd-2011-1-q4', ano:2011, prova:'EUF 1º/2011 · Parte 1 · Q4', topicos:['foton'],
enunciado:R`<p>Num experimento fotoelétrico, luz de 414 nm e intensidade \(I_0\) incide num metal de função trabalho 2,5 eV. Depois, considere o espalhamento Compton de um fóton de comprimento de onda \(\lambda=2\lambda_C\equiv2h/(m_0c)\) por um elétron em repouso; após o espalhamento o fóton perdeu metade de sua energia.</p>`,
itens:[R`Calcule a energia cinética máxima dos fotoelétrons.`,R`Se a intensidade dobrar, o que ocorre com a energia cinética dos fotoelétrons?`,R`Calcule o comprimento de onda do fóton espalhado (em função de \(\lambda_C\)) e o ângulo de espalhamento.`,R`Calcule a energia total e o momento do elétron após a colisão (em função de \(m_0\) e \(c\)).`],
dica:R`Compton: \(\lambda'-\lambda=\lambda_C(1-\cos\theta)\). Perder metade da energia = dobrar \(\lambda\).`,
solucao:R`<p><b>(a)</b> \(E=1240/414=3{,}0\) eV; \(K_{\max}=0{,}5\) eV.</p>
<p><b>(b)</b> Nada muda em \(K_{\max}\); aumenta o número de fotoelétrons (a corrente).</p>
<p><b>(c)</b> \(\lambda'=2\lambda=4\lambda_C\). \(\Delta\lambda=2\lambda_C=\lambda_C(1-\cos\theta)\Rightarrow\cos\theta=-1\), \(\theta=180^\circ\) (retroespalhamento).</p>
<p><b>(d)</b> \(E_0=\dfrac{hc}{2\lambda_C}=\dfrac{m_0c^2}2\), \(E'=\dfrac{m_0c^2}{4}\). Energia do elétron: \(E_e=m_0c^2+\tfrac14m_0c^2=\tfrac54m_0c^2\). Momento (fóton volta): \(p_e=\dfrac{m_0c}{2}+\dfrac{m_0c}{4}=\tfrac34m_0c\), no sentido do fóton incidente. Confere: \((5/4)^2=(3/4)^2+1\).</p>`});

// ============ 2º/2013 ============
D({id:'fmd-2013-2-q3', ano:2013, prova:'EUF 2º/2013 · Parte 1 · Q3', topicos:['foton'],
enunciado:R`<p>Um feixe de luz de 480 nm e intensidade 10 W/m² incide sobre um catodo de 1 cm² numa célula fotoelétrica. A função trabalho do metal é 2,2 eV. Responda com dois algarismos significativos.</p>`,
itens:[R`Calcule a energia dos fótons em joules e em eV.`,R`Calcule o número de fótons por segundo que incidem na placa.`,R`Se a eficiência é de 20% (só 20% dos fótons arrancam elétrons), calcule a corrente máxima na célula.`,R`Calcule o comprimento de onda máximo acima do qual não ocorre efeito fotoelétrico.`],
dica:R`Potência na placa = intensidade × área. Corrente de saturação = (elétrons por segundo) × \(e\).`,
solucao:R`<p><b>(a)</b> \(E=1240/480=2{,}6\) eV \(=4{,}1\times10^{-19}\) J.</p>
<p><b>(b)</b> \(P=10\cdot10^{-4}=10^{-3}\) W; \(N=\dfrac{10^{-3}}{4{,}1\times10^{-19}}\approx2{,}4\times10^{15}\) fótons/s.</p>
<p><b>(c)</b> \(i=0{,}2\cdot2{,}4\times10^{15}\cdot1{,}6\times10^{-19}\approx7{,}7\times10^{-5}\) A (≈ 77 μA).</p>
<p><b>(d)</b> \(\lambda_0=1240/2{,}2\approx5{,}6\times10^2\) nm.</p>`});

D({id:'fmd-2013-2-q4', ano:2013, prova:'EUF 2º/2013 · Parte 1 · Q4', topicos:['schr'],
enunciado:R`<p>Uma partícula de massa \(m\) oscila no potencial \(U(x)=m\omega^2x^2/2\), num estado com função de onda \(\psi(x)=Ae^{-bx^2}\).</p>`,
itens:[R`Escreva a equação de Schrödinger independente do tempo.`,R`Determine \(b\) para que \(\psi\) seja solução e a energia correspondente.`,R`Calcule a constante de normalização \(A\).`,R`Classicamente a partícula oscilaria em \([-x_{\max},x_{\max}]\), com \(x_{\max}=\sqrt{\hbar/m\omega}\). Calcule a probabilidade quântica de encontrá-la nesse intervalo e compare com a clássica.`],
dica:R`Substitua \(\psi\) e iguale os coeficientes de \(x^2\) e de \(x^0\). Em (d) o resultado é uma função erro: \(\text{erf}(1)\approx0{,}84\).`,
solucao:R`<p><b>(a)</b> \(-\dfrac{\hbar^2}{2m}\psi''+\tfrac12m\omega^2x^2\psi=E\psi\).</p>
<p><b>(b)</b> \(\psi''=(4b^2x^2-2b)\psi\). Termo em \(x^2\): \(-\dfrac{\hbar^2}{2m}4b^2+\tfrac12m\omega^2=0\Rightarrow b=\dfrac{m\omega}{2\hbar}\). Termo constante: \(E=\dfrac{\hbar^2b}{m}=\dfrac{\hbar\omega}{2}\).</p>
<p><b>(c)</b> \(A^2\sqrt{\pi/2b}=1\Rightarrow A=\left(\dfrac{m\omega}{\pi\hbar}\right)^{1/4}\).</p>
<p><b>(d)</b> \(|\psi|^2=A^2e^{-x^2/x_{\max}^2}\). \(P=\dfrac{1}{\sqrt\pi\,x_{\max}}\displaystyle\int_{-x_{\max}}^{x_{\max}}e^{-x^2/x_{\max}^2}dx=\text{erf}(1)\approx0{,}84\). Classicamente, com \(E=\hbar\omega/2\) a amplitude é exatamente \(x_{\max}\): probabilidade 1. Quanticamente há ~16% de chance na região classicamente proibida.</p>`});

// ============ 1º/2016 ============
D({id:'fmd-2016-1-q3', ano:2016, prova:'EUF 1º/2016 · Parte 1 · Q3', topicos:['rel','nucl'],
enunciado:R`<p>Um píon positivo pode decair por \(\pi^+\to\mu^++\nu_\mu\). Desprezando a massa do neutrino e com o píon inicialmente em repouso num referencial \(S\), determine em \(S\), em termos de \(m_\pi\) e \(m_\mu\):</p>`,
itens:[R`O módulo do momento do múon.`,R`A energia total do múon.`,R`A velocidade do múon.`,R`A distância média que o múon percorre antes de decair, sendo \(\tau\) sua vida média própria.`],
dica:R`\(\vec p_\mu=-\vec p_\nu\), \(E_\nu=pc\). Conservação de energia: \(m_\pi c^2=\sqrt{p^2c^2+m_\mu^2c^4}+pc\).`,
solucao:R`<p><b>(a)</b> \(m_\pi c^2-pc=\sqrt{p^2c^2+m_\mu^2c^4}\Rightarrow p=\dfrac{(m_\pi^2-m_\mu^2)c}{2m_\pi}\).</p>
<p><b>(b)</b> \(E_\mu=m_\pi c^2-pc=\dfrac{(m_\pi^2+m_\mu^2)c^2}{2m_\pi}\).</p>
<p><b>(c)</b> \(v=\dfrac{pc^2}{E}=\dfrac{m_\pi^2-m_\mu^2}{m_\pi^2+m_\mu^2}c\).</p>
<p><b>(d)</b> \(d=v\gamma\tau=\dfrac{p}{m_\mu}\tau=\dfrac{(m_\pi^2-m_\mu^2)c\tau}{2m_\pi m_\mu}\).</p>`});

D({id:'fmd-2016-1-q4', ano:2016, prova:'EUF 1º/2016 · Parte 1 · Q4', topicos:['bohr','corpo'],
enunciado:R`<p>Considere uma partícula não relativística de massa \(m\) em movimento harmônico simples com frequência \(\nu\).</p>`,
itens:[R`Determine os níveis de energia permitidos pela regra de Bohr–Sommerfeld \(\oint p\,dq=nh\).`,R`Para um grande número dessas partículas em equilíbrio térmico, com \(P(E_n)=Ae^{-E_n/k_BT}\), calcule a energia média \(\langle E\rangle\).`],
dica:R`No espaço de fase a órbita de energia \(E\) é uma elipse; a integral é a área dela. Em (b), use série geométrica e \(\langle E\rangle=-\partial\ln Z/\partial\beta\).`,
solucao:R`<p><b>(a)</b> Elipse \(\dfrac{p^2}{2mE}+\dfrac{q^2}{2E/m\omega^2}=1\), área \(\pi\sqrt{2mE}\sqrt{2E/m\omega^2}=\dfrac{2\pi E}{\omega}=\dfrac E\nu\). Logo \(E_n=nh\nu\).</p>
<p><b>(b)</b> \(Z=\sum_ne^{-n\beta h\nu}=\dfrac1{1-e^{-\beta h\nu}}\). \(\langle E\rangle=-\dfrac{\partial\ln Z}{\partial\beta}=\dfrac{h\nu}{e^{h\nu/k_BT}-1}\): a energia média de Planck. Para \(k_BT\gg h\nu\) volta a \(k_BT\) (equipartição).</p>`});

// ============ 2º/2016 ============
D({id:'fmd-2016-2-q3', ano:2016, prova:'EUF 2º/2016 · Parte 1 · Q3', topicos:['foton','rel'],
enunciado:R`<p>No espalhamento Compton, um fóton de energia–momento \((E_0,\vec p_0)\) incide sobre um elétron de massa \(m\) em repouso. Emerge um fóton \((E,\vec p)\) num ângulo \(\theta\) com a direção de incidência.</p>`,
itens:[R`Sendo \(\vec p_e\) o momento do elétron espalhado, escreva a conservação de energia–momento.`,R`Obtenha \(\dfrac1E-\dfrac1{E_0}=\dfrac{1}{mc^2}(1-\cos\theta)\).`,R`Sendo \(\lambda_0\) o comprimento de onda incidente, determine o espalhado para \(\theta=\pi/2\).`,R`Nas mesmas condições, qual a energia cinética do elétron? Use \(\lambda_0\), \(\lambda_C\equiv h/mc\) e constantes universais.`],
dica:R`Isole \(\vec p_e=\vec p_0-\vec p\) e eleve ao quadrado; use \(E_e^2=p_e^2c^2+m^2c^4\) com \(E_e=E_0-E+mc^2\).`,
solucao:R`<p><b>(a)</b> \(E_0+mc^2=E+E_e\); \(\vec p_0=\vec p+\vec p_e\).</p>
<p><b>(b)</b> \(p_e^2c^2=E_0^2+E^2-2E_0E\cos\theta\) e \(p_e^2c^2=(E_0-E+mc^2)^2-m^2c^4=(E_0-E)^2+2(E_0-E)mc^2\). Igualando: \((E_0-E)mc^2=E_0E(1-\cos\theta)\), ou seja \(\dfrac1E-\dfrac1{E_0}=\dfrac{1-\cos\theta}{mc^2}\).</p>
<p><b>(c)</b> Multiplicando por \(hc\): \(\lambda=\lambda_0+\lambda_C(1-\cos\theta)=\lambda_0+\lambda_C\).</p>
<p><b>(d)</b> \(K=hc\left(\dfrac1{\lambda_0}-\dfrac1{\lambda_0+\lambda_C}\right)=\dfrac{hc\,\lambda_C}{\lambda_0(\lambda_0+\lambda_C)}\).</p>`});

D({id:'fmd-2016-2-q9', ano:2016, prova:'EUF 2º/2016 · Parte 2 · Q9', topicos:['rel'],
enunciado:R`<p>Para dois eventos separados por \((\Delta x,\Delta y,\Delta z)\) e \(\Delta t\), o intervalo invariante é \(\Delta s^2\equiv\Delta x^2+\Delta y^2+\Delta z^2-c^2\Delta t^2\).</p>`,
itens:[R`Eventos (1) e (2) ocorrem em posições distintas de \(S\) com \(\Delta s^2>0\). Existe um referencial em que ocorrem no mesmo ponto? Justifique.`,R`Nas mesmas condições, (2) poderia ter sido causado por (1)? Considere um sinal com velocidade \(\vec V\).`,R`Um relógio está em repouso num referencial \(S'\) que se move com \(\vec V\) em relação a \(S\). (i) Qual o sinal de \(\Delta s^2\) entre duas posições sucessivas dos ponteiros? (ii) Relacione o tempo próprio \(\Delta t_0\) com o tempo \(\Delta t\) em \(S\).`,R`Uma fonte F e um detector D estão separados por \(L\hat x\) no laboratório. Uma partícula vai de F a D com \(\vec V=V_0\hat x\). (i) Quais \(\Delta x\) e \(\Delta t\) entre produção e detecção no laboratório? (ii) Sendo \(L_0\) a distância F–D no referencial da partícula, quais \(\Delta x'\) e \(\Delta t'\) nesse referencial? (iii) Relacione \(L_0\) e \(L\).`],
dica:R`Se os eventos ocorrem no mesmo ponto de algum referencial, \(\Delta s^2=-c^2\Delta t'^2\le0\). No referencial da partícula, ela está parada: os dois eventos ocorrem no mesmo lugar.`,
solucao:R`<p><b>(a)</b> Não: no mesmo ponto teríamos \(\Delta s^2=-c^2\Delta t'^2\le0\), contradizendo a invariância.</p>
<p><b>(b)</b> Não: seria preciso \(|\vec V|=|\Delta\vec r|/\Delta t>c\).</p>
<p><b>(c)</b> (i) Negativo (tipo tempo): em \(S'\), \(\Delta s^2=-c^2\Delta t_0^2\). (ii) Em \(S\): \(V^2\Delta t^2-c^2\Delta t^2=-c^2\Delta t_0^2\Rightarrow\Delta t=\dfrac{\Delta t_0}{\sqrt{1-V^2/c^2}}\).</p>
<p><b>(d)</b> (i) \(\Delta x=L\), \(\Delta t=L/V_0\). (ii) \(\Delta x'=0\) e \(\Delta t'=L_0/V_0\) (F e D passam pela partícula com velocidade \(V_0\)). (iii) Invariância: \(L^2-\dfrac{c^2L^2}{V_0^2}=-\dfrac{c^2L_0^2}{V_0^2}\Rightarrow L_0=L\sqrt{1-V_0^2/c^2}\) (contração).</p>`});

// ============ 1º/2017 ============
D({id:'fmd-2017-1-q4', ano:2017, prova:'EUF 1º/2017 · Parte 1 · Q4', topicos:['corpo'],
enunciado:R`<p>A densidade de energia da radiação em equilíbrio térmico pode ser escrita (por argumentos termodinâmicos) como \(u(T)=\displaystyle\int_0^\infty\nu^3f\!\left(\frac\nu T\right)d\nu\).</p>`,
itens:[R`Apenas com essa expressão, encontre \(u(T)\) a menos de um fator independente de \(T\). Qual a dimensão desse fator?`,R`Planck encontrou \(\nu^3f(\nu/T)=\dfrac{8\pi\nu^2}{c^3}\dfrac{h\nu}{e^{h\nu/k_BT}-1}\). (i) Discuta o significado de \(\dfrac{8\pi\nu^2}{c^3}d\nu\). (ii) Obtenha o limite \(h\nu\ll k_BT\). (iii) Qual o significado desse limite na física clássica?`,R`Com \(c\), \(\hbar\) e \(G\) defina unidades de tempo \(t_P\), comprimento \(l_P\) e massa \(m_P\), e também a temperatura de Planck \(T_P\). Estime suas ordens de grandeza no SI.`],
dica:R`Troque a variável para \(x=\nu/T\). Na análise dimensional, \([G]=\text{m}^3\text{kg}^{-1}\text{s}^{-2}\), \([\hbar]=\text{J·s}\).`,
solucao:R`<p><b>(a)</b> Com \(\nu=Tx\): \(u=T^4\displaystyle\int_0^\infty x^3f(x)dx=aT^4\) (Stefan–Boltzmann). \([a]=\text{J·m}^{-3}\text{K}^{-4}\).</p>
<p><b>(b)</b> (i) Número de modos normais do campo EM (duas polarizações) por unidade de volume com frequência entre \(\nu\) e \(\nu+d\nu\). (ii) \(e^{x}-1\approx x\): \(\nu^3f\approx\dfrac{8\pi\nu^2}{c^3}k_BT\) (Rayleigh–Jeans). (iii) É a equipartição clássica (\(k_BT\) por modo). Integrada em todas as frequências, diverge: a "catástrofe do ultravioleta".</p>
<p><b>(c)</b> \(t_P=\sqrt{\hbar G/c^5}\sim5\times10^{-44}\) s; \(l_P=\sqrt{\hbar G/c^3}\sim1{,}6\times10^{-35}\) m; \(m_P=\sqrt{\hbar c/G}\sim2\times10^{-8}\) kg; \(T_P=m_Pc^2/k_B\sim10^{32}\) K.</p>`});

D({id:'fmd-2017-1-q9', ano:2017, prova:'EUF 1º/2017 · Parte 2 · Q9', topicos:['rel'],
enunciado:R`<p>Um planeta extrassolar está a \(cT\) anos-luz da Terra. Uma expedição é planejada para que os astronautas envelheçam \(3T/4\) anos na viagem de ida, feita quase toda com velocidade constante (despreze as acelerações).</p>`,
itens:[R`Qual deve ser a velocidade dos astronautas em relação à Terra na ida?`,R`Segundo os astronautas, qual a distância percorrida na ida?`,R`A cada ano (relógio da nave) os astronautas enviam um pulso de luz para a Terra. Qual a periodicidade dos pulsos recebidos na Terra?`,R`Na metade da ida, um casal retorna num módulo que, segundo a nave, volta em direção à Terra com velocidade \(5c/6\). Calcule o tempo total (na Terra) que o casal ficou fora.`],
dica:R`\(\Delta\tau=\dfrac{cT}{v\gamma}\). Para (d), componha \(0{,}8c\) (afastando) com \(5c/6\) (voltando) relativisticamente.`,
solucao:R`<p><b>(a)</b> \(\dfrac{c}{v}\sqrt{1-\beta^2}=\dfrac34\Rightarrow\dfrac{1-\beta^2}{\beta^2}=\dfrac9{16}\Rightarrow v=0{,}8c\).</p>
<p><b>(b)</b> \(L'=cT/\gamma=0{,}6\,cT\).</p>
<p><b>(c)</b> Doppler com afastamento: \(1\cdot\sqrt{\dfrac{1+0{,}8}{1-0{,}8}}=3\) anos.</p>
<p><b>(d)</b> Até a metade: \(t_1=\dfrac{cT/2}{0{,}8c}=0{,}625T\). Velocidade do módulo na Terra: \(u=\dfrac{0{,}8-5/6}{1-0{,}8\cdot5/6}c=\dfrac{-1/30}{1/3}c=-0{,}1c\). Volta: \(\dfrac{cT/2}{0{,}1c}=5T\). Total: \(5{,}625T=\tfrac{45}{8}T\).</p>`});

// ============ 2º/2017 ============
D({id:'fmd-2017-2-q3', ano:2017, prova:'EUF 2º/2017 · Parte 1 · Q3', topicos:['rel'],
enunciado:R`<p>Uma partícula de massa de repouso \(m\) e energia total igual ao dobro da energia de repouso colide frontalmente com uma partícula idêntica em repouso. Forma-se uma única partícula de massa \(M\) (colisão totalmente inelástica). Responda em termos de \(c\) e \(m\).</p>`,
itens:[R`Calcule a velocidade \(v\) da partícula incidente.`,R`Por conservação de energia–momento: (i) determine a velocidade \(V\) da partícula resultante em termos de \(v\) e o valor numérico de \(V/c\); (ii) determine \(M\).`,R`Calcule a energia cinética da partícula resultante.`],
dica:R`\(\gamma=2\). Depois \(V=p_{tot}c^2/E_{tot}\) e \(Mc^2=\sqrt{E^2-p^2c^2}\).`,
solucao:R`<p><b>(a)</b> \(\gamma=2\Rightarrow v=\dfrac{\sqrt3}{2}c\).</p>
<p><b>(b)</b> (i) \(V=\dfrac{\gamma mv}{\gamma m+m}=\dfrac{\gamma v}{\gamma+1}=\dfrac{2v}{3}=\dfrac{c}{\sqrt3}\approx0{,}58c\). (ii) \(E=3mc^2\), \(pc=\sqrt3\,mc^2\), \(Mc^2=\sqrt{9-3}\,mc^2\Rightarrow M=\sqrt6\,m\approx2{,}45m>2m\).</p>
<p><b>(c)</b> \(K=E-Mc^2=(3-\sqrt6)mc^2\approx0{,}55\,mc^2\).</p>`});

D({id:'fmd-2017-2-q8', ano:2017, prova:'EUF 2º/2017 · Parte 2 · Q8', topicos:['bohr','ondapart'],
enunciado:R`<p>Um elétron de energia cinética 22 eV colide com um átomo de hidrogênio no estado fundamental. Parte da energia é transferida ao átomo, que vai a um estado excitado de número quântico \(n\). Após um tempo \(\Delta t\), o átomo decai ao fundamental emitindo um fóton de 10,2 eV.</p>`,
itens:[R`Na aproximação não relativística, determine o comprimento de onda de de Broglie do elétron incidente.`,R`Determine \(n\).`,R`Calcule a incerteza na energia do fóton, sabendo que \(\Delta t=10^{-8}\) s.`,R`Justifique a aproximação não relativística de (a).`],
dica:R`\(\lambda=1{,}226\ \text{nm}/\sqrt{K[\text{eV}]}\); \(\hbar=6{,}58\times10^{-16}\) eV·s.`,
solucao:R`<p><b>(a)</b> \(\lambda=\dfrac{1{,}226}{\sqrt{22}}\approx0{,}26\) nm.</p>
<p><b>(b)</b> \(13{,}6(1-1/n^2)=10{,}2\Rightarrow n=2\).</p>
<p><b>(c)</b> \(\Delta E\approx\dfrac{\hbar}{\Delta t}=6{,}6\times10^{-8}\) eV (com \(\hbar/2\Delta t\), \(3{,}3\times10^{-8}\) eV).</p>
<p><b>(d)</b> \(K=22\) eV \(\ll m_ec^2=511\) keV (\(v/c\approx0{,}01\)).</p>`});

// ============ 1º/2020 ============
D({id:'fmd-2020-1-q3', ano:2020, prova:'EUF 1º/2020 · Parte 1 · Q3', topicos:['rel'],
enunciado:R`<p>Duas naves, A e B, em repouso uma em relação à outra, se destroem. Um observador C, em repouso em relação a elas e para quem a distância entre as naves era \(L\), vê A explodir um tempo \(T\) antes de B. Um observador D move-se com velocidade de módulo \(u\) em relação a C, ao longo da linha que unia as naves.</p>`,
itens:[R`Com \(L=1000\) km e \(u=\tfrac{24}{25}c\), qual a distância entre as naves no referencial de D?`,R`Com \(L=1000\) km e \(T=1\) ms, qual a menor velocidade \(u\) para que D registre a explosão de B antes da de A?`,R`Toda a energia de repouso da nave A é liberada e capturada pelo veículo de C, virando energia cinética. Sendo iguais as massas da nave A e do veículo, determine a velocidade \(v\) que o veículo atinge.`],
dica:R`(b) \(\Delta t'=\gamma(\Delta t-u\Delta x/c^2)\lt0\). (c) \((\gamma-1)Mc^2=Mc^2\).`,
solucao:R`<p><b>(a)</b> \(\gamma=\dfrac1{\sqrt{1-(24/25)^2}}=\dfrac{25}{7}\); \(L'=L/\gamma=280\) km.</p>
<p><b>(b)</b> Com D indo de A para B: \(t'_B-t'_A=\gamma(T-uL/c^2)\lt0\Rightarrow u>\dfrac{c^2T}{L}=c\,\dfrac{cT}{L}=c\,\dfrac{300\ \text{km}}{1000\ \text{km}}=0{,}3c\). É possível porque \(cT\lt L\) (intervalo tipo espaço).</p>
<p><b>(c)</b> \(\gamma=2\Rightarrow v=\dfrac{\sqrt3}{2}c\approx0{,}87c\).</p>`});

D({id:'fmd-2020-1-q8', ano:2020, prova:'EUF 1º/2020 · Parte 2 · Q8', topicos:['corpo'],
enunciado:R`<p>A superfície do Sol está a cerca de \(6{,}0\times10^3\) K e a de Betelgeuse a cerca de \(3{,}0\times10^3\) K. Suponha que ambas irradiem como corpos negros.</p>`,
itens:[R`Qual a razão entre o comprimento de onda de radiância espectral máxima do Sol e o de Betelgeuse?`,R`Qual a razão entre as radiâncias (energia total por tempo e por área) do Sol e de Betelgeuse?`,R`A potência de Betelgeuse é cerca de \(4{,}0\times10^4\) vezes a do Sol. Estime a razão entre os raios.`],
dica:R`Wien, Stefan–Boltzmann e \(P=4\pi R^2\sigma T^4\).`,
solucao:R`<p><b>(a)</b> \(\lambda_S/\lambda_B=T_B/T_S=1/2\).</p>
<p><b>(b)</b> \((T_S/T_B)^4=16\).</p>
<p><b>(c)</b> \(\dfrac{P_B}{P_S}=\left(\dfrac{R_B}{R_S}\right)^2\dfrac1{16}\Rightarrow\left(\dfrac{R_B}{R_S}\right)^2=6{,}4\times10^5\Rightarrow R_B/R_S\approx800\).</p>`});

// ============ 1º/2014 ============
D({id:'fmd-2014-1-q3', ano:2014, prova:'EUF 1º/2014 · Parte 1 · Q3', topicos:['bohr','schr'],
enunciado:R`<p>Em 1913 Bohr adaptou o modelo de Rutherford às ideias de quantização. Aborde os itens em termos de grandezas fundamentais.</p>`,
itens:[R`Use \(L=n\hbar\) para obter os raios das órbitas de um elétron em torno de um núcleo de número atômico \(Z\).`,R`Determine a energia do fóton emitido na transição do primeiro estado excitado para o fundamental do hidrogênio.`,R`Para um elétron num poço infinito unidimensional de largura \(a\), obtenha os níveis de energia pela regra de Bohr–Sommerfeld \(\oint p\,dx=nh\).`,R`Determine \(a\), em termos do raio de Bohr, para que o fóton da transição do primeiro excitado ao fundamental do poço tenha a energia obtida em (b).`],
dica:R`Em (c), o elétron vai e volta com \(|p|\) constante: \(\oint p\,dx=2pa\). Em (d), lembre que \(13{,}6\ \text{eV}=\dfrac{\hbar^2}{2m a_0^2}\).`,
solucao:R`<p><b>(a)</b> \(\dfrac{mv^2}{r}=\dfrac{Ze^2}{4\pi\epsilon_0r^2}\) e \(mvr=n\hbar\Rightarrow r_n=\dfrac{4\pi\epsilon_0\hbar^2}{Zme^2}n^2=\dfrac{n^2a_0}{Z}\).</p>
<p><b>(b)</b> \(E_n=-\dfrac{me^4}{2(4\pi\epsilon_0)^2\hbar^2}\dfrac{1}{n^2}\). \(E_\gamma=\tfrac34\cdot\dfrac{me^4}{2(4\pi\epsilon_0)^2\hbar^2}=\tfrac34(13{,}6)=10{,}2\) eV.</p>
<p><b>(c)</b> \(2pa=nh\Rightarrow p=\dfrac{nh}{2a}\), \(E_n=\dfrac{n^2h^2}{8ma^2}\), igual à solução de Schrödinger.</p>
<p><b>(d)</b> \(\dfrac{3h^2}{8ma^2}=\dfrac34\dfrac{\hbar^2}{2ma_0^2}\Rightarrow\dfrac{h^2}{a^2}=\dfrac{\hbar^2}{a_0^2}\Rightarrow a=2\pi a_0\approx3{,}3\) Å.</p>`});

D({id:'fmd-2014-1-q4', ano:2014, prova:'EUF 1º/2014 · Parte 1 · Q4', topicos:['foton','rel'],
enunciado:R`<p>Raios γ produzidos por aniquilação de pares sofrem espalhamento Compton considerável. Um fóton de energia \(m_0c^2\) (\(m_0\): massa do elétron), produzido na aniquilação de um elétron e um pósitron, é espalhado por um elétron livre com ângulo \(\theta\).</p>`,
itens:[R`Encontre a máxima energia cinética possível do elétron em recuo.`,R`Para \(\theta=120^\circ\), determine a energia do fóton e a energia cinética do elétron após o espalhamento.`,R`Para \(\theta=120^\circ\), qual a direção do movimento do elétron em relação ao fóton incidente?`],
dica:R`O fóton incidente tem \(\lambda=h/m_0c=\lambda_C\). Use \(\lambda'=\lambda+\lambda_C(1-\cos\theta)\) e, em (c), a conservação do momento por componentes.`,
solucao:R`<p><b>(a)</b> Máxima em \(\theta=180^\circ\): \(\lambda'=3\lambda_C\Rightarrow E'=m_0c^2/3\), logo \(K_{\max}=\tfrac23m_0c^2\approx340\) keV (a "borda Compton").</p>
<p><b>(b)</b> \(1-\cos120^\circ=1{,}5\): \(\lambda'=2{,}5\lambda_C\Rightarrow E'=0{,}4\,m_0c^2\approx204\) keV; \(K=0{,}6\,m_0c^2\approx307\) keV.</p>
<p><b>(c)</b> Em unidades de \(m_0c\): incidente \((1,0)\); fóton espalhado \(0{,}4(\cos120^\circ,\sin120^\circ)=(-0{,}2;\,0{,}346)\). Elétron: \((1{,}2;\,-0{,}346)\), formando \(\arctan(0{,}346/1{,}2)\approx16^\circ\) com a direção incidente, do lado oposto ao fóton. Conferência: \(|p_e|=1{,}25\) e \(\sqrt{1{,}25^2+1}=1{,}6=1+K/m_0c^2\).</p>`});

// ============ 1º/2015 ============
D({id:'fmd-2015-1-q3', ano:2015, prova:'EUF 1º/2015 · Parte 1 · Q3', topicos:['atom'],
enunciado:R`<p>Um gás de moléculas diatômicas tem frequência de oscilação \(\omega\) e momento de inércia \(I\). À temperatura ambiente as energias vibracionais são muito maiores que \(k_BT\) (quase todas as moléculas estão em \(n=0\)), enquanto a energia rotacional característica é muito menor que \(k_BT\). A energia rotacional-vibracional \(E(n,\ell)\) é caracterizada por \(n\) (vibração) e \(\ell\) (rotação).</p>`,
itens:[R`Escreva \(E(n,\ell)\) para \(n=0\) e \(\ell\) qualquer.`,R`Uma molécula vai de \(n=0\), \(\ell\) qualquer, para \(n=1\). Com a regra de seleção \(\Delta\ell=\pm1\), determine as duas energias finais possíveis, as diferenças de energia em relação ao estado inicial e as frequências de transição.`,R`Para \(n=0\), com degenerescência \(2\ell+1\), escreva a população \(N(E)\) pela distribuição de Boltzmann.`,R`Para \(n=0\), o estado \(\ell=0\) não é o mais populado. Determine o \(\ell\) de população máxima.`],
dica:R`\(E=\hbar\omega(n+\tfrac12)+\dfrac{\hbar^2\ell(\ell+1)}{2I}\). Em (d) trate \(\ell\) como contínuo e derive.`,
solucao:R`<p><b>(a)</b> \(E(0,\ell)=\dfrac{\hbar\omega}2+\dfrac{\hbar^2\ell(\ell+1)}{2I}\).</p>
<p><b>(b)</b> \(\ell\to\ell+1\): \(E=\tfrac32\hbar\omega+\dfrac{\hbar^2(\ell+1)(\ell+2)}{2I}\), \(\Delta E_+=\hbar\omega+\dfrac{\hbar^2(\ell+1)}{I}\). \(\ell\to\ell-1\): \(E=\tfrac32\hbar\omega+\dfrac{\hbar^2\ell(\ell-1)}{2I}\), \(\Delta E_-=\hbar\omega-\dfrac{\hbar^2\ell}{I}\). Frequências \(\nu_\pm=\Delta E_\pm/h\): ramos R e P, com linhas espaçadas de \(\hbar/(2\pi I)\) e um "buraco" em \(\nu=\omega/2\pi\).</p>
<p><b>(c)</b> \(N(\ell)\propto(2\ell+1)\exp\left[-\dfrac{\hbar^2\ell(\ell+1)}{2Ik_BT}\right]\).</p>
<p><b>(d)</b> Com \(\alpha=\hbar^2/2Ik_BT\): \(\dfrac{d}{d\ell}\left[(2\ell+1)e^{-\alpha\ell(\ell+1)}\right]=0\Rightarrow2=\alpha(2\ell+1)^2\Rightarrow\ell_{\max}=\sqrt{\dfrac{Ik_BT}{\hbar^2}}-\dfrac12\) (inteiro mais próximo).</p>`});

D({id:'fmd-2015-1-q4', ano:2015, prova:'EUF 1º/2015 · Parte 1 · Q4', topicos:['rel','foton'], fig:'fig/fmd_15a_q4.png',
enunciado:R`<p>Um fóton encontra um elétron em repouso no referencial \(S\) (figura A). Ocasionalmente o fóton desaparece e cria um par elétron–pósitron na presença do elétron original. Suponha que as três partículas resultantes se movam para a direita com a mesma velocidade, isto é, estejam em repouso num referencial \(S'\) que se move com velocidade \(u\) em relação a \(S\) (figura B).</p>`,
itens:[R`Escreva as leis de conservação de energia e momento antes e depois da criação do par.`,R`Usando conservação de energia–momento relativística, obtenha no sistema \(S'\) a energia do fóton para criar o par (energia equivalente à de repouso de 2 elétrons).`,R`Use \(m_0^2c^4=E^2-p^2c^2\) para obter \(u/c=pc/E\).`,R`Determine \(u\).`],
dica:R`O invariante \(E_{tot}^2-p_{tot}^2c^2\) do estado inicial deve ser \((3m_0c^2)^2\). No referencial \(S'\) o momento total é zero.`,
solucao:R`<p><b>(a)</b> \(E_\gamma+m_0c^2=3\gamma m_0c^2\); \(E_\gamma/c=3\gamma m_0u\).</p>
<p><b>(b)</b> Invariante: \((E_\gamma+m_0c^2)^2-E_\gamma^2=9m_0^2c^4\Rightarrow E_\gamma=4m_0c^2\) em \(S\) (limiar ≈ 2,04 MeV). Em \(S'\) (momento total nulo), o elétron vem com velocidade \(-u\) e as três partículas finais estão paradas: \(E'_\gamma+\gamma m_0c^2=3m_0c^2\), com \(E'_\gamma=\gamma m_0uc\). Com \(u=4c/5\) (\(\gamma=5/3\)), \(E'_\gamma=\tfrac43m_0c^2\).</p>
<p><b>(c)</b> Para o sistema final (massa \(3m_0\)): \(E=3\gamma m_0c^2\), \(p=3\gamma m_0u\Rightarrow u/c=pc/E\).</p>
<p><b>(d)</b> \(u=c\dfrac{E_\gamma}{E_\gamma+m_0c^2}=\dfrac45c\).</p>`});

// ============ 1º/2018 ============
D({id:'fmd-2018-1-q4', ano:2018, prova:'EUF 1º/2018 · Parte 1 · Q4', topicos:['ondapart'], fig:'fig/fmd_18a_q4.png',
enunciado:R`<p>A figura <b>a</b> (Arndt <i>et al.</i>, Nature 401, 680 (1999)) mostra a difração de um feixe de moléculas de fulereno C\(_{60}\) por uma grade: contagem de moléculas versus posição vertical \(y\) (em μm) no detector, situado a 1,25 m da grade (figura <b>b</b>).</p>`,
itens:[R`Estime pelo gráfico a posição \(y_1\) do primeiro pico ao lado do máximo central e o ângulo \(\theta_1\).`,R`Uma estudante supôs tratar-se de uma onda eletromagnética numa fenda dupla com espaçamento de 100 nm. Com o ângulo de (a), calcule \(\lambda\).`,R`Sabendo que a velocidade de cada molécula é 220 m/s, calcule o momento linear (massa molar do C: 12 g/mol).`,R`Calcule o comprimento de onda de de Broglie da molécula.`],
dica:R`Ângulos pequenos: \(\theta\approx y/L\) e \(d\sin\theta=\lambda\).`,
solucao:R`<p><b>(a)</b> Picos laterais em \(y_1\approx20\text{–}25\ \mu\)m; \(\theta_1\approx\dfrac{2{,}5\times10^{-5}}{1{,}25}=2\times10^{-5}\) rad.</p>
<p><b>(b)</b> \(\lambda=d\theta_1=100\ \text{nm}\times2\times10^{-5}=2\times10^{-12}\) m = 2 pm.</p>
<p><b>(c)</b> \(m=\dfrac{0{,}720}{6{,}0\times10^{23}}=1{,}2\times10^{-24}\) kg; \(p=mv\approx2{,}6\times10^{-22}\) kg·m/s.</p>
<p><b>(d)</b> \(\lambda=h/p\approx2{,}5\times10^{-12}\) m, compatível com (b): o padrão é de interferência de ondas de matéria.</p>`});

D({id:'fmd-2018-1-q9', ano:2018, prova:'EUF 1º/2018 · Parte 2 · Q9', topicos:['foton'], fig:'fig/fmd_18a_q9.png',
enunciado:R`<p>A figura mostra a intensidade \(I(\lambda)\) dos raios X espalhados por grafite no experimento de Compton (1923), detectados num ângulo fixo \(\theta\). Parte dos fótons sofre espalhamento elástico e parte sofre espalhamento Compton: há dois picos, em \(\lambda_1\) e \(\lambda_2>\lambda_1\).</p>`,
itens:[R`Qual o comprimento de onda dos raios X incidentes e o dos que sofreram espalhamento Compton? Justifique.`,R`Num evento Compton com fóton incidente de 23 keV e \(\theta=60^\circ\), calcule o comprimento de onda do fóton incidente.`,R`Calcule o comprimento de onda do fóton espalhado.`,R`Calcule a energia cinética do elétron após o espalhamento.`],
dica:R`No espalhamento Compton o fóton perde energia: \(\lambda\) aumenta. \(\lambda_C=2{,}43\) pm.`,
solucao:R`<p><b>(a)</b> \(\lambda_1\) é o incidente (espalhamento elástico pelos átomos como um todo, sem perda); \(\lambda_2>\lambda_1\) é o Compton (por elétrons quase livres).</p>
<p><b>(b)</b> \(\lambda=\dfrac{1240\ \text{eV·nm}}{23\,000\ \text{eV}}\approx53{,}9\) pm.</p>
<p><b>(c)</b> \(\lambda'=53{,}9+2{,}43(1-\tfrac12)\approx55{,}1\) pm.</p>
<p><b>(d)</b> \(E'=1240/0{,}0551\approx22{,}5\) keV, então \(K\approx0{,}5\) keV.</p>`});

// ============ 2º/2018 ============
D({id:'fmd-2018-2-q3', ano:2018, prova:'EUF 2º/2018 · Parte 1 · Q3', topicos:['bohr'],
enunciado:R`<p>O positrônio é um estado ligado entre um elétron (carga \(-e\), massa \(m_e\)) e um pósitron. O modelo de Bohr supõe órbitas circulares clássicas das duas partículas.</p>`,
itens:[R`No referencial do CM, calcule o momento angular clássico \(L\) do sistema em função de \(e\), \(m_e\), \(\epsilon_0\) e da distância \(R\) entre as partículas.`,R`Aplique a quantização de Bohr e obtenha os raios \(R_n\) em termos do raio de Bohr.`,R`Calcule as energias permitidas \(E_n\) em eV.`,R`Na transição \(n=2\to n=1\) (positrônio inicialmente em repouso), calcule a velocidade do CM após a emissão do fóton (\(v_{cm}\ll c\); despreze a energia de recuo frente à do fóton).`],
dica:R`Cada partícula gira em raio \(R/2\). Tudo equivale ao hidrogênio com massa reduzida \(\mu=m_e/2\).`,
solucao:R`<p><b>(a)</b> \(\dfrac{m_ev^2}{R/2}=\dfrac{e^2}{4\pi\epsilon_0R^2}\Rightarrow v^2=\dfrac{e^2}{8\pi\epsilon_0m_eR}\). \(L=2m_ev\dfrac R2=\sqrt{\dfrac{m_ee^2R}{8\pi\epsilon_0}}\).</p>
<p><b>(b)</b> \(L=n\hbar\Rightarrow R_n=\dfrac{8\pi\epsilon_0\hbar^2}{m_ee^2}n^2=2n^2a_0\).</p>
<p><b>(c)</b> \(E=2\cdot\tfrac12m_ev^2-\dfrac{e^2}{4\pi\epsilon_0R}=-\dfrac{e^2}{8\pi\epsilon_0R_n}=-\dfrac{13{,}6}{2n^2}\ \text{eV}=-\dfrac{6{,}8}{n^2}\ \text{eV}\).</p>
<p><b>(d)</b> \(E_\gamma=6{,}8\cdot\tfrac34=5{,}1\) eV. Momento: \(2m_ev_{cm}=E_\gamma/c\Rightarrow v_{cm}=\dfrac{E_\gamma}{2m_ec^2}c=\dfrac{5{,}1}{1{,}02\times10^6}c\approx1{,}5\times10^3\) m/s, oposta ao fóton.</p>`});

D({id:'fmd-2018-2-q8', ano:2018, prova:'EUF 2º/2018 · Parte 2 · Q8', topicos:['foton','corpo','rel'], fig:'fig/fmd_18b_q8.png',
enunciado:R`<p>No espalhamento Compton inverso, elétrons relativísticos colidem com fótons de baixa energia e produzem fótons de alta energia, por exemplo elétrons energéticos colidindo com fótons da radiação cósmica de fundo. Na colisão da figura (frontal; o fóton volta), o fóton incidente tem energia \(E_i\) e o espalhado \(E_f>E_i\).</p>`,
itens:[R`Supondo a radiação de fundo um corpo negro a \(T=2{,}9\) K, estime o comprimento de onda do máximo da distribuição.`,R`Calcule a frequência (Hz) e a energia (eV) de um fóton com esse comprimento de onda.`,R`Calcule \(E_f\) em termos de \(E_i\), do fator \(\gamma\) do elétron incidente e de \(m_ec^2\).`,R`Com o fóton de (b) e um elétron de 250 MeV, calcule \(E_f\) em eV com dois algarismos. Use \(\sqrt{1-x^2}\approx1-x^2/2\).`],
dica:R`Use quadrimomentos: \((P_e+k_i-k_f)^2=m_e^2c^2\). Com o elétron indo para \(-x\) e os fótons em sentidos opostos, \(P_e\cdot k_i=E_i\gamma m_ec(1+\beta)\), \(P_e\cdot k_f=E_f\gamma m_ec(1-\beta)\) e \(k_i\cdot k_f=2E_iE_f/c^2\).`,
solucao:R`<p><b>(a)</b> \(\lambda=\dfrac{2{,}9\times10^{-3}}{2{,}9}=1\) mm.</p>
<p><b>(b)</b> \(f=3\times10^{11}\) Hz; \(E=1{,}24\times10^{-3}\) eV.</p>
<p><b>(c)</b> \(E_i\gamma m_ec^2(1+\beta)=E_f\gamma m_ec^2(1-\beta)+2E_iE_f\Rightarrow E_f=\dfrac{E_i\,\gamma(1+\beta)m_ec^2}{\gamma(1-\beta)m_ec^2+2E_i}\), com \(\beta=\sqrt{1-1/\gamma^2}\).</p>
<p><b>(d)</b> \(\gamma=250/0{,}511\approx489\); \(1-\beta\approx\dfrac1{2\gamma^2}\Rightarrow\gamma(1-\beta)m_ec^2\approx\dfrac{m_ec^2}{2\gamma}\approx522\) eV \(\gg2E_i\). \(E_f\approx4\gamma^2E_i\approx4\cdot2{,}39\times10^5\cdot1{,}24\times10^{-3}\approx1{,}2\times10^3\) eV (raios X, como dito).</p>`});

// ============ 1º/2019 ============
D({id:'fmd-2019-1-q4', ano:2019, prova:'EUF 1º/2019 · Parte 1 · Q4', topicos:['corpo'], fig:'fig/fmd_19a_q4.png',
enunciado:R`<p>O gráfico representa a emitância espectral \(e(\lambda)\) de um corpo negro à temperatura \(T_1\) (λ em nm; emitância em unidades arbitrárias). A energia radiada por tempo e por área entre \(\lambda\) e \(\lambda+d\lambda\) é \(e(\lambda)d\lambda\).</p>`,
itens:[R`Estime \(T_1\) pelo gráfico.`,R`Calcule a energia total radiada por tempo e por área, em W/m².`,R`A partir do gráfico, calcule aproximadamente a potência por área entre 6000 nm e 8000 nm.`,R`Para um segundo corpo negro a \(T_2=3T_1\), determine o comprimento de onda de máxima emitância.`],
dica:R`Wien e Stefan–Boltzmann. Em (c), compare a área sob a curva entre 6000 e 8000 nm com a área total; a fração multiplica o resultado de (b).`,
solucao:R`<p><b>(a)</b> Pico em \(\lambda_{\max}\approx3300\) nm: \(T_1\approx\dfrac{2{,}9\times10^{-3}}{3{,}3\times10^{-6}}\approx9\times10^2\) K.</p>
<p><b>(b)</b> \(\sigma T_1^4\approx5{,}67\times10^{-8}\cdot(880)^4\approx3{,}4\times10^4\) W/m².</p>
<p><b>(c)</b> Entre 6000 e 8000 nm a curva vale ≈ 1,6 → 0,85 (média ≈ 1,2), área ≈ \(2{,}4\times10^3\) u.a.·nm. A área total sob a curva é ≈ \(1{,}7\times10^4\) u.a.·nm, ou seja fração ≈ 14–15%. Potência ≈ \(0{,}145\times3{,}4\times10^4\approx5\times10^3\) W/m². (A tabela da função de Planck dá a mesma fração para \(\lambda T\) de 5300 a 7000 μm·K.)</p>
<p><b>(d)</b> \(\lambda_2=\lambda_1/3\approx1{,}1\times10^3\) nm.</p>`});

D({id:'fmd-2019-1-q9', ano:2019, prova:'EUF 1º/2019 · Parte 2 · Q9', topicos:['rel'],
enunciado:R`<p>O LHC produz feixes de prótons com energias da ordem de TeV (\(1{,}0\ \text{TeV}=10^{12}\) eV) no referencial do laboratório \(S\).</p>`,
itens:[R`Um próton tem energia total de 5,0 TeV em \(S\) e energia de repouso 1,0 GeV. Calcule sua velocidade. Dica: escreva \(v=(1-\Delta)c\) e use \(\sqrt{1-\epsilon}\approx1-\epsilon/2\).`,R`Um próton A de energia total \(E_A\) colide frontalmente com um próton B de mesma energia em sentido oposto, produzindo uma partícula X (\(A+B\to X\)). Calcule a massa de repouso de X em termos de \(E_A\).`,R`Um próton C com fator \(\gamma\) e massa \(m_0\) colide com um próton D em repouso, produzindo Y. Calcule a massa de repouso de Y em termos de \(\gamma\) e \(m_0\).`],
dica:R`\(\gamma=E/mc^2\) e \(\beta\approx1-\dfrac1{2\gamma^2}\). Para as massas, use o invariante \(E^2-p^2c^2\).`,
solucao:R`<p><b>(a)</b> \(\gamma=5000\), \(\Delta=1-\beta\approx\dfrac1{2\gamma^2}=2\times10^{-8}\): \(v=(1-2\times10^{-8})c\).</p>
<p><b>(b)</b> Momento total nulo: \(M_Xc^2=2E_A\Rightarrow M_X=2E_A/c^2\).</p>
<p><b>(c)</b> \(M^2c^4=(\gamma+1)^2m_0^2c^4-(\gamma^2-1)m_0^2c^4=2(\gamma+1)m_0^2c^4\Rightarrow M_Y=m_0\sqrt{2(\gamma+1)}\). Cresce só como \(\sqrt\gamma\): por isso os colisores usam feixes opostos.</p>`});

// ============ 2º/2019 ============
D({id:'fmd-2019-2-q3', ano:2019, prova:'EUF 2º/2019 · Parte 1 · Q3', topicos:['rel','nucl'],
enunciado:R`<p>Raios cósmicos geram múons, que decaem segundo \(N(t)=N_0e^{-t/\tau}\), com \(\tau=2{,}0\ \mu\)s no referencial próprio. Um detector \(D_1\), seletivo para \(v=0{,}98c\), no topo de uma montanha a \(2{,}94\times10^3\) m acima do nível do mar, conta \(1{,}5\times10^3\) múons num certo intervalo. Um detector \(D_2\) ao nível do mar (mesma velocidade e mesmo intervalo) conta muito mais que o esperado pela física não relativística.</p>`,
itens:[R`Determine o número esperado em \(D_2\) segundo a física não relativística.`,R`Explique qualitativamente por que \(D_2\) conta mais.`,R`Calcule a contagem em \(D_2\): (i) do ponto de vista do referencial do detector e (ii) do referencial próprio dos múons.`,R`Num referencial \(S\) em que múons e detector se aproximam com velocidades de módulos iguais, a contagem em \(D_2\) é menor, maior ou igual à de (c)? Justifique.`],
dica:R`\(\gamma(0{,}98)\approx5{,}0\). Tempo de voo no solo: \(2940/(0{,}98c)=10\ \mu\)s.`,
solucao:R`<p><b>(a)</b> \(t=10\ \mu\)s; \(N=1500\,e^{-10/2}=1500e^{-5}\approx10\).</p>
<p><b>(b)</b> Dilatação do tempo (no solo) ou, equivalentemente, contração da distância (para o múon).</p>
<p><b>(c)</b> (i) Vida média dilatada \(\gamma\tau\approx10\ \mu\)s: \(N=1500e^{-10/10}\approx5{,}5\times10^2\). (ii) Distância contraída \(2940/5\approx588\) m, percorrida em \(\approx2{,}0\ \mu\)s de tempo próprio: \(N=1500e^{-1}\approx5{,}5\times10^2\).</p>
<p><b>(d)</b> Igual: o número de múons que chegam ao detector é uma contagem de eventos, invariante entre referenciais.</p>`});

D({id:'fmd-2019-2-q8', ano:2019, prova:'EUF 2º/2019 · Parte 2 · Q8', topicos:['ondapart','rel'],
enunciado:R`<p>Um feixe de nêutrons de comprimento de onda \(\lambda\) incide sobre um cristal fazendo ângulo \(\theta\in[0,\pi/2]\) com os planos cristalinos, separados por \(d\). Energia de repouso do nêutron: \(E_n^0=940\) MeV.</p>`,
itens:[R`Deduza a condição de Bragg relacionando \(\lambda\), \(\theta\) e \(d\).`,R`Com \(d=1{,}1\) Å e nêutrons de energia cinética 1,9 eV, em quantos valores de \(\theta\) se observa reflexão de Bragg?`,R`Explique como um cristal pode servir de filtro de velocidades para nêutrons.`,R`Com \(E=h\nu\) e \(p=h/\lambda\) também no regime relativístico, encontre a velocidade de fase em termos de \(E_n^0\) e \(\lambda\). Ela é maior, menor ou igual a \(c\)? Encontre a velocidade de grupo e compare.`],
dica:R`Diferença de caminho entre planos vizinhos: \(2d\sin\theta\). Em (d), \(v_f=\omega/k=E/p\) e \(v_g=d\omega/dk=dE/dp\).`,
solucao:R`<p><b>(a)</b> \(2d\sin\theta=n\lambda\), \(n=1,2,\dots\)</p>
<p><b>(b)</b> \(pc=\sqrt{2\cdot9{,}4\times10^8\cdot1{,}9}\approx6{,}0\times10^4\) eV, \(\lambda=1240/(6{,}0\times10^4)\) nm \(\approx0{,}21\) Å. \(\sin\theta=n\dfrac{0{,}21}{2{,}2}\approx0{,}094n\le1\Rightarrow n\le10\): <b>10 ângulos</b>.</p>
<p><b>(c)</b> Fixando \(\theta\), só passam \(\lambda=2d\sin\theta/n\), ou seja velocidades \(v=h/(m\lambda)\) bem definidas (mais as harmônicas \(n>1\)): é um monocromador.</p>
<p><b>(d)</b> \(v_f=\dfrac Ep=c\sqrt{1+\left(\dfrac{E_n^0\lambda}{hc}\right)^2}>c\), sem transportar informação. \(v_g=\dfrac{dE}{dp}=\dfrac{pc^2}{E}=\dfrac{c}{\sqrt{1+(E_n^0\lambda/hc)^2}}\lt c\), que é a velocidade da partícula. Vale \(v_fv_g=c^2\).</p>`});

// ============ 2º/2011 ============
D({id:'fmd-2011-2-q3', ano:2011, prova:'EUF 2º/2011 · Parte 1 · Q3', topicos:['atom','schr'], fig:'fig/fmd_11b_q3.png',
enunciado:R`<p><b>Parte I.</b> A figura mostra curvas de energia em função da distância \(r\) entre os núcleos de duas moléculas diatômicas, A e B. Em cada gráfico estão o estado fundamental \(U_0(r)\) e o primeiro estado eletrônico excitado \(U_1(r)\).</p><p><b>Parte II.</b> A função de onda do elétron do hidrogênio no estado 1s é \(\psi(r)=\dfrac{1}{\sqrt{\pi a_0^3}}e^{-r/a_0}\), com \(a_0\) o raio de Bohr.</p>`,
itens:[R`Para a molécula A, o que significam \(r_0\) e \(r_1\) indicados nos gráficos?`,R`A molécula B, no estado fundamental, absorve um fóton e passa ao primeiro estado eletrônico excitado. O que se espera que aconteça depois?`,R`Calcule a distância \(r\) mais provável do elétron no estado 1s.`,R`Calcule \(\langle r\rangle\) nesse estado.`],
dica:R`Um mínimo de \(U(r)\) = estado ligado com separação de equilíbrio; curva sem mínimo = repulsiva. Na Parte II, a densidade radial é \(P(r)=4\pi r^2|\psi|^2\); use \(\int_0^\infty r^ne^{-\alpha r}dr=n!/\alpha^{n+1}\).`,
solucao:R`<p><b>(a)</b> \(r_0\) e \(r_1\) são as separações internucleares de equilíbrio (mínimos de \(U_0\) e \(U_1\)): a molécula A é ligada nos dois estados, um pouco mais "esticada" no excitado.</p>
<p><b>(b)</b> \(U_1\) de B é puramente repulsiva (sem mínimo): a molécula se dissocia (fotodissociação), e os átomos se afastam convertendo energia potencial em cinética.</p>
<p><b>(c)</b> \(P(r)\propto r^2e^{-2r/a_0}\); \(P'=0\Rightarrow2r-\dfrac{2r^2}{a_0}=0\Rightarrow r=a_0\).</p>
<p><b>(d)</b> \(\langle r\rangle=\dfrac{4}{a_0^3}\displaystyle\int_0^\infty r^3e^{-2r/a_0}dr=\dfrac4{a_0^3}\cdot\dfrac{3!}{(2/a_0)^4}=\dfrac32a_0\).</p>`});

D({id:'fmd-2011-2-q4', ano:2011, prova:'EUF 2º/2011 · Parte 1 · Q4', topicos:['rel'],
enunciado:R`<p>Uma partícula de massa de repouso \(m_0\), com velocidade \(v=\tfrac45c\) no laboratório, colide com um corpo idêntico em repouso. As duas se combinam numa única partícula de massa \(M\). Use mecânica relativística.</p>`,
itens:[R`Quais o momento e a energia total de cada partícula antes da colisão e da partícula composta depois?`,R`Qual a velocidade da partícula composta?`,R`Qual a massa \(M\)?`],
dica:R`\(\gamma(4/5)=5/3\). A composta tem a soma de energias e de momentos.`,
solucao:R`<p><b>(a)</b> Móvel: \(p=\gamma m_0v=\tfrac43m_0c\), \(E=\tfrac53m_0c^2\). Parada: \(p=0\), \(E=m_0c^2\). Composta: \(p=\tfrac43m_0c\), \(E=\tfrac83m_0c^2\).</p>
<p><b>(b)</b> \(V=\dfrac{pc^2}{E}=\dfrac c2\).</p>
<p><b>(c)</b> \(Mc^2=\sqrt{E^2-p^2c^2}=\sqrt{\tfrac{64}9-\tfrac{16}9}\,m_0c^2\Rightarrow M=\dfrac{4}{\sqrt3}m_0\approx2{,}31m_0\) (maior que \(2m_0\): energia cinética virou massa).</p>`});

// ============ 1º/2012 ============
D({id:'fmd-2012-1-q3', ano:2012, prova:'EUF 1º/2012 · Parte 1 · Q3', topicos:['foton','atom'],
enunciado:R`<p><b>Parte I.</b> Um cientista do fim do século XIX usa pulsos de 1 ms de luz monocromática de 414 nm com três potências: \(P_0\), \(3P_0\) e \(5P_0\), com \(P_0=300\) keV/s. As superfícies metálicas têm funções trabalho: Li (2,3 eV), Be (3,9 eV) e Hg (4,5 eV).</p><p><b>Parte II.</b> Subcamadas com menor \(n+l\) são preenchidas antes; com mesmo \(n+l\), primeiro a de menor \(n\).</p>`,
itens:[R`Para quais superfícies e potências pode ocorrer emissão de fotoelétrons?`,R`Calcule o número máximo de fotoelétrons emitidos pelo pulso de potência \(3P_0\) em cada superfície.`,R`Escreva a configuração eletrônica do Sc, o átomo de menor número atômico com um elétron numa subcamada \(d\).`,R`Quais os valores possíveis do momento angular orbital e de sua componente \(z\) para um elétron na subcamada \(d\) do Sc?`],
dica:R`A emissão depende só da energia do fóton (\(1240/414\) eV). Cada fóton arranca no máximo um elétron.`,
solucao:R`<p><b>(a)</b> \(E_\gamma=3{,}0\) eV: só o Li (2,3 eV) emite, para qualquer das três potências. Be e Hg nunca, por mais intensa que seja a luz.</p>
<p><b>(b)</b> Energia do pulso: \(3\cdot300\ \text{keV/s}\cdot10^{-3}\ \text{s}=900\) eV, ou seja 300 fótons. Li: até 300 fotoelétrons; Be e Hg: zero.</p>
<p><b>(c)</b> Sc (\(Z=21\)): \(1s^2\,2s^2\,2p^6\,3s^2\,3p^6\,4s^2\,3d^1\).</p>
<p><b>(d)</b> \(l=2\): \(|\vec L|=\sqrt{l(l+1)}\hbar=\sqrt6\,\hbar\); \(L_z=m\hbar\) com \(m=-2,-1,0,1,2\).</p>`});

D({id:'fmd-2012-1-q4', ano:2012, prova:'EUF 1º/2012 · Parte 1 · Q4', topicos:['schr'],
enunciado:R`<p>Um elétron está confinado no poço \(V=0\) para \(0\lt x\lt d\) e \(V=+\infty\) fora. Depois, considere-o no estado com \(\psi(x)=\sqrt{2/d}\,\sin(3\pi x/d)\) dentro do poço.</p>`,
itens:[R`Escreva a equação de Schrödinger e as condições de contorno.`,R`Obtenha as funções de onda normalizadas e as energias permitidas.`,R`Determine o número quântico \(n\) desse estado e o comprimento de onda do elétron.`,R`Determine a probabilidade de encontrar o elétron entre \(x=0\) e \(x=d/6\).`],
dica:R`\(\sin^2u=\tfrac12(1-\cos2u)\). Note que \(d/6\) é exatamente meio "lóbulo" de \(\sin(3\pi x/d)\).`,
solucao:R`<p><b>(a)</b> \(-\dfrac{\hbar^2}{2m}\psi''=E\psi\) em \(0\lt x\lt d\), com \(\psi(0)=\psi(d)=0\).</p>
<p><b>(b)</b> \(\psi_n=\sqrt{2/d}\sin(n\pi x/d)\), \(E_n=\dfrac{n^2\pi^2\hbar^2}{2md^2}\), \(n=1,2,\dots\)</p>
<p><b>(c)</b> \(n=3\), \(\lambda=2d/3\).</p>
<p><b>(d)</b> \(P=\dfrac2d\displaystyle\int_0^{d/6}\sin^2\frac{3\pi x}{d}dx=\dfrac2d\left[\frac x2-\frac{d}{12\pi}\sin\frac{6\pi x}{d}\right]_0^{d/6}=\dfrac16\). Faz sentido: \([0,d/6]\) é metade de um dos 3 lóbulos idênticos.</p>`});

// ============ 2º/2012 ============
D({id:'fmd-2012-2-q3', ano:2012, prova:'EUF 2º/2012 · Parte 1 · Q3', topicos:['bohr','ondapart'],
enunciado:R`<p>Modelo de Bohr e espectro do hidrogênio.</p>`,
itens:[R`Use a relação de de Broglie para obter a quantização do momento angular de um elétron em órbita (\(L=n\hbar\), \(n=1,2,3,\dots\)).`,R`Use essa relação para mostrar que as energias dos estados do hidrogênio são \(E_n=-\dfrac{m_ee^4}{8\epsilon_0^2h^2n^2}\).`,R`Calcule a energia de ionização do lítio duplamente ionizado (\(Z=3\)), sabendo que a do hidrogênio é 13,6 eV.`,R`A série de Balmer termina em \(n_f=2\). A linha H\(_\beta\) parte de \(n_i=4\). Estime seu comprimento de onda e a região do espectro.`],
dica:R`Órbita estável: um número inteiro de comprimentos de onda cabe na circunferência, \(2\pi r=n\lambda\).`,
solucao:R`<p><b>(a)</b> \(2\pi r=n\lambda=n\dfrac hp\Rightarrow L=pr=n\dfrac{h}{2\pi}=n\hbar\).</p>
<p><b>(b)</b> \(\dfrac{mv^2}{r}=\dfrac{e^2}{4\pi\epsilon_0r^2}\) e \(mvr=n\hbar\Rightarrow r_n=\dfrac{4\pi\epsilon_0\hbar^2n^2}{me^2}\). \(E=\tfrac12mv^2-\dfrac{e^2}{4\pi\epsilon_0r}=-\dfrac{e^2}{8\pi\epsilon_0r_n}=-\dfrac{me^4}{8\epsilon_0^2h^2n^2}\).</p>
<p><b>(c)</b> \(E\propto Z^2\): \(9\times13{,}6=122\) eV.</p>
<p><b>(d)</b> \(\Delta E=13{,}6\left(\tfrac14-\tfrac1{16}\right)=2{,}55\) eV \(\Rightarrow\lambda\approx486\) nm: visível (azul-esverdeado).</p>`});

D({id:'fmd-2012-2-q4', ano:2012, prova:'EUF 2º/2012 · Parte 1 · Q4', topicos:['foton'], fig:'fig/fmd_12b_q4.png',
enunciado:R`<p>Num experimento fotoelétrico com alvo de sódio, a Figura 1 mostra a corrente em função da diferença de potencial \(V\) entre coletor e alvo; as curvas (a) e (b) correspondem a intensidades diferentes, e \(V_0\) é o potencial de corte. A Figura 2 mostra o potencial limite em função da frequência da luz.</p>`,
itens:[R`Estime a constante de Planck em eV·s, indicando o procedimento.`,R`Estime a função trabalho do sódio.`,R`Estime a energia cinética do fotoelétron mais rápido para luz de \(10^{15}\) Hz.`,R`Cite uma característica do efeito fotoelétrico que pode ser explicada classicamente e outra que não pode.`],
dica:R`\(eV_0=hf-\phi\): no gráfico \(V_0\times f\), a inclinação é \(h/e\) e o corte no eixo \(f\) é \(f_0=\phi/h\).`,
solucao:R`<p><b>(a)</b> Pontos de ≈ (4,4; 0) a (11,6; 2,8) em \(10^{14}\) Hz e V. Inclinação ≈ \(\dfrac{2{,}8}{7{,}2\times10^{14}}\approx3{,}9\times10^{-15}\) V·s, logo \(h\approx4\times10^{-15}\) eV·s (valor tabelado: \(4{,}14\times10^{-15}\)).</p>
<p><b>(b)</b> \(f_0\approx4{,}4\times10^{14}\) Hz: \(\phi=hf_0\approx1{,}8\) eV (tabelado ≈ 2,3 eV; a estimativa depende da leitura).</p>
<p><b>(c)</b> \(K_{\max}=hf-\phi\approx4{,}1-1{,}8\approx2{,}2\) eV (é o \(V_0\) lido no gráfico em \(10\times10^{14}\) Hz).</p>
<p><b>(d)</b> Clássica: a corrente de saturação cresce com a intensidade (Fig. 1). Não clássica: existe frequência de corte, e \(K_{\max}\) (isto é \(V_0\)) não depende da intensidade, só de \(f\) (Fig. 1, mesmo \(V_0\) para (a) e (b)); também não há atraso na emissão.</p>`});

// ============ 1º/2013 ============
D({id:'fmd-2013-1-q3', ano:2013, prova:'EUF 1º/2013 · Parte 1 · Q3', topicos:['schr'],
enunciado:R`<p>Uma partícula de massa \(m\) confinada num poço tem \(\psi(x)=A\cos(3\pi x/L)\) para \(-L/2\lt x\lt L/2\) e \(\psi=0\) fora.</p>`,
itens:[R`Calcule \(A\).`,R`Calcule a probabilidade de encontrar a partícula em \(-L/4\lt x\lt L/4\).`,R`Pela equação de Schrödinger no poço, ache a energia em termos de \(m\), \(L\) e \(\hbar\).`,R`Calcule o comprimento de onda do fóton emitido na transição para o fundamental.`],
dica:R`É o poço infinito centrado na origem; \(\cos(3\pi x/L)\) é o estado \(n=3\).`,
solucao:R`<p><b>(a)</b> \(A^2\cdot\dfrac L2=1\Rightarrow A=\sqrt{2/L}\).</p>
<p><b>(b)</b> \(P=\dfrac2L\displaystyle\int_{-L/4}^{L/4}\cos^2\frac{3\pi x}{L}dx=\dfrac2L\left[\frac L4+\frac{L}{6\pi}\sin\frac{3\pi}{2}\right]=\dfrac12-\dfrac1{3\pi}\approx0{,}39\).</p>
<p><b>(c)</b> \(k=3\pi/L\): \(E_3=\dfrac{9\pi^2\hbar^2}{2mL^2}\).</p>
<p><b>(d)</b> \(\Delta E=E_3-E_1=\dfrac{8\pi^2\hbar^2}{2mL^2}=\dfrac{4\pi^2\hbar^2}{mL^2}\). \(\lambda=\dfrac{2\pi\hbar c}{\Delta E}=\dfrac{mcL^2}{2\pi\hbar}=\dfrac{mcL^2}{h}\).</p>`});

D({id:'fmd-2013-1-q4', ano:2013, prova:'EUF 1º/2013 · Parte 1 · Q4', topicos:['rel','nucl'],
enunciado:R`<p>O decaimento dos múons obedece a \(dN/dt=-RN\). A vida média do múon é \(\bar t=2\ \mu\)s, ou seja \(N(\bar t)/N(0)=1/e\). A velocidade dos múons rumo à superfície da Terra é \(0{,}998c\).</p>`,
itens:[R`No referencial do múon, qual o valor de \(R\)?`,R`Sem correções relativísticas, estime quantos múons seriam detectados ao nível do mar para cada \(10^8\) detectados a 9 km de altitude.`,R`Repita a estimativa com a previsão relativística.`],
dica:R`\(\gamma(0{,}998)\approx15{,}8\). Tempo de voo no solo: \(9\ \text{km}/(0{,}998c)\approx30\ \mu\)s.`,
solucao:R`<p><b>(a)</b> \(R=1/\bar t=5\times10^5\) s\(^{-1}\).</p>
<p><b>(b)</b> \(t\approx30\ \mu\)s = 15 vidas médias: \(N=10^8e^{-15}\approx31\) múons.</p>
<p><b>(c)</b> Tempo próprio \(30/15{,}8\approx1{,}9\ \mu\)s: \(N=10^8e^{-0{,}95}\approx3{,}9\times10^7\).</p>`});

// ============ 2º/2014 ============
D({id:'fmd-2014-2-q3', ano:2014, prova:'EUF 2º/2014 · Parte 1 · Q3', topicos:['corpo'],
enunciado:R`<p>A lei de Planck dá a densidade de energia do corpo negro numa cavidade à temperatura \(T\): \(\rho(\nu)d\nu=\dfrac{8\pi\nu^2}{c^3}\dfrac{h\nu\,d\nu}{e^{h\nu/kT}-1}\). (O enunciado original omite o fator \(h\nu\) no numerador.)</p>`,
itens:[R`Expresse a densidade de energia em função do comprimento de onda \(\lambda=c/\nu\).`,R`Mostre que, para comprimentos de onda longos e altas temperaturas, o resultado se reduz à lei clássica de Rayleigh–Jeans.`,R`Obtenha a lei de Stefan–Boltzmann. A radiância é \(R(\lambda)=c\rho(\lambda)/4\).`],
dica:R`\(\rho(\lambda)d\lambda=\rho(\nu)|d\nu|\) com \(|d\nu|=c\,d\lambda/\lambda^2\). Use \(\int_0^\infty\frac{x^3}{e^x-1}dx=\frac{\pi^4}{15}\).`,
solucao:R`<p><b>(a)</b> \(\rho(\lambda)=\dfrac{8\pi hc}{\lambda^5}\dfrac{1}{e^{hc/\lambda kT}-1}\).</p>
<p><b>(b)</b> \(hc/\lambda kT\ll1\Rightarrow e^x-1\approx x\): \(\rho(\lambda)\approx\dfrac{8\pi kT}{\lambda^4}\) (Rayleigh–Jeans).</p>
<p><b>(c)</b> \(R=\dfrac c4\displaystyle\int\rho\,d\lambda=\frac c4\int_0^\infty\frac{8\pi h\nu^3}{c^3}\frac{d\nu}{e^{h\nu/kT}-1}=\frac{2\pi k^4T^4}{c^2h^3}\frac{\pi^4}{15}=\sigma T^4\), com \(\sigma=\dfrac{2\pi^5k^4}{15c^2h^3}\approx5{,}67\times10^{-8}\) W m\(^{-2}\)K\(^{-4}\).</p>`});

D({id:'fmd-2014-2-q4', ano:2014, prova:'EUF 2º/2014 · Parte 1 · Q4', topicos:['rel'],
enunciado:R`<p>Duas partículas de massa \(m\) sofrem uma colisão frontal completamente inelástica ao longo de \(x\). Para um observador A, elas têm velocidades \(v\) e \(-v\). Para um observador B, a partícula 1 está em repouso antes da colisão.</p>`,
itens:[R`Determine a velocidade \(v'_x\) da partícula 2 medida por B antes da colisão.`,R`Ache as velocidades \(v_A\) e \(v'_B\) da partícula resultante medidas por A e por B.`,R`Use a conservação relativística de massa–energia para calcular a massa \(M\) resultante.`],
dica:R`B se move com velocidade \(v\) em relação a A.`,
solucao:R`<p><b>(a)</b> \(v'_x=\dfrac{-v-v}{1+v^2/c^2}=-\dfrac{2v}{1+v^2/c^2}\).</p>
<p><b>(b)</b> Por simetria \(v_A=0\); em B, \(v'_B=-v\).</p>
<p><b>(c)</b> Em A: \(Mc^2=2\gamma mc^2\Rightarrow M=\dfrac{2m}{\sqrt{1-v^2/c^2}}\).</p>`});

// ============ 2º/2015 ============
D({id:'fmd-2015-2-q3', ano:2015, prova:'EUF 2º/2015 · Parte 1 · Q3', topicos:['rel','foton'],
enunciado:R`<p>Dois fótons se propagam ao longo do eixo \(x\) em sentidos opostos, com energias de 5 MeV e 2 MeV.</p>`,
itens:[R`Calcule a velocidade relativa entre os fótons.`,R`Qual a energia total do sistema?`,R`Qual o momento total?`,R`Calcule a energia de repouso do sistema.`],
dica:R`Não existe referencial de repouso de um fóton. A energia de repouso do sistema é o invariante \(\sqrt{E^2-p^2c^2}\).`,
solucao:R`<p><b>(a)</b> Qualquer observador inercial vê cada fóton a \(c\); não há referencial em que um fóton esteja parado, então a "velocidade de um em relação ao outro" não se define como velocidade de um objeto. No laboratório, a taxa com que a separação diminui é \(2c\), o que não viola a relatividade.</p>
<p><b>(b)</b> \(E=7\) MeV.</p>
<p><b>(c)</b> \(p=(5-2)\) MeV/\(c\) = 3 MeV/\(c\), no sentido do fóton de 5 MeV.</p>
<p><b>(d)</b> \(Mc^2=\sqrt{49-9}=\sqrt{40}\approx6{,}3\) MeV: um sistema de fótons tem massa de repouso (poderia, por exemplo, criar um par \(e^+e^-\)).</p>`});

D({id:'fmd-2015-2-q4', ano:2015, prova:'EUF 2º/2015 · Parte 1 · Q4', topicos:['foton'],
enunciado:R`<p>Um fóton de raio X de comprimento de onda \(\lambda=10^{-10}\) m é retroespalhado num experimento Compton (\(\theta=180^\circ\)).</p>`,
itens:[R`Calcule a frequência do fóton retroespalhado.`,R`Quais a direção e o sentido do momento do elétron ejetado em relação ao fóton incidente?`,R`Qual o módulo da velocidade do elétron?`],
dica:R`\(\Delta\lambda=2\lambda_C=4{,}86\) pm. O momento do elétron é \(h/\lambda+h/\lambda'\).`,
solucao:R`<p><b>(a)</b> \(\lambda'=100+4{,}86=104{,}9\) pm; \(f'=c/\lambda'\approx2{,}86\times10^{18}\) Hz.</p>
<p><b>(b)</b> Mesma direção e mesmo sentido do fóton incidente (o fóton volta, o elétron segue em frente).</p>
<p><b>(c)</b> \(p_e=h\left(\dfrac1{\lambda}+\dfrac1{\lambda'}\right)\approx6{,}63\times10^{-34}\cdot1{,}95\times10^{10}\approx1{,}29\times10^{-23}\) kg·m/s. Não relativístico (\(K\approx0{,}58\) keV): \(v=p/m\approx1{,}4\times10^7\) m/s \(\approx0{,}047c\).</p>`});

})();
