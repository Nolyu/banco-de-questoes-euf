window.BANK = window.BANK || [];
(function(){
const D = q => window.BANK.push(Object.assign({area:'mec', tipo:'disc'}, q));
const P = q => window.BANK.push(Object.assign({area:'mec', tipo:'mc'}, q));
const R = String.raw;

// ===================== DISCURSIVAS — 1º semestre 2014–2020 =====================
D({id:'2014-1-q6', ano:2014, prova:'EUF 1º/2014 · Parte 2 · Q6', topicos:['lagr','central','osc'], fig:'fig/e14a_q6.png',
enunciado:R`<p>Duas partículas, A (massa \(m\)) e B (massa \(M\ne m\)), estão ligadas pelas pontas de um fio inextensível de comprimento \(\ell\) e massa desprezível, que passa por um orifício numa mesa horizontal. A se move sem atrito sobre a mesa; B se move na vertical, sob a gravidade e a tração do fio. Despreze o atrito entre o fio e o orifício.</p>`,
itens:[R`Se a posição inicial de A é \(r=r_0\), que velocidade inicial deve ser dada a A para que B fique em repouso abaixo da mesa?`, R`Obtenha as equações do movimento, admitindo a lagrangiana \(\mathcal L=\frac12(m+M)\dot r^2+\frac12mr^2\dot\theta^2-Mg(r-\ell)\).`, R`Obtenha as grandezas conservadas e dê o significado de cada uma.`, R`Se B for ligeiramente deslocada na vertical, ocorrem pequenas oscilações. Obtenha o período em termos do raio de equilíbrio \(r_{eq}\), de \(m\), \(M\) e \(g\).`],
dica:R`\(\theta\) é cíclica: \(p_\theta=mr^2\dot\theta\) fica constante. Monte o potencial efetivo \(V_{ef}(r)=\dfrac{p_\theta^2}{2mr^2}+Mgr\); a massa que oscila em \(r\) é \(m+M\).`,
solucao:R`<p><b>(a)</b> B parado exige tração \(Mg\), que é a centrípeta de A: \(\dfrac{mv_0^2}{r_0}=Mg\Rightarrow v_0=\sqrt{\dfrac{Mgr_0}{m}}\), perpendicular ao fio.</p>
<p><b>(b)</b> \((m+M)\ddot r-mr\dot\theta^2+Mg=0\) e \(\dfrac{d}{dt}\left(mr^2\dot\theta\right)=0\).</p>
<p><b>(c)</b> \(p_\theta=mr^2\dot\theta\): momento angular de A em relação ao orifício (\(\theta\) é cíclica). A energia \(E=\frac12(m+M)\dot r^2+\frac12mr^2\dot\theta^2+Mg(r-\ell)\), porque \(\mathcal L\) não depende de \(t\).</p>
<p><b>(d)</b> Equilíbrio: \(\dfrac{p_\theta^2}{mr_{eq}^3}=Mg\). Então \(V_{ef}''(r_{eq})=\dfrac{3p_\theta^2}{mr_{eq}^4}=\dfrac{3Mg}{r_{eq}}\):</p>
\[\omega^2=\frac{3Mg}{(m+M)r_{eq}},\qquad T=2\pi\sqrt{\frac{(m+M)\,r_{eq}}{3Mg}}.\]`});

D({id:'2014-1-q7', ano:2014, prova:'EUF 1º/2014 · Parte 2 · Q7', topicos:['mov1d','osc'], fig:'fig/e14a_q7.png',
enunciado:R`<p>Uma partícula de massa \(m\) está sujeita ao potencial \(V(x)=\frac12kx^2-\dfrac{k}{4a^2}x^4\) (figura), com \(k,a>0\).</p>`,
itens:[R`Determine \(F(x)\) e os pontos de equilíbrio, com sua natureza.`, R`Calcule o período das pequenas oscilações em torno do equilíbrio estável.`, R`A partícula está em repouso em \(x=0\) e recebe um impulso que lhe dá velocidade \(v\) no sentido \(+x\). Discuta os casos \(0\lt v\le a\sqrt{k/2m}\) e \(v>a\sqrt{k/2m}\).`, R`Esboce o diagrama de fase. Indique a curva de transição entre movimento periódico e não periódico e sua energia.`],
dica:R`Compare a energia cinética inicial com a altura das barreiras, \(V(\pm a)\).`,
solucao:R`<p><b>(a)</b> \(F=-V'=-kx+\dfrac{k}{a^2}x^3\). Equilíbrios: \(x=0\), com \(V''=k>0\) (estável); \(x=\pm a\), com \(V''=k-3k=-2k\lt 0\) (instáveis). A altura das barreiras é \(V(\pm a)=\frac14ka^2\).</p>
<p><b>(b)</b> \(T=2\pi\sqrt{m/k}\).</p>
<p><b>(c)</b> \(\frac12mv^2\) contra \(\frac14ka^2\): o limiar é \(v^*=a\sqrt{k/2m}\). Para \(v\lt v^*\), a partícula oscila periodicamente entre os pontos de retorno \(\pm x_t\), com \(|x_t|\lt a\). Para \(v=v^*\), ela se aproxima de \(x=a\) assintoticamente e leva tempo infinito para chegar. Para \(v>v^*\), passa pela barreira e escapa para \(+\infty\), acelerando, porque \(V\to-\infty\).</p>
<p><b>(d)</b> Curvas fechadas em torno da origem para \(E\lt \frac14ka^2\). A separatriz, com \(E=\frac14ka^2\), liga os pontos de sela \((\pm a,0)\). Para energias maiores, as curvas são abertas. A transição ocorre em \(E=ka^2/4\).</p>`});

D({id:'2015-1-q6', ano:2015, prova:'EUF 1º/2015 · Parte 2 · Q6', topicos:['acopl','osc'], fig:'fig/e15a_q6.png',
enunciado:R`<p>Dois íons Ca\(^+\) (massa \(m\)) estão presos a uma direção \(x\) por um potencial externo \(U(x)=m\omega^2x^2/2\) e se repelem pela força coulombiana \(F_C=\dfrac{e^2}{(x_1-x_2)^2}\), com \(e^2=q^2/4\pi\varepsilon_0\). No equilíbrio, \(-x_1=x_2=x_0\).</p>`,
itens:[R`Obtenha \(x_0\) em termos de \(e\), \(m\) e \(\omega\).`, R`Escreva as equações de Newton e obtenha a frequência do modo em que a separação entre os íons é constante (1º modo normal).`, R`O 2º modo é antissimétrico, com o centro de massa parado em \(x=0\). Obtenha sua frequência (pequenas oscilações) e a razão entre as frequências dos dois modos.`, R`Na prova, duas figuras mostram \(x_1(t)\) e \(x_2(t)\) para cada modo. Qual é qual? Qual tem menor energia?`],
dica:R`Some as duas equações (centro de massa) e subtraia (separação \(d=x_2-x_1\)). Linearize \(2e^2/d^2\) em torno de \(d_0=2x_0\).`,
solucao:R`<p><b>(a)</b> Sobre o íon 2: \(m\omega^2x_0=\dfrac{e^2}{(2x_0)^2}\Rightarrow x_0=\left(\dfrac{e^2}{4m\omega^2}\right)^{1/3}\).</p>
<p><b>(b)</b> \(m\ddot x_1=-m\omega^2x_1-\dfrac{e^2}{(x_2-x_1)^2}\) e \(m\ddot x_2=-m\omega^2x_2+\dfrac{e^2}{(x_2-x_1)^2}\). Somando: \(\ddot X=-\omega^2X\), com \(X=(x_1+x_2)/2\). Os dois íons oscilam juntos com frequência \(\omega\).</p>
<p><b>(c)</b> Subtraindo: \(m\ddot d=-m\omega^2d+\dfrac{2e^2}{d^2}\). Com \(d=d_0+\delta\) e \(2e^2/d_0^3=m\omega^2\):</p>
\[m\ddot\delta=-m\omega^2\delta-\frac{4e^2}{d_0^3}\delta=-3m\omega^2\delta\ \Rightarrow\ \omega_2=\sqrt3\,\omega,\qquad \frac{\omega_2}{\omega_1}=\sqrt3.\]
<p><b>(d)</b> O gráfico com \(x_1\) e \(x_2\) em fase e frequência menor é o 1º modo (centro de massa). O de frequência maior, com os íons em oposição de fase, é o 2º modo (“respiração”). Para a mesma amplitude, \(E\propto\omega^2A^2\), então o 1º modo tem menor energia.</p>`});

D({id:'2015-1-q7', ano:2015, prova:'EUF 1º/2015 · Parte 2 · Q7', topicos:['grav','central','sist'],
enunciado:R`<p>Um satélite de massa \(m\) está em órbita elíptica em torno da Terra (esfera uniforme de massa \(M\) e raio \(R\)). As distâncias ao centro da Terra no perigeu e no apogeu são \(d\) e \(D\). No perigeu, uma partícula de massa \(m_0\lt m\) choca-se de forma central e completamente inelástica com o satélite; no instante do choque, os dois tinham velocidades de mesmo módulo e sentidos opostos.</p>`,
itens:[R`Obtenha a velocidade \(v_S\) do sistema logo após a colisão, em termos de \(v_p\) (velocidade no perigeu).`, R`Expresse o momento angular do satélite no perigeu e no apogeu, em termos de \(v_p\) e \(v_a\), antes da colisão.`, R`Obtenha \(v_p\), antes da colisão, em termos de \(M\), \(d\), \(D\) e \(G\).`, R`Obtenha a energia \(E_S\) e o momento angular \(L_S\) do sistema após a colisão.`],
dica:R`Antes da colisão, use conservação de \(L\) (\(v_pd=v_aD\)) e de energia entre perigeu e apogeu. Fatore \(1-d^2/D^2\).`,
solucao:R`<p><b>(a)</b> \(mv_p-m_0v_p=(m+m_0)v_S\Rightarrow v_S=\dfrac{m-m_0}{m+m_0}v_p\).</p>
<p><b>(b)</b> \(L_p=mv_pd\) e \(L_a=mv_aD\), que são iguais.</p>
<p><b>(c)</b> \(\frac12v_p^2\left(1-\frac{d^2}{D^2}\right)=GM\frac{D-d}{dD}\Rightarrow\)</p>\[v_p=\sqrt{\frac{2GMD}{d(d+D)}}.\]
<p><b>(d)</b> \(E_S=\frac12(m+m_0)v_S^2-\dfrac{GM(m+m_0)}{d}\) e \(L_S=(m+m_0)v_Sd=(m-m_0)v_pd\).</p>`});

D({id:'2016-1-q6', ano:2016, prova:'EUF 1º/2016 · Parte 2 · Q6', topicos:['rigido'], fig:['fig/e16a_q6.png','fig/e16a_q6b.png'],
enunciado:R`<p>Um disco de raio \(R\) é formado por duas metades com densidades superficiais de massa \(\rho\) (metade de cima) e \(2\rho\) (metade de baixo).</p>`,
itens:[R`Qual é o momento de inércia em relação ao eixo perpendicular que passa pelo centro geométrico G?`, R`Encontre as coordenadas \(x_1\) e \(x_2\) do centro de massa.`, R`Qual é o momento de inércia em relação ao eixo perpendicular que passa pelo CM?`, R`O disco rola sem deslizar em linha reta num plano horizontal. Encontre \(\lambda(\theta)\) definido por \(v=\lambda(\theta)R\,\dot\theta\), onde \(\theta\) é o ângulo entre a vertical e a reta G–CM e \(v\) é a velocidade do CM.`],
dica:R`O CM de um semicírculo está a \(4R/3\pi\) do centro. No rolamento puro, o ponto de contato é o eixo instantâneo: \(v_{CM}=\dot\theta\times\) (distância contato–CM).`,
solucao:R`<p>Massas: \(m_1=\rho\pi R^2/2\), \(m_2=\rho\pi R^2\), total \(M=\frac32\rho\pi R^2\).</p>
<p><b>(a)</b> Cada metade contribui com \(\frac12m_iR^2\): \(I_G=\frac12MR^2=\frac34\rho\pi R^4\).</p>
<p><b>(b)</b> \(x_1=0\) e \(x_2=\dfrac{\frac{4R}{3\pi}(m_1-m_2)}{M}=-\dfrac{4R}{9\pi}\).</p>
<p><b>(c)</b> Eixos paralelos: \(I_{CM}=I_G-Md^2=\frac34\rho\pi R^4-\frac32\rho\pi R^2\frac{16R^2}{81\pi^2}=\rho R^4\left(\frac{3\pi}{4}-\frac{8}{27\pi}\right)\).</p>
<p><b>(d)</b> G está a \(R\) do contato; o CM está a \(d=4R/9\pi\) de G, com a reta G–CM inclinada de \(\theta\) em relação à vertical, para baixo. A distância contato–CM é \(\sqrt{R^2+d^2-2Rd\cos\theta}\):</p>
\[\lambda(\theta)=\sqrt{1+\left(\frac{4}{9\pi}\right)^2-\frac{8}{9\pi}\cos\theta}.\]`});

D({id:'2016-1-q7', ano:2016, prova:'EUF 1º/2016 · Parte 2 · Q7', topicos:['central'],
enunciado:R`<p>Um objeto de massa \(M\) está sob a força central \(F(r)=-\dfrac{k}{r^2}-\dfrac{q}{r^3}\) (\(k,q>0\)), com energia \(E=\frac M2\dot r^2+\frac M2r^2\dot\theta^2-\frac kr-\dfrac{q}{2r^2}\) e momento angular \(L=Mr^2\dot\theta\).</p>`,
itens:[R`Para uma órbita circular, encontre o raio em função de \(k\), \(q\), \(M\) e \(L\).`, R`Nessas condições, encontre \(E\).`, R`Com \(V_{ef}=\dfrac{L^2}{2Mr^2}-\dfrac kr-\dfrac{q}{2r^2}\), em que condições sobre \(q\), \(L\) e \(M\) a órbita circular é estável?`, R`Para pequenas oscilações radiais em torno da órbita circular, encontre a razão entre o período radial e o período de revolução.`],
dica:R`O termo \(q/r^3\) só muda o coeficiente do termo centrífugo: \(V_{ef}=\dfrac{L^2-Mq}{2Mr^2}-\dfrac kr\).`,
solucao:R`<p><b>(a)</b> \(V_{ef}'=0\Rightarrow r_0=\dfrac{L^2-Mq}{Mk}\).</p>
<p><b>(b)</b> Usando \(\frac{L^2-Mq}{M}=kr_0\): \(E=\dfrac{kr_0}{2r_0^2}-\dfrac{k}{r_0}=-\dfrac{k}{2r_0}=-\dfrac{Mk^2}{2(L^2-Mq)}\).</p>
<p><b>(c)</b> \(V_{ef}''(r_0)=\dfrac{3kr_0}{r_0^4}-\dfrac{2k}{r_0^3}=\dfrac{k}{r_0^3}>0\) sempre que a órbita existe, ou seja, \(L^2>Mq\).</p>
<p><b>(d)</b> \(\omega_r^2=\dfrac{k}{Mr_0^3}\) e \(\dot\theta=\dfrac{L}{Mr_0^2}\):</p>
\[\frac{T_r}{T_\theta}=\frac{\dot\theta}{\omega_r}=\frac{L}{\sqrt{L^2-Mq}}>1.\]
<p class="nota">Como a razão não é racional em geral, a órbita precessa. Com \(q=0\), recupera-se o caso kepleriano, \(T_r=T_\theta\).</p>`});

D({id:'2017-1-q1', ano:2017, prova:'EUF 1º/2017 · Parte 1 · Q1', topicos:['newton'],
enunciado:R`<p>Um corpo de massa \(m\) cai em linha reta, a partir do repouso, num fluido. A gravidade \(g\) é constante e a resistência é \(\vec F_r=-km\vec v\). O empuxo é desprezível.</p>`,
itens:[R`Obtenha o módulo da velocidade em função do tempo.`, R`Qual é a velocidade terminal?`, R`Encontre \(z(t)\), com \(z(0)=0\).`, R`Encontre \(z(v)\).`],
dica:R`É exatamente o caso 2 das suas notas (\(F=F(v)\)). Para \(z(v)\), use \(v\,\dfrac{dv}{dz}=g-kv\).`,
solucao:R`<p>Com \(z\) apontando para baixo: \(\dot v=g-kv\).</p>
<p><b>(a)</b> \(v=\dfrac gk\left(1-e^{-kt}\right)\).</p>
<p><b>(b)</b> \(v_t=g/k\).</p>
<p><b>(c)</b> \(z=\dfrac gkt-\dfrac{g}{k^2}\left(1-e^{-kt}\right)\).</p>
<p><b>(d)</b> \(z=\displaystyle\int_0^v\frac{v'\,dv'}{g-kv'}=-\frac vk-\frac{g}{k^2}\ln\left(1-\frac{kv}{g}\right)\).</p>
<p class="nota">Confira: para \(kv/g\ll1\), \(z\approx v^2/2g\), a queda livre.</p>`});

D({id:'2017-1-q2', ano:2017, prova:'EUF 1º/2017 · Parte 1 · Q2', topicos:['lagr','acopl'], fig:'fig/e17a_q2.png',
enunciado:R`<p>Um pêndulo duplo plano tem partículas de massas \(m_1\) e \(m_2\) e hastes rígidas sem massa de comprimentos \(l_1\) e \(l_2\), oscilando num plano vertical sob a gravidade \(g\). Use como coordenadas os ângulos \(\theta_1\) e \(\theta_2\) da figura.</p>`,
itens:[R`A energia cinética.`, R`A energia potencial.`, R`A lagrangiana.`, R`As equações de movimento para \(\theta_1\) e \(\theta_2\).`],
dica:R`\(\vec v_2=\vec v_1+\) velocidade relativa. O produto escalar dá o termo cruzado \(l_1l_2\dot\theta_1\dot\theta_2\cos(\theta_1-\theta_2)\).`,
solucao:R`<p><b>(a)</b> \(T=\frac12(m_1+m_2)l_1^2\dot\theta_1^2+\frac12m_2l_2^2\dot\theta_2^2+m_2l_1l_2\dot\theta_1\dot\theta_2\cos(\theta_1-\theta_2)\).</p>
<p><b>(b)</b> \(V=-(m_1+m_2)gl_1\cos\theta_1-m_2gl_2\cos\theta_2\).</p>
<p><b>(c)</b> \(L=T-V\).</p>
<p><b>(d)</b></p>
\[(m_1+m_2)l_1\ddot\theta_1+m_2l_2\ddot\theta_2\cos(\theta_1-\theta_2)+m_2l_2\dot\theta_2^2\sin(\theta_1-\theta_2)+(m_1+m_2)g\sin\theta_1=0,\]
\[l_2\ddot\theta_2+l_1\ddot\theta_1\cos(\theta_1-\theta_2)-l_1\dot\theta_1^2\sin(\theta_1-\theta_2)+g\sin\theta_2=0.\]`});

D({id:'2018-1-q1', ano:2018, prova:'EUF 1º/2018 · Parte 1 · Q1', topicos:['mov3d','newton'],
enunciado:R`<p>Uma partícula de massa \(m\) move-se no plano vertical \(xz\) sob \(\mathbf F_g=-mg\hat z\). Em \(t=0\), está na origem com \(\mathbf v_0=v_0\cos\theta\,\hat x+v_0\sin\theta\,\hat z\) (\(0\lt \theta\lt \pi/4\)).</p>`,
itens:[R`Escreva as equações de movimento para \(x\) e \(z\).`, R`Determine \(v_x(t)\) e \(v_z(t)\).`, R`Determine \(x(t)\) e \(z(t)\).`, R`Determine o <b>vetor</b> momento angular \(\mathbf L(t)\) em relação à origem.`, R`Determine o <b>vetor</b> torque \(\mathbf N(t)\) da gravidade em relação à origem e a relação entre \(\mathbf L\) e \(\mathbf N\).`],
dica:R`Só a componente \(y\) de \(\mathbf r\times\mathbf v\) sobrevive: \(L_y=m(zv_x-xv_z)\).`,
solucao:R`<p><b>(a)</b> \(\ddot x=0\), \(\ddot z=-g\).</p>
<p><b>(b)</b> \(v_x=v_0\cos\theta\), \(v_z=v_0\sin\theta-gt\).</p>
<p><b>(c)</b> \(x=v_0\cos\theta\,t\), \(z=v_0\sin\theta\,t-\frac12gt^2\).</p>
<p><b>(d)</b> \(L_y=m(zv_x-xv_z)=mv_0\cos\theta\left[-\tfrac12gt^2+gt^2\right]\Rightarrow\mathbf L=\tfrac12mgv_0\cos\theta\,t^2\,\hat y\).</p>
<p><b>(e)</b> \(\mathbf N=\mathbf r\times(-mg\hat z)=mgx\,\hat y=mgv_0\cos\theta\,t\,\hat y=\dfrac{d\mathbf L}{dt}\). ✓</p>`});

D({id:'2018-1-q2', ano:2018, prova:'EUF 1º/2018 · Parte 1 · Q2', topicos:['lagr','central'],
enunciado:R`<p>Uma partícula de massa \(m\) move-se no plano \(xy\) sob dois potenciais: \(U_1(y)=\lambda y\) e \(U_2(r)=\frac12kr^2\), com \(\lambda,k>0\) e \(r=\sqrt{x^2+y^2}\).</p>`,
itens:[R`Determine o <b>vetor</b> força \(\mathbf F_2\).`, R`Escreva a lagrangiana em polares \(r,\theta\) e as equações de movimento.`, R`Encontre a hamiltoniana em termos de \(r,\theta\) e seus momentos conjugados.`, R`Encontre o <b>vetor</b> \(\mathbf L\) em polares. Sob qual condição ele se conserva?`],
dica:R`\(y=r\sin\theta\). O torque de \(U_1\) em relação à origem não é nulo, em geral.`,
solucao:R`<p><b>(a)</b> \(\mathbf F_2=-kr\,\hat r=-k(x\hat x+y\hat y)\).</p>
<p><b>(b)</b> \(L=\frac12m(\dot r^2+r^2\dot\theta^2)-\lambda r\sin\theta-\frac12kr^2\):</p>
\[m\ddot r-mr\dot\theta^2+\lambda\sin\theta+kr=0,\qquad\frac{d}{dt}(mr^2\dot\theta)+\lambda r\cos\theta=0.\]
<p><b>(c)</b> \(H=\dfrac{p_r^2}{2m}+\dfrac{p_\theta^2}{2mr^2}+\lambda r\sin\theta+\frac12kr^2\).</p>
<p><b>(d)</b> \(\mathbf L=mr^2\dot\theta\,\hat z\). Ele se conserva só se \(\lambda=0\): o torque de \(U_1\) vale \(-\lambda x\,\hat z\).</p>`});

D({id:'2019-1-q1', ano:2019, prova:'EUF 1º/2019 · Parte 1 · Q1', topicos:['sist','osc','newton'], fig:'fig/e19a_q1.png',
enunciado:R`<p>O bloco 1 (\(m_1=2m\)), preso a uma mola \(k\) relaxada, está em repouso. O bloco 2 (\(m_2=m\)) se aproxima com \(\vec v_{2,i}=-v_0\hat x\). Eles colidem elasticamente e o bloco 1 passa a oscilar. Só há atrito no trecho inclinado AB.</p>`,
itens:[R`Determine os <b>vetores</b> velocidade dos blocos logo após a colisão (a mola não afeta o choque).`, R`Determine a amplitude \(x_m\) da oscilação do bloco 1.`, R`O bloco 2 sobe o plano e para definitivamente em B. Determine \(\mu\) em termos de \(g\), \(v_0\), \(h\) e \(\theta\).`, R`Indique as forças sobre o bloco 2 parado em B.`],
dica:R`Colisão elástica 1D com o alvo em repouso: \(v_{alvo}=\dfrac{2m_2}{m_1+m_2}v\) e \(v_{proj}=\dfrac{m_2-m_1}{m_1+m_2}v\).`,
solucao:R`<p><b>(a)</b> \(\vec v_{1,f}=-\frac23v_0\hat x\) e \(\vec v_{2,f}=+\frac13v_0\hat x\): o bloco 2 volta, rumo ao plano.</p>
<p><b>(b)</b> \(\frac12kx_m^2=\frac12(2m)\frac49v_0^2\Rightarrow x_m=\dfrac{2v_0}{3}\sqrt{\dfrac{2m}{k}}\).</p>
<p><b>(c)</b> No trecho de comprimento \(h/\sin\theta\): \(\frac12m\frac{v_0^2}{9}=mgh+\mu mg\cos\theta\frac{h}{\sin\theta}\Rightarrow\)</p>
\[\mu=\left(\frac{v_0^2}{18gh}-1\right)\tan\theta.\]
<p><b>(d)</b> Peso \(mg\), normal \(mg\cos\theta\) e atrito <b>estático</b> \(mg\sin\theta\) para cima do plano. Ficar parado exige \(\mu_e\ge\tan\theta\).</p>`});

D({id:'2019-1-q2', ano:2019, prova:'EUF 1º/2019 · Parte 1 · Q2', topicos:['lagr','ninerc'], fig:'fig/e19a_q2.png',
enunciado:R`<p>Uma barra longa sem massa gira no plano \(xy\) em torno de \(z\) com \(\omega\) constante. Uma partícula de massa \(m\) desliza sem atrito ao longo da barra, sob a força externa \(\vec F=m\gamma\hat x\) (\(\gamma>0\)).</p>`,
itens:[R`Determine \(V(\vec r)\), com zero na origem.`, R`Escreva o vínculo em termos de \(r\), \(\theta\) e \(t\). Qual é a origem da força de vínculo?`, R`Escreva a lagrangiana em termos de \(r\), \(\dot r\) e \(t\) e a equação de movimento.`, R`Com \(\gamma=0\), \(r(0)=a\) e \(\dot r(0)=0\), determine \(r(t)\).`],
dica:R`\(\theta=\omega t\). É a mesma ideia da questão do cano girante (EUF 1º/2013), agora com uma força externa.`,
solucao:R`<p><b>(a)</b> \(V=-m\gamma x=-m\gamma r\cos\theta\).</p>
<p><b>(b)</b> \(\theta-\omega t=0\). A força de vínculo é a normal que a barra faz sobre a partícula, perpendicular à barra.</p>
<p><b>(c)</b> \(L=\frac12m(\dot r^2+\omega^2r^2)+m\gamma r\cos\omega t\Rightarrow\ddot r-\omega^2r=\gamma\cos\omega t\).</p>
<p><b>(d)</b> \(r=Ae^{\omega t}+Be^{-\omega t}\Rightarrow r(t)=a\cosh\omega t\).</p>`});

D({id:'2020-1-q1', ano:2020, prova:'EUF 1º/2020 · Parte 1 · Q1', topicos:['newton','mov1d'], fig:'fig/e20a_q1.png',
enunciado:R`<p>Dois blocos, \(m_1\lt m_2\), com atritos cinéticos com o chão \(\mu_1\) e \(\mu_2\). Na Figura 1, uma força \(\vec F=F(x)\hat x\) empurra \(m_1\), que empurra \(m_2\); eles andam juntos. Na Figura 2, \(m_2\) está apoiado sobre \(m_1\).</p>`,
itens:[R`Indique as forças em cada bloco da Figura 1.`, R`Encontre a aceleração de \(m_1\) na Figura 1.`, R`Encontre a variação da energia cinética do arranjo da Figura 1 quando \(m_1\) vai de \(x_1\) a \(x_2\), com \(F=\alpha x\).`, R`Os dois arranjos têm a mesma velocidade \(v\), e a potência dissipada na Figura 2 é o dobro da Figura 1. Encontre \(\mu_2/\mu_1\).`],
dica:R`Na Figura 2, só \(m_1\) toca o chão, com normal \((m_1+m_2)g\). O atrito entre os blocos é estático e não dissipa.`,
solucao:R`<p><b>(a)</b> \(m_1\): peso, normal \(m_1g\), \(F\) para a direita, atrito \(\mu_1m_1g\) para a esquerda e força de contato de \(m_2\) para a esquerda. \(m_2\): peso, normal \(m_2g\), contato de \(m_1\) para a direita (vale \(m_2a+\mu_2m_2g\)) e atrito \(\mu_2m_2g\) para a esquerda.</p>
<p><b>(b)</b> \(a=\dfrac{F(x)-(\mu_1m_1+\mu_2m_2)g}{m_1+m_2}\).</p>
<p><b>(c)</b> \(\Delta K=\frac{\alpha}{2}(x_2^2-x_1^2)-(\mu_1m_1+\mu_2m_2)g(x_2-x_1)\).</p>
<p><b>(d)</b> \(P_1=(\mu_1m_1+\mu_2m_2)gv\) e \(P_2=\mu_1(m_1+m_2)gv\). De \(P_2=2P_1\):</p>
\[\frac{\mu_2}{\mu_1}=\frac{m_2-m_1}{2m_2}.\]`});

D({id:'2020-1-q2', ano:2020, prova:'EUF 1º/2020 · Parte 1 · Q2', topicos:['lagr','acopl'], fig:'fig/e20a_q2.png',
enunciado:R`<p>Um pêndulo (comprimento \(l\), massa \(m\)) está preso a um bloco \(M\) que desliza sem atrito num trilho horizontal. O zero de energia potencial é em \(y=0\) (\(\theta=\pi/2\)).</p>`,
itens:[R`Escreva a lagrangiana em termos de \(x\) e \(\theta\) e as equações de movimento.`, R`Além da energia, há outra constante de movimento? Justifique.`, R`Para \(\theta\ll1\), encontre o modo normal de oscilação e sua frequência.`, R`Além do repouso, existe movimento em que o pêndulo não oscila? Qual?`],
dica:R`\(x\) é cíclica. Use \((M+m)\ddot x=-ml\ddot\theta\) para eliminar \(\ddot x\) na equação de \(\theta\).`,
solucao:R`<p><b>(a)</b> \(L=\frac12(M+m)\dot x^2+ml\dot x\dot\theta\cos\theta+\frac12ml^2\dot\theta^2+mgl\cos\theta\):</p>
\[\frac{d}{dt}\left[(M+m)\dot x+ml\dot\theta\cos\theta\right]=0,\qquad l\ddot\theta+\ddot x\cos\theta+g\sin\theta=0.\]
<p><b>(b)</b> Sim: \(p_x=(M+m)\dot x+ml\dot\theta\cos\theta\), o momento linear horizontal total (\(x\) é cíclica; não há força externa horizontal).</p>
<p><b>(c)</b> Linearizando: \(\ddot x=-\dfrac{ml}{M+m}\ddot\theta\Rightarrow\dfrac{Ml}{M+m}\ddot\theta+g\theta=0\):</p>
\[\omega=\sqrt{\frac{(M+m)g}{Ml}},\]
<p>com o bloco oscilando em oposição, \(\delta x=-\dfrac{ml}{M+m}\theta\), de modo que o CM horizontal fica parado. O outro modo tem frequência zero.</p>
<p><b>(d)</b> Sim: \(\theta=0\) com o conjunto transladando a velocidade constante. É o modo de frequência zero (translação do CM).</p>`});

// ===================== MÚLTIPLA ESCOLHA — 2ª/3ª aplicações =====================
// 2020 — 2ª aplicação
P({id:'2020b-mc1', ano:2020, prova:'EUF 2020 (2ª aplicação) · MC1A', topicos:['newton'], fig:'fig/y20b_mc1.png',
enunciado:R`<p>Um sistema de polias e três massas, \(M_1=M_2=M_3=1{,}0\) kg, está montado como na figura, com \(g=10\) m/s². Fios inextensíveis e polias e fios sem massa. O módulo da aceleração de \(M_3\) é:</p>`,
opcoes:[R`3,3 m/s²`,R`10 m/s²`,R`0,0 m/s²`,R`6,7 m/s²`,R`2,5 m/s²`],
dica:R`Cada fio liga \(M_3\) a uma das massas laterais: se \(M_3\) desce \(s\), cada lateral sobe \(s\). E \(M_3\) é puxado por duas trações.`,
solucao:R`<p>Mesma aceleração \(a\) (com \(M_3\) descendo): \(T-mg=ma\) e \(mg-2T=ma\Rightarrow a=-g/3\). O módulo é 3,3 m/s²; na verdade \(M_3\) sobe.</p>`});

P({id:'2020b-mc2', ano:2020, prova:'EUF 2020 (2ª aplicação) · MC2A', topicos:['newton'], fig:'fig/y20b_mc2.png',
enunciado:R`<p>Dois blocos de massa \(M\) estão ligados por um fio que passa por uma polia sem massa (sem atrito no eixo). O sistema estava em repouso quando um bloco de massa \(m\) é colocado suavemente sobre um deles. O módulo da força que \(m\) exerce no bloco de baixo é:</p>`,
opcoes:[R`\(mg\dfrac{2M}{2M+m}\)`,R`\((M+m)g\)`,R`\(mg\)`,R`\((2M+m)g\)`,R`\(mg\dfrac{M}{2M+m}\)`],
dica:R`Primeiro a aceleração da máquina de Atwood; depois a normal sobre \(m\), que desce acelerado.`,
solucao:R`<p>\(a=\dfrac{mg}{2M+m}\). A normal é \(N=m(g-a)=mg\dfrac{2M}{2M+m}\). Não é \(mg\): o bloco está acelerando para baixo.</p>`});

P({id:'2020b-mc3', ano:2020, prova:'EUF 2020 (2ª aplicação) · MC3A', topicos:['lagr','ninerc'], fig:'fig/y20b_mc3.png',
enunciado:R`<p>Um corpo de massa \(m\) desliza sem atrito num arame parabólico \(z=k\rho^2\) que gira em torno de \(z\) com \(\omega\) constante. A lagrangiana é:</p>`,
opcoes:[R`\(L=\frac12m\left(\dot\rho^2+\rho^2\omega^2+4k^2\rho^2\dot\rho^2\right)-mgk\rho^2\)`,R`\(L=\frac12m\left(\dot\rho^2+\rho^2\omega^2+4k^2\rho^2\dot\rho^2\right)+mgk\rho^2\)`,R`\(L=\frac12m\left(\dot\rho^2+\rho^2\omega^2\right)-mgk\rho^2\)`,R`\(L=\frac12m\left(\dot\rho^2+\rho^2\omega^2+k^2\rho^2\dot\rho^2\right)-mgk\rho^2\)`,R`\(L=\frac12m\left(\dot\rho^2+\rho^2\omega^2+k^2\rho^2\dot\rho^2\right)+mgk\rho^2\)`],
dica:R`\(\dot z=2k\rho\dot\rho\) e \(\dot\varphi=\omega\).`,
solucao:R`<p>\(T=\frac12m(\dot\rho^2+\rho^2\omega^2+\dot z^2)\) com \(\dot z^2=4k^2\rho^2\dot\rho^2\); \(V=mgz=mgk\rho^2\).</p>`});

P({id:'2020b-mc4', ano:2020, prova:'EUF 2020 (2ª aplicação) · MC4A', topicos:['sist'], fig:'fig/y20b_mc4.png',
enunciado:R`<p>Uma bola de aço \(m\), presa a uma corda de comprimento \(L\), é solta com a corda na horizontal. No ponto mais baixo, colide elasticamente com um bloco \(2m\) em repouso (atrito cinético \(\mu_c\) com o chão). Há uma única colisão. A distância percorrida pelo bloco é:</p>`,
opcoes:[R`\(\dfrac{4L}{9\mu_c}\)`,R`\(\dfrac{2L}{3\mu_c}\)`,R`\(\dfrac{4L}{9}\)`,R`\(\dfrac{L}{9\mu_c}\)`,R`\(\dfrac{L}{\mu_c}\)`],
dica:R`\(v=\sqrt{2gL}\); o alvo sai com \(\frac{2m}{m+2m}v\).`,
solucao:R`<p>\(V=\frac23\sqrt{2gL}\) e \(d=\dfrac{V^2}{2\mu_cg}=\dfrac{\frac49\cdot2gL}{2\mu_cg}=\dfrac{4L}{9\mu_c}\).</p>`});

P({id:'2020b-mc5', ano:2020, prova:'EUF 2020 (2ª aplicação) · MC5A', topicos:['mov1d','osc'],
enunciado:R`<p>Uma partícula de massa \(m\) move-se em 1D sob \(U(x)=U_0\left(\dfrac xa+\dfrac ax\right)\), com \(U_0,a>0\). O equilíbrio estável \(x_0\) e a frequência \(\omega\) de pequenas oscilações são:</p>`,
opcoes:[R`\(x_0=+a\) e \(\omega=\sqrt{2U_0/(ma^2)}\)`,R`\(x_0=+a\) e \(\omega=\sqrt{U_0/(2ma^2)}\)`,R`\(x_0=2a\) e \(\omega=\sqrt{U_0/(4ma^2)}\)`,R`\(x_0=-a\) e \(\omega=\sqrt{U_0/(2ma^2)}\)`,R`\(x_0=-a\) e \(\omega=\sqrt{2U_0/(ma^2)}\)`],
dica:R`\(U''=2U_0a/x^3\): qual sinal de \(x\) dá mínimo?`,
solucao:R`<p>\(U'=U_0(1/a-a/x^2)=0\Rightarrow x=\pm a\). Em \(+a\), \(U''=2U_0/a^2>0\) (mínimo); em \(-a\) é máximo. Logo \(\omega=\sqrt{2U_0/(ma^2)}\).</p>`});

P({id:'2020b-mc6', ano:2020, prova:'EUF 2020 (2ª aplicação) · MC6A', topicos:['central'],
enunciado:R`<p>Uma partícula de massa \(m\) move-se em 3D sob \(U(r)=-\dfrac14\dfrac{k}{r^4}\) (\(k>0\)).</p><p>I. \(\nabla\times\mathbf F=0\) e \(\mathbf F=-(k/r^3)\hat r\).<br>II. Para órbita circular de raio \(R\), \(\omega_c=\sqrt{2k/(mR^6)}\).<br>III. A energia total e o momento angular \(\mathbf L\) são constantes do movimento.</p>`,
opcoes:[R`Apenas a afirmação III está correta.`,R`Apenas a afirmação I está correta.`,R`Apenas a afirmação II está correta.`,R`Apenas as afirmações I e III estão corretas.`,R`Apenas as afirmações II e III estão corretas.`],
dica:R`Derive \(U\) com cuidado: qual é a potência de \(r\) na força?`,
solucao:R`<p>\(\mathbf F=-U'\hat r=-\dfrac{k}{r^5}\hat r\), então I é falsa. Circular: \(m\omega^2R=k/R^5\Rightarrow\omega=\sqrt{k/(mR^6)}\), então II é falsa (fator 2). III é verdadeira: força central e conservativa.</p>`});

P({id:'2020b-mc7', ano:2020, prova:'EUF 2020 (2ª aplicação) · MC7A', topicos:['osc'],
enunciado:R`<p>Uma partícula de massa \(m\) em 1D sofre \(F_1=-kx\) e \(F_2=-2mbv\) (\(k,b>0\)). Ela parte do repouso em \(x_0>0\).</p><p>I. Para \(b=\sqrt{k/(2m)}\), o movimento fica restrito a \(0\le x\le x_0\).<br>II. Para \(b=0\), a energia mecânica é constante.<br>III. Para \(b=\sqrt{2k/m}\), o movimento fica restrito a \(0\le x\le x_0\).</p>`,
opcoes:[R`Apenas as afirmações II e III estão corretas.`,R`Apenas a afirmação I está correta.`,R`Apenas a afirmação II está correta.`,R`Apenas a afirmação III está correta.`,R`Apenas as afirmações I e II estão corretas.`],
dica:R`\(\ddot x+2b\dot x+\omega_0^2x=0\) com \(\omega_0^2=k/m\). Compare \(b\) com \(\omega_0\).`,
solucao:R`<p>I: \(b=\omega_0/\sqrt2\lt \omega_0\), subamortecido; a partícula cruza \(x=0\). Falsa. II: verdadeira. III: \(b=\sqrt2\,\omega_0>\omega_0\), superamortecido; partindo do repouso, decai sem cruzar zero. Verdadeira.</p>`});

P({id:'2020b-mc8', ano:2020, prova:'EUF 2020 (2ª aplicação) · MC8A', topicos:['lagr'],
enunciado:R`<p>Uma partícula no interior de um cone \(z=\rho\) tem lagrangiana \(L=\frac12m\left(2\dot\rho^2+\rho^2\dot\varphi^2\right)-a\rho-b\cos\varphi\). As equações de movimento são:</p>`,
opcoes:[R`\(m\rho\dot\varphi^2-a-2m\ddot\rho=0\) e \(b\sin\varphi-2m\rho\dot\rho\dot\varphi-m\rho^2\ddot\varphi=0\)`,R`\(m\rho\dot\varphi^2-a+2m\ddot\rho=0\) e \(b\sin\varphi-2m\rho\dot\rho\dot\varphi-m\rho^2\ddot\varphi=0\)`,R`\(m\rho\dot\varphi^2-a-2m\ddot\rho=0\) e \(b\sin\varphi-2m\rho\dot\rho\dot\varphi+m\rho^2\ddot\varphi=0\)`,R`\(m\rho\dot\varphi^2-a+2m\ddot\rho=0\) e \(b\sin\varphi-m\rho^2\ddot\varphi=0\)`,R`\(m\rho\dot\varphi^2-a-2m\ddot\rho=0\) e \(b\sin\varphi-m\rho^2\ddot\varphi=0\)`],
dica:R`\(\partial L/\partial\varphi=+b\sin\varphi\). Derive \(m\rho^2\dot\varphi\) com a regra do produto.`,
solucao:R`<p>\(\rho\): \(2m\ddot\rho-m\rho\dot\varphi^2+a=0\). \(\varphi\): \(\frac{d}{dt}(m\rho^2\dot\varphi)-b\sin\varphi=0\). Reorganizando, obtém-se a alternativa.</p>`});

// 2021 — 3ª aplicação
P({id:'2021c-mc1', ano:2021, prova:'EUF 2021 (3ª aplicação) · MC1A', topicos:['mov3d'], fig:'fig/y21b_mc1.png',
enunciado:R`<p>Uma pedra é lançada do solo a 45° com a horizontal \(x\) (\(y\) para cima), sem resistência do ar. Quais curvas representam \(v_x(t)\) e \(v_y(t)\), respectivamente?</p>`,
opcoes:[R`II e III`,R`IV e I`,R`II e IV`,R`II e I`,R`IV e III`],
dica:R`\(a_x=0\) e \(a_y=-g\).`,
solucao:R`<p>\(v_x\) é constante (II). \(v_y=v_0\sin45^\circ-gt\) é uma reta decrescente que cruza zero no topo (III).</p>`});

P({id:'2021c-mc2', ano:2021, prova:'EUF 2021 (3ª aplicação) · MC2A', topicos:['sist'], fig:'fig/y21b_mc2.png',
enunciado:R`<p>Uma partícula \(m\) com velocidade \(v\) ao longo de \(x\) colide com \(2m\) em repouso. Depois, \(m\) fica em repouso e \(2m\) se divide em dois pedaços de massa \(m\), com velocidades fazendo o mesmo ângulo \(\theta>0\) com \(x\), um de cada lado. (\(v\ll c\).) Os módulos das velocidades dos pedaços:</p>`,
opcoes:[R`são ambos maiores que \(v/2\)`,R`são \(v\) e menor que \(v\)`,R`valem ambos \(v/2\)`,R`são \(v/2\) e maior que \(v/2\)`,R`valem ambos \(v\)`],
dica:R`Momento em \(y\) força módulos iguais; momento em \(x\) dá o módulo.`,
solucao:R`<p>Em \(y\): \(u_1\sin\theta=u_2\sin\theta\Rightarrow u_1=u_2=u\). Em \(x\): \(mv=2mu\cos\theta\Rightarrow u=\dfrac{v}{2\cos\theta}>\dfrac v2\).</p>`});

P({id:'2021c-mc3', ano:2021, prova:'EUF 2021 (3ª aplicação) · MC3A', topicos:['lagr'],
enunciado:R`<p>A lagrangiana de um sistema é \(L=a\dot q^2-bq^4\). A equação de movimento é:</p>`,
opcoes:[R`\(\ddot q=-(2b/a)\,q^3\)`,R`\(\ddot q=(2b/a)\,q^3\)`,R`\(\ddot q=-(b/a)\,q^3\)`,R`\(\dot q=-(2b/a)\,q^3\)`,R`\(\dot q=\sqrt{b/a}\,q^2\)`],
dica:R`\(\frac{d}{dt}(2a\dot q)=-4bq^3\).`,
solucao:R`<p>\(2a\ddot q+4bq^3=0\Rightarrow\ddot q=-\dfrac{2b}{a}q^3\).</p>`});

P({id:'2021c-mc4', ano:2021, prova:'EUF 2021 (3ª aplicação) · MC4A', topicos:['grav'],
enunciado:R`<p>Um planeta esférico uniforme tem \(R=2R_0\) e \(M=M_0\) (raio e massa da Terra). A velocidade de escape na sua superfície, em termos de \(g_0\) (gravidade na superfície da Terra), é:</p>`,
opcoes:[R`\(\sqrt{R_0g_0}\)`,R`\(2\sqrt{R_0g_0}\)`,R`\(\sqrt{2R_0g_0}\)`,R`\(\sqrt{R_0g_0}/2\)`,R`\(2\sqrt{2R_0g_0}\)`],
dica:R`\(v_e=\sqrt{2GM/R}\) e \(GM_0=g_0R_0^2\).`,
solucao:R`<p>\(v_e=\sqrt{\dfrac{2GM_0}{2R_0}}=\sqrt{\dfrac{GM_0}{R_0}}=\sqrt{g_0R_0}\).</p>`});

P({id:'2021c-mc5', ano:2021, prova:'EUF 2021 (3ª aplicação) · MC5A', topicos:['rigido','newton'], fig:'fig/y21b_mc5.png',
enunciado:R`<p>Duas massas \(m\), em planos de ângulos \(\alpha\) e \(\beta\) (\(\beta>\alpha\)) sem atrito, estão ligadas por um fio que passa por uma roldana (momento de inércia \(I\), raio \(R\)) sem deslizar. As massas têm aceleração de módulo \(a\). As trações são:</p>`,
opcoes:[R`\(T_1=m(a+g\sin\alpha)\) e \(T_2=\left(m+\frac{I}{R^2}\right)a+mg\sin\alpha\)`,R`\(T_1=m(a+g\sin\alpha)\) e \(T_2=\left(m+\frac{2I}{R^2}\right)a\)`,R`\(T_1=m(a+g\sin\alpha)\) e \(T_2=ma+mg\sin\alpha\)`,R`\(T_1=mg\sin\alpha\) e \(T_2=2\left(m+\frac{I}{R^2}\right)a+mg\sin\alpha\)`,R`\(T_1=m(a+g\sin\alpha)\) e \(T_2=\left(m+\frac{I}{2R^2}\right)a+mg\sin\alpha\)`],
dica:R`A massa da esquerda sobe. Na roldana: \((T_2-T_1)R=I\,a/R\).`,
solucao:R`<p>Esquerda: \(T_1-mg\sin\alpha=ma\). Roldana: \(T_2=T_1+Ia/R^2=\left(m+\frac{I}{R^2}\right)a+mg\sin\alpha\).</p>`});

P({id:'2021c-mc6', ano:2021, prova:'EUF 2021 (3ª aplicação) · MC6A', topicos:['central'],
enunciado:R`<p>Sob o potencial central \(V(r)=-\dfrac{k_1}{r}+\dfrac{k_2}{3r^3}\) (\(k_1>0\), termo em \(k_2\) pequeno), uma partícula \(m\) faz uma órbita circular de raio \(r_0\). A velocidade angular orbital é:</p>`,
opcoes:[R`\(\sqrt{\dfrac{k_1r_0^2-k_2}{mr_0^5}}\)`,R`\(\sqrt{\dfrac{k_1r_0^2}{mr_0^5}}\)`,R`\(\sqrt{\dfrac{k_2}{mr_0^5}}\)`,R`\(\sqrt{\dfrac{k_1r_0^2+k_2}{mr_0^5}}\)`,R`\(\sqrt{\dfrac{k_1r_0^2-2k_2}{mr_0^5}}\)`],
dica:R`Força atrativa \(=V'(r)\); iguale a \(m\omega^2r_0\).`,
solucao:R`<p>\(V'=\dfrac{k_1}{r^2}-\dfrac{k_2}{r^4}\). Então \(m\omega^2r_0=\dfrac{k_1}{r_0^2}-\dfrac{k_2}{r_0^4}\Rightarrow\omega^2=\dfrac{k_1r_0^2-k_2}{mr_0^5}\).</p>`});

P({id:'2021c-mc7', ano:2021, prova:'EUF 2021 (3ª aplicação) · MC7A', topicos:['mov1d'],
enunciado:R`<p>A força de Lennard-Jones entre átomos é \(F(r)=A\left[2\left(\frac\sigma r\right)^{13}-\left(\frac\sigma r\right)^{7}\right]\). O trabalho dessa força quando a distância vai de \(r=\sigma\) até \(2\sigma\), para o hélio (\(A\sigma=0{,}021\) eV), melhor se aproxima de:</p><p>Dado: \(\int_1^{1/2}(2z^{11}-z^5)\,dz=-\frac{21}{8192}\).</p>`,
opcoes:[R`\(5{,}4\times10^{-5}\) eV`,R`\(5{,}4\times10^{-3}\) eV`,R`2 eV`,R`3 eV`,R`0,54 eV`],
dica:R`Troque \(z=\sigma/r\), \(dr=-\sigma\,dz/z^2\).`,
solucao:R`<p>\(W=A\sigma\displaystyle\int_1^{1/2}(2z^{13}-z^7)\left(-\frac{dz}{z^2}\right)=-A\sigma\left(-\frac{21}{8192}\right)=\frac{21}{8192}(0{,}021)\approx5{,}4\times10^{-5}\) eV.</p>`});

P({id:'2021c-mc8', ano:2021, prova:'EUF 2021 (3ª aplicação) · MC8A', topicos:['mov1d','osc'],
enunciado:R`<p>Uma partícula \(m\) move-se em \(x\) sob \(V(x)=A\left(e^{-2\alpha x}-e^{-\alpha x}\right)\), com \(A,\alpha>0\). A frequência angular de pequenas oscilações em torno do equilíbrio estável é:</p>`,
opcoes:[R`\(\alpha\sqrt{\dfrac{A}{2m}}\)`,R`\(3\alpha\sqrt{\dfrac{A}{2m}}\)`,R`\(3\alpha\sqrt{\dfrac{A}{m}}\)`,R`0`,R`A frequência angular não depende de \(A\)`],
dica:R`Potencial de Morse: o equilíbrio é \(e^{-\alpha x_0}=1/2\).`,
solucao:R`<p>\(V'=0\Rightarrow e^{-\alpha x_0}=\frac12\). \(V''=A(4\alpha^2e^{-2\alpha x}-\alpha^2e^{-\alpha x})=A\alpha^2\left(1-\frac12\right)=\frac{A\alpha^2}{2}\). Logo \(\omega=\alpha\sqrt{A/2m}\).</p>`});

// 2022 — 2ª aplicação
P({id:'2022b-mc1', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q2 [mc1b]', topicos:['rigido'], fig:'fig/y22b_mc1.png',
enunciado:R`<p>Um pistão (disco de raio \(r\), sem atrito) recebe pressão resultante \(p\) e empurra o ponto C de uma peça rígida em L, ABC, que gira em torno do ponto fixo B. Uma força \(\vec F\), fazendo ângulo \(\alpha\) com a vertical, é aplicada em A. Com \(\overline{AB}=y\) e \(\overline{BC}=x\), o módulo de \(F\) para o equilíbrio é:</p>`,
opcoes:[R`\(\dfrac{p\pi r^2x}{y\cos\alpha}\)`,R`\(\dfrac{p\pi r^2y}{4x\cos\alpha}\)`,R`\(\dfrac{p\pi r^2}{4\cos\alpha}\)`,R`\(\dfrac{p\pi r^2x^2}{y^2\cos\alpha}\)`,R`\(\dfrac{p\pi r^2y^2}{3x^2\cos\alpha}\)`],
dica:R`Torques em torno de B: a força do pistão é horizontal com braço BC; em A, só a componente vertical de \(F\) faz torque.`,
solucao:R`<p>\(p\pi r^2\cdot x=F\cos\alpha\cdot y\Rightarrow F=\dfrac{p\pi r^2x}{y\cos\alpha}\).</p>`});

P({id:'2022b-mc2', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q3 [mc2a]', topicos:['grav','mov1d'],
enunciado:R`<p>A Terra gira em órbita circular de raio \(R\) em torno do Sol. Se sua velocidade fosse zerada, ela cairia em linha reta e se chocaria com o Sol após \(\Delta t\). Com \(T=2\pi\sqrt{R^3/GM}\) e \(R\gg R_0\gg R_T\), quanto vale \(\Delta t/T\)?</p><p>Sugestão: \(\int_{R_0}^R\left(\frac1r-\frac1R\right)^{-1/2}dr\approx\frac\pi2R^{3/2}\).</p>`,
opcoes:[R`\(\dfrac{1}{4\sqrt2}\)`,R`\(\dfrac{1}{2\pi}\)`,R`\(\dfrac{1}{3\pi}\)`,R`\(\dfrac12\)`,R`\(\dfrac{1}{\sqrt2}\)`],
dica:R`Caso 3 das suas notas: energia dá \(\dot r(r)\), e \(dt=dr/|\dot r|\).`,
solucao:R`<p>\(\dot r^2=2GM\left(\frac1r-\frac1R\right)\Rightarrow\Delta t=\dfrac{1}{\sqrt{2GM}}\cdot\dfrac\pi2R^{3/2}\). Dividindo por \(T\): \(\dfrac{\pi/2}{2\pi\sqrt2}=\dfrac{1}{4\sqrt2}\). É meio período de uma elipse degenerada de semieixo \(R/2\).</p>`});

P({id:'2022b-mc3', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q6 [mc3b]', topicos:['rigido'],
enunciado:R`<p>Uma esfera <b>oca</b> homogênea (massa \(m\), raio \(R\), \(I=\frac23mR^2\)) é lançada com \(v_0\), sem rotação, numa superfície com atrito cinético \(\mu\). O tempo até começar a rolar sem deslizar é:</p>`,
opcoes:[R`\(\dfrac{2v_0}{5g\mu}\)`,R`\(\dfrac{v_0}{5g\mu}\)`,R`\(\dfrac{2v_0}{g\mu}\)`,R`\(\dfrac{5v_0}{2g\mu}\)`,R`\(\dfrac{v_0}{g\mu}\)`],
dica:R`\(v=v_0-\mu gt\) e \(\omega R=\frac{3}{2}\mu gt\).`,
solucao:R`<p>\(\alpha=\dfrac{\mu mgR}{\frac23mR^2}=\dfrac{3\mu g}{2R}\). Rolamento: \(v_0-\mu gt=\frac32\mu gt\Rightarrow t=\dfrac{2v_0}{5\mu g}\). Compare com a esfera maciça (EUF 2020, Q10): \(2v_0/7\mu g\).</p>`});

P({id:'2022b-mc4', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q7 [mc4a]', topicos:['newton','sist'],
enunciado:R`<p>Num disparo, a força sobre o projétil é \(F(t)=k_1-k_2t^2\) para \(t\ge0\), até \(t_f\) em que \(F(t_f)=0\). Com massa \(m\), a velocidade logo após \(t_f\) é:</p>`,
opcoes:[R`\(\dfrac{2k_1}{3m}\left(\dfrac{k_1}{k_2}\right)^{1/2}\)`,R`\(\dfrac{k_1}{3m}\left(\dfrac{k_1}{k_2}\right)^{1/3}\)`,R`\(\dfrac{k_1}{m}\left(\dfrac{k_1}{k_2}\right)^{1/2}\)`,R`\(\dfrac{k_1}{4m}\left(\dfrac{k_1}{k_2}\right)^{1/2}\)`,R`\(3\dfrac{k_1}{m}\left(\dfrac{k_1}{k_2}\right)^{1/2}\)`],
dica:R`Impulso \(=\int_0^{t_f}F\,dt\), com \(t_f=\sqrt{k_1/k_2}\).`,
solucao:R`<p>\(mv=k_1t_f-\frac{k_2t_f^3}{3}=\frac23k_1t_f\Rightarrow v=\dfrac{2k_1}{3m}\sqrt{\dfrac{k_1}{k_2}}\).</p>`});

P({id:'2022b-mc5', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q9 [mc5a]', topicos:['newton'],
enunciado:R`<p>A força \(F=ma\) é obtida medindo \(m\) e \(a\), descorrelacionados, com incertezas \(\sigma_m\) e \(\sigma_a\). A incerteza relativa \(\sigma_F/F\) é:</p>`,
opcoes:[R`\(\sqrt{\left(\frac{\sigma_m}{m}\right)^2+\left(\frac{\sigma_a}{a}\right)^2}\)`,R`\(\dfrac{\sigma_m}{m}+\dfrac{\sigma_a}{a}\)`,R`\(\left(\frac{\sigma_m}{m}\right)^2+\left(\frac{\sigma_a}{a}\right)^2\)`,R`\(\sqrt{\dfrac{\sigma_m}{m}+\dfrac{\sigma_a}{a}}\)`,R`\(\dfrac{\sigma_m\sigma_a}{ma}\)`],
dica:R`Produto de grandezas independentes: incertezas relativas somam em quadratura.`,
solucao:R`<p>\(\left(\frac{\sigma_F}{F}\right)^2=\left(\frac{\sigma_m}{m}\right)^2+\left(\frac{\sigma_a}{a}\right)^2\). A soma simples (B) é a estimativa pessimista, válida para erros correlacionados.</p>`});

P({id:'2022b-mc6', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q11 [mc6a]', topicos:['mov1d','osc'],
enunciado:R`<p>Uma partícula \(m\) em \(x>0\) sofre \(F=-m\omega^2\left(x-a^4/x^3\right)\). A posição de equilíbrio e o período de pequenas oscilações são:</p>`,
opcoes:[R`\(a\) e \(\pi/\omega\)`,R`\(a/2\) e \(2\pi/\omega\)`,R`\(a\) e \(1/\omega\)`,R`\(2a\) e \(\pi/\omega\)`,R`\(a\) e \(\pi/2\omega\)`],
dica:R`\(k_{ef}=-F'(x_0)\).`,
solucao:R`<p>\(F=0\Rightarrow x_0=a\). \(F'=-m\omega^2(1+3a^4/x^4)=-4m\omega^2\) em \(a\). Frequência \(2\omega\), período \(\pi/\omega\).</p>`});

P({id:'2022b-mc7', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q13 [mc7a]', topicos:['lagr'],
enunciado:R`<p>Uma partícula \(m\) perto da superfície da Terra está confinada ao plano \(y=0\) ao longo da curva \(z=ax^2\) (\(z\) para cima, \(a>0\)). A lagrangiana é:</p>`,
opcoes:[R`\(L=\dfrac{m\dot z^2}{2}\left(1+\dfrac{1}{4az}\right)-mgz\)`,R`\(L=\dfrac{m\dot z^2}{2}\left(1-\dfrac{1}{4az}\right)-mgz\)`,R`\(L=\dfrac{m\dot x^2}{2}\left(1+\dfrac{1}{4ax}\right)-mgx\)`,R`\(L=\dfrac{m\dot x^2}{2}\left(1+4a^2x^2\right)+mgx\)`,R`\(L=\dfrac{m\dot x^2}{2}+\dfrac{m\dot z^2}{2}+mgz\)`],
dica:R`Escreva \(\dot x\) em termos de \(z\) e \(\dot z\): \(x=\sqrt{z/a}\).`,
solucao:R`<p>\(\dot x=\dfrac{\dot z}{2\sqrt{az}}\Rightarrow\dot x^2=\dfrac{\dot z^2}{4az}\). Então \(T=\frac m2\dot z^2\left(1+\frac{1}{4az}\right)\) e \(V=mgz\). (Em termos de \(x\) seria \(\frac m2\dot x^2(1+4a^2x^2)-mgax^2\); a alternativa D erra o potencial.)</p>`});

P({id:'2022b-mc8', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q15 [mc8a]', topicos:['newton','mov3d'],
enunciado:R`<p>Uma partícula de 0,20 kg move-se num círculo de raio 0,80 m sobre uma mesa (\(\mu=0{,}02\)). Em \(t=0\), \(v=10\) m/s. Após uma volta, o trabalho do atrito \(W\) e a energia cinética \(K\) são (\(g=10\) m/s², \(\pi=3{,}1\)):</p>`,
opcoes:[R`\(W=-0{,}20\) J, \(K=9{,}80\) J`,R`\(W=-0{,}40\) J, \(K=9{,}60\) J`,R`\(W=-0{,}30\) J, \(K=9{,}70\) J`,R`\(W=-0{,}20\) J, \(K=10{,}20\) J`,R`\(W=-0{,}40\) J, \(K=9{,}80\) J`],
dica:R`\(W=-\mu mg\cdot2\pi R\).`,
solucao:R`<p>\(W=-0{,}02(0{,}2)(10)(2)(3{,}1)(0{,}8)\approx-0{,}20\) J. \(K_0=10\) J, então \(K=9{,}80\) J.</p>`});

// 2023 — 2º semestre
P({id:'2023b-q1', ano:2023, prova:'EUF 2º/2023 · Q1 [mc1a]', topicos:['grav','central'],
enunciado:R`<p>Um satélite \(m\) está em órbita circular de raio \(r\) em torno da Terra (massa \(M\)). O módulo do momento angular em relação ao eixo perpendicular pelo centro da Terra e a energia total (zero no infinito) são:</p>`,
opcoes:[R`\(L=\sqrt{GMm^2r}\); \(E=-\frac12\dfrac{GMm}{r}\)`,R`\(L=\sqrt{GMm^2r}\); \(E=-\dfrac{GMm}{r}\)`,R`\(L=\sqrt{GM^2mr}\); \(E=\dfrac{GMm}{r}\)`,R`\(L=\sqrt{GM^2mr}\); \(E=-\frac12\dfrac{GMm}{r^2}\)`,R`\(L=\sqrt{GMmr}\); \(E=-\dfrac{GMm}{r^2}\)`],
dica:R`\(v=\sqrt{GM/r}\); confira as dimensões.`,
solucao:R`<p>\(L=mvr=m\sqrt{GMr}=\sqrt{GMm^2r}\); \(E=\frac12mv^2-\frac{GMm}{r}=-\frac{GMm}{2r}\).</p>`});

P({id:'2023b-q3', ano:2023, prova:'EUF 2º/2023 · Q3 [mc2a]', topicos:['osc'], fig:'fig/y23b_q3.png',
enunciado:R`<p>Uma massa \(m\) está presa a três molas: \(k_1\) de um lado; \(k_2\) e \(k_3\) do outro (figura). Superfície sem atrito, molas relaxadas no equilíbrio. A frequência angular é:</p>`,
opcoes:[R`\(\omega_0=\sqrt{\dfrac{k_1+k_2+k_3}{m}}\)`,R`\(\omega_0=\sqrt{\dfrac{1/k_1+k_2+k_3}{m}}\)`,R`\(\omega_0=\sqrt{\dfrac{k_1+1/k_2+1/k_3}{m}}\)`,R`\(\omega_0=\sqrt{\dfrac{1/k_1+1/k_2+1/k_3}{m}}\)`,R`\(\omega_0=\sqrt{\dfrac{k_1}{m}}\)`],
dica:R`Um deslocamento \(x\) deforma as três molas de \(x\).`,
solucao:R`<p>Todas sofrem a mesma deformação (estão “em paralelo” do ponto de vista da massa): \(F=-(k_1+k_2+k_3)x\).</p>`});

P({id:'2023b-q5', ano:2023, prova:'EUF 2º/2023 · Q5 [mc3a]', topicos:['mov1d','osc'], fig:'fig/y23b_q5.png',
enunciado:R`<p>A energia potencial do LiBr é aproximada por \(U(r)=\alpha e^2\left[\dfrac{C}{7r^7}-\dfrac1r\right]\), com \(\alpha,C>0\). A distância de equilíbrio \(r_0\) e a constante de mola \(k\) na aproximação harmônica são:</p>`,
opcoes:[R`\(r_0=C^{1/6}\) e \(k=\dfrac{6\alpha e^2}{\sqrt C}\)`,R`\(r_0=C^{1/6}\) e \(k=\dfrac{6}{\sqrt C}\)`,R`\(r_0=(C/7)^{1/6}\) e \(k=\dfrac{6\sqrt7\,\alpha e^2}{\sqrt C}\)`,R`\(r_0=(C/7)^{1/6}\) e \(k=\dfrac{6\sqrt7}{\sqrt C}\)`,R`\(r_0=\alpha e^2C^{1/6}\) e \(k=\sqrt{\dfrac{\alpha e^2}{C}}\)`],
dica:R`\(U'=\alpha e^2\left(-C/r^8+1/r^2\right)\).`,
solucao:R`<p>\(U'=0\Rightarrow r_0^6=C\). \(U''=\alpha e^2\left(\frac{8C}{r^9}-\frac{2}{r^3}\right)=\frac{6\alpha e^2}{r_0^3}=\frac{6\alpha e^2}{\sqrt C}\).</p>`});

P({id:'2023b-q7', ano:2023, prova:'EUF 2º/2023 · Q7 [mc4a]', topicos:['rigido'], fig:'fig/y23b_q7.png',
enunciado:R`<p>Um disco (\(I_1=I\)) gira livremente com \(\omega_0\) num eixo vertical. Deixa-se cair sobre ele um disco \(I_2=I/2\) parado; pelo atrito, passam a girar juntos com \(\omega_f\). Qual é \(\omega_f\)? A energia cinética de rotação se conserva?</p>`,
opcoes:[R`\(\omega_f=\frac23\omega_0\); não se conserva.`,R`\(\omega_f=\frac23\omega_0\); se conserva.`,R`\(\omega_f=\frac32\omega_0\); não se conserva.`,R`\(\omega_f=\frac32\omega_0\); se conserva.`,R`\(\omega_f=\sqrt{2/3}\,\omega_0\); se conserva.`],
dica:R`É uma “colisão rotacional” perfeitamente inelástica.`,
solucao:R`<p>\(I\omega_0=\frac32I\omega_f\Rightarrow\omega_f=\frac23\omega_0\). \(K_f/K_i=\frac{\frac32\cdot\frac49}{1}=\frac23\): um terço da energia vira calor no atrito.</p>`});

P({id:'2023b-q9', ano:2023, prova:'EUF 2º/2023 · Q9 [mc5a]', topicos:['mov3d'],
enunciado:R`<p>Uma partícula move-se sob \(\mathbf F=a\left(4xy\,\hat x+3y^2\,\hat y\right)\), com \(a>0\). O trabalho ao longo da parábola \(y=x^2/c\), da origem até \(\mathbf r=c(\hat x+\hat y)\), é:</p>`,
opcoes:[R`\(2ac^3\)`,R`\(ac^3\)`,R`\(3ac^3\)`,R`\(4ac^3\)`,R`\(5ac^3\)`],
dica:R`\(\partial_yF_x\ne\partial_xF_y\): a força não é conservativa, calcule no caminho. Use \(x\) como parâmetro.`,
solucao:R`<p>\(\int F_xdx=\int_0^c4a\frac{x^3}{c}dx=ac^3\) e \(\int F_ydy=\int_0^c3ay^2dy=ac^3\). Total \(2ac^3\).</p>`});

P({id:'2023b-q11', ano:2023, prova:'EUF 2º/2023 · Q11 [mc6a]', topicos:['newton','mov1d'],
enunciado:R`<p>Uma partícula \(m\) move-se em 1D e sua velocidade em função da posição é \(v(x)=k/x\) (\(k>0\)). A força \(F(x)\) é:</p>`,
opcoes:[R`\(F=-mk^2/x^3\)`,R`\(F=-2mk^2/x^3\)`,R`\(F=-3mk^2/x^3\)`,R`\(F=-mk^2/(2x^3)\)`,R`\(F=-mk^2/(3x^3)\)`],
dica:R`\(a=v\,dv/dx\) (regra da cadeia, como nas suas notas).`,
solucao:R`<p>\(a=\frac kx\cdot\left(-\frac{k}{x^2}\right)=-\frac{k^2}{x^3}\Rightarrow F=-\dfrac{mk^2}{x^3}\).</p>`});

P({id:'2023b-q13', ano:2023, prova:'EUF 2º/2023 · Q13 [mc7a]', topicos:['lagr','ninerc'], fig:'fig/y23b_q13.png',
enunciado:R`<p>Uma barra sem massa gira em torno de O com \(\vec\omega=\omega\hat z\) constante. Uma partícula \(m\) desliza sem atrito ao longo dela, sob \(\mathbf F=a\hat x\) (\(a>0\)). A lagrangiana em termos de \(r\) é:</p>`,
opcoes:[R`\(L=\frac12m(\dot r^2+r^2\omega^2)+ar\cos\omega t\)`,R`\(L=\frac12m(\dot r^2+r^2\omega^2)-ar\sin\omega t\)`,R`\(L=\frac12m(\dot r^2+r^2\omega^2)-ar\cos\omega t\)`,R`\(L=\frac12m\dot r^2+ar\sin\omega t\)`,R`\(L=\frac12m\dot r^2+ar\cos\omega t\)`],
dica:R`\(V=-ax=-ar\cos\theta\), com \(\theta=\omega t\).`,
solucao:R`<p>\(T=\frac12m(\dot r^2+r^2\omega^2)\) e \(V=-ar\cos\omega t\), então \(L=T-V\).</p>`});

P({id:'2023b-q15', ano:2023, prova:'EUF 2º/2023 · Q15 [mc8a]', topicos:['central'],
enunciado:R`<p>Uma partícula \(m\) está sob a força central com \(U(r)=\frac13kr^3\) (\(k>0\)).</p><p>I. \(E\) e \(\vec L\) são constantes do movimento.<br>II. Pode haver órbita circular estável, com \(L^2=mka^5\) (raio \(a\)).<br>III. Para certos \(E\), há órbitas não limitadas.</p>`,
opcoes:[R`Apenas as afirmações I e II estão corretas.`,R`Apenas a afirmação I está correta.`,R`Apenas a afirmação II está correta.`,R`Apenas as afirmações I e III estão corretas.`,R`As afirmações I, II e III estão corretas.`],
dica:R`Circular: \(L^2/(ma^3)=U'(a)\). E \(U\to\infty\) quando \(r\to\infty\).`,
solucao:R`<p>I é verdadeira. II: \(\frac{L^2}{ma^3}=ka^2\Rightarrow L^2=mka^5\), com \(V_{ef}''>0\). Verdadeira. III é falsa: o potencial cresce sem limite, então toda órbita é limitada.</p>`});

// 2024 — 2º semestre
P({id:'2024b-q1', ano:2024, prova:'EUF 2º/2024 · Q1 [mcPT1a]', topicos:['grav','central'], fig:'fig/y24b_q1.png',
enunciado:R`<p>Na configuração de Lagrange, três corpos de massa \(M\) giram com \(\omega\) num círculo de raio \(R\) em torno do centro de um triângulo equilátero de lado \(a=\sqrt3R\). Qual deve ser \(\omega\)?</p>`,
opcoes:[R`\(\omega=\sqrt{\dfrac{3GM}{a^3}}\)`,R`\(\omega=\sqrt{\dfrac{3GM}{2a^3}}\)`,R`\(\omega=\sqrt{\dfrac{\sqrt3GM}{a^3}}\)`,R`\(\omega=\sqrt{\dfrac{2GM}{3a^3}}\)`,R`\(\omega=\sqrt{\dfrac{GM}{3a^3}}\)`],
dica:R`Resultante sobre um corpo: \(2\frac{GM^2}{a^2}\cos30^\circ\), apontando para o centro.`,
solucao:R`<p>\(\sqrt3\dfrac{GM^2}{a^2}=M\omega^2\dfrac{a}{\sqrt3}\Rightarrow\omega^2=\dfrac{3GM}{a^3}\).</p>`});

P({id:'2024b-q3', ano:2024, prova:'EUF 2º/2024 · Q3 [mcPT2a]', topicos:['newton'], fig:'fig/y24b_q3.png',
enunciado:R`<p>Uma balança de braços iguais (\(L=30\) cm) tem de um lado uma barra homogênea (\(\rho=5{,}0\) g/cm³, \(M=5{,}0\) kg) parcialmente mergulhada num balde de água, e do outro a mercadoria. Ajustando a altura do balde até equilibrar e medindo o comprimento emerso \(h\), obtém-se a massa da mercadoria. Qual é o intervalo de massas mensuráveis?</p>`,
opcoes:[R`Entre 4,0 e 5,0 kg.`,R`Entre 0,0 e 5,0 kg.`,R`Entre 0,0 e 15 kg.`,R`Entre 1,0 e 5,0 kg.`,R`Não há dados suficientes; precisa-se do comprimento da barra.`],
dica:R`A mercadoria equilibra o peso da barra menos o empuxo. Qual é o empuxo máximo?`,
solucao:R`<p>Volume da barra: \(5000/5=1000\) cm³. Empuxo máximo (barra toda submersa): 1,0 kg. A mercadoria vai de \(5{,}0-1{,}0=4{,}0\) kg (barra submersa) a 5,0 kg (barra fora d’água). O comprimento da barra não importa.</p>`});

P({id:'2024b-q5', ano:2024, prova:'EUF 2º/2024 · Q5 [mcPT3a]', topicos:['newton','sist'], fig:'fig/y24b_q5.png',
enunciado:R`<p>Uma pessoa sobre uma balança começa a levantar uma barra com pesos em \(t_0\) e termina de erguê-la em \(t_1\). Qual gráfico melhor representa a força normal entre a pessoa e a balança?</p>`,
opcoes:[{img:'fig/y24b_q5A.png'},{img:'fig/y24b_q5B.png'},{img:'fig/y24b_q5C.png'},{img:'fig/y24b_q5D.png'},{img:'fig/y24b_q5E.png'}],
dica:R`\(N-(M_{tot})g=\) taxa de variação do momento do sistema = \(m_{barra}a_{barra}\).`,
solucao:R`<p>No início, a barra é acelerada para cima, e a normal sobe (pico) em \(t_0\). No fim, é desacelerada, e a normal cai (vale) em \(t_1\). No meio, com velocidade constante, \(N\) volta ao peso total. É o gráfico com pico em \(t_0\) e vale em \(t_1\). As áreas do pico e do vale são iguais, porque o momento inicial e o final são nulos.</p>`});

P({id:'2024b-q7', ano:2024, prova:'EUF 2º/2024 · Q7 [mcPT4a]', topicos:['osc'], fig:'fig/y24b_q7.png',
enunciado:R`<p>Um pêndulo (barra sem massa de comprimento \(L\), massa \(M\) na ponta) está ligado a uma mola horizontal \(k\) a uma distância \(L/3\) do eixo; a mola está relaxada em \(\theta=0\). Para pequenas oscilações:</p><p>I. A energia potencial gravitacional se conserva.<br>II. \(E=\frac12ML^2\left[\dot\theta^2+\left(\frac gL+\frac{k}{9M}\right)\theta^2\right]\).<br>III. \(\omega=\sqrt{\frac gL+\frac{k}{9M}}\).</p>`,
opcoes:[R`Apenas as afirmações II e III são verdadeiras.`,R`Nenhuma das outras alternativas.`,R`Apenas a afirmação I é verdadeira.`,R`Apenas as afirmações I e III são verdadeiras.`,R`A afirmação I é verdadeira e a afirmação II é falsa.`],
dica:R`Mola: deformação \(\frac L3\theta\), energia \(\frac12k\frac{L^2}{9}\theta^2\).`,
solucao:R`<p>\(E=\frac12ML^2\dot\theta^2+\frac12MgL\theta^2+\frac12k\frac{L^2}{9}\theta^2\), então II e III são verdadeiras. I é falsa: a energia potencial gravitacional varia durante a oscilação; só a energia total se conserva.</p>`});

P({id:'2024b-q9', ano:2024, prova:'EUF 2º/2024 · Q9 [mcPT5a]', topicos:['sist'], fig:'fig/y24b_q9.png',
enunciado:R`<p>Um pêndulo de massa \(m_1=2M\), solto do repouso de uma altura \(H\), colide no ponto mais baixo com \(m_2=M\) em repouso, e os dois seguem juntos. A altura máxima \(h\) após a colisão é:</p>`,
opcoes:[R`\(h=\frac49H\)`,R`\(h=\frac23H\)`,R`\(h=\frac13H\)`,R`\(h=\frac19H\)`,R`\(h=\frac89H\)`],
dica:R`Energia → momento (colisão inelástica) → energia.`,
solucao:R`<p>\(V=\frac{2M}{3M}\sqrt{2gH}\Rightarrow h=\frac49H\).</p>`});

P({id:'2024b-q11', ano:2024, prova:'EUF 2º/2024 · Q11 [mcPT6a]', topicos:['rigido','sist'], fig:'fig/y24b_q11.png',
enunciado:R`<p>Um projétil \(m\) com velocidade \(v_0\) atinge tangencialmente um disco (\(M\gg m\), raio \(R\)) em repouso numa superfície sem atrito e fica alojado na periferia. Com o CM aproximadamente no centro do disco e \(I\approx MR^2/2\), os valores de \(V_f\) e \(\omega\) são:</p>`,
opcoes:[R`\(V_f=\frac mMv_0\) e \(\omega=2\frac mM\frac{v_0}{R}\)`,R`\(V_f=\frac mMv_0\) e \(\omega=\frac12\frac mM\frac{v_0}{R}\)`,R`\(V_f=\frac mMv_0\) e \(\omega=\frac mM\frac{v_0}{R}\)`,R`\(V_f=\frac12\frac mMv_0\) e \(\omega=\frac mM\frac{v_0}{R}\)`,R`\(V_f=\sqrt{\frac mM}v_0\) e \(\omega=\frac mM\frac{v_0}{R}\)`],
dica:R`Momento linear para \(V_f\); momento angular em relação ao centro (braço \(R\)) para \(\omega\).`,
solucao:R`<p>\(mv_0=MV_f\) e \(mv_0R=\frac12MR^2\omega\Rightarrow\omega=\frac{2mv_0}{MR}\).</p>`});

P({id:'2024b-q15', ano:2024, prova:'EUF 2º/2024 · Q15 [mcPT8a]', topicos:['lagr'], fig:'fig/y24b_q15.png',
enunciado:R`<p>Um bloco \(M\) desliza sem atrito num trilho (coordenada \(x\)); nele está presa uma haste sem massa de comprimento \(L\) com uma partícula \(m\) na ponta, que oscila no plano fazendo ângulo \(\theta\) com a vertical. O momento canônico \(p_x=\partial\mathcal L/\partial\dot x\) é:</p>`,
opcoes:[R`\(p_x=(m+M)\dot x+mL\dot\theta\cos\theta\)`,R`\(p_x=(m+M)\dot x\)`,R`\(p_x=(m+M)\dot x+mL\dot\theta\sin\theta\)`,R`\(p_x=(m+M)\dot x-mL\dot\theta\sin\theta\)`,R`\(p_x=(m+M)\dot x-mL\dot\theta\cos\theta\)`],
dica:R`A partícula está em \(x+L\sin\theta\).`,
solucao:R`<p>\(T=\frac12(M+m)\dot x^2+mL\dot x\dot\theta\cos\theta+\frac12mL^2\dot\theta^2\Rightarrow p_x=(m+M)\dot x+mL\dot\theta\cos\theta\). É o momento linear horizontal total. Mesmo sistema da EUF 1º/2020, Q2.</p>`});

// 2025 — 2º semestre
P({id:'2025b-q1', ano:2025, prova:'EUF 2º/2025 · Q1 [mcPT1a]', topicos:['newton'],
enunciado:R`<p>Num plano inclinado de \(\pi/4\), um bloco desce com \(v_1\) e outro sobe com \(v_2\), ambos com \(\mu=2\). Eles deslizam exatamente a mesma distância antes de parar. A relação entre as velocidades iniciais é:</p>`,
opcoes:[R`\(\dfrac{v_1}{v_2}=\sqrt{\dfrac13}\)`,R`Nenhuma das outras alternativas.`,R`\(\dfrac{v_1}{v_2}=\dfrac13\)`,R`\(\dfrac{v_1}{v_2}=\sqrt{\dfrac12}\)`,R`\(\dfrac{v_1}{v_2}=\dfrac12\)`],
dica:R`Desacelerações: descendo, \(g(\mu\cos-\sin)\); subindo, \(g(\mu\cos+\sin)\). Mesma distância: \(v^2/a\) igual.`,
solucao:R`<p>\(a_1=\frac{g}{\sqrt2}(2-1)\) e \(a_2=\frac{g}{\sqrt2}(2+1)\). Então \(\frac{v_1}{v_2}=\sqrt{\frac{a_1}{a_2}}=\sqrt{\frac13}\).</p>`});

P({id:'2025b-q3', ano:2025, prova:'EUF 2º/2025 · Q3 [mcPT2a]', topicos:['grav','ninerc'],
enunciado:R`<p>Uma partícula repousa no equador de um astro esférico de densidade uniforme \(\rho\) e raio \(R\). O astro passa a girar com \(\omega\) aumentando muito lentamente. Sendo \(\mu>0\) o atrito, qual é a máxima velocidade angular que a partícula pode ter?</p>`,
opcoes:[R`\(\omega_{max}=\sqrt{\dfrac{4\pi\rho G}{3}}\)`,R`\(\omega_{max}=\omega\), pois a partícula acompanha o astro.`,R`\(\omega_{max}=\sqrt{\dfrac{4\pi\mu\rho G}{3}}\)`,R`\(\omega_{max}=\sqrt{\dfrac{4\pi\sqrt{1+\mu^2}\rho G}{3}}\)`,R`\(\omega_{max}=\sqrt{\dfrac{4\pi\sqrt{|1-\mu^2|}\rho G}{3}}\)`],
dica:R`No equador, a centrípeta é \(mg-N\). O atrito é tangencial e não ajuda radialmente.`,
solucao:R`<p>A partícula se solta quando \(N=0\): \(\omega^2R=g=\frac43\pi G\rho R\Rightarrow\omega_{max}=\sqrt{4\pi\rho G/3}\). Não depende de \(\mu\) nem de \(R\).</p>`});

P({id:'2025b-q7', ano:2025, prova:'EUF 2º/2025 · Q7 [mcPT4a]', topicos:['rigido'],
enunciado:R`<p>Uma nebulosa brilha à custa da energia de rotação de sua estrela de nêutrons (esfera homogênea de raio \(R\) e massa \(M\)). O período de rotação é \(T\) e aumenta à taxa constante \(\gamma=dT/dt\). A potência emitida é:</p>`,
opcoes:[R`\(\dfrac{8\pi^2\gamma MR^2}{5T^3}\)`,R`\(\dfrac{8\pi^2\gamma MR^2}{3T^3}\)`,R`\(\dfrac12\dfrac MT\left(\dfrac{2\pi R}{T}\gamma\right)^2\)`,R`\(\dfrac12\dfrac MT\gamma\left(\dfrac{2\pi R}{T}\right)^2\)`,R`\(\dfrac12\dfrac MT\left(\dfrac RT\gamma\right)^2\)`],
dica:R`\(K=\frac12\cdot\frac25MR^2\left(\frac{2\pi}{T}\right)^2\); derive em \(t\).`,
solucao:R`<p>\(K=\dfrac{4\pi^2MR^2}{5T^2}\Rightarrow P=-\dfrac{dK}{dt}=\dfrac{8\pi^2MR^2}{5T^3}\gamma\). (É o pulsar do Caranguejo.)</p>`});

P({id:'2025b-q9', ano:2025, prova:'EUF 2º/2025 · Q9 [mcPT5a]', topicos:['mov3d'], fig:'fig/y25b_q9.png',
enunciado:R`<p>Um bloco é solto do repouso em A (altura \(H\)), desliza sem atrito e é lançado horizontalmente em B (altura \(h\)), atingindo o solo em C a uma distância horizontal \(d\) de B. Então \(d\) vale:</p>`,
opcoes:[R`\(d=2\sqrt{(H-h)h}\)`,R`\(d=2\sqrt{Hh}\)`,R`\(d=\sqrt{2(H-h)h}\)`,R`\(d=\sqrt{2Hh}\)`,R`\(d=\sqrt{(H+h)h}\)`],
dica:R`\(v_B=\sqrt{2g(H-h)}\) e tempo de queda \(\sqrt{2h/g}\).`,
solucao:R`<p>\(d=\sqrt{2g(H-h)}\sqrt{2h/g}=2\sqrt{(H-h)h}\). O máximo é em \(h=H/2\).</p>`});

P({id:'2025b-q11', ano:2025, prova:'EUF 2º/2025 · Q11 [mcPT6a]', topicos:['mov1d'], fig:'fig/y25b_q11.png',
enunciado:R`<p>Uma partícula move-se em \(Ox\) sob uma força conservativa cuja energia potencial está no gráfico. Qual opção representa melhor o vetor força nos pontos \(x=a\) e \(x=b\)?</p>`,
opcoes:[{img:'fig/y25b_q11A.png'},{img:'fig/y25b_q11B.png'},{img:'fig/y25b_q11C.png'},{img:'fig/y25b_q11D.png'},{img:'fig/y25b_q11E.png'}],
dica:R`\(F=-dU/dx\): a força é ao longo de \(x\), aponta “ladeira abaixo” e o módulo é a inclinação.`,
solucao:R`<p>Em \(a\), \(U\) cai abruptamente, então \(F\) é grande e aponta para \(+x\). Em \(b\), \(U\) sobe suavemente, então \(F\) é pequena e aponta para \(-x\). As setas inclinadas ou verticais estão erradas: em 1D, a força está sempre ao longo de \(x\).</p>`});

P({id:'2025b-q13', ano:2025, prova:'EUF 2º/2025 · Q13 [mcPT7a]', topicos:['rigido','osc'], fig:'fig/y25b_q13.png',
enunciado:R`<p>Uma mola \(k\) liga uma parede a um ponto de um disco (raio \(R\), massa \(M\), \(I=MR^2/2\)) a uma distância \(b\) do centro. O disco gira livremente em torno do seu eixo fixo; no equilíbrio a mola está relaxada e o ponto de contato está na vertical. Para pequenas oscilações, \(\omega_0\) é:</p>`,
opcoes:[R`\(\sqrt{\dfrac{2kb^2}{MR^2}}\)`,R`\(\sqrt{\dfrac{kb^2}{MR^2}}\)`,R`\(\sqrt{\dfrac{2kb}{MR}}\)`,R`\(\sqrt{\dfrac{kb^2}{2MR^2}}\)`,R`\(\sqrt{\dfrac{k}{M}}\)`],
dica:R`Rotação \(\varphi\): a mola se deforma \(b\varphi\) e o torque é \(kb^2\varphi\).`,
solucao:R`<p>\(I\ddot\varphi=-kb^2\varphi\Rightarrow\omega_0^2=\dfrac{kb^2}{MR^2/2}\).</p>`});

P({id:'2025b-q15', ano:2025, prova:'EUF 2º/2025 · Q15 [mcPT8a]', topicos:['lagr'],
enunciado:R`<p>Uma partícula \(m\) em 2D tem lagrangiana \(\mathcal L=\frac m2(\dot x^2+\dot y^2)+x\,\dot y\,b(t)\). A hamiltoniana é:</p>`,
opcoes:[R`\(\mathcal H=\dfrac{p_x^2}{2m}+\dfrac{\left[p_y-b(t)x\right]^2}{2m}\)`,R`\(\mathcal H=\dfrac{p_x^2}{2m}+\dfrac{\left[p_y+b(t)x\right]^2}{2m}\)`,R`\(\mathcal H=\dfrac{\left[p_x+b(t)y\right]^2}{2m}+\dfrac{p_y^2}{2m}\)`,R`\(\mathcal H=\dfrac{\left[p_x-b(t)y\right]^2}{2m}+\dfrac{p_y^2}{2m}\)`,R`\(\mathcal H=\dfrac{p_x^2}{2m}+\dfrac{p_y^2}{2m}\)`],
dica:R`\(p_y=m\dot y+xb\). É a estrutura de partícula em campo magnético (\(\mathbf p-q\mathbf A\)).`,
solucao:R`<p>\(p_x=m\dot x\), \(p_y=m\dot y+bx\). \(\mathcal H=p_x\dot x+p_y\dot y-\mathcal L=\frac m2(\dot x^2+\dot y^2)=\dfrac{p_x^2}{2m}+\dfrac{(p_y-bx)^2}{2m}\).</p>`});
})();
