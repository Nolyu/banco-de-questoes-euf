window.BANK = window.BANK || [];
(function(){
const P = q => window.BANK.push(Object.assign({area:'mec', tipo:'mc'}, q));
const R = String.raw;
// Em "opcoes", a PRIMEIRA alternativa é a correta; a página embaralha a ordem.

// ===================== 2020 (prova online, ingresso 2º/2020) =====================
P({id:'2020-q1', ano:2020, prova:'EUF 2º/2020 (online) · Q1', topicos:['mov1d','osc'],
enunciado:R`<p>Uma partícula de massa \(m\) move-se em uma dimensão sob \(U(x)=\frac12ax^4-bx^2\), com \(a,b>0\). Um dos pontos de equilíbrio estável \(x_0\) e a frequência \(\omega\) de pequenas oscilações em torno dele são:</p>`,
opcoes:[R`\(x_0=+\sqrt{b/a}\) e \(\omega=\sqrt{4b/m}\)`,R`\(x_0=-\sqrt{b/a}\) e \(\omega=\sqrt{2b/m}\)`,R`\(x_0=0\) e \(\omega=\sqrt{2b/m}\)`,R`\(x_0=+\sqrt{2b/a}\) e \(\omega=\sqrt{2b/m}\)`,R`\(x_0=-\sqrt{2b/a}\) e \(\omega=\sqrt{4b/m}\)`],
dica:R`\(U'=0\) e depois \(\omega^2=U''(x_0)/m\).`,
solucao:R`<p>\(U'=2ax^3-2bx=0\Rightarrow x=0,\pm\sqrt{b/a}\). \(U''=6ax^2-2b\): em \(\pm\sqrt{b/a}\), \(U''=4b>0\) (estável); em 0, \(U''=-2b\) (instável). Logo \(\omega=\sqrt{4b/m}\).</p>`});

P({id:'2020-q2', ano:2020, prova:'EUF 2º/2020 (online) · Q2', topicos:['newton'],
enunciado:R`<p>Uma partícula de massa \(m\) move-se em uma dimensão sob uma força constante \(F=mb\,\hat x\) e uma força dissipativa de módulo \(F_R=mkv\) (\(b,k>0\)). Ela parte do repouso na origem. A velocidade \(v(t)\) é:</p>`,
opcoes:[R`\(v=\dfrac bk\left(1-e^{-kt}\right)\)`,R`\(v=\dfrac bk\left(1-e^{kt}\right)\)`,R`\(v=\dfrac{2b}{k}\left(1-e^{-kt}\right)\)`,R`\(v=\dfrac{2b}{k}\left(1-e^{kt}\right)\)`,R`\(v=\dfrac{b}{2k}\left(1-e^{-kt}\right)\)`],
dica:R`\(\dot v=b-kv\). A velocidade terminal é \(b/k\).`,
solucao:R`<p>\(\dot v=b-kv\Rightarrow v=\frac bk+Ce^{-kt}\). Com \(v(0)=0\): \(v=\frac bk(1-e^{-kt})\).</p>`});

P({id:'2020-q3', ano:2020, prova:'EUF 2º/2020 (online) · Q3', topicos:['lagr'],
enunciado:R`<p>Uma partícula de massa \(m\) restrita à superfície de uma esfera de raio \(R\) tem lagrangiana \(L=\frac12mR^2\dot\theta^2+\frac12mR^2\dot\varphi^2\sin^2\theta-aR\cos\theta\). As equações de movimento são:</p>`,
opcoes:[R`\(mR\dot\varphi^2\sin\theta\cos\theta+a\sin\theta-mR\ddot\theta=0\) e \(2\dot\theta\dot\varphi\cos\theta+\ddot\varphi\sin\theta=0\)`,R`\(mR\dot\varphi^2\sin\theta\cos\theta+a\sin\theta+mR\ddot\theta=0\) e \(2\dot\theta\dot\varphi\cos\theta+\ddot\varphi\sin\theta=0\)`,R`\(mR\dot\varphi^2\sin\theta\cos\theta+a\sin\theta-mR\ddot\theta=0\) e \(\ddot\varphi\sin^2\theta=0\)`,R`\(mR\dot\varphi^2\sin\theta\cos\theta+a\sin\theta+mR\ddot\theta=0\) e \(\ddot\varphi\sin^2\theta=0\)`,R`\(mR\dot\varphi^2\sin\theta\cos\theta+a\sin\theta-mR\ddot\theta=0\) e \(\dot\theta\dot\varphi\cos\theta+\ddot\varphi\sin\theta=0\)`],
dica:R`Na equação de \(\varphi\), derive \(\sin^2\theta\,\dot\varphi\) inteiro, porque \(\theta\) depende de \(t\).`,
solucao:R`<p>\(\theta\): \(mR^2\ddot\theta-mR^2\dot\varphi^2\sin\theta\cos\theta-aR\sin\theta=0\); dividindo por \(-R\), obtém-se a 1ª equação. \(\varphi\): \(\frac{d}{dt}(\sin^2\theta\,\dot\varphi)=2\sin\theta\cos\theta\,\dot\theta\dot\varphi+\sin^2\theta\,\ddot\varphi=0\); dividindo por \(\sin\theta\), obtém-se a 2ª.</p>`});

P({id:'2020-q4', ano:2020, prova:'EUF 2º/2020 (online) · Q4', topicos:['lagr','mov3d'],
enunciado:R`<p>Uma partícula de massa \(m\) move-se no plano \(xy\) sob o potencial \(U_1=axy\) e a força \(\mathbf F_2=br^{-4}\hat r\). Em polares, a lagrangiana é:</p>`,
opcoes:[R`\(L=\frac12m\dot r^2+\frac12mr^2\dot\theta^2-ar^2\sin\theta\cos\theta-\dfrac{b}{3r^3}\)`,R`\(L=\frac12m\dot r^2+\frac12mr^2\dot\theta^2-ar^2\sin\theta\cos\theta+\dfrac{b}{3r^3}\)`,R`\(L=\frac12m\dot r^2-ar^2\sin\theta\cos\theta+\dfrac{b}{3r^3}\)`,R`\(L=\frac12m\dot r^2+\frac12mr^2\dot\theta^2-ar^2\sin\theta\cos\theta-\dfrac{b}{r^4}\)`,R`\(L=\frac12m\dot r^2-ar^2\sin\theta\cos\theta-\dfrac{b}{r^4}\)`],
dica:R`Ache \(U_2\) com \(-dU_2/dr=b/r^4\).`,
solucao:R`<p>\(U_2=\dfrac{b}{3r^3}\) (de fato, \(-dU_2/dr=b/r^4\)). \(U_1=ar^2\sin\theta\cos\theta\). \(L=T-U_1-U_2\).</p>`});

P({id:'2020-q5', ano:2020, prova:'EUF 2º/2020 (online) · Q5', topicos:['central'],
enunciado:R`<p>Uma partícula de massa \(m\) está sob o potencial central \(U=\frac14kr^4\) (\(k>0\)) numa órbita circular estável de raio \(R\). A frequência angular \(\omega_c\) e a energia total \(E_T\) são:</p>`,
opcoes:[R`\(\omega_c=\sqrt{kR^2/m}\) e \(E_T=\frac34kR^4\)`,R`\(\omega_c=\sqrt{kR^2/(2m)}\) e \(E_T=\frac14kR^4\)`,R`\(\omega_c=\sqrt{2kR^2/m}\) e \(E_T=\frac12kR^4\)`,R`\(\omega_c=\sqrt{kR^2/m}\) e \(E_T=\frac32kR^4\)`,R`\(\omega_c=\sqrt{kR^2/(4m)}\) e \(E_T=kR^4\)`],
dica:R`Força centrípeta \(m\omega^2R=kR^3\).`,
solucao:R`<p>\(m\omega_c^2R=kR^3\Rightarrow\omega_c=\sqrt{kR^2/m}\). \(E_T=\frac12m\omega_c^2R^2+\frac14kR^4=\frac12kR^4+\frac14kR^4=\frac34kR^4\).</p>`});

P({id:'2020-q6', ano:2020, prova:'EUF 2º/2020 (online) · Q6', topicos:['newton','mov3d'], fig:'fig/e20_q6.png',
enunciado:R`<p>Um carro faz uma curva de raio \(R\) numa estrada inclinada de \(\theta\) (figura: plano transversal ao movimento). Sem atrito, o módulo da velocidade é:</p>`,
opcoes:[R`\(\sqrt{gR\tan\theta}\)`,R`\(\sqrt{gR\sin\theta}\)`,R`\(\sqrt{gR\cos\theta}\)`,R`\(\sqrt{gR/\tan\theta}\)`,R`\(\sqrt{2gR\tan\theta}\)`],
dica:R`Componente vertical da normal equilibra o peso; a horizontal é a centrípeta.`,
solucao:R`<p>\(N\cos\theta=mg\) e \(N\sin\theta=mv^2/R\Rightarrow v=\sqrt{gR\tan\theta}\).</p>`});

P({id:'2020-q7', ano:2020, prova:'EUF 2º/2020 (online) · Q7', topicos:['newton','mov3d'],
enunciado:R`<p>Uma massa \(M\) executa movimento circular de raio \(R\) numa superfície horizontal, presa ao eixo vertical por um fio horizontal. A velocidade inicial é \(v_0\) e o atrito cinético é \(\mu\). O número de voltas até parar é:</p>`,
opcoes:[R`\(n=v_0^2/(4\pi\mu gR)\)`,R`\(n=Rv_0^2/(\mu g)\)`,R`\(n=v_0^2/(4\pi\mu g)\)`,R`\(n=v_0^2(2\mu g)\)`,R`\(n=v_0^2/(4\pi gR)\)`],
dica:R`O atrito tem módulo constante \(\mu Mg\) e atua ao longo de \(2\pi Rn\).`,
solucao:R`<p>\(\mu Mg\,(2\pi Rn)=\frac12Mv_0^2\Rightarrow n=\dfrac{v_0^2}{4\pi\mu gR}\). Também dá para eliminar por análise dimensional: \(n\) precisa ser adimensional.</p>`});

P({id:'2020-q8', ano:2020, prova:'EUF 2º/2020 (online) · Q8', topicos:['newton'], fig:'fig/e20_q8.png',
enunciado:R`<p>Uma caixa de massa \(m\) está sobre outra de massa \(2m\). Uma força \(F\) aplicada na caixa \(2m\) faz as duas moverem-se juntas. O atrito estático entre as caixas é \(\mu\) e não há atrito com o chão. O módulo da força sobre a massa menor é:</p>`,
opcoes:[R`\(F/3\)`,R`\(F-3mg\mu\)`,R`\(F/3-mg\mu\)`,R`\(mg\mu\)`,R`\((F-mg\mu)/3\)`],
dica:R`Atrito estático não é necessariamente \(\mu N\).`,
solucao:R`<p>\(a=F/3m\). Sobre a caixa menor, o atrito estático vale \(ma=F/3\). Esse é o valor necessário, não o máximo \(\mu mg\). A questão considera a força horizontal; a normal \(mg\) equilibra o peso.</p>`});

P({id:'2020-q9', ano:2020, prova:'EUF 2º/2020 (online) · Q9', topicos:['lagr'],
enunciado:R`<p>Com \(L=\frac12mR^2\dot\theta^2+\frac12mR^2\sin^2\theta\,\dot\varphi^2-aR\cos\theta\) (partícula na esfera), uma das equações de movimento e um dos momentos conjugados são:</p>`,
opcoes:[R`\(2\dot\theta\dot\varphi\cos\theta+\ddot\varphi\sin\theta=0\) e \(p_\theta=mR^2\dot\theta\)`,R`\(mR\dot\varphi^2\sin\theta\cos\theta+a\sin\theta+mR\ddot\theta=0\) e \(p_\varphi=mR^2\dot\varphi\sin^2\theta\)`,R`\(\ddot\varphi\sin^2\theta=0\) e \(p_\theta=mR^2\dot\theta\)`,R`\(\ddot\varphi\sin^2\theta=0\) e \(p_\varphi=mR^2\dot\varphi\sin^2\theta\)`,R`\(mR\dot\varphi^2\sin\theta\cos\theta-a\sin\theta-mR\ddot\theta=0\) e \(p_\theta=mR^2\dot\theta\)`],
dica:R`É a mesma lagrangiana da Q3. Confira os sinais e o fator 2.`,
solucao:R`<p>\(p_\theta=\partial L/\partial\dot\theta=mR^2\dot\theta\) e \(p_\varphi=mR^2\sin^2\theta\,\dot\varphi\). A equação de \(\varphi\) é \(2\dot\theta\dot\varphi\cos\theta+\ddot\varphi\sin\theta=0\). Em (b), o sinal de \(mR\ddot\theta\) está errado; em (e), o de \(a\sin\theta\).</p>`});

P({id:'2020-q10', ano:2020, prova:'EUF 2º/2020 (online) · Q10', topicos:['rigido'],
enunciado:R`<p>Uma bola de bilhar (massa \(M\), raio \(R\), \(I=\frac25MR^2\)) recebe uma tacada horizontal na altura do CM e sai com \(v_0\), sem rotação. Os coeficientes de atrito são \(\mu_c\) e \(\mu_e\). O tempo até a bola passar a rolar sem deslizar é:</p>`,
opcoes:[R`\(2v_0/(7\mu_cg)\)`,R`\(v_0/(\mu_cg)\)`,R`\(2v_0/(5\mu_cg)\)`,R`\(2v_0/(7\mu_eg)\)`,R`\(2v_0/(5\mu_eg)\)`],
dica:R`Enquanto desliza, o atrito é cinético. Use \(v=v_0-\mu_cgt\) e \(\omega R=\frac52\mu_cgt\).`,
solucao:R`<p>\(v=v_0-\mu_cgt\) e \(\alpha=\dfrac{\mu_cMgR}{\frac25MR^2}=\dfrac{5\mu_cg}{2R}\). Rolamento: \(v_0-\mu_cgt=\frac52\mu_cgt\Rightarrow t=\dfrac{2v_0}{7\mu_cg}\).</p>`});

P({id:'2020-q11', ano:2020, prova:'EUF 2º/2020 (online) · Q11', topicos:['newton'],
enunciado:R`<p>Com base nas leis de Newton, é correto afirmar que:</p>`,
opcoes:[R`o fato de um corpo estar sendo acelerado é consequência de uma força (ou conjunto de forças) de resultante não nula agindo sobre ele.`,R`as forças peso e normal agindo sobre um mesmo objeto formam um par ação-reação.`,R`um objeto em queda livre tem sempre aceleração \(g\), exceto no ponto de altura máxima, onde a velocidade é nula.`,R`a resultante das forças precisa ser nula para o corpo mudar seu estado de movimento.`,R`é possível um corpo manter movimento retilíneo uniforme com resultante não nula.`],
dica:R`Um par ação-reação atua em corpos diferentes.`,
solucao:R`<p>É a 2ª lei. Peso e normal atuam no mesmo corpo, logo não são par ação-reação. No topo da trajetória a aceleração continua \(g\). Mudar o estado de movimento exige resultante não nula, e MRU exige resultante nula.</p>`});

P({id:'2020-q12', ano:2020, prova:'EUF 2º/2020 (online) · Q12', topicos:['newton'], fig:'fig/e20_q12.png',
enunciado:R`<p>Uma partícula move-se ao longo de \(x\); em \(t=0\), \(x=0\). O gráfico mostra \(v(t)\). A velocidade média entre \(t=1\) s e \(t=4\) s é:</p>`,
opcoes:[R`\(-2\) m/s`,R`\(2\) m/s`,R`\(-6\) m/s`,R`\(6\) m/s`,R`\(0\) m/s`],
dica:R`Deslocamento = área sob \(v(t)\), com sinal.`,
solucao:R`<p>De 1 a 2 s: \(+3\) m (triângulo). De 2 a 3 s: \(-3\) m. De 3 a 4 s: \(-6\) m. Total \(\Delta x=-6\) m em 3 s, então \(\bar v=-2\) m/s.</p>`});

// ===================== 2021 (online) =====================
P({id:'2021-mc1', ano:2021, prova:'EUF 2021 (online) · MC1A', topicos:['rigido'],
enunciado:R`<p>Uma esfera maciça (raio \(R\), massa \(M\), \(I=\frac25MR^2\)) girando com \(\omega_0\) em torno de um eixo horizontal pelo centro cai verticalmente e colide de forma completamente inelástica com uma mesa (deformações desprezíveis). Atrito cinético \(\mu\). Após um tempo \(t\), ela passa a rolar sem deslizar. O valor de \(t\) é:</p>`,
opcoes:[R`\(t=\dfrac{2\omega_0R}{7\mu g}\)`,R`\(t=\dfrac{2\omega_0R}{\mu g}\)`,R`\(t=\dfrac{2\omega_0R}{5\mu g}\)`,R`\(t=\dfrac{\omega_0R}{\mu g}\)`,R`\(t=\dfrac{\omega_0R}{5\mu g}\)`],
dica:R`Depois do choque, \(v=0\) e \(\omega=\omega_0\). O atrito acelera a translação e freia a rotação.`,
solucao:R`<p>\(v=\mu gt\) e \(\omega=\omega_0-\dfrac{5\mu g}{2R}t\). Igualando \(v=\omega R\): \(\mu gt=\omega_0R-\frac52\mu gt\Rightarrow t=\dfrac{2\omega_0R}{7\mu g}\).</p>`});

P({id:'2021-mc3', ano:2021, prova:'EUF 2021 (online) · MC3A', topicos:['newton'], fig:'fig/y21_mc3.png',
enunciado:R`<p>Três blocos \(M\), \(m_1\) e \(m_2\) deslizam para a esquerda com velocidade constante (figura). Não há atrito entre blocos e superfícies, as polias são ideais e os fios inextensíveis. Com \(m_1=m_2=m\), qual relação é correta?</p>`,
opcoes:[R`\(Mg\sin\alpha=(1+\sin\beta)mg\)`,R`\(Mg\sin\alpha=(2+\sin\beta)mg\)`,R`\(Mg\sin\alpha=(1+2\sin\beta)mg\)`,R`\(Mg\cos\alpha=(2+\cos\beta)mg\)`,R`\(Mg\cos\alpha=(1+\cos\beta)mg\)`],
dica:R`Velocidade constante significa resultante nula em cada bloco.`,
solucao:R`<p>\(m_2\): \(T_2=mg\). \(m_1\) no plano \(\beta\): \(T_1=T_2+mg\sin\beta\). \(M\) no plano \(\alpha\): \(Mg\sin\alpha=T_1=(1+\sin\beta)mg\).</p>`});

P({id:'2021-mc4', ano:2021, prova:'EUF 2021 (online) · MC4A', topicos:['newton'], fig:'fig/y21_mc4.png',
enunciado:R`<p>Um bloco \(m\) suspenso está ligado a um bloco \(M\) pelo arranjo de polias da figura (há uma polia móvel presa a \(M\)). O fio não desliza nas polias e não há atrito entre \(M\) e a superfície. Partindo do repouso, \(m\) acelera para baixo. A aceleração de \(m\) é:</p>`,
opcoes:[R`\(a_m=mg\left(m+\frac M4\right)^{-1}\)`,R`\(a_m=mg\left(m+\frac M2\right)^{-1}\)`,R`\(a_m=mg\left(2m+\frac M2\right)^{-1}\)`,R`\(a_m=mg\)`,R`\(a_m=mg\,(m+2M)^{-1}\)`],
dica:R`Vínculo: se \(M\) anda \(x\), o fio dobrado faz \(m\) descer \(2x\). Sobre \(M\) atuam duas tensões.`,
solucao:R`<p>\(a_m=2a_M\). Bloco \(M\): \(2T=Ma_M=Ma_m/2\Rightarrow T=Ma_m/4\). Bloco \(m\): \(mg-T=ma_m\Rightarrow a_m=\dfrac{mg}{m+M/4}\).</p>`});

P({id:'2021-mc5', ano:2021, prova:'EUF 2021 (online) · MC5A', topicos:['mov3d'],
enunciado:R`<p>Uma partícula move-se no plano sob \(\mathbf F=(ax^2+by^2)\hat x+(axy)\hat y\), \(a,b>0\). O trabalho de \(\mathbf F\) ao longo da reta da origem até \(\mathbf r=c(\hat x+\hat y)\) é:</p>`,
opcoes:[R`\(W=\left(\frac23a+\frac13b\right)c^3\)`,R`\(W=\left(\frac13a+\frac13b\right)c^3\)`,R`\(W=\left(a+\frac13b\right)c^3\)`,R`\(W=\left(\frac43a+\frac13b\right)c^3\)`,R`\(W=\left(\frac53a+\frac13b\right)c^3\)`],
dica:R`A força não é conservativa, então calcule no caminho dado: \(x=y=s\).`,
solucao:R`<p>Com \(x=y=s\), \(dx=dy=ds\): \(dW=[(a+b)s^2+as^2]ds=(2a+b)s^2ds\Rightarrow W=\frac{(2a+b)c^3}{3}\).</p>`});

P({id:'2021-mc6', ano:2021, prova:'EUF 2021 (online) · MC6A', topicos:['mov3d'],
enunciado:R`<p>Uma força tem componentes cilíndricas \(F_\rho=a\rho^2\cos\varphi\), \(F_\varphi=b\rho^2\sin\varphi\), \(F_z=2az^2\). O valor de \(b\) para que \(\mathbf F\) seja conservativa é:</p>`,
opcoes:[R`\(b=-a/3\)`,R`\(b=-2a/3\)`,R`\(b=-4a/3\)`,R`\(b=-a\)`,R`\(b=-2a\)`],
dica:R`\((\nabla\times\mathbf F)_z=\frac1\rho\left[\partial_\rho(\rho F_\varphi)-\partial_\varphi F_\rho\right]\).`,
solucao:R`<p>\((\nabla\times\mathbf F)_z=\frac1\rho\left[3b\rho^2\sin\varphi+a\rho^2\sin\varphi\right]=0\Rightarrow b=-a/3\). As outras componentes já são nulas.</p>`});

P({id:'2021-mc7', ano:2021, prova:'EUF 2021 (online) · MC7A', topicos:['newton'],
enunciado:R`<p>Uma partícula de massa \(m\) move-se em uma dimensão sob \(F(t)=mAe^{-\gamma t}\) (\(A,\gamma>0\)), partindo da origem com \(v_0=2A/\gamma\). A posição \(x(t)\) é:</p>`,
opcoes:[R`\(x=\dfrac{A}{\gamma^2}\left(3\gamma t-1+e^{-\gamma t}\right)\)`,R`\(x=\dfrac{2A}{5\gamma^2}\left(4\gamma t+1-e^{-\gamma t}\right)\)`,R`\(x=\dfrac{2A}{3\gamma^2}\left(\gamma t+2-2e^{-\gamma t}\right)\)`,R`\(x=\dfrac{2A}{3\gamma^2}\left(5\gamma t-2+2e^{-\gamma t}\right)\)`,R`\(x=\dfrac{A}{2\gamma^2}\left(\gamma t+3-3e^{-\gamma t}\right)\)`],
dica:R`É o caso 1 das suas notas (\(F=F(t)\)): integre duas vezes.`,
solucao:R`<p>\(v=v_0+\frac A\gamma(1-e^{-\gamma t})=\frac{3A}{\gamma}-\frac A\gamma e^{-\gamma t}\). Integrando com \(x(0)=0\): \(x=\frac{3A}{\gamma}t+\frac{A}{\gamma^2}(e^{-\gamma t}-1)\). Teste rápido: \(x(0)=0\) e \(\dot x(0)=2A/\gamma\).</p>`});

P({id:'2021-mc8', ano:2021, prova:'EUF 2021 (online) · MC8A', topicos:['lagr'],
enunciado:R`<p>Uma conta de massa \(m\) desliza sem atrito num arame em hélice \(\rho=R\), \(z=a\varphi\) (cilíndricas), sob o potencial \(V=bx\) (\(a,b>0\)). A lagrangiana e a equação de movimento são:</p>`,
opcoes:[R`\(L=\frac12m(R^2+a^2)\dot\varphi^2-bR\cos\varphi\) e \(m(R^2+a^2)\ddot\varphi-bR\sin\varphi=0\)`,R`\(L=\frac12m(R^2+a^2)\dot\varphi^2+bR\cos\varphi\) e \(m(R^2+a^2)\ddot\varphi+bR\sin\varphi=0\)`,R`\(L=\frac12m(R^2+a^2)\dot\varphi^2-bR\sin\varphi\) e \(m(R^2+a^2)\ddot\varphi+bR\cos\varphi=0\)`,R`\(L=\frac12m(R^2+a^2)\dot\varphi^2+bR\sin\varphi\) e \(m(R^2+a^2)\ddot\varphi-bR\cos\varphi=0\)`,R`\(L=\frac12m(R^2+a^2)\dot\varphi^2-bR\cos\varphi\) e \(m(R^2+a^2)\ddot\varphi+bR\cos\varphi=0\)`],
dica:R`\(x=R\cos\varphi\) e \(v^2=R^2\dot\varphi^2+a^2\dot\varphi^2\).`,
solucao:R`<p>\(T=\frac12m(R^2+a^2)\dot\varphi^2\) e \(V=bR\cos\varphi\). Como \(\partial L/\partial\varphi=bR\sin\varphi\), a equação é \(m(R^2+a^2)\ddot\varphi-bR\sin\varphi=0\).</p>`});

// ===================== 2022 (online) =====================
P({id:'2022-mc1', ano:2022, prova:'EUF 2022 (online) · MC1A', topicos:['grav'],
enunciado:R`<p>A força gravitacional da Terra (esfera uniforme de raio \(R\)) sobre uma partícula a uma distância \(r\) do centro é \(F(r)\). Quanto vale \(F(R)/F(2R)\)?</p>`,
opcoes:[R`4`,R`1`,R`2`,R`8`,R`16`],
dica:R`Fora da esfera, \(F\propto1/r^2\).`,
solucao:R`<p>\(F\propto1/r^2\) para \(r\ge R\), então a razão é \((2R/R)^2=4\).</p>`});

P({id:'2022-mc2', ano:2022, prova:'EUF 2022 (online) · MC2A', topicos:['grav'],
enunciado:R`<p>Com a Terra modelada como esfera uniforme de raio \(R\), um buraco fino permite colocar uma partícula a \(R/2\) do centro. Quanto vale \(F(R)/F(R/2)\)?</p>`,
opcoes:[R`2`,R`4`,R`8`,R`1/2`,R`1/4`],
dica:R`Teorema das cascas: dentro, só a massa interna atua, e \(M(r)\propto r^3\).`,
solucao:R`<p>Dentro, \(F=GmM(r)/r^2\propto r^3/r^2=r\). Logo \(F(R)/F(R/2)=2\).</p>`});

P({id:'2022-mc3', ano:2022, prova:'EUF 2022 (online) · MC3A', topicos:['rigido'],
enunciado:R`<p>Um cilindro com \(I=4\) kg·m² gira a 80 rad/s em torno de um eixo fixo. Um torque constante ao longo do eixo, aplicado por 10 s, reduz a velocidade para 40 rad/s. O módulo do torque é:</p>`,
opcoes:[R`16 N·m`,R`8 N·m`,R`1920 N·m`,R`192 N·m`,R`32 N·m`],
dica:R`\(\tau\,\Delta t=I\,\Delta\omega\).`,
solucao:R`<p>\(\tau=I\Delta\omega/\Delta t=4\cdot40/10=16\) N·m.</p>`});

P({id:'2022-mc4', ano:2022, prova:'EUF 2022 (online) · MC4A', topicos:['lagr'],
enunciado:R`<p>Num sistema conservativo sem vínculos com lagrangiana \(L\), sejam \(q_n\) uma coordenada generalizada e \(p_n\) seu momento conjugado. Se \(\partial L/\partial q_n=0\), qual alternativa está sempre correta?</p>`,
opcoes:[R`\(p_n\) é uma constante`,R`\(p_n\) é uma coordenada ignorável`,R`\(p_n\) não pode ser definido`,R`\(q_n=0\)`,R`\(p_n=\dot q_n\)`],
dica:R`Escreva a equação de Euler-Lagrange para \(q_n\).`,
solucao:R`<p>\(\dot p_n=\partial L/\partial q_n=0\). A coordenada \(q_n\) é que é cíclica (ignorável); o momento conjugado é constante.</p>`});

P({id:'2022-mc5', ano:2022, prova:'EUF 2022 (online) · MC5A', topicos:['newton'], fig:'fig/y22_mc5.png',
enunciado:R`<p>Uma esfera de massa \(m\) e volume \(V\), totalmente mergulhada num líquido, está presa por uma haste de massa desprezível a um braço de uma balança de braços iguais. O volume de uma massa \(m\) do líquido é \(5V/3\). A massa \(M\) no outro braço para o equilíbrio é:</p>`,
opcoes:[R`\(\frac25m\)`,R`\(m\)`,R`\(2m\)`,R`\(\frac35m\)`,R`\(\frac53m\)`],
dica:R`Densidade do líquido: \(\rho_L=\dfrac{m}{5V/3}\). O empuxo é \(\rho_LVg\).`,
solucao:R`<p>\(\rho_L=\frac{3m}{5V}\Rightarrow E=\frac35mg\). A haste sustenta \(mg-E=\frac25mg\), então \(M=\frac25m\).</p>`});

P({id:'2022-mc6', ano:2022, prova:'EUF 2022 (online) · MC6A', topicos:['newton'],
enunciado:R`<p>Um barco de massa \(m\) sobe a correnteza partindo com \(v_0\). A água o freia com \(F=-\alpha(v+v_C)\), onde \(-v_C\) é a velocidade da correnteza. O tempo até a velocidade instantânea ser nula é:</p>`,
opcoes:[R`\(t=\dfrac m\alpha\ln\dfrac{v_0+v_C}{v_C}\)`,R`\(t=\dfrac m\alpha\ln\dfrac{v_0}{v_C}\)`,R`\(t=\dfrac m\alpha\)`,R`\(t=\dfrac m\alpha\ln\dfrac{2v_0}{v_C}\)`,R`\(t=\dfrac m\alpha\ln\dfrac{v_C}{v_0}\)`],
dica:R`Caso 2 das notas (\(F=F(v)\)): \(dt=m\,dv/F(v)\).`,
solucao:R`<p>\(t=m\displaystyle\int_{v_0}^{0}\frac{dv}{-\alpha(v+v_C)}=\frac m\alpha\ln\frac{v_0+v_C}{v_C}\).</p>`});

P({id:'2022-mc7', ano:2022, prova:'EUF 2022 (online) · MC7A', topicos:['lagr'], fig:'fig/y22_mc7.png',
enunciado:R`<p>Uma conta de massa \(m\) desliza numa hélice sob a gravidade (\(\vec g\) ao longo de \(-x\), figura), com trajetória \(\vec r(\phi)=R\cos\phi\,\vec e_x+R\sin\phi\,\vec e_y+a\phi\,\vec e_z\). A lagrangiana é:</p>`,
opcoes:[R`\(\mathcal L=\frac12m(R^2+a^2)\dot\phi^2-mgR\cos\phi\)`,R`\(\mathcal L=\frac12m(2R^2+a^2)\dot\phi^2-mgR\sin\phi\)`,R`\(\mathcal L=\frac12ma^2\dot\phi^2-mgR\sin\phi\)`,R`\(\mathcal L=\frac12m(2R^2+a^2)\dot\phi^2-mgR\cos\phi\)`,R`\(\mathcal L=\frac12m(R^2+2a^2)\dot\phi^2-mgR\cos\phi\)`],
dica:R`\(|\dot{\vec r}|^2=(R^2+a^2)\dot\phi^2\); a altura é \(x=R\cos\phi\).`,
solucao:R`<p>\(T=\frac12m(R^2+a^2)\dot\phi^2\) e \(V=mgx=mgR\cos\phi\).</p>`});

P({id:'2022-mc8', ano:2022, prova:'EUF 2022 (online) · MC8A', topicos:['mov1d'],
enunciado:R`<p>Além do limite elástico, a força de uma mola é \(F(x)=-kx+\beta x^3\), com \(k=10\) N/m e \(\beta=100\) N/m³. O trabalho dessa força quando a mola é alongada de 0,2 m é:</p>`,
opcoes:[R`\(-0{,}16\) J`,R`\(-0{,}11\) J`,R`\(-0{,}20\) J`,R`\(-0{,}45\) J`,R`\(-0{,}56\) J`],
dica:R`\(W=\int_0^{0{,}2}F\,dx\).`,
solucao:R`<p>\(W=-\frac k2x^2+\frac\beta4x^4=-5(0{,}04)+25(0{,}0016)=-0{,}20+0{,}04=-0{,}16\) J.</p>`});

// ===================== 2023 =====================
P({id:'2023-q1', ano:2023, prova:'EUF 2023 · Q1 [mc1a]', topicos:['lagr','osc'],
enunciado:R`<p>Considere a lagrangiana \(L=\left(\frac12m\dot q^2-\frac{m\omega^2q^2}{2}\right)e^{2\gamma t}\). A equação de movimento é:</p>`,
opcoes:[R`\(\ddot q+2\gamma\dot q+\omega^2q=0\)`,R`\(\ddot q+\omega^2q=0\)`,R`\(\ddot q+\gamma\dot q+\omega^2q=0\)`,R`\(\ddot q+\gamma\dot q+2\omega^2q=0\)`,R`\(\ddot q+\gamma\dot q+4\omega^2q=0\)`],
dica:R`Derive \(m\dot q\,e^{2\gamma t}\) pela regra do produto.`,
solucao:R`<p>\(\frac{d}{dt}(m\dot qe^{2\gamma t})+m\omega^2qe^{2\gamma t}=0\Rightarrow\ddot q+2\gamma\dot q+\omega^2q=0\): é o oscilador amortecido obtido de uma lagrangiana (Caldirola-Kanai).</p>`});

P({id:'2023-q3', ano:2023, prova:'EUF 2023 · Q3 [mc2a]', topicos:['newton'],
enunciado:R`<p>Na gota de Millikan, com campo \(E\) constante a gota sobe e \(F_r=qE-mg-bv\) (empuxo desprezado). Partindo do repouso em \(t=0\), a velocidade é:</p>`,
opcoes:[R`\(\dfrac{qE-mg}{b}\left(1-e^{-\frac bmt}\right)\)`,R`\(\dfrac{qE-mg}{2b}\left(1-e^{-\frac{2b}{m}t}\right)\)`,R`\(\dfrac{qE-mg}{3b}\left(1-e^{-\frac{3b}{m}t}\right)\)`,R`\(\dfrac{qE-mg}{m}t\)`,R`\(\dfrac{qE}{b}\)`],
dica:R`Velocidade terminal = \((qE-mg)/b\); a constante de tempo é \(m/b\).`,
solucao:R`<p>\(m\dot v=(qE-mg)-bv\Rightarrow v=\frac{qE-mg}{b}(1-e^{-bt/m})\).</p>`});

P({id:'2023-q5', ano:2023, prova:'EUF 2023 · Q5 [mc3a]', topicos:['sist'],
enunciado:R`<p>Corpos de massas \(4m\) e \(m\), presos por um barbante que mantém uma mola comprimida entre eles, estão em repouso numa mesa sem atrito. O barbante é cortado e o corpo \(4m\) adquire velocidade \(v\). O corpo \(m\) colide frontalmente com uma parede, de forma totalmente inelástica, com força de interação triangular: \(F=\frac t\tau F_{max}\) (\(0\le t\le\tau\)), \(F=(2-\frac t\tau)F_{max}\) (\(\tau\lt t\le2\tau\)) e zero depois. \(F_{max}\) é:</p>`,
opcoes:[R`\(4\dfrac{mv}{\tau}\)`,R`\(3\dfrac{mv}{\tau}\)`,R`\(\dfrac{mv}{\tau}\)`,R`\(0\)`,R`\(1\)`],
dica:R`Momento total nulo: \(m\) sai com \(4v\). Impulso = área do triângulo.`,
solucao:R`<p>\(4mv=mu\Rightarrow u=4v\). Inelástico: o corpo para, então o impulso é \(4mv\). Área do triângulo: \(\frac12(2\tau)F_{max}=\tau F_{max}\Rightarrow F_{max}=4mv/\tau\).</p>`});

P({id:'2023-q7', ano:2023, prova:'EUF 2023 · Q7 [mc4a]', topicos:['mov3d'],
enunciado:R`<p>Considere a força \(\vec F=-20bx^3y^2\,\vec i-10bx^4y\,\vec j\). É correto afirmar que:</p>`,
opcoes:[R`\(\nabla\times\vec F=0\); portanto \(\vec F\) é conservativa, com \(U=5bx^4y^2+K\).`,R`\(\nabla\times\vec F=0\), mas a força não é conservativa.`,R`não é conservativa, pois se anula em \((0,0)\).`,R`\(\nabla\times\vec F\ne0\), logo não pode ser conservativa.`,R`\(\nabla\times\vec F=0\); portanto é conservativa, com \(U=10bx^4y^2+bx^3y^2+K\).`],
dica:R`Compare \(\partial F_y/\partial x\) com \(\partial F_x/\partial y\) e confira \(-\nabla U\).`,
solucao:R`<p>\(\partial_xF_y=-40bx^3y=\partial_yF_x\), então o rotacional é nulo (e o domínio é todo o plano). \(U=5bx^4y^2\Rightarrow-\partial_xU=-20bx^3y^2\) ✓ e \(-\partial_yU=-10bx^4y\) ✓.</p>`});

P({id:'2023-q9', ano:2023, prova:'EUF 2023 · Q9 [mc5a]', topicos:['mov3d','newton'], fig:'fig/y23_q9.png',
enunciado:R`<p>Um brinquedo tem uma mola \(k\), um carrinho \(m\) e uma pista com um laço circular de raio \(R\), sem atrito. Comprimindo a mola de \(\Delta x\) e soltando, o carrinho segue para o laço. A compressão mínima para dar a volta completa é:</p>`,
opcoes:[R`\(\Delta x=\sqrt{5\dfrac{mRg}{k}}\)`,R`\(\Delta x=\sqrt{\dfrac{mRg}{k}}\)`,R`\(\Delta x=\sqrt{2\dfrac{mRg}{k}}\)`,R`\(\Delta x=\sqrt{\dfrac52\dfrac{mRg}{k}}\)`,R`\(\Delta x=\sqrt{\dfrac12\dfrac{mRg}{k}}\)`],
dica:R`No topo, a condição mínima é normal nula: \(v_B^2=gR\).`,
solucao:R`<p>\(\frac12k\Delta x^2=\frac12mv_B^2+2mgR\ge\frac52mgR\Rightarrow\Delta x=\sqrt{5mgR/k}\).</p>`});

P({id:'2023-q11', ano:2023, prova:'EUF 2023 · Q11 [mc6a]', topicos:['rigido','sist'], fig:'fig/y23_q11.png',
enunciado:R`<p>Uma barra homogênea (massa \(M\), comprimento \(l\)) articulada numa extremidade O gira num plano vertical. Solta do repouso na horizontal, ao passar pela vertical sua ponta colide com uma partícula \(m\) em repouso numa superfície lisa e a barra fica em repouso. A velocidade da partícula após a colisão é:</p>`,
opcoes:[R`\(v=\dfrac Mm\sqrt{\dfrac{gl}{3}}\)`,R`\(v=\dfrac Mm\sqrt{\dfrac{gl}{6}}\)`,R`\(v=\dfrac Mm\sqrt{\dfrac{gl}{9}}\)`,R`\(v=\dfrac Mm\sqrt{\dfrac{4gl}{3}}\)`,R`\(v=\dfrac Mm\sqrt{\dfrac{4gl}{6}}\)`],
dica:R`Energia na queda; na colisão conserva-se o momento angular em relação a O, e não o momento linear (o pino exerce força).`,
solucao:R`<p>\(Mg\frac l2=\frac12\cdot\frac{Ml^2}{3}\omega^2\Rightarrow\omega=\sqrt{3g/l}\). Na colisão: \(\frac{Ml^2}{3}\omega=mvl\Rightarrow v=\frac Mm\frac l3\sqrt{\frac{3g}{l}}=\frac Mm\sqrt{\frac{gl}{3}}\).</p>`});

P({id:'2023-q13', ano:2023, prova:'EUF 2023 · Q13 [mc7a]', topicos:['newton'],
enunciado:R`<p>Assinale as assertivas verdadeiras:</p><p>(I) Se a resultante é nula, não há forças atuando.<br>(II) Durante um intervalo com resultante nula, a partícula está em repouso ou em MRU.<br>(III) No MCU a resultante é nula, pois o módulo da velocidade é constante.<br>(IV) Normal e peso formam um par ação-reação.<br>(V) As forças de um par ação-reação atuam sempre sobre partículas diferentes.</p>`,
opcoes:[R`II e V`,R`II e III`,R`I, II e IV`,R`III e V`,R`I, III e V`],
dica:R`No MCU a direção da velocidade muda.`,
solucao:R`<p>I é falsa (forças podem se cancelar). II é verdadeira (1ª lei). III é falsa: há resultante centrípeta. IV é falsa: as duas atuam no mesmo corpo. V é verdadeira.</p>`});

P({id:'2023-q15', ano:2023, prova:'EUF 2023 · Q15 [mc8a]', topicos:['acopl'], fig:'fig/y23_q15.png',
enunciado:R`<p>Quatro massas acopladas por molas ideais (\(k_1\ldots k_5\)), sobre um plano sem atrito, com as extremidades presas a paredes fixas. Com \(x_i\) a posição de \(m_i\) em relação à parede esquerda, a equação de movimento de \(m_2\) é:</p>`,
opcoes:[R`\(\ddot x_2+\dfrac{k_2}{m_2}(x_2-x_1)+\dfrac{k_3}{m_2}(x_2-x_3)=0\)`,R`\(\ddot x_2+\dfrac{k_2}{m_2}(x_2+x_1)+\dfrac{k_3}{m_2}(x_2+x_3)=0\)`,R`\(\ddot x_2+\dfrac{k_3}{m_2}(x_2-x_1)+\dfrac{k_2}{m_2}(x_2-x_3)=0\)`,R`\(\ddot x_2-\dfrac{k_2}{m_2}(x_2-x_1)-\dfrac{k_3}{m_2}(x_2-x_3)=0\)`,R`\(\ddot x_2+\dfrac{k_2+k_3}{m_2}x_2=0\)`],
dica:R`\(m_2\) só “sente” as molas \(k_2\) (ligada a \(m_1\)) e \(k_3\) (ligada a \(m_3\)).`,
solucao:R`<p>\(m_2\ddot x_2=-k_2(x_2-x_1)-k_3(x_2-x_3)\). (Os comprimentos naturais só deslocam a posição de equilíbrio; o gabarito os omite.)</p>`});

// ===================== 2024 =====================
P({id:'2024-q1', ano:2024, prova:'EUF 2024 · Q1 [mcPT1a]', topicos:['newton'], fig:'fig/y24_q1.png',
enunciado:R`<p>Cones semelhantes (de dimensões distintas) feitos do mesmo material são soltos do repouso e caem sob gravidade e resistência do ar. As velocidades terminais são iguais. Quais afirmações são <b>necessárias</b> para isso?</p><p>I. A força de arraste é proporcional ao quadrado da velocidade.<br>II. A força de arraste é proporcional à área do cone.<br>III. A força de arraste é proporcional ao raio do cone.</p>`,
opcoes:[R`Apenas II`,R`I e III`,R`I e II`,R`Apenas I`,R`Apenas III`],
dica:R`Cones finos (cascas): a massa é proporcional à área.`,
solucao:R`<p>Para cascas do mesmo material, \(mg\propto A\). Se \(F_{arr}=A\,f(v)\), a condição terminal \(A\,f(v_t)=\sigma Ag\) não depende do tamanho: II é necessária. A forma de \(f(v)\) não importa (I não é necessária), e com arraste \(\propto\) raio as velocidades terminais dependeriam do tamanho (III não serve).</p>`});

P({id:'2024-q3', ano:2024, prova:'EUF 2024 · Q3 [mcPT2a]', topicos:['newton'], fig:'fig/y24_q3.png',
enunciado:R`<p>Um bloco de densidade \(\rho\) está num plano inclinado de ângulo \(\alpha\) ligeiramente menor que o ângulo máximo antes de deslizar. Tudo está num recipiente com líquido de densidade \(\rho'=\rho/2\), cujo nível sobe lentamente. Desconsidere o arraste e assuma \(\mu\) inalterado. Quais afirmações são verdadeiras?</p><p>I. Assim que o líquido atinge o bloco, a normal começa a diminuir.<br>II. O bloco desliza assim que o líquido o atinge.<br>III. O bloco desliza só após o líquido submergir 1/2 do volume.</p>`,
opcoes:[R`Apenas I`,R`Apenas II`,R`Apenas III`,R`I e II`,R`I e III`],
dica:R`O empuxo é vertical: funciona como um “peso efetivo” menor. O que acontece com a razão entre as componentes tangencial e normal?`,
solucao:R`<p>Com fração submersa \(f\), o peso efetivo é \((1-f\rho'/\rho)mg\). Normal e componente ao longo do plano diminuem na mesma proporção, então a condição \(\tan\alpha\lt \mu\) não muda e o bloco nunca desliza. Só I é verdadeira. (No original, duas alternativas aparecem como “Apenas II”, um erro de digitação.)</p>`});

P({id:'2024-q5', ano:2024, prova:'EUF 2024 · Q5 [mcPT3a]', topicos:['rigido'],
enunciado:R`<p>Uma bola de boliche (casca esférica, \(I=\frac23MR^2\)) é lançada com \(v_0\) sem girar numa pista horizontal com atrito cinético \(\mu>0\). A velocidade final após o deslizamento cessar é:</p>`,
opcoes:[R`\(\frac35v_0\)`,R`\(0\)`,R`\(\sqrt{\frac35}\,v_0\)`,R`\(\dfrac{1}{1+\mu}v_0\)`,R`\(\dfrac{1}{1+\frac23\mu}v_0\)`],
dica:R`O momento angular em relação ao ponto de contato (na pista) se conserva.`,
solucao:R`<p>\(L_{contato}\): \(Mv_0R=MvR+I\frac vR\Rightarrow v=\dfrac{v_0}{1+I/MR^2}=\dfrac{v_0}{5/3}=\frac35v_0\). O resultado não depende de \(\mu\).</p>`});

P({id:'2024-q7', ano:2024, prova:'EUF 2024 · Q7 [mcPT4a]', topicos:['osc'], fig:'fig/y24_q7.png',
enunciado:R`<p>A figura mostra a <b>velocidade</b> de uma partícula em oscilação harmônica. Com \(x(t)=A\cos(\omega t+\delta)\), a frequência angular e a amplitude são:</p>`,
opcoes:[R`\(\omega=\frac\pi4\) rad/s; \(A=\frac{16}{\pi}\) cm`,R`\(\omega=\frac\pi2\) rad/s; \(A=\frac{8}{\pi}\) cm`,R`\(\omega=\frac\pi8\) rad/s; \(A=\frac{32}{\pi}\) cm`,R`\(\omega=4\pi\) rad/s; \(A=\frac1\pi\) cm`,R`\(\omega=2\pi\) rad/s; \(A=\frac2\pi\) cm`],
dica:R`Leia o período entre dois máximos e use \(v_{max}=\omega A\).`,
solucao:R`<p>Máximos em \(t\approx7\) s e \(15\) s: \(T=8\) s, \(\omega=\pi/4\) rad/s. \(v_{max}=4\) cm/s, então \(A=v_{max}/\omega=16/\pi\) cm.</p>`});

P({id:'2024-q9', ano:2024, prova:'EUF 2024 · Q9 [mcPT5a]', topicos:['sist'], fig:'fig/y24_q9.png',
enunciado:R`<p>Num trilho de ar, o bloco A (massa \(m\), velocidade \(v_0\)) colide com o bloco B (massa \(m\), em repouso), que tem uma mola \(k\) de massa desprezível. Sem perdas, a compressão máxima é:</p>`,
opcoes:[R`\(\Delta x_{max}=\sqrt{\dfrac{mv_0^2}{2k}}\)`,R`\(\Delta x_{max}=\sqrt{\dfrac{mv_0^2}{k}}\)`,R`\(\Delta x_{max}=\sqrt{\dfrac{mv_0^2}{4k}}\)`,R`\(\Delta x_{max}=\sqrt{\dfrac{2mv_0^2}{k}}\)`,R`\(\Delta x_{max}=\sqrt{\dfrac{3mv_0^2}{2k}}\)`],
dica:R`Na compressão máxima, os dois têm a mesma velocidade (\(v_0/2\)).`,
solucao:R`<p>\(\frac12k\Delta x^2=\frac12mv_0^2-\frac12(2m)\frac{v_0^2}{4}=\frac14mv_0^2\Rightarrow\Delta x=\sqrt{mv_0^2/2k}\). É a energia “no referencial do CM”: \(\frac12\mu v_0^2\) com \(\mu=m/2\).</p>`});

P({id:'2024-q11', ano:2024, prova:'EUF 2024 · Q11 [mcPT6a]', topicos:['osc'], fig:'fig/y24_q11.png',
enunciado:R`<p>Uma partícula (massa \(m\), carga \(q\)) está presa a um plano infinito por uma mola isolante (comprimento \(L\), constante \(k\)). O plano tem carga superficial \(\sigma\) de <b>mesmo sinal</b> que \(q\), com \(\vec E=\frac12(\sigma/\epsilon_0)\hat n\). Sem gravidade, determine (i) a deformação \(\Delta L\) no equilíbrio (positiva se a mola está estendida) e (ii) \(\omega\):</p>`,
opcoes:[R`(i) \(\Delta L=\dfrac{|q\sigma|}{2k\epsilon_0}\); (ii) \(\omega=\sqrt{k/m}\)`,R`(i) \(\Delta L=-\dfrac{|q\sigma|}{2k\epsilon_0}\); (ii) \(\omega=\sqrt{k/m}\)`,R`(i) \(\Delta L=\dfrac{|q\sigma|}{2k\epsilon_0}\); (ii) \(\omega=\sqrt{\dfrac km+\dfrac{|q\sigma|}{2k\epsilon_0}}\)`,R`(i) \(\Delta L=-\dfrac{|q\sigma|}{2k\epsilon_0}\); (ii) \(\omega=\sqrt{\dfrac km+\dfrac{|q\sigma|}{2k\epsilon_0}}\)`,R`(i) \(\Delta L=\dfrac{|q\sigma|}{k\epsilon_0}\); (ii) \(\omega=\sqrt{\dfrac km-\dfrac{|q\sigma|}{k\epsilon_0}}\)`],
dica:R`O campo do plano é uniforme: uma força constante só desloca o equilíbrio.`,
solucao:R`<p>A repulsão \(|q\sigma|/2\epsilon_0\) estica a mola: \(k\Delta L=|q\sigma|/2\epsilon_0\). Por ser uma força constante, não altera a frequência: \(\omega=\sqrt{k/m}\) (como a gravidade numa mola vertical).</p>`});

P({id:'2024-q13', ano:2024, prova:'EUF 2024 · Q13 [mcPT7a]', topicos:['osc','newton'], fig:'fig/y24_q13.png',
enunciado:R`<p>Um bloco \(M\) em repouso num plano inclinado sem atrito (\(\theta\)) é sustentado por uma corda de massa \(m\ll M\) e comprimento \(L\), presa nas duas extremidades. A menor frequência de oscilação de uma onda na corda é:</p>`,
opcoes:[R`\(f_1=\dfrac12\sqrt{\dfrac{Mg\sin\theta}{mL}}\)`,R`\(f_1=\sqrt{\dfrac{Mg\sin\theta}{mL}}\)`,R`\(f_1=2\sqrt{\dfrac{Mg\sin\theta}{mL}}\)`,R`\(f_1=\dfrac12\sqrt{\dfrac{Mg\cos\theta}{mL}}\)`,R`\(f_1=\sqrt{\dfrac{Mg\cos\theta}{mL}}\)`],
dica:R`\(T=Mg\sin\theta\), \(v=\sqrt{T/\mu}\) e, com as duas pontas fixas, \(\lambda_1=2L\).`,
solucao:R`<p>\(f_1=\dfrac{v}{2L}=\dfrac1{2L}\sqrt{\dfrac{Mg\sin\theta}{m/L}}=\dfrac12\sqrt{\dfrac{Mg\sin\theta}{mL}}\).</p>`});

P({id:'2024-q15', ano:2024, prova:'EUF 2024 · Q15 [mcPT8a]', topicos:['rigido'], fig:'fig/y24_q15.png',
enunciado:R`<p>Um disco homogêneo (\(M\), \(R\), \(I=MR^2/2\)) está preso ao teto por uma corda enrolada na borda (ioiô) e é solto do repouso. Sem perdas e sem deslizamento da corda, a velocidade angular em função da altura descida \(H\) é:</p>`,
opcoes:[R`\(\omega=\sqrt{\dfrac{4gH}{3R^2}}\)`,R`\(\omega=\sqrt{\dfrac{gH}{R^2}}\)`,R`\(\omega=\sqrt{\dfrac{gH}{2R^2}}\)`,R`\(\omega=\sqrt{\dfrac{2gH}{R^2}}\)`,R`\(\omega=\sqrt{\dfrac{3gH}{4R^2}}\)`],
dica:R`Vínculo \(v=\omega R\) e conservação de energia.`,
solucao:R`<p>\(MgH=\frac12M\omega^2R^2+\frac12\cdot\frac{MR^2}{2}\omega^2=\frac34MR^2\omega^2\Rightarrow\omega=\sqrt{4gH/3R^2}\).</p>`});

// ===================== 2025 =====================
P({id:'2025-q1', ano:2025, prova:'EUF 2025 · Q1 [mcPT1a]', topicos:['sist','newton'], fig:'fig/y25_q1.png',
enunciado:R`<p>Uma corda homogênea (densidade \(\lambda\), comprimento \(L\)) inicialmente em repouso numa superfície horizontal é puxada para cima a partir de \(t=0\) por \(F(t)\), subindo com \(v\) constante. Já foi puxado um comprimento \(l\lt L\) (despreze a altura do monte apoiado).</p><p>I. O aumento de energia potencial é \(\lambda Lgl/2\).<br>II. A força resultante é constante e igual a \(F_R=\lambda v^2\).<br>III. \(F\) cresce linearmente: \(F=\lambda lg=\lambda vgt\).</p>`,
opcoes:[R`Apenas a afirmação II é correta.`,R`Nenhuma das afirmações é correta.`,R`Apenas as afirmações I e II são corretas.`,R`Todas as afirmações são corretas.`,R`Apenas as afirmações I e III são corretas.`],
dica:R`Sistema de massa variável: \(F_R=dp/dt\) com \(p=\lambda lv\).`,
solucao:R`<p>I: o trecho erguido tem massa \(\lambda l\) com CM em \(l/2\), então \(\Delta U=\lambda gl^2/2\) (falsa). II: \(F_R=\frac{d}{dt}(\lambda lv)=\lambda v^2\) (verdadeira). III: \(F=\lambda lg+\lambda v^2\) (falsa).</p>`});

P({id:'2025-q3', ano:2025, prova:'EUF 2025 · Q3 [mcPT2a]', topicos:['newton','sist'], fig:'fig/y25_q3.png',
enunciado:R`<p>Uma partícula em 1D, inicialmente em repouso, está sob a força resultante \(F(t)\) do gráfico. Qual gráfico melhor representa seu momento \(P(t)\)?</p>`,
opcoes:[{img:'fig/y25_q3A.png'},{img:'fig/y25_q3B.png'},{img:'fig/y25_q3C.png'},{img:'fig/y25_q3D.png'},{img:'fig/y25_q3E.png'}],
dica:R`\(P(t)=\int_0^tF\,dt'\): \(P\) parte de 0, cresce enquanto \(F>0\) e tem máximo onde \(F\) cruza zero.`,
solucao:R`<p>\(P\) começa em 0 e cresce até o instante em que \(F\) troca de sinal (máximo). Depois cai. Como a área negativa de \(F\) é maior que a positiva, \(P\) termina <b>negativo</b>, com inclinação nula no fim (\(F=0\)). O gráfico com o mesmo formato de \(F\) é a armadilha; o que volta a zero exigiria áreas iguais.</p>`});

P({id:'2025-q5', ano:2025, prova:'EUF 2025 · Q5 [mcPT3a]', topicos:['lagr'],
enunciado:R`<p>A lagrangiana de um sistema é \(L(\dot q,q)=(a\dot q+bq)^2\), com \(a,b\) constantes. Qual é a hamiltoniana?</p>`,
opcoes:[R`\(H=\dfrac{p^2}{4a^2}-\dfrac{bpq}{a}\), com \(p=2a(a\dot q+bq)\)`,R`\(H=\dfrac{1}{2a^2}p^2+\frac12a^2b^4q^2\), com \(p=\sqrt a\,\dot q\)`,R`\(H=\dfrac{1}{2a^2}p^2-\frac12a^2b^4q^2\), com \(p=\sqrt a\,\dot q\)`,R`\(H=\dfrac{1}{2a^2}p^2+\frac12a^2b^4q^2\), com \(p=2a(a\dot q+bq)\)`,R`\(H=\dfrac{p^2}{4a^2}+\dfrac{bpq}{a}\), com \(p=2a(a\dot q+bq)\)`],
dica:R`Ache \(p\), isole \(\dot q\) e calcule \(H=p\dot q-L\).`,
solucao:R`<p>\(p=2a(a\dot q+bq)\Rightarrow a\dot q+bq=\frac{p}{2a}\) e \(\dot q=\frac{p}{2a^2}-\frac{bq}{a}\). \(H=p\dot q-\frac{p^2}{4a^2}=\frac{p^2}{4a^2}-\frac{bpq}{a}\).</p>`});

P({id:'2025-q7', ano:2025, prova:'EUF 2025 · Q7 [mcPT4a]', topicos:['acopl'],
enunciado:R`<p>As equações de movimento de duas partículas acopladas são</p>\[\frac{d^2}{dt^2}\begin{pmatrix}x_1\\x_2\end{pmatrix}=-\omega_0^2\begin{pmatrix}5/2&-3/2\\-2&2\end{pmatrix}\begin{pmatrix}x_1\\x_2\end{pmatrix}.\]<p>As frequências naturais são:</p>`,
opcoes:[R`\(\frac{1}{\sqrt2}\omega_0\) e \(2\omega_0\)`,R`\(0\) e \(\omega_0\)`,R`\(\frac32\omega_0\) e \(2\omega_0\)`,R`\(\frac1{\sqrt3}\omega_0\) e \(\sqrt{\frac23}\,\omega_0\)`,R`\(\frac23\omega_0\) e \(\frac12\omega_0\)`],
dica:R`\(\omega^2/\omega_0^2\) são os autovalores da matriz: traço e determinante bastam.`,
solucao:R`<p>Traço \(=9/2\) e determinante \(=5-3=2\): \(\lambda^2-\frac92\lambda+2=0\Rightarrow\lambda=4\) ou \(\frac12\). Logo \(\omega=2\omega_0\) e \(\omega_0/\sqrt2\).</p>`});

P({id:'2025-q9', ano:2025, prova:'EUF 2025 · Q9 [mcPT5a]', topicos:['osc','newton'], fig:'fig/y25_q9.png',
enunciado:R`<p>Um pêndulo invertido é formado por um balão de volume \(V\) cheio de hélio (densidade \(\rho_H\)), imerso no ar (densidade \(\rho_a\)) e preso a um fio de comprimento \(L\). Para pequenas oscilações e sem dissipação, a frequência angular é:</p>`,
opcoes:[R`\(\omega_0=\sqrt{(\rho_a/\rho_H-1)\,g/L}\)`,R`\(\omega_0=\sqrt{(\rho_a/\rho_H)\,g/L}\)`,R`\(\omega_0=\sqrt{g/L}\)`,R`\(\omega_0=\sqrt{(1-\rho_H/\rho_a)\,g/L}\)`,R`\(\omega_0=\sqrt{(\rho_a/\rho_H-\rho_H/\rho_a)\,g/L}\)`],
dica:R`A força líquida para cima \((\rho_a-\rho_H)Vg\) faz o papel do peso; a inércia é \(\rho_HV\).`,
solucao:R`<p>Gravidade efetiva para cima: \(g_{ef}=\dfrac{(\rho_a-\rho_H)Vg}{\rho_HV}=\left(\dfrac{\rho_a}{\rho_H}-1\right)g\). Então \(\omega_0=\sqrt{g_{ef}/L}\). (A massa de ar arrastada é desprezada.)</p>`});

P({id:'2025-q11', ano:2025, prova:'EUF 2025 · Q11 [mcPT6a]', topicos:['newton'], fig:'fig/y25_q11.png',
enunciado:R`<p>Três blocos \(M\), \(m_1\) e \(m_2\) estão dispostos como na figura, sem atrito em nenhuma superfície. Qual é o módulo \(F\) da força horizontal em \(M\) para que não haja movimento relativo entre os blocos?</p>`,
opcoes:[R`\(F=\dfrac{m_2}{m_1}(M+m_1+m_2)g\)`,R`\(F=(M+m_1+m_2)g\)`,R`\(F=\dfrac{m_1}{m_2}(M+m_1+m_2)g\)`,R`\(F=\dfrac{m_1}{M}(M+m_1+m_2)g\)`,R`\(F=\dfrac{m_2}{M}(M+m_1+m_2)g\)`],
dica:R`\(m_2\) não sobe nem desce: \(T=m_2g\). E \(T\) é a única força horizontal em \(m_1\).`,
solucao:R`<p>\(T=m_2g\) e \(T=m_1a\Rightarrow a=\frac{m_2}{m_1}g\). Com todos juntos, \(F=(M+m_1+m_2)a\).</p>`});

P({id:'2025-q13', ano:2025, prova:'EUF 2025 · Q13 [mcPT7a]', topicos:['rigido'], fig:'fig/y25_q13.png',
enunciado:R`<p>Um disco homogêneo (\(M\), \(R\)) girando com \(\omega_0\) é solto numa superfície horizontal (atrito cinético \(\mu_c\)) com velocidade de translação nula. Após \(\Delta t\), atinge rolamento sem deslizamento. Qual gráfico representa \(V(t)\) e \(R\,\omega(t)\)?</p>`,
opcoes:[{img:'fig/y25_q13A.png'},{img:'fig/y25_q13B.png'},{img:'fig/y25_q13C.png'},{img:'fig/y25_q13D.png'},{img:'fig/y25_q13E.png'}],
dica:R`O atrito cinético é constante, então as acelerações são constantes: as retas mudam linearmente. Depois de \(\Delta t\), nada mais muda.`,
solucao:R`<p>\(V=\mu_cgt\) (cresce linearmente) e \(R\omega=R\omega_0-2\mu_cgt\) (cai linearmente, com o dobro da inclinação). Elas se encontram em \(V=R\omega_0/3\) e ficam constantes, porque no rolamento puro numa superfície horizontal o atrito se anula. As curvas exponenciais e as que se cruzam estão erradas.</p>`});

P({id:'2025-q15', ano:2025, prova:'EUF 2025 · Q15 [mcPT8a]', topicos:['rigido','sist'], fig:'fig/y25_q15.png',
enunciado:R`<p>Um disco homogêneo (\(M\), \(R\), \(I_{CM}=\frac12MR^2\)) com velocidade \(V_0\) numa superfície sem atrito colide tangencialmente com a periferia de outro disco idêntico em repouso. Eles ficam unidos, girando em torno do CM do sistema e transladando com \(V\). O módulo de \(\omega\) após a colisão é:</p>`,
opcoes:[R`\(\omega=\dfrac13\dfrac{v_0}{R}\)`,R`\(\omega=\dfrac16\dfrac{v_0}{R}\)`,R`\(\omega=\dfrac23\dfrac{v_0}{R}\)`,R`\(\omega=\dfrac12\dfrac{v_0}{R}\)`,R`\(\omega=\dfrac35\dfrac{v_0}{R}\)`],
dica:R`Colisão rasante: as linhas dos centros ficam separadas por \(2R\), e o CM está no meio.`,
solucao:R`<p>\(V=V_0/2\). Momento angular em relação ao CM: \(L=MV_0R\) (braço \(R\)). Depois, \(I=2\left(\frac12MR^2+MR^2\right)=3MR^2\). Logo \(\omega=V_0/3R\).</p>`});

// ===================== 2026 =====================
P({id:'2026-q1', ano:2026, prova:'EUF 2026 · Q1 [mcPT1a]', topicos:['sist'], fig:'fig/y26_q1.png',
enunciado:R`<p>Um recipiente muito longo de massa \(m_0\) move-se sem atrito com velocidade \(v_0\). A partir de \(t=0\), recebe líquido despejado verticalmente à taxa constante \(\gamma\) (choque perfeitamente inelástico). Sendo \(x\) a posição do recipiente, a equação de movimento é:</p>`,
opcoes:[R`\((m_0+\gamma t)\ddot x+\gamma\dot x=0\)`,R`\((m_0-\gamma t)\ddot x-\gamma v_0=0\)`,R`\(m_0\dot v=-\gamma\dot x\)`,R`\(m_0\ddot x=\gamma v_0\)`,R`\(\gamma t\dot x=-m_0v_0\)`],
dica:R`O líquido chega sem momento horizontal, então o momento horizontal \((m_0+\gamma t)\dot x\) se conserva.`,
solucao:R`<p>\(\frac{d}{dt}\left[(m_0+\gamma t)\dot x\right]=0\Rightarrow(m_0+\gamma t)\ddot x+\gamma\dot x=0\). (Solução: \(\dot x=m_0v_0/(m_0+\gamma t)\).)</p>`});

P({id:'2026-q3', ano:2026, prova:'EUF 2026 · Q3 [mcPT2a]', topicos:['acopl','sist'], fig:'fig/y26_q3.png',
enunciado:R`<p>Um vagão de massa \(M\) move-se sem atrito em trilhos retos. Dentro dele, um bloco \(m\) está ligado às paredes por duas molas idênticas \(k\), sem atrito com o vagão. Para pequenas oscilações, \(\omega\) é:</p>`,
opcoes:[R`\(\omega=\sqrt{\left(1+\frac mM\right)\frac{2k}{m}}\)`,R`\(\omega=\left(1+\frac mM\right)\sqrt{\frac{2k}{m}}\)`,R`\(\omega=\left(1+\frac m{2M}\right)\sqrt{\frac{2k}{m}}\)`,R`\(\omega=\sqrt{\left(1+\frac m{2M}\right)\frac{2k}{m}}\)`,R`\(\omega=\left(1+\frac mM\right)^2\sqrt{\frac{2k}{m}}\)`],
dica:R`Dois corpos livres ligados por molas: use a massa reduzida e \(k_{ef}=2k\).`,
solucao:R`<p>A coordenada relativa oscila com \(\omega^2=\dfrac{2k}{\mu}\), \(\mu=\dfrac{mM}{m+M}\Rightarrow\omega^2=\dfrac{2k}{m}\left(1+\dfrac mM\right)\). Limite \(M\to\infty\): \(\sqrt{2k/m}\) ✓.</p>`});

P({id:'2026-q5', ano:2026, prova:'EUF 2026 · Q5 [mcPT3a]', topicos:['lagr','rigido'],
enunciado:R`<p>Uma haste fina homogênea (\(m\), \(L\)) inicialmente vertical numa superfície horizontal é perturbada e cai no plano \(xy\) (\(y\) para cima). \(\mu\) é o atrito cinético e \(\theta\) o ângulo com a superfície.</p><p>I. Confinada ao plano, a haste tem 3 graus de liberdade: \(x_{cm}\), \(y_{cm}\) e \(\theta\).<br>II. Se não deslizar e mantiver contato, tem 1 grau de liberdade e \(\mathcal L=\frac16mL^2\dot\theta^2-\frac12mgL\sin\theta\).<br>III. Se deslizar mantendo contato, tem 2 graus de liberdade e \(\mathcal L=\frac16mL^2\dot\theta^2-mg\left(\frac12L\sin\theta+\mu x_{cm}\right)\).</p>`,
opcoes:[R`Apenas as afirmações I e II são corretas.`,R`Apenas a afirmação I é correta.`,R`Apenas as afirmações II e III são corretas.`,R`Apenas as afirmações I e III são corretas.`,R`Todas as afirmações são corretas.`],
dica:R`O atrito cinético não é conservativo: não entra na lagrangiana como potencial.`,
solucao:R`<p>I é verdadeira. II: com a base fixa, a haste gira em torno dela, \(T=\frac12\cdot\frac{mL^2}{3}\dot\theta^2\) e \(V=mg\frac L2\sin\theta\) (verdadeira). III é falsa: o atrito não vem de um potencial, e a energia cinética também teria de incluir \(\dot x_{cm}\).</p>`});

P({id:'2026-q7', ano:2026, prova:'EUF 2026 · Q7 [mcPT4a]', topicos:['rigido'], fig:'fig/y26_q7.png',
enunciado:R`<p>Uma barra rígida fina de comprimento \(L\) gira em torno de O; suas extremidades tocam molas idênticas \(k\) (figura: O está a \(L/3\) de B, e a força \(F\hat y\), muito pequena, atua a \(L/3\) à esquerda de O). A magnitude da força externa sobre a extremidade A é:</p>`,
opcoes:[R`\(\frac25F\)`,R`\(\frac15F\)`,R`\(\frac14F\)`,R`\(\frac38F\)`,R`\(\frac45F\)`],
dica:R`Pequena rotação \(\varphi\): cada mola é deformada por (distância a O)·\(\varphi\). Faça o balanço de torques em O.`,
solucao:R`<p>\(OA=2L/3\), \(OB=L/3\). Torques: \(F\frac L3=k\frac{2L}{3}\varphi\cdot\frac{2L}3+k\frac L3\varphi\cdot\frac L3=\frac59kL^2\varphi\Rightarrow kL\varphi=\frac35F\). Força em A: \(k\frac{2L}{3}\varphi=\frac25F\) (e em B, \(\frac15F\)).</p>`});

P({id:'2026-q9', ano:2026, prova:'EUF 2026 · Q9 [mcPT5a]', topicos:['rigido'], fig:'fig/y26_q9.png',
enunciado:R`<p>Uma aluna num banquinho giratório (momento de inércia do conjunto \(I_{ab}\)) segura a uma distância \(b\) do eixo uma roda de bicicleta (massa \(M\)) girando com \(\mathbf L_i=I_r\omega_0\hat z\). Ela inverte o eixo da roda (o momento angular da roda passa a \(-\hat z\)). Sem torques externos, a velocidade angular final \(\omega'\) da aluna é:</p>`,
opcoes:[R`\(\omega'=\dfrac{2I_r\omega_0}{I_{ab}+Mb^2}\)`,R`\(\omega'=\dfrac{I_r\omega_0}{I_{ab}+Mb^2}\)`,R`\(\omega'=\dfrac{I_r\omega_0}{I_{ab}+2Mb^2}\)`,R`\(\omega'=\dfrac{I_r\omega_0}{2I_{ab}+Mb^2}\)`,R`\(\omega'=\dfrac{I_r\omega_0}{Mb^2}\)`],
dica:R`\(L_z\) total se conserva: o spin da roda vai de \(+I_r\omega_0\) a \(-I_r\omega_0\). A roda, como massa pontual a distância \(b\), gira junto com a aluna.`,
solucao:R`<p>\(I_r\omega_0=-I_r\omega_0+(I_{ab}+Mb^2)\omega'\Rightarrow\omega'=\dfrac{2I_r\omega_0}{I_{ab}+Mb^2}\).</p>`});

P({id:'2026-q11', ano:2026, prova:'EUF 2026 · Q11 [mcPT6a]', topicos:['central'],
enunciado:R`<p>Uma partícula de massa \(m\) move-se sob \(V(r)=-\dfrac{V_0}{r}+\dfrac{V_1}{r^2}\) (\(V_0,V_1>0\)) com momento angular de módulo \(L\). O raio de uma órbita circular é:</p>`,
opcoes:[R`\(r_0=\dfrac1{V_0}\left(\dfrac{L^2}{m}+2V_1\right)\)`,R`\(r_0=\dfrac{2V_1}{V_0}\)`,R`\(r_0=\dfrac1{V_0}\left(\dfrac{2L^2}{m}+V_1\right)\)`,R`\(r_0=\dfrac1{V_0}\dfrac{L^2}{m}\)`,R`\(r_0=\dfrac1{V_0}\left(\dfrac{L^2}{m}+V_1\right)\)`],
dica:R`\(V_{ef}=V+\dfrac{L^2}{2mr^2}\). O termo \(V_1/r^2\) se soma ao termo centrífugo.`,
solucao:R`<p>\(V_{ef}'=\dfrac{V_0}{r^2}-\dfrac{2V_1}{r^3}-\dfrac{L^2}{mr^3}=0\Rightarrow r_0=\dfrac{1}{V_0}\left(\dfrac{L^2}{m}+2V_1\right)\).</p>`});

P({id:'2026-q13', ano:2026, prova:'EUF 2026 · Q13 [mcPT7a]', topicos:['rigido'], fig:'fig/y26_q13.png',
enunciado:R`<p>Uma barra homogênea (\(L\), \(m\), \(I_b=mL^2/3\) pela extremidade) gira em torno de um eixo fixo no teto; na outra ponta há uma partícula de massa \(M=m\). Solta do repouso na horizontal (90° com a vertical), a velocidade angular ao passar pela vertical é:</p>`,
opcoes:[R`\(\omega=\frac32\sqrt{g/L}\)`,R`\(\omega=\frac12\sqrt{g/L}\)`,R`\(\omega=\frac23\sqrt{g/L}\)`,R`\(\omega=\frac52\sqrt{g/L}\)`,R`\(\omega=\sqrt{g/L}\)`],
dica:R`A barra desce \(L/2\) (CM) e a partícula desce \(L\). Some os momentos de inércia.`,
solucao:R`<p>\(mg\frac L2+mgL=\frac12\left(\frac{mL^2}3+mL^2\right)\omega^2\Rightarrow\frac32gL=\frac23L^2\omega^2\Rightarrow\omega=\frac32\sqrt{g/L}\).</p>`});

P({id:'2026-q15', ano:2026, prova:'EUF 2026 · Q15 [mcPT8a]', topicos:['sist','mov3d'], fig:'fig/y26_q15.png',
enunciado:R`<p>Um projétil \(m\) com velocidade horizontal \(v_0\) colide com uma partícula \(M\) em repouso, presa a um fio ideal de comprimento \(L\), e fica presa a ela. A menor \(v_0\) para o conjunto dar uma volta completa é:</p>`,
opcoes:[R`\(v_0=\left(\dfrac{m+M}{m}\right)\sqrt{5Lg}\)`,R`\(v_0=\left(\dfrac{m+M}{m}\right)\sqrt{4Lg}\)`,R`\(v_0=\left(\dfrac{m+M}{m}\right)\sqrt{3Lg}\)`,R`\(v_0=\left(\dfrac{m+M}{m}\right)\sqrt{2Lg}\)`,R`\(v_0=\left(\dfrac{m+M}{m}\right)\sqrt{Lg}\)`],
dica:R`Na colisão conserva-se o momento; depois, a energia. Com fio (e não haste), a tensão no topo precisa ser \(\ge0\).`,
solucao:R`<p>\(V=\dfrac{mv_0}{m+M}\). Volta completa com fio: no topo \(v_t^2\ge gL\Rightarrow V^2\ge gL+4gL=5gL\). Então \(v_0=\dfrac{m+M}{m}\sqrt{5gL}\).</p>`});
})();
