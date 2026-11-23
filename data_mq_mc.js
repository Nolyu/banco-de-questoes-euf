window.BANK = window.BANK || [];
(function(){
const P = q => window.BANK.push(Object.assign({area:'mq', tipo:'mc'}, q));
const R = String.raw;
// Primeira alternativa = correta (a página embaralha).

// ============ 2º/2020 — online ============
P({id:'mq-2020o-1', ano:2020, prova:'EUF 2º/2020 (online) · Q1', topicos:['poco'],
enunciado:R`<p>Uma partícula de energia \(E\) incide sobre a barreira \(V=|V_0|\) para \(0\lt x\lt a\) (zero fora).</p><p>I. A partícula é refletida com probabilidade um para qualquer \(E\lt|V_0|\).<br>II. É transmitida com probabilidade um para qualquer \(E>|V_0|\).<br>III. Para \(E>|V_0|\), há energias específicas em que a probabilidade de reflexão é zero.</p>`,
opcoes:[R`Apenas III está correta.`,R`Apenas I está correta.`,R`Apenas II está correta.`,R`Apenas I e II estão corretas.`,R`Nenhuma está correta.`],
dica:R`Tunelamento (I) e reflexão acima da barreira (II). Ressonâncias: \(k'a=n\pi\).`,
solucao:R`<p>I falsa (tunelamento), II falsa (reflexão quântica). III: quando \(k'a=n\pi\), com \(k'=\sqrt{2m(E-|V_0|)}/\hbar\), \(T=1\) (ressonância de transmissão).</p>`});

P({id:'mq-2020o-2', ano:2020, prova:'EUF 2º/2020 (online) · Q2', topicos:['post'],
enunciado:R`<p>Numa mesma base, \(\hat A=\begin{pmatrix}i&0\\0&-i\end{pmatrix}\), \(\hat B=\begin{pmatrix}0&i\\i&0\end{pmatrix}\), \(\hat C=\begin{pmatrix}0&i\\-i&0\end{pmatrix}\). Indique a correta:</p>`,
opcoes:[R`\(\hat C\) pode representar um observável físico.`,R`Esses operadores comutam entre si.`,R`\(\hat A\) é hermitiano.`,R`\(\hat B\) tem autovalores degenerados.`,R`\(\hat B\) e \(\hat C\) têm os mesmos autovetores.`],
dica:R`Hermitiano: \(M^\dagger=M\) (transposta conjugada).`,
solucao:R`<p>\(\hat C=-\sigma_y\) é hermitiano (autovalores \(\pm1\)). \(\hat A=i\sigma_z\) e \(\hat B=i\sigma_x\) são anti-hermitianos. \([\hat A,\hat B]\ne0\). \(\hat B\) tem autovalores \(\pm i\) (distintos), com autovetores diferentes dos de \(\hat C\).</p>`});

P({id:'mq-2020o-3', ano:2020, prova:'EUF 2º/2020 (online) · Q3', topicos:['evol','post'],
enunciado:R`<p>Um sistema tridimensional tem \(E_1=-\hbar\omega\), \(E_2=0\), \(E_3=\hbar\omega\). Um observável \(\hat B\) tem autovetores \(|b_\pm\rangle=(|E_1\rangle\pm|E_3\rangle)/\sqrt2\) e \(|b_z\rangle=|E_2\rangle\). O estado inicial é \(|\psi(0)\rangle=\tfrac12(|E_1\rangle+|E_3\rangle)+\tfrac1{\sqrt2}|E_2\rangle\). Assinale a correta:</p>`,
opcoes:[R`A probabilidade máxima de obter \(b_-\) é 1/2, nos instantes \(t=(2n+1)\pi/(2\omega)\).`,R`A probabilidade máxima de \(b_+\) é 1/4, em \(t=n\pi/\omega\).`,R`A probabilidade máxima de \(b_+\) é 1, em \(t=2\pi n/\omega\).`,R`A probabilidade máxima de \(b_-\) é 1, em \(t=n\pi/\omega\).`,R`\(\langle\hat B\rangle\) é constante de movimento.`],
dica:R`\(\langle b_\pm|\psi(t)\rangle=\tfrac1{2\sqrt2}(e^{i\omega t}\pm e^{-i\omega t})\).`,
solucao:R`<p>\(P_+=\tfrac12\cos^2\omega t\), \(P_-=\tfrac12\sin^2\omega t\). \(P_-\) atinge 1/2 em \(\omega t=(2n+1)\pi/2\). (\(P_+\) tem máximo 1/2, e \(\langle B\rangle\) oscila.)</p>`});

P({id:'mq-2020o-4', ano:2020, prova:'EUF 2º/2020 (online) · Q4', topicos:['post'],
enunciado:R`<p>Uma partícula livre tem em \(t=0\) \(\psi(x)=\left(\dfrac1{\pi\Delta^2}\right)^{1/4}e^{ip_0x/\hbar}e^{-(x-a)^2/2\Delta^2}\). Indique a correta:</p>`,
opcoes:[R`\(\langle p\rangle=p_0\), com incerteza \(\hbar/(\Delta\sqrt2)\).`,R`\(\langle x\rangle=0\), com incerteza \(\Delta/\sqrt2\).`,R`\(\Psi(x,t)=e^{-iEt/\hbar}\psi(x)\) com \(E=p_0^2/2m\).`,R`A densidade de probabilidade é \(\left|\dfrac{e^{ip_0x/\hbar}e^{-(x-a)^2/2\Delta^2}}{(\pi\Delta^2)^{1/4}}\right|^2\) sem relação com \(a\).`,R`O princípio de incerteza não é satisfeito, pois a partícula é livre.`],
dica:R`Pacote gaussiano de incerteza mínima centrado em \(a\).`,
solucao:R`<p>\(\langle x\rangle=a\), \(\sigma_x=\Delta/\sqrt2\); \(\langle p\rangle=p_0\), \(\sigma_p=\hbar/(\Delta\sqrt2)\), com \(\sigma_x\sigma_p=\hbar/2\). O pacote não é estacionário (espalha-se).</p>`});

P({id:'mq-2020o-5', ano:2020, prova:'EUF 2º/2020 (online) · Q5', topicos:['osch','poco'],
enunciado:R`<p>Uma partícula está em \(V=\infty\) para \(x\lt0\) e \(V=\tfrac12m\omega^2x^2\) para \(x>0\). Sobre as energias:</p><p>I. \(E_n=\hbar\omega(n+\tfrac12)\), \(n=0,1,2,\dots\)<br>II. \(E_n=\hbar\omega(n+\tfrac12)\), \(n=1,3,5,\dots\)<br>III. \(E_n=\hbar\omega(n+\tfrac12)\), \(n=0,2,4,\dots\)</p>`,
opcoes:[R`Apenas II está correta.`,R`Apenas I está correta.`,R`Apenas III está correta.`,R`Todas são equivalentes.`,R`Nenhuma está correta.`],
dica:R`\(\psi(0)=0\) seleciona as autofunções ímpares.`,
solucao:R`<p>Só os estados ímpares do oscilador completo se anulam na parede: \(n=1,3,5,\dots\)</p>`});

P({id:'mq-2020o-6', ano:2020, prova:'EUF 2º/2020 (online) · Q6', topicos:['post'],
enunciado:R`<p>\(\hat H|n\rangle=nE_0|n\rangle\), \(n=1,2,3,4\). O sistema está em \(|\psi\rangle=3|1\rangle+|2\rangle-|3\rangle+7|4\rangle\) (não normalizado). O valor esperado da energia é:</p>`,
opcoes:[R`\(\tfrac72E_0\)`,R`\(\tfrac{21}{20}E_0\)`,R`\(\tfrac52E_0\)`,R`\(3E_0\)`,R`\(E_0\)`],
dica:R`Normalize: soma dos quadrados = 60.`,
solucao:R`<p>\(\langle E\rangle=\dfrac{9\cdot1+1\cdot2+1\cdot3+49\cdot4}{60}E_0=\dfrac{210}{60}E_0=\tfrac72E_0\).</p>`});

P({id:'mq-2020o-7', ano:2020, prova:'EUF 2º/2020 (online) · Q7', topicos:['post'],
enunciado:R`<p>\(\hat H|1\rangle=E_0|1\rangle\), \(\hat H|2\rangle=E_0|2\rangle\), \(\hat H|3\rangle=2E_0|3\rangle\), \(\hat H|4\rangle=4E_0|4\rangle\). O estado é \(|\psi\rangle=\tfrac1{\sqrt6}|1\rangle+\tfrac1{\sqrt2}|2\rangle+\tfrac12|3\rangle+\tfrac1{\sqrt{12}}|4\rangle\). Mede-se a energia e obtém-se \(E_0\). O estado logo após é:</p>`,
opcoes:[R`\(\tfrac12|1\rangle+\tfrac{\sqrt3}2|2\rangle\)`,R`\(\tfrac1{\sqrt2}|1\rangle+\tfrac1{\sqrt2}|2\rangle\)`,R`\(\tfrac1{\sqrt2}|1\rangle-\tfrac1{\sqrt2}|2\rangle\)`,R`\(\tfrac{\sqrt3}2|1\rangle-\tfrac12|2\rangle\)`,R`\(\tfrac{\sqrt3}2|1\rangle+\tfrac12|2\rangle\)`],
dica:R`Projete no subespaço degenerado e renormalize.`,
solucao:R`<p>Projeção: \(\tfrac1{\sqrt6}|1\rangle+\tfrac1{\sqrt2}|2\rangle\), norma² \(=\tfrac23\). Normalizado: \(\tfrac12|1\rangle+\tfrac{\sqrt3}2|2\rangle\).</p>`});

P({id:'mq-2020o-8', ano:2020, prova:'EUF 2º/2020 (online) · Q8', topicos:['hidro','angm'],
enunciado:R`<p>Uma partícula de carga \(q\), sem spin, num potencial coulombiano. Escolha a correta:</p>`,
opcoes:[R`A simetria esférica implica invariância rotacional de \(\hat H\), logo \([\hat H,\hat L^2]=0\).`,R`O espectro de energia só tem valores discretos.`,R`O momento angular só se conserva em estados ligados.`,R`Nos estados estacionários, a partícula descreve órbitas circulares ou elípticas bem definidas.`,R`Como \([\hat L_\pm,\hat L^2]=0\), \(\hat L_+\), \(\hat L_-\) e \(\hat L^2\) são observáveis compatíveis.`],
dica:R`\(\hat L_\pm\) não são hermitianos.`,
solucao:R`<p>Potencial central ⇒ \([\hat H,\vec L]=0\) e \([\hat H,L^2]=0\). Há espectro contínuo para \(E>0\); não há órbitas definidas; \(\hat L_\pm\) não são observáveis.</p>`});

P({id:'mq-2020o-9', ano:2020, prova:'EUF 2º/2020 (online) · Q9', topicos:['post'],
enunciado:R`<p>Um sistema de dois níveis tem \(\hat H=\begin{pmatrix}\omega_1&\omega_2\\\omega_2&\omega_1\end{pmatrix}\). As autoenergias são:</p>`,
opcoes:[R`\(\omega_1+\omega_2\) e \(\omega_1-\omega_2\)`,R`\(\omega_1\) e \(\omega_2\)`,R`\(\omega_1+\omega_2\) e \(\omega_2-\omega_1\)`,R`\((\omega_1+\omega_2)/2\) e \(2(\omega_1-\omega_2)\)`,R`\(2(\omega_1+\omega_2)\) e \((\omega_2-\omega_1)/2\)`],
dica:R`\(\hat H=\omega_1\mathbb1+\omega_2\sigma_x\).`,
solucao:R`<p>Autovalores \(\omega_1\pm\omega_2\), com autovetores \((1,\pm1)/\sqrt2\).</p>`});

// ============ 2020 — 2ª aplicação ============
P({id:'mq-2020b-1', ano:2020, prova:'EUF 2020 (2ª aplicação) · MQ1A', topicos:['osch'],
enunciado:R`<p>Dois sistemas têm hamiltonianos \(\hat H_A=\dfrac{\hat p^2}{2m}+\dfrac{m\omega^2}{2}\hat x^2\) e \(\hat H_B=\dfrac{\hat p^2}{2m}+\dfrac{m\omega^2}{2}\hat x^2-m\omega^2x_0\hat x\), com \(m,\omega,x_0>0\).</p><p>I. O espectro de A é discreto com níveis separados por \(\hbar\omega\), enquanto B pode ter autovalores discretos e contínuos, dependendo de \(m\omega^2x_0\).<br>II. \(\langle\hat x\rangle\) e \(\langle\hat p\rangle\) são nulos no 1º estado excitado de A, enquanto no de B \(\langle\hat x\rangle=x_0\) e \(\langle\hat p\rangle=0\).<br>III. As autofunções têm paridades \(\psi_n^A(x)=(-1)^n\psi_n^A(-x)\) e \(\psi_n^B(x-x_0)=(-1)^n\psi_n^B(-x+x_0)\).</p>`,
opcoes:[R`Apenas II e III estão corretas.`,R`Apenas I está correta.`,R`Apenas II está correta.`,R`Apenas III está correta.`,R`Apenas I e II estão corretas.`],
dica:R`Complete o quadrado em \(\hat H_B\).`,
solucao:R`<p>\(\hat H_B=\dfrac{\hat p^2}{2m}+\dfrac{m\omega^2}{2}(\hat x-x_0)^2-\dfrac{m\omega^2x_0^2}{2}\): é o mesmo oscilador deslocado para \(x_0\) e com energia baixada por uma constante. Espectro só discreto, com espaçamento \(\hbar\omega\) (I falsa). Os autoestados são os de A transladados: \(\langle x\rangle=x_0\), \(\langle p\rangle=0\) (II correta), e a paridade é em torno de \(x_0\) (III correta).</p>`});

P({id:'mq-2020b-2', ano:2020, prova:'EUF 2020 (2ª aplicação) · MQ2A', topicos:['post','evol'],
enunciado:R`<p>Num sistema, o hamiltoniano e um observável \(\hat O\) são, na mesma base, \(\hat H=\begin{pmatrix}0&\Delta&0\\\Delta&0&0\\0&0&\Delta\end{pmatrix}\) e \(\hat O=\begin{pmatrix}-\lambda&0&0\\0&0&0\\0&0&\lambda\end{pmatrix}\), com \(\Delta,\lambda>0\).</p><p>I. \(\langle\hat H\rangle\) é zero no autoestado de \(\hat O\) de autovalor zero.<br>II. Se em \(t=0\) o sistema está no autoestado de \(\hat O\) de menor autovalor, é nula a probabilidade de obter esse autovalor numa medida de \(\hat O\) em \(t=\pi\hbar/(2\Delta)\).<br>III. \(\hat H\) e \(\hat O\) são compatíveis.</p>`,
opcoes:[R`Apenas I e II estão corretas.`,R`Apenas I está correta.`,R`Apenas II está correta.`,R`Apenas III está correta.`,R`Apenas II e III estão corretas.`],
dica:R`No subespaço \(\{|1\rangle,|2\rangle\}\), \(\hat H=\Delta\sigma_x\): o estado oscila entre \(|1\rangle\) e \(|2\rangle\).`,
solucao:R`<p>I: \(\langle2|\hat H|2\rangle=0\). Correta. II: \(e^{-i\Delta\sigma_xt/\hbar}|1\rangle=\cos(\Delta t/\hbar)|1\rangle-i\sin(\Delta t/\hbar)|2\rangle\); em \(t=\pi\hbar/2\Delta\) o cosseno zera. Correta. III: \(\hat H\) mistura \(|1\rangle\) e \(|2\rangle\), que têm autovalores diferentes de \(\hat O\), logo \([\hat H,\hat O]\ne0\). Falsa.</p>`});

P({id:'mq-2020b-3', ano:2020, prova:'EUF 2020 (2ª aplicação) · MQ3A', topicos:['hidro'],
enunciado:R`<p>O positrônio é um sistema ligado elétron–pósitron. Qual a energia do seu estado fundamental?</p>`,
opcoes:[R`−6,8 eV`,R`−1,7 eV`,R`−27,2 eV`,R`−13,6 eV`,R`−3,4 eV`],
dica:R`É um "hidrogênio" com massa reduzida \(\mu=m_e/2\).`,
solucao:R`<p>\(E_1\propto\mu\): \(E_1=-13{,}6\cdot\tfrac12=-6{,}8\) eV.</p>`});

P({id:'mq-2020b-4', ano:2020, prova:'EUF 2020 (2ª aplicação) · MQ4A', topicos:['poco'],
enunciado:R`<p>Uma partícula de massa \(m\) em uma dimensão incide com energia \(E\) sobre uma barreira de potencial suave genérica, de altura máxima \(V_0\).</p><p>I. \(\psi\) e \(d\psi/dx\) são contínuas para um potencial suave; mas se a barreira tiver descontinuidades, \(\psi\) e \(d\psi/dx\) serão descontínuas nesses pontos.<br>II. Se \(E>V_0\), a partícula certamente atravessará a barreira, sem possibilidade de reflexão.<br>III. Se \(E\lt V_0\), o tunelamento sempre pode ocorrer e sua probabilidade depende <b>unicamente</b> de \(V_0-E\), independentemente da forma de \(V(x)\).</p>`,
opcoes:[R`Nenhuma das afirmações está correta.`,R`Apenas I está correta.`,R`Apenas II está correta.`,R`Apenas III está correta.`,R`Todas estão corretas.`],
dica:R`Para um degrau finito, \(\psi''\) tem salto finito: \(\psi'\) continua contínua.`,
solucao:R`<p>I: num salto finito do potencial, \(\psi\) e \(\psi'\) seguem contínuas (só uma função delta ou parede infinita quebra a continuidade de \(\psi'\)). Falsa. II: há reflexão quântica mesmo com \(E>V_0\). Falsa. III: a transmissão depende da largura e da forma (no WKB, \(T\sim e^{-2\int\kappa\,dx}\)). Falsa.</p>`});

P({id:'mq-2020b-5', ano:2020, prova:'EUF 2020 (2ª aplicação) · MQ5A', topicos:['post'],
enunciado:R`<p>Num espaço bidimensional com base \(\{|0\rangle,|1\rangle\}\), o estado é \(|\psi\rangle=(|A\rangle+|B\rangle)/\sqrt2\), com \(|A\rangle=\tfrac2{\sqrt5}|0\rangle+\tfrac i{\sqrt5}|1\rangle\) e \(|B\rangle=\tfrac i{\sqrt5}|0\rangle+\tfrac2{\sqrt5}|1\rangle\). Na base \(|\pm\rangle=(|0\rangle\pm|1\rangle)/\sqrt2\), qual a probabilidade de encontrar a partícula em \(|-\rangle\)?</p>`,
opcoes:[R`0%`,R`20%`,R`50%`,R`80%`,R`100%`],
dica:R`Some as componentes antes de projetar.`,
solucao:R`<p>\(|\psi\rangle=\dfrac{(2+i)}{\sqrt{10}}(|0\rangle+|1\rangle)\propto|+\rangle\). Logo \(|\langle-|\psi\rangle|^2=0\).</p>`});

P({id:'mq-2020b-6', ano:2020, prova:'EUF 2020 (2ª aplicação) · MQ6A', topicos:['post','evol'],
enunciado:R`<p>A função de onda de uma partícula é</p><p>\(\psi(x,t)=\left(\dfrac1{2\pi\sigma^2}\right)^{1/4}\sqrt{\dfrac{1}{1+\frac{i\hbar t}{2m\sigma^2}}}\;e^{-\frac{it}{\hbar}\left(-Fx+\frac{F^2t^2}{6m}\right)}\exp\left[-\dfrac{(x-\frac{Ft^2}{2m})^2}{4\left(\sigma^2+\frac{i\hbar t}{2m}\right)}\right]\),</p><p>com \(\sigma\) e \(F\) reais.</p><p>I. A energia da partícula em função da posição e do tempo é \(E=-Fx+\dfrac{F^2t^2}{6m}\).<br>II. O valor esperado do momento em \(t=0\) é zero.<br>III. A probabilidade de encontrar a partícula entre \(x\) e \(x+dx\) é \(\left(\dfrac1{2\pi\sigma^2}\right)^{1/2}\left(1+\left(\dfrac{\hbar t}{2m\sigma^2}\right)^2\right)^{-1}\).</p>`,
opcoes:[R`Apenas II está correta.`,R`Apenas I está correta.`,R`Apenas III está correta.`,R`Apenas I e II estão corretas.`,R`Apenas I e III estão correta.`],
dica:R`Em \(t=0\), \(\psi\) é uma gaussiana real, sem fase dependente de \(x\).`,
solucao:R`<p>É um pacote gaussiano numa força constante \(F\). I: energia não é "função da posição"; não faz sentido. II: em \(t=0\), \(\psi\) real ⇒ \(\langle p\rangle=0\). Correta. III: falta o fator gaussiano em \(x\) e o expoente está errado (o correto é \(|\psi|^2dx\), com largura \(\sigma(t)=\sigma\sqrt{1+(\hbar t/2m\sigma^2)^2}\)). Falsa.</p>`});

P({id:'mq-2020b-7', ano:2020, prova:'EUF 2020 (2ª aplicação) · MQ7A', topicos:['angm','osch'],
enunciado:R`<p>Uma partícula sem spin está num oscilador 3D anisotrópico: \(\hat H=\dfrac{\hat p^2}{2m}+\tfrac12m\omega_{xy}^2(\hat x^2+\hat y^2)+\tfrac12m\omega_z^2\hat z^2\).</p><p>I. \(\hat H\) comuta com \(\hat L^2\) e \(\hat L_z\).<br>II. Como o potencial não é coulombiano, \([\hat L^2,\hat L_k]=0\) não vale.<br>III. Com simetria de rotação em torno de \(z\), os autovalores de \(\hat L_z\) são contínuos, sendo zero o menor.</p>`,
opcoes:[R`Nenhuma está correta.`,R`Apenas I está correta.`,R`Apenas II está correta.`,R`Apenas III está correta.`,R`Todas estão corretas.`],
dica:R`Simetria axial (não esférica) ⇒ conserva \(L_z\), não \(L^2\).`,
solucao:R`<p>I: \([\hat H,\hat L_z]=0\), mas \([\hat H,\hat L^2]\ne0\) se \(\omega_{xy}\ne\omega_z\). Falsa. II: \([\hat L^2,\hat L_k]=0\) é identidade algébrica, independente do potencial. Falsa. III: \(L_z=m\hbar\), discreto e com \(m\) negativo possível. Falsa.</p>`});

P({id:'mq-2020b-8', ano:2020, prova:'EUF 2020 (2ª aplicação) · MQ8A', topicos:['post'],
enunciado:R`<p>Fótons com polarização vertical chegam um a um a um espelho semitransparente (\(R=1/2\)) que os divide em dois caminhos. O caminho A tem um polarizador a 45° da vertical. O caminho B tem um polarizador idêntico seguido de outro com eixo horizontal. Detectores contam os fótons no fim de cada caminho. Após 1000 fótons, as contagens em A e B são aproximadamente:</p>`,
opcoes:[R`250; 125`,R`500; 0`,R`500; 500`,R`750; 250`,R`250; 750`],
dica:R`Cada polarizador projeta: probabilidade \(\cos^2\) do ângulo.`,
solucao:R`<p>500 fótons por caminho. A: \(\cos^245^\circ=\tfrac12\Rightarrow250\). B: \(\tfrac12\cdot\tfrac12\Rightarrow125\) (o polarizador a 45° "cria" componente horizontal).</p>`});

// ============ 2021 — online ============
P({id:'mq-2021-1', ano:2021, prova:'EUF 2021 (online) · MQ1A', topicos:['post'],
enunciado:R`<p>Seja \(\psi(x)\) normalizada, com \(\langle\hat x\rangle_\psi=x_0\) e \(\langle\hat p\rangle_\psi=p_0\). Defina \(\Phi(x)=e^{ikx}\psi(x)\), \(k\) real.</p><p>I. \(\langle\hat x\rangle_\Phi=x_0+1/k\).<br>II. \(\langle\hat p\rangle_\Phi=p_0+\hbar k\).<br>III. \(\psi\) e \(\Phi\) representam o mesmo estado, pois diferem só por uma fase global; logo dão os mesmos valores médios.</p>`,
opcoes:[R`Apenas II está correta.`,R`Apenas I está correta.`,R`Apenas III está correta.`,R`I e II estão corretas.`,R`Nenhuma está correta.`],
dica:R`\(|\Phi|^2=|\psi|^2\), mas \(-i\hbar\,d/dx\) atua também em \(e^{ikx}\).`,
solucao:R`<p>\(|\Phi|^2=|\psi|^2\Rightarrow\langle x\rangle=x_0\) (I falsa). \(-i\hbar\Phi'=e^{ikx}(\hbar k\psi-i\hbar\psi')\Rightarrow\langle p\rangle=p_0+\hbar k\) (II correta). A fase \(e^{ikx}\) depende de \(x\): é local, não global (III falsa).</p>`});

P({id:'mq-2021-2', ano:2021, prova:'EUF 2021 (online) · MQ2A', topicos:['poco'],
enunciado:R`<p>Uma partícula de massa \(m\) tem energia potencial \(V(x)=-\dfrac{\hbar^2a^2}{m}\text{sech}^2(ax)\), com \(a>0\).</p><p>I. O espectro é contínuo para \(E>0\).<br>II. O espectro é discreto para \(-\dfrac{\hbar^2a^2}{m}\le E\lt0\).<br>III. As autofunções podem ser escolhidas pares ou ímpares.</p>`,
opcoes:[R`Todas estão corretas.`,R`Apenas I está correta.`,R`Apenas II está correta.`,R`Apenas III está correta.`,R`Nenhuma está correta.`],
dica:R`É um poço finito suave, simétrico, com \(V\to0\) no infinito.`,
solucao:R`<p>\(V\to0\) em \(\pm\infty\): estados de espalhamento para \(E>0\) (I). Entre o mínimo \(-\hbar^2a^2/m\) e 0, estados ligados discretos (II; aqui há um só, \(\psi\propto\text{sech}(ax)\), \(E=-\hbar^2a^2/2m\)). \(V\) par ⇒ autofunções de paridade definida (III).</p>`});

P({id:'mq-2021-3', ano:2021, prova:'EUF 2021 (online) · MQ3A', topicos:['osch','evol'],
enunciado:R`<p>Uma partícula num oscilador harmônico de frequência \(\omega\) centrado em \(x=0\) tem estado inicial \(\Psi(x,0)=\alpha\psi_n(x)+\beta\psi_m(x)\) (\(\alpha,\beta\) reais; autofunções reais e normalizadas). Assinale a alternativa correta sobre \(\langle\hat x\rangle_\Psi\) e sobre a densidade \(P(x,t)\,dx\).</p>`,
opcoes:[R`\(\langle\hat x\rangle_\Psi=2\alpha\beta\int x\psi_n\psi_m\,dx\); \(P(x,t)dx=\left[\alpha^2\psi_n^2+\beta^2\psi_m^2+2\alpha\beta\psi_n\psi_m\cos((n-m)\omega t)\right]dx\)`,R`\(\langle\hat x\rangle_\Psi=0\); \(P\) com \(\cos(\omega t)\) no termo cruzado`,R`\(\langle\hat x\rangle_\Psi=0\); \(P\) com \(\cos((n-m)\omega t)\) no termo cruzado`,R`\(\langle\hat x\rangle_\Psi=\int x(\alpha^2\psi_n^2+\beta^2\psi_m^2+2\alpha\beta\psi_n\psi_m)dx\); \(P\) com \(\cos(\omega t)\)`,R`\(\langle\hat x\rangle_\Psi=\int x(\dots)dx\); \(P=(\alpha^2\psi_n^2+\beta^2\psi_m^2)dx\), sem termo cruzado`],
dica:R`\(\langle n|x|n\rangle=0\) (paridade). Cada termo evolui com \(e^{-iE_kt/\hbar}\), \(E_n-E_m=(n-m)\hbar\omega\).`,
solucao:R`<p>\(\langle x\rangle=\alpha^2\langle n|x|n\rangle+\beta^2\langle m|x|m\rangle+2\alpha\beta\langle n|x|m\rangle=2\alpha\beta\int x\psi_n\psi_m\,dx\) (não nulo só se \(|n-m|=1\)). \(|\Psi(x,t)|^2=\alpha^2\psi_n^2+\beta^2\psi_m^2+2\alpha\beta\psi_n\psi_m\cos\frac{(E_n-E_m)t}{\hbar}\), com \((E_n-E_m)/\hbar=(n-m)\omega\).</p>`});

P({id:'mq-2021-4', ano:2021, prova:'EUF 2021 (online) · MQ4A', topicos:['evol','post'],
enunciado:R`<p>Na base \(\{|1\rangle,|2\rangle\}\): \(\hat H=\Delta(|1\rangle\langle1|+|2\rangle\langle2|)-\lambda(|1\rangle\langle2|+|2\rangle\langle1|)\) e \(\hat O=-\lambda|1\rangle\langle1|+\lambda|2\rangle\langle2|\), com \(\Delta,\lambda>0\). Em \(t=0\) o sistema está no autoestado de \(\hat O\) de <b>menor</b> autovalor.</p>`,
opcoes:[R`A probabilidade de uma medida de energia fornecer o menor autovalor é sempre 50%, para todo \(t\).`,R`A diferença entre os autovalores de \(\hat H\) é \(2(\Delta-\lambda)\).`,R`A diferença entre os autovalores de \(\hat H\) é \(\Delta-\lambda\).`,R`Em \(t=\pi\hbar/(\Delta-\lambda)\) é zero a probabilidade de uma medida de \(\hat O\) dar o menor autovalor.`,R`Em \(t=\pi\hbar/(2(\Delta-\lambda))\) é zero a probabilidade de uma medida de \(\hat O\) dar o menor autovalor.`],
dica:R`\(\hat H=\Delta\,\mathbb 1-\lambda\sigma_x\). Escreva \(|1\rangle\) na base dos autoestados de \(\sigma_x\).`,
solucao:R`<p>Autovalores \(\Delta\mp\lambda\) (diferença \(2\lambda\)), com autovetores \(|\pm\rangle=(|1\rangle\pm|2\rangle)/\sqrt2\). \(|1\rangle=(|+\rangle+|-\rangle)/\sqrt2\): probabilidades de energia 1/2 cada, constantes (estados estacionários). \(P_{|1\rangle}(t)=\cos^2(\lambda t/\hbar)\) zera em \(t=\pi\hbar/2\lambda\), que não aparece nas alternativas.</p>`});

P({id:'mq-2021-5', ano:2021, prova:'EUF 2021 (online) · MQ5A', topicos:['hidro'],
enunciado:R`<p>Um átomo de hidrogênio (sem spin) está no estado \(\Psi=\dfrac{1}{\sqrt{11}}(\psi_{100}-3\psi_{211}+\psi_{322})\). Em termos da energia do fundamental \(E_0\), o valor esperado da energia é:</p>`,
opcoes:[R`\(\tfrac{11}{36}E_0\)`,R`\(0\)`,R`\(-\tfrac7{11}E_0\)`,R`\(E_0\)`,R`\(-\tfrac{41}{396}E_0\)`],
dica:R`\(E_n=E_0/n^2\); pesos \(1/11\), \(9/11\), \(1/11\).`,
solucao:R`<p>\(\langle E\rangle=\dfrac{E_0}{11}\left(1+\dfrac94+\dfrac19\right)=\dfrac{E_0}{11}\cdot\dfrac{121}{36}=\dfrac{11}{36}E_0\).</p>`});

P({id:'mq-2021-6', ano:2021, prova:'EUF 2021 (online) · MQ6A', topicos:['poco','evol'],
enunciado:R`<p>Uma partícula num poço infinito \(0\le x\le L\) tem \(\Psi(x,t)=A\sin\frac{2\pi x}{L}e^{-i\frac{2\pi^2\hbar}{mL^2}t}+B\sin\frac{4\pi x}{L}e^{-i\frac{8\pi^2\hbar}{mL^2}t}\), com \(A,B\) reais normalizadas. Indique a afirmativa correta.</p>`,
opcoes:[R`O valor esperado do momento linear é nulo.`,R`Por ser combinação de estados estacionários, a densidade de probabilidade não varia no tempo.`,R`A densidade de probabilidade não é nula em nenhum ponto de \(0\le x\le L\).`,R`\(\langle E\rangle=\dfrac{5\pi^2\hbar^2}{mL^2}\).`,R`O estado tem energia bem definida, \(E=\dfrac{10\pi^2\hbar^2}{mL^2}\).`],
dica:R`No poço infinito, \(\langle m|\hat p|n\rangle\ne0\) só se \(m+n\) for ímpar.`,
solucao:R`<p>\(\langle p\rangle\) envolve \(\int\sin(2\pi x/L)\cos(4\pi x/L)dx=0\) (ambos \(n\) pares), e os termos diagonais são nulos: \(\langle p\rangle=0\). As outras: o termo cruzado oscila no tempo; \(x=L/2\) é nó comum (\(|\Psi|^2=0\)); \(\langle E\rangle\) depende de \(A,B\); não é autoestado.</p>`});

P({id:'mq-2021-7', ano:2021, prova:'EUF 2021 (online) · MQ7A', topicos:['post'],
enunciado:R`<p>Um observável de um sistema de três estados é \(M=\mathfrak m\begin{pmatrix}0&2&0\\2&0&0\\0&0&2\end{pmatrix}\), \(\mathfrak m>0\).</p>`,
opcoes:[R`M tem dois autovalores iguais.`,R`Todos os resultados possíveis de medidas de M são positivos.`,R`Todos os autovalores são idênticos.`,R`Os autovalores são todos diferentes.`,R`É possível obter \(\sqrt2\,\mathfrak m\) numa medida.`],
dica:R`Bloco \(2\times2\) e bloco \(1\times1\).`,
solucao:R`<p>Bloco \(\begin{pmatrix}0&2\\2&0\end{pmatrix}\): \(\pm2\). Bloco: 2. Autovalores \(2\mathfrak m,2\mathfrak m,-2\mathfrak m\): dois iguais (e um negativo).</p>`});

P({id:'mq-2021-8', ano:2021, prova:'EUF 2021 (online) · MQ8A', topicos:['ident'],
enunciado:R`<p>Para duas partículas idênticas não interagentes: \(\Psi(\mathbf r_1,\mathbf r_2)=\tfrac1{\sqrt2}[\psi_\alpha(\mathbf r_1)\psi_\beta(\mathbf r_2)+\psi_\alpha(\mathbf r_2)\psi_\beta(\mathbf r_1)]\) e \(\Phi\) com sinal \(-\). (\(\alpha,\beta\) especificam completamente os estados individuais.)</p>`,
opcoes:[R`\(\Psi\) pode representar um sistema de bósons.`,R`\(\Psi\) pode representar um sistema de férmions.`,R`\(\Phi\) pode representar um sistema de bósons.`,R`\(\Phi\) pode representar partículas de spin inteiro.`,R`Bósons devem ser representados por \([\Psi+\Phi]/2\).`],
dica:R`Bósons: simétrica sob troca; férmions: antissimétrica (os índices incluem o spin).`,
solucao:R`<p>\(\Psi\) é simétrica: bósons. \(\Phi\), antissimétrica: férmions (spin semi-inteiro). \((\Psi+\Phi)/2\) não tem simetria definida.</p>`});

// ============ 2021 — 3ª aplicação ============
P({id:'mq-2021c-1', ano:2021, prova:'EUF 2021 (3ª aplicação) · MQ1A', topicos:['poco','post'],
enunciado:R`<p>Uma partícula de massa \(m\) confinada em \(0\le x\le a\) está no estado \(\psi(x)=A^{1/2}(ax-x^2)\), com \(A>0\) a constante de normalização. Com \(\hat T=-\dfrac{\hbar^2}{2m}\dfrac{d^2}{dx^2}\), determine \(\langle T\rangle\).</p>`,
opcoes:[R`\(\langle T\rangle=\dfrac{Aa^3\hbar^2}{6m}\)`,R`\(\dfrac{Aa^3\hbar^2}{2m}\)`,R`\(\dfrac{Aa^3\hbar^2}{3m}\)`,R`\(\dfrac{Aa^3\hbar^2}{4m}\)`,R`\(\dfrac{Aa^3\hbar^2}{5m}\)`],
dica:R`\(\psi''=-2A^{1/2}\).`,
solucao:R`<p>\(\langle T\rangle=-\dfrac{\hbar^2}{2m}A\displaystyle\int_0^a(ax-x^2)(-2)dx=\dfrac{\hbar^2A}{m}\dfrac{a^3}{6}\). (Com \(A=30/a^5\): \(\langle T\rangle=5\hbar^2/ma^2\), pouco acima de \(E_1=\pi^2\hbar^2/2ma^2\approx4{,}93\hbar^2/ma^2\), como exige o princípio variacional.)</p>`});

P({id:'mq-2021c-2', ano:2021, prova:'EUF 2021 (3ª aplicação) · MQ2A', topicos:['post'],
enunciado:R`<p>Num espaço bidimensional com base \(\{|\alpha_1\rangle,|\alpha_2\rangle\}\), \(\hat A=\mathcal A\big(|\alpha_1\rangle\langle\alpha_1|+2i|\alpha_1\rangle\langle\alpha_2|-2i|\alpha_2\rangle\langle\alpha_1|+|\alpha_2\rangle\langle\alpha_2|\big)\), \(\mathcal A>0\). Qual o menor valor que pode resultar de uma medida de \(\hat A\)?</p>`,
opcoes:[R`\(a_{\min}=-\mathcal A\)`,R`\(\mathcal A\)`,R`\(-2\mathcal A\)`,R`\(-3\mathcal A\)`,R`\(-4\mathcal A\)`],
dica:R`Matriz \(\mathcal A\begin{pmatrix}1&2i\\-2i&1\end{pmatrix}\).`,
solucao:R`<p>\((1-a)^2-4=0\Rightarrow a=\mathcal A(1\pm2)\): \(3\mathcal A\) e \(-\mathcal A\).</p>`});

P({id:'mq-2021c-3', ano:2021, prova:'EUF 2021 (3ª aplicação) · MQ3A', topicos:['angm'],
enunciado:R`<p>Um rotor rígido num campo magnético tem \(H=AL^2+B\hbar L_z\), com \(A,B\) reais.</p><p>I. Para \(A\ne0\) e \(B\ne0\), \(H\) e \(L_z\) são compatíveis.<br>II. Para \(A\ne0\) e \(B=0\), os níveis são discretos e podem ser degenerados.<br>III. O estado \(|2,1\rangle\) (autovetor simultâneo de \(L^2\) e \(L_z\)) é autoestado de \(H\) com \(E=(4A+B)\hbar^2\).</p>`,
opcoes:[R`Apenas I e II estão corretas.`,R`Apenas II está correta.`,R`Apenas I está correta.`,R`Apenas III está correta.`,R`Apenas II e III estão corretas.`],
dica:R`\([L^2,L_z]=0\) sempre.`,
solucao:R`<p>I: \([H,L_z]=A[L^2,L_z]+0=0\): compatíveis. II: \(E=A\hbar^2l(l+1)\), degenerescência \(2l+1\). III: \(E=(6A+B)\hbar^2\), não \((4A+B)\hbar^2\).</p><p><b>Atenção:</b> o gabarito oficial marca "Apenas II está correta". Pela análise acima, I também é verdadeira, então aqui a alternativa considerada correta é "I e II".</p>`});

P({id:'mq-2021c-4', ano:2021, prova:'EUF 2021 (3ª aplicação) · MQ4A', topicos:['osch','post'],
enunciado:R`<p>Um oscilador está no estado \(|\psi\rangle=\tfrac14|0\rangle+\tfrac34|1\rangle+\tfrac1{2\sqrt2}|2\rangle+\tfrac12|3\rangle\). Mede-se a energia e obtém-se \(E=5\hbar\omega/2\). Imediatamente após a medida, com \(x^2=A[(\hat a^\dagger)^2+2\hat a^\dagger\hat a+\hat a^2+1]\), qual é \(\langle x^2\rangle\)?</p>`,
opcoes:[R`\(5A\)`,R`\(A\)`,R`\(3A\)`,R`\(7A\)`,R`\(9A\)`],
dica:R`Após a medida o estado colapsa em \(|2\rangle\).`,
solucao:R`<p>\(E=5\hbar\omega/2\Rightarrow|2\rangle\). \(\langle2|(\hat a^\dagger)^2|2\rangle=\langle2|\hat a^2|2\rangle=0\), \(\langle2|2\hat a^\dagger\hat a+1|2\rangle=5\). Logo \(\langle x^2\rangle=5A\).</p>`});

P({id:'mq-2021c-5', ano:2021, prova:'EUF 2021 (3ª aplicação) · MQ5A', topicos:['angm'],
enunciado:R`<p>Num potencial esférico, \(\psi=\dfrac{\hat L_-}{\hbar}\left[\sqrt{\tfrac i2}R_{10}Y_{00}+\sqrt{\tfrac13}R_{21}Y_{1,-1}-\tfrac1{\sqrt6}R_{32}Y_{20}\right]\), com \(\hat L_-=\hat L_x-i\hat L_y\). Qual a probabilidade de uma medida de \(L^2\) dar \(2\hbar^2\)?</p>`,
opcoes:[R`0`,R`1/2`,R`1/3`,R`1/6`,R`1`],
dica:R`\(\hat L_-Y_{lm}\propto Y_{l,m-1}\), e zera se \(m=-l\).`,
solucao:R`<p>\(\hat L_-Y_{00}=0\) e \(\hat L_-Y_{1,-1}=0\). Sobra só \(\hat L_-Y_{20}\propto Y_{2,-1}\), com \(l=2\) e \(L^2=6\hbar^2\). Probabilidade de \(2\hbar^2\) (\(l=1\)): zero.</p>`});

P({id:'mq-2021c-6', ano:2021, prova:'EUF 2021 (3ª aplicação) · MQ6A', topicos:['post'],
enunciado:R`<p>\(\hat O\) é um observável e \(\hat H\) o hamiltoniano de um sistema, ambos com autovalores <b>não degenerados</b>. Numa base: \(m_1=\lambda_1\begin{pmatrix}0&1&0\\1&0&0\\0&0&-1\end{pmatrix}\), \(m_2=\lambda_2\begin{pmatrix}1&3&2i\\3&0&5\\2i&5&6\end{pmatrix}\) (\(\lambda_1,\lambda_2\) reais).</p><p>I. \(m_1\) não pode representar \(\hat H\).<br>II. \(m_2\) não pode representar \(\hat O\).<br>III. \(m_2\) pode representar \(\hat O\), dependendo da base.</p>`,
opcoes:[R`Apenas I e II estão corretas.`,R`Apenas I está correta.`,R`Apenas II está correta.`,R`Apenas III está correta.`,R`Apenas I e III estão corretas.`],
dica:R`Calcule os autovalores de \(m_1\) e verifique se \(m_2\) é hermitiana.`,
solucao:R`<p>\(m_1\): autovalores \(\lambda_1(1,-1,-1)\), degenerados, então não pode ser \(\hat H\) (I). \(m_2\): elementos \((1,3)=2i\) e \((3,1)=2i\), mas a hermiticidade exige \((3,1)=-2i\). Não é hermitiana em base nenhuma (II correta, III falsa).</p>`});

P({id:'mq-2021c-7', ano:2021, prova:'EUF 2021 (3ª aplicação) · MQ7A', topicos:['hidro','angm'],
enunciado:R`<p>Um átomo de hidrogênio está num autoestado \(\phi_{nlm}\) e decai ao fundamental emitindo um único fóton, cujo momento angular ao quadrado é \(2\hbar^2\).</p><p>I. O estado inicial poderia ser \(\phi_{21-1}\).<br>II. Poderia ser \(\phi_{322}\).<br>III. Poderia ser \(\phi_{321}\).</p>`,
opcoes:[R`Apenas I está correta.`,R`Apenas II está correta.`,R`Apenas III está correta.`,R`Nenhuma está correta.`,R`Apenas II e III estão corretas.`],
dica:R`Fóton leva \(l=1\). Estado final \(1s\), \(l=0\).`,
solucao:R`<p>Conservação de momento angular: \(l_i=1\). Só \(\phi_{21-1}\) tem \(l=1\); os outros têm \(l=2\).</p>`});

P({id:'mq-2021c-8', ano:2021, prova:'EUF 2021 (3ª aplicação) · MQ8A', topicos:['evol'],
enunciado:R`<p>Um sistema de três níveis tem \(\hat H=\dfrac{\hbar\Delta}{2}\text{diag}(3,-3,9)\), \(\Delta>0\). Em \(t=0\), \(|\psi(0)\rangle=\tfrac1{\sqrt2}(|e_1\rangle+|e_3\rangle)\), onde \(|e_j\rangle\) são autovetores com \(e_1\lt e_2\lt e_3\). Qual o menor \(t'>0\) em que \(|\psi(t')\rangle\) é ortogonal a \(|\psi(0)\rangle\)?</p>`,
opcoes:[R`\(\dfrac{\pi}{6\Delta}\)`,R`\(\dfrac{2\pi}{9\Delta}\)`,R`\(\dfrac{2\pi}{\Delta}\)`,R`\(\dfrac{\pi}{9\Delta}\)`,R`\(\dfrac{\pi}{3\Delta}\)`],
dica:R`Atenção à ordem: \(e_1=-\tfrac32\hbar\Delta\), \(e_2=\tfrac32\hbar\Delta\), \(e_3=\tfrac92\hbar\Delta\).`,
solucao:R`<p>\(\langle\psi(0)|\psi(t)\rangle=\tfrac12(e^{-ie_1t/\hbar}+e^{-ie_3t/\hbar})=0\Rightarrow(e_3-e_1)t/\hbar=\pi\Rightarrow6\Delta t=\pi\Rightarrow t'=\dfrac{\pi}{6\Delta}\).</p>`});

// ============ 2022 — online ============
P({id:'mq-2022-1', ano:2022, prova:'EUF 2022 (online) · MQ1A', topicos:['angm','post'],
enunciado:R`<p>Um sistema bidimensional tem \(H=a(2\sigma_x+\sigma_z)\), com \(a>0\) e \(\sigma\) as matrizes de Pauli. A energia do estado fundamental é:</p>`,
opcoes:[R`\(-\sqrt5\,a\)`,R`\(-\sqrt2\,a\)`,R`\(-\sqrt6\,a\)`,R`\(-\sqrt3\,a\)`,R`\(-2a\)`],
dica:R`\(\vec b\cdot\vec\sigma\) tem autovalores \(\pm|\vec b|\).`,
solucao:R`<p>\(H=a\begin{pmatrix}1&2\\2&-1\end{pmatrix}\): \(E=\pm a\sqrt{1+4}\). Fundamental: \(-\sqrt5\,a\).</p>`});

P({id:'mq-2022-2', ano:2022, prova:'EUF 2022 (online) · MQ2A', topicos:['post'],
enunciado:R`<p>Num espaço tridimensional, \(H|\phi_n\rangle=n^2\epsilon_0|\phi_n\rangle\) e \(A|\alpha_m\rangle=ma|\alpha_m\rangle\) (\(n,m=1,2,3\)), com \(|\alpha_1\rangle=\tfrac1{\sqrt3}|\phi_1\rangle+\sqrt{\tfrac23}|\phi_2\rangle\), \(|\alpha_2\rangle=\sqrt{\tfrac23}|\phi_1\rangle-\tfrac1{\sqrt3}|\phi_2\rangle\), \(|\alpha_3\rangle=|\phi_3\rangle\). O estado é \(|\psi\rangle=\tfrac12|\phi_1\rangle-\tfrac1{\sqrt2}|\phi_2\rangle-\tfrac12|\phi_3\rangle\). Mede-se \(E\) e obtém-se \(4\epsilon_0\). Qual a probabilidade de, em seguida, obter \(A=a\)?</p>`,
opcoes:[R`2/3`,R`1/3`,R`1/2`,R`1/6`,R`1`],
dica:R`Depois da medida, o estado é \(|\phi_2\rangle\).`,
solucao:R`<p>\(4\epsilon_0\Rightarrow n=2\). \(P(A=a)=|\langle\alpha_1|\phi_2\rangle|^2=2/3\). (O estado inicial não importa, pois colapsou.)</p>`});

P({id:'mq-2022-3', ano:2022, prova:'EUF 2022 (online) · MQ3A', topicos:['evol'],
enunciado:R`<p>Num espaço tridimensional, \(H|\phi_n\rangle=n\hbar\omega|\phi_n\rangle\) (\(n=1,2,3\)). Em \(t=0\), \(|\psi(0)\rangle=\tfrac12|\phi_1\rangle+\tfrac12|\phi_2\rangle+\tfrac1{\sqrt2}|\phi_3\rangle\). Qual a probabilidade \(P(t)\) de encontrar o sistema em \(|\alpha\rangle=\tfrac1{\sqrt2}(|\phi_1\rangle-|\phi_2\rangle)\)?</p>`,
opcoes:[R`\(\tfrac14(1-\cos\omega t)\)`,R`\(\tfrac14(1+\cos\omega t)\)`,R`\(\tfrac14(1-\sin\omega t)\)`,R`\(\tfrac12(1+\sin\omega t)\)`,R`\(\tfrac12(1+\cos\omega t)\)`],
dica:R`Só as componentes 1 e 2 contribuem; a fase relativa é \(e^{-i\omega t}\).`,
solucao:R`<p>\(\langle\alpha|\psi(t)\rangle=\dfrac1{2\sqrt2}(e^{-i\omega t}-e^{-2i\omega t})\). \(P=\dfrac18|1-e^{-i\omega t}|^2=\dfrac18(2-2\cos\omega t)=\dfrac14(1-\cos\omega t)\). Note que \(P(0)=0\).</p>`});

P({id:'mq-2022-4', ano:2022, prova:'EUF 2022 (online) · MQ4A', topicos:['hidro','angm'],
enunciado:R`<p>Uma partícula em 3D sob \(V(r)=0\) para \(r\le a\) e \(\infty\) para \(r>a\). As autofunções são \(R_{nl}(r)Y_{lm}\); para \(l=0\), \(R=\dfrac1r[A\cos(k_nr)+B\sin(k_nr)]\).</p><p>I. \(V(r)\) é um potencial central.<br>II. \(H\) e \(L_x\) são observáveis compatíveis.<br>III. Para \(l=0\), as condições de contorno dão \(A\ne0\), \(B=0\) e \(k_na=(2n+1)\pi/2\).</p>`,
opcoes:[R`Apenas I e II estão corretas.`,R`Apenas I está correta.`,R`Apenas II está correta.`,R`Apenas I e III estão corretas.`,R`I, II e III estão corretas.`],
dica:R`\(\cos(kr)/r\) diverge em \(r=0\) de modo inaceitável.`,
solucao:R`<p>I: sim. II: potencial central comuta com todas as componentes de \(\vec L\). III: regularidade na origem exige \(A=0\); \(R(a)=0\) exige \(\sin(ka)=0\Rightarrow k_na=n\pi\). Falsa.</p>`});

P({id:'mq-2022-5', ano:2022, prova:'EUF 2022 (online) · MQ5A', topicos:['osch','poco'],
enunciado:R`<p>Uma partícula tem \(\psi(x,t)=Axe^{-Bx^2}e^{-iCt/\hbar}\) para \(x>0\) e \(\psi=0\) para \(x\lt0\) (A, B, C reais), solução normalizada da equação de Schrödinger.</p><p>I. \(\psi\) é autofunção de energia.<br>II. \(V(x)=C+\dfrac{\hbar^2}{m}(-3B+2B^2x^2)\) para \(x>0\) e \(\infty\) para \(x\lt0\).<br>III. O valor esperado da energia nesse estado é certamente o menor valor que pode ser observado.</p><p>Útil: \(\dfrac{d^2}{dx^2}(xe^{-Bx^2})=-B(6-4Bx^2)xe^{-Bx^2}\).</p>`,
opcoes:[R`Todas estão corretas.`,R`Apenas I está correta.`,R`Apenas II está correta.`,R`Apenas III está correta.`,R`Nenhuma está correta.`],
dica:R`Dependência temporal só por fase ⇒ estacionário. Isole \(V\) na equação de Schrödinger.`,
solucao:R`<p>I: \(\psi=\phi(x)e^{-iCt/\hbar}\), estacionário com \(E=C\). II: \(V=C+\dfrac{\hbar^2}{2m}\dfrac{\phi''}{\phi}=C-\dfrac{\hbar^2B}{2m}(6-4Bx^2)\), confere. III: é o "meio oscilador" (parede em \(x=0\)), e \(\phi\) não tem nós em \(x>0\): é o fundamental.</p>`});

P({id:'mq-2022-6', ano:2022, prova:'EUF 2022 (online) · MQ6A', topicos:['osch','evol'],
enunciado:R`<p>Um oscilador harmônico 1D de frequência \(\omega\) tem \(\psi(x,0)=\tfrac1{\sqrt2}[\phi_r(x)+\phi_s(x)]\), \(r\lt s\). Use \(\int\phi_r^*x\phi_s=\sqrt{\frac{\hbar}{2m\omega}}(\sqrt s\,\delta_{r,s-1}+\sqrt{s+1}\,\delta_{r,s+1})\). Então \(d\langle x\rangle/dt\) é:</p>`,
opcoes:[R`\(-\sqrt{\dfrac{s\hbar\omega}{2m}}\sin\omega t\;\delta_{r,s-1}\)`,R`\(0\) para quaisquer \(r\) e \(s\)`,R`\(-\sqrt{\dfrac{s\hbar\omega}{2m}}\cos\omega t\;\delta_{r,s-1}\)`,R`\(-\sqrt{\dfrac{s\hbar\omega}{2m}}\sin\omega t\;\delta_{r,s+1}\)`,R`\(-\sqrt{\dfrac{s\hbar\omega}{2m}}\cos\omega t\;\delta_{r,s+1}\)`],
dica:R`\(\langle x\rangle(t)=\text{Re}\left[x_{rs}e^{-i(E_s-E_r)t/\hbar}\right]\) e, como \(r\lt s\), só \(\delta_{r,s-1}\) sobrevive.`,
solucao:R`<p>\(\langle x\rangle=x_{rs}\cos((s-r)\omega t)\) com \(x_{rs}=\sqrt{\frac{s\hbar}{2m\omega}}\delta_{r,s-1}\). Derivando: \(-\omega\sqrt{\frac{s\hbar}{2m\omega}}\sin\omega t\,\delta_{r,s-1}=-\sqrt{\frac{s\hbar\omega}{2m}}\sin\omega t\,\delta_{r,s-1}\).</p>`});

P({id:'mq-2022-7', ano:2022, prova:'EUF 2022 (online) · MQ7A', topicos:['poco'],
enunciado:R`<p>Sobre potenciais unidimensionais:</p><p>I. Potenciais confinantes (\(V\to\infty\) para \(|x|\to\infty\)) sempre têm algum estado ligado de energia negativa.<br>II. Uma partícula incidindo numa barreira com energia menor que a altura sempre tem probabilidade de tunelar, se a altura não for infinita e a largura for finita.<br>III. Espectro contínuo só ocorre se o potencial não crescer indefinidamente em pelo menos um sentido de \(x\).</p>`,
opcoes:[R`Apenas II e III estão corretas.`,R`Apenas I está correta.`,R`Apenas II está correta.`,R`Apenas III está correta.`,R`Apenas I e III estão corretas.`],
dica:R`Pense em \(V=\tfrac12kx^2\), que nunca é negativo.`,
solucao:R`<p>I: falsa (o oscilador só tem energias positivas; o sinal depende do zero escolhido). II: correta (a função de onda decai exponencialmente, mas não se anula). III: correta (estados não normalizáveis exigem que a partícula possa escapar ao infinito).</p>`});

P({id:'mq-2022-8', ano:2022, prova:'EUF 2022 (online) · MQ8A', topicos:['hidro','evol'],
enunciado:R`<p>Um elétron do hidrogênio (sem spin) tem \(\psi(\vec r,0)=N[7\phi_{100}-3\phi_{211}-5\phi_{210}+i\phi_{21-1}]\). Sobre \(\langle E\rangle\), \(\langle L_z\rangle\), \(\langle L^2\rangle\) e \(\langle\vec r\rangle\):</p>`,
opcoes:[R`Apenas \(\langle\vec r\rangle\) varia no tempo.`,R`Apenas \(\langle E\rangle\) não varia.`,R`Apenas \(\langle L_z\rangle\) e \(\langle L^2\rangle\) não variam.`,R`Apenas \(\langle E\rangle\) e \(\langle L^2\rangle\) não variam.`,R`Todas variam, pois o estado não é autoestado de energia.`],
dica:R`Observáveis que comutam com \(H\) têm valor esperado constante.`,
solucao:R`<p>\(H\), \(L_z\) e \(L^2\) comutam com \(H\): constantes. \(\langle\vec r\rangle\) tem termos cruzados entre \(n=1\) e \(n=2\) (por exemplo \(\langle100|z|210\rangle\ne0\)), que oscilam com \(e^{-i(E_2-E_1)t/\hbar}\).</p>`});

// ============ 2022 — 2ª aplicação ============
P({id:'mq-2022b-1', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q57 [mq1a]', topicos:['post','evol'],
enunciado:R`<p>Dinâmica quântica 1D com potencial independente do tempo \(V(x)\).</p><p>I. Se o estado for estacionário, a probabilidade de encontrar a partícula entre \(x\) e \(x+dx\) não varia no tempo.<br>II. Se \(V\) tem mínimo global \(V_{\min}\), os autovalores de energia podem ser tanto <b>iguais</b> quanto <b>maiores</b> que \(V_{\min}\).<br>III. Se \(V=V_0\) constante, \(\psi(x,t)\) é necessariamente uma onda plana.</p>`,
opcoes:[R`Apenas I está correta.`,R`Apenas II está correta.`,R`Apenas I e II estão corretas.`,R`Apenas III está correta.`,R`I, II e III estão corretas.`],
dica:R`\(E=V_{\min}\) exigiria \(\langle T\rangle=0\), ou seja \(\psi'=0\) em todo lugar.`,
solucao:R`<p>I: \(|\psi|^2=|\phi(x)|^2\), constante. II: \(E=\langle T\rangle+\langle V\rangle>V_{\min}\) estritamente (energia de ponto zero). III: qualquer superposição de ondas planas (um pacote) é solução.</p>`});

P({id:'mq-2022b-2', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q59 [mq2a]', topicos:['osch','evol'],
enunciado:R`<p>Partícula no oscilador \(V=m\omega^2x^2/2\), com função de onda \(\psi(x,t)\).</p><p>I. \(|\psi(x,t)|^2=|\psi(x,t+2\pi/\omega)|^2\) para qualquer \(\psi\).<br>II. \(\langle V\rangle(t)\) não varia no tempo, qualquer que seja \(\psi(x,0)\).<br>III. \(\langle x\rangle(t)=0\) sempre, por simetria do potencial.</p>`,
opcoes:[R`Apenas I está correta.`,R`Apenas I e II estão corretas.`,R`Apenas II está correta.`,R`Apenas III está correta.`,R`Apenas I e III estão corretas.`],
dica:R`Em \(T=2\pi/\omega\), cada termo ganha a fase \(e^{-i(n+\frac12)2\pi}=-1\).`,
solucao:R`<p>I: todas as componentes ganham o mesmo fator −1 (fase global): densidade idêntica. II: \(\langle V\rangle\) oscila para superposições (só \(\langle H\rangle\) é constante). III: um estado coerente oscila, \(\langle x\rangle=x_0\cos\omega t\).</p>`});

P({id:'mq-2022b-3', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q61 [mq3a]', topicos:['post'],
enunciado:R`<p>O observável \(\hat A\) tem autovalores não degenerados \(a_1,a_2,a_3\) com autovetores \(|a_i\rangle\). Nessa base, \(H=\dfrac15\begin{pmatrix}3e_1&4e_1&0\\4e_1&-3e_1&0\\0&0&5e_2\end{pmatrix}\), com \(e_2>e_1>0\). No estado fundamental, quais as probabilidades \(P_i\) de obter \(a_i\)?</p>`,
opcoes:[R`\(P_1=1/5\) e \(P_2=4/5\)`,R`\(P_1=4/5\) e \(P_3=0\)`,R`\(P_1=0\) e \(P_3=1/5\)`,R`\(P_1=1/5\) e \(P_3=4/5\)`,R`\(P_2=1/5\) e \(P_3=4/5\)`],
dica:R`Bloco \(2\times2\) tem autovalores \(\pm e_1\); o fundamental é \(-e_1\).`,
solucao:R`<p>Para \(-e_1\): \(3x+4y=-5x\Rightarrow y=-2x\), autovetor \((1,-2)/\sqrt5\). \(P_1=1/5\), \(P_2=4/5\), \(P_3=0\).</p>`});

P({id:'mq-2022b-4', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q63 [mq4a]', topicos:['spin','evol'],
enunciado:R`<p>Uma partícula de spin 1/2 tem \(H=\dfrac{\hbar\Delta}{2}\hat\sigma_z\), \(\Delta>0\).</p><p>I. \(\langle S_z\rangle\) é independente do tempo <i>apenas se</i> o estado inicial for autoestado de \(\hat\sigma_z\).<br>II. \(\langle S_x\rangle\) é sempre zero, qualquer que seja o estado inicial.<br>III. A cada \(\tau=6\pi/\Delta\) o vetor de estado retorna ao original: \(|\psi(t+6\pi/\Delta)\rangle=|\psi(t)\rangle\).</p>`,
opcoes:[R`I, II e III estão incorretas.`,R`Apenas I está correta.`,R`Apenas II está correta.`,R`Apenas III está correta.`,R`I, II e III estão corretas.`],
dica:R`Precessão de Larmor em torno de \(z\). O spinor só volta a si mesmo após \(4\pi/\Delta\).`,
solucao:R`<p>I: \([H,S_z]=0\), então \(\langle S_z\rangle\) é sempre constante ("apenas se" é falso). II: \(\langle S_x\rangle\) precessa, \(\propto\cos(\Delta t+\phi)\). III: após \(6\pi/\Delta\) as fases são \(e^{\mp3\pi i}=-1\): o estado vira \(-|\psi\rangle\) (mesmo raio físico, mas não o mesmo vetor).</p>`});

P({id:'mq-2022b-5', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q65 [mq5a]', topicos:['post'],
enunciado:R`<p>Num espaço bidimensional, \(\hat O=|\Psi\rangle\langle\Phi|\), com \(|\Psi\rangle=|1\rangle+i|2\rangle\) e \(|\Phi\rangle=2|1\rangle-i|2\rangle\) (não normalizados).</p><p>I. \(\hat O\) é hermitiano.<br>II. \(\text{Tr}\,\hat O=1\).<br>III. Para \(|\chi\rangle=|1\rangle-2i|2\rangle\), \(\hat O|\chi\rangle=4|\Psi\rangle\).</p>`,
opcoes:[R`Apenas II e III estão corretas.`,R`Apenas II está correta.`,R`Apenas III está correta.`,R`Apenas I e II estão corretas.`,R`I, II e III estão corretas.`],
dica:R`\(\text{Tr}(|\Psi\rangle\langle\Phi|)=\langle\Phi|\Psi\rangle\), e \(\langle\Phi|=2\langle1|+i\langle2|\).`,
solucao:R`<p>I: \(\hat O^\dagger=|\Phi\rangle\langle\Psi|\ne\hat O\). II: \(\langle\Phi|\Psi\rangle=2+i\cdot i=1\). III: \(\langle\Phi|\chi\rangle=2+i(-2i)=4\Rightarrow\hat O|\chi\rangle=4|\Psi\rangle\).</p>`});

P({id:'mq-2022b-6', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q67 [mq6a]', topicos:['post'],
enunciado:R`<p>Num espaço tridimensional, \(A=a\begin{pmatrix}1&0&0\\0&1&\sqrt3\\0&\sqrt3&-1\end{pmatrix}\) e \(|\psi\rangle=\tfrac12\begin{pmatrix}0\\-1\\\sqrt3\end{pmatrix}\), \(a>0\).</p><p>I. \(A\) tem um autovalor degenerado igual a \(a\).<br>II. É possível obter \(2a\) numa medida de \(A\).<br>III. \(|\psi\rangle\) é autovetor de \(A\) com autovalor \(2a\).</p>`,
opcoes:[R`Apenas II está correta.`,R`Apenas I está correta.`,R`Apenas I e II estão corretas.`,R`Apenas II e III estão corretas.`,R`Apenas I e III estão corretas.`],
dica:R`O bloco inferior tem traço 0 e determinante −4.`,
solucao:R`<p>Autovalores: \(a\) e \(\pm2a\), todos distintos (I falsa, II correta). \(A|\psi\rangle=\tfrac a2(0,\,2,\,-2\sqrt3)=-2a|\psi\rangle\): autovetor de \(-2a\) (III falsa).</p>`});

P({id:'mq-2022b-7', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q69 [mq7a]', topicos:['evol'],
enunciado:R`<p>Num espaço tridimensional, \(H|\phi_n\rangle=2n\hbar\omega|\phi_n\rangle\), com \(|\phi_1\rangle=\tfrac12|\alpha_1\rangle+\tfrac{\sqrt3}2|\alpha_3\rangle\), \(|\phi_2\rangle=\tfrac{\sqrt3}2|\alpha_1\rangle-\tfrac12|\alpha_3\rangle\), \(|\phi_3\rangle=|\alpha_2\rangle\). Em \(t=0\), \(|\psi\rangle=|\alpha_1\rangle\). Determine \(|\psi(t_1)\rangle\) para \(t_1=\pi/(2\omega)\).</p>`,
opcoes:[R`\(-\tfrac12|\phi_1\rangle+\tfrac{\sqrt3}2|\phi_2\rangle\)`,R`\(+\tfrac12|\phi_1\rangle+\tfrac{\sqrt3}2|\phi_2\rangle\)`,R`\(+\tfrac{\sqrt3}2|\phi_1\rangle+\tfrac12|\phi_2\rangle\)`,R`\(-\tfrac{\sqrt3}2|\phi_1\rangle+\tfrac12|\phi_2\rangle\)`,R`\(|\phi_1\rangle\)`],
dica:R`Inverta: \(|\alpha_1\rangle=\tfrac12|\phi_1\rangle+\tfrac{\sqrt3}2|\phi_2\rangle\). Fases \(e^{-i2n\omega t_1}=(-1)^n\).`,
solucao:R`<p>\(|\psi(t_1)\rangle=\tfrac12(-1)|\phi_1\rangle+\tfrac{\sqrt3}2(+1)|\phi_2\rangle\).</p>`});

P({id:'mq-2022b-8', ano:2022, prova:'EUF 2022 (2ª aplicação) · Q71 [mq8a]', topicos:['hidro','angm'],
enunciado:R`<p>Uma partícula em \(V(r)=C/r\) tem energias que dependem só de \(n\) e autofunções \(R_{nl}Y_{lm}\). Em \(t=0\): \(\Phi=\tfrac1{\sqrt2}R_{1,1}Y_{1,-1}+\tfrac12R_{2,1}Y_{1,0}+\tfrac12R_{2,2}Y_{2,1}\).</p><p>I. A probabilidade de medir \(E_2\) é 1/2.<br>II. A probabilidade de medir \(L_z=-\hbar\) é 1/2.<br>III. Se uma medida de \(L^2\) desse \(2\hbar^2\), o estado logo após seria \(\tfrac1{\sqrt2}R_{1,1}Y_{1,-1}+\tfrac1{\sqrt2}R_{2,1}Y_{1,0}\).</p>`,
opcoes:[R`Apenas I e II estão corretas.`,R`Apenas I está correta.`,R`Apenas II está correta.`,R`Apenas I e III estão corretas.`,R`I, II e III estão corretas.`],
dica:R`Na III, projete em \(l=1\) e renormalize.`,
solucao:R`<p>I: \(\tfrac14+\tfrac14=\tfrac12\). II: só o termo \(m=-1\): \(\tfrac12\). III: projeção \(\propto\tfrac1{\sqrt2}R_{11}Y_{1,-1}+\tfrac12R_{21}Y_{10}\); renormalizado: \(\sqrt{\tfrac23}\) e \(\tfrac1{\sqrt3}\), não \(\tfrac1{\sqrt2}\) cada. (Observação: \(R_{1,1}\) não existe no hidrogênio, pois \(l\le n-1\); a questão ignora isso.)</p>`});

// ============ 2023 — 1ª aplicação ============
P({id:'mq-2023-1', ano:2023, prova:'EUF 2023 · Q57 [mq1a]', topicos:['spin','post'],
enunciado:R`<p>Átomos com momento angular orbital nulo e spin 1/2 estão no estado \(|\psi\rangle=\cos\theta|+\rangle+\sin\theta|-\rangle\), onde \(|\pm\rangle\) são autoestados de \(\hat S_z\). Qual a probabilidade de obter \(\hbar/2\) numa medida de \(S_y\) feita logo após uma medida de \(S_z\)?</p>`,
opcoes:[R`1/2`,R`\(\cos^2\theta\)`,R`\(\sin^2\theta\)`,R`\(1/2+\sin\theta\cos\theta\)`,R`0`],
dica:R`A medida de \(S_z\) deixa o átomo em \(|+\rangle\) ou \(|-\rangle\).`,
solucao:R`<p>Em qualquer dos dois, \(|\langle\pm_y|\pm_z\rangle|^2=1/2\). O \(\theta\) some: a primeira medida apagou a coerência.</p>`});

P({id:'mq-2023-2', ano:2023, prova:'EUF 2023 · Q59 [mq2a]', topicos:['poco','evol'],
enunciado:R`<p>Partícula num poço infinito 1D com autovalores \(E_n\) e autofunções \(\psi_n\).</p><p>I. Se em \(t=0\) o estado é \(\psi_1\), a densidade de probabilidade não varia no tempo.<br>II. Se em \(t=0\) o estado é \(\tfrac1{\sqrt2}(\psi_1+\psi_2)\), a densidade varia no tempo.<br>III. A densidade varia mais rapidamente se o estado inicial for \(\tfrac1{\sqrt2}(\psi_2+\psi_3)\) do que se for \(\tfrac1{\sqrt2}(\psi_1-\psi_4)\).</p>`,
opcoes:[R`Apenas I e II estão corretas.`,R`Apenas I está correta.`,R`Apenas II está correta.`,R`Apenas III está correta.`,R`Apenas II e III estão corretas.`],
dica:R`Frequência do termo cruzado: \((E_m-E_n)/\hbar\propto m^2-n^2\).`,
solucao:R`<p>I e II corretas. III: \(3^2-2^2=5\) contra \(4^2-1^2=15\); o par (1,4) oscila 3 vezes mais rápido. Falsa.</p>`});

P({id:'mq-2023-3', ano:2023, prova:'EUF 2023 · Q61 [mq3a]', topicos:['angm'],
enunciado:R`<p>\(\hat H=\alpha(\hat J_x^2+\hat J_y^2)+\beta\hat J_z^2\), com \(\beta>\alpha>0\); \(|j,m\rangle\) são autoestados comuns de \(J^2\) e \(J_z\).</p><p>I. As energias são \([\alpha j(j+1)+(\beta-\alpha)m^2]\hbar^2\).<br>II. \(\langle\hat J_x\rangle\) no autoestado de maior energia é 0.<br>III. \(\hat J_x\) e \(\hat J_z\) são compatíveis.</p>`,
opcoes:[R`Apenas I e II estão corretas.`,R`Apenas I está correta.`,R`Apenas II está correta.`,R`Apenas III está correta.`,R`Apenas II e III estão corretas.`],
dica:R`\(J_x^2+J_y^2=J^2-J_z^2\).`,
solucao:R`<p>I: correta. II: o máximo é \(|j,\pm j\rangle\), e \(\langle j,m|J_x|j,m\rangle=0\) para todo \(m\) (\(J_x=(J_++J_-)/2\)). III: \([J_x,J_z]=-i\hbar J_y\ne0\).</p>`});

P({id:'mq-2023-4', ano:2023, prova:'EUF 2023 · Q63 [mq4a]', topicos:['post','evol'],
enunciado:R`<p>Na base \(\{|u_i\rangle\}\): \(\hat H=\hbar\omega_0\,\text{diag}(1,2,2)\), \(\hat A=a\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix}\), \(\hat B=b\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}\). Em \(t=0\): \(|\psi\rangle=\tfrac1{\sqrt2}|u_1\rangle+\tfrac12|u_2\rangle+\tfrac12|u_3\rangle\).</p>`,
opcoes:[R`As energias possíveis em \(t=0\) são \(\hbar\omega_0\) e \(2\hbar\omega_0\), ambas com probabilidade 1/2.`,R`Os resultados de \(\hat A\) são \(a\) e \(-a\), ambos com probabilidade 1/2.`,R`Os resultados de \(\hat B\) são \(b\) (prob. 1/4) e \(-b\) (prob. 3/4).`,R`Sem medidas, \(|\psi(t)\rangle=\tfrac1{\sqrt2}e^{-i\omega_0t}|u_1\rangle+\tfrac12e^{-2i\omega_0t}|u_2\rangle+\tfrac12e^{-i\omega_0t}|u_3\rangle\).`,R`Sem medidas, \(\langle E\rangle\) pode mudar no tempo.`],
dica:R`\(|u_2\rangle\) e \(|u_3\rangle\) têm a mesma energia.`,
solucao:R`<p>\(P(\hbar\omega_0)=1/2\), \(P(2\hbar\omega_0)=1/4+1/4=1/2\). (Para conferir: \(\hat A\) tem autovalores \(a,a,-a\), e o estado tem \(P(a)=1\), porque \(|u_2\rangle+|u_3\rangle\) é autovetor de \(+a\). \(\hat B\) dá \(b\) com probabilidade \(\tfrac12(\tfrac1{\sqrt2}+\tfrac12)^2+\tfrac14\ne\tfrac14\). Na alternativa da evolução, a fase de \(|u_3\rangle\) deveria ser \(e^{-2i\omega_0t}\).)</p>`});

P({id:'mq-2023-5', ano:2023, prova:'EUF 2023 · Q65 [mq5a]', topicos:['post'], fig:'fig/mq_y23_q65.png',
enunciado:R`<p>A função de onda de uma partícula em 1D é a do gráfico (escala linear; \(\Psi=0\) para \(x\le0\) e \(x\ge5\)). Qual a probabilidade de encontrar a partícula em \(2\le x\le4\)?</p>`,
opcoes:[R`13/16`,R`17/64`,R`25/64`,R`3/8`,R`\(\sqrt{5/8}\)`],
dica:R`Some \(|\Psi|^2\Delta x\) em cada degrau; normalize no fim.`,
solucao:R`<p>Alturas: 1 (0–2), 2 (2–3), 3 (3–4), 1 (4–5). Total: \(1+1+4+9+1=16\). Entre 2 e 4: \(4+9=13\). \(P=13/16\).</p>`});

P({id:'mq-2023-6', ano:2023, prova:'EUF 2023 · Q67 [mq6a]', topicos:['angm','post'],
enunciado:R`<p>A parte angular da função de onda num potencial central é \(\psi=\tfrac1{\sqrt{15}}[3Y_{42}-Y_{62}+Y_{31}-2Y_{10}]\). Qual a probabilidade de encontrar a partícula num estado com \(m=2\)?</p>`,
opcoes:[R`2/3`,R`3/5`,R`7/15`,R`1/3`,R`0`],
dica:R`Some os quadrados dos coeficientes com \(m=2\).`,
solucao:R`<p>\((9+1)/15=2/3\).</p>`});

P({id:'mq-2023-7', ano:2023, prova:'EUF 2023 · Q69 [mq7a]', topicos:['hidro'],
enunciado:R`<p>O positrônio é um átomo formado por elétron e pósitron. Se a energia do fundamental do hidrogênio é \(-E_0\), a energia do primeiro estado excitado do positrônio (\(n=2\)) é:</p>`,
opcoes:[R`\(-E_0/8\)`,R`\(-E_0\)`,R`\(-E_0/2\)`,R`\(-4E_0\)`,R`\(-8E_0\)`],
dica:R`\(\mu=m_e/2\Rightarrow E_n=-\dfrac{E_0}{2n^2}\).`,
solucao:R`<p>\(E_2=-\dfrac{E_0}{2\cdot4}=-\dfrac{E_0}{8}\).</p>`});

P({id:'mq-2023-8', ano:2023, prova:'EUF 2023 · Q71 [mq8a]', topicos:['osch','evol'],
enunciado:R`<p>Oscilador harmônico com \(\hat H=(a^\dagger a+\tfrac12)\hbar\omega\). Em \(t=0\), \(|\psi\rangle=\tfrac1{\sqrt2}(|0\rangle+|1\rangle)\). O valor esperado \(\langle\hat x(t)\rangle\) é:</p>`,
opcoes:[R`\(\sqrt{\dfrac{\hbar}{2m\omega}}\cos(\omega t)\)`,R`\(\sqrt{\dfrac{\hbar}{2m\omega}}\sin(\omega t)\)`,R`\(\sqrt{\dfrac{\hbar}{2m\omega}}\cos(\tfrac32\omega t)\)`,R`\(\sqrt{\dfrac{\hbar}{2m\omega}}\sin(\tfrac32\omega t)\)`,R`\(2\sqrt{\dfrac{\hbar}{2m\omega}}\cos(\omega t)\)`],
dica:R`\(\hat x=\sqrt{\hbar/2m\omega}(a+a^\dagger)\), \(\langle0|x|1\rangle=\sqrt{\hbar/2m\omega}\).`,
solucao:R`<p>\(\langle x\rangle=2\cdot\tfrac12\,\text{Re}\left[x_{01}e^{-i\omega t}\right]=\sqrt{\dfrac{\hbar}{2m\omega}}\cos\omega t\). A frequência é a diferença das energias, \(\omega\), não \(\tfrac32\omega\).</p>`});

// ============ 2023 — 2ª aplicação ============
P({id:'mq-2023b-1', ano:2023, prova:'EUF 2º/2023 · Q57 [mq1a]', topicos:['post'], fig:'fig/mq_b23_q57.png',
enunciado:R`<p>A figura mostra três possibilidades para \(|\Psi(x)|^2\) de uma partícula em 1D: triângulos com pico em \(x=a\), começando em 0 e terminando em \(x=b\), com \(b=2a\), \(b\lt2a\) e \(b>2a\). Marque a afirmativa correta.</p>`,
opcoes:[R`O valor esperado da posição está à direita da posição mais provável se \(b>2a\).`,R`O valor esperado está à esquerda da posição mais provável se \(b>2a\).`,R`O valor esperado está à direita da posição mais provável se \(b\lt2a\).`,R`O valor esperado está à esquerda da posição mais provável se \(b=2a\).`,R`O valor esperado coincide com a posição mais provável, qualquer que seja \(b\).`],
dica:R`A média de um triângulo de vértices \(0,a,b\) é \((0+a+b)/3\).`,
solucao:R`<p>\(\langle x\rangle=\dfrac{a+b}3\), comparado com o pico \(a\): \(\langle x\rangle>a\iff b>2a\). A cauda mais longa puxa a média para o seu lado; para \(b=2a\) há simetria e eles coincidem.</p>`});

P({id:'mq-2023b-2', ano:2023, prova:'EUF 2º/2023 · Q59 [mq2a]', topicos:['poco','post'],
enunciado:R`<p>Num poço infinito de largura \(L\) centrado na origem (\(-L/2\lt x\lt L/2\)), a partícula está no fundamental \(\Psi=\sqrt{2/L}\cos(\pi x/L)\). Os valores de \(\langle x\rangle\), \(\langle p\rangle\), \(\langle x^2\rangle\), \(\langle p^2\rangle\) e \(\sigma_x\sigma_p\) são, respectivamente:</p>`,
opcoes:[R`\(0;\ 0;\ \dfrac{0{,}32L^2}{\pi^2};\ \dfrac{\pi^2\hbar^2}{L^2};\ 0{,}57\hbar\)`,R`\(0;\ 0;\ \dfrac{0{,}16L^2}{\pi^2};\ \dfrac{\pi^2\hbar^2}{L^2};\ 0{,}40\hbar\)`,R`\(0;\ 0;\ \dfrac{0{,}32L^2}{\pi^2};\ \dfrac{\pi^2\hbar^2}{L^2};\ 0{,}40\hbar\)`,R`\(0;\ 0;\ \dfrac{0{,}16L^2}{\pi^2};\ \dfrac{\pi^2\hbar^2}{L^2};\ 0{,}57\hbar\)`,R`\(0;\ \sqrt{0{,}1}\dfrac{\pi\hbar}{L};\ \dfrac{0{,}32L^2}{\pi^2};\ 1{,}1\dfrac{\pi^2\hbar^2}{L^2};\ 0{,}57\hbar\)`],
dica:R`\(\langle x^2\rangle=L^2\left(\dfrac1{12}-\dfrac1{2\pi^2}\right)\); \(\langle p^2\rangle=2mE_1\).`,
solucao:R`<p>Paridade: \(\langle x\rangle=\langle p\rangle=0\). \(\langle x^2\rangle=L^2(0{,}0833-0{,}0507)=0{,}0327L^2=\dfrac{0{,}32L^2}{\pi^2}\). \(\langle p^2\rangle=\dfrac{\pi^2\hbar^2}{L^2}\). \(\sigma_x\sigma_p=0{,}181L\cdot\dfrac{\pi\hbar}{L}\approx0{,}57\hbar\ge\hbar/2\).</p>`});

P({id:'mq-2023b-3', ano:2023, prova:'EUF 2º/2023 · Q61 [mq3a]', topicos:['poco'], fig:'fig/mq_b23_q61.png',
enunciado:R`<p>Uma partícula de massa \(m\) e energia \(E\) incide numa barreira retangular de altura \(V_0\) e largura \(L\). O gráfico mostra a transmissão \(T\) em função de \(E/V_0\): a função degrau (linha grossa) e curvas para \(\sqrt{2mV_0}L/\hbar=2\), 5 e 10. Indique V ou F:</p><p>(1) O degrau corresponde ao caso quântico e as demais ao clássico.<br>(2) Diferente da clássica, a partícula quântica pode atravessar a barreira mesmo com \(E\lt V_0\).<br>(3) Diferente da clássica, a partícula quântica pode ser refletida mesmo com \(E>V_0\).<br>(4) A transmissão quântica se aproxima do comportamento clássico para partículas de maior massa: vai a zero para \(E/V_0\lt1\) e atinge 1 em cada vez mais pontos para \(E/V_0>1\).</p>`,
opcoes:[R`F, V, V, V`,R`F, V, V, F`,R`F, V, F, V`,R`V, F, F, F`,R`V, F, V, F`],
dica:R`O parâmetro \(\sqrt{2mV_0}L/\hbar\) cresce com a massa; veja para onde as curvas tendem.`,
solucao:R`<p>(1) F: o degrau é o clássico. (2) V: tunelamento. (3) V: reflexão acima da barreira, com ressonâncias \(T=1\) quando \(k'L=n\pi\). (4) V: maior \(\sqrt{2mV_0}L/\hbar\) faz a curva tender ao degrau.</p>`});

P({id:'mq-2023b-4', ano:2023, prova:'EUF 2º/2023 · Q63 [mq4a]', topicos:['osch','post'],
enunciado:R`<p>Um oscilador tem \(|\psi\rangle=\sqrt{0{,}5}e^{i\theta_0}|0\rangle+\sqrt{0{,}3}e^{i\theta_1}|1\rangle+R_2e^{i\theta_2}|2\rangle\), normalizado, com \(R_2>0\). Então \(R_2\) e \(\langle E\rangle\) valem:</p>`,
opcoes:[R`\(\sqrt{0{,}2}\) e \(1{,}2\hbar\omega\)`,R`\(0{,}2\) e \(0{,}80\hbar\omega\)`,R`\(0{,}2\) e \(1{,}2\hbar\omega\)`,R`\(\sqrt{0{,}2}\) e \(0{,}80\hbar\omega\)`,R`\(0{,}04\) e \(0{,}70\hbar\omega\)`],
dica:R`\(\sum|c_n|^2=1\).`,
solucao:R`<p>\(R_2^2=0{,}2\). \(\langle E\rangle=(0{,}5\cdot0{,}5+0{,}3\cdot1{,}5+0{,}2\cdot2{,}5)\hbar\omega=1{,}2\hbar\omega\).</p>`});

P({id:'mq-2023b-5', ano:2023, prova:'EUF 2º/2023 · Q65 [mq5a]', topicos:['angm'],
enunciado:R`<p>A parte angular da função de onda num potencial central é \(\psi(\theta,\varphi)=\sqrt{\dfrac3{4\pi}}\cos\theta\sin\varphi\). Quais os resultados possíveis de uma medida de \(L_z\)?</p>`,
opcoes:[R`\(-\hbar\) e \(\hbar\)`,R`\(0\)`,R`\(-2\hbar\) e \(2\hbar\)`,R`\(-\hbar\), 0 e \(\hbar\)`,R`\(-\hbar/2\) e \(\hbar/2\)`],
dica:R`\(L_z=-i\hbar\,\partial_\varphi\): só a dependência em \(\varphi\) importa.`,
solucao:R`<p>\(\sin\varphi=\dfrac{e^{i\varphi}-e^{-i\varphi}}{2i}\): só \(m=\pm1\), com \(L_z=\pm\hbar\).</p>`});

P({id:'mq-2023b-6', ano:2023, prova:'EUF 2º/2023 · Q67 [mq6a]', topicos:['poco'],
enunciado:R`<p>Poço infinito \(V=0\) para \(|x|\lt a/2\). Para quais estados \(\psi_n\) (\(n=1,2,\dots\)) tem-se \(|\psi_n(0)|^2=0\)?</p>`,
opcoes:[R`Apenas \(n\) par.`,R`Apenas o fundamental, \(n=1\).`,R`Apenas \(n\) ímpar.`,R`Todos os estados.`,R`Todos exceto o fundamental.`],
dica:R`No poço centrado: \(n\) ímpar → cosseno; \(n\) par → seno.`,
solucao:R`<p>Os estados pares são \(\sin(n\pi x/a)\), ímpares em \(x\), e anulam-se na origem.</p>`});

P({id:'mq-2023b-7', ano:2023, prova:'EUF 2º/2023 · Q69 [mq7a]', topicos:['spin'],
enunciado:R`<p>Dois spins 1/2 interagem via \(H=\dfrac{J}{\hbar^2}\vec S_1\cdot\vec S_2\), \(J>0\). A energia do estado fundamental é:</p>`,
opcoes:[R`\(-3J/4\)`,R`\(0\)`,R`\(-J/4\)`,R`\(J/4\)`,R`\(3J/4\)`],
dica:R`\(\vec S_1\cdot\vec S_2=\tfrac12(S^2-S_1^2-S_2^2)\).`,
solucao:R`<p>Singleto (\(S=0\)): \(\tfrac{\hbar^2}2(0-\tfrac32)=-\tfrac34\hbar^2\Rightarrow E=-3J/4\). Tripleto: \(+J/4\). Com \(J>0\) (antiferro), o singleto é o fundamental.</p>`});

P({id:'mq-2023b-8', ano:2023, prova:'EUF 2º/2023 · Q71 [mq8a]', topicos:['post'],
enunciado:R`<p>Num espaço tridimensional, \(J=a\,\text{diag}(1,0,-1)\). O estado é \((1/2,\ 1/2,\ 1/\sqrt2)\). Mede-se \(J^2\) e obtém-se \(a^2\). Medindo \(J\) logo depois:</p>`,
opcoes:[R`obtém-se \(+a\) com probabilidade 1/3 e \(-a\) com 2/3`,R`\(+a\) com 1/4, 0 com 1/4, \(-a\) com 1/2`,R`\(+a\) com 2/3 e \(-a\) com 1/3`,R`0 com probabilidade 1`,R`\(+a\) com 1/2 e 0 com 1/2`],
dica:R`\(J^2=a^2\,\text{diag}(1,0,1)\): o autovalor \(a^2\) é degenerado. Projete e renormalize.`,
solucao:R`<p>Projeção: \((1/2,0,1/\sqrt2)\), norma² = 3/4. \(P(+a)=\dfrac{1/4}{3/4}=\dfrac13\), \(P(-a)=\dfrac{1/2}{3/4}=\dfrac23\).</p>`});

// ============ 2024 — 1ª aplicação ============
P({id:'mq-2024-1', ano:2024, prova:'EUF 2024 · Q57 [mqPT1a]', topicos:['spin'],
enunciado:R`<p>O hamiltoniano de um elétron num campo magnético uniforme é \(\mathcal H=b\begin{pmatrix}1&0\\0&-1\end{pmatrix}\), com \(b=-\hbar\gamma B/2\). Indique a verdadeira:</p>`,
opcoes:[R`Os autovalores são \(\pm b\), correspondentes a autoestados em que o spin está alinhado ou oposto ao campo.`,R`Os autovalores são \(\pm b/2\), com spin alinhado ou oposto ao campo.`,R`Os autovalores são \(\pm b\), com \(-b\) para spin perpendicular ao campo e \(+b\) para paralelo.`,R`Os autovalores são \(\pm b/2\), com \(-b/2\) para spin perpendicular e \(+b/2\) para paralelo.`,R`Os dois autoestados (alinhado e oposto) são degenerados, com energia \(b\).`],
dica:R`A matriz já é diagonal na base de \(S_z\) (direção do campo).`,
solucao:R`<p>Autovalores \(\pm b\); autoestados \(|\uparrow\rangle\), \(|\downarrow\rangle\) ao longo do campo.</p>`});

P({id:'mq-2024-2', ano:2024, prova:'EUF 2024 · Q59 [mqPT2a]', topicos:['ident'],
enunciado:R`<p>V ou F sobre partículas idênticas:</p><p>(1) A indistinguibilidade leva à simetrização ou antissimetrização da função de onda sob permutação de coordenadas (incluindo spin).<br>(2) Partículas idênticas são distinguíveis, sendo possível identificar as coordenadas de cada uma na função de onda.<br>(3) O princípio de Pauli decorre da antissimetria da função de onda de férmions idênticos.<br>(4) A condensação de Bose–Einstein decorre da antissimetria da função de onda de férmions idênticos.</p>`,
opcoes:[R`V, F, V, F`,R`V, F, V, V`,R`F, F, V, F`,R`V, F, F, F`,R`V, F, F, V`],
dica:R`Bose–Einstein é coisa de bósons (simetria).`,
solucao:R`<p>(1) V. (2) F. (3) V: \(\psi(1,1)=-\psi(1,1)\Rightarrow0\). (4) F: a condensação vem da simetria bosônica.</p>`});

P({id:'mq-2024-3', ano:2024, prova:'EUF 2024 · Q61 [mqPT3a]', topicos:['spin'],
enunciado:R`<p>Com as matrizes de spin usuais na base de \(S_z\), considere \(|\chi\rangle=a|\uparrow\rangle+b|\downarrow\rangle\). Os valores esperados do spin ao longo de \(z\) e \(x\) são:</p>`,
opcoes:[R`\(\tfrac\hbar2(|a|^2-|b|^2)\) e \(+\hbar\,\text{Re}(ab^*)\)`,R`\(\tfrac\hbar2(|a|^2+|b|^2)\) e \(+\hbar\,\text{Re}(ab^*)\)`,R`\(\tfrac\hbar2(|a|^2-|b|^2)\) e \(-\hbar\,\text{Re}(ab^*)\)`,R`\(\tfrac\hbar2(|b|^2-|a|^2)\) e \(+\hbar\,\text{Re}(ab^*)\)`,R`\(\tfrac\hbar2(|b|^2-|a|^2)\) e \(-\hbar\,\text{Re}(ab^*)\)`],
dica:R`\(\langle S_x\rangle=\tfrac\hbar2(a^*b+b^*a)\).`,
solucao:R`<p>\(\langle S_z\rangle=\tfrac\hbar2(|a|^2-|b|^2)\); \(\langle S_x\rangle=\tfrac\hbar2\cdot2\text{Re}(a^*b)=\hbar\,\text{Re}(ab^*)\).</p>`});

P({id:'mq-2024-4', ano:2024, prova:'EUF 2024 · Q63 [mqPT4a]', topicos:['osch'],
enunciado:R`<p>Um oscilador com \(H=\hbar\omega(a^\dagger a+\tfrac12)\) está em \(|\psi\rangle=\sqrt{0{,}4}|2\rangle+\sqrt{0{,}6}|3\rangle\). O valor esperado da energia é:</p>`,
opcoes:[R`\(3{,}1\hbar\omega\)`,R`\(3{,}1\hbar\omega^2\)`,R`\(2{,}0\hbar\omega\)`,R`\(2{,}0\hbar\omega^2\)`,R`\(\hbar\omega\)`],
dica:R`\(E_2=2{,}5\hbar\omega\), \(E_3=3{,}5\hbar\omega\).`,
solucao:R`<p>\(0{,}4\cdot2{,}5+0{,}6\cdot3{,}5=3{,}1\), em unidades de \(\hbar\omega\). (\(\hbar\omega^2\) nem tem dimensão de energia.)</p>`});

P({id:'mq-2024-5', ano:2024, prova:'EUF 2024 · Q65 [mqPT5a]', topicos:['spin','post'],
enunciado:R`<p>Três aparatos de Stern–Gerlach em sequência: o primeiro mede \(S_z\) e obtém \(\hbar/2\); o segundo mede \(S_y\) e obtém \(-\hbar/2\). Se o terceiro medir \(S_x\), qual a probabilidade de obter \(\hbar/2\)?</p>`,
opcoes:[R`1/2`,R`0`,R`1/4`,R`3/4`,R`1`],
dica:R`Só o último resultado importa.`,
solucao:R`<p>O estado é \(|-_y\rangle\), e \(|\langle+_x|-_y\rangle|^2=1/2\).</p>`});

P({id:'mq-2024-6', ano:2024, prova:'EUF 2024 · Q67 [mqPT6a]', topicos:['poco','post'],
enunciado:R`<p>Uma partícula está no fundamental do poço \(|x|\lt a/2\), \(\psi_0=\sqrt{2/a}\cos(\pi x/a)\). A largura passa instantaneamente para \(2a\) (simétrica), sem alterar a função de onda. Qual a probabilidade de encontrar a partícula no fundamental do novo poço? Dado: \(\int\cos x\cos(x/2)dx=\sin(x/2)+\sin(3x/2)/3\).</p>`,
opcoes:[R`\((8/3\pi)^2\)`,R`\((4\sqrt2/3\pi)^2\)`,R`0`,R`1`,R`\((4/3\pi)^2\)`],
dica:R`Novo fundamental: \(\sqrt{1/a}\cos(\pi x/2a)\). Calcule a sobreposição em \(|x|\lt a/2\).`,
solucao:R`<p>Com \(u=\pi x/a\): \(c=\dfrac{\sqrt2}{\pi}\displaystyle\int_{-\pi/2}^{\pi/2}\cos u\cos\frac u2du=\dfrac{\sqrt2}{\pi}\cdot2\left(\frac{\sqrt2}{2}+\frac{\sqrt2}{6}\right)=\dfrac{8}{3\pi}\). \(P=(8/3\pi)^2\approx0{,}72\). É a aproximação súbita.</p>`});

P({id:'mq-2024-7', ano:2024, prova:'EUF 2024 · Q69 [mqPT7a]', topicos:['osch'], fig:'fig/mq_y24_q69.png',
enunciado:R`<p>O gráfico representa a autofunção \(\psi(x)\) de um estado excitado de um oscilador harmônico de frequência \(\omega\). Qual a energia desse estado?</p>`,
opcoes:[R`\(7\hbar\omega/2\)`,R`\(\hbar\omega/2\)`,R`\(3\hbar\omega/2\)`,R`\(5\hbar\omega/2\)`,R`\(9\hbar\omega/2\)`],
dica:R`Conte os nós: o estado \(n\) tem \(n\) nós.`,
solucao:R`<p>A função é ímpar com 3 nós (um na origem): \(n=3\), \(E=\tfrac72\hbar\omega\).</p>`});

P({id:'mq-2024-8', ano:2024, prova:'EUF 2024 · Q71 [mqPT8a]', topicos:['spin','evol'],
enunciado:R`<p>Uma partícula de spin 1/2 num campo ao longo de \(x\) tem \(H=\omega\hat S_x\). Em \(t=0\) o spin está para cima em \(z\). Qual o tempo mínimo para o spin se inverter?</p>`,
opcoes:[R`\(\pi/\omega\)`,R`\(2\pi/\omega\)`,R`\(\infty\)`,R`\(\pi/2\omega\)`,R`\(\pi/4\omega\)`],
dica:R`Precessão em torno de \(x\) com frequência angular \(\omega\).`,
solucao:R`<p>\(|\langle\downarrow|\psi(t)\rangle|^2=\sin^2(\omega t/2)=1\) em \(t=\pi/\omega\) (meia volta de precessão).</p>`});

// ============ 2024 — 2ª aplicação ============
P({id:'mq-2024b-1', ano:2024, prova:'EUF 2º/2024 · Q57 [mqPT1a]', topicos:['poco'], fig:'fig/mq_b24_q57.png',
enunciado:R`<p>Uma partícula está num poço finito de largura \(L\) e profundidade \(-V\) (figura), com estados ligados. Sendo \(E\) um autovalor, indique V ou F:</p><p>(1) \(E>0\) pertence à parte discreta e \(E\lt0\) à contínua.<br>(2) Se \(E\lt0\), a função de onda só pode ser nula em valores discretos de \(x\) em \(|x|\lt L/2\), mas decai exponencialmente em \(|x|>L/2\).<br>(3) Se \(E\lt0\), a função de onda é estritamente confinada a \(|x|\lt L/2\) (nula nas bordas e fora).<br>(4) Se \(E>0\), a função de onda se estende por todo o eixo \(x\).</p>`,
opcoes:[R`F, V, F, V`,R`F, V, F, F`,R`V, F, V, F`,R`V, F, V, V`,R`V, F, F, V`],
dica:R`Ligados (\(E\lt0\)): discretos e com caudas evanescentes. Espalhamento (\(E>0\)): contínuo.`,
solucao:R`<p>(1) F (está invertido). (2) V: dentro oscila, com nós isolados; fora decai como \(e^{-\kappa|x|}\). (3) F: só um poço infinito confina estritamente. (4) V.</p>`});

P({id:'mq-2024b-2', ano:2024, prova:'EUF 2º/2024 · Q59 [mqPT2a]', topicos:['post'],
enunciado:R`<p>Com \(|A\rangle=(|1\rangle+|2\rangle)/\sqrt2\) e \(|B\rangle=(-|1\rangle+|2\rangle)/\sqrt2\), o estado normalizado é \(|\Psi\rangle=a|A\rangle+b|B\rangle\) (\(a,b\) reais). As probabilidades de encontrar o sistema em \(|A\rangle\), \(|B\rangle\), \(|1\rangle\) e \(|2\rangle\) são:</p>`,
opcoes:[R`\(a^2,\ b^2,\ \tfrac12-ab,\ \tfrac12+ab\)`,R`\(a^2,\ b^2,\ \tfrac12+ab,\ \tfrac12+ab\)`,R`\(a^2,\ b^2,\ -ab,\ +ab\)`,R`\(a^2+b^2,\ a^2+b^2,\ \tfrac12-ab,\ \tfrac12+ab\)`,R`\(a^2,\ b^2,\ \tfrac12,\ \tfrac12\)`],
dica:R`\(\langle1|\Psi\rangle=(a-b)/\sqrt2\) e \(a^2+b^2=1\).`,
solucao:R`<p>\(P_1=\dfrac{(a-b)^2}{2}=\dfrac12-ab\), \(P_2=\dfrac{(a+b)^2}2=\dfrac12+ab\).</p>`});

P({id:'mq-2024b-3', ano:2024, prova:'EUF 2º/2024 · Q61 [mqPT3a]', topicos:['osch','post'],
enunciado:R`<p>O valor esperado da energia de um oscilador é, num certo instante, \(1{,}5\hbar\omega\). V ou F:</p><p>(1) O oscilador pode estar no autoestado \(n=1\).<br>(2) O oscilador está, com certeza, em \(n=1\).<br>(3) O oscilador pode estar em \(\tfrac1{\sqrt2}|0\rangle+\tfrac1{\sqrt2}|2\rangle\).<br>(4) O oscilador está no fundamental.</p>`,
opcoes:[R`V, F, V, F`,R`V, F, F, F`,R`F, V, F, F`,R`V, V, V, F`,R`F, F, F, V`],
dica:R`Calcule \(\langle E\rangle\) para a superposição de (3).`,
solucao:R`<p>\(n=1\) dá \(1{,}5\hbar\omega\) (1: V). Mas \((|0\rangle+|2\rangle)/\sqrt2\) dá \(\tfrac12(0{,}5+2{,}5)=1{,}5\hbar\omega\) também (3: V), então não há certeza (2: F). O fundamental dá \(0{,}5\hbar\omega\) (4: F).</p>`});

P({id:'mq-2024b-4', ano:2024, prova:'EUF 2º/2024 · Q63 [mqPT4a]', topicos:['spin','evol'],
enunciado:R`<p>Uma partícula de spin 1/2 num campo ao longo de \(z\) tem estado \(\tfrac12\begin{pmatrix}e^{i\omega t/2}\\\sqrt3e^{-i\omega t/2}\end{pmatrix}\) na base de \(S_z\). Calculando \(\langle S_x\rangle\) e \(\langle S_z\rangle\):</p>`,
opcoes:[R`\(\langle\vec S\rangle\) precessiona em torno do campo, mantendo ângulo constante com ele (\(\langle S_z\rangle\) constante).`,R`\(\langle\vec S\rangle\) precessiona em torno de \(x\), com \(\langle S_x\rangle\) constante.`,R`\(\langle\vec S\rangle\) precessiona em torno do campo, com \(\langle S_z\rangle\) oscilando entre \(-\hbar/2\) e \(+\hbar/2\).`,R`\(\langle\vec S\rangle\) é constante, com módulo \(\hbar/2\) ao longo do campo.`,R`\(\langle\vec S\rangle\) é constante, com módulo \(\hbar/2\) ao longo de \(x\).`],
dica:R`\(\langle S_z\rangle=\tfrac\hbar2(|c_1|^2-|c_2|^2)\); \(\langle S_x\rangle=\hbar\,\text{Re}(c_1^*c_2)\).`,
solucao:R`<p>\(\langle S_z\rangle=\tfrac\hbar2(\tfrac14-\tfrac34)=-\tfrac\hbar4\), constante. \(\langle S_x\rangle=\hbar\tfrac{\sqrt3}4\cos\omega t\) e \(\langle S_y\rangle\propto\sin\omega t\): precessão de Larmor.</p>`});

P({id:'mq-2024b-5', ano:2024, prova:'EUF 2º/2024 · Q65 [mqPT5a]', topicos:['post'],
enunciado:R`<p>Num espaço bidimensional, \(O=s\begin{pmatrix}0&2\\2&0\end{pmatrix}\). O sistema está em \(|\psi\rangle=\sqrt{\tfrac12}(|1\rangle-|2\rangle)\). Os resultados possíveis de uma medida de \(O\) são:</p>`,
opcoes:[R`\(-2s\) com probabilidade 1`,R`\(-2s\) com 1/2 e \(2s\) com 1/2`,R`\(-2s\) com 2/3 e \(2s\) com 1/3`,R`\(2s\) com probabilidade 1`,R`\(-2s\) com 3/4 e \(2s\) com 1/4`],
dica:R`Aplique \(O\) em \(|\psi\rangle\).`,
solucao:R`<p>\(O(1,-1)^T=s(-2,2)^T=-2s(1,-1)^T\): autovetor de \(-2s\).</p>`});

P({id:'mq-2024b-6', ano:2024, prova:'EUF 2º/2024 · Q67 [mqPT6a]', topicos:['poco'],
enunciado:R`<p>Poço infinito em \(-a/2\le x\le a/2\), com \(\psi=N\sin(2\pi x/a)e^{-iEt/\hbar}\) dentro. Quais os valores de \(N\) e \(E\)?</p>`,
opcoes:[R`\(N=\sqrt{2/a}\), \(E=2\hbar^2\pi^2/ma^2\)`,R`\(N=2/a\), \(E=2\hbar^2\pi^2/ma^2\)`,R`\(N=\sqrt{2/a}\), \(E=\hbar^2\pi^2/ma^2\)`,R`\(N=2/\sqrt a\), \(E=\hbar^2\pi^2/ma^2\)`,R`\(N=\sqrt{2/a}\), \(E=\hbar^2\pi^2/2ma^2\)`],
dica:R`\(k=2\pi/a\) é o estado \(n=2\).`,
solucao:R`<p>\(N^2a/2=1\). \(E=\dfrac{\hbar^2k^2}{2m}=\dfrac{4\pi^2\hbar^2}{2ma^2}=\dfrac{2\pi^2\hbar^2}{ma^2}\).</p>`});

P({id:'mq-2024b-7', ano:2024, prova:'EUF 2º/2024 · Q69 [mqPT7a]', topicos:['angm','hidro'],
enunciado:R`<p>Se o módulo do momento angular orbital do elétron do hidrogênio é \(L=\sqrt2\,\hbar\), quais os resultados possíveis de uma medida imediata de \(L_z\)?</p>`,
opcoes:[R`\(-\hbar,\ 0,\ \hbar\)`,R`\(0\)`,R`\(0,\ \hbar\)`,R`\(0,\ \hbar,\ 2\hbar\)`,R`\(-2\hbar,-\hbar,0,\hbar,2\hbar\)`],
dica:R`\(\sqrt{l(l+1)}=\sqrt2\Rightarrow l=1\).`,
solucao:R`<p>\(l=1\Rightarrow m=-1,0,1\).</p>`});

P({id:'mq-2024b-8', ano:2024, prova:'EUF 2º/2024 · Q71 [mqPT8a]', topicos:['evol'],
enunciado:R`<p>\(H=\hbar\omega(|a\rangle\langle a|-|b\rangle\langle b|+2|c\rangle\langle c|)\) e \(|\psi(0)\rangle=(|a\rangle+|b\rangle+|c\rangle)/\sqrt3\). O estado em \(t>0\) é:</p>`,
opcoes:[R`\((e^{-i\omega t}|a\rangle+e^{i\omega t}|b\rangle+e^{-2i\omega t}|c\rangle)/\sqrt3\)`,R`\((e^{i\omega t}|a\rangle+e^{-i\omega t}|b\rangle+e^{2i\omega t}|c\rangle)/\sqrt3\)`,R`\((e^{-i\omega t}|a\rangle-e^{i\omega t}|b\rangle+e^{-2i\omega t}|c\rangle)/\sqrt3\)`,R`\((e^{i\omega t}|a\rangle-e^{-i\omega t}|b\rangle+e^{2i\omega t}|c\rangle)/\sqrt3\)`,R`\((e^{i\omega t}|a\rangle-e^{i\omega t}|b\rangle+e^{2i\omega t}|c\rangle)/\sqrt3\)`],
dica:R`Cada autoestado ganha \(e^{-iE_kt/\hbar}\).`,
solucao:R`<p>\(E_a=\hbar\omega\), \(E_b=-\hbar\omega\), \(E_c=2\hbar\omega\): fases \(e^{-i\omega t}\), \(e^{+i\omega t}\), \(e^{-2i\omega t}\).</p>`});

// ============ 2025 — 1ª aplicação ============
P({id:'mq-2025-1', ano:2025, prova:'EUF 2025 · Q57 [mqPT1a]', topicos:['poco'], fig:'fig/mq_y25_q57.png',
enunciado:R`<p>Os painéis (a), (b) e (c) mostram potenciais \(V(x)\) em 1D: (a) poço finito, (b) barreira finita, (c) poço infinito, todos entre \(-a\) e \(a\). Os painéis (1), (2) e (3) mostram autofunções de energia, cada uma resultante de um dos potenciais. A associação correta é:</p>`,
opcoes:[R`(a)-(2), (b)-(3), (c)-(1)`,R`(a)-(2), (b)-(1), (c)-(3)`,R`(a)-(1), (b)-(2), (c)-(3)`,R`(a)-(1), (b)-(3), (c)-(2)`,R`(a)-(3), (b)-(1), (c)-(2)`],
dica:R`Poço infinito: \(\psi=0\) nas paredes. Poço finito: caudas exponenciais fora. Barreira: oscila fora, com amplitude e comprimento de onda diferentes dentro.`,
solucao:R`<p>(1) zera exatamente em \(\pm a\): poço infinito (c). (2) oscila dentro e decai suavemente fora: estado ligado do poço finito (a). (3) oscila fora e é atenuada sob a barreira: espalhamento pela barreira (b).</p>`});

P({id:'mq-2025-2', ano:2025, prova:'EUF 2025 · Q59 [mqPT2a]', topicos:['poco'],
enunciado:R`<p>Uma partícula no poço infinito \(0\le x\le L\) está no fundamental. A probabilidade de encontrá-la em \(0\le x\le L/4\) é:</p>`,
opcoes:[R`\(\tfrac14-\tfrac1{2\pi}\)`,R`\(\tfrac14+\tfrac1{2\pi}\)`,R`\(-\tfrac14+\tfrac1{2\pi}\)`,R`\(-\tfrac14-\tfrac1{2\pi}\)`,R`\(\tfrac12\)`],
dica:R`\(\sin^2u=\tfrac12(1-\cos2u)\).`,
solucao:R`<p>\(\dfrac2L\displaystyle\int_0^{L/4}\sin^2\frac{\pi x}{L}dx=\frac14-\frac1{2\pi}\sin\frac\pi2=\frac14-\frac1{2\pi}\approx0{,}091\) (menos que 1/4: a borda é pouco provável).</p>`});

P({id:'mq-2025-3', ano:2025, prova:'EUF 2025 · Q61 [mqPT3a]', topicos:['spin'],
enunciado:R`<p>Com as matrizes de spin usuais, complete: "A aplicação de \(S_x\) sobre \(|+\rangle\) resulta em ___. Logo, o valor esperado de \(S_x\) no estado \(|+\rangle\) é ___."</p>`,
opcoes:[R`\((\hbar/2)|-\rangle\), 0`,R`\((\hbar/2)|-\rangle\), \(\hbar/2\)`,R`\((\hbar/2)|+\rangle\), 0`,R`\((\hbar/2)|+\rangle\), \(\hbar/2\)`,R`\((\hbar/2)(|+\rangle+|-\rangle)\), \(\hbar/2\)`],
dica:R`\(S_x\) troca as componentes.`,
solucao:R`<p>\(S_x|+\rangle=\tfrac\hbar2|-\rangle\Rightarrow\langle+|S_x|+\rangle=\tfrac\hbar2\langle+|-\rangle=0\).</p>`});

P({id:'mq-2025-4', ano:2025, prova:'EUF 2025 · Q63 [mqPT4a]', topicos:['post'],
enunciado:R`<p>V ou F:</p><p>(1) Se existe um limite inferior para o produto das incertezas em medidas de duas quantidades, independentemente do cuidado, os operadores correspondentes não comutam.<br>(2) Medindo \(A\), depois \(B\) e depois \(A\) de novo, para qualquer \(B\) as duas medidas de \(A\) necessariamente dão o mesmo resultado.<br>(3) No hidrogênio, \(H\), \(L^2\) e \(L_z\) comutam; logo não há limite intrínseco para a precisão com que podem ser conhecidas simultaneamente.</p>`,
opcoes:[R`V, F, V`,R`V, V, F`,R`F, F, V`,R`F, V, F`,R`V, F, F`],
dica:R`\(\sigma_A\sigma_B\ge\tfrac12|\langle[A,B]\rangle|\).`,
solucao:R`<p>(1) V. (2) F: se \([A,B]\ne0\), a medida de \(B\) "apaga" o resultado de \(A\). (3) V: há base comum de autoestados \(|nlm\rangle\).</p>`});

P({id:'mq-2025-5', ano:2025, prova:'EUF 2025 · Q65 [mqPT5a]', topicos:['post'],
enunciado:R`<p>Seja \(\psi(x)\) uma autofunção de energia normalizada. A probabilidade de encontrar a partícula em \(-a/3\lt x\lt a/3\) é:</p>`,
opcoes:[R`\(\displaystyle\int_{-a/3}^{a/3}|\psi(x)|^2dx\)`,R`\(\displaystyle\int_{-a/3}^{a/3}|\psi(x)|\,dx\)`,R`\(\displaystyle\int_{-a/3}^{a/3}x|\psi(x)|^2dx\)`,R`\(\displaystyle\int_{-\infty}^{\infty}|\psi(x)|^2dx\)`,R`\(\displaystyle\int_{-\infty}^{\infty}x|\psi(x)|^2dx\)`],
dica:R`Regra de Born.`,
solucao:R`<p>A densidade de probabilidade é \(|\psi|^2\), integrada no intervalo. (D vale 1; E é \(\langle x\rangle\).)</p>`});

P({id:'mq-2025-6', ano:2025, prova:'EUF 2025 · Q67 [mqPT6a]', topicos:['poco','post'],
enunciado:R`<p>Poço infinito em \(|x|\le a/2\), com \(E_n=n^2\pi^2\hbar^2/2ma^2\). O estado é \(|\psi\rangle=c_1|1\rangle+c_2|2\rangle+c_3|3\rangle+c_4|4\rangle\). Qual a probabilidade de obter energia menor que \(6\pi^2\hbar^2/ma^2\)?</p>`,
opcoes:[R`\(1-|c_4|^2\)`,R`\(1-|c_4|^2-|c_3|^2\)`,R`\(1-|c_4|^2-|c_3|^2-|c_2|^2\)`,R`1`,R`0`],
dica:R`\(6\pi^2\hbar^2/ma^2=12\cdot\pi^2\hbar^2/2ma^2\).`,
solucao:R`<p>\(n^2\lt12\Rightarrow n\le3\). Probabilidade \(|c_1|^2+|c_2|^2+|c_3|^2=1-|c_4|^2\).</p>`});

P({id:'mq-2025-7', ano:2025, prova:'EUF 2025 · Q69 [mqPT7a]', topicos:['evol'],
enunciado:R`<p>\(H=\hbar\omega(|1\rangle\langle1|-|2\rangle\langle2|)\), \(A=a(|1\rangle\langle2|+|2\rangle\langle1|)\). Em \(t=0\), \(|\psi\rangle=\tfrac1{\sqrt2}(|1\rangle+|2\rangle)\). Qual é \(\langle A\rangle(t)\)?</p>`,
opcoes:[R`\(a\cos(2\omega t)\)`,R`\(-a\cos(2\omega t)\)`,R`\(a\sin(2\omega t)\)`,R`\(-a\sin(2\omega t)\)`,R`\(a\cos^2(\omega t)\)`],
dica:R`\(|\psi(t)\rangle=\tfrac1{\sqrt2}(e^{-i\omega t}|1\rangle+e^{i\omega t}|2\rangle)\).`,
solucao:R`<p>\(\langle A\rangle=2a\,\text{Re}(c_1^*c_2)=a\,\text{Re}(e^{2i\omega t})=a\cos2\omega t\).</p>`});

P({id:'mq-2025-8', ano:2025, prova:'EUF 2025 · Q71 [mqPT8a]', topicos:['post'],
enunciado:R`<p>\(\{|n\rangle\}\) são autofunções reais e ortonormais de \(\hat H\) (1D), com autovalores \(E_n\). Quais são sempre verdadeiras?</p><p>I. \(\langle m|n\rangle\ne0\).<br>II. \(|n\rangle\) é autofunção de \(\hat p^2\).<br>III. \(\langle m|\hat H|n\rangle=\delta_{mn}E_n\).</p>`,
opcoes:[R`Apenas III.`,R`Apenas I.`,R`Apenas II.`,R`Apenas I e III.`,R`Apenas II e III.`],
dica:R`Ortonormais ⇒ \(\langle m|n\rangle=\delta_{mn}\). \(\hat p^2\) só compartilha autofunções com \(\hat H\) se \(V\) for constante.`,
solucao:R`<p>III sempre. I é falsa (\(m\ne n\) dá zero). II só vale para partícula livre ou poço com \(V=0\) dentro, não em geral.</p>`});

// ============ 2025 — 2ª aplicação ============
P({id:'mq-2025b-1', ano:2025, prova:'EUF 2º/2025 · Q57 [mqPT1a]', topicos:['osch','post'],
enunciado:R`<p>Duas partículas não interagentes de massa \(m\) estão no mesmo oscilador 1D (\(H_1\), \(H_2\)). O sistema é preparado em \(|\psi_0\rangle=\tfrac1{\sqrt3}(|\Phi_{0,0}\rangle+|\Phi_{1,0}\rangle+|\Phi_{0,1}\rangle)\), autoestados comuns \(|\Phi_{n_1,n_2}\rangle\). Determine (i) a probabilidade \(P_{12}\) de medir a energia total e encontrar \(\hbar\omega\); (ii) a probabilidade \(P_1\) de, preparando de novo \(|\psi_0\rangle\), medir só a energia da partícula 1 e encontrar \(\hbar\omega/2\).</p>`,
opcoes:[R`\(P_{12}=\tfrac13\), \(P_1=\tfrac23\)`,R`\(P_{12}=\tfrac23\), \(P_1=\tfrac23\)`,R`\(P_{12}=\tfrac23\), \(P_1=\tfrac13\)`,R`\(P_{12}=0\), \(P_1=\tfrac23\)`,R`\(P_{12}=\tfrac13\), \(P_1=\tfrac13\)`],
dica:R`\(E_{n_1n_2}=(n_1+n_2+1)\hbar\omega\).`,
solucao:R`<p>(i) Total \(\hbar\omega\) só para \(\Phi_{00}\): 1/3. (ii) \(n_1=0\) em \(\Phi_{00}\) e \(\Phi_{01}\): 2/3.</p>`});

P({id:'mq-2025b-2', ano:2025, prova:'EUF 2º/2025 · Q59 [mqPT2a]', topicos:['pert','poco'],
enunciado:R`<p>Poço infinito de largura \(a\) centrado em \(x=0\): \(E_n=\dfrac{n^2\hbar^2\pi^2}{2ma^2}\), \(\psi_n=C\sin(n\pi x/a)\) para \(n\) par e \(C\cos(n\pi x/a)\) para \(n\) ímpar, \(C=\sqrt{2/a}\). Uma perturbação \(W=\lambda\delta(x)\) é adicionada. Em primeira ordem, a correção \(\Delta E_n\) para \(n\) <b>par</b> é:</p>`,
opcoes:[R`\(0\)`,R`\(2\lambda/a\)`,R`\(n\lambda/a\)`,R`\(n^2\lambda/a\)`,R`\(\lambda/2a\)`],
dica:R`\(\Delta E_n=\lambda|\psi_n(0)|^2\).`,
solucao:R`<p>Para \(n\) par, \(\psi_n(0)=0\Rightarrow\Delta E_n=0\). (Para \(n\) ímpar seria \(2\lambda/a\).)</p>`});

P({id:'mq-2025b-3', ano:2025, prova:'EUF 2º/2025 · Q61 [mqPT3a]', topicos:['ident'], fig:'fig/mq_b25_q61.png',
enunciado:R`<p>Quatro estados de partícula única: \(\varepsilon_1=-t\) (não degenerado), \(\varepsilon_2=0\) (duplamente degenerado), \(\varepsilon_3=t\). Duas partículas não interagentes os ocupam, com todos os estados admissíveis igualmente prováveis. Qual a probabilidade de a energia total ser \(-t\) se as partículas são (i) distinguíveis e (ii) férmions idênticos? (Ignore spin.)</p>`,
opcoes:[R`1/4 e 1/3`,R`1/5 e 1/4`,R`1/16 e 1/6`,R`2/3 e 1/4`,R`1/4 e 1/6`],
dica:R`Total \(-t\) exige uma partícula em \(\varepsilon_1\) e outra num dos dois estados de energia 0.`,
solucao:R`<p>Distinguíveis: \(4^2=16\) estados; favoráveis \(2\times2=4\): 1/4. Férmions: \(\binom42=6\) pares; favoráveis 2: 1/3. (Bósons: 10 estados, 2 favoráveis: 1/5.)</p>`});

P({id:'mq-2025b-4', ano:2025, prova:'EUF 2º/2025 · Q63 [mqPT4a]', topicos:['osch','poco'],
enunciado:R`<p>Qual figura melhor representa as funções de onda de uma partícula em \(V(x)=\tfrac12m\omega^2x^2\) para \(x\lt0\) e \(V=\infty\) para \(x>0\) (meio oscilador)?</p>`,
opcoes:[{img:'fig/mq_b25_q63A.png'},{img:'fig/mq_b25_q63B.png'},{img:'fig/mq_b25_q63C.png'},{img:'fig/mq_b25_q63D.png'},{img:'fig/mq_b25_q63E.png'}],
dica:R`Na parede, \(\psi=0\): sobrevivem só os estados ímpares do oscilador completo (\(n=1,3,5,\dots\)), com 0, 1, 2, … nós dentro da região e níveis igualmente espaçados de \(2\hbar\omega\).`,
solucao:R`<p>As autofunções são as ímpares do oscilador, restritas a um lado: todas se anulam na parede; o fundamental não tem nós internos, o seguinte um, e assim por diante; e decaem suavemente além do ponto de retorno clássico. A figura correta é a que tem as curvas indo a zero na parede e número de nós crescendo de 0 a 3. As demais erram a condição na parede (não se anulam ou ficam com derivada nula) ou o número de nós.</p>`});

P({id:'mq-2025b-5', ano:2025, prova:'EUF 2º/2025 · Q65 [mqPT5a]', topicos:['spin'],
enunciado:R`<p>Uma partícula de spin 1/2 tem \(H=-\gamma\vec S\cdot\vec B\), com \(\vec B=(2B_0,0,B_0)\). Definindo \(\omega_0=\gamma B_0/2\), os autovalores de \(H\) são:</p>`,
opcoes:[R`\(\pm\sqrt5\,\hbar\omega_0\)`,R`\(\pm\sqrt3\,\hbar\omega_0\)`,R`\(\pm\hbar\omega_0\)`,R`\(0,\ \hbar\omega_0\)`,R`\(\pm\sqrt7\,\hbar\omega_0\)`],
dica:R`\(\vec S\cdot\hat n\) tem autovalores \(\pm\hbar/2\) para qualquer direção.`,
solucao:R`<p>\(E=\pm\gamma\dfrac\hbar2|\vec B|=\pm\gamma\dfrac\hbar2\sqrt5B_0=\pm\sqrt5\,\hbar\omega_0\).</p>`});

P({id:'mq-2025b-6', ano:2025, prova:'EUF 2º/2025 · Q67 [mqPT6a]', topicos:['poco'],
enunciado:R`<p>Uma partícula com \(0\lt E\lt V_0\) incide numa barreira (\(V=V_0\) em \(0\le x\le a\), zero fora). Para \(x>a\), \(\psi_3=Fe^{ikx}\), \(k=\sqrt{2mE}/\hbar\).</p><p>I. Para \(x\lt0\), \(\psi_1=Ae^{ikx}+Be^{-ikx}\).<br>II. Em \(0\le x\le a\), \(\psi_2=Ce^{\kappa x}+De^{-\kappa x}\), \(\kappa=\sqrt{2m(V_0-E)}/\hbar\).<br>III. A transmissão é \(T=|F/(A-B)|^2\).</p>`,
opcoes:[R`Apenas I e II estão corretas.`,R`Apenas I e III.`,R`Apenas II e III.`,R`Nenhuma.`,R`Todas.`],
dica:R`\(T\) é o fluxo transmitido dividido pelo incidente.`,
solucao:R`<p>I e II corretas. \(T=|F/A|^2\) (mesmo \(k\) dos dois lados), não \(|F/(A-B)|^2\).</p>`});

P({id:'mq-2025b-7', ano:2025, prova:'EUF 2º/2025 · Q69 [mqPT7a]', topicos:['spin'],
enunciado:R`<p>Dois spins 1/2 com \(H=J\,\vec S_1\cdot\vec S_2\), \(J>0\).</p><p>I. O fundamental tem spin total 0.<br>II. O estado excitado tem spin total 1.<br>III. O fundamental é degenerado.</p>`,
opcoes:[R`Apenas I e II.`,R`Apenas I e III.`,R`Apenas II e III.`,R`Nenhuma.`,R`Todas.`],
dica:R`Singleto: \(-\tfrac34J\hbar^2\); tripleto: \(+\tfrac14J\hbar^2\).`,
solucao:R`<p>Com \(J>0\), fundamental singleto (\(S=0\), não degenerado) e excitado tripleto (\(S=1\), três vezes degenerado).</p>`});

P({id:'mq-2025b-8', ano:2025, prova:'EUF 2º/2025 · Q71 [mqPT8a]', topicos:['post'],
enunciado:R`<p>Num sistema de três níveis, \(O=s\begin{pmatrix}0&1&0\\1&0&0\\0&0&-1\end{pmatrix}\). O estado é \(|\psi\rangle=\sqrt{\tfrac13}(|1\rangle-|2\rangle+|3\rangle)\). Os resultados possíveis de uma medida de \(O\) são:</p>`,
opcoes:[R`\(-s\) com probabilidade 1`,R`\(-s\) com 1/2 e \(s\) com 1/2`,R`\(-s\) com 2/3 e \(s\) com 1/3`,R`\(s\) com probabilidade 1`,R`\(-s\) com 3/4 e \(s\) com 1/4`],
dica:R`Aplique \(O\) diretamente.`,
solucao:R`<p>\(O(1,-1,1)^T=s(-1,1,-1)^T=-s(1,-1,1)^T\): autoestado de \(-s\) (o autovalor \(-s\) é degenerado).</p>`});

// ============ 2026 ============
P({id:'mq-2026-1', ano:2026, prova:'EUF 2026 · Q57 [mqPT1a]', topicos:['post'],
enunciado:R`<p>Numa base ortonormal: \(A=\begin{pmatrix}2&0&0\\0&1&i\\0&i&-1\end{pmatrix}\), \(B=\begin{pmatrix}1&0&0\\0&-1&0\\0&0&-1\end{pmatrix}\), \(C=\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix}\). V ou F:</p><p>I. Todas podem representar observáveis.<br>II. Existe uma base comum que diagonaliza \(B\) e \(C\).<br>III. \(B\) e \(C\) formam um conjunto completo de observáveis compatíveis.<br>IV. \(B^2\) e \(C\) formam um conjunto completo de observáveis compatíveis.</p><p>(Um conjunto é completo se cada autoestado comum fica identificado de modo único pelos autovalores.)</p>`,
opcoes:[R`F – V – V – F`,R`V – V – V – V`,R`F – V – V – V`,R`F – V – F – V`,R`V – F – V – V`],
dica:R`Hermiticidade de \(A\): compare \(A_{23}\) e \(A_{32}^*\). E \(B^2=\mathbb 1\).`,
solucao:R`<p>I: \(A_{23}=i\), mas \(A_{32}^*=-i\): não hermitiana. F. II: \(B\) é \(-\mathbb 1\) no subespaço \(\{2,3\}\), onde \(C\) atua; logo comutam. V. III: base comum \(|1\rangle\) (1,1), \((|2\rangle+|3\rangle)/\sqrt2\) (−1,1), \((|2\rangle-|3\rangle)/\sqrt2\) (−1,−1), com rótulos distintos. V. IV: \(B^2=\mathbb 1\) não acrescenta nada, e \(C\) sozinho tem o autovalor 1 duplo. F.</p>`});

P({id:'mq-2026-2', ano:2026, prova:'EUF 2026 · Q59 [mqPT2a]', topicos:['evol'],
enunciado:R`<p>Um sistema de dois níveis tem \(H=\dfrac{\hbar\Omega}{2}\sigma_x\). Com \(U(t)=e^{-iHt/\hbar}\), qual a probabilidade \(|\langle u_1|U(t)|u_1\rangle|^2\) de o sistema, preparado em \(|u_1\rangle\), continuar nesse estado após o tempo \(t\)?</p>`,
opcoes:[R`\(\cos^2(\Omega t/2)\)`,R`\(\sin^2(\Omega t/2)\)`,R`0`,R`1`,R`1/2`],
dica:R`\(e^{-i\theta\sigma_x}=\cos\theta\,\mathbb1-i\sin\theta\,\sigma_x\).`,
solucao:R`<p>\(U=\cos\frac{\Omega t}2-i\sin\frac{\Omega t}2\sigma_x\Rightarrow\langle u_1|U|u_1\rangle=\cos\frac{\Omega t}2\). Oscilação de Rabi.</p>`});

P({id:'mq-2026-3', ano:2026, prova:'EUF 2026 · Q61 [mqPT3a]', topicos:['ident','angm'],
enunciado:R`<p>Duas partículas idênticas de spin \(s=1\) e \(l=0\). Na base \(|j,m_j\rangle\) do momento angular total, com \(P_{12}|j,m_j\rangle=(-1)^{2s-j}|j,m_j\rangle\) e os demais números quânticos espaciais idênticos, quais valores de \(j\) são permitidos?</p>`,
opcoes:[R`\(j=0\) ou 2`,R`\(j=0\), 1 ou 2`,R`\(j=0\) ou 1`,R`\(j=2\)`,R`\(j=1\)`],
dica:R`Spin 1 ⇒ bósons ⇒ estado total simétrico.`,
solucao:R`<p>\((-1)^{2-j}=+1\Rightarrow j\) par: 0 ou 2 (\(j=1\) é antissimétrico).</p>`});

P({id:'mq-2026-4', ano:2026, prova:'EUF 2026 · Q63 [mqPT4a]', topicos:['pert','osch'],
enunciado:R`<p>Uma partícula de carga \(e\) num oscilador \(H_0\) sofre a perturbação \(H_1=-eEX\) (campo uniforme). Qual o módulo da correção da energia do fundamental, na menor ordem não nula em \(E\)?</p>`,
opcoes:[R`\(\dfrac{e^2E^2}{2m\omega^2}\)`,R`\(\dfrac{e^2E^2}{m\omega^2}\)`,R`\(eE\sqrt{\dfrac{\hbar}{2m\omega}}\)`,R`\(eE\sqrt{\dfrac{2\hbar}{m\omega}}\)`,R`\(\dfrac{e^4E^4}{\hbar m^2\omega^5}\)`],
dica:R`Primeira ordem é nula (\(\langle0|X|0\rangle=0\)). Segunda ordem: só \(|1\rangle\) contribui.`,
solucao:R`<p>\(E^{(2)}=-\dfrac{|\langle1|eEX|0\rangle|^2}{\hbar\omega}=-\dfrac{e^2E^2\hbar/2m\omega}{\hbar\omega}=-\dfrac{e^2E^2}{2m\omega^2}\). É exato: completando o quadrado, o oscilador só se desloca.</p>`});

P({id:'mq-2026-5', ano:2026, prova:'EUF 2026 · Q65 [mqPT5a]', topicos:['post'],
enunciado:R`<p>\(|a\rangle\) e \(|b\rangle\) são autoestados do momento \(\hat p\) com autovalores \(a\ne b\). Qual o valor de \(\langle a|\hat p|b\rangle\)?</p>`,
opcoes:[R`0`,R`\(a\)`,R`\(b\)`,R`\(|ab|\)`,R`\(|ab|^{1/2}\)`],
dica:R`\(\hat p|b\rangle=b|b\rangle\).`,
solucao:R`<p>\(\langle a|\hat p|b\rangle=b\langle a|b\rangle=0\): autoestados de autovalores distintos de um operador hermitiano são ortogonais.</p>`});

P({id:'mq-2026-6', ano:2026, prova:'EUF 2026 · Q67 [mqPT6a]', topicos:['poco'],
enunciado:R`<p>Uma partícula com \(E>V_0\) incide da esquerda num degrau (\(V=0\) para \(x\le0\), \(V_0\) para \(x>0\)): \(\psi_L=Ae^{ik_Lx}+Be^{-ik_Lx}\), \(\psi_R=Ce^{ik_Rx}\). A probabilidade de transmissão é:</p>`,
opcoes:[R`\(\dfrac{4k_Lk_R}{(k_L+k_R)^2}\)`,R`0`,R`1`,R`\(k_L/k_R\)`,R`\(\left(\dfrac{k_L-k_R}{k_L+k_R}\right)^2\)`],
dica:R`\(T=\dfrac{k_R}{k_L}\left|\dfrac CA\right|^2\), com \(C/A=2k_L/(k_L+k_R)\).`,
solucao:R`<p>\(T=\dfrac{k_R}{k_L}\cdot\dfrac{4k_L^2}{(k_L+k_R)^2}=\dfrac{4k_Lk_R}{(k_L+k_R)^2}\); e \(R+T=1\) com \(R=\left(\frac{k_L-k_R}{k_L+k_R}\right)^2\). Note o fator de fluxo \(k_R/k_L\).</p>`});

P({id:'mq-2026-7', ano:2026, prova:'EUF 2026 · Q69 [mqPT7a]', topicos:['angm'],
enunciado:R`<p>A parte angular é \(\psi=\tfrac1{\sqrt2}[Y_{32}+Y_{21}]\). O valor esperado de \(L^2\) é:</p>`,
opcoes:[R`\(9\hbar^2\)`,R`\(3\hbar^2\)`,R`\(18\hbar^2\)`,R`\(13\hbar^2/2\)`,R`\(5\hbar^2/2\)`],
dica:R`\(L^2Y_{lm}=l(l+1)\hbar^2Y_{lm}\).`,
solucao:R`<p>\(\tfrac12(12+6)\hbar^2=9\hbar^2\).</p>`});

P({id:'mq-2026-8', ano:2026, prova:'EUF 2026 · Q71 [mqPT8a]', topicos:['poco','evol'],
enunciado:R`<p>Uma partícula num poço infinito de largura \(a\) está num autoestado de energia \(E\). O poço é expandido <b>lentamente</b> até \(2a\). Qual a razão \(E'/E\)?</p>`,
opcoes:[R`1/4`,R`1`,R`1/2`,R`0`,R`\(1/\sqrt2\)`],
dica:R`Teorema adiabático: o número quântico \(n\) se conserva.`,
solucao:R`<p>\(E_n\propto1/a^2\) com \(n\) fixo: \(E'/E=1/4\). (Compare com a expansão súbita, em que a função de onda é que se mantém.)</p>`});

})();
