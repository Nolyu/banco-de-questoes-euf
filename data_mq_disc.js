window.BANK = window.BANK || [];
(function(){
const D = q => window.BANK.push(Object.assign({area:'mq', tipo:'disc'}, q));
const R = String.raw;

// ============ 2º/2010 ============
D({id:'mqd-2010-2-q8', ano:2010, prova:'EUF 2º/2010 · Parte 2 · Q8', topicos:['poco','post'],
enunciado:R`<p>Uma partícula de massa \(m\) está num poço infinito \(V=0\) para \(-L/2\lt x\lt L/2\) (potencial 1). O poço expande-se instantaneamente para \(-L\lt x\lt L\) (potencial 2).</p>`,
itens:[R`Calcule as autofunções e energias do fundamental e do primeiro excitado do potencial 1.`,R`Calcule a probabilidade de transição do fundamental do potencial 1 para o primeiro excitado do potencial 2.`,R`Calcule a probabilidade de a partícula continuar no estado fundamental após a expansão.`,R`Se a partícula está no fundamental após a expansão, calcule a probabilidade de encontrá-la fora de \(-L/2\lt x\lt L/2\).`],
dica:R`Expansão súbita: a função de onda não muda; projete nos novos autoestados. Use paridade antes de integrar.`,
solucao:R`<p><b>(a)</b> \(\psi_1=\sqrt{\tfrac2L}\cos\tfrac{\pi x}L\), \(E_1=\dfrac{\pi^2\hbar^2}{2mL^2}\); \(\psi_2=\sqrt{\tfrac2L}\sin\tfrac{2\pi x}L\), \(E_2=4E_1\).</p>
<p><b>(b)</b> Novo primeiro excitado: \(\phi_2=\sqrt{\tfrac1L}\sin\tfrac{\pi x}L\), ímpar; \(\psi_1\) é par. \(P=0\).</p>
<p><b>(c)</b> \(\phi_1=\sqrt{\tfrac1L}\cos\tfrac{\pi x}{2L}\). Com \(u=\pi x/L\): \(c=\dfrac{\sqrt2}{\pi}\displaystyle\int_{-\pi/2}^{\pi/2}\cos u\cos\frac u2\,du=\dfrac{8}{3\pi}\), logo \(P=\dfrac{64}{9\pi^2}\approx0{,}72\).</p>
<p><b>(d)</b> \(P_{\text{fora}}=1-\dfrac1L\displaystyle\int_{-L/2}^{L/2}\cos^2\frac{\pi x}{2L}dx=1-\left(\frac12+\frac1\pi\right)=\frac12-\frac1\pi\approx0{,}18\).</p>`});

D({id:'mqd-2010-2-q9', ano:2010, prova:'EUF 2º/2010 · Parte 2 · Q9', topicos:['spin','evol'],
enunciado:R`<p>As matrizes de Pauli \(\sigma_x,\sigma_y,\sigma_z\) descrevem uma partícula de spin 1/2.</p>`,
itens:[R`Usando a representação matricial, encontre autovalores e autovetores de cada uma e o comutador \([\sigma_y,\sigma_x]\).`,R`Para \(|\psi\rangle=a|-\rangle+b|+\rangle\) (\(|a|^2+|b|^2=1\), autovetores de \(\sigma_z\)), mostre como o estado se transforma sob cada \(\sigma\).`,R`Mostre como \(\exp(i\alpha\sigma_x)\) atua sobre \(|\psi\rangle\).`,R`Que condições sobre \(\alpha\) tornam esse operador hermitiano? E unitário?`],
dica:R`\(\sigma_x^2=\mathbb1\Rightarrow e^{i\alpha\sigma_x}=\cos\alpha\,\mathbb1+i\sin\alpha\,\sigma_x\).`,
solucao:R`<p><b>(a)</b> Todas têm autovalores \(\pm1\). \(\sigma_x\): \((1,1)/\sqrt2\) e \((1,-1)/\sqrt2\). \(\sigma_y\): \((1,i)/\sqrt2\) (+1) e \((1,-i)/\sqrt2\) (−1). \(\sigma_z\): \(|+\rangle\), \(|-\rangle\). \([\sigma_y,\sigma_x]=-2i\sigma_z\).</p>
<p><b>(b)</b> \(\sigma_x|\psi\rangle=a|+\rangle+b|-\rangle\) (troca); \(\sigma_y|\psi\rangle=-ia|+\rangle+ib|-\rangle\); \(\sigma_z|\psi\rangle=b|+\rangle-a|-\rangle\).</p>
<p><b>(c)</b> \(e^{i\alpha\sigma_x}|\psi\rangle=(a\cos\alpha+ib\sin\alpha)|-\rangle+(b\cos\alpha+ia\sin\alpha)|+\rangle\).</p>
<p><b>(d)</b> \((e^{i\alpha\sigma_x})^\dagger=e^{-i\alpha^*\sigma_x}\). Unitário se \(\alpha\) é real (a inversa é \(e^{-i\alpha\sigma_x}\)). Hermitiano se \(\alpha^*=-\alpha\), isto é, \(\alpha\) imaginário puro (\(e^{-\beta\sigma_x}\)); com \(\alpha\) real só nos casos triviais \(\alpha=n\pi\), em que o operador é \(\pm\mathbb1\).</p>`});

// ============ 1º/2011 ============
D({id:'mqd-2011-1-q8', ano:2011, prova:'EUF 1º/2011 · Parte 2 · Q8', topicos:['osch','evol'],
enunciado:R`<p>Partícula no oscilador \(V=\tfrac12m\omega^2x^2\), com \(\psi_0=Ae^{-m\omega x^2/2\hbar}\) e \(\psi_1=Bxe^{-m\omega x^2/2\hbar}\) (reais).</p>`,
itens:[R`Calcule \(A\) e \(B\).`,R`Sabendo que \(E_1=E_0+\hbar\omega\), use a equação de Schrödinger para encontrar \(E_0\).`,R`Para \(\psi=\sqrt{1-\beta^2}\psi_0+\beta\psi_1\) (\(0\le\beta^2\le1\)), determine \(\beta\) que maximiza \(\langle x\rangle\).`,R`Se esse é o estado em \(t=0\), escreva \(\psi(x,t)\) e calcule \(\langle x\rangle(t)\).`],
dica:R`\(\int x^2e^{-\alpha x^2}dx=\tfrac{\sqrt\pi}{2}\alpha^{-3/2}\). \(\langle0|x|1\rangle=\sqrt{\hbar/2m\omega}\).`,
solucao:R`<p><b>(a)</b> \(A=\left(\dfrac{m\omega}{\pi\hbar}\right)^{1/4}\), \(B=\left(\dfrac{m\omega}{\pi\hbar}\right)^{1/4}\sqrt{\dfrac{2m\omega}{\hbar}}\).</p>
<p><b>(b)</b> Substituindo \(\psi_0\): termo em \(x^2\) se cancela e sobra \(E_0=\hbar\omega/2\) (e \(E_1=3\hbar\omega/2\)).</p>
<p><b>(c)</b> \(\langle x\rangle=2\beta\sqrt{1-\beta^2}\sqrt{\hbar/2m\omega}\), máximo em \(\beta=1/\sqrt2\): \(\langle x\rangle_{\max}=\sqrt{\hbar/2m\omega}\).</p>
<p><b>(d)</b> \(\psi(x,t)=\tfrac1{\sqrt2}\left(\psi_0e^{-i\omega t/2}+\psi_1e^{-3i\omega t/2}\right)\); \(\langle x\rangle(t)=\sqrt{\dfrac{\hbar}{2m\omega}}\cos\omega t\), oscilando como o oscilador clássico.</p>`});

D({id:'mqd-2011-1-q9', ano:2011, prova:'EUF 1º/2011 · Parte 2 · Q9', topicos:['angm','post'],
enunciado:R`<p>Uma partícula tem momento angular \(l=1\).</p>`,
itens:[R`Na representação em que \(L^2\) e \(L_z\) são diagonais, obtenha a matriz de \(L_x\) (use \(L_\pm\)).`,R`Calcule os autovalores de \(L_x\).`,R`Encontre o autovetor de \(L_x\) com o maior autovalor.`,R`Se esse maior autovalor foi obtido numa medida de \(L_x\), calcule as probabilidades de medir \(+\hbar\), 0 e \(-\hbar\) numa medida posterior de \(L_z\).`],
dica:R`\(L_+|1,m\rangle=\hbar\sqrt{2-m(m+1)}|1,m+1\rangle\); \(L_x=(L_++L_-)/2\).`,
solucao:R`<p><b>(a)</b> \(L_x=\dfrac{\hbar}{\sqrt2}\begin{pmatrix}0&1&0\\1&0&1\\0&1&0\end{pmatrix}\) (base \(m=1,0,-1\)).</p>
<p><b>(b)</b> \(\hbar,0,-\hbar\).</p>
<p><b>(c)</b> \(\tfrac12(1,\sqrt2,1)\).</p>
<p><b>(d)</b> \(P(+\hbar)=\tfrac14\), \(P(0)=\tfrac12\), \(P(-\hbar)=\tfrac14\).</p>`});

// ============ 2º/2013 ============
D({id:'mqd-2013-2-q8', ano:2013, prova:'EUF 2º/2013 · Parte 2 · Q8', topicos:['post'],
enunciado:R`<p>A equação de Schrödinger no espaço dos momentos (com \(\hbar=1\)) é \(\left[\dfrac{p^2}{2m}-a\nabla_p^2\right]\bar\psi(\vec p,t)=i\dfrac{\partial}{\partial t}\bar\psi(\vec p,t)\).</p>`,
itens:[R`Escreva a equação de Schrödinger no espaço das coordenadas.`,R`Qual é o potencial \(V(r)\)?`,R`Qual é a força \(\vec F(\vec r)\)?`],
dica:R`No espaço dos momentos, \(\hat{\vec r}=i\nabla_p\) (com \(\hbar=1\)).`,
solucao:R`<p><b>(a)</b> \(\hat x^2=(i\partial_{p_x})^2=-\partial^2_{p_x}\Rightarrow-a\nabla_p^2=a\hat r^2\). Logo \(\left[-\dfrac{\nabla^2}{2m}+ar^2\right]\psi(\vec r,t)=i\partial_t\psi\).</p>
<p><b>(b)</b> \(V(r)=ar^2\) (oscilador isotrópico).</p>
<p><b>(c)</b> \(\vec F=-\nabla V=-2a\vec r\).</p>`});

D({id:'mqd-2013-2-q9', ano:2013, prova:'EUF 2º/2013 · Parte 2 · Q9', topicos:['spin','post'],
enunciado:R`<p>Os operadores de spin 1 são \(\hat S_x=\dfrac{\hbar}{\sqrt2}\begin{pmatrix}0&1&0\\1&0&1\\0&1&0\end{pmatrix}\), \(\hat S_y=\dfrac{\hbar}{\sqrt2}\begin{pmatrix}0&-i&0\\i&0&-i\\0&i&0\end{pmatrix}\), \(\hat S_z=\hbar\,\text{diag}(1,0,-1)\).</p>`,
itens:[R`Mostre que \([\hat S_x,\hat S_y]=i\hbar\hat S_z\) (e permutações cíclicas).`,R`Quais os resultados possíveis de uma medida de \(S_z\)? Encontre os autovetores.`,R`Para \(|\phi\rangle=(1,i,-2)^T\), quais as probabilidades de cada resultado de \(S_z\)?`,R`A partir de (c), qual a probabilidade de encontrar a partícula em qualquer um desses estados?`],
dica:R`Normalize \(|\phi\rangle\) antes.`,
solucao:R`<p><b>(a)</b> \(\hat S_x\hat S_y=\dfrac{\hbar^2}{2}\begin{pmatrix}i&0&-i\\0&0&0\\i&0&-i\end{pmatrix}\), e \(\hat S_y\hat S_x\) dá o mesmo com \(-i\) na diagonal. A diferença é \(i\hbar^2\,\text{diag}(1,0,-1)=i\hbar\hat S_z\). Os outros pares são análogos.</p>
<p><b>(b)</b> \(\hbar,0,-\hbar\), com autovetores \((1,0,0)\), \((0,1,0)\), \((0,0,1)\).</p>
<p><b>(c)</b> \(\langle\phi|\phi\rangle=6\): \(P(\hbar)=\tfrac16\), \(P(0)=\tfrac16\), \(P(-\hbar)=\tfrac23\).</p>
<p><b>(d)</b> A soma, 1: a partícula certamente está em algum autoestado de \(S_z\) (a base é completa).</p>`});

// ============ 1º/2016 ============
D({id:'mqd-2016-1-q8', ano:2016, prova:'EUF 1º/2016 · Parte 2 · Q8', topicos:['spin','angm'],
enunciado:R`<p>Um par de spins 1/2, A e B, está em \(|\psi\rangle=\alpha|A+\rangle|B-\rangle+\beta|A-\rangle|B+\rangle+\gamma|A-\rangle|B-\rangle+\delta|A+\rangle|B+\rangle\), com \(\hat S_z^A|A\pm\rangle=\pm\tfrac\hbar2|A\pm\rangle\), \(\hat S_\mp^A|A\pm\rangle=\hbar|A\mp\rangle\), \(\hat S_\pm^A|A\pm\rangle=0\) (idem para B), e \(\hat S_i=\hat S_i^A+\hat S_i^B\).</p>`,
itens:[R`Qual a dimensão de \(\mathcal H_A\otimes\mathcal H_B\)?`,R`Com \(\alpha=\beta=\gamma=0\), qual o \(\delta\) mais geral que normaliza \(|\psi\rangle\)?`,R`Com \(\alpha=-\beta=1/\sqrt2\), \(\gamma=\delta=0\), qual é \(\langle\hat S_z\rangle\)?`,R`Com \(\alpha=\beta=1/\sqrt2\), \(\gamma=\delta=0\), \(|\psi\rangle\) é autoestado de \(\hat S^2\)? Qual o autovalor? (Use \(\hat S^2=\hat S_-\hat S_++\hat S_z^2+\hbar\hat S_z\).)`],
dica:R`Os estados \(|+-\rangle\) e \(|-+\rangle\) têm \(S_z=0\). Em (d), \(\hat S_+\) leva \(|+-\rangle+|-+\rangle\) a \(2\hbar|++\rangle\).`,
solucao:R`<p><b>(a)</b> \(2\times2=4\).</p>
<p><b>(b)</b> \(|\delta|=1\): \(\delta=e^{i\varphi}\), \(\varphi\) real qualquer.</p>
<p><b>(c)</b> 0 (os dois termos têm \(m_A+m_B=0\)).</p>
<p><b>(d)</b> \(\hat S_z|\psi\rangle=0\). \(\hat S_+|\psi\rangle=\tfrac{1}{\sqrt2}(\hbar|++\rangle+\hbar|++\rangle)=\sqrt2\hbar|++\rangle\) e \(\hat S_-|++\rangle=\hbar(|-+\rangle+|+-\rangle)\), logo \(\hat S^2|\psi\rangle=2\hbar^2|\psi\rangle\). É o tripleto \(|1,0\rangle\), \(S(S+1)\hbar^2=2\hbar^2\). (Com \(\alpha=-\beta\) seria o singleto, autovalor 0.)</p>`});

D({id:'mqd-2016-1-q9', ano:2016, prova:'EUF 1º/2016 · Parte 2 · Q9', topicos:['osch','evol'],
enunciado:R`<p>Oscilador com \(\hat H=(\tfrac12+\hat n)\hbar\omega\), \(\hat n=\hat a^\dagger\hat a\). Um estado coerente satisfaz \(\hat a|z\rangle=z|z\rangle\).</p>`,
itens:[R`Quanto vale \(\langle z|\hat n|z\rangle\) para \(z=\tfrac12e^{i\pi/4}\) (estado normalizado)?`,R`Se em \(t=0\) o oscilador está em \(|0\rangle\), qual o estado em \(t=1/10\) s, com \(\omega=5\pi\) s\(^{-1}\)?`,R`Quanto vale \(c_n\) em \(|z\rangle=\sum_nc_n|n\rangle\) normalizado?`,R`Calcule \(|\langle z'|z\rangle|^2\) para \(z=\tfrac12e^{i\pi/4}\) e \(z'=\tfrac14e^{i\pi/4}\).`],
dica:R`\(\langle z|\hat a^\dagger\hat a|z\rangle=|z|^2\). Aplique \(\hat a\) na expansão para achar a recorrência de \(c_n\).`,
solucao:R`<p><b>(a)</b> \(|z|^2=1/4\).</p>
<p><b>(b)</b> \(|0\rangle\) é estacionário: \(e^{-i\omega t/2}|0\rangle=e^{-i\pi/4}|0\rangle\) (só uma fase global).</p>
<p><b>(c)</b> \(c_n=e^{-|z|^2/2}\dfrac{z^n}{\sqrt{n!}}\) (até uma fase global).</p>
<p><b>(d)</b> \(\langle z'|z\rangle=e^{-(|z|^2+|z'|^2)/2+z'^*z}\Rightarrow|\langle z'|z\rangle|^2=e^{-|z-z'|^2}=e^{-1/16}\approx0{,}94\).</p>`});

// ============ 2º/2016 ============
D({id:'mqd-2016-2-q4', ano:2016, prova:'EUF 2º/2016 · Parte 1 · Q4', topicos:['osch','evol'],
enunciado:R`<p>Oscilador \(\hat H=\hbar\omega(\hat a^\dagger\hat a+\tfrac12)\), com \(\hat a=\sqrt{\tfrac{m\omega}{2\hbar}}\hat x+\tfrac{i}{\sqrt{2m\omega\hbar}}\hat p\), \(\hat a|n\rangle=\sqrt n|n-1\rangle\), \(\hat a^\dagger|n\rangle=\sqrt{n+1}|n+1\rangle\).</p>`,
itens:[R`Calcule os elementos de matriz de \(\hat x\) e \(\hat p\) na base \(|n\rangle\).`,R`Calcule \(\langle n|\hat x^2|n\rangle\).`,R`Calcule a razão entre a energia total média e a energia potencial média num autoestado \(|n\rangle\).`,R`Use a equação de Heisenberg \(i\hbar\,d\hat O_H/dt=[\hat O_H,\hat H]\) para obter \(\hat a_H(t)\).`],
dica:R`\(\hat x=\sqrt{\tfrac{\hbar}{2m\omega}}(\hat a+\hat a^\dagger)\), \(\hat p=i\sqrt{\tfrac{m\omega\hbar}{2}}(\hat a^\dagger-\hat a)\). \([\hat a,\hat a^\dagger\hat a]=\hat a\).`,
solucao:R`<p><b>(a)</b> \(\langle m|\hat x|n\rangle=\sqrt{\tfrac{\hbar}{2m\omega}}(\sqrt n\,\delta_{m,n-1}+\sqrt{n+1}\,\delta_{m,n+1})\); \(\langle m|\hat p|n\rangle=i\sqrt{\tfrac{m\omega\hbar}{2}}(\sqrt{n+1}\,\delta_{m,n+1}-\sqrt n\,\delta_{m,n-1})\).</p>
<p><b>(b)</b> \(\langle\hat x^2\rangle=\dfrac{\hbar}{2m\omega}(2n+1)\).</p>
<p><b>(c)</b> \(\langle V\rangle=\tfrac12m\omega^2\langle x^2\rangle=\tfrac12(n+\tfrac12)\hbar\omega=E_n/2\): razão 2 (virial).</p>
<p><b>(d)</b> \(i\hbar\dot{\hat a}_H=\hbar\omega\hat a_H\Rightarrow\hat a_H(t)=\hat a\,e^{-i\omega t}\).</p>`});

D({id:'mqd-2016-2-q8', ano:2016, prova:'EUF 2º/2016 · Parte 2 · Q8', topicos:['spin','evol'],
enunciado:R`<p>Uma partícula de spin 1/2 num campo \(\vec B=B\hat z\) tem \(\hat H=-\gamma B\hat S_z\). \(\hat S_z|\pm\rangle=\pm\tfrac\hbar2|\pm\rangle\), \(\hat S_x|\pm\rangle=\tfrac\hbar2|\mp\rangle\), \(\hat S_y|\pm\rangle=\pm i\tfrac\hbar2|\mp\rangle\).</p>`,
itens:[R`Quais os autovalores de \(\hat H\)?`,R`Em \(t=0\), \(|\psi(0)\rangle=(|+\rangle-|-\rangle)/\sqrt2\). Calcule \(|\psi(t)\rangle\).`,R`Calcule \(\langle\hat S_x\rangle\), \(\langle\hat S_y\rangle\), \(\langle\hat S_z\rangle\) para \(t\ge0\).`,R`Qual o menor \(t>0\) em que o estado volta a ser igual ao inicial?`],
dica:R`Defina \(\omega=\gamma B\). \(|\pm\rangle\) evoluem com \(e^{\pm i\omega t/2}\).`,
solucao:R`<p><b>(a)</b> \(\mp\gamma B\hbar/2\) para \(|\pm\rangle\).</p>
<p><b>(b)</b> \(|\psi(t)\rangle=\tfrac1{\sqrt2}(e^{i\omega t/2}|+\rangle-e^{-i\omega t/2}|-\rangle)\).</p>
<p><b>(c)</b> \(\langle S_z\rangle=0\); \(\langle S_x\rangle=-\tfrac\hbar2\cos\omega t\); \(\langle S_y\rangle=\tfrac\hbar2\sin\omega t\). O spin precessa no plano \(xy\) com frequência de Larmor \(\omega=\gamma B\).</p>
<p><b>(d)</b> Em \(t=2\pi/\omega\) o vetor vira \(-|\psi(0)\rangle\): mesmo estado físico (fase global). Como vetor idêntico, só em \(t=4\pi/\omega\) (spinores giram \(4\pi\)).</p>`});

// ============ 1º/2017 ============
D({id:'mqd-2017-1-q3', ano:2017, prova:'EUF 1º/2017 · Parte 1 · Q3', topicos:['osch','post'],
enunciado:R`<p>Partícula num oscilador 3D isotrópico \(V=\tfrac{m\omega^2}2(x^2+y^2+z^2)\).</p>`,
itens:[R`Escreva os autoestados \(|n_1,n_2,n_3\rangle\) e as autoenergias.`,R`Uma das energias é \(\tfrac72\hbar\omega\). Qual a degenerescência?`,R`Mede-se \(\hat H\) no estado \(|\psi\rangle=\tfrac1{\sqrt2}|0,0,1\rangle+\tfrac12|0,1,0\rangle+\tfrac12|0,1,1\rangle\). Que resultados e com que probabilidades?`,R`Se a medida deu \(\tfrac52\hbar\omega\), determine \(|\psi(t)\rangle\) depois dela.`],
dica:R`\(E=(n_1+n_2+n_3+\tfrac32)\hbar\omega\); degenerescência de \(N\): \((N+1)(N+2)/2\).`,
solucao:R`<p><b>(a)</b> \(|n_1\rangle|n_2\rangle|n_3\rangle\), \(E=(N+\tfrac32)\hbar\omega\), \(N=n_1+n_2+n_3\).</p>
<p><b>(b)</b> \(N=2\): 6 estados.</p>
<p><b>(c)</b> \(\tfrac52\hbar\omega\) com probabilidade \(\tfrac12+\tfrac14=\tfrac34\); \(\tfrac72\hbar\omega\) com \(\tfrac14\).</p>
<p><b>(d)</b> Projeção normalizada: \(|\psi(t)\rangle=e^{-5i\omega t/2}\left(\sqrt{\tfrac23}|0,0,1\rangle+\sqrt{\tfrac13}|0,1,0\rangle\right)\).</p>`});

D({id:'mqd-2017-1-q8', ano:2017, prova:'EUF 1º/2017 · Parte 2 · Q8', topicos:['pert','osch'],
enunciado:R`<p>Um elétron (massa \(m\), carga \(e\)) num oscilador 1D de frequência \(\omega\) está sujeito também a um campo \(\vec E=E\hat x\).</p>`,
itens:[R`Escreva a hamiltoniana total.`,R`Tratando o termo do campo \(\hat V_E\) como perturbação, calcule a correção da energia do primeiro excitado em ordem linear em \(E\).`,R`A correção do estado em primeira ordem é \(|\psi_1^{(1)}\rangle=\sqrt{\tfrac{\hbar}{2m\omega}}\tfrac{eE}{\hbar\omega}(|0\rangle-\sqrt2|2\rangle)\). Calcule a correção de energia em ordem quadrática, \(\langle1|\hat V_E|\psi_1^{(1)}\rangle\).`,R`Calcule as energias exatas por uma mudança de coordenadas e compare com (b) e (c).`],
dica:R`O estado dado corresponde a \(\hat V_E=+eE\hat x\). Complete o quadrado em \(x\).`,
solucao:R`<p><b>(a)</b> \(\hat H=\dfrac{\hat p^2}{2m}+\tfrac12m\omega^2\hat x^2+eE\hat x\) (na convenção do enunciado).</p>
<p><b>(b)</b> \(\langle1|\hat x|1\rangle=0\Rightarrow E^{(1)}=0\).</p>
<p><b>(c)</b> \(\langle1|\hat x|0\rangle=\sqrt{\tfrac\hbar{2m\omega}}\), \(\langle1|\hat x|2\rangle=\sqrt2\sqrt{\tfrac\hbar{2m\omega}}\). \(E^{(2)}=eE\cdot\dfrac{eE}{\hbar\omega}\dfrac{\hbar}{2m\omega}(1-2)=-\dfrac{e^2E^2}{2m\omega^2}\).</p>
<p><b>(d)</b> \(x'=x+\dfrac{eE}{m\omega^2}\): \(E_n=(n+\tfrac12)\hbar\omega-\dfrac{e^2E^2}{2m\omega^2}\). Concorda: a perturbação só desloca o oscilador, e a série termina na segunda ordem (todas as outras correções de energia são nulas).</p>`});

// ============ 2º/2017 ============
D({id:'mqd-2017-2-q4', ano:2017, prova:'EUF 2º/2017 · Parte 1 · Q4', topicos:['poco'],
enunciado:R`<p>Equação de Schrödinger 1D para energias \(E\in[0,U_0]\) no poço \(V=U_0\) (\(x\lt0\)), \(V=0\) (\(0\lt x\lt L\)), \(V=U_0\) (\(x>L\)).</p>`,
itens:[R`O espectro é discreto ou contínuo? Por quê?`,R`Escreva a forma geral da função de onda nas 3 regiões.`,R`Escreva a equação cuja solução dá o espectro (não precisa resolver).`,R`O que acontece com o espectro quando \(L\to0\)?`],
dica:R`\(k=\sqrt{2mE}/\hbar\), \(\kappa=\sqrt{2m(U_0-E)}/\hbar\). Imponha continuidade de \(\psi\) e \(\psi'\) em 0 e em \(L\).`,
solucao:R`<p><b>(a)</b> Discreto: com \(E\lt U_0\), \(\psi\) decai nos dois lados (normalizável), e só certos \(E\) satisfazem as quatro condições de contorno.</p>
<p><b>(b)</b> \(x\lt0\): \(Ae^{\kappa x}\); \(0\lt x\lt L\): \(B\sin kx+C\cos kx\); \(x>L\): \(De^{-\kappa x}\).</p>
<p><b>(c)</b> Em \(x=0\): \(C=A\), \(kB=\kappa A\). Em \(x=L\), eliminando: \(\tan(kL)=\dfrac{2k\kappa}{k^2-\kappa^2}\).</p>
<p><b>(d)</b> O número de estados ligados (\(\approx\sqrt{2mU_0}L/\pi\hbar\)) diminui; para \(L\) pequeno resta um único estado ligado, com energia tendendo a \(U_0\) (ligação fraca, \(\kappa\to0\)). Em 1D sempre há ao menos um estado ligado.</p>`});

D({id:'mqd-2017-2-q9', ano:2017, prova:'EUF 2º/2017 · Parte 2 · Q9', topicos:['post','evol'],
enunciado:R`<p>Num espaço com base \(\{|1\rangle,|2\rangle,|3\rangle\}\), a hamiltoniana é \(H=\begin{pmatrix}E_1&0&0\\0&E_2&M_{23}\\0&?&E_3\end{pmatrix}\).</p>`,
itens:[R`Qual o elemento que falta? Qual a parte imaginária de \(E_3\)?`,R`Um observável tem \(A|1\rangle=2|1\rangle\), \(A|2\rangle=2|2\rangle\), \(A|3\rangle=|3\rangle\). Escreva sua matriz. Pode ser medido simultaneamente com a energia?`,R`Quais os autovalores de energia?`,R`Com \(E_1=1\), \(E_2=E_3=3\), \(M_{23}=1\), e estado inicial \(|2\rangle\), encontre o estado para \(t>0\).`],
dica:R`\(H\) é hermitiana. Em (d), os autoestados do bloco são \((|2\rangle\pm|3\rangle)/\sqrt2\).`,
solucao:R`<p><b>(a)</b> \(H_{32}=M_{23}^*\); \(\text{Im}\,E_3=0\).</p>
<p><b>(b)</b> \(A=\text{diag}(2,2,1)\). \([A,H]\) tem elemento \((2,3)\) igual a \((2-1)M_{23}\ne0\): não comutam (salvo se \(M_{23}=0\)), logo não podem ser medidos simultaneamente.</p>
<p><b>(c)</b> \(E_1\) e \(\dfrac{E_2+E_3}{2}\pm\sqrt{\left(\dfrac{E_2-E_3}2\right)^2+|M_{23}|^2}\).</p>
<p><b>(d)</b> Energias 4 e 2 para \((|2\rangle\pm|3\rangle)/\sqrt2\). \(|\psi(t)\rangle=e^{-3it/\hbar}\left[\cos(t/\hbar)|2\rangle-i\sin(t/\hbar)|3\rangle\right]\) (energias em unidades do enunciado).</p>`});

// ============ 1º/2020 ============
D({id:'mqd-2020-1-q4', ano:2020, prova:'EUF 1º/2020 · Parte 1 · Q4', topicos:['poco','post'],
enunciado:R`<p>Partícula num poço infinito \(0\le x\le a\). Em \(t=0\), \(\psi(x,0)=A(Bx-x^2)\) para \(0\le x\le a\) e 0 fora (A, B reais).</p>`,
itens:[R`Escreva a equação de Schrödinger e determine autovalores e autofunções (sem normalizar).`,R`Determine \(B\) para que \(\psi(x,0)\) seja uma função de onda possível.`,R`Determine \(A\).`,R`Determine \(\langle T\rangle\) em \(t=0\).`],
dica:R`\(\psi\) deve anular-se nas paredes. \(\langle T\rangle=-\frac{\hbar^2}{2m}\int\psi\psi''\).`,
solucao:R`<p><b>(a)</b> \(-\dfrac{\hbar^2}{2m}\psi''=E\psi\); \(\psi_n=\sin\dfrac{n\pi x}a\), \(E_n=\dfrac{n^2\pi^2\hbar^2}{2ma^2}\).</p>
<p><b>(b)</b> \(\psi(a)=0\Rightarrow B=a\).</p>
<p><b>(c)</b> \(A^2\dfrac{a^5}{30}=1\Rightarrow A=\sqrt{30/a^5}\).</p>
<p><b>(d)</b> \(\psi''=-2A\): \(\langle T\rangle=\dfrac{\hbar^2A^2}{m}\dfrac{a^3}6=\dfrac{5\hbar^2}{ma^2}\), ligeiramente acima de \(E_1=\dfrac{\pi^2\hbar^2}{2ma^2}\approx\dfrac{4{,}93\hbar^2}{ma^2}\): o estado é quase o fundamental.</p>`});

D({id:'mqd-2020-1-q9', ano:2020, prova:'EUF 1º/2020 · Parte 2 · Q9', topicos:['post','evol'],
enunciado:R`<p>Na base \(\{|\alpha_1\rangle,|\alpha_2\rangle,|\alpha_3\rangle\}\), \(H=\hbar\omega\begin{pmatrix}0&1&0\\1&0&0\\0&0&2\end{pmatrix}\).</p>`,
itens:[R`Determine os autovalores \(\epsilon_1\lt\epsilon_2\lt\epsilon_3\) e os autovetores.`,R`Em \(t=0\), \(|\psi\rangle=\tfrac12|\alpha_1\rangle+\tfrac12|\alpha_2\rangle+\tfrac1{\sqrt2}|\alpha_3\rangle\). Que energias podem ser medidas e com que probabilidades?`,R`Determine \(|\psi(t)\rangle\) na base \(|\alpha_i\rangle\).`,R`Para \(A=a\begin{pmatrix}0&1&0\\1&0&1\\0&1&0\end{pmatrix}\), calcule \(\langle A\rangle\) no estado fundamental.`],
dica:R`O bloco \(\begin{pmatrix}0&1\\1&0\end{pmatrix}\) tem autovetores \((1,\pm1)/\sqrt2\).`,
solucao:R`<p><b>(a)</b> \(\epsilon_1=-\hbar\omega\), \(|\varphi_1\rangle=(|\alpha_1\rangle-|\alpha_2\rangle)/\sqrt2\); \(\epsilon_2=\hbar\omega\), \(|\varphi_2\rangle=(|\alpha_1\rangle+|\alpha_2\rangle)/\sqrt2\); \(\epsilon_3=2\hbar\omega\), \(|\varphi_3\rangle=|\alpha_3\rangle\).</p>
<p><b>(b)</b> \(|\psi\rangle=\tfrac1{\sqrt2}|\varphi_2\rangle+\tfrac1{\sqrt2}|\varphi_3\rangle\): \(\hbar\omega\) e \(2\hbar\omega\), cada um com 1/2 (probabilidade nula para \(-\hbar\omega\)).</p>
<p><b>(c)</b> \(|\psi(t)\rangle=\tfrac12e^{-i\omega t}(|\alpha_1\rangle+|\alpha_2\rangle)+\tfrac1{\sqrt2}e^{-2i\omega t}|\alpha_3\rangle\).</p>
<p><b>(d)</b> \(A|\varphi_1\rangle=\tfrac a{\sqrt2}(-1,1,-1)\); \(\langle\varphi_1|A|\varphi_1\rangle=\tfrac a2(-1-1)=-a\).</p>`});

// ============ 2º/2011 ============
D({id:'mqd-2011-2-q8', ano:2011, prova:'EUF 2º/2011 · Parte 2 · Q8', topicos:['post'],
enunciado:R`<p>Para \(\Psi(x,t)\) em 1D, a densidade \(\rho=\Psi^*\Psi\) obedece à equação de continuidade \(\partial_t\rho=-\partial_xj\).</p>`,
itens:[R`Usando \(i\hbar\partial_t\Psi=\left[-\frac{\hbar^2}{2m}\partial_x^2+V(x)\right]\Psi\), escreva \(\partial_t\rho\) em termos de \(\Psi\), \(\Psi^*\) e suas derivadas espaciais.`,R`Obtenha a forma explícita de \(j(x,t)\).`,R`Relacione \(d\langle x\rangle/dt\) com \(\langle p\rangle\) (integre por partes; \(\Psi,\Psi'\to0\) no infinito mais rápido que \(1/x\)).`],
dica:R`Use a equação para \(\Psi\) e a conjugada para \(\Psi^*\); o termo \(V\) se cancela (\(V\) real).`,
solucao:R`<p><b>(a)</b> \(\partial_t\rho=\dfrac{i\hbar}{2m}\left(\Psi^*\Psi''-\Psi\Psi^{*\prime\prime}\right)\).</p>
<p><b>(b)</b> \(j=\dfrac{\hbar}{2mi}\left(\Psi^*\Psi'-\Psi\Psi^{*\prime}\right)=\dfrac\hbar m\text{Im}(\Psi^*\Psi')\).</p>
<p><b>(c)</b> \(\dfrac{d\langle x\rangle}{dt}=\displaystyle\int x\,\partial_t\rho\,dx=-\int x\,\partial_xj\,dx=\int j\,dx=\frac1m\int\Psi^*\left(-i\hbar\partial_x\right)\Psi\,dx=\frac{\langle p\rangle}m\) (um caso do teorema de Ehrenfest).</p>`});

D({id:'mqd-2011-2-q9', ano:2011, prova:'EUF 2º/2011 · Parte 2 · Q9', topicos:['osch','ident'],
enunciado:R`<p>\(\hat H=\hbar\omega_0(\hat a^\dagger\hat a+\tfrac12)\), com autoestados não degenerados \(|n\rangle\), \(\hat N|n\rangle=n|n\rangle\), \(\hat N=\hat a^\dagger\hat a\).</p>`,
itens:[R`Com \([\hat a,\hat a^\dagger]=1\), mostre que \(\hat a|n\rangle\) e \(\hat a^\dagger|n\rangle\) são autoestados de \(\hat N\) e determine os autovalores \(n'\) e \(n''\).`,R`Determine a constante entre \(\hat a|n\rangle\) e \(|n'\rangle\). Supondo \(\langle H\rangle\ge0\) e \(\hat a|0\rangle=0\), o número de estados é finito ou infinito?`,R`Agora suponha anticomutação \(\{\hat a,\hat a^\dagger\}=1\). Mostre que \(\hat a|n\rangle\) e \(\hat a^\dagger|n\rangle\) são autoestados de \(\hat N\), ache \(n'\), \(n''\) e a constante entre \(\hat a|n\rangle\) e \(|n'\rangle\).`],
dica:R`(a) \([\hat N,\hat a]=-\hat a\). (c) \(\hat a\hat a^\dagger=1-\hat N\); norma \(\|\hat a|n\rangle\|^2=\langle n|\hat N|n\rangle\).`,
solucao:R`<p><b>(a)</b> \(\hat N\hat a|n\rangle=(n-1)\hat a|n\rangle\), \(\hat N\hat a^\dagger|n\rangle=(n+1)\hat a^\dagger|n\rangle\): \(n'=n-1\), \(n''=n+1\).</p>
<p><b>(b)</b> \(\|\hat a|n\rangle\|^2=n\Rightarrow\hat a|n\rangle=\sqrt n|n-1\rangle\). A escada para baixo termina em \(|0\rangle\) (\(n\ge0\) inteiro), mas \(\hat a^\dagger\) sobe sem limite: há infinitos estados.</p>
<p><b>(c)</b> \(\hat N\hat a=\hat a^\dagger\hat a\hat a=(1-\hat a\hat a^\dagger)\hat a=\hat a(1-\hat N)\Rightarrow\hat N\hat a|n\rangle=(1-n)\hat a|n\rangle\); analogamente \(\hat N\hat a^\dagger|n\rangle=(1-n)\hat a^\dagger|n\rangle\). Logo \(n'=n''=1-n\) e \(\hat a|n\rangle=\sqrt n\,|1-n\rangle\). Os autovalores fecham em \(\{0,1\}\): é o oscilador fermiônico, com no máximo uma partícula por estado (Pauli).</p>`});

// ============ 1º/2012 ============
D({id:'mqd-2012-1-q8', ano:2012, prova:'EUF 1º/2012 · Parte 2 · Q8', topicos:['osch','pert'],
enunciado:R`<p>Oscilador 1D \(\left(-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}+\frac12m\omega^2x^2\right)\psi_n=E_n\psi_n\), com \(a=\frac1{\sqrt2}\left(\sqrt{\frac{m\omega}\hbar}x+\sqrt{\frac\hbar{m\omega}}\frac d{dx}\right)\).</p>`,
itens:[R`O fundamental satisfaz \(a\psi_0=0\). Resolva e ache \(\psi_0\) a menos de constante.`,R`Normalize \(\psi_0\).`,R`Obtenha \(E_0\).`,R`O oscilador é perturbado por \(V(x)=V_0e^{-x^2/b^2}\). Em primeira ordem, calcule o deslocamento da energia do fundamental.`],
dica:R`\(\int e^{-\alpha x^2}dx=\sqrt{\pi/\alpha}\).`,
solucao:R`<p><b>(a)</b> \(\psi_0'=-\frac{m\omega}\hbar x\psi_0\Rightarrow\psi_0=Ce^{-m\omega x^2/2\hbar}\).</p>
<p><b>(b)</b> \(C=\left(\frac{m\omega}{\pi\hbar}\right)^{1/4}\).</p>
<p><b>(c)</b> \(E_0=\hbar\omega/2\).</p>
<p><b>(d)</b> \(\Delta E=V_0\sqrt{\frac{m\omega}{\pi\hbar}}\displaystyle\int e^{-(m\omega/\hbar+1/b^2)x^2}dx=\dfrac{V_0}{\sqrt{1+\hbar/(m\omega b^2)}}\). Limites: \(b\to\infty\) dá \(V_0\) (constante); \(b\) pequeno dá \(\approx V_0b\sqrt{m\omega/\hbar}\).</p>`});

D({id:'mqd-2012-1-q9', ano:2012, prova:'EUF 1º/2012 · Parte 2 · Q9', topicos:['spin','evol'],
enunciado:R`<p>Uma partícula de spin 1/2 tem momento magnético \(\vec\mu=\gamma\vec S\), \(\vec S=\frac\hbar2\vec\sigma\), num campo \(\vec B=B\hat z\), com \(H=-\vec\mu\cdot\vec B\).</p>`,
itens:[R`Escreva \(H\) como matriz \(2\times2\).`,R`Escreva os estados estacionários normalizados e suas energias.`,R`Em \(t=0\), \(\chi(0)=\frac1{\sqrt2}(1,e^{i\alpha})^T\) (\(\alpha\) real). Qual é \(\chi(t)\)?`,R`Mede-se \(S_x\) no instante \(t\). Qual a probabilidade de obter \(\pm\hbar/2\)?`],
dica:R`Defina \(\omega=\gamma B\).`,
solucao:R`<p><b>(a)</b> \(H=-\dfrac{\gamma\hbar B}{2}\begin{pmatrix}1&0\\0&-1\end{pmatrix}\).</p>
<p><b>(b)</b> \((1,0)^T\) com \(E=-\gamma\hbar B/2\); \((0,1)^T\) com \(E=+\gamma\hbar B/2\).</p>
<p><b>(c)</b> \(\chi(t)=\dfrac1{\sqrt2}\left(e^{i\omega t/2},\ e^{i\alpha}e^{-i\omega t/2}\right)^T\).</p>
<p><b>(d)</b> Com \(|\pm x\rangle=(1,\pm1)/\sqrt2\): \(P_\pm(t)=\tfrac12\left[1\pm\cos(\alpha-\omega t)\right]\). O spin precessa em torno de \(z\) com frequência \(\omega\).</p>`});

// ============ 2º/2012 ============
D({id:'mqd-2012-2-q8', ano:2012, prova:'EUF 2º/2012 · Parte 2 · Q8', topicos:['poco','pert'],
enunciado:R`<p>Partícula de massa \(m\) no poço infinito \(0\lt x\lt a\). Depois, adiciona-se a pequena correção \(W(x)=W_0\sin(\pi x/a)\) dentro do poço.</p>`,
itens:[R`Escreva a equação de Schrödinger independente do tempo.`,R`Resolva: determine \(E_n\) e \(\psi_n\) normalizadas.`,R`Em primeira ordem, calcule a correção da energia do fundamental.`],
dica:R`\(\int_0^\pi\sin^3u\,du=4/3\).`,
solucao:R`<p><b>(a)</b> \(-\frac{\hbar^2}{2m}\psi''=E\psi\), com \(\psi(0)=\psi(a)=0\).</p>
<p><b>(b)</b> \(\psi_n=\sqrt{2/a}\sin(n\pi x/a)\), \(E_n=\dfrac{n^2\pi^2\hbar^2}{2ma^2}\).</p>
<p><b>(c)</b> \(\Delta E_1=W_0\dfrac2a\displaystyle\int_0^a\sin^3\frac{\pi x}a\,dx=\dfrac{8W_0}{3\pi}\approx0{,}85W_0\).</p>`});

D({id:'mqd-2012-2-q9', ano:2012, prova:'EUF 2º/2012 · Parte 2 · Q9', topicos:['spin','post'],
enunciado:R`<p>Para spin 1/2, \(\vec S=\frac\hbar2\vec\sigma\). Seja \(\hat n\) o unitário na direção \((\theta,\phi)\) (coordenadas esféricas usuais).</p>`,
itens:[R`Mostre que \(S_n=\hat n\cdot\vec S=\dfrac\hbar2\begin{pmatrix}\cos\theta&e^{-i\phi}\sin\theta\\e^{i\phi}\sin\theta&-\cos\theta\end{pmatrix}\).`,R`Mostre que os únicos resultados de uma medida de \(S_n\) são \(\pm\hbar/2\), qualquer que seja \(\hat n\).`,R`Obtenha o vetor normalizado com \(S_n=+\hbar/2\), em termos de \(\sin(\theta/2)\) e \(\cos(\theta/2)\).`,R`Com \(\theta=60^\circ\), \(\phi=45^\circ\), se o spin está com \(S_z=+\hbar/2\), qual a probabilidade de obter \(+\hbar/2\) numa medida de \(S_n\)?`],
dica:R`\(\hat n=(\sin\theta\cos\phi,\sin\theta\sin\phi,\cos\theta)\). \(S_n^2=(\hbar/2)^2\mathbb1\).`,
solucao:R`<p><b>(a)</b> \(\sin\theta\cos\phi\,\sigma_x+\sin\theta\sin\phi\,\sigma_y\) dá \(\sin\theta(\cos\phi\mp i\sin\phi)=\sin\theta\,e^{\mp i\phi}\) fora da diagonal; \(\cos\theta\,\sigma_z\) na diagonal.</p>
<p><b>(b)</b> Traço 0 e determinante \(-(\hbar/2)^2\): autovalores \(\pm\hbar/2\).</p>
<p><b>(c)</b> \(|+n\rangle=\begin{pmatrix}\cos(\theta/2)\\e^{i\phi}\sin(\theta/2)\end{pmatrix}\).</p>
<p><b>(d)</b> \(|\langle+n|+z\rangle|^2=\cos^2(\theta/2)=\cos^230^\circ=3/4\) (não depende de \(\phi\)).</p>`});

// ============ 1º/2013 ============
D({id:'mqd-2013-1-q8', ano:2013, prova:'EUF 1º/2013 · Parte 2 · Q8', topicos:['osch','post','evol'],
enunciado:R`<p>Um oscilador 1D (massa \(m\), frequência \(\omega\)) está em \(t=0\) no estado \(|\psi(0)\rangle=\sum_nc_n|\phi_n\rangle\), com \(E_n=(n+\tfrac12)\hbar\omega\). Use \(X|\phi_n\rangle=\sqrt{\tfrac{\hbar}{2m\omega}}\left[\sqrt{n+1}|\phi_{n+1}\rangle+\sqrt n|\phi_{n-1}\rangle\right]\).</p>`,
itens:[R`Que condição os \(c_n\) devem satisfazer para \(|\psi(0)\rangle\) normalizado? Calcule a probabilidade \(\mathcal P\) de uma medida de energia (num instante \(t\)) dar resultado maior que \(2\hbar\omega\).`,R`Se só \(c_0\) e \(c_1\) são não nulos, escreva \(\langle H\rangle\). Com \(\langle H\rangle=\hbar\omega\), calcule \(|c_0|^2\) e \(|c_1|^2\).`,R`Com \(c_0\) real positivo e \(c_1=|c_1|e^{i\theta_1}\), mantendo \(\langle H\rangle=\hbar\omega\), determine \(\theta_1\) para que \(\langle X\rangle=\tfrac12\sqrt{\hbar/m\omega}\).`,R`Escreva \(|\psi(t)\rangle\) e calcule \(\langle X\rangle(t)\).`],
dica:R`\(\langle X\rangle=2\,\text{Re}(c_0^*c_1)\sqrt{\hbar/2m\omega}\).`,
solucao:R`<p><b>(a)</b> \(\sum|c_n|^2=1\). \(E_n>2\hbar\omega\iff n\ge2\): \(\mathcal P=1-|c_0|^2-|c_1|^2\), independente de \(t\).</p>
<p><b>(b)</b> \(\langle H\rangle=\left(\tfrac12|c_0|^2+\tfrac32|c_1|^2\right)\hbar\omega=\hbar\omega\Rightarrow|c_0|^2=|c_1|^2=\tfrac12\).</p>
<p><b>(c)</b> \(\langle X\rangle=\cos\theta_1\sqrt{\hbar/2m\omega}=\tfrac12\sqrt{\hbar/m\omega}\Rightarrow\cos\theta_1=\tfrac1{\sqrt2}\), \(\theta_1=\pm\pi/4\).</p>
<p><b>(d)</b> \(|\psi(t)\rangle=\tfrac1{\sqrt2}\left(e^{-i\omega t/2}|\phi_0\rangle+e^{i\theta_1}e^{-3i\omega t/2}|\phi_1\rangle\right)\); \(\langle X\rangle(t)=\sqrt{\dfrac\hbar{2m\omega}}\cos(\omega t-\theta_1)\).</p>`});

D({id:'mqd-2013-1-q9', ano:2013, prova:'EUF 1º/2013 · Parte 2 · Q9', topicos:['angm'],
enunciado:R`<p>\(\vec L\), \(\vec R\) e \(\vec P\) são os operadores de momento angular, posição e momento linear.</p>`,
itens:[R`Usando \([L_i,L_j]=i\hbar\sum_k\epsilon_{ijk}L_k\), mostre que \(\vec L\times\vec L=i\hbar\vec L\).`,R`Com \(\vec L=\vec R\times\vec P\) e \([R_i,P_j]=i\hbar\delta_{ij}\), mostre que \([L_i,R_j]=i\hbar\sum_k\epsilon_{ijk}R_k\).`,R`Sabendo que \(\vec R\) e \(\vec P\) são hermitianos, mostre que as componentes de \(\vec L\) são hermitianas.`],
dica:R`\(\sum_{i,j}\epsilon_{ijk}\epsilon_{ijl}=2\delta_{kl}\). Em (c), \((AB)^\dagger=B^\dagger A^\dagger\).`,
solucao:R`<p><b>(a)</b> \((\vec L\times\vec L)_k=\sum\epsilon_{kij}L_iL_j=\tfrac12\sum\epsilon_{kij}[L_i,L_j]=\tfrac{i\hbar}2\sum\epsilon_{kij}\epsilon_{ijl}L_l=i\hbar L_k\).</p>
<p><b>(b)</b> \([L_i,R_j]=\sum\epsilon_{iab}R_a[P_b,R_j]=-i\hbar\sum\epsilon_{iaj}R_a=i\hbar\sum_k\epsilon_{ijk}R_k\).</p>
<p><b>(c)</b> \(L_i^\dagger=\sum\epsilon_{ijk}P_kR_j=\sum\epsilon_{ijk}(R_jP_k-i\hbar\delta_{jk})=L_i\), pois \(\epsilon_{ijj}=0\): componentes diferentes de \(R\) e \(P\) comutam.</p>`});

// ============ 1º/2014 ============
D({id:'mqd-2014-1-q8', ano:2014, prova:'EUF 1º/2014 · Parte 2 · Q8', topicos:['poco','post'],
enunciado:R`<p>Uma partícula de massa \(m\) está confinada numa caixa com paredes em \(x=0\) e \(x=a\).</p>`,
itens:[R`Determine a função de onda e a energia do fundamental.`,R`Se \(\psi(x)=A\left[\sin\frac{\pi x}a-3i\sin\frac{2\pi x}a\right]\), determine \(A\) e a probabilidade de obter \(2\pi^2\hbar^2/ma^2\) numa medida de energia.`,R`No estado fundamental, qual a distribuição de probabilidades do momento?`,R`No fundamental, as paredes são removidas instantaneamente (partícula livre, \(\hat H=\hat p^2/2m\)). Qual a energia da partícula livre?`],
dica:R`Em (c), calcule \(\phi(p)=\frac1{\sqrt{2\pi\hbar}}\int_0^a\psi_1e^{-ipx/\hbar}dx\).`,
solucao:R`<p><b>(a)</b> \(\psi_1=\sqrt{2/a}\sin(\pi x/a)\), \(E_1=\dfrac{\pi^2\hbar^2}{2ma^2}\).</p>
<p><b>(b)</b> \(|A|^2(1+9)\tfrac a2=1\Rightarrow A=1/\sqrt{5a}\). \(2\pi^2\hbar^2/ma^2=4E_1\) (estado \(n=2\)): probabilidade \(9/10\).</p>
<p><b>(c)</b> \(|\phi(p)|^2=\dfrac{4\pi a\hbar^3\cos^2(pa/2\hbar)}{(\pi^2\hbar^2-p^2a^2)^2}\). É simétrica em \(p\) (\(\langle p\rangle=0\)), com picos em \(p\approx\pm\pi\hbar/a\) e finita nesses pontos (o 0/0 tem limite).</p>
<p><b>(d)</b> A função de onda não muda no instante da remoção, então a distribuição de momento é a de (c) e a energia média se mantém: \(\langle H\rangle=\langle p^2\rangle/2m=E_1=\pi^2\hbar^2/2ma^2\). A energia não fica bem definida: o espectro livre é contínuo e há uma distribuição de valores.</p>`});

D({id:'mqd-2014-1-q9', ano:2014, prova:'EUF 1º/2014 · Parte 2 · Q9', topicos:['spin','evol'],
enunciado:R`<p>Uma partícula de spin 1/2 com \(\vec M=\gamma\vec S\) está num campo \(\vec B=B\hat y\): \(\hat{\mathcal H}=-\gamma B\hat S_y\). Em \(t=0\), \(|\psi(0)\rangle=|+\rangle\) (autoestado de \(S_z\)).</p>`,
itens:[R`Quais os valores possíveis de \(S_y\)?`,R`Encontre os autovetores de \(\hat S_y\).`,R`Obtenha \(|\psi(t)\rangle\) em termos de \(|\pm\rangle\).`,R`Obtenha \(\langle S_x\rangle\), \(\langle S_y\rangle\), \(\langle S_z\rangle\) em função do tempo.`],
dica:R`\(\omega=\gamma B\). Escreva \(|+\rangle=(|+_y\rangle+|-_y\rangle)/\sqrt2\).`,
solucao:R`<p><b>(a)</b> \(\pm\hbar/2\).</p>
<p><b>(b)</b> \(|\pm_y\rangle=(|+\rangle\pm i|-\rangle)/\sqrt2\).</p>
<p><b>(c)</b> \(E_\pm=\mp\hbar\omega/2\): \(|\psi(t)\rangle=\tfrac1{\sqrt2}(e^{i\omega t/2}|+_y\rangle+e^{-i\omega t/2}|-_y\rangle)=\cos\frac{\omega t}2|+\rangle-\sin\frac{\omega t}2|-\rangle\).</p>
<p><b>(d)</b> \(\langle S_z\rangle=\frac\hbar2\cos\omega t\), \(\langle S_x\rangle=-\frac\hbar2\sin\omega t\), \(\langle S_y\rangle=0\): precessão no plano \(xz\) em torno do campo.</p>`});

// ============ 1º/2015 ============
D({id:'mqd-2015-1-q8', ano:2015, prova:'EUF 1º/2015 · Parte 2 · Q8', topicos:['spin','post'],
enunciado:R`<p>O spin de um elétron está em \(|\psi\rangle=\alpha\left(|z_+\rangle-\tfrac{\sqrt2}2|z_-\rangle\right)\), com \(\hat{\vec S}=\hbar\vec\sigma/2\).</p>`,
itens:[R`Qual \(\alpha\in\mathbb R\) normaliza \(|\psi\rangle\)?`,R`Qual a probabilidade de medir \(-\hbar/2\) para o spin em \(z\)?`,R`Qual a probabilidade de medir \(+\hbar/2\) em \(x\)?`,R`Qual o valor esperado do spin no plano \(y=0\), numa direção a 45° entre \(x\) e \(z\)?`],
dica:R`\(|x_+\rangle=(|z_+\rangle+|z_-\rangle)/\sqrt2\). \(S_n=(S_x+S_z)/\sqrt2\).`,
solucao:R`<p><b>(a)</b> \(\alpha^2(1+\tfrac12)=1\Rightarrow\alpha=\sqrt{2/3}\).</p>
<p><b>(b)</b> \(\alpha^2/2=1/3\).</p>
<p><b>(c)</b> \(\dfrac{\alpha^2}{2}\left(1-\tfrac{\sqrt2}2\right)^2=\tfrac12-\tfrac{\sqrt2}3\approx0{,}03\).</p>
<p><b>(d)</b> \(\langle S_z\rangle=\frac\hbar2\left(\tfrac23-\tfrac13\right)=\frac\hbar6\); \(\langle S_x\rangle=\hbar\,\text{Re}(c_+^*c_-)=-\frac{\sqrt2}3\hbar\). \(\langle S_n\rangle=\dfrac{\hbar}{\sqrt2}\left(\tfrac16-\tfrac{\sqrt2}3\right)=\dfrac{(\sqrt2-4)\hbar}{12}\approx-0{,}22\hbar\).</p>`});

D({id:'mqd-2015-1-q9', ano:2015, prova:'EUF 1º/2015 · Parte 2 · Q9', topicos:['post','evol'],
enunciado:R`<p>Um observável \(\hat A\) satisfaz \([\hat A,\hat H]\ne0\), com autovetores \(\phi_\pm=(u_+\pm u_-)/\sqrt2\) e autovalores \(a_\pm\) (\(a_+\ne a_-\)), onde \(\hat Hu_\pm=E_\pm u_\pm\).</p>`,
itens:[R`Calcule \(\langle\hat A\rangle\) no estado \(\phi_+\).`,R`Calcule a projeção de \(\hat Hu_-\) no estado \(u_-\).`,R`Para um estado inicial arbitrário \(\psi(0)\), escreva \(\psi(t)\) em função de \(\hat H\).`,R`Calcule \(\langle A\rangle\) em \(t=\hbar\pi/[3(E_+-E_-)]\), se \(\psi(0)=\phi_+\) e \(E_+\ne E_-\).`],
dica:R`Escreva \(\psi(t)\) na base \(u_\pm\) e reexpresse em \(\phi_\pm\).`,
solucao:R`<p><b>(a)</b> \(a_+\).</p>
<p><b>(b)</b> \(\langle u_-|\hat H|u_-\rangle=E_-\).</p>
<p><b>(c)</b> \(\psi(t)=e^{-i\hat Ht/\hbar}\psi(0)\).</p>
<p><b>(d)</b> Com \(\theta=(E_+-E_-)t/2\hbar\): \(P(\phi_+)=\cos^2\theta\), \(P(\phi_-)=\sin^2\theta\). Em \(t\) dado, \(\theta=\pi/6\): \(\langle A\rangle=\tfrac34a_++\tfrac14a_-\).</p>`});

// ============ 2º/2014 ============
D({id:'mqd-2014-2-q8', ano:2014, prova:'EUF 2º/2014 · Parte 2 · Q8', topicos:['evol','post'],
enunciado:R`<p>Dois estados ortonormais \(|1\rangle\) e \(|2\rangle\) da molécula de amônia (N acima ou abaixo do plano dos H) formam a base, com \(H=\begin{pmatrix}E_0&-E_1\\-E_1&E_0\end{pmatrix}\).</p>`,
itens:[R`Se o sistema está inicialmente em \(|1\rangle\), permanecerá em \(|1\rangle\)? E se estiver em \(|2\rangle\)?`,R`Ache os autovalores \(E_I\), \(E_{II}\) e os autovetores \(|I\rangle\), \(|II\rangle\) em termos de \(|1\rangle\) e \(|2\rangle\).`,R`Que frequência de emissão de radiação se pode prever para a amônia?`,R`Ache a probabilidade de medir \(E_I\) no estado \(|\psi\rangle=\tfrac1{\sqrt5}|1\rangle-\tfrac2{\sqrt5}|2\rangle\).`],
dica:R`\(H=E_0\mathbb1-E_1\sigma_x\).`,
solucao:R`<p><b>(a)</b> Não: \(|1\rangle\) e \(|2\rangle\) não são estacionários (\(E_1\ne0\)); o sistema oscila entre eles com \(P_{1\to2}=\sin^2(E_1t/\hbar)\) (tunelamento do N).</p>
<p><b>(b)</b> \(E_I=E_0-E_1\), \(|I\rangle=(|1\rangle+|2\rangle)/\sqrt2\); \(E_{II}=E_0+E_1\), \(|II\rangle=(|1\rangle-|2\rangle)/\sqrt2\).</p>
<p><b>(c)</b> \(\nu=\dfrac{2E_1}{h}\) (≈ 24 GHz: a linha do maser de amônia).</p>
<p><b>(d)</b> \(|\langle I|\psi\rangle|^2=\dfrac{(1-2)^2}{10}=\dfrac1{10}\).</p>`});

D({id:'mqd-2014-2-q9', ano:2014, prova:'EUF 2º/2014 · Parte 2 · Q9', topicos:['osch','hidro'],
enunciado:R`<p>Uma partícula de massa \(m\) está em \(V=\tfrac12m\omega^2(x^2+y^2+z^2)\).</p>`,
itens:[R`Obtenha os níveis de energia.`,R`Para o fundamental e os dois primeiros níveis excitados, monte uma tabela com energia, degenerescência e estados (números quânticos).`,R`Com \(\nabla^2\psi=\frac1{r^2}\partial_r(r^2\partial_r\psi)-\frac{L^2}{\hbar^2r^2}\psi\) e \(L^2Y_{lm}=\hbar^2l(l+1)Y_{lm}\), escreva a equação radial e identifique o potencial efetivo.`,R`Resolva para \(l=0\) com \(R=e^{-\alpha r^2}\): determine \(\alpha\) e a energia.`],
dica:R`Separe em três osciladores 1D.`,
solucao:R`<p><b>(a)</b> \(E=(n_x+n_y+n_z+\tfrac32)\hbar\omega\).</p>
<p><b>(b)</b> \(\tfrac32\hbar\omega\): 1 estado (0,0,0). \(\tfrac52\hbar\omega\): 3 estados (1,0,0),(0,1,0),(0,0,1). \(\tfrac72\hbar\omega\): 6 estados (2,0,0)×3 e (1,1,0)×3.</p>
<p><b>(c)</b> \(-\dfrac{\hbar^2}{2m}\dfrac1{r^2}\dfrac{d}{dr}\left(r^2\dfrac{dR}{dr}\right)+V_{ef}R=ER\), com \(V_{ef}=\tfrac12m\omega^2r^2+\dfrac{\hbar^2l(l+1)}{2mr^2}\).</p>
<p><b>(d)</b> \(R'=-2\alpha rR\), \(\frac1{r^2}(r^2R')'=(4\alpha^2r^2-6\alpha)R\). Termo \(r^2\): \(\alpha=\dfrac{m\omega}{2\hbar}\). Constante: \(E=\dfrac{3\hbar^2\alpha}{m}=\tfrac32\hbar\omega\).</p>`});

// ============ 2º/2015 ============
D({id:'mqd-2015-2-q8', ano:2015, prova:'EUF 2º/2015 · Parte 2 · Q8', topicos:['poco','post'],
enunciado:R`<p>Uma partícula livre de massa \(m\) está confinada a uma circunferência de perímetro \(L\).</p>`,
itens:[R`Escreva a equação de Schrödinger.`,R`Calcule \(\psi(t,x)\) normalizada (\(0\le x\lt L\)), supondo momento \(p\) e energia \(E\) bem definidos.`,R`Num autoestado de energia, quais os dois menores autovalores não nulos?`,R`Para o menor valor não nulo de energia, escreva a função de onda com densidade \((2/L)\cos^2(2\pi x/L)\).`],
dica:R`Condição periódica: \(\psi(x+L)=\psi(x)\Rightarrow p=2\pi\hbar n/L\).`,
solucao:R`<p><b>(a)</b> \(i\hbar\partial_t\psi=-\dfrac{\hbar^2}{2m}\partial_x^2\psi\).</p>
<p><b>(b)</b> \(\psi=\dfrac1{\sqrt L}e^{i(px-Et)/\hbar}\), com \(p=2\pi\hbar n/L\), \(E=p^2/2m\).</p>
<p><b>(c)</b> \(E_n=\dfrac{2\pi^2\hbar^2n^2}{mL^2}\): \(\dfrac{2\pi^2\hbar^2}{mL^2}\) (\(n=\pm1\)) e \(\dfrac{8\pi^2\hbar^2}{mL^2}\) (\(n=\pm2\)). Cada nível é duplamente degenerado (sentidos horário e anti-horário).</p>
<p><b>(d)</b> \(\psi=\sqrt{\tfrac2L}\cos\dfrac{2\pi x}{L}\,e^{-iE_1t/\hbar}=\dfrac1{\sqrt{2L}}\left(e^{i2\pi x/L}+e^{-i2\pi x/L}\right)e^{-iE_1t/\hbar}\): superposição de \(n=+1\) e \(n=-1\), uma onda estacionária.</p>`});

D({id:'mqd-2015-2-q9', ano:2015, prova:'EUF 2º/2015 · Parte 2 · Q9', topicos:['spin','post'],
enunciado:R`<p>Um par de spins 1/2, A e B, está em \(|\psi\rangle=\alpha\left(|z_+^A\rangle|z_-^B\rangle-|z_-^A\rangle|z_+^B\rangle\right)\).</p>`,
itens:[R`Qual \(\alpha\in\mathbb R\) normaliza \(|\psi\rangle\)?`,R`Qual a probabilidade de medir em \(z\): \(-\hbar/2\) para A e \(+\hbar/2\) para B?`,R`Qual a probabilidade de medir em \(x\): \(+\hbar/2\) para A e \(-\hbar/2\) para B?`,R`Qual a probabilidade de medir \(-\hbar/2\) em \(z\) para A e \(+\hbar/2\) em \(x\) para B?`],
dica:R`É o singleto: tem a mesma forma em qualquer eixo, \(\propto|+-\rangle-|-+\rangle\).`,
solucao:R`<p><b>(a)</b> \(\alpha=1/\sqrt2\).</p>
<p><b>(b)</b> \(1/2\).</p>
<p><b>(c)</b> O singleto é invariante por rotação: \(\tfrac1{\sqrt2}(|x_+x_-\rangle-|x_-x_+\rangle)\) a menos de fase. Probabilidade \(1/2\).</p>
<p><b>(d)</b> Componente \(\langle z_-^A|\psi\rangle=-\tfrac1{\sqrt2}|z_+^B\rangle\); projetando em \(|x_+^B\rangle\): \(\tfrac12\cdot\tfrac12=\tfrac14\).</p>`});

// ============ 1º/2018 ============
D({id:'mqd-2018-1-q3', ano:2018, prova:'EUF 1º/2018 · Parte 1 · Q3', topicos:['poco'],
enunciado:R`<p>Um feixe de partículas de massa \(m\) move-se no sentido \(+x\) e encontra o degrau \(V=0\) (\(x\lt0\)), \(V=V_0>0\) (\(x>0\)).</p>`,
itens:[R`Para \(E>V_0\), encontre a forma geral da solução nas duas regiões.`,R`Classicamente todas passam; quanticamente algumas são refletidas. Qual o percentual refletido para \(E>V_0\)?`,R`Para \(E\lt V_0\), qual a forma geral da solução em \(x>0\)?`,R`Determine a probabilidade de reflexão para \(E=V_0/2\).`],
dica:R`\(k_1=\sqrt{2mE}/\hbar\), \(k_2=\sqrt{2m(E-V_0)}/\hbar\). Continuidade de \(\psi\) e \(\psi'\) em 0.`,
solucao:R`<p><b>(a)</b> \(x\lt0\): \(Ae^{ik_1x}+Be^{-ik_1x}\); \(x>0\): \(Ce^{ik_2x}\) (só onda transmitida).</p>
<p><b>(b)</b> \(R=\left(\dfrac{k_1-k_2}{k_1+k_2}\right)^2=\left(\dfrac{\sqrt E-\sqrt{E-V_0}}{\sqrt E+\sqrt{E-V_0}}\right)^2\), vezes 100%.</p>
<p><b>(c)</b> \(De^{-\kappa x}\), \(\kappa=\sqrt{2m(V_0-E)}/\hbar\) (o termo crescente é descartado).</p>
<p><b>(d)</b> \(B/A=\dfrac{k_1-i\kappa}{k_1+i\kappa}\) tem módulo 1: \(R=1\) (reflexão total, apesar da penetração evanescente).</p>`});

D({id:'mqd-2018-1-q8', ano:2018, prova:'EUF 1º/2018 · Parte 2 · Q8', topicos:['post','evol'],
enunciado:R`<p>Num espaço com base \(\{|1\rangle,|2\rangle,|3\rangle\}\), \(H_0=\text{diag}(E_0,E,E)\).</p>`,
itens:[R`Com o protocolo \(P_1\), medidas de energia dão \(E_0\) com probabilidade 1. Qual o estado preparado?`,R`Com o protocolo \(P_2\), dão \(E\) com probabilidade 1. Quais os estados possíveis?`,R`Em \(t=0\) liga-se uma perturbação: \(H=H_0+\begin{pmatrix}0&0&0\\0&0&W\\0&W&0\end{pmatrix}\). Quais os autovalores e autovetores?`,R`Se antes de \(t=0\) o sistema estava em \(|2\rangle\), qual o estado para \(t>0\)?`],
dica:R`No subespaço \(\{|2\rangle,|3\rangle\}\), \(H=E\mathbb1+W\sigma_x\).`,
solucao:R`<p><b>(a)</b> \(|1\rangle\) (a menos de fase).</p>
<p><b>(b)</b> Qualquer \(\alpha|2\rangle+\beta|3\rangle\) normalizado (subespaço degenerado).</p>
<p><b>(c)</b> \(E_0\): \(|1\rangle\); \(E\pm W\): \((|2\rangle\pm|3\rangle)/\sqrt2\).</p>
<p><b>(d)</b> \(|\psi(t)\rangle=e^{-iEt/\hbar}\left[\cos\dfrac{Wt}\hbar|2\rangle-i\sin\dfrac{Wt}\hbar|3\rangle\right]\).</p>`});

// ============ 2º/2018 ============
D({id:'mqd-2018-2-q4', ano:2018, prova:'EUF 2º/2018 · Parte 1 · Q4', topicos:['post','evol'],
enunciado:R`<p>Os estados ortonormais \(|1\rangle,|2\rangle,|3\rangle\) são autoestados degenerados de um observável \(D\), com autovalor \(\delta\). O hamiltoniano atua como \(H|1\rangle=\Omega|1\rangle+\Omega|3\rangle\), \(H|2\rangle=\Omega|2\rangle+\Delta|3\rangle\), \(H|3\rangle=\Omega|1\rangle+\Delta|2\rangle+\Omega|3\rangle\).</p>`,
itens:[R`Escreva a matriz de \(H\).`,R`\(D\) pode ser medido simultaneamente com a energia? Justifique.`,R`Determine autovalores e autovetores de \(H\).`,R`Em \(t=0\), \(|\psi\rangle=\dfrac{\Delta|1\rangle-\Omega|2\rangle}{\sqrt{\Omega^2+\Delta^2}}\). Encontre \(|\psi(t)\rangle\).`],
dica:R`\(H=\Omega\mathbb1+M\), com \(M\) só nos elementos (1,3) e (2,3). O vetor de (d) é aniquilado por \(M\).`,
solucao:R`<p><b>(a)</b> \(H=\begin{pmatrix}\Omega&0&\Omega\\0&\Omega&\Delta\\\Omega&\Delta&\Omega\end{pmatrix}\) (coluna \(j\) = \(H|j\rangle\)).</p>
<p><b>(b)</b> Sim: \(D=\delta\mathbb1\) comuta com tudo.</p>
<p><b>(c)</b> Com \(\Lambda=\sqrt{\Omega^2+\Delta^2}\): \(E=\Omega\) com \((\Delta,-\Omega,0)/\Lambda\); \(E=\Omega\pm\Lambda\) com \(\dfrac{1}{\sqrt2\Lambda}(\Omega,\Delta,\pm\Lambda)\).</p>
<p><b>(d)</b> É o autovetor de energia \(\Omega\): \(|\psi(t)\rangle=e^{-i\Omega t/\hbar}|\psi(0)\rangle\) (estacionário).</p>`});

D({id:'mqd-2018-2-q9', ano:2018, prova:'EUF 2º/2018 · Parte 2 · Q9', topicos:['poco'],
enunciado:R`<p>Partícula de massa \(m\) no poço finito \(V=0\) em \(0\lt x\lt a\) e \(V=V_0>0\) fora, com \(0\lt E\lt V_0\).</p>`,
itens:[R`Escreva a equação de Schrödinger nas três regiões e as soluções gerais.`,R`Quais as condições de contorno em \(x=0\) e \(x=a\)?`,R`Há probabilidade não nula de encontrar a partícula entre \(x=a\) e \(x=a+b\) (\(b>0\))? Justifique.`,R`Numa medida de energia, pode-se obter qualquer valor em \([0,V_0]\)? Justifique.`,R`Determine as energias para o poço infinito (\(V_0\to\infty\)).`],
dica:R`\(k=\sqrt{2mE}/\hbar\), \(\kappa=\sqrt{2m(V_0-E)}/\hbar\).`,
solucao:R`<p><b>(a)</b> \(x\lt0\): \(Ae^{\kappa x}\); dentro: \(B\sin kx+C\cos kx\); \(x>a\): \(De^{-\kappa x}\).</p>
<p><b>(b)</b> \(\psi\) e \(\psi'\) contínuas em 0 e em \(a\).</p>
<p><b>(c)</b> Sim: \(|\psi|^2\propto e^{-2\kappa x}\ne0\) (região classicamente proibida; tunelamento).</p>
<p><b>(d)</b> Não: as condições de contorno só são satisfeitas para um conjunto discreto de energias.</p>
<p><b>(e)</b> \(E_n=\dfrac{n^2\pi^2\hbar^2}{2ma^2}\).</p>`});

// ============ 1º/2019 ============
D({id:'mqd-2019-1-q3', ano:2019, prova:'EUF 1º/2019 · Parte 1 · Q3', topicos:['poco','evol'],
enunciado:R`<p>Uma partícula de massa \(m\) move-se numa caixa retangular \(0\le x\le a\), \(0\le y\le b\) (potencial nulo dentro e infinito fora).</p>`,
itens:[R`Escreva a equação de Schrödinger independente do tempo.`,R`Encontre autofunções \(\Psi_{n_xn_y}=\psi_{n_x}(x)\phi_{n_y}(y)\) e autovalores, normalizando.`,R`Em \(t=0\), \(\Phi=C\Psi_{11}+D\Psi_{12}\) (C, D reais). Que energias podem ser medidas e com que probabilidades?`,R`Esse estado é estacionário? Se não, encontre \(\Phi(x,y,t)\).`],
dica:R`Separação de variáveis: dois poços 1D.`,
solucao:R`<p><b>(a)</b> \(-\dfrac{\hbar^2}{2m}\left(\partial_x^2+\partial_y^2\right)\Psi=E\Psi\), com \(\Psi=0\) nas paredes.</p>
<p><b>(b)</b> \(\Psi_{n_xn_y}=\dfrac{2}{\sqrt{ab}}\sin\dfrac{n_x\pi x}a\sin\dfrac{n_y\pi y}b\), \(E=\dfrac{\pi^2\hbar^2}{2m}\left(\dfrac{n_x^2}{a^2}+\dfrac{n_y^2}{b^2}\right)\).</p>
<p><b>(c)</b> Normalização: \(C^2+D^2=1\). \(E_{11}\) com probabilidade \(C^2\) e \(E_{12}\) com \(D^2\).</p>
<p><b>(d)</b> Não (se \(C,D\ne0\)): \(\Phi(t)=C\Psi_{11}e^{-iE_{11}t/\hbar}+D\Psi_{12}e^{-iE_{12}t/\hbar}\).</p>`});

D({id:'mqd-2019-1-q8', ano:2019, prova:'EUF 1º/2019 · Parte 2 · Q8', topicos:['pert','post'],
enunciado:R`<p>Na base \(\{|1\rangle,|2\rangle,|3\rangle\}\), \(\hat H_0=E_1|1\rangle\langle1|+E_2|2\rangle\langle2|+E_1|3\rangle\langle3|\). Com uma perturbação externa, \(\hat H=\hat H_0+W(|1\rangle\langle3|+|3\rangle\langle1|)\), \(W\) real.</p>`,
itens:[R`Escreva \(\hat H\) em forma matricial.`,R`Encontre os autovalores e autovetores de \(\hat H\).`,R`Escreva \(\hat H_0\) na base dos autovetores \(|\psi_i\rangle\).`,R`Para quais valores não nulos de \(W\) ainda há degenerescência?`],
dica:R`O bloco \(\{|1\rangle,|3\rangle\}\) é \(E_1\mathbb1+W\sigma_x\).`,
solucao:R`<p><b>(a)</b> \(\hat H=\begin{pmatrix}E_1&0&W\\0&E_2&0\\W&0&E_1\end{pmatrix}\).</p>
<p><b>(b)</b> \(E_1-W\): \((|1\rangle-|3\rangle)/\sqrt2\); \(E_2\): \(|2\rangle\); \(E_1+W\): \((|1\rangle+|3\rangle)/\sqrt2\).</p>
<p><b>(c)</b> \(\hat H_0\) é \(E_1\mathbb1\) no subespaço \(\{|1\rangle,|3\rangle\}\), logo continua diagonal: \(\text{diag}(E_1,E_2,E_1)\) na base \(|\psi_i\rangle\).</p>
<p><b>(d)</b> Quando \(E_1\pm W=E_2\), isto é \(W=\pm(E_2-E_1)\).</p>`});

// ============ 2º/2019 ============
D({id:'mqd-2019-2-q4', ano:2019, prova:'EUF 2º/2019 · Parte 1 · Q4', topicos:['osch','post'],
enunciado:R`<p>A função de onda de uma partícula num potencial confinante é \(\Psi(x,t)=C\left(x^2-\dfrac{\hbar}{4am}\right)e^{-a\left[mx^2/\hbar+5it\right]}\), com \(C,a>0\).</p>`,
itens:[R`Por análise dimensional, determine a dimensão de \(C\).`,R`A partícula está num autoestado de energia? Qual o autovalor?`,R`Com \(\langle x^2\rangle=C^2\sqrt{\tfrac\pi2}\tfrac5{32}\left(\tfrac\hbar{am}\right)^{7/2}\) e \(\langle p^2\rangle=40\sqrt{\tfrac2\pi}\tfrac{\hbar^2}{C^2}\left(\tfrac{am}\hbar\right)^{7/2}\), determine os desvios padrão de \(x\) e \(p\). São consistentes com o princípio de incerteza?`,R`Determine a energia potencial.`],
dica:R`Compare com o oscilador: \(e^{-m\omega x^2/2\hbar}\Rightarrow\omega=2a\), e \(H_2\propto x^2-\hbar/2m\omega\).`,
solucao:R`<p><b>(a)</b> \(|\Psi|^2dx\) é adimensional ⇒ \([\Psi]=L^{-1/2}\); \(C\cdot L^2=L^{-1/2}\Rightarrow[C]=L^{-5/2}\).</p>
<p><b>(b)</b> Sim: a dependência temporal é só a fase \(e^{-5iat}\), com \(E=5\hbar a=\tfrac52\hbar\omega\) (estado \(n=2\) do oscilador de \(\omega=2a\)).</p>
<p><b>(c)</b> \(\langle x\rangle=\langle p\rangle=0\) por paridade. \(\sigma_x^2\sigma_p^2=\tfrac5{32}\cdot40\,\hbar^2=\tfrac{25}4\hbar^2\Rightarrow\sigma_x\sigma_p=\tfrac52\hbar\ge\tfrac\hbar2\). Consistente (é \((n+\tfrac12)\hbar\) com \(n=2\)).</p>
<p><b>(d)</b> \(V=\tfrac12m\omega^2x^2=2ma^2x^2\).</p>`});

D({id:'mqd-2019-2-q9', ano:2019, prova:'EUF 2º/2019 · Parte 2 · Q9', topicos:['osch','post'],
enunciado:R`<p>Oscilador 1D \(\hat H=\frac{\hat p_x^2}{2m}+\frac12m\omega^2\hat x^2\), com \(\hat a=\sqrt{\frac{m\omega}{2\hbar}}\hat x+\frac{i}{\sqrt{2m\hbar\omega}}\hat p_x\). Depois, o oscilador bidimensional \(\hat H_2=\frac{\hat p_x^2+\hat p_y^2}{2m}+\frac12m\omega_x^2\hat x^2+\frac12m\omega_y^2\hat y^2\).</p>`,
itens:[R`Obtenha \([\hat a,\hat a^\dagger]\) e escreva \(\hat H\) em termos de \(\hat a\), \(\hat a^\dagger\). Por que \(\hat N=\hat a^\dagger\hat a\) é o "operador número"?`,R`Justifique que os autoestados de \(\hat H_2\) são \(|n_x\rangle\otimes|n_y\rangle\) e obtenha \(E_{n_xn_y}\).`,R`Para \(|\psi(0)\rangle=\frac1{\sqrt5}(|2,0\rangle+2|1,1\rangle)\), escreva \(|\psi(t)\rangle\). Medindo a energia total em \(t'\), qual a probabilidade de o estado logo após ter \(\langle\hat p_x^2\rangle=5m\hbar\omega_x/2\)?`,R`No caso isotrópico (\(\omega_x=\omega_y=\omega\)), qual a degenerescência do \(n\)-ésimo excitado?`],
dica:R`\(\langle n|\hat p^2|n\rangle=(n+\tfrac12)m\hbar\omega\).`,
solucao:R`<p><b>(a)</b> \([\hat a,\hat a^\dagger]=1\); \(\hat H=\hbar\omega(\hat N+\tfrac12)\). \(\hat N\) tem autovalores \(n\): conta os quanta \(\hbar\omega\) de excitação.</p>
<p><b>(b)</b> \(\hat H_2=\hat H_x+\hat H_y\), que comutam e atuam em variáveis separadas: \(E=(n_x+\tfrac12)\hbar\omega_x+(n_y+\tfrac12)\hbar\omega_y\).</p>
<p><b>(c)</b> \(|\psi(t)\rangle=\frac1{\sqrt5}\left(e^{-iE_{20}t/\hbar}|2,0\rangle+2e^{-iE_{11}t/\hbar}|1,1\rangle\right)\). \(\langle p_x^2\rangle=\tfrac52m\hbar\omega_x\iff n_x=2\). Se \(\omega_x\ne\omega_y\), \(E_{20}\ne E_{11}\) e a medida colapsa em \(|2,0\rangle\) com probabilidade \(1/5\).</p>
<p><b>(d)</b> \(N=n_x+n_y=n\): \(n+1\) estados.</p>`});

})();
