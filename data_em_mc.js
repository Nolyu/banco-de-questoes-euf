window.BANK = window.BANK || [];
(function(){
const P = q => window.BANK.push(Object.assign({area:'em', tipo:'mc'}, q));
const R = String.raw;
// Primeira alternativa = correta (a página embaralha).

// ============ 2º/2020 — online ============
P({id:'em-2020o-1', ano:2020, prova:'EUF 2º/2020 (online) · Q1', topicos:['eletrost'],
enunciado:R`<p>Um isolante cilíndrico infinitamente longo de raio \(R\) tem densidade de carga uniforme \(\rho\). Os campos elétricos para \(r\lt R\) e \(r>R\) são:</p>`,
opcoes:[R`\(\dfrac{\rho r}{2\epsilon_0}\hat r\) e \(\dfrac{\rho R^2}{2\epsilon_0r}\hat r\)`,R`\(\dfrac{\rho r}{\epsilon_0}\hat r\) e \(\dfrac{\rho R^2}{\epsilon_0r}\hat r\)`,R`\(\dfrac{\rho r}{\epsilon_0}\hat r\) e \(\dfrac{\rho R^3}{\epsilon_0r^2}\hat r\)`,R`\(\dfrac{\rho r}{2\epsilon_0}\hat r\) e \(\dfrac{2\rho R^2}{\epsilon_0r}\hat r\)`,R`\(\dfrac{\rho r^2}{\epsilon_0R}\hat r\) e \(\dfrac{\rho R^3}{\epsilon_0r^2}\hat r\)`],
dica:R`Gauss com cilindro de raio \(r\) e comprimento \(L\).`,
solucao:R`<p>Dentro: \(E\,2\pi rL=\rho\pi r^2L/\epsilon_0\Rightarrow E=\rho r/2\epsilon_0\). Fora: \(E=\rho R^2/2\epsilon_0r\).</p>`});

P({id:'em-2020o-2', ano:2020, prova:'EUF 2º/2020 (online) · Q2', topicos:['circ'],
enunciado:R`<p>Um capacitor com carga \(Q_0\) e energia \(U_0\) descarrega num resistor \(R\) (\(\tau=RC\)). Em que instantes \(t_Q\) e \(t_U\) ele terá, respectivamente, um terço da carga e um terço da energia?</p>`,
opcoes:[R`\(t_Q=\tau\ln3\) e \(t_U=\tfrac{\ln3}2\tau\)`,R`\(t_Q=3\tau\) e \(t_U=\tfrac{\ln3}2\tau\)`,R`\(t_Q=e\tau\) e \(t_U=3\tau\)`,R`\(t_Q=\tau\ln3\) e \(t_U=\tau\ln3\)`,R`\(t_Q=e\tau\) e \(t_U=\tau\ln3\)`],
dica:R`\(Q\propto e^{-t/\tau}\), \(U\propto e^{-2t/\tau}\).`,
solucao:R`<p>\(e^{-t_Q/\tau}=1/3\Rightarrow t_Q=\tau\ln3\); \(e^{-2t_U/\tau}=1/3\Rightarrow t_U=\tfrac{\tau}2\ln3\).</p>`});

P({id:'em-2020o-3', ano:2020, prova:'EUF 2º/2020 (online) · Q3', topicos:['induc'],
enunciado:R`<p>Um solenoide longo (\(n\) voltas por comprimento) conduz \(i=i_0\cos\omega t\). Em seu interior há uma espira de área \(A\), coaxial. A fem induzida na espira é:</p>`,
opcoes:[R`\(A\omega\mu_0i_0n\sin\omega t\)`,R`\(A\omega\mu_0i_0n\cos\omega t\)`,R`\(A\omega\mu_0i_0n^2\sin\omega t\)`,R`\(A\omega\mu_0i_0n^2\cos\omega t\)`,R`\(A\omega\mu_0i_0n\cos^2\omega t\)`],
dica:R`\(\Phi=\mu_0niA\).`,
solucao:R`<p>\(\mathcal E=-\dot\Phi=\mu_0nA\,i_0\omega\sin\omega t\).</p>`});

P({id:'em-2020o-4', ano:2020, prova:'EUF 2º/2020 (online) · Q4', topicos:['eletrost','pot'],
enunciado:R`<p>Uma esfera não condutora de raio \(a\) tem \(\rho(r)=\rho_0(1-r/a)\). O campo no interior e o potencial no centro (tomando \(V(\infty)=0\)) são:</p>`,
opcoes:[R`\(\vec E=\dfrac{\rho_0}{\epsilon_0}\left(\dfrac r3-\dfrac{r^2}{4a}\right)\hat r\) e \(V(0)=\dfrac{\rho_0}{\epsilon_0}\dfrac{a^2}6\)`,R`\(\vec E=-\dfrac{\rho_0}{\epsilon_0}\dfrac{r^2}{4a}\hat r\) e \(V(0)=\dfrac{\rho_0}{\epsilon_0}\dfrac{a^2}6\)`,R`\(\vec E=\dfrac{\rho_0}{\epsilon_0}\dfrac{r^3}{2a^2}\hat r\) e \(V(0)=-\dfrac{\rho_0}{\epsilon_0}\dfrac{a^3}{3R}\)`,R`\(\vec E=\dfrac{\rho_0}{\epsilon_0}\dfrac{r^3}{2a^2}\hat r\) e \(V(0)=\dfrac{\rho_0}{\epsilon_0}\dfrac{a^3}{3R}\)`,R`\(\vec E=\dfrac{\rho_0}{\epsilon_0}\left(\dfrac r3-\dfrac{r^2}{4a}\right)\hat r\) e \(V(0)=-\dfrac{\rho_0}{\epsilon_0}\dfrac{a^2}6\)`],
dica:R`\(Q(r)=4\pi\rho_0\left(\dfrac{r^3}3-\dfrac{r^4}{4a}\right)\). Fora, \(Q=\pi\rho_0a^3/3\).`,
solucao:R`<p>\(E=\dfrac{Q(r)}{4\pi\epsilon_0r^2}=\dfrac{\rho_0}{\epsilon_0}\left(\dfrac r3-\dfrac{r^2}{4a}\right)\). \(V(a)=\dfrac{Q}{4\pi\epsilon_0a}=\dfrac{\rho_0a^2}{12\epsilon_0}\); \(V(0)=V(a)+\displaystyle\int_0^aE\,dr=\frac{\rho_0a^2}{\epsilon_0}\left(\frac1{12}+\frac16-\frac1{12}\right)=\frac{\rho_0a^2}{6\epsilon_0}\).</p>`});

P({id:'em-2020o-5', ano:2020, prova:'EUF 2º/2020 (online) · Q5', topicos:['cond'],
enunciado:R`<p>Um condutor neutro é posto em contato com um segundo condutor, de carga \(Q\) e potencial \(V\). Após o contato, o primeiro adquire carga \(q\). A capacitância do primeiro condutor é:</p>`,
opcoes:[R`\(\left(\dfrac q{Q-q}\right)\dfrac QV\)`,R`\(\left(\dfrac q{Q+q}\right)\dfrac qV\)`,R`\(\left(\dfrac{Q+q}{q-Q}\right)\dfrac QV\)`,R`\(\left(\dfrac Q{Q+q}\right)\dfrac qV\)`,R`\(\left(\dfrac{Q-q}q\right)\dfrac qV\)`],
dica:R`\(C_2=Q/V\). Depois do contato, mesmo potencial: \(q/C_1=(Q-q)/C_2\).`,
solucao:R`<p>\(C_1=C_2\dfrac{q}{Q-q}=\dfrac QV\dfrac q{Q-q}\) (supondo condutores afastados, sem influência mútua).</p>`});

P({id:'em-2020o-6', ano:2020, prova:'EUF 2º/2020 (online) · Q6', topicos:['pot'],
enunciado:R`<p>Uma placa condutora infinita aterrada está no plano \(yz\). Uma carga \(Q\) está em \(r\hat x\) (\(r>0\)). A força sobre a carga é:</p>`,
opcoes:[R`\(-\dfrac{Q^2}{16\pi\epsilon_0r^2}\hat x\)`,R`\(\dfrac{Q^2}{16\pi\epsilon_0r^2}\hat x\)`,R`\(\dfrac{Q^2}{4\pi\epsilon_0r^2}\hat x\)`,R`\(-\dfrac{Q^2}{4\pi\epsilon_0r^2}\hat x\)`,R`0, pois a placa está aterrada.`],
dica:R`Carga imagem \(-Q\) em \(-r\hat x\).`,
solucao:R`<p>Distância \(2r\): \(F=-\dfrac{Q^2}{4\pi\epsilon_0(2r)^2}\hat x\), atrativa.</p>`});

P({id:'em-2020o-7', ano:2020, prova:'EUF 2º/2020 (online) · Q7', topicos:['pot'], fig:'fig/em_o20_q7.png',
enunciado:R`<p>Um cilindro condutor oco, fino e longo, de raio \(R\), é dividido em duas metades (esquerda a \(V_1=\bar V+\tfrac12\delta V\), direita a \(V_2=\bar V-\tfrac12\delta V\), \(\delta V>0\)). O potencial interno é \(\bar V+\delta V\dfrac2\pi\sum_n\dfrac{(-1)^{n+1}}{2n-1}\left(\dfrac rR\right)^{2n-1}\cos((2n-1)\theta)\). Qual figura melhor representa as equipotenciais e o campo elétrico, respectivamente?</p>`,
opcoes:[{img:'fig/em_o20_q7A.png'},{img:'fig/em_o20_q7B.png'},{img:'fig/em_o20_q7C.png'},{img:'fig/em_o20_q7D.png'},{img:'fig/em_o20_q7E.png'}],
dica:R`Perto do centro domina o termo \(n=1\): \(V\approx\bar V+\dfrac{2\delta V}{\pi}\dfrac rR\cos\theta\). O campo aponta do potencial alto para o baixo.`,
solucao:R`<p>Equipotenciais: a linha vertical central (\(\cos\theta=0\)) e curvas que se acumulam nas junções do topo e da base. O campo é quase uniforme e horizontal no centro, da metade de maior potencial para a de menor, divergindo perto das fendas. É o par com equipotenciais "em lente" e setas horizontais quase paralelas; as figuras com círculos concêntricos ou campo radial descrevem simetria radial, que não existe aqui.</p><p><i>Observação:</i> pela expressão dada, o potencial é maior em \(\theta=0\) (direita), enquanto o enunciado diz que \(V_1\) (esquerda) é o maior. O gabarito considera só a forma das linhas e do campo.</p>`});

P({id:'em-2020o-8', ano:2020, prova:'EUF 2º/2020 (online) · Q8', topicos:['induc'],
enunciado:R`<p>Um anel metálico fino de diâmetro 10 cm gira a 5,0 Hz em torno de um diâmetro, num campo uniforme de \(2{,}0\times10^{-3}\) T perpendicular ao eixo de rotação. A resistência do anel é 4,9 mΩ. A amplitude e a frequência da corrente alternada são:</p>`,
opcoes:[R`\(1{,}0\times10^{-1}\) A e 5,0 Hz`,R`\(5{,}0\times10^{-2}\) A e 2,5 Hz`,R`\(1{,}0\times10^{-1}\) A e 2,5 Hz`,R`\(5{,}0\times10^{-2}\) A e 10 Hz`,R`\(1{,}0\times10^{-1}\) A e 10 Hz`],
dica:R`\(\Phi=BA\cos\omega t\) ⇒ \(\mathcal E_0=BA\omega\).`,
solucao:R`<p>\(A=\pi(0{,}05)^2=7{,}85\times10^{-3}\) m², \(\omega=31{,}4\) rad/s: \(\mathcal E_0=4{,}9\times10^{-4}\) V; \(I_0=0{,}10\) A, na frequência de rotação, 5 Hz.</p>`});

P({id:'em-2020o-9', ano:2020, prova:'EUF 2º/2020 (online) · Q9', topicos:['maxw'],
enunciado:R`<p>Um capacitor de placas circulares de raio \(R\), separadas por \(d\) (\(R\gg d\)), perpendiculares a \(z\), tem \(V=V_0\cos\omega t\). No limite quase-estático, os campos entre as placas (a uma distância \(r\) do eixo) são:</p>`,
opcoes:[R`\(\vec E=-\dfrac{V_0}d\cos\omega t\,\hat z\) e \(\vec B=\dfrac r{2d}\mu_0\epsilon_0V_0\omega\sin\omega t\,\hat\varphi\)`,R`\(\vec E=\dfrac{V_0}{2r}\sin\omega t\,\hat z\) e \(\vec B=-\dfrac dr\mu_0\epsilon_0V_0\omega\sin\omega t\,\hat\varphi\)`,R`\(\vec E=\dfrac{V_0}{2r}\cos\omega t\,\hat z\) e \(\vec B=-\dfrac dr\mu_0\epsilon_0V_0\omega\sin\omega t\,\hat\varphi\)`,R`\(\vec E=-\dfrac{V_0}{2r}\cos\omega t\,\hat z\) e \(\vec B=\dfrac dr\mu_0\epsilon_0V_0\omega\sin\omega t\,\hat\varphi\)`,R`\(\vec E=-\dfrac{V_0}d\cos\omega t\,\hat z\) e \(\vec B=-\dfrac r{2d}\mu_0\epsilon_0V_0\omega\sin\omega t\,\hat\varphi\)`],
dica:R`Ampère–Maxwell num círculo de raio \(r\): \(B\,2\pi r=\mu_0\epsilon_0\pi r^2\dot E\).`,
solucao:R`<p>\(E_z=-V_0\cos\omega t/d\) (convenção de sinal da placa). \(B=\dfrac r2\mu_0\epsilon_0\dot E_z=\dfrac r{2d}\mu_0\epsilon_0V_0\omega\sin\omega t\), azimutal. B cresce linearmente com \(r\).</p>`});

P({id:'em-2020o-10', ano:2020, prova:'EUF 2º/2020 (online) · Q11', topicos:['induc','mat'],
enunciado:R`<p>A autoindutância de uma espira fina é medida (A) num meio de permeabilidade \(x\mu_0\) e (B) num meio de permeabilidade \(x^2\mu_0\). A razão \(L_A/L_B\) é:</p>`,
opcoes:[R`\(x^{-1}\)`,R`\(x\)`,R`\(x^2\)`,R`\(x^2-x\)`,R`\(x^{-2}\)`],
dica:R`\(L\propto\mu\).`,
solucao:R`<p>\(L_A/L_B=x/x^2=1/x\).</p><p>(A Q10 desta prova, com alternativas muito extensas, ficou de fora.)</p>`});

// ============ 2020 — 2ª aplicação ============
P({id:'em-2020b-1', ano:2020, prova:'EUF 2020 (2ª aplicação) · EM1A', topicos:['eletrost'],
enunciado:R`<p>Duas partículas de massa \(m\) e carga \(q\) estão suspensas por fios de comprimento \(l\) presos no mesmo ponto, em equilíbrio, com os fios formando um ângulo \(\theta\) muito pequeno. A distância \(d\) entre as cargas é:</p>`,
opcoes:[R`\(d\approx\left[\dfrac{q^2l}{2\pi\epsilon_0mg}\right]^{1/3}\)`,R`\(d\approx\left[\dfrac{q^2l}{4\pi\epsilon_0mg}\right]^{1/3}\)`,R`\(d\approx\left[\dfrac{q^2l}{4\pi\epsilon_0mg}\right]^{1/2}\)`,R`\(d\approx\left[\dfrac{q^2l}{2\pi\epsilon_0mg}\right]^{1/2}\)`,R`\(d\approx\dfrac{q^2l}{4\pi\epsilon_0mg}\)`],
dica:R`Cada fio faz \(\theta/2\) com a vertical: \(\tan(\theta/2)\approx\dfrac{d/2}{l}=\dfrac{F_e}{mg}\).`,
solucao:R`<p>\(\dfrac{d}{2l}=\dfrac{q^2}{4\pi\epsilon_0d^2mg}\Rightarrow d^3=\dfrac{2lq^2}{4\pi\epsilon_0mg}=\dfrac{q^2l}{2\pi\epsilon_0mg}\).</p>`});

P({id:'em-2020b-2', ano:2020, prova:'EUF 2020 (2ª aplicação) · EM2A', topicos:['cond'],
enunciado:R`<p>Um capacitor de placas paralelas de área \(A\) é preenchido por dois dielétricos empilhados: o primeiro com permissividade \(\epsilon_1\) e espessura \(d_1\), o segundo com \(\epsilon_2\) e \(d_2\) (separação total \(d_1+d_2\)). A capacitância por unidade de área é:</p>`,
opcoes:[R`\(\dfrac CA=\dfrac{\epsilon_1\epsilon_2}{\epsilon_1d_2+\epsilon_2d_1}\)`,R`\(\dfrac CA=\dfrac{\epsilon_1^2+\epsilon_2^2}{\epsilon_1d_2+\epsilon_2d_1}\ln\dfrac{\epsilon_1d_2}{\epsilon_2d_1}\)`,R`\(\dfrac CA=\dfrac{\epsilon_1^2+\epsilon_2^2}{\epsilon_1d_2+\epsilon_2d_1}\)`,R`\(\dfrac CA=\dfrac{\epsilon_1\epsilon_2}{\epsilon_1d_1+\epsilon_2d_2}\ln\dfrac{\epsilon_1d_1}{\epsilon_2d_2}\)`,R`\(\dfrac CA=\dfrac{\epsilon_1\epsilon_2(d_1+d_2)}{\epsilon_1d_1^2+\epsilon_2d_2^2}\)`],
dica:R`Camadas empilhadas = capacitores em série.`,
solucao:R`<p>\(\dfrac AC=\dfrac{d_1}{\epsilon_1}+\dfrac{d_2}{\epsilon_2}=\dfrac{\epsilon_2d_1+\epsilon_1d_2}{\epsilon_1\epsilon_2}\).</p>`});

P({id:'em-2020b-3', ano:2020, prova:'EUF 2020 (2ª aplicação) · EM3A', topicos:['induc'],
enunciado:R`<p>Uma espira quadrada de resistência \(R\), no plano \(xy\), tem vértices \((0,0)\), \((0,L)\), \((L,0)\) e \((L,L)\). O campo é \(\vec B(x,t)=-3Ctx^2\hat z\), com \(C\) constante. A corrente induzida é:</p>`,
opcoes:[R`\(i=\dfrac{CL^4}{R}\)`,R`\(i=\dfrac{\mu_0CL^5}{tR^2}\)`,R`\(i=\dfrac{\mu_0CL^5}{4\pi tR^2}\)`,R`\(i=\dfrac{CL^4}{2R}\)`,R`\(i=\dfrac{\mu_0CL^5}{2tR^2}\)`],
dica:R`Integre o fluxo na área, depois derive em \(t\).`,
solucao:R`<p>\(\Phi=\displaystyle\int_0^L\!\!\int_0^L(-3Ctx^2)\,dx\,dy=-CtL^4\Rightarrow|\mathcal E|=CL^4\), \(i=CL^4/R\). Observe a análise dimensional: as alternativas com \(\mu_0\) ou \(1/t\) estão erradas.</p>`});

P({id:'em-2020b-4', ano:2020, prova:'EUF 2020 (2ª aplicação) · EM4A', topicos:['pot'],
enunciado:R`<p>O potencial na superfície de uma casca esférica oca de raio \(R\) é \(V(\theta)=V_0\cos\theta\). O potencial dentro da casca é:</p>`,
opcoes:[R`\(V=\dfrac{V_0r}{R}\cos\theta\)`,R`\(V=\dfrac{V_0R^2}{r^2}\cos\theta\)`,R`\(V=\dfrac{V_0R}{r}\sin\theta\)`,R`\(V=\dfrac{V_0r^2}{R^2}\sin\theta\)`,R`\(V=V_0\left[1+\ln\dfrac{r^2}{R^2}\right]\cos\theta\)`],
dica:R`Solução de Laplace regular na origem com \(\ell=1\): \(r\cos\theta\).`,
solucao:R`<p>Dentro: \(V=\sum A_\ell r^\ell P_\ell(\cos\theta)\); só \(\ell=1\) sobrevive, e \(A_1R=V_0\). (Fora seria \(V_0R^2\cos\theta/r^2\).)</p>`});

P({id:'em-2020b-5', ano:2020, prova:'EUF 2020 (2ª aplicação) · EM5A', topicos:['ondas'],
enunciado:R`<p>Uma camada fina de índice 1,30 cobre um vidro de índice 1,50. Qual é a espessura mínima para que não haja reflexão de luz de 520 nm em incidência normal?</p>`,
opcoes:[R`100 nm`,R`130 nm`,R`200 nm`,R`260 nm`,R`400 nm`],
dica:R`As duas reflexões (ar→1,30 e 1,30→1,50) têm a mesma inversão de fase.`,
solucao:R`<p>Interferência destrutiva: \(2nt=\lambda/2\Rightarrow t=\dfrac{520}{4\cdot1{,}30}=100\) nm (camada antirreflexo de quarto de onda).</p>`});

P({id:'em-2020b-6', ano:2020, prova:'EUF 2020 (2ª aplicação) · EM6A', topicos:['pot'],
enunciado:R`<p>Uma linha longa de densidade \(\lambda\) está paralela a um plano condutor infinito aterrado, a uma distância \(d\). O módulo da força por unidade de comprimento entre o plano e a linha é:</p>`,
opcoes:[R`\(\dfrac{\lambda^2}{4\pi\epsilon_0d}\)`,R`\(\dfrac{\lambda^2}{4\pi\epsilon_0d^2}\)`,R`\(\dfrac{\lambda^2}{2\pi\epsilon_0d}\)`,R`\(\dfrac{\lambda}{4\pi\epsilon_0d^2}\)`,R`\(\dfrac{\lambda^2}{2\pi\epsilon_0d^2}\)`],
dica:R`Imagem \(-\lambda\) a \(2d\) da linha.`,
solucao:R`<p>Campo da imagem na linha: \(\dfrac{\lambda}{2\pi\epsilon_0(2d)}\). Força por comprimento: \(\lambda\cdot\dfrac{\lambda}{4\pi\epsilon_0d}\).</p>`});

P({id:'em-2020b-7', ano:2020, prova:'EUF 2020 (2ª aplicação) · EM7A', topicos:['pot','cond'],
enunciado:R`<p>Um condutor neutro em forma de caroço de feijão é posto num campo uniforme \(\vec E_0\). Longe do condutor, a contribuição adicional \(|\vec E-\vec E_0|\) decai como:</p>`,
opcoes:[R`\(r^{-3}\)`,R`\(r^{-1}\)`,R`\(r^{-2}\)`,R`\(r^{-4}\)`,R`\(e^{-r/r_0}\), com \(r_0\) da ordem das dimensões do condutor`],
dica:R`Neutro: sem monopolo. O primeiro termo da expansão em multipolos é o dipolo induzido.`,
solucao:R`<p>Carga total nula, então o termo dominante é o de dipolo: campo \(\propto p/r^3\).</p>`});

P({id:'em-2020b-8', ano:2020, prova:'EUF 2020 (2ª aplicação) · EM8A', topicos:['mat','eletrost'],
enunciado:R`<p>Um pequeno dielétrico neutro de susceptibilidade \(\chi_e\) está a uma distância \(r\) muito grande de um pequeno condutor com carga \(Q\). A força entre eles:</p>`,
opcoes:[R`tem módulo \(\propto\chi_eQ^2/r^5\) e é atrativa.`,R`tem módulo \(\propto\chi_eQ/r^5\) e é atrativa.`,R`tem módulo \(\propto\chi_eQ^2/r^3\) e é atrativa.`,R`tem módulo \(\propto\chi_eQ^2/r^3\) e é repulsiva.`,R`tem módulo \(\propto\chi_eQ/r^3\) e é repulsiva.`],
dica:R`Dipolo induzido \(p\propto\chi_eE\propto\chi_eQ/r^2\); força sobre dipolo \(\propto p\,dE/dr\).`,
solucao:R`<p>\(F\propto p\,\dfrac{dE}{dr}\propto\dfrac{\chi_eQ}{r^2}\cdot\dfrac{Q}{r^3}=\dfrac{\chi_eQ^2}{r^5}\). O dipolo alinhado é puxado para a região de campo mais intenso: atração (independe do sinal de \(Q\)).</p>`});

// ============ 2021 ============
P({id:'em-2021-1', ano:2021, prova:'EUF 2021 (online) · EM1A', topicos:['eletrost'],
enunciado:R`<p>Uma carga \(Q\) é dividida em duas partes, \(q\) e \(Q-q\), afastadas por uma distância \(d\). Qual relação entre \(q\) e \(Q\) maximiza a repulsão?</p>`,
opcoes:[R`\(q=Q/2\)`,R`\(q=Q/4\)`,R`\(q=\ln(Q+1)\)`,R`\(q=\ln(2)\,Q\)`,R`\(q=\frac{\ln 2}{2}Q\)`],
dica:R`Maximize \(q(Q-q)\).`,
solucao:R`<p>\(\frac{d}{dq}[q(Q-q)]=Q-2q=0\Rightarrow q=Q/2\). (As alternativas com logaritmo de carga nem são dimensionalmente válidas.)</p>`});

P({id:'em-2021-2', ano:2021, prova:'EUF 2021 (online) · EM2A', topicos:['eletrost'],
enunciado:R`<p>Um elétron (carga \(-e\), massa \(m_e\)) está no eixo de um anel fino de raio \(R\) com densidade linear \(\lambda>0\), a uma distância \(z\) do plano do anel, e só se move ao longo do eixo. Para \(z\ll R\), a frequência angular das pequenas oscilações é:</p>`,
opcoes:[R`\(\omega=\sqrt{\dfrac{\lambda e}{2\epsilon_0m_eR^2}}\)`,R`\(\omega=\sqrt{\dfrac{\lambda e}{2\epsilon_0m_ezR}}\)`,R`\(\omega=\sqrt{\dfrac{\lambda ez}{2\epsilon_0m_eR^3}}\)`,R`\(\omega=\sqrt{\dfrac{\lambda e}{\epsilon_0m_eR^2}}\)`,R`\(\omega=\sqrt{\dfrac{\lambda e}{\epsilon_0m_ezR}}\)`],
dica:R`No eixo: \(E_z=\dfrac{Qz}{4\pi\epsilon_0(R^2+z^2)^{3/2}}\), com \(Q=2\pi R\lambda\).`,
solucao:R`<p>Para \(z\ll R\): \(E_z\approx\dfrac{2\pi R\lambda z}{4\pi\epsilon_0R^3}=\dfrac{\lambda z}{2\epsilon_0R^2}\). Força restauradora \(-eE_z\Rightarrow\omega^2=\dfrac{e\lambda}{2\epsilon_0m_eR^2}\).</p>`});

P({id:'em-2021-3', ano:2021, prova:'EUF 2021 (online) · EM3A', topicos:['cond'],
enunciado:R`<p>Dois capacitores cilíndricos longos de comprimento \(L\) têm carga \(+Q\) na casca interna e \(-Q\) na externa. O primeiro tem raios \(a\) e \(b\); o segundo, \(a\) e \(b'\) (\(b>a\), \(b'>a\)). Qual deve ser \(b'\) para que a energia do segundo seja metade da do primeiro?</p>`,
opcoes:[R`\(b'=a^{1/2}b^{1/2}\)`,R`\(b'=b^2/a\)`,R`\(b'=b^3/a^2\)`,R`\(b'=b^2/2a\)`,R`\(b'=a^{3/4}b^{1/4}\)`],
dica:R`Com carga fixa, \(U=Q^2/2C\) e \(1/C\propto\ln(b/a)\).`,
solucao:R`<p>\(\ln(b'/a)=\frac12\ln(b/a)\Rightarrow b'=a\sqrt{b/a}=\sqrt{ab}\).</p>`});

P({id:'em-2021-4', ano:2021, prova:'EUF 2021 (online) · EM4A', topicos:['induc','magst'],
enunciado:R`<p>Dois fios longos paralelos de raio \(a\), com eixos a uma distância \(D\), conduzem correntes iguais em sentidos opostos. Desprezando o fluxo no interior dos fios, a indutância de um comprimento \(l\) do par é:</p>`,
opcoes:[R`\(L=\dfrac{\mu_0l}{\pi}\ln\dfrac{D-a}{a}\)`,R`\(L=\dfrac{\mu_0l}{4\pi}\ln\dfrac{D-a}{a}\)`,R`\(L=\dfrac{\mu_0l}{\pi}\ln\dfrac{D+a}{a}\)`,R`\(L=\dfrac{\mu_0l}{4\pi}\ln\dfrac{D+a}{a}\)`,R`\(L=\dfrac{\mu_0l}{4\pi}\ln\sqrt{\dfrac{D-a}{a}}\)`],
dica:R`Entre os fios, os dois campos somam: integre \(\frac{\mu_0I}{2\pi}\left(\frac1x+\frac1{D-x}\right)\) de \(a\) a \(D-a\).`,
solucao:R`<p>\(\Phi=l\cdot\dfrac{\mu_0I}{2\pi}\cdot2\ln\dfrac{D-a}{a}\Rightarrow L=\dfrac{\mu_0l}{\pi}\ln\dfrac{D-a}{a}\).</p>`});

P({id:'em-2021-7', ano:2021, prova:'EUF 2021 (online) · EM7A', topicos:['induc','forca'],
enunciado:R`<p>Uma barra metálica (massa \(m\), comprimento \(d\), resistência desprezível) desliza com velocidade \(v\) sobre trilhos condutores num plano inclinado de \(\theta\), ligados por uma resistência \(R\). O campo \(B\) é vertical (paralelo a \(\vec g\)). O módulo da componente da força magnética na barra ao longo do plano é:</p>`,
opcoes:[R`\(B^2d^2v\cos^2\theta/R\)`,R`\(B^2d^2v\sin\theta\cos\theta/R\)`,R`\(Bdv\cos^2\theta/R\)`,R`\(Bdv\cos\theta\sin\theta/R\)`,R`\(B^2d^2v\cos\theta/R\)`],
dica:R`Só a componente de \(\vec v\) perpendicular a \(\vec B\) gera fem; a força \(I\vec d\times\vec B\) é horizontal.`,
solucao:R`<p>\(\mathcal E=Bdv\cos\theta\), \(I=\mathcal E/R\). Força horizontal \(IdB\); componente ao longo do plano: \(IdB\cos\theta=\dfrac{B^2d^2v\cos^2\theta}{R}\).</p>`});

P({id:'em-2021-8', ano:2021, prova:'EUF 2021 (online) · EM8A', topicos:['maxw','ondas'],
enunciado:R`<p>Longe de cargas e correntes há um campo magnético \(B_0\cos(k(x-ct))\) na direção \(z\). A intensidade e a direção do vetor de Poynting são:</p>`,
opcoes:[R`\((c/\mu_0)B_0^2\cos^2(k(x-ct))\) e \(x\)`,R`\(-(c/\mu_0)B_0^2\cos^2(k(x-ct))\) e \(y\)`,R`\((c/\mu_0)B_0^2\sin(k(x-ct))\cos(k(x-ct))\) e \(x\)`,R`\(-(c/\mu_0)B_0^2\sin(k(x-ct))\cos(k(x-ct))\) e \(y\)`,R`0`],
dica:R`A onda viaja em \(+x\); \(E=cB\) com \(\vec E\times\vec B\parallel\hat x\).`,
solucao:R`<p>\(\vec E=cB_0\cos(\cdot)\,\hat y\) (pois \(\hat y\times\hat z=\hat x\)). \(S=EB/\mu_0=(c/\mu_0)B_0^2\cos^2(\cdot)\), na direção \(x\).</p>`});

// ============ 2021 — 3ª aplicação ============
P({id:'em-2021c-1', ano:2021, prova:'EUF 2021 (3ª aplicação) · EM1A', topicos:['ondas','maxw'],
enunciado:R`<p>Uma onda EM se propaga num meio homogêneo, linear e isotrópico (\(\epsilon\), \(\mu\)) que é um bom condutor de condutividade \(\sigma\): há corrente livre, mas a densidade de carga livre é desprezível. A equação para \(\mathbf E\) é:</p>`,
opcoes:[R`\(\nabla^2\mathbf E-\mu\sigma\dfrac{\partial\mathbf E}{\partial t}-\mu\epsilon\dfrac{\partial^2\mathbf E}{\partial t^2}=0\)`,R`\(\nabla^2\mathbf E-\mu\epsilon\dfrac{\partial^2\mathbf E}{\partial t^2}=0\)`,R`\(\nabla^2\mathbf E-\mu\sigma\dfrac{\partial\mathbf E}{\partial t}=0\)`,R`\(\nabla^2\mathbf E+\mu\sigma\dfrac{\partial\mathbf E}{\partial t}+\mu\epsilon\dfrac{\partial^2\mathbf E}{\partial t^2}=0\)`,R`\(\nabla^2\mathbf E+\mu\epsilon\dfrac{\partial^2\mathbf E}{\partial t^2}=0\)`],
dica:R`Rotacional de Faraday + Ampère-Maxwell com \(\mathbf J=\sigma\mathbf E\).`,
solucao:R`<p>\(\nabla\times\nabla\times\mathbf E=-\nabla^2\mathbf E=-\mu\partial_t(\sigma\mathbf E+\epsilon\partial_t\mathbf E)\). É a equação do telégrafo: o termo \(\mu\sigma\partial_t\) amortece a onda.</p>`});

P({id:'em-2021c-2', ano:2021, prova:'EUF 2021 (3ª aplicação) · EM2A', topicos:['eletrost','cond'],
enunciado:R`<p>Uma casca esférica condutora neutra (raio interno \(a\), externo \(b\)) contém no seu interior, concêntrica, uma esfera de raio \(c\lt a\) com densidade uniforme \(\rho>0\). O campo na região \(c\lt r\lt a\) é:</p>`,
opcoes:[R`\(E=\dfrac{\rho c^3}{3\epsilon_0r^2}\)`,R`\(E=\dfrac{\rho c^2}{3\epsilon_0r}\)`,R`\(E=\dfrac{\rho c^3}{2\pi\epsilon_0r^2}\)`,R`\(E=\dfrac{\rho c^2}{2\pi\epsilon_0r}\)`,R`\(E=\dfrac{\rho(c-a)^3}{4\pi\epsilon_0r^2}\)`],
dica:R`Gauss: só a carga da esfera interna está dentro.`,
solucao:R`<p>\(E\cdot4\pi r^2=\dfrac{\frac43\pi c^3\rho}{\epsilon_0}\Rightarrow E=\dfrac{\rho c^3}{3\epsilon_0r^2}\).</p>`});

P({id:'em-2021c-3', ano:2021, prova:'EUF 2021 (3ª aplicação) · EM3A', topicos:['induc'],
enunciado:R`<p>Uma espira circular de raio \(r(t)=r_0e^{-t/t_0}\) é atravessada perpendicularmente por um campo \(B\) constante. A fem induzida é:</p>`,
opcoes:[R`\(\mathcal E=2B\pi\dfrac{r_0^2}{t_0}e^{-2t/t_0}\)`,R`\(\mathcal E=B\pi\dfrac{r_0^2}{t_0}e^{-t/t_0}\)`,R`\(\mathcal E=4B\pi\dfrac{r_0^2}{t_0}e^{-t/t_0}\)`,R`\(\mathcal E=4B\dfrac{r_0^2}{t_0}e^{-t/t_0}\)`,R`\(\mathcal E=4B\dfrac{r_0^2}{t_0}e^{-2t/t_0}\)`],
dica:R`\(\Phi=B\pi r^2\propto e^{-2t/t_0}\).`,
solucao:R`<p>\(|\dot\Phi|=B\pi r_0^2\cdot\dfrac{2}{t_0}e^{-2t/t_0}\).</p>`});

P({id:'em-2021c-4', ano:2021, prova:'EUF 2021 (3ª aplicação) · EM4A', topicos:['pot'],
enunciado:R`<p>O potencial de uma distribuição é \(V(r)=\alpha\dfrac{e^{-\lambda r}}{r}\). O campo elétrico é:</p>`,
opcoes:[R`\(\mathbf E=\alpha e^{-\lambda r}(1+\lambda r)\dfrac{\hat r}{r^2}\)`,R`\(\mathbf E=\alpha e^{-\lambda r}(1+2\lambda r)\dfrac{\hat r}{r^2}\)`,R`\(\mathbf E=\alpha e^{-2\lambda r}(1+\lambda r)\dfrac{\hat r}{r^2}\)`,R`\(\mathbf E=\alpha e^{-2\lambda r}(1+2\lambda r)\dfrac{\hat r}{r^2}\)`,R`\(\mathbf E=\alpha e^{-\lambda r}(1+3\lambda r)\dfrac{\hat r}{r^2}\)`],
dica:R`\(\mathbf E=-V'(r)\hat r\), regra do produto.`,
solucao:R`<p>\(-V'=\alpha\left(\dfrac{\lambda e^{-\lambda r}}{r}+\dfrac{e^{-\lambda r}}{r^2}\right)=\alpha e^{-\lambda r}\dfrac{1+\lambda r}{r^2}\) (potencial de Yukawa).</p>`});

P({id:'em-2021c-6', ano:2021, prova:'EUF 2021 (3ª aplicação) · EM6A', topicos:['cond'],
enunciado:R`<p>Duas esferas condutoras de raios \(R_A\) e \(R_B\lt R_A\), a uma distância \(d\gg R_A\), estão ligadas por um fio fino. Se \(E_A\) é o campo logo fora da esfera A, o campo logo fora da esfera B é:</p>`,
opcoes:[R`\((R_A/R_B)\,E_A\)`,R`\((R_B/R_A)^2E_A\)`,R`\((R_AR_B)^{1/2}E_A/d\)`,R`\((1+\ln R_B/R_A)\,E_A\)`,R`\((R_B/R_A)\,E_A\)`],
dica:R`Mesmo potencial: \(q\propto R\). Campo na superfície \(\propto q/R^2\).`,
solucao:R`<p>\(E\propto q/R^2\propto1/R\Rightarrow E_B=\dfrac{R_A}{R_B}E_A\). É o “efeito das pontas”: o campo é maior onde o raio é menor.</p>`});

P({id:'em-2021c-7', ano:2021, prova:'EUF 2021 (3ª aplicação) · EM7A', topicos:['ondas'],
enunciado:R`<p>Uma partícula esférica de densidade \(\rho\) e raio \(r\) está a uma distância \(d\gg R\) de uma estrela de massa \(M\), raio \(R\) e potência radiativa \(P\). Supondo absorção total, qual \(r\) faz a atração gravitacional igualar a força da pressão de radiação?</p>`,
opcoes:[R`\(3P/(16\pi GM\rho c)\)`,R`\(3P/(8\pi GM\rho c)\)`,R`\(3P/(16\pi GM\rho cd)\)`,R`\(3P/(8\pi GM\rho cd)\)`,R`\(3P/(4\pi GM\rho c)\)`],
dica:R`Força de radiação: \(\dfrac{P}{4\pi d^2c}\pi r^2\). Note que as duas forças caem com \(1/d^2\).`,
solucao:R`<p>\(\dfrac{P\pi r^2}{4\pi d^2c}=\dfrac{GM\frac43\pi r^3\rho}{d^2}\Rightarrow r=\dfrac{3P}{16\pi GM\rho c}\).</p>`});

P({id:'em-2021c-8', ano:2021, prova:'EUF 2021 (3ª aplicação) · EM8A', topicos:['ondas'],
enunciado:R`<p>Uma onda com campo \(\mathrm{Re}[E_0(\hat x+i\hat y)e^{i(kz-\omega t)}]\) incide normalmente num polarizador ideal com eixo \(\cos\theta\,\hat x+\sin\theta\,\hat y\). A razão \(I/I_0\) é:</p>`,
opcoes:[R`1/2`,R`1`,R`1/4`,R`\(\cos^2(\theta-\pi/4)\)`,R`\(\cos^2(\theta+\pi/4)\)`],
dica:R`Polarização circular: projeção com módulo independente de \(\theta\).`,
solucao:R`<p>\(|(\hat x+i\hat y)\cdot(\cos\theta,\sin\theta)|^2=\cos^2\theta+\sin^2\theta=1\), contra \(|\hat x+i\hat y|^2=2\). Logo \(I/I_0=1/2\) para qualquer \(\theta\).</p>`});

// ============ 2022 ============
P({id:'em-2022-1', ano:2022, prova:'EUF 2022 (online) · EM1A', topicos:['pot','cond'],
enunciado:R`<p>Um capacitor de placas paralelas é preenchido por um dielétrico de permissividade \(\epsilon\), com carga \(\rho(z)=\rho_0e^{-2\alpha z}\) entre as placas. A placa em \(z=0\) está a \(V_0\) e a placa em \(z=d\), a \(2V_0\). Desprezando efeitos de borda, \(V(z)\) é:</p>`,
opcoes:[R`\(V_0\left(1+\frac zd\right)+\frac{\rho_0}{4\epsilon\alpha^2}\left(1-e^{-2\alpha z}\right)-\frac zd\frac{\rho_0}{4\epsilon\alpha^2}\left(1-e^{-2\alpha d}\right)\)`,R`\(V_0+V_0\frac{\ln(1+z/d)}{\ln2}+\frac{\rho_0}{4\epsilon\alpha^2}\left(1-e^{-2\alpha z}\right)-\frac zd\frac{\rho_0}{4\epsilon\alpha^2}\left(1-e^{-2\alpha d}\right)\)`,R`\(V_0\left(1+\frac zd\right)+\frac{\rho_0}{4\epsilon\alpha^2}\left(1-e^{-2\alpha z}\right)\)`,R`\(V_0+V_0\frac{\ln(1+z/d)}{\ln2}+\frac{\rho_0}{4\epsilon\alpha^2}\left(1-e^{-2\alpha z}\right)\)`,R`\(V_0\left(1+\frac zd\right)\)`],
dica:R`Poisson 1D: \(V''=-\rho/\epsilon\). Teste as condições de contorno em cada alternativa.`,
solucao:R`<p>Solução particular: \(-\dfrac{\rho_0}{4\epsilon\alpha^2}e^{-2\alpha z}\); somando \(Az+B\) e impondo \(V(0)=V_0\), \(V(d)=2V_0\), chega-se à alternativa. A alternativa sem o último termo falha em \(z=d\).</p>`});

P({id:'em-2022-2', ano:2022, prova:'EUF 2022 (online) · EM2A', topicos:['eletrost'],
enunciado:R`<p>Um disco de plástico de raio \(R\) tem carga uniforme \(\sigma\). A que distância ao longo do eixo o campo vale um terço do valor logo acima do centro?</p>`,
opcoes:[R`\(\dfrac{2R}{\sqrt5}\)`,R`\(\dfrac{3R}{\sqrt7}\)`,R`\(\dfrac{4R}{\sqrt3}\)`,R`\(\dfrac{2R}{\sqrt3}\)`,R`\(\dfrac{5R}{\sqrt2}\)`],
dica:R`\(E(z)=\dfrac{\sigma}{2\epsilon_0}\left(1-\dfrac{z}{\sqrt{z^2+R^2}}\right)\).`,
solucao:R`<p>\(1-\dfrac{z}{\sqrt{z^2+R^2}}=\dfrac13\Rightarrow9z^2=4(z^2+R^2)\Rightarrow z=\dfrac{2R}{\sqrt5}\).</p>`});

P({id:'em-2022-3', ano:2022, prova:'EUF 2022 (online) · EM3A', topicos:['induc'],
enunciado:R`<p>Uma espira retangular (resistência \(R\)) no plano \(xy\) tem vértices \((0,0)\), \((0,L)\), \((2L,0)\), \((2L,L)\). O campo é \(\mathbf B(x,t)=3Ktx\,\hat n\), com \(\hat n=\hat x\times\hat y\). O módulo da fem induzida é:</p>`,
opcoes:[R`\(6KL^3\)`,R`\(2KL^3\)`,R`\(6KtL^2\)`,R`\(2KtL^2\)`,R`\(3KtL^2\)`],
dica:R`\(\Phi=3Kt\int_0^{2L}x\,dx\cdot L\).`,
solucao:R`<p>\(\Phi=3Kt\cdot L\cdot\dfrac{(2L)^2}{2}=6KtL^3\Rightarrow\mathcal E=6KL^3\), constante.</p>`});

P({id:'em-2022-4', ano:2022, prova:'EUF 2022 (online) · EM4A', topicos:['induc','magst'],
enunciado:R`<p>Duas espiras coaxiais e paralelas, de raios \(a\) e \(b\), estão separadas por uma distância \(D\). A indutância mútua no caso \(a\ll b\) e \(D=2b\) é:</p>`,
opcoes:[R`\(M=\dfrac{\pi\mu_0a^2b^2}{2(5^{3/2}b^3)}\)`,R`\(M=\dfrac{\pi\mu_0a^2b^2}{4^{3/2}a^3}\)`,R`\(M=\dfrac{\mu_0ab^3}{2\pi(5^{3/2}b^3)}\)`,R`\(M=\dfrac{\pi\mu_0ab^3}{4^{3/2}a^3}\)`,R`\(M=\dfrac{\mu_0a^3b}{\pi(5^{3/2}b^3)}\)`],
dica:R`Faça a corrente na espira grande: o campo no eixo é quase uniforme sobre a espira pequena.`,
solucao:R`<p>\(B=\dfrac{\mu_0ib^2}{2(b^2+D^2)^{3/2}}=\dfrac{\mu_0ib^2}{2\cdot5^{3/2}b^3}\). \(\Phi=\pi a^2B\Rightarrow M=\dfrac{\pi\mu_0a^2b^2}{2\cdot5^{3/2}b^3}\).</p>`});

P({id:'em-2022-5', ano:2022, prova:'EUF 2022 (online) · EM5A', topicos:['cond'],
enunciado:R`<p>Duas esferas condutoras idênticas de raio \(R\), muito afastadas: uma neutra, outra com carga \(Q\). Elas são postas em contato e depois devolvidas às posições iniciais. A variação da energia eletrostática é:</p>`,
opcoes:[R`\(-Q^2/(16\pi\epsilon_0R)\)`,R`\(Q^2/(16\pi\epsilon_0R)\)`,R`\(-Q^2/(8\pi\epsilon_0R)\)`,R`\(Q^2/(8\pi\epsilon_0R)\)`,R`0`],
dica:R`\(U=q^2/(8\pi\epsilon_0R)\) para cada esfera.`,
solucao:R`<p>Inicial: \(\dfrac{Q^2}{8\pi\epsilon_0R}\). Final: \(2\cdot\dfrac{(Q/2)^2}{8\pi\epsilon_0R}=\dfrac{Q^2}{16\pi\epsilon_0R}\). A metade perdida é dissipada no contato.</p>`});

P({id:'em-2022-6', ano:2022, prova:'EUF 2022 (online) · EM6A', topicos:['magst'],
enunciado:R`<p>Um elemento de corrente \(I\,d\ell\) na origem aponta em \(+z\). A componente \(x\) do campo magnético no ponto \((x,y,z)\) é:</p>`,
opcoes:[R`\(-\dfrac{\mu_0Iy\,d\ell}{4\pi(x^2+y^2+z^2)^{3/2}}\)`,R`\(\dfrac{\mu_0Iy\,d\ell}{4\pi(x^2+y^2+z^2)^{3/2}}\)`,R`\(-\dfrac{\mu_0Iz\,d\ell}{4\pi(x^2+y^2+z^2)^{3/2}}\)`,R`\(\dfrac{\mu_0Ix\,d\ell}{4\pi(x^2+y^2+z^2)^{3/2}}\)`,R`0`],
dica:R`\(\hat z\times(x,y,z)=(-y,x,0)\).`,
solucao:R`<p>Biot-Savart: \(d\mathbf B=\dfrac{\mu_0I\,d\ell}{4\pi}\dfrac{\hat z\times\mathbf r}{r^3}\Rightarrow dB_x=-\dfrac{\mu_0Iy\,d\ell}{4\pi r^3}\).</p>`});

P({id:'em-2022-7', ano:2022, prova:'EUF 2022 (online) · EM7A', topicos:['induc','forca'],
enunciado:R`<p>Num circuito horizontal, uma barra perfeitamente condutora de massa \(m\) apoia-se em trilhos condutores separados por \(d\) (atritos \(\mu_e\) e \(\mu_c\)). Há um campo uniforme \(B\) perpendicular ao circuito, uma bateria ideal \(V\) e uma bobina de indutância \(L\). A chave fecha em \(t=0\); despreze o campo da própria corrente. Assinale a correta:</p>`,
opcoes:[R`A barra se move somente após o instante \(\mu_emgL/(BVd)\).`,R`A barra se move imediatamente após a chave ser fechada.`,R`A barra se move imediatamente somente se \(B>\mu_emgL/(Vd)\); caso contrário, nunca se move.`,R`A barra se move imediatamente somente se \(B>\mu_cmgL/(Vd)\); caso contrário, nunca se move.`,R`A barra se move somente após o instante \(\mu_cmgL/(BVd)\).`],
dica:R`Sem resistência: \(V=L\,dI/dt\Rightarrow I=Vt/L\) (enquanto a barra está parada).`,
solucao:R`<p>A força \(BId=BVdt/L\) cresce linearmente; a barra começa a se mover quando supera o atrito estático máximo \(\mu_emg\): \(t=\dfrac{\mu_emgL}{BVd}\).</p>`});

P({id:'em-2022-8', ano:2022, prova:'EUF 2022 (online) · EM8A', topicos:['ondas'],
enunciado:R`<p>Uma onda linearmente polarizada \(\mathbf E=Ee^{ik(z-ct)}\hat x\) pode ser escrita como \((\mathbf E_++\mathbf E_-)/2\), com \(\mathbf E_\pm=Ee^{ik(z-ct)}(\hat x\mp i\hat y)\). Num cristal, os índices são \(n\pm\delta n\) para \(\mathbf E_+\) e \(\mathbf E_-\). Qual o ângulo de rotação do plano de polarização após uma distância \(d\) no meio?</p>`,
opcoes:[R`\(kd\,\delta n\)`,R`\(2kd\,\delta n\)`,R`\(2kd\,\delta n/n\)`,R`\(2kdn\,\delta n\)`,R`0`],
dica:R`A rotação é metade da diferença de fase entre as duas componentes circulares.`,
solucao:R`<p>Diferença de fase: \(k(n+\delta n)d-k(n-\delta n)d=2kd\,\delta n\). O plano de polarização gira de metade disso: \(kd\,\delta n\) (atividade óptica).</p>`});

// ============ 2022 — 2ª aplicação ============
P({id:'em-2022b-1', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q17 [em1a]', topicos:['eletrost'],
enunciado:R`<p>Uma carga \(q\) está no centro de uma das faces de um cubo de aresta \(a\). O fluxo elétrico através das outras 5 faces é:</p>`,
opcoes:[R`\(\dfrac{q}{2\epsilon_0}\)`,R`\(\dfrac{q}{5\pi\epsilon_0}\)`,R`\(\dfrac{q}{4\pi\epsilon_0}\)`,R`\(\dfrac{q}{2\pi\epsilon_0}\)`,R`\(\dfrac{q}{5\epsilon_0}\)`],
dica:R`Complete com um cubo idêntico do outro lado da face.`,
solucao:R`<p>A carga fica no centro da face comum de dois cubos; por simetria, metade do fluxo total sai por cada um. A face onde está a carga não recebe fluxo (o campo é tangente a ela). Logo \(q/2\epsilon_0\).</p>`});

P({id:'em-2022b-2', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q19 [em2a]', topicos:['maxw'],
enunciado:R`<p>Um capacitor de placas paralelas (discos de raio \(R\), separação \(d\ll R\)) é carregado com \(q(t)=q_0(1-e^{-2t/\tau})\). A corrente de deslocamento é:</p>`,
opcoes:[R`\(i_d=\dfrac{2q_0}{\tau}e^{-2t/\tau}\)`,R`\(i_d=\dfrac{q_0}{\tau}e^{-2t/\tau}\)`,R`\(i_d=\dfrac{2q_0}{\tau}e^{-t/\tau}\)`,R`\(i_d=\dfrac{q_0}{\tau}e^{-t/\tau}\)`,R`\(i_d=\dfrac{q_0}{2\tau}e^{-2t/\tau}\)`],
dica:R`Entre as placas, \(i_d=\epsilon_0\,d\Phi_E/dt=dq/dt\).`,
solucao:R`<p>\(i_d=\dot q=\dfrac{2q_0}{\tau}e^{-2t/\tau}\): igual à corrente de condução no fio.</p>`});

P({id:'em-2022b-3', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q21 [em3a]', topicos:['forca','magst'],
enunciado:R`<p>Uma carga \(q\) se move com velocidade \(\mathbf v\) paralela a um fio infinito com densidade \(\lambda\) e corrente \(I\) no mesmo sentido de \(\mathbf v\), a uma distância \(R\). Qual \(v\) mantém a partícula se movendo paralelamente ao fio?</p>`,
opcoes:[R`\(v=\dfrac{\lambda}{\epsilon_0\mu_0I}\)`,R`\(v=\dfrac{\lambda}{2\pi\epsilon_0\mu_0I}\)`,R`\(v=\dfrac{\lambda}{4\pi\epsilon_0\mu_0I}\)`,R`\(v=\dfrac{4\pi\lambda}{\epsilon_0\mu_0I}\)`,R`\(v=\dfrac{2\pi\lambda}{\epsilon_0\mu_0I}\)`],
dica:R`Iguale \(q\dfrac{\lambda}{2\pi\epsilon_0R}\) com \(qv\dfrac{\mu_0I}{2\pi R}\).`,
solucao:R`<p>A força elétrica é radial para fora e a magnética (correntes paralelas) é para dentro: \(\dfrac{\lambda}{\epsilon_0}=v\mu_0I\Rightarrow v=\dfrac{\lambda}{\epsilon_0\mu_0I}\). Note que \(R\) se cancela.</p>`});

P({id:'em-2022b-4', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q23 [em4a]', topicos:['magst','mat'],
enunciado:R`<p>Um condutor cilíndrico longo (raio interno \(a\), externo \(b\), permeabilidade \(\mu\)) conduz corrente \(I\) com densidade uniforme. O módulo de \(B(r)\) no interior do condutor é:</p>`,
opcoes:[R`\(B=\dfrac{\mu I}{2\pi r}\dfrac{r^2-a^2}{b^2-a^2}\)`,R`\(B=\dfrac{\mu I}{4\pi r}\dfrac{r^2-a^2}{b^2-a^2}\)`,R`\(B=\dfrac{\mu I}{2\pi r}\dfrac{r^2-a^2}{b^2+a^2}\)`,R`\(B=\dfrac{\mu I}{4\pi r}\dfrac{r^2-a^2}{b^2+a^2}\)`,R`\(B=\dfrac{\mu I}{2\pi r}\dfrac{r^2+a^2}{b^2-a^2}\)`],
dica:R`Ampère com a fração de corrente envolvida \(\dfrac{r^2-a^2}{b^2-a^2}\).`,
solucao:R`<p>\(B\cdot2\pi r=\mu I\dfrac{r^2-a^2}{b^2-a^2}\). Confira os limites: zero em \(r=a\), \(\mu I/2\pi b\) em \(r=b\).</p>`});

P({id:'em-2022b-5', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q25 [em5a]', topicos:['circ','cond'],
enunciado:R`<p>Uma esfera condutora de raio \(a\) com carga \(q\) é aterrada em \(t=0\) por um fio de resistência \(R\). O módulo da corrente no fio é:</p>`,
opcoes:[R`\(\dfrac{q}{4\pi\epsilon_0Ra}e^{-t/(4\pi\epsilon_0Ra)}\)`,R`\(\dfrac{q}{4\pi\epsilon_0Ra}e^{-t/(4\pi\epsilon_0R^2)}\)`,R`\(\dfrac{q}{4\pi\epsilon_0R^2a^2}e^{-t/(4\pi\epsilon_0Ra)}\)`,R`\(\dfrac{qa}{4\pi\epsilon_0R}e^{-t/(4\pi\epsilon_0R^2)}\)`,R`\(\dfrac{qR}{4\pi\epsilon_0a}e^{-t/(4\pi\epsilon_0a^2)}\)`],
dica:R`Esfera isolada: \(C=4\pi\epsilon_0a\). É uma descarga RC.`,
solucao:R`<p>\(I=\dfrac{q}{RC}e^{-t/RC}\) com \(RC=4\pi\epsilon_0Ra\). As outras falham na dimensão do expoente.</p>`});

P({id:'em-2022b-6', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q27 [em6a]', topicos:['circ'], fig:'fig/em_b22_q27.png',
enunciado:R`<p>O painel (a) mostra a curva \(I\times V\) de um resistor ideal (linha 1, tracejada) e de um componente não ôhmico (linha 2). Em (b), os dois estão em série com uma fonte ideal \(V\). Se a corrente é \(I=3{,}0\) mA, o valor de \(V\) é:</p>`,
opcoes:[R`ou 300 mV, ou 500 mV, ou 675 mV`,R`necessariamente 250 mV`,R`necessariamente 500 mV`,R`ou 50 mV, ou 250 mV, ou 425 mV`,R`nenhuma das outras alternativas`],
dica:R`Em série, a corrente é a mesma: leia a tensão de cada componente em \(I=3\) mA e some.`,
solucao:R`<p>Resistor: 3 mA a 250 mV. O componente 2 tem três tensões possíveis em 3 mA: ≈ 50, 250 e 425 mV. Somando: 300, 500 ou 675 mV. (A alternativa D é a armadilha: só a tensão do componente.)</p>`});

P({id:'em-2022b-7', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q29 [em7a]', topicos:['ondas'],
enunciado:R`<p>Luz despolarizada atravessa três polarizadores ideais. O ângulo entre os eixos do 1º e do 2º é \(\alpha\), e entre o 1º e o 3º é \(0\le\theta\le\pi/2\). Sobre a intensidade final:</p>`,
opcoes:[R`É máxima quando \(\alpha=\theta/2\).`,R`É máxima quando \(\alpha=0\) ou \(\alpha=\theta\).`,R`É mínima quando \(\alpha=\theta/2\).`,R`É mínima quando \(\alpha=0\) ou \(\alpha=\theta\).`,R`Nenhuma luz é transmitida quando \(\theta=\pi/2\).`],
dica:R`\(I=\frac{I_0}2\cos^2\alpha\cos^2(\theta-\alpha)\).`,
solucao:R`<p>\(\cos\alpha\cos(\theta-\alpha)=\frac12[\cos\theta+\cos(2\alpha-\theta)]\), máximo em \(\alpha=\theta/2\). E é falsa: com o polarizador do meio, passa luz mesmo com \(\theta=\pi/2\).</p>`});

P({id:'em-2022b-8', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q31 [em8a]', topicos:['induc'], fig:'fig/em_b22_q31.png',
enunciado:R`<p>Um ímã curto cai num tubo de vidro evacuado, enrolado por um fio que forma um laço ligado a \(R\). Qual gráfico representa a corrente no circuito em função do tempo?</p>`,
opcoes:[{img:'fig/em_b22_q31A.png'},{img:'fig/em_b22_q31B.png'},{img:'fig/em_b22_q31C.png'},{img:'fig/em_b22_q31D.png'},{img:'fig/em_b22_q31E.png'}],
dica:R`O fluxo cresce na aproximação e diminui no afastamento: a fem troca de sinal.`,
solucao:R`<p>Aproximando, \(d\Phi/dt>0\); afastando, \(d\Phi/dt\lt0\). Logo um pulso de um sinal seguido de outro de sinal oposto. O segundo pulso é mais estreito e alto porque o ímã está mais rápido (caindo).</p>`});

// ============ 2023 ============
P({id:'em-2023-1', ano:2023, prova:'EUF 2023 · Q17 [em1a]', topicos:['cond'],
enunciado:R`<p>Um capacitor de placas paralelas (discos de raio \(R\), separação \(d\ll R\)) tem carga \(q\). A energia armazenada no campo é:</p>`,
opcoes:[R`\(U=\dfrac{q^2d}{2\pi\epsilon_0R^2}\)`,R`\(U=\dfrac{q^2d}{\pi\epsilon_0R^2}\)`,R`\(U=\dfrac{q^2}{\pi\epsilon_0R}\)`,R`\(U=\dfrac{q^2R}{4\epsilon_0d^2}\)`,R`\(U=\dfrac{q^2R^2}{2\pi\epsilon_0d^3}\)`],
dica:R`\(U=q^2/2C\), \(C=\epsilon_0\pi R^2/d\).`,
solucao:R`<p>\(U=\dfrac{q^2d}{2\epsilon_0\pi R^2}\).</p>`});

P({id:'em-2023-2', ano:2023, prova:'EUF 2023 · Q19 [em2a]', topicos:['magst'],
enunciado:R`<p>Um anel de plástico de raio \(R\) com carga \(q\) uniforme gira com frequência angular \(\omega\) em torno do seu eixo. O campo magnético no centro é:</p>`,
opcoes:[R`\(B=\dfrac{\mu_0\omega q}{4\pi R}\)`,R`\(B=\dfrac{\mu_0\omega q}{2\pi R}\)`,R`\(B=\dfrac{2\pi\mu_0\omega q}{R}\)`,R`\(B=\dfrac{4\pi\mu_0\omega q}{R}\)`,R`\(B=\dfrac{2\mu_0\omega q}{\pi R}\)`],
dica:R`Corrente equivalente \(I=q\omega/2\pi\); centro de espira: \(\mu_0I/2R\).`,
solucao:R`<p>\(B=\dfrac{\mu_0}{2R}\dfrac{q\omega}{2\pi}=\dfrac{\mu_0\omega q}{4\pi R}\).</p>`});

P({id:'em-2023-3', ano:2023, prova:'EUF 2023 · Q21 [em3a]', topicos:['induc'],
enunciado:R`<p>Um solenoide longo com \(n\) espiras por comprimento conduz \(i=i_0\cos\omega t\). Dentro dele há uma espira de área \(A\) com eixo paralelo ao do solenoide. A fem induzida é:</p>`,
opcoes:[R`\(\mathcal E=A\omega\mu_0i_0n\sin\omega t\)`,R`\(\mathcal E=A\omega\mu_0i_0n\cos\omega t\)`,R`\(\mathcal E=-A\omega\mu_0i_0n\sin^2\omega t\)`,R`\(\mathcal E=-A\omega\mu_0i_0n^2\cos\omega t\)`,R`\(\mathcal E=A\omega\mu_0i_0n\cos^2\omega t\)`],
dica:R`\(\Phi=\mu_0niA\), \(\mathcal E=-\dot\Phi\).`,
solucao:R`<p>\(\mathcal E=-\mu_0nA\dfrac{d}{dt}(i_0\cos\omega t)=A\omega\mu_0ni_0\sin\omega t\).</p>`});

P({id:'em-2023-4', ano:2023, prova:'EUF 2023 · Q23 [em4a]', topicos:['maxw'],
enunciado:R`<p>Numa região, \(\vec B=B_0\left[e^{-\alpha x}\cos(ky-\omega t)\hat x+e^{-\alpha x}\sin(ky-\omega t)\hat y+3e^{-\alpha y}\cos(kx-\omega t)\hat z\right]\). A relação entre \(\alpha\) e \(k\) é:</p>`,
opcoes:[R`\(\alpha=k\)`,R`\(\alpha=2\pi k\)`,R`\(\alpha=k\ln2\)`,R`\(\alpha=2\pi k\ln2\)`,R`\(\alpha=k/2\pi\)`],
dica:R`\(\nabla\cdot\vec B=0\). A componente \(z\) não depende de \(z\).`,
solucao:R`<p>\(\partial_xB_x+\partial_yB_y=B_0e^{-\alpha x}\cos(ky-\omega t)(-\alpha+k)=0\Rightarrow\alpha=k\).</p>`});

P({id:'em-2023-5', ano:2023, prova:'EUF 2023 · Q25 [em5a]', topicos:['circ'], fig:'fig/em_y23_q25.png',
enunciado:R`<p>O capacitor \(C\) é carregado com a chave na posição 1. Em \(t=0\), a chave passa para a posição 2. Qual gráfico representa a corrente \(I\) no indutor para \(t>0\)?</p>`,
opcoes:[{img:'fig/em_y23_q25A.png'},{img:'fig/em_y23_q25B.png'},{img:'fig/em_y23_q25C.png'},{img:'fig/em_y23_q25D.png'},{img:'fig/em_y23_q25E.png'}],
dica:R`Circuito LC ideal: a corrente no indutor não pode saltar; em \(t=0\) ela é nula.`,
solucao:R`<p>\(Q=Q_0\cos\omega t\) e \(I=\dot Q=-\omega Q_0\sin\omega t\): parte de zero e oscila sem amortecer (não há resistência). O sinal inicial negativo corresponde à convenção da prova; o essencial é \(I(0)=0\) com oscilação senoidal.</p>`});

P({id:'em-2023-6', ano:2023, prova:'EUF 2023 · Q27 [em6a]', topicos:['induc'], fig:'fig/em_y23_q27.png',
enunciado:R`<p>Uma lâmpada \(R\) tem os terminais ligados por um fio que forma um laço circular de diâmetro inicial \(D_0\) num campo constante \(B\). Em \(t=0\), as extremidades do laço são puxadas com velocidade \(v\) cada, diminuindo o diâmetro e mantendo a forma circular. A ddp nos terminais da lâmpada, em módulo, é:</p>`,
opcoes:[R`\(Bv\left(D_0-\dfrac{2vt}{\pi}\right)\)`,R`\(\dfrac{Bv}{2}\left(D_0+\dfrac{vt}{\pi}\right)\)`,R`\(\dfrac{Bv}{2}D_0\)`,R`\(BvD_0\)`,R`\(\dfrac{\pi Bv}{2}D_0\)`],
dica:R`O perímetro perde \(2vt\): \(\pi D=\pi D_0-2vt\).`,
solucao:R`<p>\(D=D_0-\dfrac{2vt}{\pi}\), \(A=\dfrac{\pi D^2}{4}\Rightarrow\left|\dfrac{dA}{dt}\right|=\dfrac{\pi D}{2}\cdot\dfrac{2v}{\pi}=vD\). Logo \(\mathcal E=BvD=Bv\left(D_0-\dfrac{2vt}{\pi}\right)\).</p>`});

P({id:'em-2023-7', ano:2023, prova:'EUF 2023 · Q29 [em7a]', topicos:['maxw'],
enunciado:R`<p>O campo elétrico no interior de um cilindro em vácuo é \(\vec E(t)=E_0e^{-t/\tau}\hat e_z\) (\(E_0,\tau>0\)). Em cilíndricas, o vetor de Poynting no interior é:</p>`,
opcoes:[R`\(\dfrac{\epsilon_0\rho}{2\tau}E_0^2e^{-2t/\tau}\hat e_\rho\)`,R`\(\dfrac{\epsilon_0\rho}{2\tau}E_0^2e^{-2t/\tau}\hat e_\varphi\)`,R`\(\dfrac{\epsilon_0}{2}E_0^2e^{-2t/\tau}\hat e_z\)`,R`\(\dfrac{\epsilon_0}{2}E_0^2e^{-2t/\tau}\hat e_\varphi\)`,R`0`],
dica:R`Ampère-Maxwell: \(B\,2\pi\rho=\mu_0\epsilon_0\pi\rho^2\dot E\). Depois \(\vec S=\vec E\times\vec B/\mu_0\).`,
solucao:R`<p>\(\vec B=-\dfrac{\mu_0\epsilon_0\rho E_0}{2\tau}e^{-t/\tau}\hat\varphi\). Com \(\hat z\times\hat\varphi=-\hat\rho\): \(\vec S=\dfrac{\epsilon_0\rho E_0^2}{2\tau}e^{-2t/\tau}\hat\rho\). Faz sentido: o campo decai e a energia flui para fora.</p>`});

P({id:'em-2023-8', ano:2023, prova:'EUF 2023 · Q31 [em8a]', topicos:['forca'], fig:'fig/em_y23_q31.png',
enunciado:R`<p>Numa região há \(\vec E=E_0\hat x\) e \(\vec B=B_0\hat z\) (\(E_0,B_0>0\)) e uma partícula massiva de carga positiva com velocidade no plano \(xy\). Quais trajetórias são possíveis?</p>`,
opcoes:[R`1 e 2`,R`1 e 4`,R`2 e 3`,R`3 e 4`,R`5 e 6`],
dica:R`Velocidade de deriva: \(\vec v_d=\vec E\times\vec B/B^2\).`,
solucao:R`<p>\(\vec v_d=\dfrac{E_0}{B_0}\hat x\times\hat z=-\dfrac{E_0}{B_0}\hat y\): a deriva é para \(-y\). A trajetória 2 (reta, com \(v=v_d\)) e a cicloidal 1, que avança para baixo com o sentido de giro correto para carga positiva, são possíveis.</p>`});

// ============ 2023 — 2º semestre ============
P({id:'em-2023b-1', ano:2023, prova:'EUF 2º/2023 · Q17 [em1a]', topicos:['cond'],
enunciado:R`<p>Duas esferas condutoras de raios \(R_A>R_B\), a uma distância \(d\gg R_A\), estão ligadas por um fio, com carga total \(Q\). O potencial na superfície das esferas é:</p>`,
opcoes:[R`\(V=\dfrac{1}{4\pi\epsilon_0}\dfrac{Q}{R_A+R_B}\)`,R`\(V=\dfrac{1}{4\pi\epsilon_0}\dfrac{Q}{R_A-R_B}\)`,R`\(V=\dfrac{1}{4\pi\epsilon_0}\dfrac{Q}{R_A+2R_B}\)`,R`\(V=\dfrac{1}{4\pi\epsilon_0}\dfrac{Q}{2R_A+R_B}\)`,R`\(V=\dfrac{1}{4\pi\epsilon_0}\dfrac{Q}{3R_A-R_B}\)`],
dica:R`Capacitores em paralelo: \(C=4\pi\epsilon_0(R_A+R_B)\).`,
solucao:R`<p>\(V=Q/C\) com \(C=4\pi\epsilon_0(R_A+R_B)\).</p>`});

P({id:'em-2023b-2', ano:2023, prova:'EUF 2º/2023 · Q19 [em2a]', topicos:['induc'],
enunciado:R`<p>Duas espiras concêntricas, A (raio \(a\)) e B (raio \(b\gg a\)), estão no mesmo plano. Em \(t=0\), A passa a girar em torno de um diâmetro com \(\omega\) constante; B está parada com corrente \(I_B\). A fem induzida em A é:</p>`,
opcoes:[R`\(\mathcal E=\dfrac{\mu_0\omega I_B\pi a^2}{2b}\sin\omega t\)`,R`\(\mathcal E=\dfrac{\mu_0\omega I_B\pi a^2}{2b}\cos\omega t\)`,R`\(\mathcal E=\dfrac{\mu_0\omega I_B\pi b^2}{4a}\sin\omega t\)`,R`\(\mathcal E=\dfrac{\mu_0\omega I_B\pi b^2}{4a}\cos\omega t\)`,R`\(\mathcal E=\dfrac{\mu_0\omega I_Ba^2}{2\pi b}\sin\omega t\)`],
dica:R`\(B\approx\mu_0I_B/2b\) uniforme sobre A; \(\Phi=B\pi a^2\cos\omega t\).`,
solucao:R`<p>\(\mathcal E=-\dot\Phi=\dfrac{\mu_0I_B}{2b}\pi a^2\omega\sin\omega t\).</p>`});

P({id:'em-2023b-3', ano:2023, prova:'EUF 2º/2023 · Q21 [em3a]', topicos:['circ'],
enunciado:R`<p>Um capacitor com carga \(Q_0\) e energia \(U_0\) descarrega por um resistor a partir de \(t=0\). Com \(\tau=RC\), em que instante a energia é \(U_0/4\)?</p>`,
opcoes:[R`\(t'=\dfrac{\ln4}{2}\tau\)`,R`\(t'=\dfrac{\ln2}{4}\tau\)`,R`\(t'=4\tau\)`,R`\(t'=2\tau\)`,R`\(t'=\tau/4\)`],
dica:R`\(U\propto Q^2\propto e^{-2t/\tau}\).`,
solucao:R`<p>\(e^{-2t'/\tau}=\frac14\Rightarrow t'=\frac{\tau}{2}\ln4=\tau\ln2\).</p>`});

P({id:'em-2023b-4', ano:2023, prova:'EUF 2º/2023 · Q23 [em4a]', topicos:['maxw'],
enunciado:R`<p>O campo elétrico no interior de um capacitor de placas circulares é \(\mathbf E=E_0(t/\tau)^2\hat z\). O campo magnético induzido entre as placas é:</p>`,
opcoes:[R`\(\mathbf B=r\mu_0\epsilon_0E_0\dfrac{t}{\tau^2}\hat\varphi\)`,R`\(\mathbf B=r\mu_0\epsilon_0E_0\dfrac{t}{\tau^2}\hat z\)`,R`\(\mathbf B=\pi r\mu_0\epsilon_0E_0\dfrac{t}{\tau^2}\hat\varphi\)`,R`\(\mathbf B=\pi r\mu_0\epsilon_0E_0\dfrac{t}{\tau^2}\hat z\)`,R`\(\mathbf B=2\pi r\mu_0\epsilon_0E_0\dfrac{t}{\tau^2}\hat\varphi\)`],
dica:R`\(B\,2\pi r=\mu_0\epsilon_0\pi r^2\dot E\).`,
solucao:R`<p>\(\dot E=2E_0t/\tau^2\Rightarrow B=\dfrac{r}{2}\mu_0\epsilon_0\cdot\dfrac{2E_0t}{\tau^2}\), azimutal.</p>`});

P({id:'em-2023b-5', ano:2023, prova:'EUF 2º/2023 · Q25 [em5a]', topicos:['forca','induc'],
enunciado:R`<p>Uma barra metálica fina de comprimento \(d\) se move sem girar com velocidade constante \(\vec v\), que faz um ângulo \(\theta\ne\pi/2\) com a barra. O campo \(\vec B\) é uniforme e perpendicular à barra e a \(\vec v\).</p><p>I. Há ddp não nula entre as extremidades da barra.<br>II. A força total devida a \(\vec B\) sobre a barra é nula.<br>III. O torque total devido a \(\vec B\) sobre a barra é nulo.</p>`,
opcoes:[R`Apenas I e II`,R`I, II e III`,R`Apenas II e III`,R`Apenas I`,R`Apenas III`],
dica:R`A barra se polariza (\(\pm q\) nas pontas). Essas cargas também se movem com \(\vec v\).`,
solucao:R`<p>I: \((\vec v\times\vec B)\) tem componente ao longo da barra (pois \(\theta\ne\pi/2\)), logo há ddp. II: a barra é neutra, então \(\sum q\,\vec v\times\vec B=0\). III: as cargas \(+q\) e \(-q\) nas pontas sofrem forças opostas, perpendiculares a \(\vec v\) e não alinhadas com a barra: formam um binário, e o torque é <b>não</b> nulo.</p>`});

P({id:'em-2023b-7', ano:2023, prova:'EUF 2º/2023 · Q29 [em7a]', topicos:['forca'],
enunciado:R`<p>Sangue numa artéria de diâmetro \(d=8{,}0\) mm atinge \(v=60\) cm/s. Há íons no plasma. Estime a máxima ddp entre as paredes sob um campo \(B=0{,}20\) T perpendicular ao fluxo.</p>`,
opcoes:[R`0,96 mV`,R`9,6 mV`,R`9,6 μV`,R`0,96 μV`,R`96 μV`],
dica:R`Equilíbrio Hall: \(qE=qvB\), \(V=Ed\).`,
solucao:R`<p>\(V=vBd=0{,}60\times0{,}20\times0{,}008=9{,}6\times10^{-4}\) V = 0,96 mV (é o princípio do fluxômetro eletromagnético).</p>`});

P({id:'em-2023b-8', ano:2023, prova:'EUF 2º/2023 · Q31 [em8a]', topicos:['magst'], fig:'fig/em_b23_q31.png',
enunciado:R`<p>Dois condutores cilíndricos paralelos (região cinza) conduzem densidades de corrente \(J\) uniformes em sentidos opostos. Isso equivale a dois cilindros de raio \(R\), com eixos a uma distância \(d\lt R\), cujas correntes se cancelam na sobreposição (região branca). O campo no ponto P, a uma distância \(a\) (na vertical) do ponto médio entre os eixos, é:</p>`,
opcoes:[R`\(\vec B=\frac12\mu_0Jd\,\hat y\)`,R`\(\vec B=\frac12\mu_0J\dfrac{ad}{R}\hat y\)`,R`\(\vec B=-\frac12\mu_0J\sqrt{(d/2)^2+a^2}\,\hat y\)`,R`\(\vec B=-\frac12\mu_0J\dfrac{(d/2)^2+a^2}{R}\hat y\)`,R`\(\vec B=\frac12\mu_0J\dfrac{((d/2)^2+a^2)^{3/2}}{R^2}\hat y\)`],
dica:R`Dentro de um cilindro com \(J\) uniforme: \(\vec B=\frac{\mu_0}{2}\vec J\times\vec r\). Some os dois cilindros.`,
solucao:R`<p>\(\vec B=\frac{\mu_0}{2}[\vec J\times\vec r_1+(-\vec J)\times\vec r_2]=\frac{\mu_0}{2}\vec J\times(\vec r_1-\vec r_2)=\frac{\mu_0}{2}\vec J\times\vec d\). Uniforme na região branca, de módulo \(\frac12\mu_0Jd\), na direção \(\hat y\).</p>`});

// ============ 2024 ============
P({id:'em-2024-1', ano:2024, prova:'EUF 2024 · Q17 [emPT1a]', topicos:['ondas'],
enunciado:R`<p>O campo elétrico de uma onda plana no vácuo é \(\mathbf E=E_0(\hat x+\hat z)e^{-i(\omega t-ky)}\), com \(\mathbf k=k\hat y\). O campo magnético é:</p>`,
opcoes:[R`\(\mathbf B=\dfrac{E_0}{c}e^{-i(\omega t-ky)}(\hat x-\hat z)\)`,R`\(\mathbf B=\dfrac{E_0}{c}e^{-i(\omega t-ky)}(\hat y+\hat z)\)`,R`\(\mathbf B=\dfrac{E_0}{c}e^{-i(\omega t-ky)}(\hat x+\hat z)\)`,R`\(\mathbf B=\dfrac{E_0}{c}e^{-i(\omega t+ky)}\hat y\)`,R`\(\mathbf B=\dfrac{E_0}{c}e^{-i(\omega t+ky)}\hat x\)`],
dica:R`\(\mathbf B=\frac1c\hat k\times\mathbf E\).`,
solucao:R`<p>\(\hat y\times\hat x=-\hat z\), \(\hat y\times\hat z=\hat x\): \(\mathbf B=\frac{E_0}{c}(\hat x-\hat z)e^{\cdots}\).</p>`});

P({id:'em-2024-2', ano:2024, prova:'EUF 2024 · Q19 [emPT2a]', topicos:['pot'],
enunciado:R`<p>O potencial na superfície de uma casca esférica de raio \(R\) é \(V=(V_0R/a)\cos\theta\). O potencial dentro da esfera, a \(r=R/2\), é:</p>`,
opcoes:[R`\(V=\dfrac{V_0}{2a}R\cos\theta\)`,R`\(V=\dfrac{V_0}{2a}R\)`,R`\(V=\dfrac{V_0}{3a}R\cos\theta\)`,R`\(V=\dfrac{V_0}{3a}R\)`,R`\(V=\dfrac{2V_0}{a}R\sin\theta\)`],
dica:R`Dentro: \(V\propto r\cos\theta\).`,
solucao:R`<p>\(V=\dfrac{V_0}{a}r\cos\theta\); em \(r=R/2\): \(\dfrac{V_0R}{2a}\cos\theta\).</p>`});

P({id:'em-2024-3', ano:2024, prova:'EUF 2024 · Q21 [emPT3a]', topicos:['maxw'],
enunciado:R`<p>No interior de um cilindro de raio \(R\) e altura \(h\) (eixo \(\hat z\)) há \(\mathbf E=\alpha\hat\rho+\beta\hat z\) e \(\mathbf B=\gamma\hat\varphi+\delta\hat z\). O valor absoluto da energia que atravessa a tampa superior por unidade de tempo é:</p>`,
opcoes:[R`\(\dfrac{\pi R^2\alpha\gamma}{\mu_0}\)`,R`\(\dfrac{2\pi R^2\beta\delta}{\mu_0}\)`,R`\(\dfrac{4\pi R^2\alpha\delta}{\gamma\beta\mu_0}\)`,R`\(\dfrac{R^2}{4\pi\alpha\gamma\mu_0}\)`,R`\(\dfrac{R^2}{2\pi\beta\delta\mu_0}\)`],
dica:R`Só \(S_z\) atravessa a tampa: vem de \(\hat\rho\times\hat\varphi=\hat z\).`,
solucao:R`<p>\(S_z=\alpha\gamma/\mu_0\); multiplique pela área \(\pi R^2\).</p>`});

P({id:'em-2024-4', ano:2024, prova:'EUF 2024 · Q23 [emPT4a]', topicos:['circ'],
enunciado:R`<p>Um fio de comprimento \(L_0\) e resistência \(R_0\) é esticado até \(L=2L_0\), mantendo resistividade e volume. A nova resistência é:</p>`,
opcoes:[R`\(4R_0\)`,R`\(R_0\)`,R`\(2R_0\)`,R`\(R_0/2\)`,R`\(R_0/4\)`],
dica:R`Volume fixo: dobrar \(L\) divide \(A\) por 2.`,
solucao:R`<p>\(R=\rho L/A\): \(L\times2\), \(A/2\Rightarrow R=4R_0\).</p>`});

P({id:'em-2024-5', ano:2024, prova:'EUF 2024 · Q25 [emPT5a]', topicos:['eletrost'],
enunciado:R`<p>Um elétron (massa \(m_e\)) é lançado de muito longe com velocidade \(v_0\) em direção a um próton fixo. A que distância a velocidade é cinco vezes a inicial?</p>`,
opcoes:[R`\(r=\dfrac{1}{48\pi\epsilon_0m_e}\left(\dfrac{e}{v_0}\right)^2\)`,R`\(r=\dfrac{1}{8\pi\epsilon_0m_e}\left(\dfrac{e}{v_0}\right)^2\)`,R`\(r=\dfrac{1}{4\pi\epsilon_0}\left(\dfrac{em_e}{v_0}\right)^2\)`,R`\(r=\dfrac{1}{48\pi\epsilon_0}\left(\dfrac{em_e}{v_0}\right)^2\)`,R`\(r=\dfrac{1}{4\pi\epsilon_0m_e}\left(\dfrac{e}{v_0}\right)^2\)`],
dica:R`Energia: \(\frac12m_e(25-1)v_0^2=\dfrac{e^2}{4\pi\epsilon_0r}\).`,
solucao:R`<p>\(12m_ev_0^2=\dfrac{e^2}{4\pi\epsilon_0r}\Rightarrow r=\dfrac{e^2}{48\pi\epsilon_0m_ev_0^2}\).</p>`});

P({id:'em-2024-6', ano:2024, prova:'EUF 2024 · Q27 [emPT6a]', topicos:['eletrost'],
enunciado:R`<p>Duas cascas esféricas concêntricas, com densidades \(\sigma_1\) (raio \(r_1\)) e \(\sigma_2\) (raio \(r_2=3r_1\)). O módulo do campo a \(r=2r_1\) é:</p>`,
opcoes:[R`\(E=\dfrac{\sigma_1}{4\epsilon_0}\)`,R`\(E=\dfrac{\sigma_1+9\sigma_2}{4\epsilon_0}\)`,R`\(E=0\)`,R`\(E=\dfrac52\dfrac{\sigma_1+\sigma_2}{\epsilon_0}\)`,R`\(E=\dfrac25\dfrac{\sigma_1+\sigma_2}{\epsilon_0}\)`],
dica:R`Em \(2r_1\), só a casca interna está dentro da superfície gaussiana.`,
solucao:R`<p>\(E=\dfrac{4\pi r_1^2\sigma_1}{4\pi\epsilon_0(2r_1)^2}=\dfrac{\sigma_1}{4\epsilon_0}\).</p>`});

P({id:'em-2024-7', ano:2024, prova:'EUF 2024 · Q29 [emPT7a]', topicos:['cond'],
enunciado:R`<p>Dois capacitores em série, \(C_1=C\) e \(C_2=2C\), suportam no máximo \(V_0\) cada. A maior energia que o conjunto pode armazenar é:</p>`,
opcoes:[R`\(U=\frac34CV_0^2\)`,R`\(U=\frac43CV_0^2\)`,R`\(U=\frac56CV_0^2\)`,R`\(U=\frac12CV_0^2\)`,R`\(U=\frac65CV_0^2\)`],
dica:R`Em série, a carga é a mesma; o menor capacitor tem a maior tensão e limita o conjunto.`,
solucao:R`<p>\(Q=CV_0\) (o \(C_1\) no limite); \(C_2\) fica com \(V_0/2\). \(U=\frac12CV_0^2+\frac12(2C)\frac{V_0^2}{4}=\frac34CV_0^2\).</p>`});

P({id:'em-2024-8', ano:2024, prova:'EUF 2024 · Q31 [emPT8a]', topicos:['circ'],
enunciado:R`<p>Num circuito RC com fem \(\mathcal E\), o capacitor descarregado carrega como \(q=C\mathcal E(1-e^{-t/RC})\). Em que instante a tensão no capacitor é metade da tensão no resistor?</p>`,
opcoes:[R`\(t=\ln\frac32\,RC\)`,R`\(t=\ln\frac12\,RC\)`,R`\(t=\ln\frac23\,RC\)`,R`\(t=\ln2\,RC\)`,R`\(t=\ln\frac14\,RC\)`],
dica:R`\(V_C=\mathcal E(1-e^{-x})\), \(V_R=\mathcal Ee^{-x}\), com \(x=t/RC\).`,
solucao:R`<p>\(1-e^{-x}=\frac12e^{-x}\Rightarrow e^{-x}=\frac23\Rightarrow t=RC\ln\frac32\). (As alternativas com \(\ln\) de número menor que 1 dão tempo negativo.)</p>`});

// ============ 2024 — 2º semestre ============
P({id:'em-2024b-1', ano:2024, prova:'EUF 2º/2024 · Q17 [emPT1a]', topicos:['eletrost'],
enunciado:R`<p>Um isolante cilíndrico infinito de raio \(R\) tem densidade de carga uniforme \(\nu>0\). O campo a \(\rho\lt R\) do eixo é:</p>`,
opcoes:[R`\(E=\dfrac{\nu\rho}{2\epsilon_0}\)`,R`\(E=\dfrac{\nu\rho}{4\epsilon_0}\)`,R`\(E=\dfrac{2\nu\rho}{\epsilon_0}\)`,R`\(E=\dfrac{\nu R^2}{\epsilon_0\rho}\)`,R`\(E=\dfrac{\nu R^2}{4\epsilon_0\rho}\)`],
dica:R`Gauss cilíndrico de raio \(\rho\) e altura \(h\).`,
solucao:R`<p>\(E\,2\pi\rho h=\nu\pi\rho^2h/\epsilon_0\Rightarrow E=\nu\rho/2\epsilon_0\).</p>`});

P({id:'em-2024b-2', ano:2024, prova:'EUF 2º/2024 · Q19 [emPT2a]', topicos:['circ'],
enunciado:R`<p>Um capacitor \(C\) com carga \(Q_0\) começa a descarregar por \(R\). Em que instante terá metade da carga?</p>`,
opcoes:[R`\(t=RC\ln2\)`,R`\(t=RC\ln3\)`,R`\(t=\frac12RC\ln2\)`,R`\(t=\frac13RC\ln3\)`,R`\(t=2RC\ln3\)`],
dica:R`\(Q=Q_0e^{-t/RC}\).`,
solucao:R`<p>\(e^{-t/RC}=\frac12\Rightarrow t=RC\ln2\). (Para a energia cair à metade seria \(\frac12RC\ln2\).)</p>`});

P({id:'em-2024b-3', ano:2024, prova:'EUF 2º/2024 · Q21 [emPT3a]', topicos:['magst'],
enunciado:R`<p>Um cabo coaxial: cilindro interno de raio \(a\) com corrente \(I\) uniforme na seção, e casca externa fina de raio \(b\) com corrente oposta. O campo para \(0\lt\rho\lt a\) é:</p>`,
opcoes:[R`\(\mathbf B=\dfrac{\mu_0I\rho}{2\pi a^2}\hat\varphi\)`,R`\(\mathbf B=\dfrac{\mu_0I\rho}{4\pi a^2}\hat\varphi\)`,R`\(\mathbf B=\dfrac{\mu_0I\rho^2}{2\pi a^3}\hat\varphi\)`,R`\(\mathbf B=\dfrac{\mu_0Ia}{2\pi\rho^2}\hat\varphi\)`,R`\(\mathbf B=\dfrac{\mu_0Ia}{4\pi\rho^2}\hat\varphi\)`],
dica:R`Corrente envolvida: \(I\rho^2/a^2\).`,
solucao:R`<p>\(B\,2\pi\rho=\mu_0I\rho^2/a^2\Rightarrow B=\mu_0I\rho/2\pi a^2\).</p>`});

P({id:'em-2024b-4', ano:2024, prova:'EUF 2º/2024 · Q23 [emPT4a]', topicos:['eletrost'],
enunciado:R`<p>Numa região, \(\mathbf E=\kappa r^2\hat r\) (esféricas). A densidade de carga é:</p>`,
opcoes:[R`\(\rho=4\kappa\epsilon_0r\)`,R`\(\rho=2\pi\kappa\epsilon_0r\)`,R`\(\rho=4\pi\kappa\epsilon_0r\)`,R`\(\rho=\kappa\epsilon_0r\)`,R`\(\rho=\pi\kappa\epsilon_0r\)`],
dica:R`\(\nabla\cdot\mathbf E=\frac1{r^2}\partial_r(r^2E_r)\).`,
solucao:R`<p>\(\rho=\epsilon_0\dfrac{1}{r^2}\dfrac{d}{dr}(\kappa r^4)=4\kappa\epsilon_0r\).</p>`});

P({id:'em-2024b-5', ano:2024, prova:'EUF 2º/2024 · Q25 [emPT5a]', topicos:['magst'], fig:'fig/em_b24_q25.png',
enunciado:R`<p>Uma espira no plano \(xy\) é formada por dois arcos centrados na origem C, de raios \(R_1\) e \(R_2>R_1\), ligados por segmentos retos (figura). A corrente \(I_0\) é anti-horária no arco maior, vista de cima. O campo em C é:</p>`,
opcoes:[R`\(\mathbf B=\dfrac{\mu_0I_0}{4}\left(\dfrac1{R_1}+\dfrac1{R_2}\right)\hat z\)`,R`\(\mathbf B=0\)`,R`\(\mathbf B=-\dfrac{\mu_0I_0}{4}\left(\dfrac1{R_1}+\dfrac1{R_2}\right)\hat z\)`,R`\(\mathbf B=\dfrac{\mu_0I_0}{4}\left(\dfrac1{R_1}-\dfrac1{R_2}\right)\hat z\)`,R`\(\mathbf B=\dfrac{\mu_0I_0}{4}\left(\dfrac1{R_2}-\dfrac1{R_1}\right)\hat z\)`],
dica:R`Semicírculo: \(\mu_0I/4R\). Os trechos retos são radiais e não contribuem. Siga a corrente para achar o sentido no arco menor.`,
solucao:R`<p>Seguindo a corrente: arco grande anti-horário (de cima), desce pelo segmento da esquerda, percorre o arco pequeno por baixo da esquerda para a direita, que também é anti-horário. As duas contribuições apontam para \(+\hat z\).</p>`});

P({id:'em-2024b-6', ano:2024, prova:'EUF 2º/2024 · Q27 [emPT6a]', topicos:['magst'],
enunciado:R`<p>O potencial vetor numa região é \(\mathbf A=\frac12C_0\rho\,\hat\varphi\) (cilíndricas). (i) Calcule \(\mathbf B\); (ii) perto de qual distribuição de corrente se observa esse campo?</p>`,
opcoes:[R`\(\mathbf B=C_0\hat z\); interior de um solenoide longo`,R`\(\mathbf B=\frac14C_0\rho^2\hat z\); proximidades de um fio retilíneo longo`,R`\(\mathbf B=C_0\hat\varphi\); interior de um solenoide longo`,R`\(\mathbf B=\frac12C_0\hat\varphi\); ao longo do eixo de uma espira circular`,R`\(\mathbf B=C_0\hat\varphi\); ao longo do eixo de uma espira circular`],
dica:R`\(B_z=\frac1\rho\partial_\rho(\rho A_\varphi)\).`,
solucao:R`<p>\(B_z=\frac1\rho\partial_\rho\left(\frac12C_0\rho^2\right)=C_0\): campo uniforme axial, como dentro de um solenoide.</p>`});

P({id:'em-2024b-7', ano:2024, prova:'EUF 2º/2024 · Q29 [emPT7a]', topicos:['ondas'],
enunciado:R`<p>Uma onda plana se propaga em \(\hat z\) num dielétrico não magnético, com \(\mathbf E=E_0e^{i(kz-\omega t)}(\hat x+3\hat y)\), \(k=1{,}8\times10^7\) m\(^{-1}\) e \(\omega=3{,}6\times10^{15}\) Hz. Calcule \(v_f\), \(n\) e \(\mathbf B\) (\(c=3{,}0\times10^8\) m/s).</p>`,
opcoes:[R`\(v_f=2{,}0\times10^8\) m/s; \(n=1{,}5\); \(\mathbf B=-\frac{kE_0}{\omega}e^{i(kz-\omega t)}(3\hat x-\hat y)\)`,R`\(v_f=2{,}0\times10^8\) m/s; \(n=1{,}5\); \(\mathbf B=\frac{kE_0}{\omega}e^{i(kz-\omega t)}(3\hat x+\hat y)\)`,R`\(v_f=5{,}0\times10^8\) m/s; \(n=6{,}0\); \(\mathbf B=-\frac{kE_0}{\omega}e^{i(kz-\omega t)}(3\hat x-\hat y)\)`,R`\(v_f=5{,}0\times10^8\) m/s; \(n=6{,}0\); \(\mathbf B=\frac{kE_0}{\omega}e^{i(kz-\omega t)}(3\hat x+\hat y)\)`,R`\(v_f=1{,}5\times10^8\) m/s; \(n=2{,}0\); \(\mathbf B=\frac{kE_0}{\omega}e^{i(kz-\omega t)}(\hat x-3\hat y)\)`],
dica:R`\(v_f=\omega/k\); \(\mathbf B=\frac{1}{\omega}\mathbf k\times\mathbf E\).`,
solucao:R`<p>\(v_f=2{,}0\times10^8\) m/s, \(n=1{,}5\). \(\hat z\times(\hat x+3\hat y)=\hat y-3\hat x=-(3\hat x-\hat y)\).</p>`});

P({id:'em-2024b-8', ano:2024, prova:'EUF 2º/2024 · Q31 [emPT8a]', topicos:['induc'],
enunciado:R`<p>Uma espira quadrada de lado \(D\) está dentro de um solenoide longo (comprimento \(L\), raio \(a\ll L\), \(N\) voltas), com o plano perpendicular ao eixo. A corrente é \(I_0\cos\omega t\). A fem induzida na espira é:</p>`,
opcoes:[R`\(\varepsilon=\dfrac{\omega\mu_0I_0ND^2}{L}\sin\omega t\)`,R`\(\varepsilon=\dfrac{\omega\mu_0I_0ND^2}{L}\cos\omega t\)`,R`\(\varepsilon=\dfrac{\mu_0I_0N^2D^2}{L^2}\sin\omega t\)`,R`\(\varepsilon=\dfrac{\mu_0I_0N(\pi a^2)}{L}\cos\omega t\)`,R`\(\varepsilon=\dfrac{\mu_0I_0N^2(\pi a^2)}{L^2}\sin\omega t\)`],
dica:R`A espira está dentro: use a área dela, \(D^2\), não a do solenoide.`,
solucao:R`<p>\(\Phi=\dfrac{\mu_0NI}{L}D^2\Rightarrow\varepsilon=\dfrac{\omega\mu_0NI_0D^2}{L}\sin\omega t\).</p>`});

// ============ 2025 ============
P({id:'em-2025-1', ano:2025, prova:'EUF 2025 · Q17 [emPT1a]', topicos:['magst'],
enunciado:R`<p>Duas espiras circulares concêntricas e coplanares, de raios \(R_1=R\) e \(R_2=R/2\), têm correntes \(i_1\) e \(i_2\) em sentidos opostos. Para que o campo no centro seja nulo:</p>`,
opcoes:[R`\(i_1=2i_2\)`,R`\(i_1=4i_2\)`,R`\(i_1=i_2/2\)`,R`\(i_1=i_2/4\)`,R`\(i_1=i_2\ln2\)`],
dica:R`\(B=\mu_0i/2R\) para cada uma.`,
solucao:R`<p>\(\dfrac{i_1}{R}=\dfrac{i_2}{R/2}\Rightarrow i_1=2i_2\).</p>`});

P({id:'em-2025-2', ano:2025, prova:'EUF 2025 · Q19 [emPT2a]', topicos:['magst','maxw'],
enunciado:R`<p>O campo \(\mathbf G=a\cos(bx)\hat x+cy\sin(bx)\hat y\) (\(a,b,c\) constantes) representa um campo magnético se:</p>`,
opcoes:[R`\(c=ab\)`,R`\(b=-ac\)`,R`\(a=bc\)`,R`\(b=-2c\)`,R`\(b=2ac\)`],
dica:R`\(\nabla\cdot\mathbf B=0\).`,
solucao:R`<p>\(-ab\sin(bx)+c\sin(bx)=0\Rightarrow c=ab\).</p>`});

P({id:'em-2025-3', ano:2025, prova:'EUF 2025 · Q21 [emPT3a]', topicos:['eletrost'],
enunciado:R`<p>Uma carga está numa casca esférica (\(R_1\lt r\lt R_2\)) com densidade \(\rho=a+br\). O campo para \(r>R_2\) é:</p>`,
opcoes:[R`\(E=\dfrac{1}{\epsilon_0r^2}\left[\frac a3(R_2^3-R_1^3)+\frac b4(R_2^4-R_1^4)\right]\)`,R`\(E=\dfrac{1}{\epsilon_0r^2}\left[\frac a3(R_2^2-R_1^2)+\frac b4(R_2^3-R_1^3)\right]\)`,R`\(E=\dfrac{1}{\epsilon_0r^2}\left[\frac a2(R_2^3-R_1^3)+\frac b3(R_2^4-R_1^4)\right]\)`,R`\(E=\dfrac{1}{\epsilon_0r^2}\left[\frac a2(R_2^2-R_1^2)+\frac b3(R_2^4-R_1^4)\right]\)`,R`\(E=\dfrac{1}{\epsilon_0r^2}\left[\frac a3(R_2^2-R_1^2)+\frac b3(R_2^2-R_1^2)\right]\)`],
dica:R`\(Q=\int(a+br)4\pi r^2dr\).`,
solucao:R`<p>\(Q=4\pi\left[\frac a3(R_2^3-R_1^3)+\frac b4(R_2^4-R_1^4)\right]\) e \(E=\dfrac{Q}{4\pi\epsilon_0r^2}\). As dimensões já eliminam as outras.</p>`});

P({id:'em-2025-4', ano:2025, prova:'EUF 2025 · Q23 [emPT4a]', topicos:['circ'],
enunciado:R`<p>Um resistor \(R\) está ligado a uma bateria de fem \(\mathcal E\) e resistência interna \(r\) fixa. Para qual \(R\) a potência dissipada em \(R\) é máxima?</p>`,
opcoes:[R`\(R=r\)`,R`\(R=2r\)`,R`\(R=4r\)`,R`\(R=r/2\)`,R`\(R=r/4\)`],
dica:R`Maximize \(P=\mathcal E^2R/(R+r)^2\).`,
solucao:R`<p>\(dP/dR=0\Rightarrow R=r\) (casamento de impedância), com \(P_{max}=\mathcal E^2/4r\).</p>`});

P({id:'em-2025-5', ano:2025, prova:'EUF 2025 · Q25 [emPT5a]', topicos:['cond'],
enunciado:R`<p>Um cubo condutor maciço tem uma cavidade esférica central com uma carga \(q=-6{,}0\) μC no centro. O condutor tem carga \(Q=18{,}0\) μC. Determine (i) a carga \(q_C\) na superfície da cavidade e (ii) a carga \(q_F\) em cada face do cubo.</p>`,
opcoes:[R`\(q_C=6{,}0\) μC; \(q_F=2{,}0\) μC`,R`\(q_C=-6{,}0\) μC; \(q_F=3{,}0\) μC`,R`\(q_C=6{,}0\) μC; \(q_F=3{,}0\) μC`,R`\(q_C=-6{,}0\) μC; \(q_F=2{,}0\) μC`,R`\(q_C=24{,}0\) μC; \(q_F=-1{,}0\) μC`],
dica:R`Na cavidade: \(q_C=-q\). O resto da carga do condutor vai para fora.`,
solucao:R`<p>\(q_C=+6\) μC. Fora: \(18-6=12\) μC; por simetria (a prova supõe distribuição igual nas faces), 2 μC por face.</p>`});

P({id:'em-2025-6', ano:2025, prova:'EUF 2025 · Q27 [emPT6a]', topicos:['forca'], fig:'fig/em_y25_q27.png',
enunciado:R`<p>Partículas de carga \(q\) e massa \(m\), aceleradas do repouso por uma ddp \(\phi\), entram num campo \(B=0{,}5\) T perpendicular e descrevem um círculo de raio \(r\). O gráfico mostra \(r^2\times\phi\). Qual é \(q/m\)?</p>`,
opcoes:[R`\(1{,}0\times10^6\) C/kg`,R`\(1{,}0\times10^{-6}\) C/kg`,R`\(5{,}0\times10^5\) C/kg`,R`\(1{,}0\times10^2\) C/kg`,R`\(5{,}0\times10^1\) C/kg`],
dica:R`\(r^2=\dfrac{2m}{qB^2}\phi\): a inclinação dá \(q/m\).`,
solucao:R`<p>Do gráfico, inclinação ≈ 0,8 m² por \(10^5\) V = \(8\times10^{-6}\) m²/V. \(q/m=\dfrac{2}{B^2\cdot\text{incl.}}=\dfrac{2}{0{,}25\times8\times10^{-6}}=1{,}0\times10^6\) C/kg.</p>`});

P({id:'em-2025-7', ano:2025, prova:'EUF 2025 · Q29 [emPT7a]', topicos:['induc','forca'],
enunciado:R`<p>Uma barra de comprimento \(a\), resistência \(R\) e massa \(m\) desliza sem atrito sobre trilhos horizontais, num campo \(B\) perpendicular. Em \(t=0\), uma bateria ideal \(V_0\) é ligada aos trilhos (corrente inicial \(i_0\)). Determine (i) \(F(v)\) e (ii) \(v\) quando \(i=i_0/4\).</p>`,
opcoes:[R`\(F=\frac{aB}{R}(V_0-aBv)\); \(v=\frac{3V_0}{4aB}\)`,R`\(F=\frac{aB}{R}(V_0+aBv)\); \(v=\frac{3V_0}{4aB}\)`,R`\(F=\frac{aB}{R}V_0\); \(v=\frac{3V_0}{4aBm}\)`,R`\(F=-\frac{aB}{R}(aBv)\); \(v=\frac{V_0}{4aB}\)`,R`\(F=\frac{aB}{R}(V_0-aBv)\); \(v=\frac{V_0}{4aBm}\)`],
dica:R`A fem de movimento \(aBv\) se opõe à bateria: \(i=(V_0-aBv)/R\).`,
solucao:R`<p>\(F=iaB=\frac{aB}{R}(V_0-aBv)\). Com \(i=i_0/4\): \(V_0-aBv=V_0/4\Rightarrow v=\frac{3V_0}{4aB}\). A velocidade terminal seria \(V_0/aB\).</p>`});

P({id:'em-2025-8', ano:2025, prova:'EUF 2025 · Q31 [emPT8a]', topicos:['ondas'],
enunciado:R`<p>Radiação monocromática incide normalmente numa placa quadrada de área \(b^2\), que reflete 80% e absorve 20% da intensidade. Os campos são \(E_0e^{-i(\omega t-kz)}\hat x\) e \((E_0/c)e^{-i(\omega t-kz)}\hat y\). A força da radiação na placa é:</p>`,
opcoes:[R`\(0{,}9\dfrac{E_0^2}{\mu_0c^2}b^2\hat z\)`,R`\(0{,}6\dfrac{E_0^2}{\mu_0c^2}b^2\hat z\)`,R`\(0{,}5\dfrac{E_0^2}{\mu_0c^2}b^2\hat z\)`,R`\(0{,}7\dfrac{E_0^2}{\mu_0c^2}b^2\hat z\)`,R`\(0{,}2\dfrac{E_0^2}{\mu_0c^2}b^2\hat z\)`],
dica:R`Pressão \(=\frac Ic(2f_{refl}+f_{abs})\), com \(I=E_0^2/2\mu_0c\).`,
solucao:R`<p>\(\frac Ic(1{,}6+0{,}2)=1{,}8\cdot\dfrac{E_0^2}{2\mu_0c^2}=0{,}9\dfrac{E_0^2}{\mu_0c^2}\); vezes \(b^2\).</p>`});

// ============ 2025 — 2º semestre ============
P({id:'em-2025b-1', ano:2025, prova:'EUF 2º/2025 · Q17 [emPT1a]', topicos:['cond','mat'],
enunciado:R`<p>Um capacitor de placas paralelas (área \(A\), separação \(D\)) tem um dielétrico \(\kappa_1\) em \(0\lt z\lt D/2\) e outro \(\kappa_2\) em \(D/2\lt z\lt D\). A capacitância é:</p>`,
opcoes:[R`\(C=\dfrac{2\epsilon_0A}{D}\dfrac{\kappa_1\kappa_2}{\kappa_1+\kappa_2}\)`,R`\(C=\dfrac{\epsilon_0A}{D}\dfrac{\kappa_1\kappa_2}{\kappa_1+\kappa_2}\)`,R`\(C=\dfrac{2\epsilon_0A}{D}\dfrac{\kappa_1+\kappa_2}{\kappa_1\kappa_2}\)`,R`\(C=\dfrac{\epsilon_0A}{D}\dfrac{\kappa_1+\kappa_2}{\kappa_1\kappa_2}\)`,R`\(C=\dfrac{\epsilon_0A}{D}\dfrac{\kappa_1\kappa_2+1}{\kappa_1+\kappa_2}\)`],
dica:R`Duas camadas de espessura \(D/2\) em série.`,
solucao:R`<p>\(C_i=\dfrac{2\kappa_i\epsilon_0A}{D}\); em série: \(\dfrac{2\epsilon_0A}{D}\dfrac{\kappa_1\kappa_2}{\kappa_1+\kappa_2}\). Teste: \(\kappa_1=\kappa_2=\kappa\) dá \(\kappa\epsilon_0A/D\).</p>`});

P({id:'em-2025b-2', ano:2025, prova:'EUF 2º/2025 · Q19 [emPT2a]', topicos:['magst'],
enunciado:R`<p>O potencial vetor é \(\mathbf A=(\alpha x+\beta e^{\gamma y})\hat x+\delta\cos(\epsilon x)\hat y\). O campo magnético na origem é:</p>`,
opcoes:[R`\(\mathbf B=-\beta\gamma\hat z\)`,R`\(\mathbf B=\beta\epsilon\hat z\)`,R`\(\mathbf B=\beta\hat x+\delta\hat y-\alpha\hat z\)`,R`\(\mathbf B=\beta\hat x-\epsilon\hat y+\alpha\hat z\)`,R`\(\mathbf B=\beta\gamma\hat x\)`],
dica:R`Só \(B_z=\partial_xA_y-\partial_yA_x\) sobrevive.`,
solucao:R`<p>\(B_z=-\delta\epsilon\sin(\epsilon x)-\beta\gamma e^{\gamma y}\); na origem, \(-\beta\gamma\).</p>`});

P({id:'em-2025b-3', ano:2025, prova:'EUF 2º/2025 · Q21 [emPT3a]', topicos:['eletrost','pot'],
enunciado:R`<p>Considere \(\mathbf E=(k/r)\hat r\). O trabalho do campo para levar uma carga \(q\) de \(r\) até \(2r\) é:</p>`,
opcoes:[R`\(W=kq\ln2\)`,R`\(W=2\pi kq\ln2\)`,R`\(W=kq\)`,R`\(W=2\pi kq\)`,R`\(W=kq/2\)`],
dica:R`\(W=q\int E\,dr\).`,
solucao:R`<p>\(W=qk\displaystyle\int_r^{2r}\frac{dr'}{r'}=kq\ln2\).</p>`});

P({id:'em-2025b-4', ano:2025, prova:'EUF 2º/2025 · Q23 [emPT4a]', topicos:['pot','cond'],
enunciado:R`<p>Um capacitor esférico tem cascas de raios \(a\) e \(b=2a\), com \(V(a)=V_0\) e \(V(b)=0\), vácuo entre elas. O potencial entre as cascas é:</p>`,
opcoes:[R`\(V(r)=\left(\dfrac{2a}{r}-1\right)V_0\)`,R`\(V(r)=2\left(\dfrac ar-1\right)V_0\)`,R`\(V(r)=\left(2-\dfrac ra\right)V_0\)`,R`\(V(r)=\left(\dfrac{2r}{a}-1\right)V_0\)`,R`\(V(r)=\left(\dfrac{a}{2r}-\dfrac12\right)V_0\)`],
dica:R`\(V=A/r+B\). Teste nas fronteiras.`,
solucao:R`<p>\(V(a)=V_0\) e \(V(2a)=0\Rightarrow V=V_0\left(\frac{2a}{r}-1\right)\).</p>`});

P({id:'em-2025b-5', ano:2025, prova:'EUF 2º/2025 · Q25 [emPT5a]', topicos:['eletrost'],
enunciado:R`<p>Um fio longo tem densidade \(\lambda\). Um cilindro de altura \(h\) e raio \(r\) tem eixo coincidente com o fio. O campo a uma distância \(r\) e o fluxo através das <b>bases</b> do cilindro são:</p>`,
opcoes:[R`\(E=\dfrac{\lambda}{2\pi\epsilon_0r}\) e \(\Phi_E=0\)`,R`\(E=\dfrac{\lambda}{2\pi\epsilon_0r}\) e \(\Phi_E=\dfrac{\lambda h}{\epsilon_0}\)`,R`\(E=0\) e \(\Phi_E=\dfrac{\lambda h}{\epsilon_0}\)`,R`\(E=\dfrac{\lambda}{2\pi\epsilon_0r}\) e \(\Phi_E=\dfrac{\pi r^2\lambda}{\epsilon_0}\)`,R`\(E=0\) e \(\Phi_E=0\), pois a carga total é nula`],
dica:R`O campo é radial: é paralelo às bases.`,
solucao:R`<p>O fluxo nas bases é zero; todo o fluxo \(\lambda h/\epsilon_0\) sai pela superfície lateral.</p>`});

P({id:'em-2025b-6', ano:2025, prova:'EUF 2º/2025 · Q27 [emPT6a]', topicos:['circ'],
enunciado:R`<p>Um material ôhmico de condutividade \(\sigma\) preenche o espaço entre duas cascas cilíndricas coaxiais (altura \(H\), raios \(a\lt b\)). Uma corrente \(I_0\) flui da interna para a externa. O campo elétrico em \(\rho=(a+b)/2\) é:</p>`,
opcoes:[R`\(\mathbf E=\dfrac{I_0}{\pi(a+b)H\sigma}\hat\rho\)`,R`\(\mathbf E=\dfrac{2I_0}{\pi(a^2-b^2)\sigma}\hat\rho\)`,R`\(\mathbf E=\dfrac{I_0}{4\pi(b-a)H\sigma}\hat\rho\)`,R`\(\mathbf E=\dfrac{I_0}{4\pi(b-a)H\sigma}\hat\varphi\)`,R`\(\mathbf E=\dfrac{I_0}{\pi(a^2-b^2)\sigma}\hat\varphi\)`],
dica:R`\(J=\dfrac{I_0}{2\pi\rho H}\) e \(E=J/\sigma\).`,
solucao:R`<p>\(E=\dfrac{I_0}{2\pi\rho H\sigma}\); em \(\rho=(a+b)/2\): \(\dfrac{I_0}{\pi(a+b)H\sigma}\), radial.</p>`});

P({id:'em-2025b-7', ano:2025, prova:'EUF 2º/2025 · Q29 [emPT7a]', topicos:['maxw'],
enunciado:R`<p>Um capacitor de placas paralelas descarrega por um fio; entre as placas, \(\mathbf E=-\dfrac{\sigma(t)}{\epsilon_0}\hat z\). Durante a descarga, o campo magnético entre as placas:</p>`,
opcoes:[R`é proporcional a \(d\sigma/dt\) e aponta na direção \(\hat\varphi\).`,R`é proporcional a \(\sigma(t)\) e aponta na direção \(\hat\varphi\).`,R`é proporcional a \(\sigma(t)\) e aponta na direção \(\hat\rho\).`,R`é zero, pois \(\mathbf E\) entre as placas não pode variar.`,R`é zero, pois \(\mathbf B\) é inicialmente nulo e não pode variar.`],
dica:R`Corrente de deslocamento \(\epsilon_0\partial_t\mathbf E\).`,
solucao:R`<p>Ampère-Maxwell: \(B\,2\pi\rho=\mu_0\epsilon_0\pi\rho^2\dot E\propto\dot\sigma\), com \(\mathbf B\) azimutal.</p>`});

P({id:'em-2025b-8', ano:2025, prova:'EUF 2º/2025 · Q31 [emPT8a]', topicos:['induc'], fig:'fig/em_b25_q31.png',
enunciado:R`<p>Uma barra magnética cai (polo N embaixo, S em cima) através de uma espira; as setas indicam o sentido positivo da corrente. O campo da barra está ao longo do seu comprimento. Qual gráfico representa a corrente na espira?</p>`,
opcoes:[R`I`,R`II`,R`III`,R`IV`,R`V`],
dica:R`Lenz: na aproximação, a espira “repele” o N; no afastamento, “atrai”. A corrente troca de sinal ao passar.`,
solucao:R`<p>A corrente é positiva enquanto o ímã se aproxima e negativa quando ele se afasta, com zero no meio da passagem (fluxo máximo): gráfico I. Invertendo os polos (versão b da prova), a resposta passa a ser II.</p>`});

// ============ 2026 ============
P({id:'em-2026-1', ano:2026, prova:'EUF 2026 · Q17 [emPT1a]', topicos:['eletrost'],
enunciado:R`<p>Um anel fino de raio \(R\) e carga \(Q>0\) está no plano \(xy\), centrado na origem. Uma partícula de massa \(m\) e carga \(q_0>0\) no eixo \(z\), a uma altura \(z=R\), sente também o peso (\(\mathbf g\) em \(-z\)). Qual \(m\) mantém o equilíbrio?</p>`,
opcoes:[R`\(m=\dfrac{q_0Q}{8\sqrt2\pi\epsilon_0gR^2}\)`,R`\(m=\dfrac{q_0Q}{4\sqrt2\pi\epsilon_0gR^2}\)`,R`\(m=\dfrac{q_0Q}{8\sqrt3\pi\epsilon_0gR^2}\)`,R`\(m=\dfrac{q_0Q}{4\sqrt3\pi\epsilon_0gR^2}\)`,R`\(m=\dfrac{q_0Q}{4\epsilon_0gR^2}\)`],
dica:R`\(E_z=\dfrac{Qz}{4\pi\epsilon_0(R^2+z^2)^{3/2}}\).`,
solucao:R`<p>Em \(z=R\): \(E=\dfrac{QR}{4\pi\epsilon_0(2R^2)^{3/2}}=\dfrac{Q}{8\sqrt2\pi\epsilon_0R^2}\). \(mg=q_0E\).</p>`});

P({id:'em-2026-2', ano:2026, prova:'EUF 2026 · Q19 [emPT2a]', topicos:['pot'],
enunciado:R`<p>Duas cascas cilíndricas longas e concêntricas, de raios \(a\) e \(b=2a\), têm densidades \(\lambda\) (interna) e \(-\lambda\) (externa). A diferença \(\Delta V=V(b)-V(a)\) é:</p>`,
opcoes:[R`\(-\dfrac{\lambda}{2\pi\epsilon_0}\ln2\)`,R`\(-\dfrac{\lambda}{2\epsilon_0}\ln2\)`,R`\(-\dfrac{\lambda}{2\pi\epsilon_0}\)`,R`\(-\dfrac{\lambda}{2\epsilon_0}\)`,R`\(-\dfrac{\lambda}{4\pi\epsilon_0}\)`],
dica:R`\(\Delta V=-\int_a^bE\,dr\).`,
solucao:R`<p>\(-\displaystyle\int_a^{2a}\frac{\lambda}{2\pi\epsilon_0r}dr=-\frac{\lambda}{2\pi\epsilon_0}\ln2\).</p>`});

P({id:'em-2026-3', ano:2026, prova:'EUF 2026 · Q21 [emPT3a]', topicos:['eletrost'],
enunciado:R`<p>Uma carga \(Q\) está na origem. Qual é o fluxo elétrico através da porção da esfera de raio \(R\) com \(0\le\theta\le\pi/4\) e \(0\le\varphi\le2\pi\)?</p>`,
opcoes:[R`\(\Phi_E=\dfrac{Q}{2\epsilon_0}\left(1-\dfrac{\sqrt2}{2}\right)\)`,R`\(\Phi_E=\dfrac{Q}{2\epsilon_0}\)`,R`\(\Phi_E=\dfrac{Q}{4\epsilon_0}\left(1-\sqrt2\right)\)`,R`\(\Phi_E=\dfrac{Q}{4\pi\epsilon_0}\)`,R`\(\Phi_E=\dfrac{Q}{4\pi\epsilon_0}\left(1-\dfrac{\sqrt3}{2}\right)\)`],
dica:R`Fração do ângulo sólido: \(\dfrac{2\pi(1-\cos\beta)}{4\pi}\).`,
solucao:R`<p>\(\Phi=\dfrac{Q}{\epsilon_0}\cdot\dfrac{1-\cos(\pi/4)}{2}=\dfrac{Q}{2\epsilon_0}\left(1-\dfrac{\sqrt2}{2}\right)\).</p>`});

P({id:'em-2026-4', ano:2026, prova:'EUF 2026 · Q23 [emPT4a]', topicos:['ondas','maxw'],
enunciado:R`<p>Uma onda plana no vácuo em \(+z\) tem \(\mathbf E=E_0\cos(\omega t-\beta z)\hat x\). A média temporal do módulo do vetor de Poynting é:</p>`,
opcoes:[R`\(\dfrac12\dfrac{E_0^2}{c\mu_0}\)`,R`\(\dfrac{1}{2\pi}\dfrac{E_0^2}{c\mu_0}\)`,R`\(\dfrac14\dfrac{E_0^2}{c\mu_0}\)`,R`\(\dfrac{1}{4\pi}\dfrac{E_0^2}{c\mu_0}\)`,R`\(\dfrac{E_0^2}{c\mu_0}\)`],
dica:R`\(S=EB/\mu_0=E^2/c\mu_0\) e \(\langle\cos^2\rangle=1/2\).`,
solucao:R`<p>\(\langle S\rangle=\dfrac{E_0^2}{2c\mu_0}\).</p>`});

P({id:'em-2026-5', ano:2026, prova:'EUF 2026 · Q25 [emPT5a]', topicos:['mat'],
enunciado:R`<p>Um cilindro tem magnetização permanente uniforme \(\mathbf M=M_0\hat z\), paralela ao eixo. As correntes ligadas superficial \(\mathbf K_M\) e volumétrica \(\mathbf J_M\) são:</p>`,
opcoes:[R`\(\mathbf K_M=M_0\hat\varphi\) na superfície lateral e \(\mathbf J_M=0\) no volume`,R`\(\mathbf K_M=-M_0\hat\varphi\) nas tampas e \(\mathbf J_M=0\) no volume`,R`\(\mathbf K_M=0\) na superfície e \(\mathbf J_M=M_0\hat z\) no volume`,R`\(\mathbf K_M=0\) na superfície e \(\mathbf J_M=M_0\hat\varphi\) no volume`,R`\(\mathbf K_M=0\) na superfície e \(\mathbf J_M=0\) no volume`],
dica:R`\(\mathbf J_M=\nabla\times\mathbf M\), \(\mathbf K_M=\mathbf M\times\hat n\).`,
solucao:R`<p>\(\mathbf M\) uniforme: \(\mathbf J_M=0\). Lateral: \(\hat z\times\hat\rho=\hat\varphi\Rightarrow\mathbf K_M=M_0\hat\varphi\). Tampas: \(\hat z\times\pm\hat z=0\). É um “solenoide” equivalente.</p>`});

P({id:'em-2026-6', ano:2026, prova:'EUF 2026 · Q27 [emPT6a]', topicos:['circ'], fig:'fig/em_y26_q27.png',
enunciado:R`<p>Um circuito LC (capacitor inicialmente com carga \(Q_0\), circuito aberto) tem a chave fechada em \(t=0\). Os gráficos mostram curvas possíveis para \(Q(t)\) (em unidades de \(Q_0\)), com \(t\) em unidades de \(2\pi\sqrt{LC}\). Qual representa \(Q(t)\)?</p>`,
opcoes:[R`I`,R`II`,R`III`,R`IV`,R`V`],
dica:R`\(Q=Q_0\cos(t/\sqrt{LC})\): começa em 1 e tem período 1 nessas unidades.`,
solucao:R`<p>Cosseno que parte de 1, passa por \(-1\) em \(t=0{,}5\) e volta a 1 em \(t=1\): curva I. As outras têm período errado, decaem (RC/RL) ou começam em zero.</p>`});

P({id:'em-2026-7', ano:2026, prova:'EUF 2026 · Q29 [emPT7a]', topicos:['cond'], fig:'fig/em_y26_q29.png',
enunciado:R`<p>A figura é um corte de dois cilindros condutores coaxiais de mesmo comprimento, em equilíbrio, com os raios indicados (\(a\lt b\lt c\lt d\)). Na superfície \(\rho=b\) há densidade \(\sigma_0\). A densidade na superfície \(\rho=c\) é:</p>`,
opcoes:[R`\(-\sigma_0\dfrac bc\)`,R`\(\sigma_0\dfrac bc\)`,R`\(-\sigma_0\dfrac cb\)`,R`\(\sigma_0\dfrac cb\)`,R`0`],
dica:R`O campo é nulo dentro do condutor externo: a carga em \(\rho=c\) anula a de \(\rho=b\).`,
solucao:R`<p>\(\sigma_c\,2\pi c=-\sigma_0\,2\pi b\Rightarrow\sigma_c=-\sigma_0b/c\).</p>`});

P({id:'em-2026-8', ano:2026, prova:'EUF 2026 · Q31 [emPT8a]', topicos:['ondas'], fig:'fig/em_y26_q31.png',
enunciado:R`<p>Luz não polarizada de intensidade \(I_0\) atravessa dois polarizadores: o primeiro com eixo em \(x\), o segundo com eixo a um ângulo \(\theta\) de \(x\). A intensidade final é \(3I_0/8\). O ângulo \(\theta\) é:</p>`,
opcoes:[R`30°`,R`90°`,R`45°`,R`60°`,R`15°`],
dica:R`\(I=\frac{I_0}{2}\cos^2\theta\).`,
solucao:R`<p>\(\cos^2\theta=\frac34\Rightarrow\theta=30^\circ\).</p>`});
})();
