window.BANK = window.BANK || [];
(function(){
const P = q => window.BANK.push(Object.assign({area:'mec', tipo:'disc'}, q));
const R = String.raw;

P({id:'2010-2-q1', ano:2010, sem:'2º sem.', prova:'EUF 2º/2010 · Parte 1 · Q1', topicos:['mov1d','osc'],
enunciado: R`<p>A interação entre dois átomos de massas \(m_1\) e \(m_2\), que formam uma molécula, pode ser descrita pelo potencial de Lennard-Jones</p>
\[V(x)=A\left[\left(\frac{b}{x}\right)^{12}-2\left(\frac{b}{x}\right)^{6}\right],\]
<p>onde \(A\) e \(b\) são parâmetros positivos e \(x\) é a separação interatômica. Trate o problema classicamente e despreze qualquer rotação da molécula.</p>`,
itens:[R`Determine a posição de equilíbrio em função de \(A\) e \(b\).`, R`Calcule a menor energia para dissociar a molécula.`, R`Mostre que o equilíbrio é estável e calcule a frequência de pequenas oscilações em torno da posição de equilíbrio.`, R`Desenhe um gráfico do potencial indicando os parâmetros obtidos nos itens (a) e (b).`],
dica: R`Equilíbrio é \(V'(x_0)=0\); estabilidade e frequência saem de \(V''(x_0)\). Lembre que a massa que oscila é a <b>massa reduzida</b>.`,
solucao: R`<p><b>(a)</b> \(V'(x)=A\left[-\dfrac{12b^{12}}{x^{13}}+\dfrac{12b^{6}}{x^{7}}\right]=0\Rightarrow x_0=b.\)</p>
<p><b>(b)</b> \(V(b)=A(1-2)=-A\) e \(V(\infty)=0\). A energia mínima de dissociação é \(E_d=A\).</p>
<p><b>(c)</b> \(V''(x)=A\left[\dfrac{156\,b^{12}}{x^{14}}-\dfrac{84\,b^{6}}{x^{8}}\right]\Rightarrow V''(b)=\dfrac{72A}{b^2}>0\): mínimo, equilíbrio estável. O movimento relativo tem massa reduzida \(\mu=\dfrac{m_1m_2}{m_1+m_2}\):</p>
\[\omega=\sqrt{\frac{V''(b)}{\mu}}=\frac{6}{b}\sqrt{\frac{2A}{\mu}}.\]
<p><b>(d)</b> Parede repulsiva forte para \(x<b\) (o potencial zera em \(x=b/2^{1/6}\)), mínimo \(-A\) em \(x=b\) e aproximação lenta de zero por baixo para \(x\to\infty\).</p>`});

P({id:'2010-2-q2', ano:2010, sem:'2º sem.', prova:'EUF 2º/2010 · Parte 1 · Q2', topicos:['rigido','sist'], fig:'fig/e10b_q2.png',
enunciado: R`<p>No “salto Fosbury”, suponha que o atleta possa ser aproximado por uma barra rígida homogênea de massa \(m\) e comprimento \(\ell\), inclinada de um ângulo \(\theta\) e movendo-se com velocidade \(v_0\) para a direita (figura). No momento do salto, a extremidade inferior atinge o ponto P e a barra começa a girar em torno de P.</p>`,
itens:[R`Calcule o momento de inércia da barra em relação à sua extremidade.`, R`A conservação de uma grandeza física permite que a barra obtenha uma componente vertical para a velocidade do seu centro de massa. Qual é essa grandeza?`, R`Calcule a componente vertical \(v_v\) da velocidade do centro de massa imediatamente após atingir P.`, R`Qual é a altura máxima atingida pelo centro de massa em relação ao solo?`],
dica: R`A força impulsiva em P não faz torque em relação a P. Calcule \(L_P\) antes (translação do CM) e depois (rotação pura em torno de P).`,
solucao: R`<p><b>(a)</b> \(I_P=\dfrac{1}{3}m\ell^2\).</p>
<p><b>(b)</b> O momento angular em relação a P: no choque, a única força impulsiva atua em P e tem braço nulo.</p>
<p><b>(c)</b> Antes: o CM está a uma altura \(\frac{\ell}{2}\sin\theta\) acima de P e move-se horizontalmente, então \(L_P=m v_0\frac{\ell}{2}\sin\theta\). Depois: \(L_P=I_P\,\omega\). Logo</p>
\[\omega=\frac{3v_0\sin\theta}{2\ell}.\]
<p>O CM gira em torno de P com velocidade \(\omega\ell/2\), perpendicular à barra. A componente vertical é \(\frac{\omega\ell}{2}\cos\theta\):</p>
\[v_v=\frac{3}{4}v_0\sin\theta\cos\theta=\frac{3}{8}v_0\sin 2\theta.\]
<p><b>(d)</b> Tratando o CM como projétil a partir daí, ele parte de \(\frac{\ell}{2}\sin\theta\) e sobe \(v_v^2/2g\):</p>
\[h_{\max}=\frac{\ell}{2}\sin\theta+\frac{9\,v_0^2\sin^2\theta\cos^2\theta}{32\,g}.\]
<p class="nota">Hipótese: depois do impulso a barra se descola de P; o CM segue em queda livre.</p>`});

P({id:'2011-1-q1', ano:2011, sem:'1º sem.', prova:'EUF 1º/2011 · Parte 1 · Q1', topicos:['rigido','newton'], fig:'fig/e11a_q1.png',
enunciado: R`<p>Um corpo de massa \(M\) e seção circular de raio \(R\) rola sem deslizar num plano inclinado de ângulo \(\theta\). O coeficiente de atrito estático é \(\mu_e\), o momento de inércia em relação ao centro O é \(I\) e a gravidade é \(g\).</p>`,
itens:[R`Desenhe o diagrama de forças. Escreva a relação entre \(\dot\varphi\) e \(\dot x\) para rolamento sem deslizamento.`, R`Determine a aceleração \(\ddot x\) ao longo do plano.`, R`O corpo parte do repouso na origem indicada. Calcule a energia mecânica no início e no fim. Ela se conserva?`, R`Calcule \(I\) para (i) um anel e (ii) um disco. A partir de qual \(\theta\) cessa o rolamento puro em cada caso? Responda em termos de \(\mu_e\).`],
dica: R`Duas equações: \(M\ddot x=Mg\sin\theta-f\) e \(I\ddot\varphi=fR\), mais o vínculo \(\dot x=R\dot\varphi\). O rolamento puro falha quando o \(f\) necessário passa de \(\mu_eN\).`,
solucao: R`<p><b>(a)</b> Peso \(Mg\), normal \(N=Mg\cos\theta\) e atrito estático \(f\) apontando para cima do plano, no ponto de contato. Vínculo: \(\dot x=R\dot\varphi\).</p>
<p><b>(b)</b> \(M\ddot x=Mg\sin\theta-f\) e \(I\ddot\varphi=fR\Rightarrow f=I\ddot x/R^2\):</p>
\[\ddot x=\frac{g\sin\theta}{1+I/(MR^2)}.\]
<p><b>(c)</b> Com o zero de energia potencial na base: \(E_i=Mgh\) e \(E_f=\frac12M\dot x^2+\frac12I\dot\varphi^2=Mgh\). A energia se conserva: o atrito estático atua num ponto com velocidade nula e não realiza trabalho.</p>
<p><b>(d)</b> Anel: \(I=MR^2\). Disco: \(I=\frac12MR^2\). A condição \(f\le\mu_e Mg\cos\theta\) com \(f=\dfrac{I/MR^2}{1+I/MR^2}Mg\sin\theta\) dá</p>
\[\tan\theta\le\mu_e\left(1+\frac{MR^2}{I}\right).\]
<p>(i) Anel: desliza para \(\tan\theta>2\mu_e\). (ii) Disco: desliza para \(\tan\theta>3\mu_e\).</p>`});

P({id:'2011-1-q2', ano:2011, sem:'1º sem.', prova:'EUF 1º/2011 · Parte 1 · Q2', topicos:['lagr','osc'], fig:'fig/e11a_q2.png',
enunciado: R`<p>Um pêndulo invertido é formado por uma barra de massa \(M\) e momento de inércia \(I_0\) em relação ao seu CM, de coordenadas \((X,Y)\). A barra gira livremente no plano \(xy\) em torno de um eixo em \((x_p,y_p)\), a uma distância \(\ell\) do CM; \(\theta\) é medido a partir da vertical.</p>
<p>Nos itens (b)–(d), o eixo oscila horizontalmente: \(y_p=0\), \(x_p(t)=A\cos\omega t\).</p>`,
itens:[R`Escreva a energia cinética e a potencial em termos de \(X\), \(Y\) e \(\theta\).`, R`Escreva a lagrangiana em termos de \(\theta\).`, R`Escreva a equação de movimento.`, R`Para \(\theta\) pequeno, mostre que \(\theta(t)=\alpha\cos\omega t+\beta\sin\omega t\) é solução e determine \(\alpha\) e \(\beta\).`],
dica: R`\(X=x_p+\ell\sin\theta\), \(Y=\ell\cos\theta\). O termo com \(\dot x_p\,\dot\theta\) vira uma força periódica na equação de \(\theta\).`,
solucao: R`<p><b>(a)</b> \(T=\frac12M(\dot X^2+\dot Y^2)+\frac12I_0\dot\theta^2\), \(V=MgY\).</p>
<p><b>(b)</b> Com \(X=A\cos\omega t+\ell\sin\theta\), \(Y=\ell\cos\theta\):</p>
\[L=\tfrac12M\left[A^2\omega^2\sin^2\omega t-2A\omega\ell\,\dot\theta\sin\omega t\cos\theta\right]+\tfrac12(I_0+M\ell^2)\dot\theta^2-Mg\ell\cos\theta.\]
<p><b>(c)</b> Os termos \(MA\omega\ell\,\dot\theta\sin\omega t\sin\theta\) se cancelam:</p>
\[(I_0+M\ell^2)\ddot\theta-Mg\ell\sin\theta=MA\omega^2\ell\cos\omega t\cos\theta.\]
<p><b>(d)</b> Linearizando: \((I_0+M\ell^2)\ddot\theta-Mg\ell\,\theta=MA\omega^2\ell\cos\omega t\). Substituindo a tentativa, o termo em seno exige \(\beta=0\) e o termo em cosseno dá</p>
\[\alpha=-\frac{MA\omega^2\ell}{(I_0+M\ell^2)\omega^2+Mg\ell},\qquad \beta=0.\]
<p class="nota">Essa é a solução particular. A homogênea cresce exponencialmente, porque o pêndulo invertido é instável.</p>`});

P({id:'2011-2-q1', ano:2011, sem:'2º sem.', prova:'EUF 2º/2011 · Parte 1 · Q1', topicos:['sist','rigido'], fig:'fig/e11b_q1.png',
enunciado: R`<p>Uma bala de massa \(m\) é disparada com velocidade \(v\) contra um disco homogêneo de massa \(M\) e raio \(R\), inicialmente parado, deitado sobre uma superfície horizontal lisa sem atrito. A bala atinge o disco como indicado na figura (o raio até o ponto de impacto faz 30° com a horizontal) e fica retida na superfície do disco. Considere que o CM do sistema após a colisão coincide com o centro do disco. Dado: \(I_{CM}^{disco}=\frac12MR^2\).</p>`,
itens:[R`Qual é a velocidade do centro do disco após a colisão?`, R`Qual é a velocidade angular do sistema após a colisão?`, R`Qual é a variação de energia do sistema devido à colisão?`],
dica: R`Momento linear e momento angular em relação ao centro se conservam. O parâmetro de impacto é \(R\sin30^\circ\).`,
solucao: R`<p><b>(a)</b> \(mv=(M+m)V\Rightarrow V=\dfrac{mv}{M+m}\).</p>
<p><b>(b)</b> O parâmetro de impacto em relação ao centro é \(d=R\sin30^\circ=R/2\). Com \(I=\frac12MR^2+mR^2\):</p>
\[mv\frac{R}{2}=\left(\tfrac12M+m\right)R^2\omega\Rightarrow\omega=\frac{mv}{(M+2m)R}.\]
<p><b>(c)</b></p>
\[\Delta E=\frac{m^2v^2}{2(M+m)}+\frac{m^2v^2}{4(M+2m)}-\frac12mv^2\lt 0.\]
<p>A energia é dissipada porque a colisão é perfeitamente inelástica.</p>`});

P({id:'2011-2-q2', ano:2011, sem:'2º sem.', prova:'EUF 2º/2011 · Parte 1 · Q2', topicos:['lagr','central','osc'],
enunciado: R`<p>Uma partícula de massa \(m\), sob gravidade \(g\), move-se no interior da superfície de um cone invertido cuja geratriz forma um ângulo \(\alpha\) com o eixo. O vértice está na origem e o eixo é vertical. Despreze o atrito.</p>`,
itens:[R`Determine a energia cinética e a potencial (use coordenadas esféricas).`, R`Escreva a lagrangiana e obtenha as equações do movimento.`, R`Há grandezas conservadas? Quais? Justifique.`, R`Obtenha a hamiltoniana em termos das coordenadas e momentos e compare-a com a energia mecânica.`, R`Mostre que a partícula pode executar pequenas oscilações radiais em torno de \(r_0\) e determine sua frequência. Compare com a frequência de revolução no movimento circular.`],
dica: R`Com \(\theta=\alpha\) fixo: \(T=\frac12m(\dot r^2+r^2\sin^2\alpha\,\dot\varphi^2)\). \(\varphi\) é cíclica; use o potencial efetivo.`,
solucao: R`<p><b>(a)</b> \(T=\frac12m(\dot r^2+r^2\sin^2\alpha\,\dot\varphi^2)\), \(V=mgr\cos\alpha\).</p>
<p><b>(b)</b> \(L=T-V\):</p>
\[m\ddot r-mr\sin^2\alpha\,\dot\varphi^2+mg\cos\alpha=0,\qquad\frac{d}{dt}\left(mr^2\sin^2\alpha\,\dot\varphi\right)=0.\]
<p><b>(c)</b> \(p_\varphi=mr^2\sin^2\alpha\,\dot\varphi\equiv\ell\) (é \(L_z\); \(\varphi\) é cíclica) e a energia (\(L\) não depende de \(t\)).</p>
<p><b>(d)</b> \(H=\dfrac{p_r^2}{2m}+\dfrac{p_\varphi^2}{2mr^2\sin^2\alpha}+mgr\cos\alpha\). Como os vínculos não dependem do tempo, \(H=E\).</p>
<p><b>(e)</b> \(V_{ef}=\dfrac{\ell^2}{2mr^2\sin^2\alpha}+mgr\cos\alpha\). O mínimo está em \(r_0^3=\dfrac{\ell^2}{m^2g\sin^2\alpha\cos\alpha}\). Usando essa relação, \(V_{ef}''(r_0)=3mg\cos\alpha/r_0\):</p>
\[\omega_r=\sqrt{\frac{3g\cos\alpha}{r_0}},\qquad \dot\varphi_0=\sqrt{\frac{g\cos\alpha}{r_0\sin^2\alpha}},\qquad\frac{\omega_r}{\dot\varphi_0}=\sqrt3\sin\alpha.\]`});

P({id:'2012-1-q1', ano:2012, sem:'1º sem.', prova:'EUF 1º/2012 · Parte 1 · Q1', topicos:['rigido','sist'], fig:'fig/e12a_q1.png',
enunciado: R`<p>Duas esferas ocas, de massa \(M\) e raio \(R\), giram em torno do CM do sistema com período inicial \(T_0\), mantidas a \(d_0=8R\) (entre centros) por um fio ideal. Um motor dentro de uma das esferas começa a enrolar o fio lentamente, aproximando as esferas. O momento de inércia do motor é desprezível e não há gravidade. Dado: \(I=\frac23MR^2\) para a casca esférica.</p>`,
itens:[R`Determine o momento angular do sistema em relação ao CM antes de ligar o motor.`, R`Calcule \(\omega_f\) quando uma esfera encosta na outra.`, R`Calcule a variação da energia cinética até esse instante.`, R`Qual foi o trabalho realizado pelo motor?`],
dica: R`Teorema dos eixos paralelos para cada esfera (distância ao CM: \(4R\) e depois \(R\)). O motor exerce só forças internas, então \(L\) se conserva.`,
solucao: R`<p><b>(a)</b> \(I_0=2\left[\frac23MR^2+M(4R)^2\right]=\frac{100}{3}MR^2\), com \(\omega_0=2\pi/T_0\):</p>
\[L=\frac{200\pi MR^2}{3T_0}.\]
<p><b>(b)</b> Com as esferas encostadas, cada centro fica a \(R\) do CM: \(I_f=2\left[\frac23+1\right]MR^2=\frac{10}{3}MR^2\). Pela conservação de \(L\), \(\omega_f=\frac{I_0}{I_f}\omega_0=10\,\omega_0=\dfrac{20\pi}{T_0}\).</p>
<p><b>(c)</b> \(\Delta K=\frac12I_0\omega_0^2\left(\frac{I_0}{I_f}-1\right)=9\cdot\frac12\cdot\frac{100}{3}MR^2\frac{4\pi^2}{T_0^2}=\dfrac{600\pi^2MR^2}{T_0^2}\).</p>
<p><b>(d)</b> \(W_{motor}=\Delta K=\dfrac{600\pi^2MR^2}{T_0^2}\).</p>`});

P({id:'2012-1-q2', ano:2012, sem:'1º sem.', prova:'EUF 1º/2012 · Parte 1 · Q2', topicos:['osc'],
enunciado: R`<p>Um pêndulo simples: massa \(m\) presa a uma barra de massa desprezível e comprimento \(l\); \(\theta\) é o ângulo com a vertical. Use sempre a aproximação de pequenos ângulos.</p>`,
itens:[R`Escreva a equação de movimento sem atrito e obtenha a frequência natural \(\omega\).`, R`Determine \(\theta(t)\) para \(\theta(0)=0\) e \(\dot\theta(0)=\Omega\).`, R`Escreva a equação de movimento com atrito viscoso \(F_R=2m\sqrt{gl}\,\dfrac{d\theta}{dt}\).`, R`Nessa situação, determine \(\theta(t)\) para \(\theta(0)=\theta_0\) e \(\dot\theta(0)=0\).`],
dica: R`Divida a equação com atrito por \(ml\). Compare o coeficiente de \(\dot\theta\) com \(2\omega\): que regime de amortecimento é esse?`,
solucao: R`<p><b>(a)</b> \(\ddot\theta+\dfrac{g}{l}\theta=0\), \(\omega=\sqrt{g/l}\).</p>
<p><b>(b)</b> \(\theta(t)=\dfrac{\Omega}{\omega}\sin\omega t\).</p>
<p><b>(c)</b> \(ml\ddot\theta=-mg\theta-2m\sqrt{gl}\,\dot\theta\Rightarrow\ddot\theta+2\omega\dot\theta+\omega^2\theta=0\). É amortecimento <b>crítico</b> (\(\gamma=\omega\)).</p>
<p><b>(d)</b> \(\theta=(C_1+C_2t)e^{-\omega t}\). Das condições iniciais, \(C_1=\theta_0\) e \(C_2=\omega\theta_0\):</p>
\[\theta(t)=\theta_0(1+\omega t)e^{-\omega t}.\]`});

P({id:'2012-2-q6', ano:2012, sem:'2º sem.', prova:'EUF 2º/2012 · Parte 2 · Q6', topicos:['central','grav'],
enunciado: R`<p>Um corpo celeste de massa \(m\) se aproxima do Sol (massa \(M\gg m\)) numa trajetória hiperbólica. A uma distância \(r_0\) do Sol, sua velocidade é \(v_0\) e faz 30° com o raio vetor.</p>`,
itens:[R`Calcule o momento angular \(L\) e a energia \(E\).`, R`Determine a distância de máxima aproximação \(r_p\) em termos de \(L\) e \(E\).`, R`Em \(r_p\), um choque com um pequeno asteroide (sem variar a massa) o coloca numa órbita circular de raio \(r_p\) no mesmo plano. Calcule a nova energia e o novo momento angular em termos de \(r_p\).`],
dica: R`No periélio \(\dot r=0\), então \(E=\dfrac{L^2}{2mr_p^2}-\dfrac{GMm}{r_p}\): uma equação do 2º grau em \(r_p\).`,
solucao: R`<p><b>(a)</b> \(L=mr_0v_0\sin30^\circ=\frac12mr_0v_0\) e \(E=\frac12mv_0^2-\dfrac{GMm}{r_0}\) (\(E>0\), hipérbole).</p>
<p><b>(b)</b> \(Er_p^2+GMm\,r_p-\dfrac{L^2}{2m}=0\Rightarrow\)</p>
\[r_p=\frac{-GMm+\sqrt{G^2M^2m^2+2EL^2/m}}{2E}.\]
<p><b>(c)</b> Órbita circular: \(v=\sqrt{GM/r_p}\):</p>
\[E'=-\frac{GMm}{2r_p},\qquad L'=m\sqrt{GMr_p}.\]`});

P({id:'2012-2-q7', ano:2012, sem:'2º sem.', prova:'EUF 2º/2012 · Parte 2 · Q7', topicos:['mov1d','osc'], fig:'fig/e12b_q7.png',
enunciado: R`<p>Uma bola de massa \(m=450\) g está presa a uma mola cuja energia potencial em função da elongação \(x\) está no gráfico (linha sólida). Responda no SI.</p>`,
itens:[R`Determine a constante elástica para pequenos deslocamentos.`, R`Esboce a força sobre a bola em função da elongação.`, R`O movimento é unidimensional com elongação máxima de 3 cm. Determine a velocidade máxima.`, R`Determine a energia cinética na elongação \(x=-2\) cm.`, R`Determine a posição (\(x\lt 0\)) de onde a bola deve ser solta do repouso para atingir \(x=5\) cm com velocidade nula.`],
dica: R`Leia \(U(2\,\text{cm})\) no gráfico e use \(U=\frac12kx^2\). Depois é só conservação de energia lendo valores da curva.`,
solucao: R`<p><b>(a)</b> Do gráfico, \(U(\pm2\text{ cm})\approx4\) mJ. Então \(k=2U/x^2=2(0{,}004)/(0{,}02)^2=20\) N/m. Confere com \(U(-4\text{ cm})=16\) mJ.</p>
<p><b>(b)</b> \(F=-dU/dx\): reta \(F=-kx\) (≈ \(-0{,}2\) N em 1 cm) na região harmônica. Para \(x\gtrsim3\) cm a curva se achata, então \(|F|\) diminui e tende a zero perto de \(x\approx5\) cm.</p>
<p><b>(c)</b> \(E=U(3\text{ cm})\approx\frac12(20)(0{,}03)^2=9\) mJ. Então \(v_{max}=\sqrt{2E/m}=\sqrt{2(0{,}009)/0{,}45}=0{,}20\) m/s.</p>
<p><b>(d)</b> \(K=E-U(-2\text{ cm})=9-4=5\) mJ.</p>
<p><b>(e)</b> \(U(5\text{ cm})\approx16\) mJ (curva sólida). No lado negativo, \(U=16\) mJ em \(x=-4\) cm.</p>`});

P({id:'2013-1-q6', ano:2013, sem:'1º sem.', prova:'EUF 1º/2013 · Parte 2 · Q6', topicos:['rigido'],
enunciado: R`<p>Um equilibrista de massa \(m\) (puntiforme) está parado na extremidade de uma barra horizontal homogênea de comprimento \(D\) e massa \(M=3m\), que gira em torno de um eixo vertical pelo seu centro. Ele caminha até o eixo com velocidade constante. O período inicial é \(T_0\). Dado: \(I_{CM}=\frac{1}{12}MD^2\).</p>`,
itens:[R`Determine o torque das forças sobre o equilibrista em relação ao centro da barra.`, R`Determine o momento angular quando ele atinge o centro e o novo período.`, R`Determine as energias inicial e final. A energia variou?`],
dica: R`O \(L\) total se conserva. O torque sobre o equilibrista é \(d(mr^2\omega)/dt=-I_b\,\dot\omega\).`,
solucao: R`<p>\(I_b=\frac1{12}(3m)D^2=\frac{mD^2}{4}\). No início, \(I_0=\frac{mD^2}{4}+m\frac{D^2}{4}=\frac{mD^2}{2}\) e \(L_0=I_0\frac{2\pi}{T_0}=\dfrac{\pi mD^2}{T_0}\).</p>
<p><b>(a)</b> \(\omega(r)=\dfrac{L_0}{I_b+mr^2}\) e \(\tau_{eq}=\dfrac{d}{dt}(mr^2\omega)=-I_b\dot\omega\). Com \(\dot r=-v\):</p>
\[|\tau|=I_b\frac{2mrvL_0}{(I_b+mr^2)^2}=\frac{\pi mD^4\,r\,v}{2T_0\,(D^2/4+r^2)^2},\]
<p>no sentido oposto à rotação: a barra freia o equilibrista na direção tangencial, enquanto ele acelera a barra.</p>
<p><b>(b)</b> \(L=L_0=\pi mD^2/T_0\). Com \(I_f=mD^2/4\), \(\omega_f=2\omega_0\) e \(T_f=T_0/2\).</p>
<p><b>(c)</b> \(E_i=\frac12I_0\omega_0^2=\dfrac{\pi^2mD^2}{T_0^2}\) e \(E_f=\frac12I_f(2\omega_0)^2=\dfrac{2\pi^2mD^2}{T_0^2}\). A energia dobrou, e o aumento vem do trabalho muscular do equilibrista ao se puxar para dentro.</p>`});

P({id:'2013-1-q7', ano:2013, sem:'1º sem.', prova:'EUF 1º/2013 · Parte 2 · Q7', topicos:['lagr','ninerc'], fig:'fig/e13a_q7.png',
enunciado: R`<p>Uma partícula de massa \(m\) está no interior de um cano oco, liso, estreito e longo, que gira num plano horizontal com velocidade angular \(\omega\) constante. O eixo fixo de rotação passa por uma das extremidades do cano.</p>`,
itens:[R`Escreva a lagrangiana.`, R`Obtenha as equações de Lagrange.`, R`Determine o movimento, se a partícula é lançada do centro de rotação com velocidade \(v_0\).`, R`Obtenha a hamiltoniana e as equações de Hamilton.`, R`Dentre \(H\) e \(E\), quais se conservam? Justifique.`],
dica: R`Só \(r\) é livre (\(\varphi=\omega t\)). \(L=\frac12m(\dot r^2+\omega^2r^2)\). Compare \(H\) com \(T+V\).`,
solucao: R`<p><b>(a)</b> \(L=\frac12m(\dot r^2+\omega^2r^2)\).</p>
<p><b>(b)</b> \(\ddot r-\omega^2r=0\).</p>
<p><b>(c)</b> \(r(0)=0\), \(\dot r(0)=v_0\Rightarrow r(t)=\dfrac{v_0}{\omega}\sinh\omega t\).</p>
<p><b>(d)</b> \(p=m\dot r\), \(H=p\dot r-L=\dfrac{p^2}{2m}-\frac12m\omega^2r^2\). Equações: \(\dot r=p/m\) e \(\dot p=m\omega^2r\).</p>
<p><b>(e)</b> \(H\) se conserva, porque não depende explicitamente de \(t\). \(E=T=\frac12m(\dot r^2+\omega^2r^2)\) <b>não</b> se conserva: a parede do cano realiza trabalho (o vínculo depende do tempo), e por isso \(H\ne E\).</p>`});

P({id:'2013-2-q6', ano:2013, sem:'2º sem.', prova:'EUF 2º/2013 · Parte 2 · Q6', topicos:['mov3d','mov1d'], fig:'fig/e13b_q6.png',
enunciado: R`<p>Uma partícula de massa \(m\) move-se com velocidade \(\vec v_1\) no semiplano superior e é desviada ao atingir o inferior, onde passa a se propagar com \(\vec v_2\). Observa-se que: i) a partícula passa do meio 1 ao 2 desde que \(v_1>v_{min}\); ii) o movimento é retilíneo uniforme em cada semiplano; iii) \(\theta_2\ne\theta_1\). Supõe-se que em cada meio atuam potenciais \(U_1\) e \(U_2\).</p>`,
itens:[R`Esboce \(U(y)\) para \(x\) fixo, justificando.`, R`Determine \(v_2\) em termos de \(v_1\), \(m\), \(U_1\) e \(U_2\). Qual é \(v_{min}\)?`, R`Determine o “índice de refração” \(\sin\theta_1/\sin\theta_2\).`],
dica: R`A força só atua na interface e é perpendicular a ela. Então a componente de \(\vec p\) paralela à interface se conserva, e a energia também.`,
solucao: R`<p><b>(a)</b> Como o movimento é uniforme em cada meio, \(U\) é constante em cada semiplano: um degrau em \(y=0\). Como existe velocidade mínima para passar, \(U_2>U_1\) (degrau para cima).</p>
<p><b>(b)</b> \(\frac12mv_1^2+U_1=\frac12mv_2^2+U_2\Rightarrow v_2=\sqrt{v_1^2-\dfrac{2(U_2-U_1)}{m}}\). Para incidência normal, \(v_{min}=\sqrt{2(U_2-U_1)/m}\). Em geral, a condição vale para a componente normal: \(v_1\cos\theta_1>v_{min}\).</p>
<p><b>(c)</b> Componente paralela conservada: \(v_1\sin\theta_1=v_2\sin\theta_2\):</p>
\[\frac{\sin\theta_1}{\sin\theta_2}=\frac{v_2}{v_1}=\sqrt{1-\frac{2(U_2-U_1)}{mv_1^2}}.\]`});

P({id:'2013-2-q7', ano:2013, sem:'2º sem.', prova:'EUF 2º/2013 · Parte 2 · Q7', topicos:['mov1d'],
enunciado: R`<p>Uma partícula de massa \(m\) move-se em uma dimensão sob o potencial (\(c\) é constante)</p>\[U(x)=\frac12x^4-cx^2.\]`,
itens:[R`Esboce \(U(x)\) e os espaços de fase (\(\dot x\) versus \(x\)) para i) \(c>0\), ii) \(c=0\), iii) \(c\lt 0\).`, R`Identifique os movimentos periódicos possíveis e os pontos de inversão em cada caso.`, R`Determine a dependência do período com \(E\) para \(c=0\).`],
dica: R`Pontos de inversão: \(x^4-2cx^2-2E=0\), uma quadrática em \(x^2\). Para o período com \(c=0\), troque \(x=x_t u\) na integral.`,
solucao: R`<p><b>(a)</b> i) \(c>0\): poço duplo com mínimos em \(x=\pm\sqrt c\) (\(U=-c^2/2\)) e máximo em \(0\) (\(U=0\)). O espaço de fase tem órbitas fechadas em torno de cada mínimo, uma separatriz em forma de “8” (\(E=0\)) e órbitas externas envolvendo os dois poços. ii) \(c=0\): poço quártico, órbitas fechadas “achatadas”. iii) \(c\lt 0\): poço único com mínimo em 0.</p>
<p><b>(b)</b> Inversão: \(x^2=c\pm\sqrt{c^2+2E}\).</p>
<ul><li>\(c>0\), \(-c^2/2\lt E\lt 0\): oscilação dentro de um dos poços, entre \(\sqrt{c-\sqrt{c^2+2E}}\) e \(\sqrt{c+\sqrt{c^2+2E}}\) (ou os simétricos negativos).</li>
<li>\(c>0\), \(E>0\): oscilação entre \(\pm\sqrt{c+\sqrt{c^2+2E}}\).</li>
<li>\(c=0\): \(x=\pm(2E)^{1/4}\).</li>
<li>\(c\lt 0\): \(x=\pm\sqrt{\sqrt{c^2+2E}-|c|}\), para todo \(E>0\).</li></ul>
<p><b>(c)</b> \(T=4\displaystyle\int_0^{x_t}\frac{dx}{\sqrt{2(E-x^4/2)/m}}\), com \(x_t=(2E)^{1/4}\). Fazendo \(x=x_tu\):</p>
\[T=4\sqrt m\,(2E)^{-1/4}\int_0^1\frac{du}{\sqrt{1-u^4}}\ \propto\ E^{-1/4}.\]
<p>O período diminui com a energia (oscilador anarmônico).</p>`});

P({id:'2014-2-q6', ano:2014, sem:'2º sem.', prova:'EUF 2º/2014 · Parte 2 · Q6', topicos:['lagr','osc'], fig:'fig/e14_q6.png',
enunciado: R`<p>Um pêndulo simples (massa \(m\), fio de comprimento \(a\)) tem o ponto de suspensão num suporte que se move horizontalmente sem atrito. Com coordenadas \(x\) (posição do suporte) e \(\theta\), a lagrangiana é</p>
\[\mathcal L=\frac m2\dot x^2+\frac m2\left(a^2\dot\theta^2+2a\dot x\dot\theta\cos\theta\right)+mga\cos\theta.\]`,
itens:[R`Obtenha a equação de movimento para \(\theta\).`, R`Para \(\theta\) pequeno e suporte forçado \(x(t)=x_0\cos\omega t\), obtenha a solução geral \(\theta(t)\).`, R`Obtenha a frequência de ressonância \(\omega_R\).`, R`Escreva \(\theta(t)\) para \(\theta(0)=0\), \(\dot\theta(0)=0\) e \(\omega\lt \omega_R\).`],
dica: R`Na equação de \(\theta\), \(\ddot x\) aparece como força externa: \(a\ddot\theta+g\theta=-\ddot x\).`,
solucao: R`<p><b>(a)</b> Os termos \(\dot x\dot\theta\sin\theta\) se cancelam:</p>\[a\ddot\theta+\ddot x\cos\theta+g\sin\theta=0.\]
<p><b>(b)</b> Com \(\ddot x=-x_0\omega^2\cos\omega t\) e \(\omega_0^2=g/a\): \(\ddot\theta+\omega_0^2\theta=\dfrac{x_0\omega^2}{a}\cos\omega t\):</p>
\[\theta(t)=A\cos\omega_0t+B\sin\omega_0t+\frac{x_0\omega^2}{a(\omega_0^2-\omega^2)}\cos\omega t.\]
<p><b>(c)</b> \(\omega_R=\sqrt{g/a}\).</p>
<p><b>(d)</b> \(B=0\) e \(A=-\dfrac{x_0\omega^2}{a(\omega_0^2-\omega^2)}\):</p>
\[\theta(t)=\frac{x_0\omega^2}{a(\omega_R^2-\omega^2)}\left(\cos\omega t-\cos\omega_Rt\right).\]`});

P({id:'2015-2-q6', ano:2015, sem:'2º sem.', prova:'EUF 2º/2015 · Parte 2 · Q6', topicos:['central','mov1d'],
enunciado: R`<p>Uma partícula de massa \(m\) está sob uma força central conservativa com energia potencial</p>\[U(r)=k(r^2-a^2)e^{-br^2},\]<p>onde \(k\), \(a\) e \(b\) são constantes positivas.</p>`,
itens:[R`Determine as unidades de \(k\), \(a\) e \(b\) no SI.`, R`Esboce \(U(r)\), determinando máximos e mínimos.`, R`Determine as faixas de energia para órbitas (i) ligadas e (ii) não ligadas. (iii) Há condições para órbitas de raio constante?`, R`Determine a força, as situações de equilíbrio e a frequência de pequenas oscilações radiais em torno do equilíbrio estável.`],
dica: R`\(U'(r)=2kr\,e^{-br^2}\left[1-b(r^2-a^2)\right]\). Para órbitas circulares, use \(U_{ef}=U+L^2/2mr^2\).`,
solucao: R`<p><b>(a)</b> \([a]=\)m, \([b]=\)m\(^{-2}\), \([k]=\)J/m\(^2=\)kg/s\(^2\).</p>
<p><b>(b)</b> \(U'(r)=0\) em \(r=0\) e em \(r_*=\sqrt{a^2+1/b}\). Mínimo \(U(0)=-ka^2\); zero em \(r=a\); máximo \(U(r_*)=\dfrac kb e^{-(1+ba^2)}\); \(U\to0^+\) para \(r\to\infty\).</p>
<p><b>(c)</b> Para \(L=0\): (i) ligada se \(-ka^2\le E\lt \dfrac kb e^{-(1+ba^2)}\) com a partícula em \(r\lt r_*\); (ii) não ligada se \(E\) está acima da barreira, ou se \(E>0\) e a partícula está fora dela. Com \(L\ne0\), troque \(U\) por \(U_{ef}\). (iii) Órbita circular em \(r_0\) exige \(L^2/(mr_0^3)=U'(r_0)>0\), ou seja, \(0\lt r_0\lt r_*\), com</p>
\[L^2=2mk\,r_0^4e^{-br_0^2}\left[1+ba^2-br_0^2\right].\]
<p><b>(d)</b> \(\vec F=-2kr\,e^{-br^2}\left[1+ba^2-br^2\right]\hat r\). Equilíbrios: \(r=0\) (estável) e a esfera \(r=r_*\) (instável). Perto de 0, \(U\approx-ka^2+k(1+ba^2)r^2\):</p>
\[\omega=\sqrt{\frac{2k(1+ba^2)}{m}}.\]`});

P({id:'2015-2-q7', ano:2015, sem:'2º sem.', prova:'EUF 2º/2015 · Parte 2 · Q7', topicos:['lagr'],
enunciado: R`<p>Uma partícula de massa \(m\) está confinada a uma superfície esférica de raio fixo \(a\), e nenhuma força externa age sobre ela.</p>`,
itens:[R`Determine a lagrangiana em coordenadas apropriadas no \(\mathbb R^3\) e a equação de vínculo.`, R`Com multiplicadores de Lagrange, encontre as equações de movimento e a força de vínculo. Interprete.`, R`Estabeleça as constantes do movimento.`, R`Se o raio varia como \(a(t)=a_0(1+\cos\omega t)\), determine as constantes de movimento.`],
dica: R`Esféricas com vínculo \(f=r-a=0\). A equação radial dá \(\lambda=-mv^2/a\).`,
solucao: R`<p><b>(a)</b> \(L=\frac12m(\dot r^2+r^2\dot\theta^2+r^2\sin^2\theta\,\dot\varphi^2)\), vínculo \(r-a=0\).</p>
<p><b>(b)</b> Com \(L'=L+\lambda(r-a)\):</p>
<ul><li>\(r\): \(m\ddot r-mr(\dot\theta^2+\sin^2\theta\,\dot\varphi^2)=\lambda\). Com \(r=a\): \(\lambda=-ma(\dot\theta^2+\sin^2\theta\,\dot\varphi^2)=-\dfrac{mv^2}{a}\). É a força normal da superfície, centrípeta, que mantém a partícula na esfera.</li>
<li>\(\theta\): \(ma^2\ddot\theta-ma^2\sin\theta\cos\theta\,\dot\varphi^2=0\).</li>
<li>\(\varphi\): \(\frac{d}{dt}(ma^2\sin^2\theta\,\dot\varphi)=0\).</li></ul>
<p><b>(c)</b> Energia (a velocidade escalar é constante), \(p_\varphi=L_z\) e, como a força é radial, o vetor momento angular inteiro: a órbita é um círculo máximo.</p>
<p><b>(d)</b> \(L\) passa a depender de \(t\), então a energia não se conserva (a superfície realiza trabalho). A força de vínculo continua radial, logo \(\vec L\) se conserva: \(p_\varphi=ma^2\sin^2\theta\,\dot\varphi\) e \(|\vec L|=ma(t)^2\sqrt{\dot\theta^2+\sin^2\theta\,\dot\varphi^2}\) são constantes.</p>`});

P({id:'2016-2-q1', ano:2016, sem:'2º sem.', prova:'EUF 2º/2016 · Parte 1 · Q1', topicos:['rigido','newton'], fig:'fig/e16_q1.png',
enunciado: R`<p>Uma esfera sólida de massa \(m\) e raio \(r\) rola sem deslizar num plano inclinado (ângulo \(\theta\)) após ser solta do repouso de uma altura \(h\). \(I=\frac25mr^2\).</p>`,
itens:[R`Há atrito entre a esfera e o plano? Como você chegou a essa conclusão?`, R`Há conservação de energia mecânica? Justifique, considerando o item (a).`, R`Por energia, determine a velocidade na base do plano.`, R`Obtenha a mesma velocidade pela segunda lei de Newton.`],
dica: R`Sem atrito, nenhuma força faria torque em relação ao centro. No rolamento puro, o ponto de contato tem velocidade nula.`,
solucao: R`<p><b>(a)</b> Sim. Peso e normal passam pelo centro e não fazem torque. Só o atrito estático pode dar a aceleração angular necessária ao rolamento.</p>
<p><b>(b)</b> Sim. O atrito é estático e atua num ponto com velocidade nula, então não realiza trabalho.</p>
<p><b>(c)</b> \(mgh=\frac12mv^2+\frac12\cdot\frac25mr^2\frac{v^2}{r^2}=\frac{7}{10}mv^2\Rightarrow v=\sqrt{\dfrac{10gh}{7}}\).</p>
<p><b>(d)</b> \(ma=mg\sin\theta-f\) e \(fr=\frac25mr^2\frac ar\Rightarrow a=\frac57g\sin\theta\). Com \(d=h/\sin\theta\): \(v^2=2ad=\frac{10}{7}gh\). ✓</p>`});

P({id:'2016-2-q2', ano:2016, sem:'2º sem.', prova:'EUF 2º/2016 · Parte 1 · Q2', topicos:['lagr','osc','mov1d'],
enunciado: R`<p>Uma massa \(m\) está presa à extremidade de uma haste inextensível de massa desprezível e comprimento \(l\). A outra extremidade está fixa e o sistema move-se num plano vertical, com gravidade \(g\).</p>`,
itens:[R`Escreva a lagrangiana.`, R`Obtenha a equação de movimento.`, R`Determine os pontos de equilíbrio e classifique-os quanto à estabilidade.`, R`Encontre a frequência de pequenas oscilações em torno do equilíbrio estável.`],
dica: R`\(U(\theta)=-mgl\cos\theta\). O sinal de \(U''\) em cada equilíbrio decide a estabilidade.`,
solucao: R`<p><b>(a)</b> \(L=\frac12ml^2\dot\theta^2+mgl\cos\theta\).</p>
<p><b>(b)</b> \(\ddot\theta+\dfrac gl\sin\theta=0\).</p>
<p><b>(c)</b> \(\sin\theta=0\): em \(\theta=0\), \(U''=mgl>0\) (estável); em \(\theta=\pi\), \(U''=-mgl\lt 0\) (instável). A haste rígida permite o equilíbrio invertido.</p>
<p><b>(d)</b> \(\omega=\sqrt{g/l}\).</p>`});

P({id:'2017-2-q1', ano:2017, sem:'2º sem.', prova:'EUF 2º/2017 · Parte 1 · Q1', topicos:['osc'],
enunciado: R`<p>A gravidade \(g\) pode ser medida com um pêndulo simples (massa \(m\), fio de massa desprezível e comprimento \(l\)).</p>
<p>Estudantes usaram uma esfera metálica de raio \(r=8{,}00\pm0{,}05\) cm e massa \(10{,}0\pm0{,}1\) kg, com o CM a \(4{,}00\pm0{,}02\) m do teto. A massa do fio é \(7{,}4\pm0{,}2\) g. Para deslocamentos laterais entre 5 e 10 cm, o período não dependia da amplitude, e o pêndulo fez 10 oscilações em \(40{,}0\pm0{,}5\) s. Use \(\pi^2=9{,}86960\) se necessário.</p>`,
itens:[R`Encontre a expressão do período em função dos parâmetros.`, R`Determine o valor de \(g\) com a incerteza experimental.`],
dica: R`\(g=4\pi^2l/T^2\). Em propagação de incertezas, \(T\) entra ao quadrado. Verifique se as correções (raio da esfera, massa do fio, amplitude) são menores que a incerteza.`,
solucao: R`<p><b>(a)</b> \(T=2\pi\sqrt{l/g}\) (pequenas amplitudes).</p>
<p><b>(b)</b> \(T=40{,}0/10=4{,}00\pm0{,}05\) s e \(l=4{,}00\pm0{,}02\) m:</p>
\[g=\frac{4\pi^2l}{T^2}=\frac{4(9{,}8696)(4{,}00)}{16{,}0}=9{,}87\ \text{m/s}^2.\]
\[\frac{\delta g}{g}=\sqrt{\left(\frac{\delta l}{l}\right)^2+\left(2\frac{\delta T}{T}\right)^2}=\sqrt{0{,}005^2+0{,}025^2}\approx0{,}026.\]
<p>Resultado: \(g=9{,}9\pm0{,}3\) m/s\(^2\) (ou \(9{,}87\pm0{,}25\)). Correções desprezíveis: a do pêndulo físico, \(2r^2/5l\approx0{,}6\) mm, é bem menor que \(\delta l=2\) cm; o fio tem massa 0,07% da esfera; a amplitude é \(\approx0{,}025\) rad.</p>`});

P({id:'2017-2-q2', ano:2017, sem:'2º sem.', prova:'EUF 2º/2017 · Parte 1 · Q2', topicos:['lagr','newton'], fig:'fig/e17_q2.png',
enunciado: R`<p>Dois corpos de massa \(M\) estão ligados por uma corda inextensível de comprimento \(l\). A está sobre uma mesa (sem atrito) e B pende na lateral; a corda passa por uma polia sem atrito e de raio desprezível.</p>`,
itens:[R`Encontre a aceleração comum se \(\theta\) é mantido igual a zero e a corda não tem massa.`, R`Agora \(\theta\) também pode variar (\(\theta\lt \pi/2\), B não toca a mesa). Escreva a lagrangiana e as equações de movimento, sem resolvê-las. Mostre que para \(\theta=0\) recupera-se o item (a).`, R`Com \(\theta=0\) e corda de massa \(m\), escreva a lagrangiana e as equações de movimento.`],
dica: R`Use \(r\) (comprimento da corda pendurada) e \(\theta\). Então A tem velocidade \(\dot r\) e B é um “pêndulo de comprimento variável”.`,
solucao: R`<p><b>(a)</b> \(2Ma=Mg\Rightarrow a=g/2\).</p>
<p><b>(b)</b> Com \(r\) = trecho pendurado: B está em \((r\sin\theta,-r\cos\theta)\) e A move-se com \(|\dot r|\):</p>
\[L=M\dot r^2+\tfrac12Mr^2\dot\theta^2+Mgr\cos\theta.\]
\[2M\ddot r-Mr\dot\theta^2-Mg\cos\theta=0,\qquad r\ddot\theta+2\dot r\dot\theta+g\sin\theta=0.\]
<p>Com \(\theta=0\): \(\ddot r=g/2\). ✓</p>
<p><b>(c)</b> A parte pendurada tem massa \(mr/l\) e CM em \(-r/2\):</p>
\[L=\tfrac12(2M+m)\dot r^2+Mgr+\frac{mg}{2l}r^2,\qquad (2M+m)\ddot r=Mg+\frac{mg}{l}r.\]`});

P({id:'2018-2-q1', ano:2018, sem:'2º sem.', prova:'EUF 2º/2018 · Parte 1 · Q1', topicos:['rigido','newton'], fig:'fig/e18_q1.png',
enunciado: R`<p>Um disco fino homogêneo de raio \(R\) e massa \(m\) move-se numa superfície horizontal com coeficiente de atrito cinético \(\mu\). Em O, \(\mathbf v_0=v_0\hat x\) e a rotação é nula. Só em A ele passa a rolar sem deslizar. \(I=mR^2/2\).</p>`,
itens:[R`Indique as forças no trecho OA.`, R`Determine \(|a|\) e \(|\alpha|\) no trecho OA.`, R`Determine \(v(t)\) e \(\omega(t)\) no trecho OA.`, R`Escreva a relação entre \(v\) e \(\omega\) em A e determine \(t_A\) em termos de \(v_0\), \(\mu\) e \(g\).`],
dica: R`O atrito cinético \(\mu mg\) freia a translação e acelera a rotação. Rolamento puro começa quando \(v=\omega R\).`,
solucao: R`<p><b>(a)</b> Peso \(mg\) (para baixo), normal \(N=mg\) e atrito cinético \(\mu mg\) em \(-\hat x\), no ponto de contato.</p>
<p><b>(b)</b> \(a=\mu g\) e \(\alpha=\dfrac{\mu mgR}{mR^2/2}=\dfrac{2\mu g}{R}\).</p>
<p><b>(c)</b> \(v=v_0-\mu gt\) e \(\omega=\dfrac{2\mu g}{R}t\).</p>
<p><b>(d)</b> Em A, \(v=\omega R\): \(v_0-\mu gt_A=2\mu gt_A\Rightarrow t_A=\dfrac{v_0}{3\mu g}\) (e \(v_A=\frac23v_0\)).</p>`});

P({id:'2018-2-q2', ano:2018, sem:'2º sem.', prova:'EUF 2º/2018 · Parte 1 · Q2', topicos:['lagr','central'],
enunciado: R`<p>Uma partícula de massa \(m\) move-se na superfície interna de um cone com ponta na origem e eixo \(z>0\): \(z=\rho\) (cilíndricas). A gravidade é \(\mathbf g=-g\hat z\).</p>`,
itens:[R`Escreva a lagrangiana em termos de \(\rho,\varphi,\dot\rho,\dot\varphi\).`, R`Determine as equações de movimento.`, R`Calcule o vetor \(\mathbf L\) em termos de \(\rho,\varphi,z\) e \(\hat\rho,\hat\varphi,\hat z\). Qual componente se conserva?`, R`Mostre que pode haver órbita circular de raio \(\rho_0\) e determine sua frequência em termos de \(g\) e \(\rho_0\).`],
dica: R`\(z=\rho\Rightarrow\dot z=\dot\rho\). Para \(\mathbf L\), use \(\mathbf r=\rho\hat\rho+\rho\hat z\) e \(\mathbf v=\dot\rho\hat\rho+\rho\dot\varphi\hat\varphi+\dot\rho\hat z\).`,
solucao: R`<p><b>(a)</b> \(L=\frac12m(2\dot\rho^2+\rho^2\dot\varphi^2)-mg\rho\).</p>
<p><b>(b)</b> \(2m\ddot\rho-m\rho\dot\varphi^2+mg=0\) e \(\frac{d}{dt}(m\rho^2\dot\varphi)=0\).</p>
<p><b>(c)</b> \(\mathbf L=m\,\mathbf r\times\mathbf v=m\rho^2\dot\varphi\,(\hat z-\hat\rho)\). Só \(L_z=m\rho^2\dot\varphi\) se conserva: \(\varphi\) é cíclica e o torque do peso não tem componente \(z\).</p>
<p><b>(d)</b> \(\ddot\rho=0\) em \(\rho_0\): \(\rho_0\dot\varphi^2=g\Rightarrow\omega=\sqrt{g/\rho_0}\).</p>`});

P({id:'2019-2-q1', ano:2019, sem:'2º sem.', prova:'EUF 2º/2019 · Parte 1 · Q1', topicos:['newton','mov3d'], fig:'fig/e19_q1.png',
enunciado: R`<p>Um carro move-se numa pista circular inclinada de \(\theta\) em relação à horizontal. A figura mostra o plano transversal ao movimento.</p>`,
itens:[R`Indique as forças sobre o carro, sem atrito.`, R`Sem atrito, encontre a velocidade para um círculo de raio \(R\).`, R`Agora há atrito estático \(\mu\). Na velocidade máxima sem derrapar, indique as forças.`, R`Qual é a velocidade máxima para a curva de raio \(R\)?`, R`Suponha \(\sin\theta>\mu\cos\theta\) e o carro bem mais lento. Indique as forças e determine a velocidade mínima.`],
dica: R`Decomponha na vertical (equilíbrio) e na horizontal radial (centrípeta). O atrito aponta para baixo do plano na \(v_{max}\) e para cima na \(v_{min}\).`,
solucao: R`<p><b>(a)</b> Peso \(mg\) e normal \(N\), perpendicular à pista.</p>
<p><b>(b)</b> \(N\cos\theta=mg\) e \(N\sin\theta=mv^2/R\Rightarrow v=\sqrt{gR\tan\theta}\).</p>
<p><b>(c)</b> Peso, normal e atrito \(\mu N\) ao longo da pista, para baixo.</p>
<p><b>(d)</b> \(N\cos\theta-\mu N\sin\theta=mg\) e \(N\sin\theta+\mu N\cos\theta=mv^2/R\):</p>
\[v_{max}=\sqrt{gR\,\frac{\sin\theta+\mu\cos\theta}{\cos\theta-\mu\sin\theta}}.\]
<p><b>(e)</b> Atrito para cima do plano:</p>
\[v_{min}=\sqrt{gR\,\frac{\sin\theta-\mu\cos\theta}{\cos\theta+\mu\sin\theta}}.\]`});

P({id:'2019-2-q2', ano:2019, sem:'2º sem.', prova:'EUF 2º/2019 · Parte 1 · Q2', topicos:['lagr','osc'],
enunciado: R`<p>Um pêndulo é formado por um corpo de massa \(m\) suspenso por uma mola de massa desprezível e constante \(k\), de comprimento natural \(l\). O movimento ocorre num plano vertical fixo. Use coordenadas em que o comprimento da mola é \(l+r(t)\) e seu ângulo com a vertical é \(\theta(t)\).</p>`,
itens:[R`Escreva a energia cinética.`, R`Escreva a energia potencial.`, R`Escreva a lagrangiana.`, R`Escreva as equações de Euler-Lagrange para \(r\) e \(\theta\).`, R`Para \(\theta(t)=0\), encontre a solução geral da equação para \(r\).`],
dica: R`Coordenadas polares com raio \(l+r\). A gravidade desloca o equilíbrio da mola para \(r=mg/k\).`,
solucao: R`<p><b>(a)</b> \(T=\frac12m\left[\dot r^2+(l+r)^2\dot\theta^2\right]\).</p>
<p><b>(b)</b> \(V=\frac12kr^2-mg(l+r)\cos\theta\).</p>
<p><b>(c)</b> \(L=\frac12m\left[\dot r^2+(l+r)^2\dot\theta^2\right]-\frac12kr^2+mg(l+r)\cos\theta\).</p>
<p><b>(d)</b></p>\[m\ddot r-m(l+r)\dot\theta^2+kr-mg\cos\theta=0,\]\[(l+r)\ddot\theta+2\dot r\dot\theta+g\sin\theta=0.\]
<p><b>(e)</b> \(m\ddot r+kr=mg\Rightarrow r(t)=\dfrac{mg}{k}+A\cos\omega t+B\sin\omega t\), com \(\omega=\sqrt{k/m}\).</p>`});
})();
