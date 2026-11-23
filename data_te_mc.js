window.BANK = window.BANK || [];
(function(){
const P = q => window.BANK.push(Object.assign({area:'te', tipo:'mc'}, q));
const R = String.raw;
// Primeira alternativa = correta (a página embaralha).

// ============ 2º/2020 — online ============
P({id:'te-2020o-1', ano:2020, prova:'EUF 2º/2020 (online) · Q1', topicos:['gas'],
enunciado:R`<p>C (certa) ou E (errada):</p><p>i. Um reservatório térmico tem capacidade térmica tão grande que praticamente não muda de temperatura; um mesmo sistema pode ser reservatório num experimento e não em outro.<br>ii. Variáveis que escalam com o tamanho do sistema são extensivas.<br>iii. O número de graus de liberdade de um sistema termodinâmico é igual ao número de termos na expressão de sua energia total.<br>iv. Qualquer gás físico pode se comportar como ideal ou não ideal, dependendo das condições.<br>v. A 1ª lei expressa a conservação de energia e descreve como o transporte de calor se dá num sistema.</p>`,
opcoes:[R`C, C, E, C, E`,R`C, C, C, E, C`,R`E, C, E, E, C`,R`C, C, C, E, E`,R`E, C, E, C, E`],
dica:R`A 1ª lei não diz nada sobre <i>como</i> o calor se propaga.`,
solucao:R`<p>iii é falsa (graus de liberdade termodinâmicos são as variáveis independentes, não termos da energia); v é falsa (o mecanismo de transporte não está na 1ª lei).</p>`});

P({id:'te-2020o-2', ano:2020, prova:'EUF 2º/2020 (online) · Q2', topicos:['ciclo'],
enunciado:R`<p>Um ar-condicionado ideal (Carnot) retira \(Q_2\) de um cômodo a \(T_2\) e entrega \(Q_1\) ao exterior a \(T_1\), consumindo \(W\) (por unidade de tempo). A casa recebe calor do exterior à taxa \(A(T_1-T_2)\). Em regime estacionário:</p>`,
opcoes:[R`\(T_2=T_1+\dfrac W{2A}\pm\sqrt{\left(\dfrac W{2A}\right)^2+\dfrac{WT_1}A}\)`,R`\(T_2=T_1-\dfrac W{2A}\pm\sqrt{\left(\dfrac W{2A}\right)^2-\dfrac{WT_1}A}\)`,R`\(T_2=T_1-\dfrac W{2A}\pm\sqrt{\left(\dfrac W{2A}\right)^2+\dfrac{WT_1}A}\)`,R`\(T_2=T_1+\dfrac W{2A}\pm\sqrt{\left(\dfrac W{2A}\right)^2-\dfrac{WT_1}A}\)`,R`\(T_2=T_1\pm\sqrt{\left(\dfrac W{2A}\right)^2-\dfrac{WT_1}A}\)`],
dica:R`\(Q_2=W\dfrac{T_2}{T_1-T_2}=A(T_1-T_2)\).`,
solucao:R`<p>\(A(T_1-T_2)^2=WT_2\). Com \(y=T_2\): \(Ay^2-(2AT_1+W)y+AT_1^2=0\Rightarrow y=T_1+\dfrac W{2A}\pm\sqrt{\left(\dfrac W{2A}\right)^2+\dfrac{WT_1}A}\). A raiz física (\(T_2\lt T_1\)) é a com sinal −.</p>`});

P({id:'te-2020o-3', ano:2020, prova:'EUF 2º/2020 (online) · Q3', topicos:['gas'],
enunciado:R`<p>Dois cilindros idênticos isolados, A e B, com pistões ideais, são ligados por uma válvula. A tem o pistão todo puxado e contém gás ideal monoatômico a \(T_i\); B tem o pistão todo inserido (vazio). Abre-se a válvula e o gás é lentamente sugado para B, puxando seu pistão até o fim, com o pistão de A fixo. A temperatura final é:</p>`,
opcoes:[R`\(2^{-2/3}T_i\)`,R`\(2^{2/3}T_i\)`,R`\(2^{-3/2}T_i\)`,R`\(2^{3/2}T_i\)`,R`\(2^{-1/2}T_i\)`],
dica:R`Expansão adiabática quase-estática de \(V\) para \(2V\): \(TV^{\gamma-1}\) constante.`,
solucao:R`<p>\(T_f=T_i2^{-(\gamma-1)}=2^{-2/3}T_i\) (é reversível, diferente de uma expansão livre).</p>`});

P({id:'te-2020o-4', ano:2020, prova:'EUF 2º/2020 (online) · Q4', topicos:['entr'],
enunciado:R`<p>C ou E:</p><p>i. A 1ª lei: num processo, a energia se conserva e o calor é energia trocada entre sistemas.<br>ii. Uma função de estado tem valor bem definido para cada estado de equilíbrio (ex.: \(U\), \(T\), \(p\)).<br>iii. Pela 2ª lei, a entropia de um sistema físico não pode diminuir num processo.<br>iv. Em processos reversíveis, calor pode ser gerado ou absorvido pelo sistema.<br>v. Num diagrama \(T\times S\), um ciclo de Carnot é um retângulo (duas isotermas, duas isentrópicas).</p>`,
opcoes:[R`C, C, E, C, C`,R`C, C, C, E, E`,R`C, E, E, E, C`,R`C, C, E, E, E`,R`E, C, E, E, C`],
dica:R`A 2ª lei vale para sistemas isolados.`,
solucao:R`<p>iii é errada: um sistema não isolado pode diminuir sua entropia (por exemplo, ao ser resfriado). As demais estão certas.</p>`});

P({id:'te-2020o-5', ano:2020, prova:'EUF 2º/2020 (online) · Q5', topicos:['gas'], fig:'fig/te_o20_q5.png',
enunciado:R`<p>Uma amostra de 0,2 kg recebe 1,0 kJ/min num forno. O gráfico mostra \(T\times t\). Determine (i) o calor de transformação de fase e (ii) o maior calor específico entre as fases monofásicas.</p>`,
opcoes:[R`\(1{,}0\times10^2\) J/g e \(5{,}0\times10^3\) J/(kg·K)`,R`\(1{,}0\times10^2\) J/(g·K) e 5,0 kJ/(kg·K)`,R`\(1{,}0\times10^2\) J/g e \(3{,}0\times10^3\) J/(kg·K)`,R`\(1{,}0\times10^2\) J/g e \(3{,}0\times10^3\) J/(g·K)`,R`\(1{,}0\times10^2\) J/(g·K) e 5,0 kJ/kg`],
dica:R`Patamar: 20 min. Fase 1: 50 K em 30 min. Fase 2: 20 K em 20 min.`,
solucao:R`<p>\(L=20\ \text{kJ}/0{,}2\ \text{kg}=100\) J/g. \(c_1=\dfrac{30}{0{,}2\cdot50}=3\) kJ/(kg·K); \(c_2=\dfrac{20}{0{,}2\cdot20}=5\) kJ/(kg·K). Maior: \(5\times10^3\) J/(kg·K). (Atenção às unidades: as alternativas trocam J/g por J/(g·K).)</p>`});

P({id:'te-2020o-6', ano:2020, prova:'EUF 2º/2020 (online) · Q6', topicos:['ens'],
enunciado:R`<p>Dois íons de spin 1 têm \(H=-g\mu_Bh(m_1+m_2)\), \(m_i=0,\pm1\). O sistema está isolado com \(E=-g\mu_Bh\). O número de microestados acessíveis e a probabilidade de cada um são:</p>`,
opcoes:[R`2 e 1/2`,R`4 e 1/4`,R`4 e 1/2`,R`9 e 1/9`,R`9 e 2/9`],
dica:R`\(m_1+m_2=1\).`,
solucao:R`<p>(1,0) e (0,1): 2 estados, cada um com probabilidade 1/2 (postulado das probabilidades iguais a priori).</p>`});

P({id:'te-2020o-7', ano:2020, prova:'EUF 2º/2020 (online) · Q7', topicos:['prob'],
enunciado:R`<p>Um gás ideal de \(N\) moléculas ocupa \(V_0\). Seja \(n\) o número de moléculas num subvolume \(V\), com \(p=V/V_0\). A razão \(\Delta n/\langle n\rangle\) é:</p>`,
opcoes:[R`\(N^{-1/2}\sqrt{\dfrac{V_0}V-1}\)`,R`0`,R`\(N\dfrac{V_0}{V}\)`,R`1`,R`\(N\dfrac V{V_0}\)`],
dica:R`Binomial: \(\langle n\rangle=Np\), \(\Delta n^2=Npq\).`,
solucao:R`<p>\(\dfrac{\Delta n}{\langle n\rangle}=\sqrt{\dfrac{q}{Np}}=\dfrac1{\sqrt N}\sqrt{\dfrac{V_0}V-1}\to0\) para \(N\) grande.</p>`});

P({id:'te-2020o-8', ano:2020, prova:'EUF 2º/2020 (online) · Q8', topicos:['ens'],
enunciado:R`<p>\(N\) osciladores clássicos independentes a \(T\), com \(H=\sum\left(\dfrac{p_i^2}{2m}+\alpha x_i^n\right)\), \(n\) par. A energia interna é:</p>`,
opcoes:[R`\(\left(\dfrac1n+\dfrac12\right)Nk_BT\)`,R`\(\tfrac23Nc_nk_BT\)`,R`\(\tfrac32Nk_BT\)`,R`\(\left(n+\tfrac12\right)Nk_BT\)`,R`\(Nk_BT\)`],
dica:R`Teorema do virial generalizado: \(\langle\alpha x^n\rangle=k_BT/n\).`,
solucao:R`<p>\(z\propto T^{1/2}\cdot T^{1/n}\Rightarrow U=k_BT^2\partial_T\ln Z=N\left(\tfrac12+\tfrac1n\right)k_BT\). Para \(n=2\), \(Nk_BT\).</p>`});

P({id:'te-2020o-9', ano:2020, prova:'EUF 2º/2020 (online) · Q10', topicos:['ens'],
enunciado:R`<p>Um oscilador clássico tem \(H=\dfrac{p^2}{2m}+bx^2+cx^4\), a \(T\). A energia cinética média é:</p>`,
opcoes:[R`\(\tfrac12k_BT\)`,R`\(k_BT\)`,R`\(\tfrac14k_BT\)`,R`\(b^2/c\)`,R`\(\tfrac32k_BT\)`],
dica:R`A parte cinética fatoriza na função de partição.`,
solucao:R`<p>Equipartição vale para o termo quadrático em \(p\), seja qual for o potencial: \(\tfrac12k_BT\). (A Q9, análoga à Q3 com gás diatômico, dá \(2^{-2/5}T_i\).)</p>`});

// ============ 2020 — 2ª aplicação ============
P({id:'te-2020b-1', ano:2020, prova:'EUF 2020 (2ª aplicação) · TE1A', topicos:['gas'],
enunciado:R`<p>Classifique em C (certa) ou E (errada):</p><p>i. O número de moléculas de água no corpo humano médio é da ordem de \(10^{27}\).<br>ii. Sendo \(p,V,T\) de \(n\) moles de gás ideal, as três leis empíricas (a) \(p\propto1/V\) com \(T,n\) constantes, (b) \(p\propto T\) com \(V,n\) constantes e (c) \(V\propto T\) com \(p,n\) constantes, combinadas, resultam na equação de estado dos gases ideais.<br>iii. Um gás ideal é aquele em que a energia potencial de interação é desprezível frente à cinética e o volume das moléculas é desprezível frente ao volume total.</p>`,
opcoes:[R`C, E, C`,R`E, C, C`,R`C, E, E`,R`E, C, E`,R`C, C, C`],
dica:R`Em ii: alguma dessas leis diz como \(pV\) depende de \(n\)?`,
solucao:R`<p>i: ~40 kg de água / 18 g/mol ≈ 2×10³ mol ≈ 10²⁷ moléculas. C. ii: as três leis dão \(pV/T=\)const. para \(n\) fixo, mas não que a constante é \(nR\); falta a lei de Avogadro. E. iii: C.</p>`});

P({id:'te-2020b-2', ano:2020, prova:'EUF 2020 (2ª aplicação) · TE2A', topicos:['ciclo'],
enunciado:R`<p>Um ciclo de gás ideal: (I) de \((p_1,V_1)\) resfriado a pressão constante até \((p_1,V_2)\); (II) aquecido a volume constante até \((p_2,V_2)\); (III) expansão adiabática de volta a \((p_1,V_1)\). Com \(C_p\), \(C_V\) constantes e \(\gamma=C_p/C_V\), a eficiência é:</p>`,
opcoes:[R`\(1-\gamma\dfrac{V_1/V_2-1}{p_2/p_1-1}\)`,R`\(1-\gamma\dfrac{1-V_2/V_1}{p_2/p_1-1}\)`,R`\(1-\gamma\dfrac{V_1/V_2-1}{1-p_1/p_2}\)`,R`\(1-\gamma\dfrac{V_2/V_1-1}{p_1/p_2-1}\)`,R`\(\gamma\dfrac{1-V_2/V_1}{p_2/p_1-1}\)`],
dica:R`Calor só entra na etapa II e só sai na I: \(\eta=1-Q_{out}/Q_{in}\).`,
solucao:R`<p>\(Q_{out}=nC_p(T_1-T_2)=\dfrac{C_p}{R}p_1(V_1-V_2)\); \(Q_{in}=nC_V(T_3-T_2)=\dfrac{C_V}{R}V_2(p_2-p_1)\). \(\eta=1-\gamma\dfrac{p_1(V_1-V_2)}{V_2(p_2-p_1)}=1-\gamma\dfrac{V_1/V_2-1}{p_2/p_1-1}\).</p>`});

P({id:'te-2020b-3', ano:2020, prova:'EUF 2020 (2ª aplicação) · TE3A', topicos:['gas','entr'],
enunciado:R`<p>C ou E:</p><p>i. Para gás ideal monoatômico \(C_p-C_V=R\); para um líquido \(C_p-C_V=2R\) e para um sólido \(C_p-C_V=3R\).<br>ii. Num diagrama \(P\)–\(V\), isotermas jamais se interceptam, e o mesmo vale para adiabatas; adiabatas podem interceptar várias isotermas.<br>iii. A eficiência máxima entre reservatórios a 100 °C e 0 °C é de pouco mais de 30%.<br>iv. Numa expansão livre de 1 mol de gás ideal de \(V_i\) a \(V_f\), \(\Delta S\propto\ln(V_i+V_f)\).</p>`,
opcoes:[R`E, C, E, E`,R`E, C, E, C`,R`E, C, C, C`,R`E, E, E, C`,R`C, E, C, E`],
dica:R`\(\eta_C=1-T_f/T_q\) com kelvin.`,
solucao:R`<p>i: para sólidos e líquidos \(C_p-C_V=TV\alpha^2/\kappa_T\), pequeno. E. ii: C. iii: \(1-273/373=26{,}8\%\). E. iv: \(\Delta S=R\ln(V_f/V_i)\). E.</p>`});

P({id:'te-2020b-4', ano:2020, prova:'EUF 2020 (2ª aplicação) · TE4A', topicos:['entr'],
enunciado:R`<p>Calcule \(\Delta S_{\text{universo}}\) em: (i) um capacitor \(C=3{,}73\ \mu\)F é carregado totalmente por uma bateria de 100 V; (ii) o capacitor carregado descarrega totalmente num resistor de 10 Ω. Tudo em contato com um reservatório a 100 °C; despreze transientes.</p>`,
opcoes:[R`50 μJ/K e 50 μJ/K`,R`25 μJ/K e 50 μJ/K`,R`5,0 μJ/K e 25 μJ/K`,R`50 μJ/K e 25 μJ/K`,R`25 μJ/K e 5,0 μJ/K`],
dica:R`Na carga, a bateria fornece \(CV^2\) e o capacitor guarda metade. A outra metade vira calor.`,
solucao:R`<p>Em ambos os casos, \(Q=\tfrac12CV^2=\tfrac12\cdot3{,}73\times10^{-6}\cdot10^4=1{,}87\times10^{-2}\) J vai ao reservatório a 373 K: \(\Delta S=Q/T=50\ \mu\)J/K. A resistência não importa.</p>`});

P({id:'te-2020b-5', ano:2020, prova:'EUF 2020 (2ª aplicação) · TE5A', topicos:['ens'],
enunciado:R`<p>Num sólido, cada um dos \(N\) átomos tem três modos de vibração, todos osciladores quânticos 1D independentes de frequência \(\omega\), em contato com um reservatório a \(T\). A energia livre de Helmholtz por átomo é:</p>`,
opcoes:[R`\(3k_BT\ln\left[2\sinh\left(\dfrac{\hbar\omega}{2k_BT}\right)\right]\)`,R`\(3k_BT\ln\left[2\cosh\left(\dfrac{\hbar\omega}{2k_BT}\right)\right]\)`,R`\(3k_BT\ln\left[2\tanh\left(\dfrac{\hbar\omega}{2k_BT}\right)\right]\)`,R`\(\dfrac{3k_BT}{2\sinh(\hbar\omega/2k_BT)}\)`,R`\(k_BT\ln\left[2\sinh\left(\dfrac{\hbar\omega}{2k_BT}\right)\right]\)`],
dica:R`\(z=\sum e^{-\beta\hbar\omega(n+1/2)}=\dfrac{1}{2\sinh(\beta\hbar\omega/2)}\); \(f=-3k_BT\ln z\).`,
solucao:R`<p>\(z_1=\dfrac{e^{-x/2}}{1-e^{-x}}=\dfrac1{2\sinh(x/2)}\) com \(x=\beta\hbar\omega\). Três modos: \(f=-3k_BT\ln z_1=3k_BT\ln[2\sinh(\hbar\omega/2k_BT)]\) (modelo de Einstein).</p>`});

P({id:'te-2020b-6', ano:2020, prova:'EUF 2020 (2ª aplicação) · TE6A', topicos:['ens','fase'],
enunciado:R`<p>Um estudante observa uma transição de fase (divergência da capacidade térmica em \(T_c>0\)) num material magnético. Ele propõe um modelo de \(N\) spins 1/2 não interagentes num campo \(h\), com energias \(\mp\mu h\). Esse modelo prevê:</p>`,
opcoes:[R`\(C=\dfrac{N\mu^2h^2}{k_BT^2}\text{sech}^2\left(\dfrac{\mu h}{k_BT}\right)\), o que não explica a transição.`,R`a mesma \(C\) com sech², o que explica a transição.`,R`\(C=\tfrac32Nk_B\), o que não explica a transição.`,R`\(C=\dfrac{N\mu^2h^2}{k_BT^2}\text{csch}^2\left(\dfrac{T_c}{T_c-T}\right)\), o que explica a transição.`,R`a mesma \(C\) com csch², o que não explica a transição.`],
dica:R`\(U=-N\mu h\tanh(\beta\mu h)\); derive em \(T\).`,
solucao:R`<p>\(C=dU/dT=Nk_B(\beta\mu h)^2\text{sech}^2(\beta\mu h)\): um pico suave (anomalia de Schottky), sem divergência. Sem interações não há transição de fase.</p>`});

P({id:'te-2020b-7', ano:2020, prova:'EUF 2020 (2ª aplicação) · TE7A', topicos:['ens'],
enunciado:R`<p>Gás ideal clássico de partículas indistinguíveis numa caixa 1D de comprimento \(L\), ultrarrelativísticas (\(E=c|p|\)), em equilíbrio com reservatório térmico e de partículas a \(T\), com fugacidade \(z=e^{\beta\mu}\). A grande função de partição satisfaz:</p>`,
opcoes:[R`\(\ln\Xi=\dfrac{2zL}{\beta hc}\)`,R`\(\ln\Xi=\dfrac{zL}{\beta hc}\)`,R`\(\ln\Xi=\dfrac{2z\beta L}{hc}\)`,R`\(\ln\Xi=\dfrac{2zL}{\beta c}\)`,R`\(\ln\Xi=\dfrac{2z}{\beta hcL}\)`],
dica:R`Clássico: \(\ln\Xi=zZ_1\), com \(Z_1=\frac Lh\int e^{-\beta c|p|}dp\).`,
solucao:R`<p>\(Z_1=\dfrac Lh\cdot\dfrac{2}{\beta c}\Rightarrow\ln\Xi=\dfrac{2zL}{\beta hc}\).</p>`});

P({id:'te-2020b-8', ano:2020, prova:'EUF 2020 (2ª aplicação) · TE8A', topicos:['prob'],
enunciado:R`<p>Uma bateria tem \(N\) células; cada uma tem fem \(v\) com probabilidade \(p\) e 0 (em curto) com probabilidade \(1-p\), independentemente. A fem é \(V=\varepsilon_1+\dots+\varepsilon_N\) e a potência num resistor \(R\) é \(V^2/R\). A potência média é:</p>`,
opcoes:[R`\([Np+N(N-1)p^2]\dfrac{v^2}{R}\)`,R`0`,R`\(N(N-1)p^2\dfrac{v^2}R\)`,R`\(Np\dfrac{v^2}Re^{-v/R}\)`,R`\(Np^2\dfrac{v^2}{R}\)`],
dica:R`\(\langle V^2\rangle=\sum_i\langle\varepsilon_i^2\rangle+\sum_{i\ne j}\langle\varepsilon_i\rangle\langle\varepsilon_j\rangle\).`,
solucao:R`<p>\(\langle\varepsilon_i^2\rangle=pv^2\), \(\langle\varepsilon_i\varepsilon_j\rangle=p^2v^2\). \(\langle V^2\rangle=[Np+N(N-1)p^2]v^2\).</p>`});

// ============ 2021 — online ============
P({id:'te-2021-1', ano:2021, prova:'EUF 2021 (online) · TE1A', topicos:['entr'], fig:'fig/te_a21_q1.png',
enunciado:R`<p>O gráfico mostra a variação de entropia \(\Delta S\) (em relação a \(t=0\)) de um sistema A que troca calor com o ambiente. Todas as mudanças são reversíveis e quase-estáticas, sem produção de entropia no universo. V ou F (considere "energia térmica" como calor):</p><p>I. Entre \(t=1\) h e \(t=3\) h, A sofreu um processo exotérmico.<br>II. Entre 4 h e 8 h, o calor trocado foi certamente maior que entre 1 h e 3 h.<br>III. Entre 0 e 3 h, A recebe calor do ambiente; entre 4 h e 8 h, A cede calor ao ambiente.<br>IV. No instante \(t=3{,}5\) h não há troca líquida de calor entre A e o ambiente.</p>`,
opcoes:[R`F, F, V, V`,R`V, F, F, V`,R`F, V, F, F`,R`V, V, F, F`,R`V, V, V, F`],
dica:R`Reversível: \(dQ=T\,dS\). O gabarito lê III e IV de forma <i>acumulada</i> desde \(t=0\): o sinal de \(\Delta S(t)\) diz se, até aquele instante, houve ganho ou perda líquida de calor.`,
solucao:R`<p>I: entre 1 e 3 h, \(S\) é constante, sem calor (F). II: entre 4 e 8 h também é constante; ambos os calores são nulos (F). III: até 3 h \(\Delta S>0\) (recebeu); de 4 a 8 h \(\Delta S\lt0\): no balanço acumulado, cedeu mais do que recebeu (V na leitura acumulada). IV: em \(t\approx3{,}5\) h, \(\Delta S=0\): o calor líquido trocado desde o início é nulo, supondo \(T\) aproximadamente constante (V).</p><p><i>Atenção:</i> numa leitura instantânea, III (4–8 h) e IV seriam falsas, pois a taxa de troca é nula em 4–8 h e negativa em 3,5 h. O gabarito oficial é F, F, V, V.</p>`});

P({id:'te-2021-2', ano:2021, prova:'EUF 2021 (online) · TE2A', topicos:['gas'],
enunciado:R`<p>A ordem de grandeza do volume ocupado por uma molécula de ar (volume do recipiente dividido pelo número de moléculas) numa sala à temperatura e pressão ambientes, e da distância média entre as moléculas, são:</p>`,
opcoes:[R`\(10^{-7}\ \mu\text{m}^3\) e \(10^1\) nm`,R`\(10^{-6}\ \mu\text{m}^3\) e \(10^{-1}\ \mu\text{m}\)`,R`\(10^6\ \text{nm}^3\) e \(10^2\) nm`,R`\(10^{-6}\ \mu\text{m}^3\) e \(10^0\) nm`,R`\(10^{-6}\ \mu\text{m}^3\) e \(10^{-3}\ \mu\text{m}\)`],
dica:R`\(V/N=k_BT/p\).`,
solucao:R`<p>\(V/N=\dfrac{4\times10^{-21}}{10^5}=4\times10^{-26}\ \text{m}^3=4\times10^{-8}\ \mu\text{m}^3\sim10^{-7}\ \mu\text{m}^3\). Distância \(\sim(V/N)^{1/3}\approx3\) nm, ordem de \(10^1\) nm na escala logarítmica do gabarito (as outras alternativas erram o volume).</p>`});

P({id:'te-2021-3', ano:2021, prova:'EUF 2021 (online) · TE3A', topicos:['ciclo','entr'], fig:'fig/te_a21_q3.png',
enunciado:R`<p>Um mol de gás ideal monoatômico percorre o ciclo da figura (\(V_1=4V_0\)): a → b isobárico a \(p_0\), b → c isocórico até \(2p_0\), c → a retilíneo. O trabalho do gás de a até c pela trajetória a → b → c, a variação da energia interna em b → c e a variação de entropia em b → c são:</p>`,
opcoes:[R`\(3p_0V_0\), \(6p_0V_0\) e \(\tfrac32R\ln2\)`,R`\(8p_0V_0\), \(3p_0V_0\) e \(\tfrac34R\ln2\)`,R`\(3p_0V_0\), \(4p_0V_0\) e \(\tfrac34R\ln2\)`,R`\(8p_0V_0\), \(3p_0V_0\) e \(3R\ln2\)`,R`\(3p_0V_0\), \(4p_0V_0\) e \(3R\ln2\)`],
dica:R`Isocórico: \(W=0\), \(\Delta U=\tfrac32V\Delta p\), \(\Delta S=C_V\ln(T_c/T_b)\).`,
solucao:R`<p>\(W_{ab}=p_0\cdot3V_0\), \(W_{bc}=0\). \(\Delta U_{bc}=\tfrac32\cdot4V_0\cdot p_0=6p_0V_0\). \(\Delta S_{bc}=\tfrac32R\ln2\) (a pressão dobra a volume fixo).</p>`});

P({id:'te-2021-4', ano:2021, prova:'EUF 2021 (online) · TE4A', topicos:['ciclo'],
enunciado:R`<p>Um edifício é mantido a \(T\) por uma bomba de calor ideal (Carnot) que usa um rio a \(T_0\lt T\) como fonte. A bomba consome potência \(P\), e o edifício perde calor para o ambiente à taxa \(\alpha(T-T_0)\). A máxima temperatura em que o prédio pode ser mantido é:</p>`,
opcoes:[R`\(T_0+\dfrac{P}{2\alpha}\left(1+\sqrt{1+4\alpha T_0/P}\right)\)`,R`\(T_0+\dfrac{P}{\alpha}\left(1+\sqrt{1+\alpha T_0/P}\right)\)`,R`\(T_0+\dfrac{P}{2\alpha}\left(1+\sqrt{1-2\alpha T_0/P}\right)\)`,R`\(T_0+\dfrac{2P}{\alpha}\left(1+\sqrt{1+\alpha T_0/P}\right)\)`,R`\(T_0+\dfrac{2P}{\alpha}\left(1+\sqrt{1-2\alpha T_0/P}\right)\)`],
dica:R`Carnot: calor entregue \(=P\,\dfrac{T}{T-T_0}\). Iguale à perda.`,
solucao:R`<p>\(\dfrac{PT}{T-T_0}=\alpha(T-T_0)\). Com \(x=T-T_0\): \(\alpha x^2-Px-PT_0=0\Rightarrow x=\dfrac{P}{2\alpha}\left(1+\sqrt{1+4\alpha T_0/P}\right)\).</p>`});

P({id:'te-2021-5', ano:2021, prova:'EUF 2021 (online) · TE5A', topicos:['ens'],
enunciado:R`<p>Um átomo tem níveis \(0,\varepsilon_1,\varepsilon_2,\dots\) com degenerescências \(1,2,1,\dots\). A temperatura é baixa o bastante para desprezar \(e^{-\beta\varepsilon_j}\) com \(j\ge3\). A energia média é:</p>`,
opcoes:[R`\(\dfrac{2\varepsilon_1e^{-\beta\varepsilon_1}+\varepsilon_2e^{-\beta\varepsilon_2}}{1+2e^{-\beta\varepsilon_1}+e^{-\beta\varepsilon_2}}\)`,R`\(\dfrac{\varepsilon_1+\varepsilon_2}3\)`,R`\(\dfrac{2\varepsilon_1+\varepsilon_2}4\)`,R`\(\dfrac{\varepsilon_1e^{-\beta\varepsilon_1}+\varepsilon_2e^{-\beta\varepsilon_2}}{1+e^{-\beta\varepsilon_1}+e^{-\beta\varepsilon_2}}\)`,R`\(\dfrac{\varepsilon_1e^{-2\beta\varepsilon_1}+\varepsilon_2e^{-\beta\varepsilon_2}}{1+e^{-2\beta\varepsilon_1}+e^{-\beta\varepsilon_2}}\)`],
dica:R`\(\langle\varepsilon\rangle=\sum g_i\varepsilon_ie^{-\beta\varepsilon_i}/\sum g_ie^{-\beta\varepsilon_i}\).`,
solucao:R`<p>Basta somar com os pesos de degenerescência \(g=1,2,1\).</p>`});

P({id:'te-2021-6', ano:2021, prova:'EUF 2021 (online) · TE6A', topicos:['ens','gas'],
enunciado:R`<p>O número de microestados de um gás de \(N\) átomos numa caixa de volume \(V\) com energia entre \(E\) e \(E+\delta E\) é \(\Omega\propto E^{3N/2}V^N\). Com \(p=10^5\) Pa e \(T=400\) K, a densidade \(\rho=N/V\) multiplicada por \(k_B\) vale:</p>`,
opcoes:[R`250 Pa/K`,R`50 Pa/K`,R`30 Pa/K`,R`100 Pa/K`,R`25 Pa/K`],
dica:R`\(\dfrac pT=\left(\dfrac{\partial S}{\partial V}\right)_{E,N}\), \(S=k_B\ln\Omega\).`,
solucao:R`<p>\(p/T=Nk_B/V\Rightarrow\rho k_B=p/T=10^5/400=250\) Pa/K.</p>`});

P({id:'te-2021-7', ano:2021, prova:'EUF 2021 (online) · TE7A', topicos:['ens'],
enunciado:R`<p>Uma balança é uma mola de quartzo a temperatura \(T\). A energia de uma massa \(m\) suspensa, com momento \(p\) e deformação \(x\), é \(E=\dfrac{p^2}{2m}+\dfrac12\alpha\left(x-\dfrac{mg}\alpha\right)^2\). Classicamente, \(\langle x\rangle\) e \(\langle(x-\langle x\rangle)^2\rangle\) são:</p>`,
opcoes:[R`\(\dfrac{mg}\alpha\) e \(\dfrac1{\alpha\beta}\)`,R`\(\dfrac{mg}\alpha\) e \(\dfrac{m^2g^2}{\alpha^2}\)`,R`\(\dfrac{mg}\alpha\) e \(\dfrac{\alpha+\beta m^2g^2}{\beta\alpha^2}\)`,R`0 e \(\dfrac{\alpha+\beta m^2g^2}{\beta\alpha^2}\)`,R`\(\sqrt{\dfrac1{\alpha\beta}}\) e \(\dfrac{m^2g^2}{\alpha^2}\)`],
dica:R`Distribuição gaussiana em \(x\) centrada em \(mg/\alpha\); equipartição.`,
solucao:R`<p>\(\langle\tfrac12\alpha(x-x_0)^2\rangle=\tfrac12k_BT\Rightarrow\sigma^2=k_BT/\alpha=1/(\alpha\beta)\); \(\langle x\rangle=x_0=mg/\alpha\). Esse ruído térmico limita a sensibilidade da balança.</p>`});

P({id:'te-2021-8', ano:2021, prova:'EUF 2021 (online) · TE8A', topicos:['ens'],
enunciado:R`<p>Gás clássico ideal de \(N\) partículas. Situação I: dois compartimentos isolados por parede fixa, com \(N/2\) átomos em cada metade (volume \(V/2\)), à temperatura \(T\). Situação II: a parede é removida e os \(N\) átomos ocupam \(V\) à mesma \(T\). A razão \(Z_I/Z_{II}\) é:</p>`,
opcoes:[R`\(\dfrac{N!}{2^N(N/2)!^2}\)`,R`Depende linearmente da temperatura.`,R`\(\dfrac{N!}{2^N}\)`,R`\(2^N\)`,R`\(\dfrac{N!}{(N/2)!^2}\)`],
dica:R`\(Z=\dfrac{(V/\lambda^3)^N}{N!}\) para partículas indistinguíveis.`,
solucao:R`<p>\(Z_I=\left[\dfrac{(V/2\lambda^3)^{N/2}}{(N/2)!}\right]^2\), \(Z_{II}=\dfrac{(V/\lambda^3)^N}{N!}\). Razão \(=\dfrac{N!}{2^N(N/2)!^2}\) (≈ \(\sqrt{2/\pi N}\), quase 1: é o paradoxo de Gibbs resolvido).</p>`});

// ============ 2021 — 3ª aplicação ============
P({id:'te-2021c-1', ano:2021, prova:'EUF 2021 (3ª aplicação) · TE1A', topicos:['gas'],
enunciado:R`<p>Mistura-se uma massa \(M\) de água a \(T\) (em °C) com uma massa \(m\) de gelo a 0 °C num calorímetro ideal. A água derrete todo o gelo e o equilíbrio é atingido em \(T_f\). Com \(L_f\) o calor latente de fusão e \(c_v\) o calor específico da água:</p>`,
opcoes:[R`\(T_f=\dfrac{Mc_vT-mL_f}{(M+m)c_v}\)`,R`\(\dfrac{Mc_vT}{(M+m)c_v}\)`,R`\(\dfrac{mL_f}{(M+m)c_v}\)`,R`\(T/2\)`,R`\(\dfrac{Mc_vT+mL_f}{mc_v}\)`],
dica:R`Calor cedido pela água = fusão do gelo + aquecimento da água de fusão.`,
solucao:R`<p>\(Mc_v(T-T_f)=mL_f+mc_vT_f\Rightarrow T_f=\dfrac{Mc_vT-mL_f}{(M+m)c_v}\).</p>`});

P({id:'te-2021c-2', ano:2021, prova:'EUF 2021 (3ª aplicação) · TE2A', topicos:['gas'],
enunciado:R`<p>Um cilindro termicamente isolado é dividido por um pistão móvel, sem atrito e bom condutor de calor, preso inicialmente no centro (volumes \(V_0\)). Ambas as metades têm gás ideal a \(T_0\), com pressões \(p_0\) e \(2p_0\). Solto o pistão, no novo equilíbrio:</p>`,
opcoes:[R`\(T_1=T_2=T_0\) e \(p_1=p_2=3p_0/2\)`,R`\(T_1=T_2=T_0/2\) e \(p_1=p_2=5p_0/2\)`,R`\(T_1=T_2=T_0\) e \(p_1=p_2=5p_0/2\)`,R`\(T_1=T_2=T_0\) e \(p_1=p_2=p_0\)`,R`\(T_1=T_0\), \(T_2=3T_0/2\) e \(p_1=p_2=2p_0/3\)`],
dica:R`Sistema isolado, sem trabalho externo: a energia interna total (só função de \(T\)) se conserva.`,
solucao:R`<p>\(U\) total constante ⇒ \(T_f=T_0\). Volume total \(2V_0\), moles totais \(\propto3p_0V_0/RT_0\): \(p=\dfrac{3p_0V_0}{2V_0}=\dfrac32p_0\).</p>`});

P({id:'te-2021c-3', ano:2021, prova:'EUF 2021 (3ª aplicação) · TE3A', topicos:['ciclo','entr'], fig:'fig/te_c21_q3.png',
enunciado:R`<p>Um motor opera no ciclo reversível do diagrama \(T\times S\) (triângulo com vértices \((S_1,2T_0)\), \((S_2,2T_0)\) e \((S_2,T_0)\)). Comparando o rendimento \(\eta\) com o de um Carnot entre \(T_0\) e \(2T_0\):</p>`,
opcoes:[R`\(\eta=\eta_C/2\)`,R`\(\eta=\eta_C/4\)`,R`\(\eta=3\eta_C/4\)`,R`\(\eta=\eta_C\)`,R`\(\eta=5\eta_C/9\)`],
dica:R`No diagrama \(T\)–\(S\), o trabalho é a área do ciclo e o calor absorvido é a área sob os trechos com \(dS>0\).`,
solucao:R`<p>\(W=\tfrac12T_0\Delta S\); \(Q_{in}=2T_0\Delta S\) (topo). \(\eta=\tfrac14\), enquanto \(\eta_C=\tfrac12\). Logo \(\eta=\eta_C/2\).</p>`});

P({id:'te-2021c-4', ano:2021, prova:'EUF 2021 (3ª aplicação) · TE4A', topicos:['entr'],
enunciado:R`<p>Três porções de massa \(m\) de um líquido (calor específico \(c_v\) constante), a \(T\), \(2T\) e \(3T\), são misturadas num recipiente isolado. A variação de entropia é:</p>`,
opcoes:[R`\(mc_v\ln(4/3)\)`,R`\(mc_v\ln2\)`,R`\(mc_v\ln(3/2)\)`,R`\(mc_v\)`,R`\(mc_v\ln(2/3)\)`],
dica:R`\(T_f=2T\); \(\Delta S_i=mc_v\ln(T_f/T_i)\).`,
solucao:R`<p>\(\Delta S=mc_v\left[\ln2+\ln1+\ln\tfrac23\right]=mc_v\ln\tfrac43>0\).</p>`});

P({id:'te-2021c-5', ano:2021, prova:'EUF 2021 (3ª aplicação) · FE1A', topicos:['ens','qst'],
enunciado:R`<p>Hidrogênio gasoso tem estados orto e para, com energia rotacional \(\varepsilon_J=\hbar^2J(J+1)/2I\). No enunciado, os estados do <i>orto</i> têm degenerescência 3 com \(J\) par, e os do <i>para</i> têm degenerescência 1 com \(J\) ímpar. Em equilíbrio a \(T\), a razão entre as populações do primeiro estado excitado e do fundamental é:</p>`,
opcoes:[R`\(\dfrac13\exp\left(-\dfrac{\hbar^2}{Ik_BT}\right)\)`,R`\(3\exp\left(\dfrac{\hbar^2}{Ik_BT}\right)\)`,R`\(\exp\left(-\dfrac{3\hbar^2}{Ik_BT}\right)\)`,R`\(\exp\left(\dfrac{3\hbar^2}{Ik_BT}\right)\)`,R`1`],
dica:R`Fundamental: \(J=0\) (peso 3). Primeiro excitado: \(J=1\) (peso 1), \(\Delta\varepsilon=\hbar^2/I\).`,
solucao:R`<p>\(\dfrac{P_1}{P_0}=\dfrac13e^{-\hbar^2/Ik_BT}\), tomando como peso só a degenerescência de spin dada. (Se também se contasse a degenerescência rotacional \(2J+1\), o fator seria 1. Na natureza, aliás, J par é para, e J ímpar é orto.)</p>`});

P({id:'te-2021c-6', ano:2021, prova:'EUF 2021 (3ª aplicação) · FE2A', topicos:['ens'],
enunciado:R`<p>Um gás de rede em \(V\) células tem \(\Xi=(1+z+z^2e^{-\beta\delta})^V\), com \(z=e^{\beta\mu}\). O número médio de partículas é:</p>`,
opcoes:[R`\(\dfrac{z(1+2ze^{-\beta\delta})}{1+z+z^2e^{-\beta\delta}}V\)`,R`\(\dfrac{z(1+e^{-\beta\delta}+2ze^{-2\beta\delta})}{1+ze^{-\beta\delta}+z^2e^{-2\beta\delta}}V\)`,R`\(\dfrac{1+2ze^{-\beta\delta}}{1+z+z^2e^{-\beta\delta}}V\)`,R`\(\dfrac{1+e^{-\beta\delta}+2ze^{-2\beta\delta}}{1+ze^{-\beta\delta}+z^2e^{-2\beta\delta}}V\)`,R`\(\dfrac{ze^{-\beta\delta}}{1+ze^{-\beta\delta}}V\)`],
dica:R`\(\langle N\rangle=z\,\partial_z\ln\Xi\).`,
solucao:R`<p>\(\langle N\rangle=Vz\dfrac{1+2ze^{-\beta\delta}}{1+z+z^2e^{-\beta\delta}}\) (cada célula comporta 0, 1 ou 2 partículas).</p>`});

P({id:'te-2021c-7', ano:2021, prova:'EUF 2021 (3ª aplicação) · FE3A', topicos:['prob'],
enunciado:R`<p>Certas bactérias marinhas nadam em linha reta a ~100 μm/s durante ~100 ms e depois se reorientam aleatoriamente, repetindo o processo. A ordem de grandeza do volume de água explorado em \(\Delta t=10\) min é (modele como caminhada aleatória 3D):</p>`,
opcoes:[R`\(10^{-9}\ \text{m}^3\)`,R`\(10^{-3}\ \text{m}^3\)`,R`\(10^{-6}\ \text{m}^3\)`,R`\(10^0\ \text{m}^3\)`,R`\(10^{-12}\ \text{m}^3\)`],
dica:R`Passo \(\ell=10\ \mu\)m; número de passos \(N\sim6000\); \(R\sim\sqrt N\ell\).`,
solucao:R`<p>\(R\approx\sqrt{6000}\cdot10\ \mu\text{m}\approx0{,}8\) mm, \(V\sim R^3\sim5\times10^{-10}\ \text{m}^3\sim10^{-9}\ \text{m}^3\). (Em linha reta, o alcance seria 6 cm: a difusão reduz muito o volume explorado.)</p>`});

P({id:'te-2021c-8', ano:2021, prova:'EUF 2021 (3ª aplicação) · FE4A', topicos:['ens','entr'],
enunciado:R`<p>Num cristal com \(N\) sítios e \(N\) posições intersticiais, mover um átomo para um interstício custa \(\varepsilon\), e \(E=n\varepsilon\). O número de configurações é \(\Omega=\left[\dfrac{N!}{n!(N-n)!}\right]^2\). Com \(n,N\gg1\) (Stirling), a temperatura em função de \(E\) e \(N\) é:</p>`,
opcoes:[R`\(T=\dfrac{\varepsilon}{2k_B}\dfrac1{\ln(N\varepsilon/E-1)}\)`,R`\(\dfrac{\varepsilon}{2k_B}\dfrac1{\ln(N\varepsilon/E+1)}\)`,R`\(\dfrac{\varepsilon}{k_B}\dfrac1{\ln(N\varepsilon/E-1)}\)`,R`\(\dfrac{\varepsilon}{k_B}\dfrac1{\ln(N\varepsilon/E+1)}\)`,R`\(E/k_B\)`],
dica:R`\(\dfrac1T=\dfrac{\partial S}{\partial E}=\dfrac1\varepsilon\dfrac{\partial S}{\partial n}\).`,
solucao:R`<p>\(S=2k_B\ln\binom Nn\Rightarrow\partial_nS=2k_B\ln\dfrac{N-n}{n}\). \(\dfrac1T=\dfrac{2k_B}{\varepsilon}\ln\left(\dfrac{N\varepsilon}E-1\right)\) (defeitos de Frenkel).</p>`});

// ============ 2022 — online ============
P({id:'te-2022-1', ano:2022, prova:'EUF 2022 (online) · TE1A', topicos:['gas'],
enunciado:R`<p>Uma substância líquida X (massa molar 18 g) está no ponto de evaporação, em contato com a atmosfera. Uma corrente de 0,50 A de uma fonte de 12 V atravessa por 300 s um resistor imerso, e 1,8 g da substância evaporam. A variação molar de entalpia de evaporação é, aproximadamente:</p>`,
opcoes:[R`\(1{,}80\times10^4\) J`,R`\(1{,}80\times10^3\) J`,R`\(-1{,}80\times10^4\) J`,R`\(-1{,}05\times10^4\) J`,R`\(1{,}30\times10^3\) J`],
dica:R`A pressão constante, calor = variação de entalpia.`,
solucao:R`<p>\(Q=VIt=1800\) J para 0,1 mol: \(\Delta H=1{,}8\times10^4\) J/mol (positivo, pois o líquido absorve calor).</p>`});

P({id:'te-2022-2', ano:2022, prova:'EUF 2022 (online) · TE2A', topicos:['gas'],
enunciado:R`<p>Ferro sólido (55,9 g/mol) reage com HCl aquoso: Fe(s) + 2HCl(aq) → FeCl\(_2\)(aq) + H\(_2\)(g). Se 5,59 g de ferro reagem num béquer aberto a 300 K, o trabalho realizado pela atmosfera sobre os produtos (H\(_2\) como gás ideal) é aproximadamente:</p>`,
opcoes:[R`−250 J`,R`\(2{,}50\times10^3\) J`,R`25 J`,R`\(-2{,}50\times10^3\) J`,R`250 J`],
dica:R`O gás empurra a atmosfera: \(W_{atm}=-p\Delta V=-nRT\).`,
solucao:R`<p>0,1 mol de H\(_2\): \(W_{atm}=-0{,}1\cdot8{,}31\cdot300\approx-250\) J (a atmosfera é empurrada pelo gás).</p>`});

P({id:'te-2022-3', ano:2022, prova:'EUF 2022 (online) · TE3A', topicos:['entr'],
enunciado:R`<p>Um pequeno sistema a \(T_S\) é posto em contato com um reservatório a \(T_R\). O calor trocado é \(\Delta Q=C(T_R-T_S)\), sendo \(C\) a capacidade térmica do sistema. A variação total de entropia do universo é:</p>`,
opcoes:[R`\(C[\ln(T_R/T_S)+T_S/T_R-1]\)`,R`\(C[\ln(T_S/T_R)+T_S/T_R+1]\)`,R`\(C[\ln(T_R/T_S)+T_R/T_S-1]\)`,R`\(C[-\ln(T_R/T_S)+T_S/T_R-1]\)`,R`\(C[\ln(T_R/T_S)-T_S/T_R+1]\)`],
dica:R`\(\Delta S_{sis}=C\ln(T_R/T_S)\); \(\Delta S_{res}=-\Delta Q/T_R\).`,
solucao:R`<p>\(\Delta S=C\ln\dfrac{T_R}{T_S}-\dfrac{C(T_R-T_S)}{T_R}=C\left[\ln x+\frac1x-1\right]\ge0\), com \(x=T_R/T_S\) (zero só se \(x=1\)).</p>`});

P({id:'te-2022-4', ano:2022, prova:'EUF 2022 (online) · TE4A', topicos:['gas'],
enunciado:R`<p>Uma xícara contém 200 mL de chá (água) a 100 °C. Desprezando a xícara, qual a massa de gelo a −15 °C (\(c_g=0{,}5\) cal/g°C, \(L_g=80\) cal/g) a adicionar para servir a 65 °C?</p>`,
opcoes:[R`46 g`,R`34 g`,R`58 g`,R`65 g`,R`21 g`],
dica:R`Gelo: aquece até 0, funde, aquece até 65.`,
solucao:R`<p>Chá cede \(200\cdot35=7000\) cal. Gelo absorve \(m(7{,}5+80+65)=152{,}5m\). \(m\approx46\) g.</p>`});

P({id:'te-2022-5', ano:2022, prova:'EUF 2022 (online) · TE5A', topicos:['ens'],
enunciado:R`<p>Dois osciladores quânticos interagentes de frequência \(\omega\) (números \(n_1\), \(n_2\)) estão a \(T\). A energia é \(\hbar\omega(n_1+n_2)\) se \(n_1\ne n_2\) e \(\hbar\omega(n_1+n_2)+\Delta\) se \(n_1=n_2\) (\(\Delta>0\)). A baixas temperatura (\(\beta\gg1\)), a função de partição é:</p>`,
opcoes:[R`\(e^{-\beta\Delta}+2e^{-\beta\hbar\omega}\)`,R`\(e^{-\beta\Delta}+e^{-\beta\hbar\omega}\)`,R`\(e^{-\beta\Delta}(1+2e^{-\beta\hbar\omega})\)`,R`\(e^{-\beta\Delta}(1+e^{-\beta\hbar\omega})\)`,R`\(e^{-\beta\Delta}(1+2e^{-2\beta\hbar\omega})\)`],
dica:R`Liste os estados mais baixos: (0,0), (1,0), (0,1).`,
solucao:R`<p>(0,0): energia \(\Delta\); (1,0) e (0,1): \(\hbar\omega\). Os demais (≥ \(2\hbar\omega\)) são desprezados: \(Z\approx e^{-\beta\Delta}+2e^{-\beta\hbar\omega}\).</p>`});

P({id:'te-2022-6', ano:2022, prova:'EUF 2022 (online) · TE6A', topicos:['ens'],
enunciado:R`<p>Uma liga tem \(N_A\) átomos A (níveis 0 e \(\epsilon\)) e \(N_B\) átomos B (níveis 0 e \(2\epsilon\)), a \(T\). A energia interna é:</p>`,
opcoes:[R`\(\dfrac{N_A\epsilon}{e^{\beta\epsilon}+1}+\dfrac{2N_B\epsilon}{e^{2\beta\epsilon}+1}\)`,R`\(\dfrac{N_A\epsilon}{e^{\beta\epsilon}+1}+\dfrac{N_B\epsilon}{e^{2\beta\epsilon}+1}\)`,R`\(\dfrac{N_A\epsilon}{e^{\beta\epsilon}+1}+\dfrac{2N_B\epsilon}{2e^{2\beta\epsilon}+1}\)`,R`\(\dfrac{N_A\epsilon}{e^{\beta\epsilon}-1}+\dfrac{2N_B\epsilon}{e^{2\beta\epsilon}-1}\)`,R`\(\dfrac{N_A\epsilon}{e^{\beta\epsilon}-1}+\dfrac{N_B\epsilon}{e^{2\beta\epsilon}-1}\)`],
dica:R`Dois níveis \(0,\varepsilon\): \(\langle E\rangle=\varepsilon/(e^{\beta\varepsilon}+1)\).`,
solucao:R`<p>Somando as duas espécies independentes. (O sinal −1 seria de osciladores, com infinitos níveis.)</p>`});

P({id:'te-2022-7', ano:2022, prova:'EUF 2022 (online) · TE7A', topicos:['ens','gas'],
enunciado:R`<p>Num modelo de gás, \(\Omega(V,N)=\dfrac{(V/a)!}{N![(V/a)-N]!}\), com \(a\) o volume excluído por molécula. Com Stirling, a pressão é:</p>`,
opcoes:[R`\(\dfrac{k_BT}a\ln\dfrac{V}{V-Na}\)`,R`\(\dfrac{k_BT}a\ln\dfrac V{Na}\)`,R`\(\dfrac{k_BT}a\ln\dfrac{V-Na}V\)`,R`\(\dfrac{k_BT}a\ln\dfrac{Na}V\)`,R`\(\dfrac{k_BT}a\ln\dfrac{V+Na}V\)`],
dica:R`\(p/T=\partial S/\partial V\), com \(d\ln x!/dx\approx\ln x\).`,
solucao:R`<p>\(\dfrac pT=\dfrac{k_B}a\left[\ln\frac Va-\ln\left(\frac Va-N\right)\right]\). Para \(Na\ll V\): \(p\approx Nk_BT/V\) (gás ideal).</p>`});

P({id:'te-2022-8', ano:2022, prova:'EUF 2022 (online) · TE8A', topicos:['prob'],
enunciado:R`<p>Caminhada aleatória 1D direcionada: partindo da origem, a cada instante \(t=1,\dots,\tau\) dá um passo unitário à direita (probabilidade \(a\)) ou à esquerda (\(1-a\)). Sendo \(d\) a posição após \(\tau\) passos, \(\langle d^2\rangle\) é:</p>`,
opcoes:[R`\(\tau+\tau(\tau-1)(2a-1)^2\)`,R`\(\tau(2a-1)^2\)`,R`\(\tau(\tau-1)(2a-1)^2\)`,R`\(4a(1-a)\tau\)`,R`\(\tau\)`],
dica:R`\(\langle s_i^2\rangle=1\), \(\langle s_i\rangle=2a-1\), passos independentes.`,
solucao:R`<p>\(\langle d^2\rangle=\sum\langle s_i^2\rangle+\sum_{i\ne j}\langle s_i\rangle\langle s_j\rangle=\tau+\tau(\tau-1)(2a-1)^2\). (A variância é \(4a(1-a)\tau\).)</p>`});

// ============ 2022 — 2ª aplicação ============
P({id:'te-2022b-1', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q33 [te1a]', topicos:['gas'],
enunciado:R`<p>Uma mistura contém massas iguais de argônio (40 g/mol) e neônio (20 g/mol). Tratando-os como gases ideais, a razão entre as pressões parciais \(P_{Ne}/P_{Ar}\) é:</p>`,
opcoes:[R`2,0`,R`1,5`,R`1,0`,R`0,50`,R`0,67`],
dica:R`Pressão parcial ∝ número de moles.`,
solucao:R`<p>Massas iguais: \(n_{Ne}/n_{Ar}=40/20=2\).</p>`});

P({id:'te-2022b-2', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q35 [te2a]', topicos:['entr'],
enunciado:R`<p>A variação de entropia de \(n\) moles de gás ideal numa expansão isotérmica de \(V_i\) a \(V_f=2V_i\) é:</p>`,
opcoes:[R`\(nR\ln2\)`,R`\(nR\ln0{,}5\)`,R`\(R\ln2/n\)`,R`\(R\ln0{,}5/n\)`,R`\(2nR\ln2\)`],
dica:R`\(\Delta S=nR\ln(V_f/V_i)\) a \(T\) constante.`,
solucao:R`<p>\(\Delta S=Q/T=W/T=nR\ln2\).</p>`});

P({id:'te-2022b-3', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q37 [te3a]', topicos:['gas'],
enunciado:R`<p>Uma barra de 1,00 m e seção 10,0 cm² liga dois corpos de capacidades térmicas infinitas, a 500 K e 300 K, no vácuo. Em regime estacionário, a corrente de calor é 50,0 J/s. A condutividade térmica da barra é:</p>`,
opcoes:[R`250 W/(m·K)`,R`500 W/(m·K)`,R`750 W/(m·K)`,R`100 W/(m·K)`,R`150 W/(m·K)`],
dica:R`Lei de Fourier: \(H=kA\Delta T/L\).`,
solucao:R`<p>\(k=\dfrac{HL}{A\Delta T}=\dfrac{50\cdot1}{10^{-3}\cdot200}=250\) W/(m·K).</p>`});

P({id:'te-2022b-4', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q39 [te4a]', topicos:['ciclo'],
enunciado:R`<p>Uma máquina térmica pode operar como motor ou refrigerador entre reservatórios a 27,0 °C e 327 °C. É correto afirmar:</p>`,
opcoes:[R`Como refrigerador, pode ter coeficiente de desempenho de 100%.`,R`Como motor, recebendo 1,00 kJ do quente por ciclo, pode produzir 550 J de trabalho.`,R`Como motor, entregando 500 J ao frio por ciclo, pode produzir 550 J de trabalho.`,R`Como refrigerador, pode retirar 600 J do frio por ciclo, entregando 1,00 kJ ao quente.`,R`A eficiência como motor não pode ser maior que 40,0%.`],
dica:R`300 K e 600 K: \(\eta_C=50\%\), \(K_C=T_f/(T_q-T_f)=1\).`,
solucao:R`<p>O limite de Carnot como refrigerador é \(K=1\): 100% é atingível no caso ideal. B: 550 J > 500 J máx. C: com \(Q_f=500\) J, \(W\le500\) J. D: \(K=600/400=1{,}5>1\). E: o limite é 50%.</p>`});

P({id:'te-2022b-5', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q73 [fe1a]', topicos:['ens'],
enunciado:R`<p>Partículas localizadas não interagentes têm um nível fundamental (energia 0) e um excitado duplamente degenerado (energia \(\epsilon\)). No limite \(k_BT\gg\epsilon\), a razão \(p_\epsilon/p_0\) é:</p>`,
opcoes:[R`2`,R`3`,R`1`,R`1/2`,R`1/3`],
dica:R`\(p_\epsilon/p_0=g\,e^{-\beta\epsilon}\to g\).`,
solucao:R`<p>A alta temperatura todos os estados ficam igualmente prováveis, e o nível excitado tem 2 deles.</p>`});

P({id:'te-2022b-6', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q75 [fe2a]', topicos:['ens'],
enunciado:R`<p>A energia rotacional de uma molécula diatômica é \(E=J\ell(\ell+1)\), com degenerescência \(2\ell+1\). Para \(\beta J\gg1\), a contribuição rotacional ao calor específico por molécula é aproximadamente:</p>`,
opcoes:[R`\(12k_B\left(\dfrac{J}{k_BT}\right)^2e^{-2\beta J}\)`,R`\(2k_B\left(\dfrac{J}{k_BT}\right)^2e^{-\beta J}\)`,R`\(12k_B\left(\dfrac{k_BT}{J}\right)^2e^{-2\beta J}\)`,R`\(k_B\)`,R`\(5k_B/2\)`],
dica:R`Mantenha só \(\ell=0\) e \(\ell=1\): \(z\approx1+3e^{-2\beta J}\).`,
solucao:R`<p>\(U\approx6Je^{-2\beta J}\Rightarrow c=\dfrac{dU}{dT}=6J\cdot\dfrac{2J}{k_BT^2}e^{-2\beta J}=12k_B(\beta J)^2e^{-2\beta J}\): congelamento exponencial dos graus de rotação.</p>`});

P({id:'te-2022b-7', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q77 [fe3a]', topicos:['ens'],
enunciado:R`<p>\(N\) íons magnéticos localizados a \(T\) têm energia \(\epsilon=-\mu_0hS_i\), com \(S_i=-1,0,1\). A magnetização por íon \(m=\sum\langle S_i\rangle/N\) é:</p>`,
opcoes:[R`\(\dfrac{2\mu_0\sinh(\beta\mu_0h)}{1+2\cosh(\beta\mu_0h)}\)`,R`\(\dfrac{\mu_0\sinh(\beta\mu_0h)}{1+\cosh(\beta\mu_0h)}\)`,R`\(\mu_0\tanh(\beta\mu_0h)\)`,R`\((2\beta\mu_0h)\sinh(\beta\mu_0h)\)`,R`0`],
dica:R`\(z=1+2\cosh x\), \(x=\beta\mu_0h\).`,
solucao:R`<p>\(\langle S\rangle=\dfrac{e^x-e^{-x}}{1+e^x+e^{-x}}=\dfrac{2\sinh x}{1+2\cosh x}\). O gabarito inclui o fator \(\mu_0\) na definição de \(m\) (momento magnético).</p>`});

P({id:'te-2022b-8', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q79 [fe4a]', topicos:['ens'],
enunciado:R`<p>\(N\) partículas clássicas em 1D a \(T\), com \(\mathcal H=\sum_i(A_ip_{xi}^2+B_ix_i^2)\), \(A_i,B_i>0\). A energia média é:</p>`,
opcoes:[R`\(Nk_BT\)`,R`\(\tfrac N2k_BT\)`,R`\(\tfrac{3N}2k_BT\)`,R`\(\sum(A_i+B_i)k_BT\)`,R`\(\sum A_iB_ik_BT\)`],
dica:R`Equipartição: cada termo quadrático dá \(k_BT/2\).`,
solucao:R`<p>\(2N\) termos quadráticos: \(U=Nk_BT\), independente de \(A_i\), \(B_i\).</p>`});

// ============ 2023 — 1ª aplicação ============
P({id:'te-2023-1', ano:2023, prova:'EUF 2023 · Q33 [te1a]', topicos:['gas'],
enunciado:R`<p>Bobinas supercondutoras de Nb-Ti para ressonância magnética operam a ~4,0 K (ebulição do hélio). Quantos litros de hélio líquido evaporam para resfriar uma bobina de 5,0 kg de 31 °C até 4,0 K? Dados: \(c_{NbTi}=400\) J/(kg·°C); \(L_{He}=2{,}00\times10^4\) J/kg; densidade do He líquido 125 kg/m³.</p>`,
opcoes:[R`240 L`,R`0,24 L`,R`21,6 L`,R`2,16 L`,R`600 L`],
dica:R`\(\Delta T\approx300\) K.`,
solucao:R`<p>\(Q=5\cdot400\cdot300=6\times10^5\) J; massa de He \(=30\) kg; volume \(30/125=0{,}24\ \text{m}^3=240\) L. (Na prática aproveita-se também a entalpia do vapor frio, e o consumo é bem menor.)</p>`});

P({id:'te-2023-2', ano:2023, prova:'EUF 2023 · Q35 [te2a]', topicos:['ciclo'], fig:'fig/te_y23_q35.png',
enunciado:R`<p>Um refrigerador com gás ideal monoatômico opera no ciclo: de \((P_0,V_0,T_0)\), isocórico até \(P_0/3\); expansão isobárica até \(3V_0\); compressão isotérmica até o ponto inicial. Pela primeira lei, o refrigerador transfere calor (positivo) para o ambiente externo (reservatório quente):</p>`,
opcoes:[R`nos processos isotérmico e isocórico.`,R`nos processos isobárico e isocórico.`,R`apenas no processo isotérmico.`,R`apenas no processo isobárico.`,R`nos processos isobárico e isotérmico.`],
dica:R`Sinal de \(Q\) em cada etapa: isocórico com \(T\) caindo; isobárico com \(T\) subindo; compressão isotérmica.`,
solucao:R`<p>Isocórico: \(T\) cai de \(T_0\) a \(T_0/3\), \(Q\lt0\) (cede). Isobárico: \(T\) volta a \(T_0\), \(Q>0\) (absorve). Isotérmico (compressão): \(Q=W\lt0\) (cede). Cede calor no isocórico e no isotérmico.</p>`});

P({id:'te-2023-3', ano:2023, prova:'EUF 2023 · Q37 [te3a]', topicos:['gas'],
enunciado:R`<p>Um bloco de densidade \(\rho\) e volume \(V_0\), com coeficiente de dilatação volumétrica \(\gamma\) e calor específico \(c_B\), sofre \(\Delta T>0\) a pressão \(P\) constante. O módulo da razão entre o trabalho na expansão e o calor absorvido é:</p>`,
opcoes:[R`\(\dfrac{\gamma P}{\rho c_B}\)`,R`\(\dfrac{\rho c_B}{\gamma P}\)`,R`\(\dfrac{\gamma\rho c_B}{3}\)`,R`\(\dfrac{\gamma P\rho}{c_B\Delta T}\)`,R`\(\dfrac{\gamma P}{\rho c_B\Delta T}\)`],
dica:R`\(W=P\gamma V_0\Delta T\); \(Q=\rho V_0c_B\Delta T\).`,
solucao:R`<p>\(W/Q=\gamma P/(\rho c_B)\), muito pequeno para sólidos: quase todo o calor vira energia interna.</p>`});

P({id:'te-2023-4', ano:2023, prova:'EUF 2023 · Q39 [te4a]', topicos:['entr'],
enunciado:R`<p>Um mol de gás ideal monoatômico (\(P_0\), \(V_0\)) é aquecido a volume constante até \(4P_0\). A variação de entropia é:</p>`,
opcoes:[R`\(1{,}5R\ln4\)`,R`\(2{,}5R\ln2\)`,R`\(3{,}5R\ln4\)`,R`\(4{,}0R\)`,R`\(2{,}5R\)`],
dica:R`\(\Delta S=C_V\ln(T_f/T_i)\).`,
solucao:R`<p>\(T_f=4T_i\): \(\Delta S=\tfrac32R\ln4\).</p>`});

P({id:'te-2023-5', ano:2023, prova:'EUF 2023 · Q73 [fe1a]', topicos:['ens'],
enunciado:R`<p>\(N\) íons magnéticos localizados a \(T\) podem ter \(S_z=0,+1,-1\), com energias \(0\), \(\epsilon-\mu H\) e \(\epsilon+\mu H\). A magnetização por íon é:</p>`,
opcoes:[R`\(\dfrac{2\mu\sinh(\beta\mu H)}{e^{\beta\epsilon}+2\cosh(\beta\mu H)}\)`,R`\(\dfrac{2\mu\sinh(\beta\mu H)}{e^{\beta\epsilon}-2\cosh(\beta\mu H)}\)`,R`\(\dfrac{2\mu\cosh(\beta\mu H)}{e^{\beta\epsilon}-2\sinh(\beta\mu H)}\)`,R`\(\mu\tanh(\beta\mu H)\)`,R`\(\mu e^{-\beta\epsilon}\tanh(\beta\mu H)\)`],
dica:R`\(z=1+2e^{-\beta\epsilon}\cosh(\beta\mu H)\); multiplique numerador e denominador por \(e^{\beta\epsilon}\).`,
solucao:R`<p>\(m=\mu\dfrac{e^{-\beta\epsilon}(e^{\beta\mu H}-e^{-\beta\mu H})}{1+2e^{-\beta\epsilon}\cosh}=\dfrac{2\mu\sinh(\beta\mu H)}{e^{\beta\epsilon}+2\cosh(\beta\mu H)}\).</p>`});

P({id:'te-2023-6', ano:2023, prova:'EUF 2023 · Q75 [fe2a]', topicos:['ens'],
enunciado:R`<p>Uma partícula em contato com um reservatório a \(T\) tem níveis \(E_n=\theta n^2\), \(n=1,2,3,\dots\) A baixas temperaturas (\(\beta\theta\gg1\)), a energia média é aproximadamente:</p>`,
opcoes:[R`\(\theta(1+3e^{-3\beta\theta})\)`,R`\(\theta(1-3e^{-3\beta\theta})\)`,R`\(\theta(1+e^{-\beta\theta})\)`,R`\(\theta(1-e^{-\beta\theta})\)`,R`\(1/\beta\)`],
dica:R`Mantenha \(n=1\) e \(n=2\): \(E_2-E_1=3\theta\).`,
solucao:R`<p>\(u\approx\dfrac{\theta+4\theta e^{-3\beta\theta}}{1+e^{-3\beta\theta}}\approx\theta(1+3e^{-3\beta\theta})\).</p>`});

P({id:'te-2023-7', ano:2023, prova:'EUF 2023 · Q77 [fe3a]', topicos:['ens'],
enunciado:R`<p>Um gás de \(N_A\) partículas clássicas A e \(N_B\) partículas B, sem interação, num volume \(V\) a \(T\), com \(\mathcal H=p^2/2m\) para cada partícula. Pela equipartição, a energia média é:</p>`,
opcoes:[R`\(\tfrac32(N_A+N_B)k_BT\)`,R`\(\tfrac32\dfrac{N_AN_B}{N_A+N_B}k_BT\)`,R`\(\tfrac32(N_A-N_B)k_BT\)`,R`\(\dfrac{3}{2V}(N_A+N_B)k_BT\)`,R`\((N_A+N_B)k_BT\)`],
dica:R`Três termos quadráticos por partícula.`,
solucao:R`<p>\(\tfrac32k_BT\) por partícula, qualquer que seja a espécie.</p>`});

P({id:'te-2023-8', ano:2023, prova:'EUF 2023 · Q79 [fe4a]', topicos:['ens','prob'],
enunciado:R`<p>Dois osciladores quânticos independentes de frequência \(\omega\), com \(E_n=\hbar\omega n\), estão a \(T\). Com \(x=e^{-\beta\hbar\omega}\) e \(P_{n_1n_2}=x^{n_1+n_2}(1-x)^2\), a probabilidade de a energia total ser menor que \(4\hbar\omega\) é:</p>`,
opcoes:[R`\((1-x)^2(1+2x+3x^2+4x^3)\)`,R`\((1-x)^2(1+2x+3x^2)\)`,R`\((1-x)^2(1+x+x^2+x^3)\)`,R`\(5x^4(1-x)^2\)`,R`\(4x^3(1-x)^2\)`],
dica:R`O nível \(N=n_1+n_2\) tem \(N+1\) combinações.`,
solucao:R`<p>\(N=0,1,2,3\) com multiplicidades 1, 2, 3, 4: \((1-x)^2(1+2x+3x^2+4x^3)\).</p>`});

// ============ 2023 — 2ª aplicação ============
P({id:'te-2023b-1', ano:2023, prova:'EUF 2º/2023 · Q33 [te1a]', topicos:['gas'],
enunciado:R`<p>Um líquido de massa \(m\) e calor específico \(c\) deve ser aquecido de \(\Delta T\) por um resistor \(R\) imerso, ligado a uma pilha de resistência interna desprezível. O tempo necessário é \(\Delta t\). Se todo o calor vai para o líquido, a fem da pilha é:</p>`,
opcoes:[R`\(\varepsilon=\sqrt{\dfrac{Rmc\Delta T}{\Delta t}}\)`,R`\(\sqrt{\dfrac{2Rmc\Delta T}{\Delta t}}\)`,R`\(3\sqrt{\dfrac{Rmc\Delta T}{\Delta t}}\)`,R`\(\sqrt{\dfrac{3Rmc\Delta T}{\Delta t}}\)`,R`\(2\sqrt{\dfrac{Rmc\Delta T}{\Delta t}}\)`],
dica:R`\(\dfrac{\varepsilon^2}{R}\Delta t=mc\Delta T\).`,
solucao:R`<p>Isolando: \(\varepsilon=\sqrt{Rmc\Delta T/\Delta t}\).</p>`});

P({id:'te-2023b-2', ano:2023, prova:'EUF 2º/2023 · Q35 [te2a]', topicos:['ciclo'],
enunciado:R`<p>Uma casa é aquecida até a temperatura de equilíbrio \(T\) por uma bomba de calor que retira calor de um rio a \(T_0\), consumindo potência \(\lambda\). O coeficiente de desempenho \(\eta\) é a razão entre calor fornecido e trabalho. A casa perde calor à taxa \(\alpha(T-T_0)\). Então \(T\) é:</p>`,
opcoes:[R`\(T_0+\dfrac{\eta\lambda}\alpha\)`,R`\(T_0\)`,R`\(T_0+\dfrac{2\eta\lambda}\alpha\)`,R`\(T_0+\dfrac\lambda\alpha\)`,R`\(T_0+\dfrac{2\lambda}\alpha\)`],
dica:R`Calor fornecido por unidade de tempo: \(\eta\lambda\).`,
solucao:R`<p>\(\eta\lambda=\alpha(T-T_0)\Rightarrow T=T_0+\eta\lambda/\alpha\).</p>`});

P({id:'te-2023b-3', ano:2023, prova:'EUF 2º/2023 · Q37 [te3a]', topicos:['entr'],
enunciado:R`<p>1,0 kg de água a 0 °C é aquecido até 100 °C em contato com um reservatório a 100 °C (processo irreversível). Use \(c=4\) J/(g·K), \(\ln(373/273)\approx3/10\) e \(100/373\approx1/4\). As variações de entropia da água, do reservatório e do universo (J/K) são:</p>`,
opcoes:[R`1200, −1000, 200`,R`1000, −1000, 0`,R`1200, −1000, 0`,R`1200, −1000, −2200`,R`1200, 0, 0`],
dica:R`Água: \(mc\ln(T_f/T_i)\). Reservatório: \(-Q/T_R\).`,
solucao:R`<p>Água: \(4000\cdot0{,}3=1200\). \(Q=4\times10^5\) J; reservatório \(-4\times10^5/373\approx-1000\). Universo: +200 J/K > 0 (irreversível).</p>`});

P({id:'te-2023b-4', ano:2023, prova:'EUF 2º/2023 · Q39 [te4a]', topicos:['gas','ciclo'],
enunciado:R`<p>Um gás ideal monoatômico (\(pV=nRT\), \(U=\tfrac32nRT\)) é comprimido de \((T_0,V_0)\) seguindo \(T=(V/V_0)^xT_0\), \(x\ne0\). O trabalho realizado pelo gás até \(V_1\), e o valor de \(x\) para que o calor trocado seja nulo, são:</p>`,
opcoes:[R`\(W=\dfrac{nRT_0}{x}\left[\left(\dfrac{V_1}{V_0}\right)^x-1\right]\) e \(x=-\tfrac23\)`,R`\(W=nRT_0/2\) e \(x=-1\)`,R`\(W=\dfrac{nRT_0}2\ln\dfrac{V_1}{V_0}\) e \(x=-\tfrac13\)`,R`\(W=\dfrac{nRT_0}{x}\left[\left(\dfrac{V_1}{V_0}\right)^{2x}-1\right]\) e \(x=-\tfrac23\)`,R`\(W=\dfrac{nRT_0}{x}\left[\left(\dfrac{V_1}{V_0}\right)^x-1\right]\) e \(x=0\)`],
dica:R`\(W=\int\frac{nRT}{V}dV\). Adiabática monoatômica: \(TV^{2/3}=\)const.`,
solucao:R`<p>\(W=nRT_0\displaystyle\int_{V_0}^{V_1}\frac{(V/V_0)^x}{V}dV=\frac{nRT_0}x\left[(V_1/V_0)^x-1\right]\). \(Q=0\iff TV^{\gamma-1}\) constante: \(x=-(\gamma-1)=-\tfrac23\).</p>`});

P({id:'te-2023b-5', ano:2023, prova:'EUF 2º/2023 · Q73 [fe1a]', topicos:['ens'],
enunciado:R`<p>Duas partículas interagentes a \(T\), com \(n_i\in\{0,1\}\). A energia vale \(\epsilon(n_1+n_2)\) se \(n_1\ne n_2\) e \(\epsilon(n_1+n_2)+\Delta\) se \(n_1=n_2\) (\(\epsilon,\Delta>0\)). A probabilidade de o sistema estar no estado de maior energia é:</p>`,
opcoes:[R`\(\dfrac{e^{-\beta(2\epsilon+\Delta)}}{e^{-\beta\Delta}+2e^{-\beta\epsilon}+e^{-\beta(2\epsilon+\Delta)}}\)`,R`\(\dfrac{e^{-\beta\Delta}}{e^{-\beta\Delta}+2e^{-\beta\epsilon}+e^{-\beta(2\epsilon+\Delta)}}\)`,R`\(\dfrac{e^{-\beta\Delta}}{e^{-\beta\Delta}+e^{-\beta\epsilon}+e^{-\beta(\epsilon+\Delta)}}\)`,R`\(\dfrac{e^{-\beta\Delta}}{e^{-\beta\Delta}+2e^{-\beta\epsilon}+e^{-2\beta\epsilon}}\)`,R`\(\dfrac1{1+2e^{-\beta\epsilon}+e^{-2\beta\epsilon}}\)`],
dica:R`Estados: (0,0) → \(\Delta\); (1,0),(0,1) → \(\epsilon\); (1,1) → \(2\epsilon+\Delta\).`,
solucao:R`<p>O de maior energia é (1,1), com \(2\epsilon+\Delta\); divida seu peso de Boltzmann por \(Z\).</p>`});

P({id:'te-2023b-6', ano:2023, prova:'EUF 2º/2023 · Q75 [fe2a]', topicos:['ens'],
enunciado:R`<p>\(N\) partículas independentes a \(T\) têm energias \(\epsilon_n=n\epsilon\) com \(n=1,3,5,\dots\) A energia média total é:</p>`,
opcoes:[R`\(N\epsilon\,\dfrac{e^{2\beta\epsilon}+1}{e^{2\beta\epsilon}-1}\)`,R`\(N\epsilon\,\dfrac{e^{2\beta\epsilon}-1}{e^{2\beta\epsilon}+1}\)`,R`\(N\epsilon\,\dfrac{e^{\beta\epsilon}+1}{e^{\beta\epsilon}-1}\)`,R`\(N\epsilon\,\dfrac{e^{\beta\epsilon}-1}{e^{\beta\epsilon}+1}\)`,R`\(N\epsilon\)`],
dica:R`\(z=\dfrac{e^{-\beta\epsilon}}{1-e^{-2\beta\epsilon}}=\dfrac{1}{2\sinh\beta\epsilon}\).`,
solucao:R`<p>\(u=-\partial_\beta\ln z=\epsilon\coth(\beta\epsilon)=\epsilon\dfrac{e^{2\beta\epsilon}+1}{e^{2\beta\epsilon}-1}\). Para \(T\to0\), \(u\to\epsilon\) (o nível \(n=1\)).</p>`});

P({id:'te-2023b-7', ano:2023, prova:'EUF 2º/2023 · Q77 [fe3a]', topicos:['ens'],
enunciado:R`<p>Um oscilador clássico 1D a \(T\) tem \(H=\dfrac{p^2}{2M}+V(q)\), com \(V=\tfrac12M\omega^2q^2\) para \(q>0\) e \(V=\epsilon+\tfrac12M\omega^2q^2\) para \(q\lt0\). A função de partição é:</p>`,
opcoes:[R`\(\dfrac{\pi}{\beta h\omega}(1+e^{-\beta\epsilon})\)`,R`\(\dfrac{\pi}{\beta h\omega}\)`,R`\(\dfrac\pi{\beta h\omega}(1-e^{-\beta\epsilon})\)`,R`\(\dfrac\pi{\beta h\omega}(1+e^{\beta\epsilon})\)`,R`\(\dfrac\pi{\beta h\omega}(1-e^{\beta\epsilon})\)`],
dica:R`\(Z=\frac1h\int dp\,dq\,e^{-\beta H}\); cada meia-reta dá metade da gaussiana.`,
solucao:R`<p>Oscilador completo: \(Z_0=\dfrac{2\pi}{\beta h\omega}\). Cada metade contribui \(Z_0/2\), e o lado \(q\lt0\) ganha o fator \(e^{-\beta\epsilon}\).</p>`});

P({id:'te-2023b-8', ano:2023, prova:'EUF 2º/2023 · Q79 [fe4a]', topicos:['ens'],
enunciado:R`<p>\(N\) íons independentes a \(T\) têm \(\epsilon=-\mu_0hS_i+DS_i^2\), com \(S_i=-3,-1,1,3\). O momento de quadrupolo médio por íon \(q=\langle S_i^2\rangle\) é:</p>`,
opcoes:[R`\(\dfrac{9e^{-9\beta D}\cosh(3\beta\mu_0h)+e^{-\beta D}\cosh(\beta\mu_0h)}{e^{-9\beta D}\cosh(3\beta\mu_0h)+e^{-\beta D}\cosh(\beta\mu_0h)}\)`,R`\(\dfrac{9e^{-9\beta D}\sinh(3\beta\mu_0h)+e^{-\beta D}\sinh(\beta\mu_0h)}{e^{-9\beta D}\cosh(3\beta\mu_0h)+e^{-\beta D}\cosh(\beta\mu_0h)}\)`,R`\(-\dfrac{9e^{9\beta D}\sinh(3\beta\mu_0h)+e^{\beta D}\sinh(\beta\mu_0h)}{e^{9\beta D}\cosh(3\beta\mu_0h)+e^{\beta D}\cosh(\beta\mu_0h)}\)`,R`\(-\dfrac{9e^{9\beta D}\cosh(3\beta\mu_0h)+e^{\beta D}\cosh(\beta\mu_0h)}{e^{9\beta D}\cosh(3\beta\mu_0h)+e^{\beta D}\cosh(\beta\mu_0h)}\)`,R`\(\dfrac{2\cosh(\beta\mu_0h)}{e^{\beta D}+2\cosh(\beta\mu_0h)}\)`],
dica:R`Agrupe \(S=\pm3\) e \(S=\pm1\): \(z=2e^{-9\beta D}\cosh3x+2e^{-\beta D}\cosh x\).`,
solucao:R`<p>\(\langle S^2\rangle=\dfrac{9\cdot2e^{-9\beta D}\cosh3x+1\cdot2e^{-\beta D}\cosh x}{z}\), com \(x=\beta\mu_0h\). Deve ser positivo, entre 1 e 9.</p>`});

// ============ 2024 — 1ª aplicação ============
P({id:'te-2024-1', ano:2024, prova:'EUF 2024 · Q33 [tePT1a]', topicos:['gas'],
enunciado:R`<p>Uma barra homogênea de comprimento \(L\) liga dois reservatórios, cada um com 1 mol de gás ideal: em \(x=0\), \(p_2=2p_0\), \(V_2=3V_0\); em \(x=L\), \(p_1=p_0\), \(V_1=V_0\). No estado estacionário, \(dQ/dt\) não depende de \(x\) e a temperatura varia linearmente com \(x\):</p>`,
opcoes:[R`\(\dfrac{p_0V_0}R\left(-\dfrac5Lx+6\right)\)`,R`\(\dfrac{p_0V_0}R\left(-\dfrac7Lx+8\right)\)`,R`\(\dfrac{p_0V_0}R(x+1)\)`,R`\(\dfrac{p_0V_0}Rx\)`,R`\(\dfrac{p_0V_0}R\left(-\dfrac5Lx+3\right)\)`],
dica:R`\(T=pV/R\) em cada extremo.`,
solucao:R`<p>\(T(0)=6p_0V_0/R\), \(T(L)=p_0V_0/R\). Linear: \(T=\dfrac{p_0V_0}R(6-5x/L)\).</p>`});

P({id:'te-2024-2', ano:2024, prova:'EUF 2024 · Q35 [tePT2a]', topicos:['gas'],
enunciado:R`<p>Uma bola de ferro cai de uma altura \(h\) sobre concreto e volta à altura \(h/2\). Se toda a energia mecânica perdida vira energia interna da bola (calor específico \(c_F\)), o aumento de temperatura é:</p>`,
opcoes:[R`\(\dfrac{gh}{2c_F}\)`,R`\(\dfrac{gh}{3c_F}\)`,R`\(\dfrac{2gh}{3c_F}\)`,R`\(\dfrac{c_F}{2gh}\)`,R`\(\dfrac{gh}{c_F}\)`],
dica:R`Energia perdida: \(mgh/2\).`,
solucao:R`<p>\(mc_F\Delta T=mgh/2\Rightarrow\Delta T=gh/2c_F\).</p>`});

P({id:'te-2024-3', ano:2024, prova:'EUF 2024 · Q37 [tePT3a]', topicos:['ciclo'],
enunciado:R`<p>O motor de um refrigerador fornece 100 W. O congelador está a 270 K e o ambiente a 300 K. Com coeficiente de desempenho ideal, qual o calor máximo extraído do congelador em 10 min?</p>`,
opcoes:[R`\(5{,}4\times10^5\) J`,R`\(2{,}6\times10^7\) J`,R`\(1{,}6\times10^5\) J`,R`\(2{,}7\times10^5\) J`,R`\(5{,}2\times10^6\) J`],
dica:R`\(K=T_f/(T_q-T_f)=9\).`,
solucao:R`<p>\(Q=KW=9\cdot100\cdot600=5{,}4\times10^5\) J.</p>`});

P({id:'te-2024-4', ano:2024, prova:'EUF 2024 · Q39 [tePT4a]', topicos:['entr'],
enunciado:R`<p>Duas porções de massa \(m\) de um líquido (calor específico \(c\)), a \(T\) e \(2T\), são misturadas num recipiente isolado. A variação de entropia é:</p>`,
opcoes:[R`\(mc\ln(9/8)\)`,R`0`,R`\(mc\ln(4/3)\)`,R`\(mc\ln(5/4)\)`,R`\(mc\ln2\)`],
dica:R`\(T_f=3T/2\).`,
solucao:R`<p>\(\Delta S=mc\left[\ln\tfrac32+\ln\tfrac34\right]=mc\ln\tfrac98>0\).</p>`});

P({id:'te-2024-5', ano:2024, prova:'EUF 2024 · Q73 [fePT1a]', topicos:['prob','ens'],
enunciado:R`<p>Um gás ideal de \(N\) partículas clássicas indistinguíveis ocupa \(V\) a \(T\). A probabilidade de encontrar \(N/3\) moléculas num volume \(V/3\) e as demais no restante é:</p>`,
opcoes:[R`\(\dfrac{N!}{(N/3)!\,(2N/3)!}\left(\dfrac13\right)^{N/3}\left(\dfrac23\right)^{2N/3}\)`,R`\(2/9\)`,R`\(\left(\dfrac13\right)^{N/3}\left(\dfrac23\right)^{2N/3}\)`,R`\(\dfrac{N!}{(N/3)!}\left(\dfrac13\right)^{N/3}\)`,R`\(\left(\dfrac13\right)^{N/3}\)`],
dica:R`Distribuição binomial: cada molécula está em \(V/3\) com probabilidade 1/3.`,
solucao:R`<p>Binomial com \(k=N/3\), \(p=1/3\). (É o valor mais provável; a probabilidade vai a zero como \(N^{-1/2}\), mas as flutuações relativas somem.)</p>`});

P({id:'te-2024-6', ano:2024, prova:'EUF 2024 · Q75 [fePT2a]', topicos:['ens','prob'],
enunciado:R`<p>Cinco partículas localizadas não interagentes a \(T\) têm \(n_i\in\{0,1\}\) e energia total \(\epsilon\sum n_i\). A probabilidade de a energia total ser maior ou igual a \(4\epsilon\) é:</p>`,
opcoes:[R`\(\dfrac{5e^{-4\beta\epsilon}+e^{-5\beta\epsilon}}{(1+e^{-\beta\epsilon})^5}\)`,R`\(\dfrac{10e^{-3\beta\epsilon}+5e^{-4\beta\epsilon}+e^{-5\beta\epsilon}}{(1+e^{-\beta\epsilon})^5}\)`,R`\(\dfrac{e^{-4\beta\epsilon}}{(1+e^{-\beta\epsilon})^5}\)`,R`\(4/5\)`,R`\(\dfrac{1+5e^{-\beta\epsilon}+10e^{-2\beta\epsilon}}{(1+e^{-\beta\epsilon})^5}\)`],
dica:R`\(Z=(1+e^{-\beta\epsilon})^5\); conte as configurações com 4 ou 5 excitadas.`,
solucao:R`<p>\(\binom54=5\) com energia \(4\epsilon\) e 1 com \(5\epsilon\).</p>`});

P({id:'te-2024-7', ano:2024, prova:'EUF 2024 · Q77 [fePT3a]', topicos:['qst','ens'],
enunciado:R`<p>Dois bósons idênticos de spin 0, não interagentes, podem ocupar dois níveis: 0 e \(\epsilon\). Em contato com um reservatório a \(T\), a energia média é:</p>`,
opcoes:[R`\(\dfrac{\epsilon(e^{-\beta\epsilon}+2e^{-2\beta\epsilon})}{1+e^{-\beta\epsilon}+e^{-2\beta\epsilon}}\)`,R`\(\dfrac{2\epsilon e^{-\beta\epsilon}}{1+e^{-\beta\epsilon}}\)`,R`\(\dfrac{\epsilon(e^{-\beta\epsilon}+e^{-2\beta\epsilon})}{1+e^{-\beta\epsilon}+e^{-2\beta\epsilon}}\)`,R`\(k_BT\)`,R`\(\dfrac{\epsilon(e^{-\beta\epsilon}+e^{-2\beta\epsilon})}{(1+e^{-\beta\epsilon})^2}\)`],
dica:R`Estados de dois bósons: ambos em 0; um em cada; ambos em \(\epsilon\). (Três estados, não quatro.)`,
solucao:R`<p>Energias 0, \(\epsilon\), \(2\epsilon\), cada uma com um único estado simétrico. \(U=\dfrac{\epsilon e^{-\beta\epsilon}+2\epsilon e^{-2\beta\epsilon}}{1+e^{-\beta\epsilon}+e^{-2\beta\epsilon}}\).</p>`});

P({id:'te-2024-8', ano:2024, prova:'EUF 2024 · Q79 [fePT4a]', topicos:['ens'],
enunciado:R`<p>\(N\) íons localizados a \(T\) têm \(\epsilon=-\mu_0hS_i\), \(S_i=\pm1\). O valor de \(\beta\mu_0h\) para o qual a magnetização por íon vale \(0{,}8\mu_0\) é:</p>`,
opcoes:[R`\(\tanh^{-1}(0{,}8)\)`,R`\(\sinh^{-1}(0{,}8)\)`,R`\(\cosh^{-1}(0{,}8)\)`,R`\(-\tanh^{-1}(0{,}8)\)`,R`\(-\sinh^{-1}(0{,}8)\)`],
dica:R`\(m=\mu_0\tanh(\beta\mu_0h)\).`,
solucao:R`<p>\(\tanh(\beta\mu_0h)=0{,}8\Rightarrow\beta\mu_0h=\tanh^{-1}0{,}8=\tfrac12\ln9\approx1{,}10\).</p>`});

// ============ 2024 — 2ª aplicação ============
P({id:'te-2024b-1', ano:2024, prova:'EUF 2º/2024 · Q33 [tePT1a]', topicos:['entr'],
enunciado:R`<p>Um mol de gás ideal (\(C_v\)) a \(T_0\) é posto em contato com um reservatório a \(T_R=T_0/2\); o conjunto está isolado e não há troca de matéria nem variação de volume. A variação total de entropia até o novo equilíbrio é:</p>`,
opcoes:[R`\(C_v(1-\ln2)\)`,R`\(C_v\)`,R`\(C_v\ln2\)`,R`\(C_v(1+\ln2)\)`,R`0`],
dica:R`Gás: \(C_v\ln(1/2)\). Reservatório: \(+C_v(T_0/2)/(T_0/2)=C_v\).`,
solucao:R`<p>\(\Delta S=-C_v\ln2+C_v=C_v(1-\ln2)\approx0{,}31C_v>0\).</p>`});

P({id:'te-2024b-2', ano:2024, prova:'EUF 2º/2024 · Q35 [tePT2a]', topicos:['gas'],
enunciado:R`<p>Um gás de van der Waals num recipiente adiabático (\(T_0\), volume molar \(v_0\)) tem \(u=RcT-a/v\). Ele sofre expansão livre até \(v_f=2v_0\). O trabalho realizado e a temperatura final são:</p>`,
opcoes:[R`\(W=0\) e \(T_f=T_0-\dfrac{a}{2v_0Rc}\)`,R`\(W=0\) e \(T_f=T_0+\dfrac{a}{2v_0Rc}\)`,R`\(W=RT\ln\dfrac{2v_0-b}{v_0-b}+\dfrac{a}{2v_0}\) e \(T_f=T_0\)`,R`\(W=0\) e \(T_f=T_0\)`,R`\(W=RT\ln\dfrac{2v_0-b}{v_0-b}+\dfrac a{2v_0}\) e \(T_f=T_0-\dfrac a{2v_0Rc}\)`],
dica:R`Expansão livre: \(W=0\), \(Q=0\) ⇒ \(u\) constante.`,
solucao:R`<p>\(RcT_0-\dfrac a{v_0}=RcT_f-\dfrac a{2v_0}\Rightarrow T_f=T_0-\dfrac a{2v_0Rc}\): o gás real esfria (a atração passa a ser vencida).</p>`});

P({id:'te-2024b-3', ano:2024, prova:'EUF 2º/2024 · Q37 [tePT3a]', topicos:['ciclo'], fig:'fig/te_b24_q37.png',
enunciado:R`<p>Um mol de gás ideal monoatômico percorre o ciclo A-B-C-A: A-B isocórico (\(V_0\), de \(P_0\) a \(2P_0\)), B-C isotérmico (até \(2V_0\)) e C-A isobárico (\(P_0\)). O trabalho realizado pelo gás no ciclo é:</p>`,
opcoes:[R`\(P_0V_0(\ln4-1)\)`,R`\(P_0V_0(\ln4+1)\)`,R`\(P_0V_0(\ln4-2)\)`,R`\(P_0V_0\)`,R`\(-P_0V_0\)`],
dica:R`\(W_{BC}=2P_0V_0\ln2\); \(W_{CA}=-P_0V_0\).`,
solucao:R`<p>\(W=2P_0V_0\ln2-P_0V_0=P_0V_0(\ln4-1)\approx0{,}39P_0V_0\).</p>`});

P({id:'te-2024b-4', ano:2024, prova:'EUF 2º/2024 · Q39 [tePT4a]', topicos:['potenc'],
enunciado:R`<p>Um gás sofre compressão adiabática quase-estática de \(P_0\) a \(P_f>P_0\). Sendo \(N\), \(V\) número de mols e volume, e \(S,U,F,H\) os potenciais, a quantidade que caracteriza a variação de temperatura nesse processo é:</p>`,
opcoes:[R`\(\left(\dfrac{\partial T}{\partial P}\right)_{S,N}\)`,R`\(\left(\dfrac{\partial T}{\partial P}\right)_{V,N}\)`,R`\(\left(\dfrac{\partial T}{\partial P}\right)_{U,N}\)`,R`\(\left(\dfrac{\partial T}{\partial P}\right)_{F,N}\)`,R`\(\left(\dfrac{\partial T}{\partial P}\right)_{H,N}\)`],
dica:R`Adiabático e reversível ⇒ isentrópico.`,
solucao:R`<p>\(S\) constante. (\((\partial T/\partial P)_H\) é o coeficiente de Joule–Thomson, de um processo de estrangulamento.)</p>`});

P({id:'te-2024b-5', ano:2024, prova:'EUF 2º/2024 · Q73 [fePT1a]', topicos:['prob'],
enunciado:R`<p>No ruído "flicker", uma armadilha alterna aleatoriamente entre \(I=0\) (elétron capturado) e \(I=1\) (emitido), com \(P(1)=q\). Para que a dispersão \(\sqrt{\langle I^2\rangle-\langle I\rangle^2}\) seja igual a \(\langle I\rangle\):</p>`,
opcoes:[R`\(q=1/2\)`,R`\(q=1/4\)`,R`\(q=2/3\)`,R`\(q=4/5\)`,R`\(q=1\)`],
dica:R`\(\langle I^k\rangle=q\) para qualquer \(k\ge1\).`,
solucao:R`<p>\(\sqrt{q-q^2}=q\Rightarrow q-q^2=q^2\Rightarrow q=1/2\).</p>`});

P({id:'te-2024b-6', ano:2024, prova:'EUF 2º/2024 · Q75 [fePT2a]', topicos:['ens'],
enunciado:R`<p>Numa estrela de hidrogênio a \(T\), \(E_n=-\alpha/n^2\) com degenerescência \(g_n=2n^2\). A razão entre o número de átomos em \(n=3\) e em \(n=1\) é:</p>`,
opcoes:[R`\(9e^{-8\alpha/9k_BT}\)`,R`\(3e^{-4\alpha/5k_BT}\)`,R`\(6e^{-2\alpha/9k_BT}\)`,R`\(4e^{-\alpha/2k_BT}\)`,R`\(2e^{-8\alpha/3k_BT}\)`],
dica:R`\(\dfrac{g_3}{g_1}e^{-(E_3-E_1)/k_BT}\).`,
solucao:R`<p>\(g_3/g_1=9\); \(E_3-E_1=\alpha(1-\tfrac19)=\tfrac89\alpha\).</p>`});

P({id:'te-2024b-7', ano:2024, prova:'EUF 2º/2024 · Q77 [fePT3a]', topicos:['qst','ens'],
enunciado:R`<p>Dois átomos, cada um com três estados de energias 0, \(\varepsilon\), \(2\varepsilon\), são férmions sem spin, a \(T\). A função de partição canônica é:</p>`,
opcoes:[R`\(e^{-\beta\varepsilon}+e^{-2\beta\varepsilon}+e^{-3\beta\varepsilon}\)`,R`\(1+e^{-\beta\varepsilon}+e^{-2\beta\varepsilon}\)`,R`\(e^{-\beta\varepsilon}+e^{-2\beta\varepsilon}\)`,R`\(1+e^{-2\beta\varepsilon}+e^{-3\beta\varepsilon}\)`,R`\(1+e^{-\beta\varepsilon}\)`],
dica:R`Pauli: os dois não podem estar no mesmo estado.`,
solucao:R`<p>Pares: \((0,\varepsilon)\to\varepsilon\), \((0,2\varepsilon)\to2\varepsilon\), \((\varepsilon,2\varepsilon)\to3\varepsilon\).</p>`});

P({id:'te-2024b-8', ano:2024, prova:'EUF 2º/2024 · Q79 [fePT4a]', topicos:['ens'],
enunciado:R`<p>A atmosfera é tratada como gás ideal isotérmico a \(T\), com \(U=mgz\) (Terra plana, \(g\) constante). A altura média das partículas é:</p>`,
opcoes:[R`\(\dfrac{k_BT}{mg}\)`,R`\(\dfrac{k_BT}{2mg}\)`,R`\(\dfrac{3k_BT}{mg}\)`,R`\(\dfrac{3k_BT}{2mg}\)`,R`0`],
dica:R`\(P(z)\propto e^{-mgz/k_BT}\).`,
solucao:R`<p>\(\langle z\rangle=\dfrac{\int ze^{-az}}{\int e^{-az}}=\dfrac1a=\dfrac{k_BT}{mg}\) (≈ 9 km para N₂ a 300 K).</p>`});

// ============ 2025 — 1ª aplicação ============
P({id:'te-2025-1', ano:2025, prova:'EUF 2025 · Q33 [tePT1a]', topicos:['gas'],
enunciado:R`<p>Um gás ideal vai de um estado de equilíbrio a até b por três processos: expansão isotérmica, expansão adiabática e expansão livre. Sobre o calor \(Q\), a variação de energia interna \(U\) e o trabalho \(W\) de a → b:</p><p>I. \(Q=0\) na expansão isotérmica.<br>II. \(\Delta U=0\) na expansão adiabática.<br>III. \(W=0\) na expansão livre.<br>IV. \(\Delta U=0\) nas expansões isotérmica e livre.</p>`,
opcoes:[R`Somente III e IV.`,R`Somente I e II.`,R`Somente II e III.`,R`Somente I e IV.`,R`Somente I, II e III.`],
dica:R`Gás ideal: \(U=U(T)\).`,
solucao:R`<p>I: na isotérmica \(Q=W\ne0\). II: na adiabática \(\Delta U=-W\ne0\). III: verdadeira. IV: na isotérmica \(T\) é constante e, na livre de gás ideal, também.</p>`});

P({id:'te-2025-2', ano:2025, prova:'EUF 2025 · Q35 [tePT2a]', topicos:['gas'],
enunciado:R`<p>Dois corpos idênticos com capacidade térmica \(C_v=BT\) (\(B>0\)), a \(T_0\) e \(2T_0\), são postos em contato num sistema isolado (volume constante). A temperatura de equilíbrio é:</p>`,
opcoes:[R`\(\sqrt{5/2}\,T_0\)`,R`\(3T_0/2\)`,R`\(\sqrt2T_0/2\)`,R`\(T_0\)`,R`0`],
dica:R`\(Q=\int BT\,dT=\tfrac B2\Delta(T^2)\).`,
solucao:R`<p>\(T_{eq}^2-T_0^2=4T_0^2-T_{eq}^2\Rightarrow T_{eq}=\sqrt{5/2}\,T_0\approx1{,}58T_0\), um pouco acima da média aritmética, porque o corpo quente tem mais capacidade térmica.</p>`});

P({id:'te-2025-3', ano:2025, prova:'EUF 2025 · Q37 [tePT3a]', topicos:['ciclo'], fig:'fig/te_y25_q37.png',
enunciado:R`<p>Um mol de gás ideal monoatômico percorre A-B-C-A: A-B isocórica (\(V_0\), de \(P_0\) a \(rP_0\)), B-C adiabática e C-A isobárica (\(P_0\)). O volume \(V_c\) e o trabalho do gás na etapa C-A valem:</p>`,
opcoes:[R`\(V_0r^{3/5}\) e \(P_0V_0(1-r^{3/5})\)`,R`\(V_0r\) e \(P_0V_0(1-r)\)`,R`\(V_0r^{2/3}\) e \(P_0V_0(1-r^{2/3})\)`,R`\(2V_0\) e \(-P_0V_0\)`,R`\(V_0r\) e \(P_0V_0\)`],
dica:R`\(PV^{5/3}\) constante em B-C.`,
solucao:R`<p>\(rP_0V_0^{5/3}=P_0V_c^{5/3}\Rightarrow V_c=V_0r^{3/5}\). \(W_{CA}=P_0(V_0-V_c)=P_0V_0(1-r^{3/5})\lt0\) (compressão).</p>`});

P({id:'te-2025-4', ano:2025, prova:'EUF 2025 · Q39 [tePT4a]', topicos:['entr'],
enunciado:R`<p>Dois subsistemas de mesmo volume, cada um com o mesmo número de mols de gás ideal (capacidade \(C_v\)), a \(T_0\) e \(4T_0\), passam a trocar calor por uma parede diatérmica. A variação total de entropia é:</p>`,
opcoes:[R`\(C_v\ln(25/16)\)`,R`0`,R`\(C_v\ln2\)`,R`\(C_v\ln(5/2)\)`,R`\(C_v\ln(5/4)\)`],
dica:R`\(T_f=5T_0/2\).`,
solucao:R`<p>\(\Delta S=C_v\left[\ln\tfrac52+\ln\tfrac58\right]=C_v\ln\tfrac{25}{16}\).</p>`});

P({id:'te-2025-5', ano:2025, prova:'EUF 2025 · Q73 [fePT1a]', topicos:['ens','entr'],
enunciado:R`<p>\(N\) partículas fracamente interagentes (Maxwell–Boltzmann) têm 5 níveis não degenerados: \(-2E,-E,0,E,2E\), a \(T\). A energia média por partícula quando \(T\to0\), a entropia quando \(T\to0\) e a entropia quando \(T\to\infty\) são:</p>`,
opcoes:[R`\(-2E\), 0 e \(Nk_B\ln5\)`,R`0, \(3Nk_B\) e \(5Nk_B\)`,R`\(-2E\), \(Nk_B\) e \(3Nk_B\)`,R`0, \(3Nk_B\ln5\) e \(Nk_B\ln5\)`,R`\(-2E\), 0 e \(Nk_B\ln3\)`],
dica:R`\(T\to0\): todos no fundamental. \(T\to\infty\): os 5 níveis igualmente prováveis.`,
solucao:R`<p>\(T\to0\): \(\langle\varepsilon\rangle=-2E\) e \(S=0\). \(T\to\infty\): \(S=Nk_B\ln5\).</p>`});

P({id:'te-2025-6', ano:2025, prova:'EUF 2025 · Q75 [fePT2a]', topicos:['prob'], fig:'fig/te_y25_q75.png',
enunciado:R`<p>Uma partícula vai de A até B num reticulado 3×3 (figura), só para a direita ou para cima: 4 saltos (2 para a direita, 2 para cima). Todas as trajetórias compatíveis são igualmente prováveis. Qual a probabilidade de o trajeto passar pelo ponto C (centro)?</p>`,
opcoes:[R`2/3`,R`1/3`,R`1/2`,R`1`,R`1/5`],
dica:R`Total: \(\binom42=6\). Pelo centro: \(\binom21\times\binom21\).`,
solucao:R`<p>\(4/6=2/3\).</p>`});

P({id:'te-2025-7', ano:2025, prova:'EUF 2025 · Q77 [fePT3a]', topicos:['ens'],
enunciado:R`<p>Dois spins de Ising (\(s_i=\pm1\)) com \(H=-Js_1s_2\), \(J>0\), estão a \(T\). A probabilidade do estado \((+1,+1)\) é:</p>`,
opcoes:[R`\(\dfrac{e^{\beta J}}{2(e^{\beta J}+e^{-\beta J})}\)`,R`\(\dfrac{e^{-\beta J}}{e^{\beta J}+e^{-\beta J}}\)`,R`\(\dfrac{e^{\beta J}}{2e^{-\beta J}}\)`,R`\(\dfrac{2e^{-\beta J}}{e^{\beta J}+e^{-\beta J}}\)`,R`\(\dfrac{e^{-\beta J}}{2(e^{\beta J}+e^{-\beta J})}\)`],
dica:R`\(Z=2e^{\beta J}+2e^{-\beta J}\).`,
solucao:R`<p>\(P_{++}=e^{\beta J}/Z\).</p>`});

P({id:'te-2025-8', ano:2025, prova:'EUF 2025 · Q79 [fePT4a]', topicos:['entr','ens'],
enunciado:R`<p>Uma coleção de \(n\) sistemas distinguíveis de dois níveis tem \(n_1\) partículas em \(\varepsilon_1\) e \(n_2\) em \(\varepsilon_2\). Numa única emissão, passa a \(n_1+1\) e \(n_2-1\). A variação da entropia microcanônica é:</p>`,
opcoes:[R`\(k_B\ln\dfrac{n_2}{n_1+1}\)`,R`\(k_B\)`,R`\(k_B\ln2\)`,R`\(k_B\ln\dfrac{n_2}{n_1}\)`,R`\(k_B\ln\dfrac{n_1}{n_2+1}\)`],
dica:R`\(\Omega=\dfrac{n!}{n_1!\,n_2!}\).`,
solucao:R`<p>\(\Delta S=k_B\ln\dfrac{n_1!\,n_2!}{(n_1+1)!\,(n_2-1)!}=k_B\ln\dfrac{n_2}{n_1+1}\).</p>`});

// ============ 2025 — 2ª aplicação ============
P({id:'te-2025b-1', ano:2025, prova:'EUF 2º/2025 · Q33 [tePT1a]', topicos:['gas'],
enunciado:R`<p>Um cilindro com pistão interno tem 1 mol de gás monoatômico ideal em cada lado; as paredes são diatérmicas, em banho a 0 °C. Os volumes passam reversivelmente de 12 L e 2 L para 8 L e 6 L. O trabalho realizado (pelos gases) vale:</p>`,
opcoes:[R`\(273R\ln2\)`,R`\(273R\ln3\)`,R`\(273R\ln(5/2)\)`,R`0`,R`\(273R\ln(3/2)\)`],
dica:R`Isotérmico: \(W_i=RT\ln(V_f/V_i)\) para cada lado.`,
solucao:R`<p>\(W=RT\left[\ln\tfrac8{12}+\ln\tfrac62\right]=RT\ln2\), com \(T=273\) K.</p>`});

P({id:'te-2025b-2', ano:2025, prova:'EUF 2º/2025 · Q35 [tePT2a]', topicos:['potenc'],
enunciado:R`<p>A estabilidade termodinâmica exige \(\left(\dfrac{\partial^2f}{\partial T^2}\right)_v\le0\) e \(\left(\dfrac{\partial^2f}{\partial v^2}\right)_T\ge0\), com \(f(T,v)\) a energia livre de Helmholtz por partícula. Com \(c_v=T(\partial s/\partial T)_v\) e \(\kappa_T=-\frac1v(\partial v/\partial p)_T\):</p>`,
opcoes:[R`\(c_v\ge0\) e \(\kappa_T\ge0\)`,R`\(c_v\le0\) e \(\kappa_T\ge0\)`,R`\(c_v\le0\) e \(\kappa_T\le0\)`,R`\(c_v\ge0\) e \(\kappa_T\le0\)`,R`\(c_v=0\) e \(\kappa_T=0\)`],
dica:R`\(s=-\partial_Tf\), \(p=-\partial_vf\).`,
solucao:R`<p>\(c_v=-T\partial_T^2f\ge0\). \(\partial_v^2f=-(\partial p/\partial v)_T=\dfrac1{v\kappa_T}\ge0\Rightarrow\kappa_T\ge0\).</p>`});

P({id:'te-2025b-3', ano:2025, prova:'EUF 2º/2025 · Q37 [tePT3a]', topicos:['gas'],
enunciado:R`<p>Um sistema isolado tem duas partes separadas por parede fixa e impermeável, com \(U_1=\tfrac32RN_1T_1\) e \(U_2=\tfrac52RN_2T_2\). A parede passa a ser diatérmica. Com energia total 2100 J, \(N_1=2\) mol e \(N_2=3\) mol, as energias no equilíbrio são:</p>`,
opcoes:[R`\(U_1=600\) J e \(U_2=1500\) J`,R`\(U_1=U_2=1100\) J`,R`\(U_1=1500\) J e \(U_2=600\) J`,R`\(U_1=900\) J e \(U_2=1200\) J`,R`\(U_1=U_2=600\) J`],
dica:R`Mesma \(T\): \(U_1/U_2=\dfrac{3N_1}{5N_2}\).`,
solucao:R`<p>\(U_1:U_2=6:15\Rightarrow U_1=2100\cdot\tfrac6{21}=600\) J, \(U_2=1500\) J.</p>`});

P({id:'te-2025b-4', ano:2025, prova:'EUF 2º/2025 · Q39 [tePT4a]', topicos:['entr'],
enunciado:R`<p>Dois corpos idênticos com capacidade \(C_v\), a \(T_0\) e \(2T_0\), atingem o equilíbrio num sistema isolado. A variação total de entropia é:</p>`,
opcoes:[R`\(C_v\ln(9/8)\)`,R`\(C_v\ln2\)`,R`0`,R`\(C_v\ln(3/4)\)`,R`\(C_v\ln(4/3)\)`],
dica:R`\(T_f=3T_0/2\).`,
solucao:R`<p>\(\Delta S=C_v\ln\left(\dfrac{(3/2)^2}{2}\right)=C_v\ln\tfrac98\).</p>`});

P({id:'te-2025b-5', ano:2025, prova:'EUF 2º/2025 · Q73 [fePT1a]', topicos:['ens'],
enunciado:R`<p>\(N\) partículas não interagentes a \(T\) têm um nível fundamental 0 (não degenerado) e um excitado \(\varepsilon\) triplamente degenerado. A energia média por partícula é:</p>`,
opcoes:[R`\(\dfrac{3\varepsilon e^{-\beta\varepsilon}}{1+3e^{-\beta\varepsilon}}\)`,R`\(3\varepsilon\)`,R`\(\dfrac{3\varepsilon e^{-\beta\varepsilon}}{1+e^{-\beta\varepsilon}}\)`,R`\(\dfrac{\varepsilon e^{-\beta\varepsilon}}{1+3e^{-\beta\varepsilon}}\)`,R`\(\varepsilon\)`],
dica:R`\(z=1+3e^{-\beta\varepsilon}\).`,
solucao:R`<p>\(\langle\varepsilon\rangle=\dfrac{3\varepsilon e^{-\beta\varepsilon}}{1+3e^{-\beta\varepsilon}}\to\tfrac34\varepsilon\) quando \(T\to\infty\).</p>`});

P({id:'te-2025b-6', ano:2025, prova:'EUF 2º/2025 · Q75 [fePT2a]', topicos:['entr','prob'],
enunciado:R`<p>Dois sistemas isolados têm \(\Omega_A=10^3\) e \(\Omega_B=10^2\) microestados. Combinados, sem interação, com microestados igualmente prováveis, a entropia total e a probabilidade de cada microestado são:</p>`,
opcoes:[R`\(5k_B\ln10\) e \(10^{-5}\)`,R`\(6k_B\ln10\) e \(10^{-5}\)`,R`\(k_B\ln6\) e \(10^{-2}\)`,R`\(5k_B\ln10\) e \(10^{-2}\)`,R`\(6k_B\ln10\) e \(10^{-2}\)`],
dica:R`\(\Omega_{A+B}=\Omega_A\Omega_B\).`,
solucao:R`<p>\(\Omega=10^5\): \(S=5k_B\ln10\) (entropia aditiva) e \(p=10^{-5}\).</p>`});

P({id:'te-2025b-7', ano:2025, prova:'EUF 2º/2025 · Q77 [fePT3a]', topicos:['prob'],
enunciado:R`<p>Osciladores clássicos \(x(t)=A\cos(\omega t+\varphi)\), com mesmos \(A\) e \(\omega\) e fases uniformemente distribuídas em \([0,2\pi)\). Num instante qualquer, a variância da posição é:</p>`,
opcoes:[R`\(A^2/2\)`,R`\(A^2/4\)`,R`\(A^2\)`,R`\(4A^2\)`,R`0`],
dica:R`Média de \(\cos\) é 0; média de \(\cos^2\) é 1/2.`,
solucao:R`<p>\(\langle x\rangle=0\), \(\langle x^2\rangle=A^2/2\).</p>`});

P({id:'te-2025b-8', ano:2025, prova:'EUF 2º/2025 · Q79 [fePT4a]', topicos:['ens'],
enunciado:R`<p>No modelo de Blume–Capel para dois átomos, \(H=-Js_1s_2+D(s_1^2+s_2^2)\), \(s_i=0,\pm1\), \(J>0\), \(D>0\). Se \(D\lt J/2\), o estado fundamental é:</p>`,
opcoes:[R`\(s_1=s_2=\pm1\)`,R`\(s_1=-s_2\), \(s_2=\pm1\)`,R`\(s_1=s_2=0\)`,R`\(s_1=0\), \(s_2=\pm1\)`,R`\(s_2=0\), \(s_1=\pm1\)`],
dica:R`Compare \(-J+2D\) (alinhados) com 0 (ambos nulos) e \(D\) (um nulo).`,
solucao:R`<p>Alinhados: \(-J+2D\lt0\) se \(D\lt J/2\), menor que 0 e que \(D\). Logo \(s_1=s_2=\pm1\) (duas vezes degenerado).</p>`});

// ============ 2026 ============
P({id:'te-2026-1', ano:2026, prova:'EUF 2026 · Q35 [tePT2a]', topicos:['potenc','entr'],
enunciado:R`<p>Um sistema tem as equações de estado \(T=\dfrac1A\left(\dfrac{U^2}{VN}\right)^{1/3}\) e \(p=AT\left(\dfrac{UN}{V^2}\right)^{1/3}\), com \(A>0\). A entropia \(S(U,V,N)\) é:</p>`,
opcoes:[R`\(3A(UVN)^{1/3}\)`,R`\(3A(U^2N/V)^{1/2}\)`,R`\(2A(UV)^{1/2}\)`,R`\(3A(UN/V)\)`,R`\(3A(U^2VN)^{1/4}\)`],
dica:R`\(\dfrac1T=\left(\dfrac{\partial S}{\partial U}\right)_{V,N}\) e \(\dfrac pT=\left(\dfrac{\partial S}{\partial V}\right)_{U,N}\).`,
solucao:R`<p>\(\partial_U[3A(UVN)^{1/3}]=A(VN)^{1/3}U^{-2/3}=1/T\) ✓. \(\partial_V=A(UN)^{1/3}V^{-2/3}=p/T\) ✓. Além disso, \(S\) é homogênea de grau 1, como deve ser.</p><p>(A Q33 desta prova foi anulada e não está no banco.)</p>`});

P({id:'te-2026-2', ano:2026, prova:'EUF 2026 · Q37 [tePT3a]', topicos:['ciclo'], fig:'fig/te_y26_q37.png',
enunciado:R`<p>Um mol de gás ideal monoatômico percorre o retângulo A-B-C-D-A: A \((V_0,P_0)\), B \((V_0,3P_0)\), C \((3V_0,3P_0)\), D \((3V_0,P_0)\); A-B e C-D isocóricas, B-C e D-A isobáricas. O sentido do ciclo para operar como máquina térmica e o calor recebido da fonte quente por ciclo são:</p>`,
opcoes:[R`horário e \(18P_0V_0\)`,R`anti-horário e \(18P_0V_0\)`,R`horário e \(6P_0V_0\)`,R`anti-horário e \(6P_0V_0\)`,R`horário e \(12P_0V_0\)`],
dica:R`Máquina térmica: sentido horário no \(P\)–\(V\). Calor entra em A→B e B→C.`,
solucao:R`<p>\(Q_{AB}=\tfrac32V_0(2P_0)=3P_0V_0\); \(Q_{BC}=\tfrac52(3P_0)(2V_0)=15P_0V_0\). Total \(18P_0V_0\) (trabalho \(4P_0V_0\), rendimento 22%).</p>`});

P({id:'te-2026-3', ano:2026, prova:'EUF 2026 · Q39 [tePT4a]', topicos:['gas','entr'],
enunciado:R`<p>Duas partes de gás ideal (\(U_i=\tfrac32Rn_iT_i\), \(p_i=n_iRT_i/V_i\)), separadas por parede adiabática, impermeável e fixa, num sistema isolado. A parede passa a ser diatérmica e móvel. Com \(n_1=2n_2\), no novo equilíbrio:</p>`,
opcoes:[R`\(T_1=T_2\) e \(V_1=2V_2\)`,R`\(T_1=2T_2\) e \(V_1=2V_2\)`,R`\(T_1=2T_2\) e \(V_1=V_2\)`,R`\(T_1=3T_2\) e \(V_2=2V_1\)`,R`\(T_1=T_2\) e \(V_1=V_2\)`],
dica:R`Diatérmica ⇒ mesma \(T\); móvel ⇒ mesma \(p\).`,
solucao:R`<p>Mesmas \(T\) e \(p\) ⇒ \(V_i\propto n_i\): \(V_1=2V_2\).</p>`});

P({id:'te-2026-4', ano:2026, prova:'EUF 2026 · Q75 [fePT2a]', topicos:['ens'],
enunciado:R`<p>Uma superfície tem \(M\) sítios adsorvedores independentes; cada sítio pode estar vazio, ou ocupado por uma molécula do tipo 1 (energia \(-\varepsilon_1\)) ou do tipo 2 (\(-\varepsilon_2\)), sem dupla ocupação, em contato com reservatórios de potenciais \(\mu_1\), \(\mu_2\) a \(T\). O número médio de moléculas do tipo 1 adsorvidas é:</p>`,
opcoes:[R`\(\dfrac{Me^{\beta(\mu_1+\varepsilon_1)}}{1+e^{\beta(\mu_1+\varepsilon_1)}+e^{\beta(\mu_2+\varepsilon_2)}}\)`,R`\(M/2\)`,R`\(\dfrac{Me^{\beta(\mu_2+\varepsilon_2)}}{1+e^{\beta(\mu_1+\varepsilon_1)}+e^{\beta(\mu_2+\varepsilon_2)}}\)`,R`\(M\)`,R`\(\dfrac{M}{1+e^{\beta(\mu_1+\varepsilon_1)}+e^{\beta(\mu_2+\varepsilon_2)}}\)`],
dica:R`Grande função de partição por sítio: \(\xi=1+e^{\beta(\mu_1+\varepsilon_1)}+e^{\beta(\mu_2+\varepsilon_2)}\).`,
solucao:R`<p>A probabilidade de um sítio ter a molécula 1 é \(e^{\beta(\mu_1+\varepsilon_1)}/\xi\); multiplica-se por \(M\) (adsorção de Langmuir competitiva).</p>`});

P({id:'te-2026-5', ano:2026, prova:'EUF 2026 · Q77 [fePT3a]', topicos:['entr','ens'],
enunciado:R`<p>Um sistema isolado (microcanônico) tem subsistemas A e B fracamente acoplados, \(E=E_A+E_B\) fixa, com \(\Omega_A=C_AE_A^\alpha\) e \(\Omega_B=C_BE_B^\beta\). No equilíbrio, \(E_A/E\) é:</p>`,
opcoes:[R`\(\alpha/(\alpha+\beta)\)`,R`\(\alpha/\beta\)`,R`\(\beta/(\alpha+\beta)\)`,R`\(\beta/\alpha\)`,R`\(2\alpha/\beta\)`],
dica:R`Maximize \(\ln\Omega_A+\ln\Omega_B\) com \(E_B=E-E_A\).`,
solucao:R`<p>\(\dfrac\alpha{E_A}=\dfrac\beta{E-E_A}\Rightarrow E_A=\dfrac{\alpha}{\alpha+\beta}E\) (igualdade de temperaturas: equipartição generalizada).</p>`});

P({id:'te-2026-6', ano:2026, prova:'EUF 2026 · Q79 [fePT4a]', topicos:['ens'],
enunciado:R`<p>Um sistema canônico a \(T\) tem nível fundamental 0 (\(g_0=1\)) e excitado \(\varepsilon\) (\(g_1=3\)). Assinale a correta:</p>`,
opcoes:[R`A probabilidade de estar no nível excitado é \(3e^{-\beta\varepsilon}/(1+3e^{-\beta\varepsilon})\).`,R`\(Z=3+e^{-\beta\varepsilon}\).`,R`Para \(T\to0\), as probabilidades dos níveis são iguais, devido à degenerescência.`,R`Para \(T\to\infty\), a probabilidade do nível excitado tende a 1/2.`,R`A energia média é sempre \(\varepsilon/3\).`],
dica:R`\(Z=1+3e^{-\beta\varepsilon}\).`,
solucao:R`<p>Direto de \(Z\). Para \(T\to\infty\) a probabilidade do excitado tende a 3/4, e para \(T\to0\) a zero.</p>`});

P({id:'te-2026-7', ano:2026, prova:'EUF 2026 · Q73 [fePT1a]', topicos:['prob'],
enunciado:R`<p>Dois compartimentos A e B têm, ao todo, \(N\) bolas idênticas, inicialmente todas em A. A cada passo, escolhe-se uma bola ao acaso entre as \(N\) e ela muda de compartimento. Seja \(n\) o número de bolas em A. No regime estacionário (após muitos passos):</p>`,
opcoes:[R`\(\langle n\rangle=N/2\) e a distribuição de \(n\) é binomial.`,R`\(\langle n\rangle\) decresce linearmente com o tempo.`,R`Todos os valores de \(n\) entre 0 e \(N\) são igualmente prováveis.`,R`Os estados mais prováveis são \(n=0\) e \(n=N\).`,R`\(\langle n\rangle\) cresce linearmente com o tempo.`],
dica:R`É o modelo das urnas de Ehrenfest.`,
solucao:R`<p>No estacionário cada bola está em A ou B com probabilidade 1/2, independentemente: \(P(n)=\binom Nn2^{-N}\), com \(\langle n\rangle=N/2\). (A aproximação de \(N/2\) é exponencial, não linear.)</p>`});

})();
