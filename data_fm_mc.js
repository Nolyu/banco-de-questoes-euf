window.BANK = window.BANK || [];
(function(){
const P = q => window.BANK.push(Object.assign({area:'fm', tipo:'mc'}, q));
const R = String.raw;
// Primeira alternativa = correta (a página embaralha).

// ============ 2º/2020 — online ============
P({id:'fm-2020o-1', ano:2020, prova:'EUF 2º/2020 (online) · Q1', topicos:['foton','rel'],
enunciado:R`<p>Sendo \(m_e\) a massa do elétron, qual o máximo comprimento de onda que um fóton pode ter para permitir a criação de um par elétron–pósitron?</p>`,
opcoes:[R`\(\dfrac{h}{2m_ec}\)`,R`\(\dfrac{h}{4m_ec}\)`,R`\(\dfrac{h}{m_ec}\)`,R`\(\dfrac{2h}{m_ec}\)`,R`\(\dfrac{4h}{m_ec}\)`],
dica:R`Energia mínima: as massas de repouso do par.`,
solucao:R`<p>\(hc/\lambda\ge2m_ec^2\Rightarrow\lambda_{\max}=\dfrac{h}{2m_ec}\). (A rigor um fóton isolado não cria par, pois o momento não fecha; é preciso um núcleo por perto, que absorve momento com energia desprezível. Por isso o limiar fica ≈ \(2m_ec^2\).)</p>`});

P({id:'fm-2020o-2', ano:2020, prova:'EUF 2º/2020 (online) · Q2', topicos:['rel'],
enunciado:R`<p>Uma partícula de massa \(m\), com velocidade \(v=\tfrac45c\) no laboratório, colide com outra idêntica em repouso, sem perdas de energia total; as duas formam uma única partícula de massa \(M\). A velocidade \(v'\) do conjunto é:</p>`,
opcoes:[R`\(v'=\tfrac58v\)`,R`\(v'=\tfrac35v\)`,R`\(v'=\tfrac38v\)`,R`\(v'=v\)`,R`Não se pode determinar sem conhecer \(M\).`],
dica:R`\(v'=p_{tot}c^2/E_{tot}\), sem precisar de \(M\).`,
solucao:R`<p>\(v'=\dfrac{\gamma mv}{\gamma m+m}=\dfrac{\gamma}{\gamma+1}v=\dfrac{5/3}{8/3}v=\dfrac58v\) (= c/2).</p>`});

P({id:'fm-2020o-3', ano:2020, prova:'EUF 2º/2020 (online) · Q3', topicos:['foton'],
enunciado:R`<p>Dois feixes de luz de <b>mesma intensidade</b> incidem sobre amostras idênticas do mesmo metal: um de 400 nm e outro de 300 nm; ambos ejetam elétrons.</p><p>I. Mais elétrons por segundo são emitidos com 300 nm do que com 400 nm.<br>II. Os elétrons emitidos com 300 nm têm mais energia.<br>III. Dobrando a intensidade de cada feixe, mais elétrons são emitidos em ambas.<br>IV. Dobrando a intensidade, os elétrons têm mais energia.</p>`,
opcoes:[R`Somente II e III são verdadeiras.`,R`Nenhuma é verdadeira.`,R`Somente I e II são verdadeiras.`,R`Somente III e IV são verdadeiras.`,R`Todas são verdadeiras.`],
dica:R`Mesma intensidade com fótons mais energéticos significa menos fótons por segundo.`,
solucao:R`<p>I: falsa (menos fótons em 300 nm). II: verdadeira (\(K_{\max}=hc/\lambda-\phi\) maior). III: verdadeira. IV: falsa (\(K_{\max}\) não depende da intensidade).</p>`});

P({id:'fm-2020o-4', ano:2020, prova:'EUF 2º/2020 (online) · Q4', topicos:['rel'],
enunciado:R`<p>Um próton (massa \(m\), carga \(e\)) em repouso na origem é submetido a partir de \(t=0\) a um campo elétrico constante e uniforme \(E\). Desprezando radiação, qual sua energia no instante \(T\), segundo a relatividade restrita?</p>`,
opcoes:[R`\(\sqrt{1+\left(\dfrac{eE}{mc}T\right)^2}\;mc^2\)`,R`\(\dfrac{mc^2}{1+\left(\frac{eE}{mc}T\right)^2}\)`,R`\(\dfrac{mc^2}{\sqrt{1+\left(\frac{eE}{mc}T\right)^2}}\)`,R`\(mc^2\)`,R`\(\left[1+\left(\dfrac{eE}{mc}T\right)^2\right]mc^2\)`],
dica:R`\(dp/dt=eE\) vale relativisticamente: \(p=eET\).`,
solucao:R`<p>\(E=\sqrt{p^2c^2+m^2c^4}=mc^2\sqrt{1+\left(\dfrac{eET}{mc}\right)^2}\). Para \(T\) pequeno: \(mc^2+\dfrac{(eET)^2}{2m}\) (clássico).</p>`});

P({id:'fm-2020o-5', ano:2020, prova:'EUF 2º/2020 (online) · Q5', topicos:['bohr'],
enunciado:R`<p>Um átomo muônico tem um próton e um múon negativo em órbita. Considere a massa do múon \(200m_0\) e a do próton \(1800m_0\) (\(m_0\): massa do elétron). Em termos do raio de Bohr \(a_0\) do hidrogênio, o raio de Bohr do átomo muônico é:</p>`,
opcoes:[R`\(a_0/180\)`,R`\(a_0/200\)`,R`\(180\,a_0\)`,R`\(200\,a_0\)`,R`\(a_0\)`],
dica:R`\(a\propto1/\mu\).`,
solucao:R`<p>\(\mu=\dfrac{200\cdot1800}{2000}m_0=180m_0\Rightarrow a=a_0/180\).</p>`});

P({id:'fm-2020o-6', ano:2020, prova:'EUF 2º/2020 (online) · Q6', topicos:['foton'],
enunciado:R`<p>No espalhamento Compton entre um elétron livre de massa \(m_0\) e um fóton de comprimento de onda \(\lambda=h/(2m_0c)\), a energia do fóton cai para 1/3 da inicial. O ângulo de espalhamento é:</p>`,
opcoes:[R`\(90^\circ\)`,R`\(0^\circ\)`,R`\(45^\circ\)`,R`\(135^\circ\)`,R`\(180^\circ\)`],
dica:R`\(E'=E/3\Rightarrow\lambda'=3\lambda\).`,
solucao:R`<p>\(\lambda=\lambda_C/2\), \(\lambda'=\tfrac32\lambda_C\): \(\Delta\lambda=\lambda_C=\lambda_C(1-\cos\theta)\Rightarrow\theta=90^\circ\).</p>`});

P({id:'fm-2020o-7', ano:2020, prova:'EUF 2º/2020 (online) · Q7', topicos:['schr'],
enunciado:R`<p>Partícula num poço infinito \(0\le x\le a\). Seja \(\Delta E_n=E_{n+1}-E_n\) e \(P_n\) a probabilidade de, no \(n\)-ésimo estado, a partícula estar em \(a/4\le x\le3a/4\). Para \(n\) muito grande:</p>`,
opcoes:[R`\(\Delta E_n/E_n\to0\) e \(P_n\to1/2\).`,R`\(\Delta E_n/E_n\) diverge e \(P_n\to1/2\).`,R`\(\Delta E_n/E_n\) diverge e \(P_n\to1\).`,R`\(\Delta E_n/E_n\to1\) e \(P_n\to0\).`,R`\(\Delta E_n/E_n\to0\) e \(P_n\to1\).`],
dica:R`\(E_n\propto n^2\). Para \(n\) grande, \(\sin^2\) oscila rápido e tem média 1/2 (princípio da correspondência).`,
solucao:R`<p>\(\Delta E_n/E_n=\dfrac{2n+1}{n^2}\to0\): o espectro parece contínuo. \(P_n=\dfrac12-\dfrac{\sin(3n\pi/2)-\sin(n\pi/2)}{2n\pi}\to\dfrac12\), a probabilidade clássica de uniformidade.</p>`});

P({id:'fm-2020o-8', ano:2020, prova:'EUF 2º/2020 (online) · Q8', topicos:['ondapart'],
enunciado:R`<p>Um padrão de difração pode ser obtido quando elétrons incidem na superfície de um cristal. Com espaçamento atômico da ordem de 0,4 nm, qual a ordem de grandeza da energia cinética dos elétrons para observar o padrão?</p>`,
opcoes:[R`10 eV`,R`0,1 eV`,R`1 eV`,R`100 eV`,R`1000 eV`],
dica:R`Precisa \(\lambda\sim d\). \(K[\text{eV}]\approx1{,}5/\lambda[\text{nm}]^2\).`,
solucao:R`<p>\(K=\dfrac{(hc)^2}{2mc^2\lambda^2}=\dfrac{1240^2}{2\cdot5{,}11\times10^5\cdot0{,}16}\approx9\) eV \(\sim10\) eV.</p>`});

P({id:'fm-2020o-9', ano:2020, prova:'EUF 2º/2020 (online) · Q9', topicos:['corpo'],
enunciado:R`<p>Um corpo negro esférico de raio \(r\) está em órbita circular de raio \(d\) (distância Terra–Sol) em torno do Sol, de temperatura superficial \(T\) e raio \(R\). Qual sua temperatura de equilíbrio (uniforme)?</p>`,
opcoes:[R`\(\sqrt{\dfrac{R}{2d}}\,T\)`,R`\(\dfrac{r}{2d}T\)`,R`\(\sqrt{\dfrac{r}{2d}}\,T\)`,R`\(T\)`,R`\(\dfrac{R}{2d}T\)`],
dica:R`Absorve \(\sigma T^4\dfrac{R^2}{d^2}\pi r^2\); emite \(4\pi r^2\sigma T_c^4\).`,
solucao:R`<p>\(T_c^4=\dfrac{R^2}{4d^2}T^4\Rightarrow T_c=\sqrt{\dfrac R{2d}}\,T\) (≈ 280 K para a Terra).</p>`});

P({id:'fm-2020o-10', ano:2020, prova:'EUF 2º/2020 (online) · Q10', topicos:['foton'],
enunciado:R`<p>Com luz de 400 nm, a energia cinética máxima dos fotoelétrons é 1,0 eV. Com luz de 300 nm na mesma superfície, o valor mais próximo de \(K_{\max}\) é:</p>`,
opcoes:[R`2 eV`,R`0,02 eV`,R`0,2 eV`,R`20 eV`,R`200 eV`],
dica:R`\(\Delta K=hc(1/\lambda_2-1/\lambda_1)\).`,
solucao:R`<p>\(\Delta K=4{,}13-3{,}10=1{,}03\) eV \(\Rightarrow K\approx2{,}0\) eV.</p>`});

// ============ 2020 — 2ª aplicação ============
P({id:'fm-2020b-1', ano:2020, prova:'EUF 2020 (2ª aplicação) · FM1A', topicos:['foton'],
enunciado:R`<p>Qual é o máximo comprimento de onda de um fóton capaz de quebrar uma ligação química cuja energia é de 4 eV? Indique a alternativa que mais se aproxima do resultado.</p>`,
opcoes:[R`300 nm`,R`100 nm`,R`150 nm`,R`200 nm`,R`250 nm`],
dica:R`Use \(hc\approx1240\ \text{eV·nm}\).`,
solucao:R`<p>\(\lambda_{\max}=\dfrac{hc}{E}=\dfrac{1240\ \text{eV·nm}}{4\ \text{eV}}=310\ \text{nm}\approx300\ \text{nm}\).</p>`});

P({id:'fm-2020b-2', ano:2020, prova:'EUF 2020 (2ª aplicação) · FM2A', topicos:['ondapart'],
enunciado:R`<p>Qual é o comprimento de onda de de Broglie para um elétron com energia <i>cinética</i> de 2 keV? Indique a alternativa que mais se aproxima do resultado.</p>`,
opcoes:[R`\(3\times10^{-11}\) m`,R`\(3\times10^{-12}\) m`,R`\(3\times10^{-10}\) m`,R`\(3\times10^{-9}\) m`,R`\(3\times10^{-8}\) m`],
dica:R`2 keV ≪ 511 keV: use \(p=\sqrt{2mK}\). Atalho: \(\lambda=1{,}226\ \text{nm}/\sqrt{K[\text{eV}]}\).`,
solucao:R`<p>\(\lambda=\dfrac{h}{\sqrt{2mK}}=\dfrac{hc}{\sqrt{2mc^2K}}=\dfrac{1240\ \text{eV·nm}}{\sqrt{2\cdot511\times10^3\cdot2\times10^3}\ \text{eV}}\approx\dfrac{1240}{4{,}5\times10^4}\ \text{nm}\approx2{,}7\times10^{-11}\ \text{m}\).</p>`});

P({id:'fm-2020b-3', ano:2020, prova:'EUF 2020 (2ª aplicação) · FM3A', topicos:['ondapart','schr'],
enunciado:R`<p>Qual é a ordem de grandeza da mínima energia cinética de um elétron confinado a mover-se em uma região unidimensional com comprimento de 1 Å (da ordem do raio atômico)?</p>`,
opcoes:[R`\(10^{-18}\) J`,R`\(10^{-21}\) J`,R`\(10^{-15}\) J`,R`\(10^{-12}\) J`,R`\(10^{-9}\) J`],
dica:R`Poço infinito: \(E_1=\dfrac{h^2}{8mL^2}\) (ou estime pela incerteza \(p\sim\hbar/L\)).`,
solucao:R`<p>\(E_1=\dfrac{h^2}{8mL^2}=\dfrac{(6{,}6\times10^{-34})^2}{8\cdot9{,}1\times10^{-31}\cdot10^{-20}}\approx6\times10^{-18}\ \text{J}\) (≈ 38 eV). Ordem \(10^{-18}\) J.</p>`});

P({id:'fm-2020b-4', ano:2020, prova:'EUF 2020 (2ª aplicação) · FM4A', topicos:['schr'], fig:'fig/fm_b20_q4.png',
enunciado:R`<p>Considere o potencial degrau de altura \(V_0\) mostrado na figura (\(V=V_0\) na região I, \(x\lt0\); \(V=0\) na região II, \(x>0\)). Uma partícula com energia total \(E=2V_0\) e momento \(\hbar k\) move-se da região I para a região II, incidindo na interface a partir da esquerda. O coeficiente de reflexão \(R\) na interface é:</p>`,
opcoes:[R`\(\left(\dfrac{1-\sqrt2}{1+\sqrt2}\right)^2\)`,R`\(\left(\dfrac{1+\sqrt2}{1-\sqrt2}\right)^2\)`,R`\(0\)`,R`\(\left(\dfrac{1-\sqrt2}{2}\right)^2\)`,R`\(\dfrac{4\sqrt2}{1+\sqrt2}\)`],
dica:R`\(R=\left(\dfrac{k_1-k_2}{k_1+k_2}\right)^2\), com \(\hbar k=\sqrt{2m(E-V)}\) em cada região.`,
solucao:R`<p>Região I: \(E-V_0=V_0\Rightarrow k_1\propto\sqrt{V_0}\). Região II: \(E=2V_0\Rightarrow k_2\propto\sqrt{2V_0}\). Então \(k_2/k_1=\sqrt2\) e \(R=\left(\dfrac{1-\sqrt2}{1+\sqrt2}\right)^2\approx0{,}03\). A reflexão quântica ocorre mesmo num degrau "descendente".</p>`});

P({id:'fm-2020b-5', ano:2020, prova:'EUF 2020 (2ª aplicação) · FM5A', topicos:['rel'],
enunciado:R`<p>Espaçonaves robóticas de 200 g seriam impulsionadas por "velas solares" até \(3/5\) da velocidade da luz. Quanta energia terá que ser fornecida para que uma delas atinja essa velocidade?</p>`,
opcoes:[R`\(4{,}5\times10^{15}\) J`,R`\(4{,}5\times10^{11}\) J`,R`\(4{,}5\times10^{13}\) J`,R`\(4{,}5\times10^{17}\) J`,R`\(4{,}5\times10^{19}\) J`],
dica:R`\(K=(\gamma-1)mc^2\); para \(\beta=3/5\), \(\gamma=5/4\).`,
solucao:R`<p>\(K=(\tfrac54-1)(0{,}2)(3\times10^8)^2=0{,}25\cdot0{,}2\cdot9\times10^{16}=4{,}5\times10^{15}\ \text{J}\).</p>`});

P({id:'fm-2020b-6', ano:2020, prova:'EUF 2020 (2ª aplicação) · FM6A', topicos:['rel'],
enunciado:R`<p>A distância Júpiter–Terra é de 600 milhões de km, medida na Terra. Uma partícula expelida de Júpiter viaja até a Terra com velocidade constante \(0{,}80c\) em relação à Terra. O tempo para cruzar essa distância seria de aproximadamente:</p>`,
opcoes:[R`\(2{,}5\times10^3\) s para um observador na Terra e \(1{,}5\times10^3\) s para um observador na partícula`,R`\(1{,}5\times10^3\) s na Terra e \(2{,}5\times10^3\) s na partícula`,R`\(2{,}5\) s na Terra e \(1{,}5\) s na partícula`,R`\(2{,}5\times10^4\) s na Terra e \(1{,}5\times10^4\) s na partícula`,R`\(2{,}0\times10^3\) s na Terra e \(5{,}0\) s na partícula`],
dica:R`O tempo na partícula é o tempo próprio: \(\Delta\tau=\Delta t/\gamma\).`,
solucao:R`<p>Terra: \(\Delta t=\dfrac{6\times10^{11}}{2{,}4\times10^8}=2{,}5\times10^3\ \text{s}\). Com \(\gamma=5/3\): \(\Delta\tau=0{,}6\,\Delta t=1{,}5\times10^3\ \text{s}\) (equivalentemente, a distância contraída \(3{,}6\times10^{11}\) m dividida por \(0{,}8c\)).</p>`});

P({id:'fm-2020b-7', ano:2020, prova:'EUF 2020 (2ª aplicação) · FM7A', topicos:['foton'], fig:'fig/fm_b20_q7.png',
enunciado:R`<p>Na espectroscopia XPS, um fóton de energia \(hf\) arranca um elétron com energia de ligação \(E_B\); o elétron sai com \(v\ll c\). Os fotoelétrons sobem (direção \(+y\)) e entram num analisador semiesférico de raio \(R\) que os curva para a direita até o detector, guiados por um campo magnético uniforme \(\vec B\) (\(\hat z\) saindo do papel). Sendo \(m_0\) a massa do elétron e \(e\) o módulo de sua carga, o vetor \(\vec B\) é:</p>`,
opcoes:[R`\(-\dfrac{1}{eR}\sqrt{2m_0(hf-E_B)}\,\hat z\)`,R`\(+\dfrac{1}{eR}\sqrt{2m_0(hf-E_B)}\,\hat z\)`,R`\(+\dfrac{1}{eR}\sqrt{m_0(hf-E_B)}\,\hat z\)`,R`\(-\dfrac{R}{e}\sqrt{2m_0(hf-E_B)}\,\hat z\)`,R`\(-\dfrac{1}{eR}\sqrt{m_0(hf-E_B)}\,\hat z\)`],
dica:R`Módulo: \(R=\dfrac{p}{eB}\) com \(p=\sqrt{2m_0E_c}\). Sentido: carga negativa, \(\vec F=-e\,\vec v\times\vec B\) deve apontar para o centro.`,
solucao:R`<p>\(E_c=hf-E_B\), \(p=\sqrt{2m_0(hf-E_B)}\) e \(B=\dfrac{p}{eR}\). No topo da trajetória \(\vec v=v\hat x\) e a força deve apontar para \(-\hat y\). Com \(\vec B=B_z\hat z\): \(\vec F=-e\,v\hat x\times B_z\hat z=+evB_z\hat y\), logo \(B_z\lt0\): \(\vec B=-\dfrac{1}{eR}\sqrt{2m_0(hf-E_B)}\,\hat z\).</p>`});

P({id:'fm-2020b-8', ano:2020, prova:'EUF 2020 (2ª aplicação) · FM8A', topicos:['atom','schr'], fig:'fig/fm_b20_q8.png',
enunciado:R`<p>Modele a ligação C–C de hidrocarbonetos como uma mola de constante \(k\): na ligação simples (etano, H\(_3\)C–CH\(_3\)) há uma mola entre dois grupos CH\(_3\); na dupla (eteno, H\(_2\)C=CH\(_2\)) há duas molas em paralelo entre dois grupos CH\(_2\). A massa do carbono é \(12m_H\). A razão entre as diferenças de energia vibracional (1º excitado – fundamental) \(\Delta E(\text{dupla})/\Delta E(\text{simples})\) é:</p>`,
opcoes:[R`\(\sqrt{15/7}\)`,R`\(\sqrt2\)`,R`\(\sqrt{15/28}\)`,R`\(\sqrt2/2\)`,R`\(\sqrt{7/15}\)`],
dica:R`\(\Delta E=\hbar\omega\), \(\omega=\sqrt{k_{ef}/\mu}\), com massa reduzida \(\mu=M/2\) para massas iguais.`,
solucao:R`<p>Simples: \(M=15m_H\), \(\mu=7{,}5m_H\), \(k_{ef}=k\). Dupla: \(M'=14m_H\), \(\mu'=7m_H\), \(k_{ef}=2k\).</p><p>\(\dfrac{\Delta E_d}{\Delta E_s}=\sqrt{\dfrac{2k/7}{k/7{,}5}}=\sqrt{\dfrac{15}{7}}\).</p>`});

// ============ 2021 — online ============
P({id:'fm-2021-1', ano:2021, prova:'EUF 2021 (online) · FM1A', topicos:['bohr'],
enunciado:R`<p>No modelo de Bohr para o hidrogênio, o movimento circular do elétron (carga \(q\), massa \(m\)) gera um momento magnético \(\mu=IA\) (corrente vezes área da espira). Se o elétron estiver no <b>segundo estado excitado</b>, seu momento magnético é:</p>`,
opcoes:[R`\(\dfrac{3q\hbar}{2m}\)`,R`\(\dfrac{3q\hbar}{m}\)`,R`\(\dfrac{q\hbar}{2m}\)`,R`\(\dfrac{2q\hbar}{m}\)`,R`\(\dfrac{9q\hbar}{2m}\)`],
dica:R`Mostre que \(\mu=\dfrac{q}{2m}L\) para órbita circular e use \(L=n\hbar\). Segundo estado excitado: \(n=3\).`,
solucao:R`<p>\(I=\dfrac{qv}{2\pi r}\), \(A=\pi r^2\Rightarrow\mu=\dfrac{qvr}{2}=\dfrac{q}{2m}L\). Com \(L=n\hbar\) e \(n=3\): \(\mu=\dfrac{3q\hbar}{2m}\).</p>`});

P({id:'fm-2021-2', ano:2021, prova:'EUF 2021 (online) · FM2A', topicos:['ondapart'], fig:'fig/fm_a21_q2.png',
enunciado:R`<p>Um feixe de nêutrons incide normalmente à superfície de um cristal. Um máximo de difração de primeira ordem é observado a \(60^\circ\) da normal (figura), devido a planos paralelos à superfície distanciados de \(d=0{,}40\) nm. Com \(mc^2=940\) MeV para o nêutron, a energia cinética dos nêutrons é aproximadamente:</p>`,
opcoes:[R`2,3 meV`,R`6,8 meV`,R`5,1 meV`,R`2,3 eV`,R`5,1 MeV`],
dica:R`Pela figura, a diferença de caminho entre os raios dos dois planos é \(d+d\cos\theta\).`,
solucao:R`<p>\(\lambda=d(1+\cos60^\circ)=1{,}5d=0{,}60\) nm. Não relativístico: \(K=\dfrac{(hc)^2}{2mc^2\lambda^2}=\dfrac{(1240\ \text{eV·nm})^2}{2\cdot940\times10^6\ \text{eV}\cdot0{,}36\ \text{nm}^2}\approx2{,}3\times10^{-3}\ \text{eV}\).</p>`});

P({id:'fm-2021-3', ano:2021, prova:'EUF 2021 (online) · FM3A', topicos:['foton'], fig:'fig/fm_a21_q3.png',
enunciado:R`<p>A energia cinética máxima de fotoelétrons ejetados de um metal foi medida para vários comprimentos de onda; os dados estão no gráfico (\(K_{\max}\) em eV versus \(100/\lambda\), com \(\lambda\) em nm). A função trabalho do metal é estimada como:</p>`,
opcoes:[R`6,2 eV`,R`5,1 eV`,R`0,62 keV`,R`13,6 eV`,R`0,51 eV`],
dica:R`\(K_{\max}=\dfrac{hc}{\lambda}-\phi\). Ache onde a reta corta \(K=0\).`,
solucao:R`<p>A reta cruza \(K=0\) em \(100/\lambda\approx0{,}5\ \text{nm}^{-1}\), ou seja \(\lambda_0\approx200\) nm. Então \(\phi=\dfrac{1240}{200}\approx6{,}2\) eV. Conferência: em \(\lambda=50\) nm, \(hc/\lambda=24{,}8\) eV e \(K=18{,}6\) eV, como no gráfico.</p>`});

P({id:'fm-2021-4', ano:2021, prova:'EUF 2021 (online) · FM4A', topicos:['foton'], fig:'fig/fm_a21_q4.png',
enunciado:R`<p>Num modelo simplificado de <i>bremsstrahlung</i> num tubo de raios X, um elétron com energia cinética inicial de 41,3 keV emite dois fótons antes de parar (sem outras perdas). Se o segundo fóton tem comprimento de onda de 0,120 nm, o comprimento de onda do primeiro fóton é:</p>`,
opcoes:[R`0,040 nm`,R`0,030 nm`,R`0,120 nm`,R`0,300 nm`,R`0,024 nm`],
dica:R`\(E_1+E_2=41{,}3\) keV e \(E=hc/\lambda\) com \(hc=1{,}24\ \text{keV·nm}\).`,
solucao:R`<p>\(E_2=\dfrac{1{,}24}{0{,}120}=10{,}3\) keV, logo \(E_1=41{,}3-10{,}3=31{,}0\) keV e \(\lambda_1=\dfrac{1{,}24}{31{,}0}=0{,}040\) nm.</p>`});

P({id:'fm-2021-5', ano:2021, prova:'EUF 2021 (online) · FM5A', topicos:['rel'],
enunciado:R`<p>Considere o processo hipotético \(a+\bar a\to\gamma\), em que um par isolado partícula–antipartícula se aniquila produzindo um <b>único</b> fóton. Analisando no referencial do centro de massa do par, assinale a afirmativa correta.</p>`,
opcoes:[R`O processo não ocorre, uma vez que violaria princípios físicos fundamentais.`,R`É um processo que ocorre naturalmente, bastando que energia e momento totais sejam conservados.`,R`Só é observado se a partícula e a antipartícula forem um elétron e um pósitron.`,R`Só pode ocorrer se a frequência do fóton for suficientemente alta.`,R`Nenhuma das demais alternativas é correta.`],
dica:R`No referencial do CM o momento total é zero. Que momento teria o fóton?`,
solucao:R`<p>No CM, \(\vec p_{tot}=0\) e \(E_{tot}\ge2mc^2>0\). Um único fóton tem \(|\vec p|=E/c\ne0\): impossível conservar energia e momento simultaneamente. Por isso a aniquilação livre produz pelo menos dois fótons.</p>`});

P({id:'fm-2021-6', ano:2021, prova:'EUF 2021 (online) · FM6A', topicos:['rel'],
enunciado:R`<p>Uma nave vai da Terra até uma estrela a distância \(D\) do Sol (medida no referencial do Sol) em um tempo próprio \(\Delta t\), com velocidade praticamente constante \(v\) em relação ao Sol. Com um algarismo significativo, quanto vale \(v/c\) se \(D=4\) anos-luz e \(\Delta t=3\) anos?</p>`,
opcoes:[R`0,8`,R`0,5`,R`0,6`,R`0,7`,R`0,9`],
dica:R`\(D=v\,\gamma\,\Delta t\) (o tempo no referencial do Sol é \(\gamma\Delta t\)).`,
solucao:R`<p>\(\gamma\beta=\dfrac{D}{c\Delta t}=\dfrac43\Rightarrow\dfrac{\beta^2}{1-\beta^2}=\dfrac{16}{9}\Rightarrow\beta^2=\dfrac{16}{25}\Rightarrow\beta=0{,}8\).</p>`});

P({id:'fm-2021-7', ano:2021, prova:'EUF 2021 (online) · FM7A', topicos:['corpo'],
enunciado:R`<p>A radiação térmica de um ser humano (cerca de 36 °C) pode ser aproximada pela de um corpo negro. A ordem de grandeza da energia de um fóton no comprimento de onda que maximiza essa radiação é:</p>`,
opcoes:[R`\(10^{-20}\) J`,R`\(10^{-22}\) J`,R`\(10^{-18}\) J`,R`\(10^{-16}\) J`,R`\(10^{-14}\) J`],
dica:R`Lei de Wien: \(\lambda_{\max}T\approx2{,}9\times10^{-3}\) m·K.`,
solucao:R`<p>\(\lambda_{\max}=\dfrac{2{,}9\times10^{-3}}{309}\approx9{,}4\ \mu\text{m}\) (infravermelho). \(E=\dfrac{hc}{\lambda}=\dfrac{2\times10^{-25}}{9{,}4\times10^{-6}}\approx2\times10^{-20}\) J (≈ 0,13 eV).</p>`});

P({id:'fm-2021-8', ano:2021, prova:'EUF 2021 (online) · FM8A', topicos:['foton'],
enunciado:R`<p>Determine o comprimento de onda da luz que, incidindo sobre tungstênio (função trabalho 4,5 eV), libera elétrons com velocidade máxima de \(1{,}4\times10^6\) m/s. O valor que mais se aproxima é:</p>`,
opcoes:[R`\(10^{-7}\) m`,R`\(10^{-9}\) m`,R`\(10^{-11}\) m`,R`\(10^{-5}\) m`,R`\(10^{-3}\) m`],
dica:R`\(hc/\lambda=\phi+\tfrac12mv^2\).`,
solucao:R`<p>\(K=\tfrac12(9{,}1\times10^{-31})(1{,}4\times10^6)^2\approx8{,}9\times10^{-19}\) J \(\approx5{,}6\) eV. \(hc/\lambda=10{,}1\) eV \(\Rightarrow\lambda\approx123\) nm \(\sim10^{-7}\) m.</p>`});

// ============ 2021 — 3ª aplicação ============
P({id:'fm-2021c-1', ano:2021, prova:'EUF 2021 (3ª aplicação) · FM1A', topicos:['rel'],
enunciado:R`<p>Uma partícula se move com velocidade constante e sua energia cinética é igual a \(1/4\) de sua energia de repouso. Qual é o módulo de sua velocidade, em termos de \(c\)?</p>`,
opcoes:[R`\(0{,}60c\)`,R`\(0{,}50c\)`,R`\(0{,}67c\)`,R`\(0{,}71c\)`,R`\(0{,}80c\)`],
dica:R`\(K=(\gamma-1)mc^2=\tfrac14mc^2\).`,
solucao:R`<p>\(\gamma=\tfrac54\Rightarrow1-\beta^2=\tfrac{16}{25}\Rightarrow\beta=0{,}6\).</p>`});

P({id:'fm-2021c-2', ano:2021, prova:'EUF 2021 (3ª aplicação) · FM2A', topicos:['rel'],
enunciado:R`<p>Uma astronauta numa nave com velocidade constante em relação à Terra mede seus batimentos cardíacos: \(f_0\) por minuto. Para um observador em repouso na Terra, a frequência dos batimentos dela é \(f=\tfrac45f_0\). Qual a velocidade da nave em relação à Terra?</p>`,
opcoes:[R`\(0{,}60c\)`,R`\(0{,}20c\)`,R`\(0{,}50c\)`,R`\(0{,}70c\)`,R`\(0{,}90c\)`],
dica:R`Dilatação temporal: o período medido na Terra é \(\gamma T_0\).`,
solucao:R`<p>\(f=f_0/\gamma\Rightarrow\gamma=\tfrac54\Rightarrow\beta=0{,}6\).</p>`});

P({id:'fm-2021c-3', ano:2021, prova:'EUF 2021 (3ª aplicação) · FM3A', topicos:['bohr'],
enunciado:R`<p>Um íon He\(^+\) (um elétron, \(Z=2\)) emite um fóton ao decair de \(n=2\) para \(n=1\). Esse fóton é absorvido por um átomo de hidrogênio em \(n=1\). Pelo modelo de Bohr, o que ocorre com o átomo de H?</p>`,
opcoes:[R`O elétron do H é ejetado com 27,2 eV de energia cinética.`,R`O átomo de H é excitado para \(n=2\).`,R`O átomo de H é excitado para \(n=4\).`,R`O elétron do H é ejetado com energia cinética praticamente nula.`,R`O elétron do H é ejetado com 6,8 eV de energia cinética.`],
dica:R`\(E_n=-13{,}6\,Z^2/n^2\) eV.`,
solucao:R`<p>Fóton: \(E=13{,}6\cdot4\cdot(1-\tfrac14)=40{,}8\) eV. Isso supera a energia de ionização do H (13,6 eV), então o elétron sai com \(40{,}8-13{,}6=27{,}2\) eV.</p>`});

P({id:'fm-2021c-4', ano:2021, prova:'EUF 2021 (3ª aplicação) · FM4A', topicos:['foton'],
enunciado:R`<p>Um fóton de 496 keV sofre espalhamento Compton, e seu comprimento de onda aumenta de \(0{,}50\times10^{-3}\) nm. Qual a energia cinética final do elétron?</p>`,
opcoes:[R`83 keV`,R`0,30 keV`,R`99 keV`,R`124 keV`,R`496 keV`],
dica:R`Calcule \(\lambda=hc/E\), some o desvio e converta de volta. A energia perdida pelo fóton vai para o elétron.`,
solucao:R`<p>\(\lambda=\dfrac{1{,}24\ \text{keV·nm}}{496\ \text{keV}}=2{,}5\times10^{-3}\) nm; \(\lambda'=3{,}0\times10^{-3}\) nm \(\Rightarrow E'=413\) keV. \(K_e=496-413=83\) keV.</p>`});

P({id:'fm-2021c-5', ano:2021, prova:'EUF 2021 (3ª aplicação) · FM5A', topicos:['bohr'],
enunciado:R`<p>O tempo de vida de um estado excitado do hidrogênio é cerca de 10 ns. No modelo de Bohr (\(a_B=0{,}5\) Å), o número de revoluções que o elétron executa nesse intervalo, no nível \(n=2\), é da ordem de:</p>`,
opcoes:[R`\(10^7\)`,R`\(10^3\)`,R`\(10^9\)`,R`\(10^{11}\)`,R`\(10^5\)`],
dica:R`\(r_n=n^2a_B\), \(v_n=\alpha c/n\) com \(\alpha\approx1/137\).`,
solucao:R`<p>\(r_2=2\) Å, \(v_2=\dfrac{c}{2\cdot137}\approx1{,}1\times10^6\) m/s. Período \(T=\dfrac{2\pi r}{v}\approx1{,}1\times10^{-15}\) s. \(N=\dfrac{10^{-8}}{1{,}1\times10^{-15}}\approx9\times10^6\sim10^7\).</p>`});

P({id:'fm-2021c-6', ano:2021, prova:'EUF 2021 (3ª aplicação) · FM6A', topicos:['ondapart','nucl'],
enunciado:R`<p>Prótons e nêutrons estão confinados num núcleo de dimensão aproximada \(10^{-15}\) m. Uma boa estimativa para suas energias cinéticas é:</p>`,
opcoes:[R`20 MeV`,R`30 GeV`,R`1,0 MeV`,R`50 keV`,R`10 eV`],
dica:R`\(p\sim\hbar/\Delta x\); use \(\hbar c\approx197\) MeV·fm e \(m_pc^2\approx938\) MeV.`,
solucao:R`<p>\(pc\sim\dfrac{197\ \text{MeV·fm}}{1\ \text{fm}}\approx200\) MeV \(\ll m_pc^2\). \(K=\dfrac{(pc)^2}{2mc^2}\approx\dfrac{4\times10^4}{1900}\approx20\) MeV.</p>`});

P({id:'fm-2021c-7', ano:2021, prova:'EUF 2021 (3ª aplicação) · FM7A', topicos:['corpo'], fig:'fig/fm_c21_q7.png',
enunciado:R`<p>A radiância espectral de um corpo negro a uma temperatura \(T\) está no gráfico (máximo em torno de 500 nm). Outro corpo negro irradia potência por unidade de área 16 vezes maior. O máximo de sua radiância espectral ocorre aproximadamente em:</p>`,
opcoes:[R`250 nm`,R`500 nm`,R`1000 nm`,R`2000 nm`,R`8000 nm`],
dica:R`Stefan–Boltzmann (\(\propto T^4\)) e Wien (\(\lambda_{\max}\propto1/T\)).`,
solucao:R`<p>\(T'^4=16T^4\Rightarrow T'=2T\Rightarrow\lambda'_{\max}=\lambda_{\max}/2\approx250\) nm.</p>`});

P({id:'fm-2021c-8', ano:2021, prova:'EUF 2021 (3ª aplicação) · FM8A', topicos:['ondapart'],
enunciado:R`<p>Num material, a difração de Bragg de primeira ordem para fótons de energia \(E\) ocorre num ângulo \(\theta_F\) com certos planos. Para os mesmos planos, a difração de primeira ordem de partículas (não relativísticas) de massa \(m\) e mesma energia \(E\) ocorre em \(\theta_P\). A razão \(\sin\theta_F/\sin\theta_P\) é:</p>`,
opcoes:[R`\(\sqrt{\dfrac{2mc^2}{E}}\)`,R`\(\sqrt{\dfrac{mc^2}{E}}\)`,R`\(\sqrt{\dfrac{E}{2mc^2}}\)`,R`\(\sqrt{\dfrac{E}{3mc^2}}\)`,R`\(\sqrt{\dfrac{E}{mc^2}}\)`],
dica:R`Bragg: \(2d\sin\theta=\lambda\), então \(\sin\theta\propto\lambda\).`,
solucao:R`<p>\(\lambda_F=\dfrac{hc}{E}\), \(\lambda_P=\dfrac{h}{\sqrt{2mE}}\). \(\dfrac{\sin\theta_F}{\sin\theta_P}=\dfrac{\lambda_F}{\lambda_P}=\dfrac{c\sqrt{2mE}}{E}=\sqrt{\dfrac{2mc^2}{E}}\).</p>`});

// ============ 2022 — online ============
P({id:'fm-2022-1', ano:2022, prova:'EUF 2022 (online) · FM1A', topicos:['rel'],
enunciado:R`<p>Um dispositivo na estação mede o comprimento de trens em movimento. Um trem passa a \(0{,}600c\) e o dispositivo indica 100 m. Para um observador no trem, qual o comprimento do trem?</p>`,
opcoes:[R`125 m`,R`167 m`,R`60 m`,R`80 m`,R`100 m`],
dica:R`O comprimento próprio é o medido no referencial do trem; a estação mede o contraído.`,
solucao:R`<p>\(L=L_0/\gamma\Rightarrow L_0=\gamma L=1{,}25\times100=125\) m.</p>`});

P({id:'fm-2022-2', ano:2022, prova:'EUF 2022 (online) · FM2A', topicos:['rel'],
enunciado:R`<p>Uma espaçonave de massa \(1{,}0\times10^6\) kg move-se a \(v_i=1{,}0\times10^5\) m/s e ejeta (para trás) uma massa de \(2{,}0\times10^3\) kg com velocidade \(0{,}60c\) em relação à espaçonave. Depois, a nave se move com \(v_f>v_i\), ainda \(\ll c\). Determine \(v_f\).</p>`,
opcoes:[R`\(5{,}5\times10^5\) m/s`,R`\(9{,}0\times10^5\) m/s`,R`\(4{,}6\times10^5\) m/s`,R`\(5{,}8\times10^5\) m/s`,R`\(7{,}0\times10^5\) m/s`],
dica:R`Só a massa ejetada é relativística: seu momento é \(\gamma mu\) com \(\gamma(0{,}6)=1{,}25\). Como \(v_i\ll c\), a composição de velocidades é desprezível.`,
solucao:R`<p>\(Mv_i=(M-m)v_f-\gamma m u\): \(10^{11}=(0{,}998\times10^6)v_f-1{,}25\cdot2\times10^3\cdot1{,}8\times10^8\).</p><p>\(v_f=\dfrac{10^{11}+4{,}5\times10^{11}}{0{,}998\times10^6}\approx5{,}5\times10^5\) m/s.</p>`});

P({id:'fm-2022-3', ano:2022, prova:'EUF 2022 (online) · FM3A', topicos:['rel'],
enunciado:R`<p>Uma onda EM de frequência \(4{,}0\times10^{14}\) Hz é emitida por uma estação em direção a uma espaçonave que se afasta a \(0{,}60c\). A onda é refletida de volta à estação. Com que frequência a estação detecta a onda refletida?</p>`,
opcoes:[R`\(1{,}0\times10^{14}\) Hz`,R`\(2{,}5\times10^{14}\) Hz`,R`\(1{,}7\times10^{14}\) Hz`,R`\(2{,}9\times10^{14}\) Hz`,R`\(5{,}0\times10^{14}\) Hz`],
dica:R`Doppler relativístico duas vezes: \(f'=f\sqrt{\dfrac{1-\beta}{1+\beta}}\) na ida e de novo na volta.`,
solucao:R`<p>\(f''=f\,\dfrac{1-\beta}{1+\beta}=4\times10^{14}\cdot\dfrac{0{,}4}{1{,}6}=1{,}0\times10^{14}\) Hz.</p>`});

P({id:'fm-2022-4', ano:2022, prova:'EUF 2022 (online) · FM4A', topicos:['schr','atom'],
enunciado:R`<p>Num poço infinito bidimensional de lados \(L_x=L_y=L\) há 5 elétrons não interagentes. Em unidades de \(h^2/8mL^2\), qual a energia do <b>primeiro estado excitado</b> do sistema?</p>`,
opcoes:[R`22`,R`5`,R`9`,R`13`,R`12`],
dica:R`\(E=n_x^2+n_y^2\) nessas unidades. Preencha com Pauli (2 elétrons por orbital) e promova o elétron mais energético.`,
solucao:R`<p>Níveis: (1,1)=2; (1,2),(2,1)=5; (2,2)=8; (1,3),(3,1)=10.</p><p>Fundamental: \(2\cdot2+3\cdot5=19\). Primeiro excitado: um elétron do nível 5 vai para 8: \(4+2\cdot5+8=22\). (Alternativa de passar um elétron de 2 para 8 dá mais: 25.)</p>`});

P({id:'fm-2022-5', ano:2022, prova:'EUF 2022 (online) · FM5A', topicos:['corpo'],
enunciado:R`<p>A radiação cósmica de fundo tem temperatura 2,73 K e radiância espectral de Planck. Em função do comprimento de onda, o máximo ocorre em \(\lambda_m\). Qual a frequência dos fótons de comprimento de onda \(\lambda_m\)?</p>`,
opcoes:[R`283 GHz`,R`0,16 GHz`,R`0,28 GHz`,R`160 GHz`,R`28,3 THz`],
dica:R`Wien: \(\lambda_mT=2{,}9\times10^{-3}\) m·K. Atenção: \(c/\lambda_m\) não coincide com o pico da distribuição em frequência (≈160 GHz).`,
solucao:R`<p>\(\lambda_m=\dfrac{2{,}898\times10^{-3}}{2{,}73}\approx1{,}06\) mm; \(f=c/\lambda_m\approx2{,}83\times10^{11}\) Hz = 283 GHz.</p>`});

P({id:'fm-2022-6', ano:2022, prova:'EUF 2022 (online) · FM6A', topicos:['bohr'],
enunciado:R`<p>O múon tem a carga do elétron e massa 207 vezes maior. No átomo muônico (próton + múon), qual a energia do nível \(n=1\) (\(E_m\)) em relação à do hidrogênio (\(E_H\))? Use Bohr e \(m_p=1836m_e\).</p>`,
opcoes:[R`\(E_m=186\,E_H\)`,R`\(E_m=207\,E_H\)`,R`\(E_m=E_H\)`,R`\(E_m=E_H/207\)`,R`\(E_m=E_H/186\)`],
dica:R`\(E_n\propto\mu\), a massa reduzida.`,
solucao:R`<p>\(\mu_m=\dfrac{207\cdot1836}{207+1836}m_e\approx186m_e\), \(\mu_H\approx m_e\). Logo \(E_m\approx186E_H\).</p>`});

P({id:'fm-2022-7', ano:2022, prova:'EUF 2022 (online) · FM7A', topicos:['ondapart'],
enunciado:R`<p>Num experimento de difração, elétrons de 182 eV incidem sobre a superfície de um cristal e o primeiro pico aparece em \(\theta=30^\circ\). Qual deve ser a energia dos elétrons para que esse pico ocorra em \(\theta=60^\circ\)? (Elétrons não relativísticos.)</p>`,
opcoes:[R`60,7 eV`,R`546 eV`,R`315 eV`,R`105 eV`,R`91,0 eV`],
dica:R`Difração na superfície (Davisson–Germer): \(d\sin\theta=\lambda\), e \(\lambda\propto E^{-1/2}\).`,
solucao:R`<p>\(\dfrac{\lambda'}{\lambda}=\dfrac{\sin60^\circ}{\sin30^\circ}=\sqrt3\Rightarrow E'=\dfrac{E}{3}=60{,}7\) eV.</p>`});

P({id:'fm-2022-8', ano:2022, prova:'EUF 2022 (online) · FM8A', topicos:['rel'],
enunciado:R`<p>Um equipamento no laboratório (inercial) detecta dois relâmpagos: o primeiro atinge o ponto A (\(x_A\)) no instante \(t_A\) e o segundo atinge B (\(x_B\)) num instante posterior \(t_B\). Um equipamento a bordo de um veículo que se move com velocidade constante ao longo de \(x\) detecta os relâmpagos <b>simultaneamente</b>. Qual a velocidade do veículo?</p>`,
opcoes:[R`\(v=c^2\dfrac{t_B-t_A}{x_B-x_A}\)`,R`\(v=\dfrac{x_B-x_A}{t_B-t_A}\)`,R`\(v=\dfrac1c\dfrac{(x_B-x_A)^2}{(t_B-t_A)^2}\)`,R`\(v=\dfrac{x_B-x_A}{t_B-t_A}\left[1-\dfrac{(x_B-x_A)^2}{c^2(t_B-t_A)^2}\right]\)`,R`\(v=\dfrac{x_B-x_A}{t_B-t_A}\left[1-\dfrac{(x_B-x_A)^2}{c^2(t_B-t_A)^2}\right]^{1/2}\)`],
dica:R`Lorentz: \(\Delta t'=\gamma(\Delta t-v\Delta x/c^2)=0\).`,
solucao:R`<p>\(\Delta t'=0\Rightarrow v=\dfrac{c^2\Delta t}{\Delta x}\). Só é possível se \(c\Delta t\lt\Delta x\) (intervalo tipo espaço), garantindo \(v\lt c\).</p>`});

// ============ 2022 — 2ª aplicação ============
P({id:'fm-2022b-1', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q41 [fm1a]', topicos:['ondapart'],
enunciado:R`<p>Um elétron é acelerado desde o repouso entre as placas de um capacitor com diferença de potencial de 16 V. Qual o comprimento de onda final do elétron? (Limite não relativístico.)</p>`,
opcoes:[R`\(3{,}1\times10^{-10}\) m`,R`\(3{,}1\times10^{-6}\) m`,R`\(6{,}2\times10^{-13}\) m`,R`\(1{,}6\times10^{-9}\) m`,R`\(1{,}2\times10^{-11}\) m`],
dica:R`\(\lambda=h/\sqrt{2meV}\approx1{,}226\ \text{nm}/\sqrt{V[\text{volts}]}\).`,
solucao:R`<p>\(\lambda=\dfrac{1{,}226\ \text{nm}}{\sqrt{16}}\approx0{,}31\) nm \(=3{,}1\times10^{-10}\) m.</p>`});

P({id:'fm-2022b-2', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q43 [fm2a]', topicos:['bohr'],
enunciado:R`<p>Um íon He\(^+\) (\(Z=2\)) está num estado de energia elevada, \(n\gg1\). Qual é, aproximadamente, a energia do fóton emitido na transição \(n\to n-1\)?</p>`,
opcoes:[R`\(\dfrac{1{,}09\times10^2}{n^3}\) eV`,R`\(\dfrac{5{,}44\times10^1}{n^3}\) eV`,R`\(\dfrac{1{,}36\times10^1}{n^3}\) eV`,R`\(\dfrac{7{,}40\times10^2}{n^3}\) eV`,R`\(\dfrac{3{,}70\times10^2}{n^3}\) eV`],
dica:R`\(\dfrac1{(n-1)^2}-\dfrac1{n^2}\approx\dfrac2{n^3}\) para \(n\gg1\).`,
solucao:R`<p>\(E=13{,}6Z^2\left[\dfrac1{(n-1)^2}-\dfrac1{n^2}\right]\approx13{,}6\cdot4\cdot\dfrac2{n^3}=\dfrac{108{,}8}{n^3}\) eV.</p>`});

P({id:'fm-2022b-3', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q45 [fm3a]', topicos:['rel'],
enunciado:R`<p>Uma espaçonave de comprimento próprio \(L\) se aproxima da Terra com \(v=0{,}60c\). Uma lâmpada é acesa no centro da nave. Para um observador em repouso na Terra, a luz atinge a frente e o fundo da nave:</p>`,
opcoes:[R`com diferença de tempo \(\Delta t=0{,}75L/c\), chegando primeiro ao fundo`,R`com \(\Delta t=0{,}75L/c\), chegando primeiro à frente`,R`com \(\Delta t=1{,}5L/c\), chegando primeiro ao fundo`,R`com \(\Delta t=1{,}5L/c\), chegando primeiro à frente`,R`simultaneamente`],
dica:R`No referencial da Terra a nave mede \(L/\gamma=0{,}8L\). O fundo vem ao encontro da luz; a frente foge dela.`,
solucao:R`<p>Cada metade mede \(0{,}4L\). Fundo: \(t_f=\dfrac{0{,}4L}{c+v}=0{,}25L/c\). Frente: \(t_F=\dfrac{0{,}4L}{c-v}=L/c\). \(\Delta t=0{,}75L/c\), o fundo primeiro (relatividade da simultaneidade).</p>`});

P({id:'fm-2022b-4', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q47 [fm4a]', topicos:['foton'],
enunciado:R`<p>Uma superfície de lítio (função trabalho 3,0 eV) é irradiada com luz monocromática de 100 nm. Qual a energia cinética máxima dos fotoelétrons?</p>`,
opcoes:[R`9,4 eV`,R`12 eV`,R`zero`,R`4,8 eV`,R`0,48 eV`],
dica:R`\(K_{\max}=hc/\lambda-\phi\).`,
solucao:R`<p>\(hc/\lambda=1240/100=12{,}4\) eV; \(K_{\max}=12{,}4-3{,}0=9{,}4\) eV.</p>`});

P({id:'fm-2022b-5', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q49 [fm5a]', topicos:['rel'],
enunciado:R`<p>Uma linha do espectro de uma estrela sofre desvio para o vermelho de 500 nm para 1500 nm. Se apenas o efeito Doppler for responsável, qual a velocidade da estrela em relação à Terra?</p>`,
opcoes:[R`\(0{,}80c\)`,R`\(0{,}60c\)`,R`\(0{,}125c\)`,R`\(0{,}33c\)`,R`\(c\)`],
dica:R`\(\dfrac{\lambda'}{\lambda}=\sqrt{\dfrac{1+\beta}{1-\beta}}\) para afastamento.`,
solucao:R`<p>\(9=\dfrac{1+\beta}{1-\beta}\Rightarrow\beta=0{,}8\).</p>`});

P({id:'fm-2022b-6', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q51 [fm6a]', topicos:['rel'],
enunciado:R`<p>Uma espaçonave move-se ao longo do eixo \(x\) da Terra com \(0{,}60c\) (eixos \(x',y'\) da nave paralelos a \(x,y\)). Um astronauta lança uma bola a 15 m/s na direção \(y'\), medida na nave. Desprezando a gravidade, o módulo da componente \(y\) da velocidade da bola em relação à Terra é:</p>`,
opcoes:[R`12 m/s`,R`9,0 m/s`,R`15 m/s`,R`\(0{,}80c\)`,R`\(0{,}60c\)`],
dica:R`\(u_y=\dfrac{u'_y}{\gamma(1+vu'_x/c^2)}\) com \(u'_x=0\).`,
solucao:R`<p>\(u_y=u'_y/\gamma=15/1{,}25=12\) m/s (dilatação do tempo; o deslocamento transversal não se contrai).</p>`});

P({id:'fm-2022b-7', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q53 [fm7a]', topicos:['rel'],
enunciado:R`<p>Num referencial inercial, dois eventos são separados por \(\Delta t\) e \(\Delta x\). Considere:</p><p>I. Se \(\Delta x/\Delta t>c\), existe outro referencial inercial em que os eventos são simultâneos.<br>II. Se \(\Delta x/\Delta t\lt c\), existe outro referencial em que os eventos ocorrem na mesma posição.<br>III. Se \(\Delta x/\Delta t\lt c\), é possível que haja relação causal entre os eventos.</p><p>Estão corretas:</p>`,
opcoes:[R`I, II e III`,R`II e III`,R`II`,R`III`,R`I e II`],
dica:R`Classifique o intervalo: tipo espaço (\(\Delta x>c\Delta t\)) ou tipo tempo (\(\Delta x\lt c\Delta t\)).`,
solucao:R`<p>I: tipo espaço, basta \(v=c^2\Delta t/\Delta x\lt c\) para \(\Delta t'=0\). II: tipo tempo, \(v=\Delta x/\Delta t\lt c\) dá \(\Delta x'=0\). III: tipo tempo permite um sinal com velocidade \(\le c\) ligar os eventos. Todas corretas.</p>`});

P({id:'fm-2022b-8', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q55 [fm8a]', topicos:['foton'],
enunciado:R`<p>Num tubo de raios X, elétrons são acelerados por 62,0 kV. Ao colidir com o ânodo, um elétron vai ao repouso após emitir dois fótons de <i>bremsstrahlung</i>, com \(\lambda_2=4\lambda_1\). Então \(\lambda_1\) é:</p>`,
opcoes:[R`0,0250 nm`,R`0,0500 nm`,R`0,0124 nm`,R`0,0248 nm`,R`0,248 nm`],
dica:R`\(\dfrac{hc}{\lambda_1}+\dfrac{hc}{4\lambda_1}=62{,}0\) keV.`,
solucao:R`<p>\(\dfrac{5}{4}\dfrac{hc}{\lambda_1}=62{,}0\) keV \(\Rightarrow\lambda_1=\dfrac{1{,}25\cdot1{,}24}{62{,}0}\) nm \(=0{,}0250\) nm.</p>`});

// ============ 2023 — 1ª aplicação ============
P({id:'fm-2023-1', ano:2023, prova:'EUF 2023 · Q41 [fm1a]', topicos:['rel'],
enunciado:R`<p>No referencial \(S\), a partícula A está em repouso e B se move com velocidade \((3c/5,0,0)\). No referencial \(S'\), que se move com \((u,0,0)\) em relação a \(S\), as partículas têm velocidades de mesmo módulo e direção, mas sentidos opostos. Então:</p>`,
opcoes:[R`\(u=c/3\)`,R`\(u=-c/3\)`,R`\(u=c\)`,R`\(u=3c/10\)`,R`\(u=-3c/10\)`],
dica:R`Em \(S'\), A tem velocidade \(-u\). Imponha que a de B, pela composição relativística, seja \(+u\).`,
solucao:R`<p>\(\dfrac{0{,}6c-u}{1-0{,}6u/c}=u\Rightarrow0{,}6-2\beta+0{,}6\beta^2=0\Rightarrow3\beta^2-10\beta+3=0\Rightarrow\beta=\tfrac13\) (a outra raiz, 3, é não física). \(S'\) é o referencial do "centro de velocidades".</p>`});

P({id:'fm-2023-2', ano:2023, prova:'EUF 2023 · Q43 [fm2a]', topicos:['foton'],
enunciado:R`<p>Um fóton de 50 keV colide com um elétron estacionário e é espalhado no sentido oposto ao do seu movimento inicial. Adotando \(h/mc=2{,}4\) pm, o comprimento de onda do fóton espalhado é:</p>`,
opcoes:[R`30 pm`,R`27 pm`,R`24 pm`,R`21 pm`,R`18 pm`],
dica:R`Compton: \(\Delta\lambda=\dfrac{h}{mc}(1-\cos\theta)\), com \(\theta=180^\circ\).`,
solucao:R`<p>\(\lambda=\dfrac{1240\ \text{eV·nm}}{5\times10^4\ \text{eV}}=24{,}8\) pm; \(\lambda'=24{,}8+2\cdot2{,}4=29{,}6\approx30\) pm.</p>`});

P({id:'fm-2023-3', ano:2023, prova:'EUF 2023 · Q45 [fm3a]', topicos:['corpo'],
enunciado:R`<p>Uma estrela tem raio \(R=2R_S\) (\(R_S\): raio do Sol). Se ela emite a mesma potência que o Sol, qual sua temperatura, em função da temperatura do Sol \(T_S\)?</p>`,
opcoes:[R`\(T=T_S/\sqrt2\)`,R`\(T=\sqrt2\,T_S\)`,R`\(T=T_S/4\)`,R`\(T=4T_S\)`,R`\(T=T_S\)`],
dica:R`\(P=4\pi R^2\sigma T^4\).`,
solucao:R`<p>\(R^2T^4=R_S^2T_S^4\Rightarrow4T^4=T_S^4\Rightarrow T=T_S/\sqrt2\).</p>`});

P({id:'fm-2023-4', ano:2023, prova:'EUF 2023 · Q47 [fm4a]', topicos:['ondapart'],
enunciado:R`<p>O tempo de vida de um estado excitado de um átomo é \(3{,}29\times10^{-3}\) s. Qual a incerteza mínima na energia desse estado?</p>`,
opcoes:[R`\(1{,}00\times10^{-13}\) eV`,R`\(4{,}00\times10^{-14}\) eV`,R`\(6{,}28\times10^{-12}\) eV`,R`\(3{,}14\times10^{-15}\) eV`,R`\(5{,}00\times10^{-11}\) eV`],
dica:R`\(\Delta E\,\Delta t\ge\hbar/2\), com \(\hbar=6{,}58\times10^{-16}\) eV·s.`,
solucao:R`<p>\(\Delta E=\dfrac{\hbar}{2\tau}=\dfrac{6{,}58\times10^{-16}}{2\cdot3{,}29\times10^{-3}}=1{,}00\times10^{-13}\) eV.</p>`});

P({id:'fm-2023-5', ano:2023, prova:'EUF 2023 · Q49 [fm5a]', topicos:['rel'],
enunciado:R`<p>Uma nave se move a \(3c/5\) ao longo do eixo \(x\) da Terra. Quando passa por \(x=0\), um cronômetro na nave marca zero. Qual a leitura do cronômetro quando a nave estiver em \(x=18000\) km?</p>`,
opcoes:[R`80 ms`,R`45 ms`,R`75 ms`,R`100 ms`,R`60 ms`],
dica:R`O cronômetro da nave mede tempo próprio: \(\Delta\tau=\Delta t/\gamma\).`,
solucao:R`<p>\(\Delta t=\dfrac{1{,}8\times10^7}{1{,}8\times10^8}=0{,}1\) s; \(\Delta\tau=0{,}1\times0{,}8=80\) ms.</p>`});

P({id:'fm-2023-6', ano:2023, prova:'EUF 2023 · Q51 [fm6a]', topicos:['rel'],
enunciado:R`<p>Um corpo de massa \(M\) em repouso explode em duas partes idênticas de 3,0 kg cada, que se movem com velocidade de módulo \(4c/5\). Qual o valor de \(M\)?</p>`,
opcoes:[R`10 kg`,R`20 kg`,R`16 kg`,R`13 kg`,R`3,6 kg`],
dica:R`Conservação de energia: \(Mc^2=2\gamma mc^2\).`,
solucao:R`<p>\(\gamma=5/3\Rightarrow M=2\cdot\tfrac53\cdot3=10\) kg. A massa não se conserva; a energia sim.</p>`});

P({id:'fm-2023-7', ano:2023, prova:'EUF 2023 · Q53 [fm7a]', topicos:['schr','atom'],
enunciado:R`<p>Num poço infinito com um elétron, as autoenergias são \(E_1\lt E_2\lt\dots\) com autofunções \(\psi_n(x)\). Para 2 elétrons não interagentes no mesmo poço (coordenadas \(x_1,x_2\)):</p><p>I. A parte espacial no estado fundamental é \(\psi_1(x_1)\psi_1(x_2)\).<br>II. A parte espacial no 1º estado excitado <i>não</i> pode ser \(\psi_1(x_1)\psi_2(x_2)\).<br>III. A parte espacial no 1º estado excitado pode ser \(\tfrac1{\sqrt2}[\psi_1(x_1)\psi_2(x_2)+\psi_2(x_1)\psi_1(x_2)]\).</p><p>Estão corretas:</p>`,
opcoes:[R`I, II e III`,R`I e II`,R`I e III`,R`II`,R`III`],
dica:R`A função total (espaço × spin) de férmions é antissimétrica. A parte espacial precisa ser simétrica ou antissimétrica.`,
solucao:R`<p>I: espacial simétrica com spin singleto — correto. II: \(\psi_1\psi_2\) não tem simetria definida sob troca, logo não serve — correto. III: espacial simétrica combinada com singleto — correto (a antissimétrica com tripleto também é possível, com a mesma energia).</p>`});

P({id:'fm-2023-8', ano:2023, prova:'EUF 2023 · Q55 [fm8a]', topicos:['atom'],
enunciado:R`<p>Sobre experimentos de Stern–Gerlach com campos usuais de laboratório:</p><p>I. Um feixe de hidrogênio no estado fundamental se divide em 2.<br>II. Um feixe de hélio no estado fundamental se divide em 4.<br>III. Um feixe de átomos com \(\langle J^2\rangle=15\hbar^2/4\) (momento angular total dos elétrons) se divide em 4.</p><p>Estão corretas:</p>`,
opcoes:[R`I e III`,R`I e II`,R`II`,R`I`,R`I, II e III`],
dica:R`O número de feixes é \(2j+1\).`,
solucao:R`<p>I: H(1s) tem \(l=0\), \(s=1/2\Rightarrow j=1/2\): 2 feixes. II: He(1s\(^2\)) tem \(J=0\): não se divide. III: \(j(j+1)=15/4\Rightarrow j=3/2\): 4 feixes.</p>`});

// ============ 2023 — 2ª aplicação ============
P({id:'fm-2023b-1', ano:2023, prova:'EUF 2º/2023 · Q41 [fm1a]', topicos:['foton','atom'],
enunciado:R`<p>Na espectroscopia Raman, a energia do fônon é a diferença entre as energias dos fótons incidente e espalhado, medida como \(\Delta(1/\lambda)\) em cm\(^{-1}\). Se \(\Delta(1/\lambda)=300\) cm\(^{-1}\), a energia do fônon é aproximadamente:</p>`,
opcoes:[R`37 meV`,R`37 eV`,R`4,1 eV`,R`4,1 meV`,R`240 meV`],
dica:R`\(E=hc\,\Delta(1/\lambda)\), com \(hc=1{,}24\times10^{-4}\) eV·cm.`,
solucao:R`<p>\(E=1{,}24\times10^{-4}\ \text{eV·cm}\times300\ \text{cm}^{-1}=0{,}037\) eV = 37 meV. (Regra prática: 1 meV ≈ 8,07 cm\(^{-1}\).)</p>`});

P({id:'fm-2023b-2', ano:2023, prova:'EUF 2º/2023 · Q43 [fm2a]', topicos:['ondapart'],
enunciado:R`<p>Num reator nuclear há nêutrons (massa \(m_N\)) e dêuterons (massa \(m_D\)) em equilíbrio térmico. A razão entre os comprimentos de onda de de Broglie dos nêutrons e dos dêuterons térmicos é:</p>`,
opcoes:[R`\(\sqrt{m_D/m_N}\)`,R`\(\sqrt{m_N/m_D}\)`,R`\(m_D/m_N\)`,R`\(m_N/m_D\)`,R`\((m_D-m_N)/m_D\)`],
dica:R`Mesma temperatura ⇒ mesma energia cinética média; \(p=\sqrt{2mK}\).`,
solucao:R`<p>\(\lambda=\dfrac{h}{\sqrt{2mK}}\propto m^{-1/2}\Rightarrow\dfrac{\lambda_N}{\lambda_D}=\sqrt{\dfrac{m_D}{m_N}}\).</p>`});

P({id:'fm-2023b-3', ano:2023, prova:'EUF 2º/2023 · Q45 [fm3a]', topicos:['bohr','atom'],
enunciado:R`<p>Uma molécula diatômica tem átomos de massas \(3M\) e \(4M\) separados por \(d\), girando em torno de um eixo pelo centro de massa, perpendicular à linha que os une. Se o momento angular for quantizado como no modelo de Bohr, as velocidades angulares serão (\(n=1,2,3,\dots\)):</p>`,
opcoes:[R`\(\dfrac{7h}{24\pi Md^2}n\)`,R`\(\dfrac{h}{\pi Md^2}n\)`,R`\(\dfrac{7h}{12\pi Md^2}n\)`,R`\(\dfrac{6h}{7\pi Md^2}n\)`,R`\(\dfrac{7h}{6\pi Md^2}n\)`],
dica:R`\(I=\mu d^2\) e \(I\omega=n\hbar\).`,
solucao:R`<p>\(\mu=\dfrac{12M}{7}\), \(I=\dfrac{12}{7}Md^2\). \(\omega=\dfrac{n\hbar}{I}=\dfrac{nh}{2\pi}\cdot\dfrac{7}{12Md^2}=\dfrac{7h}{24\pi Md^2}n\).</p>`});

P({id:'fm-2023b-4', ano:2023, prova:'EUF 2º/2023 · Q47 [fm4a]', topicos:['foton'],
enunciado:R`<p>Numa variante do experimento de Millikan, o campo \(\vec E\) é horizontal. Gotículas de carga \(q\) sujeitas a arrasto \(\vec F_a=-b\vec v\) caem com velocidade constante \(v_T\) numa trajetória retilínea que forma ângulo \(\theta\) com a <b>vertical</b>. A carga pode ser obtida de:</p>`,
opcoes:[R`\(q=\dfrac{bv_T}{E}\sin\theta\)`,R`\(q=\dfrac{bv_T}{E}\cos\theta\)`,R`\(q=\dfrac{bv_T}{E}\tan\theta\)`,R`\(q=\dfrac{E}{bv_T}\sin\theta\)`,R`\(q=\dfrac{m_0g}{bv_T}\cos\theta\)`],
dica:R`Velocidade constante ⇒ forças equilibradas. Olhe só a componente horizontal.`,
solucao:R`<p>Horizontal: \(qE=b\,v_T\sin\theta\Rightarrow q=\dfrac{bv_T}{E}\sin\theta\). (Vertical: \(mg=bv_T\cos\theta\).)</p>`});

P({id:'fm-2023b-5', ano:2023, prova:'EUF 2º/2023 · Q49 [fm5a]', topicos:['rel'],
enunciado:R`<p>Aline está em repouso quando, às 08h00 do seu relógio, Beto passa por ela a \(0{,}80c\); o relógio de Beto também marca 08h00. Às 09h00 no relógio de Beto, ele chega ao destino. Segundo Aline, o comprimento do percurso foi:</p>`,
opcoes:[R`\(1{,}4\times10^9\) km`,R`\(8{,}5\times10^8\) km`,R`\(1{,}0\times10^9\) km`,R`\(9{,}2\times10^8\) km`,R`Não há dados suficientes.`],
dica:R`1 h é o tempo próprio de Beto; para Aline passa \(\gamma\cdot1\) h.`,
solucao:R`<p>\(\Delta t_A=\tfrac53\) h = 6000 s. \(D=0{,}8\cdot3\times10^5\ \text{km/s}\cdot6000\ \text{s}=1{,}44\times10^9\) km.</p>`});

P({id:'fm-2023b-6', ano:2023, prova:'EUF 2º/2023 · Q51 [fm6a]', topicos:['rel'],
enunciado:R`<p>Num choque totalmente inelástico, uma partícula de massa de repouso 1,00 MeV/\(c^2\) e energia cinética 2,00 MeV colide com outra, em repouso, de massa 2,00 MeV/\(c^2\). Qual a massa de repouso do sistema após a colisão?</p>`,
opcoes:[R`4,12 MeV/\(c^2\)`,R`3,00 MeV/\(c^2\)`,R`3,67 MeV/\(c^2\)`,R`4,67 MeV/\(c^2\)`,R`5,00 MeV/\(c^2\)`],
dica:R`Invariante: \(M^2c^4=E_{tot}^2-p_{tot}^2c^2\).`,
solucao:R`<p>\(E_1=3\) MeV, \(p_1c=\sqrt{9-1}=\sqrt8\) MeV. \(E_{tot}=5\) MeV. \(Mc^2=\sqrt{25-8}=\sqrt{17}\approx4{,}12\) MeV.</p>`});

P({id:'fm-2023b-7', ano:2023, prova:'EUF 2º/2023 · Q53 [fm7a]', topicos:['nucl','foton'],
enunciado:R`<p>Uma amostra contém \(1{,}0\times10^{20}\) partículas radioativas de vida média 1,0 ano. Em cada decaimento são emitidos 10 fótons de comprimento de onda 1,0 pm. Qual a taxa de produção de energia eletromagnética 1,0 ano após a preparação?</p>`,
opcoes:[R`2,3 W`,R`4,4 W`,R`0,3 W`,R`0,9 W`,R`6,3 W`],
dica:R`\(N(t)=N_0e^{-t/\tau}\) e atividade \(A=N/\tau\). Energia de cada fóton: \(hc/\lambda=1{,}24\) MeV.`,
solucao:R`<p>\(N=10^{20}e^{-1}=3{,}7\times10^{19}\); \(A=\dfrac{3{,}7\times10^{19}}{3{,}16\times10^7\ \text{s}}\approx1{,}17\times10^{12}\) s\(^{-1}\).</p><p>Por decaimento: \(10\times1{,}24\) MeV \(=1{,}99\times10^{-12}\) J. \(P\approx2{,}3\) W.</p>`});

P({id:'fm-2023b-8', ano:2023, prova:'EUF 2º/2023 · Q55 [fm8a]', topicos:['corpo','rel'], fig:'fig/fm_b23_q55.png',
enunciado:R`<p>A figura é o espectro de um corpo celeste que se afasta da Terra com velocidade relativística. As linhas de absorção correspondem a transições conhecidas cujos comprimentos de onda no laboratório são 400 nm, 500 nm e 650 nm. Qual a temperatura na superfície desse corpo?</p>`,
opcoes:[R`\(8{,}3\times10^3\) K`,R`\(4{,}1\times10^3\) K`,R`\(7{,}2\times10^3\) K`,R`\(3{,}0\times10^3\) K`,R`Não há dados suficientes.`],
dica:R`As linhas aparecem em ≈ 800, 1000 e 1300 nm: o fator Doppler é 2 para <i>todos</i> os comprimentos de onda, inclusive o pico. Depois use Wien.`,
solucao:R`<p>\(\lambda_{obs}/\lambda_{lab}=2\). O pico observado está em ≈ 700 nm, logo no referencial do corpo \(\lambda_{\max}\approx350\) nm. \(T=\dfrac{2{,}9\times10^{-3}}{3{,}5\times10^{-7}}\approx8{,}3\times10^3\) K. (O espectro de corpo negro desviado continua de Planck, com \(T_{obs}=T/2\).)</p>`});

// ============ 2024 — 1ª aplicação ============
P({id:'fm-2024-1', ano:2024, prova:'EUF 2024 · Q41 [fmPT1a]', topicos:['rel'],
enunciado:R`<p>Num referencial inercial, a força resultante sobre uma partícula de massa de repouso \(m\) é \(\vec F=At\,\hat x\) (\(A\) constante). Se o momento inicial é nulo, qual a velocidade da partícula no instante \(t\)?</p>`,
opcoes:[R`\(\dfrac{At^2c}{\sqrt{4m^2c^2+A^2t^4}}\hat x\)`,R`\(\dfrac{At^2c}{\sqrt{2m^2c^2+A^2t^4}}\hat x\)`,R`\(\dfrac{At^2c}{\sqrt{m^2c^2+A^2t^4}}\hat x\)`,R`\(\dfrac{2At^2c}{\sqrt{m^2c^2+4A^2t^4}}\hat x\)`,R`\(\dfrac{At^2c}{\sqrt{4m^2c^2+2A^2t^4}}\hat x\)`],
dica:R`\(d\vec p/dt=\vec F\) vale relativisticamente. Depois \(v=\dfrac{pc^2}{E}=\dfrac{pc}{\sqrt{p^2+m^2c^2}}\).`,
solucao:R`<p>\(p=\dfrac{At^2}{2}\). \(v=\dfrac{pc}{\sqrt{p^2+m^2c^2}}=\dfrac{(At^2/2)c}{\sqrt{A^2t^4/4+m^2c^2}}=\dfrac{At^2c}{\sqrt{4m^2c^2+A^2t^4}}\). Note que \(v\to c\) para \(t\to\infty\).</p>`});

P({id:'fm-2024-2', ano:2024, prova:'EUF 2024 · Q43 [fmPT2a]', topicos:['atom'],
enunciado:R`<p>Uma molécula diatômica é formada por dois átomos idênticos com núcleos de massa \(m\) separados por \(d\). A energia necessária para levar a molécula do estado fundamental ao primeiro estado excitado rotacional é:</p>`,
opcoes:[R`\(\dfrac{2\hbar^2}{md^2}\)`,R`\(\dfrac{\hbar^2}{md^2}\)`,R`\(\dfrac{\hbar^2}{2md^2}\)`,R`\(\dfrac{4\pi^2\hbar^2}{md^2}\)`,R`\(\dfrac{2\pi^2\hbar^2}{md^2}\)`],
dica:R`Rotor rígido: \(E_l=\dfrac{\hbar^2l(l+1)}{2I}\), \(I=\mu d^2\) com \(\mu=m/2\).`,
solucao:R`<p>\(I=\dfrac{md^2}{2}\). \(E_1-E_0=\dfrac{2\hbar^2}{2I}=\dfrac{\hbar^2}{I}=\dfrac{2\hbar^2}{md^2}\).</p>`});

P({id:'fm-2024-3', ano:2024, prova:'EUF 2024 · Q45 [fmPT3a]', topicos:['schr'], fig:'fig/fm_y24_q45.png',
enunciado:R`<p>Uma partícula de massa \(m\) está sujeita ao potencial \(V(x)=V_0\tanh^2(x/d)\) (figura), com \(V_0,d>0\). Para \(V_0\) suficientemente grande, a diferença de energia entre os dois estados ligados de mais baixa energia é aproximadamente:</p>`,
opcoes:[R`\(\dfrac{\hbar}{d}\sqrt{\dfrac{2V_0}{m}}\)`,R`\(\dfrac{\hbar}{d}\sqrt{\dfrac{V_0}{m}}\)`,R`\(\dfrac{\hbar}{d}\sqrt{\dfrac{V_0}{2m}}\)`,R`\(\dfrac{2\hbar}{d}\sqrt{\dfrac{V_0}{m}}\)`,R`\(\dfrac{\hbar}{2d}\sqrt{\dfrac{V_0}{m}}\)`],
dica:R`Poço profundo: os estados baixos sentem só o fundo. Expanda \(V\) em torno de \(x=0\) e compare com \(\tfrac12m\omega^2x^2\).`,
solucao:R`<p>\(\tanh u\approx u\Rightarrow V\approx\dfrac{V_0}{d^2}x^2=\tfrac12m\omega^2x^2\Rightarrow\omega=\sqrt{\dfrac{2V_0}{md^2}}\). \(\Delta E=\hbar\omega=\dfrac{\hbar}{d}\sqrt{\dfrac{2V_0}{m}}\).</p>`});

P({id:'fm-2024-4', ano:2024, prova:'EUF 2024 · Q47 [fmPT4a]', topicos:['corpo'],
enunciado:R`<p>Um planeta descreve órbita circular de raio \(R\) em torno de uma estrela de potência irradiada \(P\). Tratando o planeta como corpo negro esférico em equilíbrio térmico (\(\sigma\): constante de Stefan–Boltzmann), sua temperatura é:</p>`,
opcoes:[R`\(\left(\dfrac{P}{16\pi\sigma R^2}\right)^{1/4}\)`,R`\(\dfrac{4P}{\pi k_BR^2}\)`,R`\(\dfrac{P}{4\pi k_BR^2}\)`,R`\(\dfrac{P}{\pi k_BR^2}\)`,R`\(\left(\dfrac{P}{\pi\sigma R^2}\right)^{1/4}\)`],
dica:R`Absorve pela seção \(\pi r^2\); emite por toda a superfície \(4\pi r^2\).`,
solucao:R`<p>\(\dfrac{P}{4\pi R^2}\pi r^2=4\pi r^2\sigma T^4\Rightarrow T^4=\dfrac{P}{16\pi\sigma R^2}\). O raio do planeta se cancela.</p>`});

P({id:'fm-2024-5', ano:2024, prova:'EUF 2024 · Q49 [fmPT5a]', topicos:['foton'],
enunciado:R`<p>Num experimento de efeito fotoelétrico, com luz verde (500 nm) os elétrons são freados totalmente por um potencial de 0,48 V. Com luz violeta (400 nm), o potencial de freamento necessário é:</p>`,
opcoes:[R`1,1 V`,R`2,0 V`,R`3,1 V`,R`0,48 V`,R`0,62 V`],
dica:R`\(eV_0=hc/\lambda-\phi\); a diferença entre os dois casos elimina \(\phi\).`,
solucao:R`<p>\(e\Delta V=\dfrac{1240}{400}-\dfrac{1240}{500}=3{,}10-2{,}48=0{,}62\) eV. \(V_2=0{,}48+0{,}62=1{,}10\) V.</p>`});

P({id:'fm-2024-6', ano:2024, prova:'EUF 2024 · Q51 [fmPT6a]', topicos:['ondapart'],
enunciado:R`<p>Comparando microscópios eletrônico e ótico que usam o mesmo comprimento de onda \(\lambda\), a razão entre as energias dos elétrons (não relativísticos) e dos fótons é:</p>`,
opcoes:[R`\(\left(\dfrac{h}{2m_ec}\right)\dfrac1\lambda\)`,R`\(\left(\dfrac{h}{m_ec}\right)\dfrac1\lambda\)`,R`\(\left(\dfrac{m_e}{hc}\right)\lambda\)`,R`\(\left(\dfrac{hc}{m_e}\right)\dfrac1\lambda\)`,R`\(\left(\dfrac{2m_eh}{c}\right)\lambda\)`],
dica:R`\(E_e=\dfrac{h^2}{2m\lambda^2}\), \(E_\gamma=\dfrac{hc}{\lambda}\).`,
solucao:R`<p>\(\dfrac{E_e}{E_\gamma}=\dfrac{h^2/2m_e\lambda^2}{hc/\lambda}=\dfrac{h}{2m_ec\lambda}\). Como \(h/m_ec\approx2{,}4\) pm, para \(\lambda\sim1\) Å a razão é ≈ 0,01: o elétron é bem menos energético.</p>`});

P({id:'fm-2024-7', ano:2024, prova:'EUF 2024 · Q53 [fmPT7a]', topicos:['rel'],
enunciado:R`<p>Num acelerador, duas partículas idênticas colidem frontalmente; no laboratório movem-se em sentidos opostos com velocidades de módulo \(0{,}50c\). No referencial de uma das partículas, a outra se aproxima com velocidade de módulo:</p>`,
opcoes:[R`\(0{,}80c\)`,R`\(0{,}69c\)`,R`\(0{,}55c\)`,R`\(0{,}38c\)`,R`\(0{,}88c\)`],
dica:R`\(u'=\dfrac{u+v}{1+uv/c^2}\).`,
solucao:R`<p>\(u'=\dfrac{1{,}0c}{1+0{,}25}=0{,}80c\).</p>`});

P({id:'fm-2024-8', ano:2024, prova:'EUF 2024 · Q55 [fmPT8a]', topicos:['foton'],
enunciado:R`<p>A retina pode absorver uma potência luminosa de aproximadamente \(4\times10^{-17}\) W em 500 nm. Isso corresponde a cerca de:</p>`,
opcoes:[R`100 fótons por segundo`,R`\(10^{13}\) fótons por segundo`,R`\(6\times10^{20}\) fótons por segundo`,R`6000 fótons por segundo`,R`200 fótons por segundo`],
dica:R`Energia por fóton em 500 nm: \(1240/500\approx2{,}5\) eV.`,
solucao:R`<p>\(E_\gamma=2{,}48\) eV \(=3{,}97\times10^{-19}\) J. \(N=\dfrac{4\times10^{-17}}{3{,}97\times10^{-19}}\approx100\) fótons/s.</p>`});

// ============ 2024 — 2ª aplicação ============
P({id:'fm-2024b-1', ano:2024, prova:'EUF 2º/2024 · Q41 [fmPT1a]', topicos:['foton'], fig:'fig/fm_b24_q41.png',
enunciado:R`<p>A figura mostra um circuito RC no vácuo ligado a uma bateria de tensão \(V\). Sobre uma das placas metálicas (anodo) incide luz de uma fonte que emite \(N\) fótons por segundo, de frequência fixa. Considere duas frequências \(f_1>f_2\) cujas energias de fóton são, respectivamente, maior e menor que a função trabalho do anodo. Qual gráfico melhor representa a corrente estacionária \(I\) no amperímetro em função de \(V\)?</p>`,
opcoes:[{img:'fig/fm_b24_q41A.png'},{img:'fig/fm_b24_q41B.png'},{img:'fig/fm_b24_q41C.png'},{img:'fig/fm_b24_q41D.png'},{img:'fig/fm_b24_q41E.png'}],
dica:R`Com \(f_2\) abaixo do limiar não há fotoelétrons, qualquer que seja \(V\). E o capacitor bloqueia corrente estacionária, exceto a "ponte" feita pelos próprios fotoelétrons.`,
solucao:R`<p>A única corrente estacionária possível é a dos fotoelétrons atravessando o vácuo entre as placas. Com \(f_2\): nenhum elétron é emitido, \(I=0\) para todo \(V\). Com \(f_1\): para \(V\) muito negativo (potencial de freamento) \(I=0\); aumentando \(V\), mais elétrons chegam à outra placa até que todos são coletados, e a corrente <b>satura</b> num valor fixado por \(N\) (\(I_{sat}=Ne\) vezes a eficiência), sem crescer indefinidamente. É o gráfico em que a curva 1 sobe e satura e a curva 2 é nula.</p>`});

P({id:'fm-2024b-2', ano:2024, prova:'EUF 2º/2024 · Q43 [fmPT2a]', topicos:['rel'],
enunciado:R`<p>Uma bomba de massa de repouso \(m\) explode em três pedaços de massas \(m_1=\tfrac14m\), \(m_2=\tfrac49m\) e \(m_3=\tfrac{11}{36}m\). No referencial da bomba, logo após a explosão, \(\vec v_1=\tfrac45c\,\hat x\) e \(\vec v_2=-\tfrac35c\,\hat x\). Qual a velocidade do terceiro fragmento?</p>`,
opcoes:[R`\(\vec v_3=0\)`,R`\(\vec v_3=-\tfrac{12}{55}c\,\hat x\)`,R`\(\vec v_3=\tfrac{12}{55}c\,\hat x\)`,R`\(\vec v_3=-\tfrac25c\,\hat x\)`,R`\(\vec v_3=\tfrac15c\,\hat x\)`],
dica:R`Conservação do momento <i>relativístico</i> \(\vec p=\gamma m\vec v\). Calcule \(\vec p_1+\vec p_2\).`,
solucao:R`<p>\(\gamma_1=\tfrac53\): \(p_1=\tfrac14\cdot\tfrac53\cdot\tfrac45\,mc=\tfrac13mc\). \(\gamma_2=\tfrac54\): \(p_2=-\tfrac49\cdot\tfrac54\cdot\tfrac35\,mc=-\tfrac13mc\). Logo \(\vec p_3=0\Rightarrow\vec v_3=0\).</p><p><i>Observação:</i> os dados do enunciado não fecham o balanço de energia (\(\gamma_1m_1+\gamma_2m_2+m_3=\tfrac{46}{36}m>m\)); a questão testa só o momento.</p>`});

P({id:'fm-2024b-3', ano:2024, prova:'EUF 2º/2024 · Q45 [fmPT3a]', topicos:['schr','atom'],
enunciado:R`<p>Partículas não interagentes estão confinadas num potencial de oscilador harmônico isotrópico. O sistema é excitado e mede-se a luz emitida, cujo espectro difere de um contínuo apenas por um conjunto discreto de frequências características. Qual figura melhor ilustra o espectro de emissão em função do <b>comprimento de onda</b>?</p>`,
opcoes:[{img:'fig/fm_b24_q45A.png'},{img:'fig/fm_b24_q45B.png'},{img:'fig/fm_b24_q45C.png'},{img:'fig/fm_b24_q45D.png'},{img:'fig/fm_b24_q45E.png'}],
dica:R`Emissão = picos para cima. Níveis igualmente espaçados dão frequências \(k\omega\) (\(k=1,2,\dots\)), ou seja, comprimentos de onda \(\lambda_0/k\): não são igualmente espaçados em \(\lambda\).`,
solucao:R`<p>\(E_n=(n+\tfrac32)\hbar\omega\): as diferenças são múltiplos de \(\hbar\omega\), logo as linhas estão em \(\lambda_0,\lambda_0/2,\lambda_0/3,\dots\), acumulando-se em direção a \(\lambda\to0\) com espaçamento decrescente (por ex. ≈ 900, 450, 300, 225 nm). Sendo emissão, são picos <b>para cima</b>. A figura com picos igualmente espaçados em \(\lambda\) está errada, e as com vales são de absorção.</p>`});

P({id:'fm-2024b-4', ano:2024, prova:'EUF 2º/2024 · Q47 [fmPT4a]', topicos:['corpo'],
enunciado:R`<p>Numa sauna, a temperatura do ambiente é 45 °C. Qual a ordem de grandeza da potência absorvida por irradiação por uma pessoa de área superficial 2,1 m\(^2\)? (Ambiente e pessoa como corpos negros.)</p>`,
opcoes:[R`\(10^3\) W`,R`\(10^2\) W`,R`\(10^1\) W`,R`\(10^0\) W`,R`\(10^{-1}\) W`],
dica:R`Absorvida (não a líquida): \(P=\sigma AT_{amb}^4\).`,
solucao:R`<p>\(P=5{,}67\times10^{-8}\cdot2{,}1\cdot(318)^4\approx5{,}67\times10^{-8}\cdot2{,}1\cdot1{,}02\times10^{10}\approx1{,}2\times10^3\) W.</p>`});

P({id:'fm-2024b-5', ano:2024, prova:'EUF 2º/2024 · Q49 [fmPT5a]', topicos:['rel'],
enunciado:R`<p>Para um observador em \(S\), duas bombas em \(x=-a\) e \(x=+a\) explodem no mesmo instante. Um observador \(S'\) move-se ao longo de \(x\) com velocidade \(v\) no sentido de \(x\) crescente. Sobre as observações de \(S'\):</p><p>I. O intervalo de tempo entre as explosões depende da posição de \(S'\).<br>II. A distância entre as bombas é \(2a/\sqrt{1-v^2/c^2}\).<br>III. A bomba em \(x=+a\) explode antes da bomba em \(x=-a\).</p>`,
opcoes:[R`Apenas III está correta.`,R`Apenas II e III estão corretas.`,R`Apenas I está correta.`,R`Apenas II está correta.`,R`I e II estão corretas.`],
dica:R`\(t'=\gamma(t-vx/c^2)\). As bombas estão em repouso em \(S\): \(2a\) é o comprimento próprio.`,
solucao:R`<p>I: \(\Delta t'=-\gamma v\Delta x/c^2\) não depende de onde está \(S'\) — falsa. II: a distância é contraída, \(2a\sqrt{1-v^2/c^2}\) — falsa. III: maior \(x\) dá menor \(t'\), então \(+a\) explode antes — verdadeira.</p>`});

P({id:'fm-2024b-6', ano:2024, prova:'EUF 2º/2024 · Q51 [fmPT6a]', topicos:['foton'],
enunciado:R`<p>Radiação de comprimento de onda 3 pm incide em elétrons estacionários, e um fóton espalhado é detectado a \(60^\circ\) da direção incidente. Qual foi, aproximadamente, a energia transferida ao elétron? (Use \(h/mc=2\) pm.)</p>`,
opcoes:[R`100 keV`,R`10 keV`,R`50 keV`,R`70 keV`,R`300 keV`],
dica:R`\(\lambda'=\lambda+\dfrac h{mc}(1-\cos\theta)\).`,
solucao:R`<p>\(\lambda'=3+2\cdot\tfrac12=4\) pm. \(E=\dfrac{1240\ \text{keV·pm}}{3}\approx413\) keV, \(E'=310\) keV. Transferido: ≈ 103 keV ≈ 100 keV.</p>`});

P({id:'fm-2024b-7', ano:2024, prova:'EUF 2º/2024 · Q53 [fmPT7a]', topicos:['bohr'],
enunciado:R`<p>Pelo modelo de Bohr, qual a razão entre os raios da primeira órbita do elétron no hidrogênio e no íon He\(^+\), \(r_H/r_{He^+}\)?</p>`,
opcoes:[R`2`,R`1`,R`4`,R`1/4`,R`3`],
dica:R`\(r_n=\dfrac{n^2a_0}{Z}\).`,
solucao:R`<p>\(r\propto1/Z\Rightarrow r_H/r_{He^+}=2/1=2\).</p>`});

P({id:'fm-2024b-8', ano:2024, prova:'EUF 2º/2024 · Q55 [fmPT8a]', topicos:['bohr'],
enunciado:R`<p>Um fóton de 121,6 nm é emitido por um átomo de hidrogênio (\(E_n=-13{,}6\ \text{eV}/n^2\)). Qual o valor de \(n\) do estado do elétron antes da emissão?</p>`,
opcoes:[R`2`,R`3`,R`4`,R`1`,R`5`],
dica:R`\(E_\gamma=1240/121{,}6\approx10{,}2\) eV. Que transição dá isso?`,
solucao:R`<p>\(10{,}2\) eV \(=13{,}6(1-\tfrac14)\): transição \(2\to1\) (Lyman-α). O elétron estava em \(n=2\).</p>`});

// ============ 2025 — 1ª aplicação ============
P({id:'fm-2025-1', ano:2025, prova:'EUF 2025 · Q41 [fmPT1a]', topicos:['rel'],
enunciado:R`<p>Uma bomba de energia de repouso \(E_0\) explode em três partes iguais, cujos momentos têm todos módulo \(p\). Depois de algum tempo os fragmentos perdem energia cinética e param. Qual a energia de repouso total dos fragmentos? (A explosão converte energia de repouso em cinética.)</p>`,
opcoes:[R`\(\sqrt{E_0^2-(3pc)^2}\)`,R`\(\sqrt{E_0^2+9p^2c^2}\)`,R`\(3\sqrt{p^2c^2+E_0^2}\)`,R`\(3(\gamma-1)E_0\), com \(\gamma E_0v=pc^2\)`,R`\(3\gamma E_0\), com \(\gamma E_0v=pc^2\)`],
dica:R`Cada fragmento tem \(E=E_0/3=\sqrt{p^2c^2+m^2c^4}\).`,
solucao:R`<p>\(mc^2=\sqrt{(E_0/3)^2-p^2c^2}\). Total: \(3mc^2=\sqrt{E_0^2-9p^2c^2}\).</p>`});

P({id:'fm-2025-2', ano:2025, prova:'EUF 2025 · Q43 [fmPT2a]', topicos:['nucl'],
enunciado:R`<p>Um elemento radioativo de massa molar \(M_A\) decai apenas por emissão alfa. Uma amostra pura de massa \(m\) emite \(R\) partículas alfa por unidade de tempo. Sendo \(N_A\) a constante de Avogadro, a vida média é:</p>`,
opcoes:[R`\(\tau=\dfrac{mN_A}{RM_A}\)`,R`\(\tau=\dfrac1R\ln\dfrac{mN_A}{M_A}\)`,R`\(\tau=\dfrac1R\exp\dfrac{mN_A}{M_A}\)`,R`\(\tau=\dfrac1R\exp\left(-\dfrac{mN_A}{M_A}\right)\)`,R`Não há elementos suficientes.`],
dica:R`Atividade: \(R=N/\tau\).`,
solucao:R`<p>\(N=\dfrac{m}{M_A}N_A\Rightarrow\tau=\dfrac NR=\dfrac{mN_A}{RM_A}\).</p>`});

P({id:'fm-2025-3', ano:2025, prova:'EUF 2025 · Q45 [fmPT3a]', topicos:['atom','foton'],
enunciado:R`<p>Uma molécula diatômica de duas partículas pontuais idênticas de massa \(m\), separadas por \(d\), está em repouso no estado fundamental. Qual a energia <b>rotacional</b> da molécula após absorver um fóton de frequência \(f\), supondo que o momento angular se conserva?</p>`,
opcoes:[R`\(\dfrac{2\hbar^2}{md^2}\)`,R`\(\dfrac1{2m}\left(\dfrac{hf}{c}\right)^2\)`,R`\(\dfrac{\hbar c}{d}\)`,R`\(hf\)`,R`\(2mc^2\)`],
dica:R`O fóton tem spin 1: leva a molécula de \(l=0\) para \(l=1\).`,
solucao:R`<p>\(I=\mu d^2=\dfrac{md^2}{2}\). \(E_{l=1}=\dfrac{l(l+1)\hbar^2}{2I}=\dfrac{2\hbar^2}{md^2}\). O resto da energia do fóton não vira rotação.</p>`});

P({id:'fm-2025-4', ano:2025, prova:'EUF 2025 · Q47 [fmPT4a]', topicos:['atom'], fig:'fig/fm_y25_q47.png',
enunciado:R`<p>O gráfico mostra a energia \(E\) (relativa à molécula dissociada) de uma molécula em função do número \(N\) de elétrons. Considere:</p><p>I. O estado fundamental tem 49 elétrons.<br>II. O estado fundamental tem 45 elétrons.<br>III. O estado fundamental tem 55 elétrons.<br>IV. O estado fundamental é degenerado, com 45 a 55 elétrons.</p>`,
opcoes:[R`A única afirmação correta é a I.`,R`A única correta é a II.`,R`A única correta é a III.`,R`A única correta é a IV.`,R`Nenhuma é correta.`],
dica:R`O estado fundamental é o de menor energia.`,
solucao:R`<p>O ponto mais baixo do gráfico está em \(N=49\). Os pontos com \(E\lt0\) (de 45 a 55) são apenas configurações ligadas, não degeneradas com o mínimo.</p>`});

P({id:'fm-2025-5', ano:2025, prova:'EUF 2025 · Q49 [fmPT5a]', topicos:['rel'],
enunciado:R`<p>O planeta B está a 20 anos-luz da Terra. Uma espaçonave leva 20 anos, no seu próprio referencial, para ir da Terra a B com velocidade constante. Qual sua velocidade em relação à Terra?</p>`,
opcoes:[R`\(c\sqrt2/2\)`,R`\(c\)`,R`\(c\sqrt2/5\)`,R`\(0{,}6c\)`,R`\(0{,}8c\)`],
dica:R`\(\gamma\beta=\dfrac{D}{c\Delta\tau}\).`,
solucao:R`<p>\(\gamma\beta=1\Rightarrow\beta^2=1-\beta^2\Rightarrow\beta=1/\sqrt2\).</p>`});

P({id:'fm-2025-6', ano:2025, prova:'EUF 2025 · Q51 [fmPT6a]', topicos:['rel'],
enunciado:R`<p>Um satélite se afasta da Terra a \(0{,}60c\). No seu referencial, emite um sinal de rádio a cada 2,0 s em direção à Terra. Qual o período medido no observatório?</p>`,
opcoes:[R`4,0 s`,R`2,0 s`,R`8,0 s`,R`1,0 s`,R`3,0 s`],
dica:R`Doppler longitudinal (dilatação + atraso de propagação): \(T=T_0\sqrt{\dfrac{1+\beta}{1-\beta}}\).`,
solucao:R`<p>\(T=2\sqrt{\dfrac{1{,}6}{0{,}4}}=4{,}0\) s. (Só a dilatação daria 2,5 s; o afastamento acrescenta o atraso de propagação.)</p>`});

P({id:'fm-2025-7', ano:2025, prova:'EUF 2025 · Q53 [fmPT7a]', topicos:['bohr'],
enunciado:R`<p>Pelo modelo de Bohr para o hidrogênio, qual a razão \(v_1/v_2\) entre as velocidades do elétron na primeira e na segunda órbitas?</p>`,
opcoes:[R`2`,R`4`,R`\(\sqrt2\)`,R`1`,R`1/2`],
dica:R`\(mvr=n\hbar\) com \(r\propto n^2\).`,
solucao:R`<p>\(v_n=\dfrac{n\hbar}{mr_n}\propto\dfrac{n}{n^2}=\dfrac1n\Rightarrow v_1/v_2=2\).</p>`});

P({id:'fm-2025-8', ano:2025, prova:'EUF 2025 · Q55 [fmPT8a]', topicos:['foton'],
enunciado:R`<p>Num experimento fotoelétrico, elétrons são ejetados de um metal apenas por radiação com comprimento de onda menor que 300 nm. Iluminando a superfície com fótons de 5,0 eV, qual o potencial de corte?</p>`,
opcoes:[R`0,90 V`,R`6,0 V`,R`8,0 V`,R`10 V`,R`5,0 V`],
dica:R`\(\phi=hc/\lambda_0\).`,
solucao:R`<p>\(\phi=1240/300\approx4{,}1\) eV. \(eV_0=5{,}0-4{,}1\approx0{,}9\) eV.</p>`});

// ============ 2025 — 2ª aplicação ============
P({id:'fm-2025b-1', ano:2025, prova:'EUF 2º/2025 · Q41 [fmPT1a]', topicos:['rel','nucl'],
enunciado:R`<p>Um acelerador produz um feixe colimado de partículas com \(v=c/3\) e vida média \(\tau\), detectadas a uma distância \(L\). O detector é movido para \(2L\). Para que a mesma quantidade de partículas por unidade de tempo atinja o detector, qual deve ser a nova velocidade do feixe?</p>`,
opcoes:[R`\(c/\sqrt3\)`,R`\(c/2\)`,R`Impossível: não há como combinar contração do espaço e dilatação da vida média simultaneamente.`,R`\(c/\sqrt2\)`,R`\(c/\sqrt5\)`],
dica:R`Fração sobrevivente: \(e^{-L/(\gamma v\tau)}\). É preciso dobrar \(\gamma\beta\).`,
solucao:R`<p>Com \(\beta=1/3\): \(\gamma\beta=\dfrac{1/3}{\sqrt{8/9}}=\dfrac{1}{2\sqrt2}\). Novo: \(\gamma\beta=\dfrac1{\sqrt2}\Rightarrow\dfrac{\beta^2}{1-\beta^2}=\dfrac12\Rightarrow\beta=\dfrac1{\sqrt3}\).</p>`});

P({id:'fm-2025b-2', ano:2025, prova:'EUF 2º/2025 · Q43 [fmPT2a]', topicos:['foton','corpo'],
enunciado:R`<p>Considere: I. Interferência da fenda dupla de Young. II. Espalhamento Compton. III. Efeito fotoelétrico. IV. Raios catódicos de J. J. Thomson. V. Espectro do corpo negro. Quais fornecem evidência de que a luz interage com a matéria de maneira quantizada?</p>`,
opcoes:[R`Apenas II, III e V.`,R`Todos exceto IV.`,R`Apenas I e IV.`,R`Apenas I, II e III.`,R`Apenas III, IV e V.`],
dica:R`Young é explicável por ondas clássicas; os raios catódicos são sobre elétrons, não sobre luz.`,
solucao:R`<p>Compton (fóton com momento \(h/\lambda\)), fotoelétrico (\(E=hf\)) e corpo negro (Planck) exigem quantização da troca de energia. A fenda dupla é ondulatória clássica, e Thomson mediu \(e/m\) do elétron.</p>`});

P({id:'fm-2025b-3', ano:2025, prova:'EUF 2º/2025 · Q45 [fmPT3a]', topicos:['bohr'],
enunciado:R`<p>No modelo de Bohr, a órbita \(n=1\) do hidrogênio tem raio \(a_0\approx0{,}53\) Å e velocidade \(v_0\approx2{,}2\times10^6\) m/s. O raio e a velocidade da órbita \(n=3\) são:</p>`,
opcoes:[R`\(9a_0\) e \(v_0/3\)`,R`\(3a_0\) e \(v_0/9\)`,R`\(9a_0\) e \(v_0/9\)`,R`\(3a_0\) e \(v_0/3\)`,R`\(3a_0\) e \(v_0/\sqrt3\)`],
dica:R`\(r_n=n^2a_0\), \(v_n=v_0/n\).`,
solucao:R`<p>\(r_3=9a_0\) e \(v_3=v_0/3\).</p>`});

P({id:'fm-2025b-4', ano:2025, prova:'EUF 2º/2025 · Q47 [fmPT4a]', topicos:['atom'],
enunciado:R`<p>A densidade de estados eletrônicos de um metal é \(g(E)=A\sqrt E\) (\(E\) medida a partir do fundo da banda). Sendo \(E_F\) a energia de Fermi, qual o número total de estados ocupados \(N\) a \(T=0\)? (Desconsidere a degenerescência de spin.)</p>`,
opcoes:[R`\(N=\tfrac23AE_F^{3/2}\)`,R`\(N=\tfrac12A/E_F^{1/2}\)`,R`\(N=AE_F^{1/2}\)`,R`\(N=AE_F\)`,R`\(N=2AE_F\)`],
dica:R`A \(T=0\) todos os estados até \(E_F\) estão ocupados.`,
solucao:R`<p>\(N=\displaystyle\int_0^{E_F}A\sqrt E\,dE=\tfrac23AE_F^{3/2}\).</p>`});

P({id:'fm-2025b-5', ano:2025, prova:'EUF 2º/2025 · Q49 [fmPT5a]', topicos:['rel'],
enunciado:R`<p>Um trem se move em relação a uma plataforma. Um observador na plataforma vê dois raios atingirem simultaneamente as extremidades do trem, no instante em que estas coincidem com as extremidades da plataforma. Considere:</p><p>I. Para um observador no centro do trem, os dois raios o atingem no mesmo instante.<br>II. No referencial do trem, o raio da extremidade da frente atinge o trem antes do raio de trás.<br>III. Um trem idêntico em repouso na plataforma é menor do que a plataforma.</p>`,
opcoes:[R`Apenas II.`,R`Apenas I.`,R`Apenas III.`,R`Apenas II e III.`,R`Apenas I e III.`],
dica:R`É o trem de Einstein. Para o comprimento: na plataforma o trem em movimento está contraído e mesmo assim coincide com a plataforma.`,
solucao:R`<p>No referencial do trem, eventos simultâneos na plataforma não são simultâneos: o da frente (no sentido do movimento) ocorre antes (\(t'=\gamma(t-vx/c^2)\)). Logo I é falsa e II verdadeira. Como o trem contraído tem o comprimento da plataforma, seu comprimento próprio é <b>maior</b>: III é falsa.</p>`});

P({id:'fm-2025b-6', ano:2025, prova:'EUF 2º/2025 · Q51 [fmPT6a]', topicos:['rel'],
enunciado:R`<p>Eventos: A (\(x=0\), \(t=0\)); B (400 m, 2 μs); C (600 m, 1 μs); D (700 m, 4 μs). Em qual par é fisicamente impossível haver relação causal?</p>`,
opcoes:[R`A e C`,R`A e B`,R`B e C`,R`C e D`,R`A e D`],
dica:R`Compare \(|\Delta x|\) com \(c|\Delta t|\) (\(c\cdot1\ \mu\text{s}=300\) m).`,
solucao:R`<p>A–C: \(\Delta x=600\) m > \(c\Delta t=300\) m: intervalo tipo espaço, sem causalidade possível. Os demais pares são tipo tempo (A–B: 400 \(\lt\) 600; B–C: 200 \(\lt\) 300; C–D: 100 \(\lt\) 900; A–D: 700 \(\lt\) 1200).</p>`});

P({id:'fm-2025b-7', ano:2025, prova:'EUF 2º/2025 · Q53 [fmPT7a]', topicos:['corpo'],
enunciado:R`<p>O máximo da radiação da estrela X está em 600 nm e o da estrela Y em 300 nm (corpos negros ideais, em repouso em relação à Terra). A melhor estimativa de \(T_X/T_Y\) é:</p>`,
opcoes:[R`1/2`,R`1/4`,R`2`,R`4`,R`1`],
dica:R`Wien: \(\lambda_{\max}T=\)constante.`,
solucao:R`<p>\(T_X/T_Y=\lambda_Y/\lambda_X=300/600=1/2\).</p>`});

P({id:'fm-2025b-8', ano:2025, prova:'EUF 2º/2025 · Q55 [fmPT8a]', topicos:['foton'],
enunciado:R`<p>Luz de frequência \(1{,}0\times10^{15}\) Hz incide num metal de função trabalho 3,0 eV. I. A frequência é suficiente para emissão fotoelétrica. II. Haverá elétrons ejetados com energia cinética maior que 1,0 eV. III. Com \(f=6{,}0\times10^{14}\) Hz haverá emissão. Quais são corretas?</p>`,
opcoes:[R`Apenas I e II.`,R`Apenas I.`,R`Apenas II.`,R`Apenas III.`,R`Apenas I e III.`],
dica:R`\(h=4{,}14\times10^{-15}\) eV·s.`,
solucao:R`<p>\(hf=4{,}14\) eV > 3,0 eV (I correta) e \(K_{\max}=1{,}14\) eV > 1,0 eV (II correta). Com \(6\times10^{14}\) Hz: \(hf=2{,}48\) eV \(\lt\) 3,0 eV, sem emissão (III falsa).</p>`});

// ============ 2026 ============
P({id:'fm-2026-1', ano:2026, prova:'EUF 2026 · Q41 [fmPT1a]', topicos:['corpo'],
enunciado:R`<p>Um objeto (corpo negro perfeito) de área \(A\) e capacidade térmica \(C\) constantes está isolado no vácuo, com ambiente a 0 K, inicialmente à temperatura \(T\). Qual o intervalo de tempo para que sua temperatura caia à metade?</p>`,
opcoes:[R`\(\dfrac{7C}{3\sigma AT^3}\)`,R`\(\dfrac{CT}{2\sigma A}\)`,R`\(\dfrac{C}{\sigma AT^4}\)`,R`\(\dfrac{C}{8\sigma AT^3}\)`,R`\(\dfrac{2C}{5\sigma AT^4}\)`],
dica:R`\(C\,\dfrac{dT}{dt}=-\sigma AT^4\). Separe as variáveis.`,
solucao:R`<p>\(\displaystyle\int_T^{T/2}\frac{dT'}{T'^4}=-\frac{\sigma A}{C}\Delta t\Rightarrow\frac13\left[\frac{8}{T^3}-\frac1{T^3}\right]=\frac{\sigma A}{C}\Delta t\Rightarrow\Delta t=\frac{7C}{3\sigma AT^3}\).</p>`});

P({id:'fm-2026-2', ano:2026, prova:'EUF 2026 · Q43 [fmPT2a]', topicos:['rel'],
enunciado:R`<p>Pela lei de Hubble, a velocidade de recessão de uma galáxia é \(v=Hx\). Para uma galáxia que se afasta radialmente, o desvio para o vermelho é \(z=f_e/f_o-1\) (\(f_e\): frequência emitida no referencial da galáxia; \(f_o\): recebida na Terra). No regime relativístico e com espaço-tempo estático, calcule \(x\).</p>`,
opcoes:[R`\(x=\dfrac{(z+1)^2-1}{(z+1)^2+1}\left(\dfrac cH\right)\)`,R`\(x=\dfrac{zc}{H}\)`,R`\(x=\dfrac{z}{z+2}\left(\dfrac cH\right)\)`,R`\(x=\dfrac{z}{z+2}\left(\dfrac1H\right)\)`,R`\(x=\dfrac zH\)`],
dica:R`\(1+z=\sqrt{\dfrac{1+\beta}{1-\beta}}\). Resolva para \(\beta\).`,
solucao:R`<p>\((1+z)^2(1-\beta)=1+\beta\Rightarrow\beta=\dfrac{(1+z)^2-1}{(1+z)^2+1}\). Então \(x=\dfrac vH=\dfrac{(z+1)^2-1}{(z+1)^2+1}\dfrac cH\). Para \(z\ll1\), \(x\approx zc/H\) (alternativa clássica).</p>`});

P({id:'fm-2026-3', ano:2026, prova:'EUF 2026 · Q45 [fmPT3a]', topicos:['atom'], fig:'fig/fm_y26_q45.png',
enunciado:R`<p>O gráfico mostra o calor específico molar a volume constante de um gás ideal quântico em função da temperatura. Considere:</p><p>I. Entre 20 K e 100 K, o gás pode ser considerado de moléculas diatômicas rígidas.<br>II. Os níveis de rotação são \(E_r\ell(\ell+1)\), com \(E_r/k_B\sim10\) K.<br>III. Os níveis de vibração são \(E_v(n+\tfrac12)\), com \(E_v/k_B\sim10^3\) K.</p>`,
opcoes:[R`I, II e III são verdadeiras.`,R`Nenhuma das outras alternativas.`,R`Apenas II e III são verdadeiras.`,R`Apenas I e III são verdadeiras.`,R`Apenas I e II são verdadeiras.`],
dica:R`3/2 → translação; 5/2 → + 2 graus de rotação; 7/2 → + vibração. Cada degrau ocorre em \(T\) da ordem do quantum de energia correspondente.`,
solucao:R`<p>Plateau 5/2 entre ~10 e ~100 K: diatômica rígida (I). A subida de 3/2 para 5/2 ocorre em torno de alguns K a 10 K, compatível com \(E_r/k_B\sim10\) K (II). A subida para 7/2 ocorre em torno de \(10^3\) K: vibração com \(E_v/k_B\sim10^3\) K (III).</p>`});

P({id:'fm-2026-4', ano:2026, prova:'EUF 2026 · Q47 [fmPT4a]', topicos:['rel'],
enunciado:R`<p>Uma partícula relativística de massa de repouso \(m\) move-se em uma dimensão sob o potencial \(V=kx^2/2\). Inicialmente está na origem com \(v_0=3c/5\). Qual a máxima distância alcançada?</p>`,
opcoes:[R`\(\sqrt{\dfrac{mc^2}{2k}}\)`,R`\(\sqrt{\dfrac{9mc^2}{25k}}\)`,R`\(\sqrt{\dfrac{25mc^2}{9k}}\)`,R`\(\sqrt{\dfrac{16mc^2}{25k}}\)`,R`\(\sqrt{\dfrac{4mc^2}{3k}}\)`],
dica:R`Energia conservada: \(\gamma mc^2+V\). No ponto de retorno, \(\gamma=1\).`,
solucao:R`<p>\(\gamma_0mc^2=mc^2+\tfrac12kx_{\max}^2\) com \(\gamma_0=\tfrac54\Rightarrow\tfrac12kx^2=\tfrac14mc^2\Rightarrow x_{\max}=\sqrt{\dfrac{mc^2}{2k}}\).</p>`});

P({id:'fm-2026-5', ano:2026, prova:'EUF 2026 · Q49 [fmPT5a]', topicos:['foton'],
enunciado:R`<p>Uma superfície metálica é iluminada por radiação de frequência \(f\), emitindo elétrons com energia cinética máxima \(K_{\max}\). Considere separadamente: I. A intensidade é dobrada (mesma frequência). II. A frequência é aumentada (mesma intensidade). III. O metal é trocado por outro de função trabalho menor. Qual a alternativa correta quanto aos efeitos sobre \(K_{\max}\) e sobre a corrente?</p>`,
opcoes:[R`Apenas I altera a corrente, enquanto II e III alteram \(K_{\max}\).`,R`Apenas II altera tanto \(K_{\max}\) quanto a corrente.`,R`I e II alteram \(K_{\max}\), enquanto III altera apenas a corrente.`,R`Apenas III altera \(K_{\max}\), enquanto I altera apenas a corrente.`,R`Todas as modificações alteram tanto \(K_{\max}\) quanto a corrente.`],
dica:R`\(K_{\max}=hf-\phi\) não depende da intensidade; a corrente depende do número de fótons por segundo.`,
solucao:R`<p>I: mais fótons, mais corrente, mesmo \(K_{\max}\). II e III: mudam \(hf-\phi\), logo \(K_{\max}\). (A rigor, em II, com intensidade fixa o número de fótons cai e a corrente também mudaria um pouco; o gabarito considera o efeito principal de cada mudança.)</p>`});

P({id:'fm-2026-6', ano:2026, prova:'EUF 2026 · Q51 [fmPT6a]', topicos:['bohr'],
enunciado:R`<p>No modelo de Rutherford (física clássica), elétrons orbitam o núcleo sob a força eletrostática. Avalie: I. Um elétron em órbita circular está acelerado e deve emitir radiação. II. Essa emissão implica um espectro contínuo de frequências. III. A estabilidade dos átomos é incompatível com o modelo.</p>`,
opcoes:[R`I, II e III são corretas.`,R`Apenas I é correta.`,R`Apenas II é correta.`,R`Apenas I e II são corretas.`,R`Apenas I e III são corretas.`],
dica:R`Larmor: carga acelerada irradia; ao perder energia a órbita encolhe e a frequência varia continuamente.`,
solucao:R`<p>I: Larmor. II: o raio diminui continuamente e a frequência orbital (e a emitida) varia continuamente, gerando espectro contínuo. III: o elétron colapsaria em ~\(10^{-11}\) s. Todas corretas, e são justamente os problemas que motivaram Bohr.</p>`});

P({id:'fm-2026-7', ano:2026, prova:'EUF 2026 · Q53 [fmPT7a]', topicos:['rel'],
enunciado:R`<p>O referencial \(S'\) move-se no sentido de \(x\) crescente com \(v=0{,}6c\) em relação a \(S\) (eixos paralelos). Um observador em \(S'\) emite um fóton na direção \(y'\) crescente. Qual o cosseno do ângulo entre a direção do fóton e o eixo \(x\), medido em \(S\)?</p>`,
opcoes:[R`0,6`,R`0`,R`0,8`,R`1`,R`\(0{,}6/\sqrt{1+0{,}6^2}\)`],
dica:R`Transforme as velocidades: \(u_x=\dfrac{u'_x+v}{1+vu'_x/c^2}\), \(u_y=\dfrac{u'_y}{\gamma(1+vu'_x/c^2)}\).`,
solucao:R`<p>\(u'_x=0\), \(u'_y=c\Rightarrow u_x=0{,}6c\), \(u_y=0{,}8c\) (módulo \(c\), como deve ser). \(\cos\theta=0{,}6\): aberração da luz.</p>`});

P({id:'fm-2026-8', ano:2026, prova:'EUF 2026 · Q55 [fmPT8a]', topicos:['schr'],
enunciado:R`<p>Um elétron está no estado fundamental de um poço infinito de largura \(L\). A probabilidade de detectá-lo com uma sonda de largura \(a=1{,}0\) nm centrada em \(x=L/2\) é 1/20. Com \(a\ll L\) (função de onda ≈ constante na sonda), determine \(L\).</p>`,
opcoes:[R`40 nm`,R`80 nm`,R`160 nm`,R`1600 nm`,R`20 nm`],
dica:R`\(\psi_1=\sqrt{2/L}\sin(\pi x/L)\); no centro, \(|\psi_1|^2=2/L\).`,
solucao:R`<p>\(P\approx\dfrac2La=\dfrac1{20}\Rightarrow L=40a=40\) nm.</p>`});

})();
