window.BANK = window.BANK || [];
(function(){
const D = q => window.BANK.push(Object.assign({area:'em', tipo:'disc'}, q));
const R = String.raw;

D({id:'emd-2010-2-q6', ano:2010, prova:'EUF 2º/2010 · Parte 2 · Q6', topicos:['maxw','magst','eletrost'], fig:'fig/emd_10b_q6.png',
enunciado:R`<p>Um cabo coaxial (fio sólido de raio \(a\), casca concêntrica de raio \(b\), comprimento \(L\gg b\)) liga uma bateria de fem \(V\) a uma resistência \(R\). Despreze a resistência do cabo.</p>`,
itens:[R`Calcule o vetor campo elétrico no interior do cabo (\(a\lt r\lt b\)).`,R`Calcule o vetor campo magnético no interior do cabo (\(a\lt r\lt b\)).`,R`Calcule o vetor de Poynting, esboçando \(\vec E\), \(\vec B\) e \(\vec S\) na seção transversal. O que aconteceria se os polos da bateria fossem invertidos?`,R`Usando o vetor de Poynting, calcule a potência que flui da bateria para o resistor e explique por que esse resultado é esperado.`],
dica:R`O fio interno está a \(V\) em relação à casca: isso fixa \(\lambda\). A corrente é \(I=V/R\). Integre \(\vec S\) na coroa \(a\lt r\lt b\).`,
solucao:R`<p><b>(a)</b> Gauss: \(E=\dfrac{\lambda}{2\pi\epsilon_0r}\); com \(V=\dfrac{\lambda}{2\pi\epsilon_0}\ln\dfrac ba\): \(\vec E=\dfrac{V}{r\ln(b/a)}\hat r\).</p>
<p><b>(b)</b> Ampère, com \(I=V/R\) no fio interno (sentido \(+\hat z\), da bateria para o resistor): \(\vec B=\dfrac{\mu_0V}{2\pi Rr}\hat\varphi\).</p>
<p><b>(c)</b> \(\vec S=\dfrac{\vec E\times\vec B}{\mu_0}=\dfrac{V^2}{2\pi Rr^2\ln(b/a)}\hat z\), da bateria para o resistor (\(\hat r\times\hat\varphi=\hat z\)). Invertendo os polos, \(\vec E\) e \(\vec B\) trocam de sinal juntos e \(\vec S\) não muda: a energia continua indo para o resistor.</p>
<p><b>(d)</b> \(P=\displaystyle\int_a^b S\,2\pi r\,dr=\frac{V^2}{R\ln(b/a)}\ln\frac ba=\frac{V^2}{R}\), exatamente a potência dissipada por efeito Joule. A energia viaja pelo campo, no espaço entre os condutores, e não “dentro dos fios”.</p>`});

D({id:'emd-2010-2-q7', ano:2010, prova:'EUF 2º/2010 · Parte 2 · Q7', topicos:['pot','cond'], fig:'fig/emd_10b_q7.png',
enunciado:R`<p>Uma carga puntiforme \(Q>0\) está a uma distância \(D\) de uma placa infinita, condutora e aterrada (figura: \(Q\) na origem, placa em \(x=D\)).</p>`,
itens:[R`Desenhe as linhas de campo e as equipotenciais. Justifique.`,R`Calcule as componentes \(\hat x\) e \(\hat y\) do campo em todo o espaço à esquerda da placa, em termos das coordenadas do ponto P.`,R`Qual a densidade de carga na placa?`,R`Determine a força exercida pela placa sobre a carga.`],
dica:R`Imagem \(-Q\) em \(x=2D\). Na placa, a componente normal do campo dá \(\sigma=\epsilon_0E_n\).`,
solucao:R`<p><b>(a)</b> As linhas saem de \(Q\) e chegam à placa perpendicularmente (a placa é equipotencial, \(V=0\)). As equipotenciais são quase esferas perto de \(Q\) e se achatam até coincidir com o plano da placa.</p>
<p><b>(b)</b> Com \(k=1/4\pi\epsilon_0\), \(r_1=\sqrt{x^2+y^2}\) e \(r_2=\sqrt{(x-2D)^2+y^2}\) (em 3D, some \(z^2\) nos dois):</p>
\[E_x=kQ\left[\frac{x}{r_1^3}-\frac{x-2D}{r_2^3}\right],\qquad E_y=kQ\,y\left[\frac{1}{r_1^3}-\frac{1}{r_2^3}\right].\]
<p><b>(c)</b> Em \(x=D\): \(E_y=0\) e \(E_x=\dfrac{2kQD}{(D^2+y^2)^{3/2}}\). A normal que sai do condutor é \(-\hat x\), logo \(\sigma=-\epsilon_0E_x=-\dfrac{QD}{2\pi(D^2+y^2+z^2)^{3/2}}\). A integral sobre o plano dá \(-Q\).</p>
<p><b>(d)</b> \(\vec F=\dfrac{Q^2}{4\pi\epsilon_0(2D)^2}\hat x=\dfrac{Q^2}{16\pi\epsilon_0D^2}\hat x\), atrativa (para a placa).</p>`});

D({id:'emd-2011-1-q6', ano:2011, prova:'EUF 1º/2011 · Parte 2 · Q6', topicos:['pot','cond','mat'],
enunciado:R`<p>Uma esfera metálica descarregada de raio \(R\) é colocada num campo inicialmente uniforme \(\vec E_i=E_0\hat k\). Origem no centro da esfera.</p>`,
itens:[R`Esboce as linhas de campo em todo o espaço, com argumentos físicos.`,R`Determine \(\vec E_f(\vec r)\) em todo o espaço. Encontre os campos para \(|\vec r|\gg R\) e \(|\vec r|\approx R\) e confira com o esboço.`,R`Ache a densidade de carga na esfera. Para \(R=10\) cm e \(E_0=100\) N/C, calcule as cargas nos hemisférios norte e sul.`,R`Se a esfera for dielétrica, discuta qualitativamente o que muda e esboce as linhas.`],
dica:R`Laplace com \(V\to-E_0r\cos\theta\) longe e \(V=0\) na esfera: \(V=-E_0\left(r-\dfrac{R^3}{r^2}\right)\cos\theta\).`,
solucao:R`<p><b>(a)</b> As linhas chegam e saem da esfera perpendicularmente à superfície (condutor equipotencial), concentrando-se nos polos; longe, voltam a ser uniformes.</p>
<p><b>(b)</b> Para \(r>R\): \(\vec E=E_0\left(1+\dfrac{2R^3}{r^3}\right)\cos\theta\,\hat r-E_0\left(1-\dfrac{R^3}{r^3}\right)\sin\theta\,\hat\theta\). Dentro, \(\vec E=0\). Longe: \(\vec E\to E_0\hat k\). Em \(r=R\): \(\vec E=3E_0\cos\theta\,\hat r\), normal à superfície.</p>
<p><b>(c)</b> \(\sigma=\epsilon_0E_r(R)=3\epsilon_0E_0\cos\theta\). Hemisfério norte: \(Q_N=\displaystyle\int_0^{\pi/2}3\epsilon_0E_0\cos\theta\,2\pi R^2\sin\theta\,d\theta=3\pi\epsilon_0E_0R^2\approx2{,}8\times10^{-11}\) C (≈ 28 pC); sul: \(-28\) pC.</p>
<p><b>(d)</b> No dielétrico o campo interno não se anula: fica uniforme e menor, \(E_{in}=\dfrac{3}{\epsilon_r+2}E_0\). As linhas atravessam a esfera, mais espaçadas dentro, e a perturbação externa é um dipolo mais fraco que o do condutor.</p>`});

D({id:'emd-2011-1-q7', ano:2011, prova:'EUF 1º/2011 · Parte 2 · Q7', topicos:['maxw'], fig:'fig/emd_11a_q7.png',
enunciado:R`<p>Um fio sólido de raio \(a\) ao longo de \(z\) conduz corrente constante \(I\), uniforme na seção. Uma pequena lacuna de largura \(w\ll a\) forma um capacitor de placas paralelas, com carga nula em \(t=0\).</p>`,
itens:[R`Encontre o campo elétrico na lacuna em função de \(\rho\) e \(t\). Despreze efeitos de borda.`,R`Encontre o campo magnético na lacuna.`,R`Calcule a densidade de energia \(u_{em}\) e o vetor de Poynting, com direção e sentido.`,R`Determine a energia total \(U_{em}\) na lacuna e compare \(dU_{em}/dt\) com o fluxo do vetor de Poynting.`],
dica:R`\(\sigma=It/\pi a^2\). Para \(\vec B\), Ampère-Maxwell com a corrente de deslocamento envolvida por um círculo de raio \(\rho\).`,
solucao:R`<p><b>(a)</b> \(\vec E=\dfrac{It}{\pi a^2\epsilon_0}\hat z\), uniforme.</p>
<p><b>(b)</b> \(B\,2\pi\rho=\mu_0\epsilon_0\pi\rho^2\dot E=\mu_0I\rho^2/a^2\Rightarrow\vec B=\dfrac{\mu_0I\rho}{2\pi a^2}\hat\varphi\) (\(\rho\lt a\)).</p>
<p><b>(c)</b> \(u=\dfrac{\epsilon_0E^2}{2}+\dfrac{B^2}{2\mu_0}=\dfrac{I^2t^2}{2\pi^2a^4\epsilon_0}+\dfrac{\mu_0I^2\rho^2}{8\pi^2a^4}\). \(\vec S=\dfrac{\vec E\times\vec B}{\mu_0}=-\dfrac{I^2t\rho}{2\pi^2\epsilon_0a^4}\hat\rho\): radial, para dentro.</p>
<p><b>(d)</b> Parte elétrica: \(\dfrac{\epsilon_0E^2}{2}\pi a^2w=\dfrac{I^2t^2w}{2\pi\epsilon_0a^2}\); a parte magnética, \(\mu_0I^2w/16\pi\), é constante. Então \(\dfrac{dU_{em}}{dt}=\dfrac{I^2tw}{\pi\epsilon_0a^2}\). Fluxo para dentro pela superfície lateral: \(|S(a)|\,2\pi aw=\dfrac{I^2tw}{\pi\epsilon_0a^2}\). São iguais (teorema de Poynting).</p>`});

D({id:'emd-2011-2-q6', ano:2011, prova:'EUF 2º/2011 · Parte 2 · Q6', topicos:['eletrost','cond'],
enunciado:R`<p>Numa fábrica, chocolate em pó carregado gera densidade uniforme \(\rho>0\) dentro de uma tubulação de raio \(R\). Os tubos são condutores e aterrados, e o pó não altera a constante dielétrica do ar.</p>`,
itens:[R`Calcule o campo elétrico dentro e fora da tubulação (cilindro muito longo).`,R`Calcule o potencial dentro e fora, com \(V=0\) na parede.`,R`Esboce \(E\) e \(V\) em função da distância ao eixo.`,R`Se o campo exceder \(E_0\), há faísca. Que condição a tubulação deve satisfazer para evitar o risco?`],
dica:R`Fora: a carga induzida no tubo aterrado anula a do pó.`,
solucao:R`<p><b>(a)</b> Dentro: \(\vec E=\dfrac{\rho r}{2\epsilon_0}\hat r\). Fora: a parede interna recebe \(-\rho\pi R^2\) por comprimento e o tubo aterrado não tem carga externa, logo \(E=0\).</p>
<p><b>(b)</b> Dentro: \(V=\dfrac{\rho(R^2-r^2)}{4\epsilon_0}\); fora, \(V=0\).</p>
<p><b>(c)</b> \(E\) cresce linearmente até \(\rho R/2\epsilon_0\) na parede e cai a zero; \(V\) é uma parábola com máximo \(\rho R^2/4\epsilon_0\) no eixo e zero da parede para fora.</p>
<p><b>(d)</b> O campo máximo está na parede: \(\dfrac{\rho R}{2\epsilon_0}\lt E_0\Rightarrow R\lt\dfrac{2\epsilon_0E_0}{\rho}\). Tubos mais finos são mais seguros.</p>`});

D({id:'emd-2011-2-q7', ano:2011, prova:'EUF 2º/2011 · Parte 2 · Q7', topicos:['ondas','maxw'],
enunciado:R`<p>Um plasma é tratado como gás clássico de íons positivos e elétrons; interessa a interação de uma onda EM com os elétrons livres (densidade \(n\)), muito mais leves que os íons.</p>`,
itens:[R`Para \(\vec E=\vec E_0e^{i(\vec k\cdot\vec r-\omega t)}\), mostre que \(\nabla\to i\vec k\) e \(\partial_t\to-i\omega\). Reescreva as equações de Maxwell.`,R`Para a onda em \(z\), mostre que a densidade de corrente induzida é \(\vec J=i\dfrac{ne^2}{m\omega}\vec E\). Justifique as hipóteses.`,R`A partir das equações de Maxwell, obtenha a relação de dispersão \(\omega(k)\).`,R`O plasma admite ondas de qualquer frequência? Justifique.`],
dica:R`Elétron: \(m\dot{\vec v}=-e\vec E\) (despreze a força magnética, pois \(v\ll c\), e o movimento dos íons).`,
solucao:R`<p><b>(a)</b> \(\partial_x e^{i(\vec k\cdot\vec r-\omega t)}=ik_xe^{\cdots}\) e \(\partial_t\to-i\omega\). Então \(i\vec k\cdot\vec E=\rho/\epsilon_0\) (≈ 0), \(i\vec k\cdot\vec B=0\), \(\vec k\times\vec E=\omega\vec B\) e \(i\vec k\times\vec B=\mu_0\vec J-i\omega\mu_0\epsilon_0\vec E\).</p>
<p><b>(b)</b> \(-i\omega m\vec v=-e\vec E\Rightarrow\vec v=\dfrac{e\vec E}{i\omega m}\); \(\vec J=-ne\vec v=i\dfrac{ne^2}{m\omega}\vec E\). Hipóteses: íons imóveis, \(v\ll c\) (força magnética desprezível), sem colisões, amplitude pequena.</p>
<p><b>(c)</b> \(\vec k\times(\vec k\times\vec E)=-k^2\vec E=\omega\,\vec k\times\vec B\), com \(\vec k\times\vec B=\left(\dfrac{\mu_0ne^2}{m\omega}-\omega\mu_0\epsilon_0\right)\vec E\). Resulta:</p>
\[\omega^2=\omega_p^2+c^2k^2,\qquad\omega_p^2=\frac{ne^2}{\epsilon_0m}.\]
<p><b>(d)</b> Não. Para \(\omega\lt\omega_p\), \(k\) é imaginário: a onda é evanescente e é refletida. Só se propagam ondas com \(\omega>\omega_p\) (por isso a ionosfera reflete ondas de rádio de baixa frequência).</p>`});

D({id:'emd-2012-1-q6', ano:2012, prova:'EUF 1º/2012 · Parte 2 · Q6', topicos:['magst','induc'],
enunciado:R`<p>Um cabo coaxial: cilindro condutor de raio \(a\) e casca fina de raio \(b\), com correntes iguais e opostas \(i\).</p>`,
itens:[R`Determine \(B\) entre os condutores (\(a\le r\le b\)).`,R`Determine \(B\) fora do cabo (\(r\ge b\)).`,R`Determine \(B\) dentro do cilindro interno (\(r\le a\)), com corrente uniforme na seção.`,R`Calcule a energia magnética por unidade de comprimento.`],
dica:R`Ampère em cada região; \(u_B=B^2/2\mu_0\).`,
solucao:R`<p><b>(a)</b> \(B=\dfrac{\mu_0i}{2\pi r}\). <b>(b)</b> \(B=0\). <b>(c)</b> \(B=\dfrac{\mu_0ir}{2\pi a^2}\).</p>
<p><b>(d)</b> \(\dfrac UL=\displaystyle\int_0^a\frac{\mu_0i^2r^2}{8\pi^2a^4}2\pi r\,dr+\int_a^b\frac{\mu_0i^2}{8\pi^2r^2}2\pi r\,dr=\frac{\mu_0i^2}{4\pi}\left[\frac14+\ln\frac ba\right]\).</p>`});

D({id:'emd-2012-1-q7', ano:2012, prova:'EUF 1º/2012 · Parte 2 · Q7', topicos:['cond','mat'], fig:'fig/emd_12a_q7.png',
enunciado:R`<p>Um capacitor esférico isolado tem \(+Q\) no condutor interno (raio \(r_a\)) e \(-Q\) no externo (raio \(r_b\)). A metade inferior do volume entre eles é preenchida por um líquido de constante dielétrica \(K\).</p>`,
itens:[R`Calcule \(E(r)\) entre os condutores, nas metades superior e inferior.`,R`Determine a densidade de carga livre nos condutores interno e externo.`,R`Calcule a densidade de carga de polarização nas superfícies interna (\(r_a\)) e externa (\(r_b\)) do dielétrico.`,R`Qual é a densidade de polarização na superfície plana do dielétrico? Explique.`,R`Determine a capacitância.`],
dica:R`O campo é radial e tangente à interface plana, então \(E_t\) contínuo implica o mesmo \(E(r)\) nas duas metades. Use Gauss com \(\vec D\).`,
solucao:R`<p><b>(a)</b> \(2\pi r^2(\epsilon_0E+K\epsilon_0E)=Q\Rightarrow E=\dfrac{Q}{2\pi\epsilon_0(1+K)r^2}\), igual nas duas metades.</p>
<p><b>(b)</b> Interno: \(\sigma_{sup}=\dfrac{Q}{2\pi(1+K)r_a^2}\) e \(\sigma_{inf}=\dfrac{KQ}{2\pi(1+K)r_a^2}\). Externo: os mesmos com sinal negativo e \(r_b\) no lugar de \(r_a\).</p>
<p><b>(c)</b> \(P=(K-1)\epsilon_0E\), radial. Em \(r_a\) (normal \(-\hat r\)): \(\sigma_b=-\dfrac{(K-1)Q}{2\pi(1+K)r_a^2}\); em \(r_b\): \(\sigma_b=+\dfrac{(K-1)Q}{2\pi(1+K)r_b^2}\).</p>
<p><b>(d)</b> Zero: \(\vec P\) é radial e, portanto, tangente à superfície plana, logo \(\vec P\cdot\hat n=0\).</p>
<p><b>(e)</b> \(\Delta V=\dfrac{Q}{2\pi\epsilon_0(1+K)}\left(\dfrac1{r_a}-\dfrac1{r_b}\right)\Rightarrow C=\dfrac{2\pi\epsilon_0(1+K)r_ar_b}{r_b-r_a}\): dois meio-capacitores em paralelo.</p>`});

D({id:'emd-2012-2-q1', ano:2012, prova:'EUF 2º/2012 · Parte 1 · Q1', topicos:['circ','pot','cond'], fig:'fig/emd_12b_q1.png',
enunciado:R`<p>Um cilindro de altura \(h\gg b\), raio externo \(b\) e furo central de raio \(a\) é feito de material de condutividade \(\sigma\) e permissividade \(\varepsilon\). Contatos de alta condutividade preenchem o furo e envolvem a borda externa. Aplica-se \(V_0\) entre eles (\(V=0\) na superfície externa).</p>`,
itens:[R`Mostre que, no regime estacionário (\(\partial\rho/\partial t=0\)), a densidade de carga no interior do meio homogêneo é nula.`,R`Mostre que o potencial obedece à equação de Laplace e obtenha \(\vec E(\vec r)\).`,R`Calcule a carga livre no contato interno e a capacitância entre os contatos.`,R`Calcule a resistência entre os contatos.`],
dica:R`Continuidade + lei de Ohm: \(\nabla\cdot\vec J=\sigma\nabla\cdot\vec E=0\).`,
solucao:R`<p><b>(a)</b> \(\partial_t\rho+\nabla\cdot\vec J=0\) com \(\partial_t\rho=0\Rightarrow\nabla\cdot\vec J=\sigma\nabla\cdot\vec E=0\Rightarrow\rho=\varepsilon\nabla\cdot\vec E=0\).</p>
<p><b>(b)</b> \(\nabla^2V=-\rho/\varepsilon=0\). Com simetria cilíndrica: \(V=V_0\dfrac{\ln(b/r)}{\ln(b/a)}\) e \(\vec E=\dfrac{V_0}{r\ln(b/a)}\hat r\).</p>
<p><b>(c)</b> \(Q=\varepsilon E(a)\,2\pi ah=\dfrac{2\pi\varepsilon hV_0}{\ln(b/a)}\Rightarrow C=\dfrac{2\pi\varepsilon h}{\ln(b/a)}\).</p>
<p><b>(d)</b> \(I=\sigma E\,2\pi rh=\dfrac{2\pi\sigma hV_0}{\ln(b/a)}\Rightarrow R=\dfrac{\ln(b/a)}{2\pi\sigma h}\). Note que \(RC=\varepsilon/\sigma\), independente da geometria.</p>`});

D({id:'emd-2012-2-q2', ano:2012, prova:'EUF 2º/2012 · Parte 1 · Q2', topicos:['magst'],
enunciado:R`<p>Um cilindro condutor longo de raio \(a\) conduz corrente \(I\) ao longo de \(z\), com \(\vec J=\hat z\dfrac{J_0}{r}\sin\left(\dfrac{\pi r}{a}\right)\).</p>`,
itens:[R`Determine \(J_0\) em termos de \(I\) e \(a\).`,R`Calcule \(\vec B\) fora do cilindro (\(r>a\)).`,R`Calcule \(\vec B\) dentro (\(r\lt a\)).`,R`Esboce \(B(r)\), indicando o comportamento em \(r=0\) e \(r=a\).`],
dica:R`\(dA=2\pi r\,dr\): o fator \(1/r\) de \(J\) se cancela.`,
solucao:R`<p><b>(a)</b> \(I=2\pi J_0\displaystyle\int_0^a\sin\frac{\pi r}{a}dr=4aJ_0\Rightarrow J_0=\dfrac{I}{4a}\).</p>
<p><b>(b)</b> \(\vec B=\dfrac{\mu_0I}{2\pi r}\hat\varphi\).</p>
<p><b>(c)</b> \(I(r)=\dfrac I2\left(1-\cos\dfrac{\pi r}{a}\right)\Rightarrow\vec B=\dfrac{\mu_0I}{4\pi r}\left(1-\cos\dfrac{\pi r}{a}\right)\hat\varphi\).</p>
<p><b>(d)</b> Perto do eixo, \(B\approx\dfrac{\mu_0I\pi r}{8a^2}\to0\) linearmente. O máximo fica dentro do fio, em \(r\approx0{,}74a\) (onde \(x\sin x=1-\cos x\)); depois \(B\) cai levemente até \(\mu_0I/2\pi a\) em \(r=a\) (contínuo) e decai como \(1/r\) fora.</p>`});

D({id:'emd-2013-1-q1', ano:2013, prova:'EUF 1º/2013 · Parte 1 · Q1', topicos:['eletrost'],
enunciado:R`<p>Uma esfera sólida uniformemente carregada tem carga \(Q\) e raio \(R\).</p>`,
itens:[R`Determine \(\vec E\) a uma distância \(r\) do centro, para \(r>R\) e \(r\le R\).`,R`Obtenha a força \(d\vec F\) sobre um elemento de volume \(dV\) na posição \(\vec r\).`,R`Determine, por integração, a força total sobre o hemisfério superior.`],
dica:R`Só a componente \(z\) sobrevive: integre \(\rho E\cos\theta\) no hemisfério.`,
solucao:R`<p><b>(a)</b> Fora: \(\dfrac{Q}{4\pi\epsilon_0r^2}\hat r\); dentro: \(\dfrac{Qr}{4\pi\epsilon_0R^3}\hat r\).</p>
<p><b>(b)</b> \(d\vec F=\rho\vec E\,dV=\dfrac{3Q}{4\pi R^3}\cdot\dfrac{Q\vec r}{4\pi\epsilon_0R^3}dV\).</p>
<p><b>(c)</b> \(F_z=\dfrac{3Q^2}{16\pi^2\epsilon_0R^6}\displaystyle\int_0^R\!\!r^3dr\int_0^{\pi/2}\!\!\cos\theta\sin\theta\,d\theta\int_0^{2\pi}\!\!d\varphi=\frac{3Q^2}{16\pi^2\epsilon_0R^6}\cdot\frac{R^4}{4}\cdot\frac12\cdot2\pi=\frac{3Q^2}{64\pi\epsilon_0R^2}\), para cima (o hemisfério sul é repelido).</p>`});

D({id:'emd-2013-1-q2', ano:2013, prova:'EUF 1º/2013 · Parte 1 · Q2', topicos:['maxw'], fig:'fig/emd_13a_q2.png',
enunciado:R`<p>Um capacitor de discos de raio \(a\), separados por \(d\ll a\) no vácuo, está ligado a um gerador que produz \(q(t)=q_0\sin\omega t\). Despreze efeitos de borda; com \(\omega a/c\ll1\), o campo entre as placas pode ser considerado uniforme. Use cilíndricas com \(z\) no eixo.</p>`,
itens:[R`Calcule \(\vec E\) entre as placas.`,R`Calcule \(\vec B(r)\) entre as placas.`,R`Calcule \(\vec S\).`,R`Mostre que, na aproximação de baixas frequências, vale \(\nabla\cdot\vec S+\partial u/\partial t=0\).`],
dica:R`Ampère-Maxwell com a corrente de deslocamento. Em (d), o termo \(B^2/2\mu_0\) é de ordem \((\omega a/c)^2\) relativo ao elétrico.`,
solucao:R`<p><b>(a)</b> \(\vec E=\dfrac{q_0\sin\omega t}{\pi\epsilon_0a^2}\hat z\).</p>
<p><b>(b)</b> \(B\,2\pi r=\mu_0\epsilon_0\pi r^2\dot E\Rightarrow\vec B=\dfrac{\mu_0q_0\omega r\cos\omega t}{2\pi a^2}\hat\varphi\).</p>
<p><b>(c)</b> \(\vec S=-\dfrac{q_0^2\omega r\sin\omega t\cos\omega t}{2\pi^2\epsilon_0a^4}\hat r\).</p>
<p><b>(d)</b> \(\nabla\cdot\vec S=\frac1r\partial_r(rS_r)=-\dfrac{q_0^2\omega\sin\omega t\cos\omega t}{\pi^2\epsilon_0a^4}\) e \(\partial_t\left(\frac{\epsilon_0E^2}{2}\right)=\epsilon_0E\dot E=+\dfrac{q_0^2\omega\sin\omega t\cos\omega t}{\pi^2\epsilon_0a^4}\). A soma é zero; o termo magnético é desprezível em baixa frequência.</p>`});

D({id:'emd-2013-2-q1', ano:2013, prova:'EUF 2º/2013 · Parte 1 · Q1', topicos:['pot','cond'], fig:'fig/emd_13b_q1.png',
enunciado:R`<p>Um fio infinito paralelo a \(z\), passando por \(x=a\), \(y=0\), tem densidade linear \(\lambda\) uniforme.</p>`,
itens:[R`Determine \(V(x,y,z)\) em todo o espaço, com \(V=0\) no eixo \(z\).`,R`Com um condutor plano aterrado em \(x=0\), calcule \(V\) para \(x>0\).`,R`Qual a densidade \(\sigma(y,z)\) induzida no plano?`,R`Calcule \(\int_{-\infty}^{\infty}\sigma\,dy\) e discuta.`],
dica:R`Imagem \(-\lambda\) em \(x=-a\).`,
solucao:R`<p><b>(a)</b> Com \(s_1=\sqrt{(x-a)^2+y^2}\): \(V=-\dfrac{\lambda}{2\pi\epsilon_0}\ln\dfrac{s_1}{a}\) (no eixo \(z\), \(s_1=a\)).</p>
<p><b>(b)</b> Com \(s_2=\sqrt{(x+a)^2+y^2}\): \(V=\dfrac{\lambda}{2\pi\epsilon_0}\ln\dfrac{s_2}{s_1}\), nulo em \(x=0\).</p>
<p><b>(c)</b> \(\sigma=-\epsilon_0\partial_xV|_{x=0}=-\dfrac{\lambda a}{\pi(a^2+y^2)}\), independente de \(z\).</p>
<p><b>(d)</b> \(\displaystyle\int\sigma\,dy=-\frac{\lambda a}{\pi}\cdot\frac{\pi}{a}=-\lambda\): a carga induzida por comprimento é exatamente igual e oposta à do fio.</p>`});

D({id:'emd-2013-2-q2', ano:2013, prova:'EUF 2º/2013 · Parte 1 · Q2', topicos:['induc'], fig:'fig/emd_13b_q2.png',
enunciado:R`<p>Um fio com densidade \(\lambda>0\) forma um anel na borda de um disco isolante de raio \(a\), que gira sem atrito em torno do eixo vertical. Só na região central (\(r\lt b\)) há um campo \(B_0\) uniforme para cima.</p>`,
itens:[R`O campo é desligado. Obtenha o torque devido à fem induzida no fio em termos de \(dB/dt\) e, daí, o momento angular final do disco (módulo e direção).`,R`Com o momento de inércia \(I\) do sistema, calcule o campo magnético no centro produzido pelo anel na situação final.`],
dica:R`\(E\,2\pi a=-\pi b^2\dot B\). Torque \(=\) (carga total) × \(E\) × \(a\). O momento angular final não depende de como \(B\) foi desligado.`,
solucao:R`<p><b>(a)</b> \(E=-\dfrac{b^2}{2a}\dot B\); torque \(\tau=\lambda2\pi a\cdot E\cdot a=-\pi\lambda ab^2\dot B\). Integrando: \(L=\pi\lambda ab^2B_0\). Direção \(+\hat z\): pela lei de Lenz, o \(E\) induzido circula no sentido anti-horário (visto de cima) para manter o fluxo para cima, e arrasta as cargas positivas.</p>
<p><b>(b)</b> \(\omega=L/I\), corrente \(i=\lambda\omega a\), \(B=\dfrac{\mu_0i}{2a}=\dfrac{\mu_0\lambda\omega}{2}=\dfrac{\mu_0\pi\lambda^2ab^2B_0}{2I}\), para cima (\(+\hat z\)), no mesmo sentido do campo original.</p>`});

D({id:'emd-2014-1-q1', ano:2014, prova:'EUF 1º/2014 · Parte 1 · Q1', topicos:['cond'],
enunciado:R`<p>Considere um condutor macroscópico de forma arbitrária com superfície fechada e suave. Partindo da lei de Gauss e de \(\nabla\times\vec E=0\):</p>`,
itens:[R`Calcule o campo elétrico no interior do condutor.`,R`Obtenha a componente normal do campo na superfície externa em termos de \(\sigma\).`,R`Obtenha a componente tangencial do campo na superfície.`],
dica:R`Caixa de pílula atravessando a superfície para a componente normal; laço retangular fino para a tangencial.`,
solucao:R`<p><b>(a)</b> \(\vec E=0\): se não fosse, as cargas livres se moveriam e não haveria equilíbrio. Por Gauss, também não há carga no interior; ela fica toda na superfície.</p>
<p><b>(b)</b> Pílula com uma face dentro (\(E=0\)) e outra fora: \(E_nA=\sigma A/\epsilon_0\Rightarrow E_n=\sigma/\epsilon_0\).</p>
<p><b>(c)</b> \(\oint\vec E\cdot d\vec l=0\) num retângulo fino que cruza a superfície: \(E_t^{fora}-E_t^{dentro}=0\Rightarrow E_t=0\). O campo é normal à superfície.</p>`});

D({id:'emd-2014-1-q2', ano:2014, prova:'EUF 1º/2014 · Parte 1 · Q2', topicos:['ondas','maxw'],
enunciado:R`<p>Ondas planas no vácuo têm campos dados pela parte real de \(\vec u=\vec Ae^{i(\vec k\cdot\vec r-\omega t)}\), com \(\omega=v|\vec k|\) e \(v=1/\sqrt{\epsilon\mu}\).</p>`,
itens:[R`Mostre que \(\nabla\cdot\vec u=i\vec k\cdot\vec u\).`,R`Mostre que \(\nabla\times\vec u=i\vec k\times\vec u\).`,R`Demonstre que as ondas são transversais e que \(\vec E\), \(\vec B\) e \(\vec k\) são mutuamente perpendiculares.`],
dica:R`\(\partial_j e^{i\vec k\cdot\vec r}=ik_je^{i\vec k\cdot\vec r}\); depois use as quatro equações de Maxwell sem fontes.`,
solucao:R`<p><b>(a)</b> \(\nabla\cdot\vec u=\sum_jA_j\partial_je^{i(\cdots)}=i\vec k\cdot\vec u\).</p>
<p><b>(b)</b> \((\nabla\times\vec u)_i=\epsilon_{ijk}\partial_ju_k=i\epsilon_{ijk}k_ju_k=(i\vec k\times\vec u)_i\).</p>
<p><b>(c)</b> \(\nabla\cdot\vec E=0\Rightarrow\vec k\cdot\vec E=0\); \(\nabla\cdot\vec B=0\Rightarrow\vec k\cdot\vec B=0\): os dois campos são transversais. \(\nabla\times\vec E=-\partial_t\vec B\Rightarrow i\vec k\times\vec E=i\omega\vec B\Rightarrow\vec B=\dfrac{\vec k\times\vec E}{\omega}\), perpendicular a \(\vec k\) e a \(\vec E\), com \(|B|=|E|/v\).</p>`});

D({id:'emd-2014-2-q1', ano:2014, prova:'EUF 2º/2014 · Parte 1 · Q1', topicos:['cond'],
enunciado:R`<p>Um capacitor esférico: esfera condutora de raio \(R_1\) com \(+Q\) e casca concêntrica fina de raio \(R_2>R_1\) com \(-Q\).</p>`,
itens:[R`Calcule o campo elétrico e a densidade de energia em função de \(r\), para qualquer \(r\).`,R`Determine a capacitância.`,R`Calcule a energia numa casca de raio \(r\) e espessura \(dr\) entre os condutores e integre. Dê o resultado em termos de \(Q\) e \(C\).`],
dica:R`Só há campo entre os condutores.`,
solucao:R`<p><b>(a)</b> Para \(R_1\lt r\lt R_2\): \(E=\dfrac{Q}{4\pi\epsilon_0r^2}\), \(u=\dfrac{\epsilon_0E^2}{2}=\dfrac{Q^2}{32\pi^2\epsilon_0r^4}\). Nos demais pontos, \(E=u=0\).</p>
<p><b>(b)</b> \(\Delta V=\dfrac{Q}{4\pi\epsilon_0}\left(\dfrac1{R_1}-\dfrac1{R_2}\right)\Rightarrow C=\dfrac{4\pi\epsilon_0R_1R_2}{R_2-R_1}\).</p>
<p><b>(c)</b> \(dU=u\,4\pi r^2dr=\dfrac{Q^2dr}{8\pi\epsilon_0r^2}\Rightarrow U=\dfrac{Q^2}{8\pi\epsilon_0}\left(\dfrac1{R_1}-\dfrac1{R_2}\right)=\dfrac{Q^2}{2C}\).</p>`});

D({id:'emd-2014-2-q2', ano:2014, prova:'EUF 2º/2014 · Parte 1 · Q2', topicos:['magst'], fig:'fig/emd_14b_q2.png',
enunciado:R`<p>Duas bobinas idênticas (anéis de raio \(R\)) têm eixos coincidentes com \(z\), centros separados por \(d\) e ponto médio P na origem. Cada uma transporta \(I\), ambas no sentido anti-horário.</p>`,
itens:[R`Use Biot-Savart para o campo de uma bobina ao longo do seu eixo.`,R`Obtenha \(B(z)\) das duas bobinas.`,R`Para \(d=R\), mostre que em P: \(dB/dz=0\) e \(d^2B/dz^2=0\).`,R`Qual curva do gráfico descreve \(B(z)\) na configuração de (b)? Justifique.`,R`Se a corrente da bobina superior for invertida, qual é o novo campo em P?`],
dica:R`Para \(f(z)=(R^2+z^2)^{-3/2}\): \(f''=\dfrac{3(4z^2-R^2)}{(R^2+z^2)^{7/2}}\).`,
solucao:R`<p><b>(a)</b> \(B=\dfrac{\mu_0IR^2}{2(R^2+z^2)^{3/2}}\), ao longo de \(\hat z\).</p>
<p><b>(b)</b> \(B(z)=\dfrac{\mu_0IR^2}{2}\left[\dfrac{1}{(R^2+(z-d/2)^2)^{3/2}}+\dfrac{1}{(R^2+(z+d/2)^2)^{3/2}}\right]\).</p>
<p><b>(c)</b> \(B'(0)=0\) por simetria (\(B\) é par). \(B''(0)\propto2f''(d/2)\propto4(d/2)^2-R^2=d^2-R^2=0\) para \(d=R\): é a bobina de Helmholtz, com campo muito uniforme no centro.</p>
<p><b>(d)</b> A curva de topo plano e simétrica em torno de P (curva 3), coerente com o item (c). A curva antissimétrica corresponde a correntes opostas.</p>
<p><b>(e)</b> \(B(P)=0\): as contribuições das duas bobinas têm o mesmo módulo e sentidos opostos.</p>`});

D({id:'emd-2015-1-q1', ano:2015, prova:'EUF 1º/2015 · Parte 1 · Q1', topicos:['eletrost','magst'], fig:'fig/emd_15a_q1.png',
enunciado:R`<p>(a) Um cilindro dielétrico maciço infinito de raio \(a\) tem densidade uniforme \(\rho>0\). Uma casca cilíndrica coaxial de raio \(b>a\) tem densidade superficial \(\sigma=-\rho a^2/2b\), de modo que a carga total é zero. Calcule \(\vec E(r)\) para \(r\lt a\), \(a\lt r\lt b\) e \(r>b\).</p><p>(b) O conjunto passa a se mover para a direita com velocidade \(\vec v\): o cilindro gera \(\vec J=\rho\vec v\) (corrente \(I=\pi a^2\rho v\)) e a casca, uma corrente de mesma intensidade em sentido contrário. Calcule \(\vec B\) nas três regiões.</p>`,
dica:R`Gauss e Ampère com as mesmas superfícies; tudo se anula fora porque carga e corrente líquidas são nulas.`,
solucao:R`<p><b>(a)</b> \(r\lt a\): \(\dfrac{\rho r}{2\epsilon_0}\hat r\); \(a\lt r\lt b\): \(\dfrac{\rho a^2}{2\epsilon_0r}\hat r\); \(r>b\): 0.</p>
<p><b>(b)</b> \(r\lt a\): \(\dfrac{\mu_0\rho vr}{2}\hat\varphi\); \(a\lt r\lt b\): \(\dfrac{\mu_0\rho va^2}{2r}\hat\varphi\); \(r>b\): 0. (\(\hat\varphi\) pela regra da mão direita em torno de \(\vec v\).) Note que \(B=\dfrac{v}{c^2}E\) em cada região, como esperado para cargas em movimento uniforme.</p>`});

D({id:'emd-2015-1-q2', ano:2015, prova:'EUF 1º/2015 · Parte 1 · Q2', topicos:['ondas'],
enunciado:R`<p>Uma onda plana no vácuo tem \(\vec E=(E_1\hat x+E_2\hat y)e^{i(kz-\omega t)}\), com \(E_1\) e \(E_2\) constantes.</p>`,
itens:[R`Encontre \(\vec B(z,t)\).`,R`Mostre que \(\vec E\) e \(\vec B\) são ortogonais.`,R`Encontre o vetor de Poynting.`],
dica:R`\(\vec B=\frac1c\hat z\times\vec E\).`,
solucao:R`<p><b>(a)</b> \(\vec B=\dfrac1c(E_1\hat y-E_2\hat x)e^{i(kz-\omega t)}\).</p>
<p><b>(b)</b> \(\vec E\cdot\vec B\propto E_1(-E_2)+E_2E_1=0\).</p>
<p><b>(c)</b> Com campos reais (\(E_{1,2}\) reais): \(\vec S=\dfrac{E_1^2+E_2^2}{\mu_0c}\cos^2(kz-\omega t)\hat z\), média \(\dfrac{E_1^2+E_2^2}{2\mu_0c}\hat z\).</p>`});

D({id:'emd-2015-2-q1', ano:2015, prova:'EUF 2º/2015 · Parte 1 · Q1', topicos:['induc','magst'], fig:'fig/emd_15b_q1.png',
enunciado:R`<p>Uma espira retangular (comprimento \(a\) paralelo ao fio, largura \(b\), resistência \(R\)) está perto de um fio infinito com corrente \(i\) para a direita. Ela se afasta com velocidade constante, e a distância do seu centro ao fio é \(s(t)=s_0+vt\).</p>`,
itens:[R`O módulo do campo do fio a uma distância \(r\); direção e sentido na região da espira.`,R`O fluxo magnético na espira para dado \(s(t)\).`,R`A fem induzida.`,R`A corrente induzida e seu sentido.`],
dica:R`Integre \(\frac{\mu_0i}{2\pi r}a\,dr\) de \(s-b/2\) a \(s+b/2\).`,
solucao:R`<p><b>(a)</b> \(B=\dfrac{\mu_0i}{2\pi r}\); abaixo do fio, aponta para dentro da página.</p>
<p><b>(b)</b> \(\Phi=\dfrac{\mu_0ia}{2\pi}\ln\dfrac{s+b/2}{s-b/2}\).</p>
<p><b>(c)</b> \(\mathcal E=-\dot\Phi=\dfrac{\mu_0iabv}{2\pi(s^2-b^2/4)}\).</p>
<p><b>(d)</b> \(i_{ind}=\mathcal E/R\). O fluxo para dentro diminui, então a corrente induzida cria campo para dentro: sentido horário (visto da página).</p>`});

D({id:'emd-2015-2-q2', ano:2015, prova:'EUF 2º/2015 · Parte 1 · Q2', topicos:['ondas'],
enunciado:R`<p>Um meio condutor tem condutividade \(\sigma\), \(\mu_0\) e \(\epsilon=K\epsilon_0\). A equação de onda é \(\nabla^2\vec E-\dfrac{K}{c^2}\dfrac{\partial^2\vec E}{\partial t^2}-\dfrac{\sigma}{\epsilon_0c^2}\dfrac{\partial\vec E}{\partial t}=0\).</p>`,
itens:[R`Mostre que \(\vec E=\vec E_0e^{i(\omega t-\tilde qz)}\) é solução e encontre a relação entre \(\tilde q\) e \(\omega\). Mostre que \(\tilde q\) é real num isolante.`,R`Encontre a constante dielétrica complexa \(\tilde K\) (com \(\tilde q^2=\tilde K\omega^2/c^2\)). Verifique que \(\mathrm{Re}\,\tilde K=K\).`,R`Em baixas frequências, calcule \(\tilde n=\sqrt{\tilde K}\) e mostre que suas partes real e imaginária são iguais.`,R`Com \(\delta=1/q_i\), calcule a ordem de grandeza da profundidade de penetração na prata a 10 GHz (\(\sigma=3\times10^7\) (Ωm)\(^{-1}\)).`],
dica:R`Substitua: \(\nabla^2\to-\tilde q^2\), \(\partial_t\to i\omega\).`,
solucao:R`<p><b>(a)</b> \(-\tilde q^2+\dfrac{K\omega^2}{c^2}-\dfrac{i\sigma\omega}{\epsilon_0c^2}=0\Rightarrow\tilde q^2=\dfrac{\omega^2}{c^2}\left(K-\dfrac{i\sigma}{\epsilon_0\omega}\right)\); real se \(\sigma=0\).</p>
<p><b>(b)</b> \(\tilde K=K-i\dfrac{\sigma}{\epsilon_0\omega}\).</p>
<p><b>(c)</b> Para \(\sigma/\epsilon_0\omega\gg K\): \(\tilde n\approx\sqrt{-i\sigma/\epsilon_0\omega}=\sqrt{\dfrac{\sigma}{2\epsilon_0\omega}}(1-i)\), partes de módulos iguais.</p>
<p><b>(d)</b> \(\delta=\dfrac{c}{\omega n_i}=\sqrt{\dfrac{2}{\mu_0\sigma\omega}}\). Com \(\omega=2\pi\times10^{10}\) s\(^{-1}\): \(\delta\approx0{,}9\) μm, ordem de \(10^{-6}\) m. É menor que todas as opções macroscópicas listadas; por isso uma camada fina de prata basta como blindagem de micro-ondas.</p>`});

D({id:'emd-2016-1-q1', ano:2016, prova:'EUF 1º/2016 · Parte 2 · Q1', topicos:['maxw','mat'],
enunciado:R`<p>Defina o vetor de Hertz \(\vec Z\) por \(\nabla\cdot\vec Z=-\phi\) e \(\vec A=\mu_0\epsilon_0\dfrac{\partial\vec Z}{\partial t}\), onde \(\phi\) e \(\vec A\) são os potenciais.</p>`,
itens:[R`Mostre que os potenciais satisfazem o calibre de Lorenz.`,R`Num meio sem fontes livres (\(\rho=0\), \(\vec J=0\)) e com \(\mu=\mu_0\), demonstre que \(\nabla^2\vec Z-\dfrac1{c^2}\dfrac{\partial^2\vec Z}{\partial t^2}=-\dfrac{\vec P}{\epsilon_0}\), \(\vec B=\dfrac1{c^2}\nabla\times\dfrac{\partial\vec Z}{\partial t}\) e \(\vec E=\nabla\times\nabla\times\vec Z-\dfrac{\vec P}{\epsilon_0}\).`],
dica:R`As fontes são as ligadas: \(\rho_b=-\nabla\cdot\vec P\) e \(\vec J_b=\partial_t\vec P\). No calibre de Lorenz, cada potencial obedece a uma equação de onda com essas fontes.`,
solucao:R`<p><b>(a)</b> \(\nabla\cdot\vec A+\mu_0\epsilon_0\partial_t\phi=\mu_0\epsilon_0\partial_t(\nabla\cdot\vec Z)-\mu_0\epsilon_0\partial_t(\nabla\cdot\vec Z)=0\).</p>
<p><b>(b)</b> No calibre de Lorenz: \(\Box\vec A=-\mu_0\partial_t\vec P\), com \(\Box=\nabla^2-c^{-2}\partial_t^2\). Substituindo \(\vec A=c^{-2}\partial_t\vec Z\): \(c^{-2}\partial_t\left[\Box\vec Z+\vec P/\epsilon_0\right]=0\Rightarrow\Box\vec Z=-\vec P/\epsilon_0\), escolhendo nula a constante de integração; isso é consistente com \(\Box\phi=\nabla\cdot\vec P/\epsilon_0\). Os campos: \(\vec B=\nabla\times\vec A=c^{-2}\nabla\times\partial_t\vec Z\). E \(\vec E=-\nabla\phi-\partial_t\vec A=\nabla(\nabla\cdot\vec Z)-c^{-2}\partial_t^2\vec Z=\nabla(\nabla\cdot\vec Z)-\nabla^2\vec Z-\vec P/\epsilon_0=\nabla\times\nabla\times\vec Z-\vec P/\epsilon_0\).</p>`});

D({id:'emd-2016-1-q2', ano:2016, prova:'EUF 1º/2016 · Parte 2 · Q2', topicos:['eletrost','magst'],
enunciado:R`<p>Um disco vazado muito fino (raios \(r_1\) e \(r_2\)) no plano \(xy\), centrado na origem, tem densidade \(\sigma(r)=\sigma_0/r\).</p>`,
itens:[R`Encontre \(\vec E\) sobre o eixo \(z\).`,R`O disco passa a girar com \(\omega_0\). Encontre \(\vec J_s=\sigma\vec v\).`,R`Encontre \(\vec H\) sobre o eixo \(z\) gerado por \(\vec J_s\).`],
dica:R`Some anéis de largura \(dr\). Integrais úteis: \(\int\frac{dr}{(r^2+z^2)^{3/2}}=\frac{r}{z^2\sqrt{r^2+z^2}}\) e \(\int\frac{r^2dr}{(r^2+z^2)^{3/2}}=\ln(r+\sqrt{r^2+z^2})-\frac{r}{\sqrt{r^2+z^2}}\).</p>`,
solucao:R`<p><b>(a)</b> \(dE_z=\dfrac{\sigma_0z\,dr}{2\epsilon_0(r^2+z^2)^{3/2}}\Rightarrow E_z=\dfrac{\sigma_0}{2\epsilon_0z}\left[\dfrac{r_2}{\sqrt{r_2^2+z^2}}-\dfrac{r_1}{\sqrt{r_1^2+z^2}}\right]\).</p>
<p><b>(b)</b> \(\vec J_s=\dfrac{\sigma_0}{r}\omega_0r\,\hat\varphi=\sigma_0\omega_0\hat\varphi\): uniforme.</p>
<p><b>(c)</b> Cada anel tem \(dI=\sigma_0\omega_0dr\) e contribui \(dH=\dfrac{dI\,r^2}{2(r^2+z^2)^{3/2}}\):</p>
\[H_z=\frac{\sigma_0\omega_0}{2}\left[\ln\frac{r_2+\sqrt{r_2^2+z^2}}{r_1+\sqrt{r_1^2+z^2}}-\frac{r_2}{\sqrt{r_2^2+z^2}}+\frac{r_1}{\sqrt{r_1^2+z^2}}\right].\]`});

D({id:'emd-2016-2-q6', ano:2016, prova:'EUF 2º/2016 · Parte 2 · Q6', topicos:['eletrost','cond'], fig:'fig/emd_16b_q6.png',
enunciado:R`<p>Uma esfera isolante sólida de raio \(a\) tem densidade uniforme \(\rho\) e carga \(Q\). Uma esfera oca condutora descarregada, de raios \(b\) e \(c\), é concêntrica a ela.</p>`,
itens:[R`Determine \(E\) nas regiões (i) \(r\lt a\); (ii) \(a\lt r\lt b\); (iii) \(b\lt r\lt c\); (iv) \(r>c\).`,R`Ache a carga induzida por unidade de área nas superfícies interna e externa do condutor.`,R`Esboce \(E\times r\), identificando cada região.`],
dica:R`Gauss em cada região; dentro do condutor, \(E=0\).`,
solucao:R`<p><b>(a)</b> (i) \(\dfrac{Qr}{4\pi\epsilon_0a^3}\); (ii) \(\dfrac{Q}{4\pi\epsilon_0r^2}\); (iii) 0; (iv) \(\dfrac{Q}{4\pi\epsilon_0r^2}\).</p>
<p><b>(b)</b> Interna: \(-\dfrac{Q}{4\pi b^2}\); externa: \(+\dfrac{Q}{4\pi c^2}\).</p>
<p><b>(c)</b> Reta crescente até \(r=a\), queda \(1/r^2\) até \(b\), zero entre \(b\) e \(c\), salto em \(c\) e queda \(1/r^2\).</p>`});

D({id:'emd-2016-2-q7', ano:2016, prova:'EUF 2º/2016 · Parte 2 · Q7', topicos:['maxw','ondas'],
enunciado:R`<p>Considere as equações de Maxwell na forma diferencial.</p>`,
itens:[R`Derive as equações de onda no vácuo para \(\vec E\) e \(\vec B\), usando \(\nabla\times(\nabla\times\vec V)=\nabla(\nabla\cdot\vec V)-\nabla^2\vec V\) e \(\nabla\cdot(\nabla\times\vec V)=0\).`,R`Escreva a equação de onda para um escalar \(f(\vec r,t)\) e determine a velocidade de propagação dos campos.`,R`Para uma onda plana linearmente polarizada em \(\hat z\), escreva módulo e direção de \(\vec E\) e \(\vec B\) em função de posição e tempo.`,R`Com cargas e correntes, derive a equação da continuidade. Que lei de conservação ela expressa?`],
dica:R`Rotacional da lei de Faraday + Ampère-Maxwell. Para (d), divergente da Ampère-Maxwell.`,
solucao:R`<p><b>(a)</b> \(\nabla\times(\nabla\times\vec E)=-\partial_t\nabla\times\vec B=-\mu_0\epsilon_0\partial_t^2\vec E\) e \(\nabla\cdot\vec E=0\Rightarrow\nabla^2\vec E=\mu_0\epsilon_0\partial_t^2\vec E\). Analogamente, \(\nabla^2\vec B=\mu_0\epsilon_0\partial_t^2\vec B\).</p>
<p><b>(b)</b> \(\nabla^2f=\dfrac{1}{v^2}\partial_t^2f\Rightarrow v=\dfrac1{\sqrt{\mu_0\epsilon_0}}=c\).</p>
<p><b>(c)</b> \(\vec E=E_0\cos(kz-\omega t)\hat x\) e \(\vec B=B_0\cos(kz-\omega t)\hat y\), com \(B_0=E_0/c\) e \(\omega=ck\).</p>
<p><b>(d)</b> \(\nabla\cdot(\nabla\times\vec B)=0=\mu_0\nabla\cdot\vec J+\mu_0\epsilon_0\partial_t\nabla\cdot\vec E=\mu_0(\nabla\cdot\vec J+\partial_t\rho)\Rightarrow\partial_t\rho+\nabla\cdot\vec J=0\): conservação local da carga.</p>`});

D({id:'emd-2017-1-q6', ano:2017, prova:'EUF 1º/2017 · Parte 2 · Q6', topicos:['eletrost'], fig:'fig/emd_17a_q6.png',
enunciado:R`<p>Um anel fino de raio \(R\) e carga \(Q>0\) uniforme está no plano \(xy\), centrado em O. Seja P \(=(0,0,z)\).</p>`,
itens:[R`Somando as contribuições do anel, encontre módulo, direção e sentido de \(\vec E(z)\).`,R`Calcule \(V(z)\).`,R`Uma partícula de carga \(-q\lt0\) e massa \(m\) parte do repouso em \(z_0\gg R\) e viaja ao longo de \(z\). Qual é sua velocidade ao passar pelo centro?`],
dica:R`As componentes horizontais se cancelam; sobra \(dE\cos\theta\) com \(\cos\theta=z/r\).`,
solucao:R`<p><b>(a)</b> \(\vec E=\dfrac{Qz}{4\pi\epsilon_0(R^2+z^2)^{3/2}}\hat z\) (para longe do anel).</p>
<p><b>(b)</b> \(V=\dfrac{Q}{4\pi\epsilon_0\sqrt{R^2+z^2}}\).</p>
<p><b>(c)</b> \(\frac12mv^2=q[V(0)-V(z_0)]\approx\dfrac{qQ}{4\pi\epsilon_0R}\Rightarrow v=\sqrt{\dfrac{qQ}{2\pi\epsilon_0mR}}\).</p>`});

D({id:'emd-2017-1-q7', ano:2017, prova:'EUF 1º/2017 · Parte 2 · Q7', topicos:['induc'], fig:'fig/emd_17a_q7.png',
enunciado:R`<p>Um aro quadrado de lado \(L\) e resistência \(R\), no plano \(xy\) com uma diagonal ao longo de \(x\), sai com velocidade \(\vec v\) de uma região de campo uniforme \(\vec B\) para fora da página. No instante considerado, o vértice da esquerda está a \(s\) dentro da região (\(0\lt s\lt\sqrt2L/2\)).</p>`,
itens:[R`Calcule o fluxo em função de \(s\).`,R`Determine o valor e o sentido da corrente induzida.`,R`Calcule a força magnética total. Que força adicional mantém a velocidade constante?`],
dica:R`A parte imersa é um triângulo de altura \(s\) e base \(2s\).`,
solucao:R`<p><b>(a)</b> \(\Phi=Bs^2\).</p>
<p><b>(b)</b> \(ds/dt=-v\Rightarrow|\mathcal E|=2Bsv\), \(I=\dfrac{2Bsv}{R}\). O fluxo para fora diminui, então a corrente é anti-horária.</p>
<p><b>(c)</b> As forças nos dois lados imersos se somam na direção de \(x\), com comprimento efetivo igual à corda vertical \(2s\): \(\vec F=-2sBI\,\hat x=-\dfrac{4B^2s^2v}{R}\hat x\), opondo-se ao movimento. É preciso aplicar \(+\dfrac{4B^2s^2v}{R}\hat x\).</p>`});

D({id:'emd-2017-2-q6', ano:2017, prova:'EUF 2º/2017 · Parte 2 · Q6', topicos:['eletrost','pot'],
enunciado:R`<p>Dois aros finos no plano \(xy\), centrados na origem: um de raio \(b\) com densidade \(-\lambda\lt0\) e outro de raio \(2b\) com densidade \(2\lambda>0\).</p>`,
itens:[R`Calcule \(V(z)\) no ponto \((0,0,z)\).`,R`Calcule \(\vec E(z)\).`,R`Escreva a segunda lei de Newton para uma carga \(q>0\) de massa \(m\), restrita ao eixo \(z\).`,R`Calcule a frequência de pequenas oscilações perto de \(z=0\), linearizando a força.`],
dica:R`Cargas: \(-2\pi b\lambda\) e \(+8\pi b\lambda\).`,
solucao:R`<p><b>(a)</b> \(V(z)=\dfrac{\lambda}{2\epsilon_0}\left[-\dfrac{b}{\sqrt{b^2+z^2}}+\dfrac{4b}{\sqrt{4b^2+z^2}}\right]\).</p>
<p><b>(b)</b> \(E_z=\dfrac{\lambda bz}{2\epsilon_0}\left[-\dfrac{1}{(b^2+z^2)^{3/2}}+\dfrac{4}{(4b^2+z^2)^{3/2}}\right]\).</p>
<p><b>(c)</b> \(m\ddot z=qE_z(z)\).</p>
<p><b>(d)</b> Perto de 0: \(E_z\approx\dfrac{\lambda z}{2\epsilon_0b^2}\left(-1+\frac12\right)=-\dfrac{\lambda z}{4\epsilon_0b^2}\), restauradora. Logo \(\omega=\sqrt{\dfrac{q\lambda}{4\epsilon_0mb^2}}\).</p>`});

D({id:'emd-2017-2-q7', ano:2017, prova:'EUF 2º/2017 · Parte 2 · Q7', topicos:['ondas'],
enunciado:R`<p>Uma onda plana circularmente polarizada no vácuo tem \(\tilde{\mathbf E}=E_0e^{i(kz-\omega t)}(\hat x+i\hat y)\), com \(\omega=ck\).</p>`,
itens:[R`Encontre o campo elétrico real \(\mathbf E\).`,R`Encontre o campo magnético real \(\mathbf B\).`,R`Calcule a densidade de momento linear \(\mathbf g=\epsilon_0\mathbf E\times\mathbf B\).`,R`Calcule a densidade de momento angular \(\vec\ell=\mathbf r\times\mathbf g\) (cilíndricas).`],
dica:R`\(\mathbf B=\frac1c\hat z\times\mathbf E\).`,
solucao:R`<p><b>(a)</b> \(\mathbf E=E_0[\cos(kz-\omega t)\hat x-\sin(kz-\omega t)\hat y]\).</p>
<p><b>(b)</b> \(\mathbf B=\dfrac{E_0}{c}[\sin(kz-\omega t)\hat x+\cos(kz-\omega t)\hat y]\).</p>
<p><b>(c)</b> \(\mathbf g=\dfrac{\epsilon_0E_0^2}{c}\hat z\), constante.</p>
<p><b>(d)</b> \(\vec\ell=(\rho\hat\rho+z\hat z)\times\dfrac{\epsilon_0E_0^2}{c}\hat z=-\dfrac{\epsilon_0E_0^2\rho}{c}\hat\varphi\). A componente \(z\) é nula: numa onda plana ideal, o momento angular de spin da luz circular só aparece com um feixe de largura finita.</p>`});

D({id:'emd-2018-1-q6', ano:2018, prova:'EUF 1º/2018 · Parte 2 · Q6', topicos:['forca'], fig:'fig/emd_18a_q6.png',
enunciado:R`<p>Num espectrômetro de massa, íons positivos (massa \(m\), carga \(q\)) são acelerados por \(V\) e entram numa câmara com \(B\) uniforme perpendicular, descrevendo um semicírculo de raio \(r\) até a fenda de saída. As fendas de entrada e saída são iguais; tudo em vácuo.</p>`,
itens:[R`Determine a velocidade dos íons na fenda de saída.`,R`Determine \(m\) em função de \(V\), \(B\), \(r\) e \(q\).`,R`A resolução é limitada pelo tamanho da fenda de saída. Para \(r=10\) cm, \(V=4{,}0\times10^3\) V, \(B=1{,}00\) T e íons com um elétron a menos, com fendas de 100 μm, qual é a resolução em massa?`,R`É possível distinguir \(^{12}\)C de \(^{14}\)C? Justifique.`],
dica:R`\(m\propto r^2\Rightarrow\Delta m/m=2\Delta r/r\).`,
solucao:R`<p><b>(a)</b> \(v=\sqrt{2qV/m}\), que não muda no campo magnético.</p>
<p><b>(b)</b> \(r=\dfrac{mv}{qB}\Rightarrow m=\dfrac{qB^2r^2}{2V}\).</p>
<p><b>(c)</b> \(m=\dfrac{1{,}6\times10^{-19}\cdot1\cdot0{,}01}{8000}=2{,}0\times10^{-25}\) kg ≈ 120 u. A fenda de 100 μm dá incerteza de 100 μm no diâmetro, ou \(\Delta r=50\) μm: \(\Delta m/m=2\Delta r/r=10^{-3}\), \(\Delta m\approx0{,}12\) u. (Tomando \(\Delta r=100\) μm, a estimativa dobra: ≈ 0,24 u.)</p>
<p><b>(d)</b> Sim: os isótopos diferem em 2 u, ou \(\Delta m/m\approx0{,}15\), muito acima da resolução \(\sim10^{-3}\). (Para massas pequenas, ajusta-se \(B\) para trazer \(r\) à fenda.)</p>`});

D({id:'emd-2018-1-q7', ano:2018, prova:'EUF 1º/2018 · Parte 2 · Q7', topicos:['ondas','maxw'],
enunciado:R`<p>Ondas EM num meio linear, homogêneo e isotrópico com \(\sigma\), \(\epsilon\) e \(\mu\), sem cargas livres (\(\rho_F=0\)).</p>`,
itens:[R`Escreva as equações de Maxwell no meio.`,R`Encontre a equação diferencial só para \(\mathbf E\).`,R`Para \(\mathbf E=\mathbf E_0e^{i(kx-\omega t)}\), obtenha a relação entre \(k\) e \(\omega\).`,R`Interprete fisicamente a diferença entre \(\sigma\ne0\) e \(\sigma=0\).`],
dica:R`\(\mathbf J=\sigma\mathbf E\) na Ampère-Maxwell.`,
solucao:R`<p><b>(a)</b> \(\nabla\cdot\mathbf E=0\), \(\nabla\cdot\mathbf B=0\), \(\nabla\times\mathbf E=-\partial_t\mathbf B\), \(\nabla\times\mathbf B=\mu\sigma\mathbf E+\mu\epsilon\partial_t\mathbf E\).</p>
<p><b>(b)</b> \(\nabla^2\mathbf E=\mu\sigma\partial_t\mathbf E+\mu\epsilon\partial_t^2\mathbf E\).</p>
<p><b>(c)</b> \(k^2=\mu\epsilon\omega^2+i\mu\sigma\omega\).</p>
<p><b>(d)</b> Com \(\sigma\ne0\), \(k\) é complexo: a parte imaginária atenua a onda (energia dissipada por efeito Joule, profundidade de penetração) e a velocidade de fase depende de \(\omega\). Com \(\sigma=0\), \(k=\omega\sqrt{\mu\epsilon}\) é real: propagação sem perdas com \(v=1/\sqrt{\mu\epsilon}\).</p>`});

D({id:'emd-2018-2-q6', ano:2018, prova:'EUF 2º/2018 · Parte 2 · Q6', topicos:['circ'], fig:'fig/emd_18b_q6.png',
enunciado:R`<p>No circuito da figura, o capacitor está inicialmente descarregado. Em \(t=0\), a chave \(S_1\) é fechada.</p>`,
itens:[R`Quais são as correntes em \(R_1\) em \(t=0\) e após muito tempo?`,R`Qual é a carga em \(C_1\) após muito tempo?`,R`Esboce as ddp em \(R_1\), \(R_2\) e \(C_1\) em função do tempo, indicando máximos e mínimos.`,R`Depois de muito tempo, \(S_1\) é aberta em \(t=t_d\). Quanto tempo leva para a carga cair a \(1/e\) do valor em \(t_d\)?`],
dica:R`Capacitor descarregado = curto em \(t=0\); carregado = aberto. Na carga, a constante de tempo usa o equivalente de Thévenin visto pelo capacitor.`,
solucao:R`<p><b>(a)</b> Em \(t=0\): \(I_{R_1}=0\) (o capacitor curto-circuita \(R_1\)). Após muito tempo: \(I_{R_1}=\dfrac{V}{R_1+R_2}\).</p>
<p><b>(b)</b> \(Q=C_1\dfrac{VR_1}{R_1+R_2}\).</p>
<p><b>(c)</b> \(V_C=V_{R_1}\) sobe de 0 a \(\dfrac{VR_1}{R_1+R_2}\); \(V_{R_2}\) cai de \(V\) a \(\dfrac{VR_2}{R_1+R_2}\). Ambas são exponenciais com \(\tau=C_1\dfrac{R_1R_2}{R_1+R_2}\).</p>
<p><b>(d)</b> Com a chave aberta, \(C_1\) descarrega só por \(R_1\): \(\tau=R_1C_1\).</p>`});

D({id:'emd-2018-2-q7', ano:2018, prova:'EUF 2º/2018 · Parte 2 · Q7', topicos:['cond','induc'],
enunciado:R`<p>Um cabo coaxial é modelado como fio interno de raio \(a\) num dielétrico (\(\epsilon\), \(\mu\)) dentro de uma casca metálica de raio interno \(b\). A corrente vai pelo fio e volta pela casca.</p>`,
itens:[R`Use a lei de Gauss para obter a capacitância por unidade de comprimento.`,R`Use a lei de Ampère para obter a autoindutância por unidade de comprimento (iguale a energia magnética a \(LI^2/2\)).`],
dica:R`\(E=\lambda/2\pi\epsilon r\), \(B=\mu I/2\pi r\).`,
solucao:R`<p><b>(a)</b> \(\Delta V=\dfrac{\lambda}{2\pi\epsilon}\ln\dfrac ba\Rightarrow\dfrac Cl=\dfrac{2\pi\epsilon}{\ln(b/a)}\).</p>
<p><b>(b)</b> \(\dfrac Ul=\displaystyle\int_a^b\frac{\mu I^2}{8\pi^2r^2}2\pi r\,dr=\frac{\mu I^2}{4\pi}\ln\frac ba\Rightarrow\frac Ll=\frac{\mu}{2\pi}\ln\frac ba\). Note que \((L/l)(C/l)=\mu\epsilon\): a velocidade no cabo é \(1/\sqrt{\mu\epsilon}\).</p>`});

D({id:'emd-2019-1-q6', ano:2019, prova:'EUF 1º/2019 · Parte 2 · Q6', topicos:['induc'], fig:'fig/emd_19a_q6.png',
enunciado:R`<p>Um disco isolante de raio \(a\) gira com \(\omega\) constante (sentido anti-horário na figura). Uma espira de cobre em setor circular de ângulo \(\pi/4\) e raio \(a\), resistência \(R\), está presa ao disco. Um campo \(B\) perpendicular, entrando na página, existe só entre os ângulos fixos \(\theta=\pi/4\) e \(3\pi/4\).</p>`,
itens:[R`Calcule a corrente induzida quando a espira entra ou sai da região de campo.`,R`Com corrente horária positiva, faça o gráfico da corrente durante uma revolução, a partir do instante da figura.`,R`Calcule a energia dissipada num ciclo.`,R`Calcule o torque magnético sobre a espira, em relação ao centro, quando ela entra na região (módulo, direção e sentido).`],
dica:R`Área varrida por unidade de tempo: \(\frac12a^2\omega\). A espira (largura \(\pi/4\)) entra numa região de largura \(\pi/2\).`,
solucao:R`<p><b>(a)</b> \(\mathcal E=B\cdot\frac12a^2\omega\Rightarrow I_0=\dfrac{Ba^2\omega}{2R}\).</p>
<p><b>(b)</b> Com \(T=2\pi/\omega\) e a borda dianteira em \(\theta=0\) no início: entra de \(T/8\) a \(T/4\); fica toda dentro até \(3T/8\); sai de \(3T/8\) a \(T/2\); depois fica fora. Entrando, o fluxo para dentro aumenta e a corrente é anti-horária: \(-I_0\). Saindo, é horária: \(+I_0\). Nos demais intervalos, zero. (Se o sentido de giro for o oposto, a sequência se desloca e os sinais se mantêm: entrar sempre dá \(-I_0\).)</p>
<p><b>(c)</b> A corrente circula durante \(T/4\) por ciclo: \(E=I_0^2R\dfrac{\pi}{2\omega}=\dfrac{\pi B^2a^4\omega}{8R}\).</p>
<p><b>(d)</b> Só o lado radial dentro do campo sofre força: \(\tau=\displaystyle\int_0^aI_0Br\,dr=\frac{I_0Ba^2}{2}=\frac{B^2a^4\omega}{4R}\), oposto à rotação: \(-\hat z\) (com \(\hat z\) saindo da página e \(\vec\omega\) em \(+\hat z\)).</p>`});

D({id:'emd-2019-1-q7', ano:2019, prova:'EUF 1º/2019 · Parte 2 · Q7', topicos:['mat','cond','pot'], fig:'fig/emd_19a_q7.png',
enunciado:R`<p>Uma esfera condutora maciça de raio \(R\), carregada, está imersa simetricamente entre dois dielétricos (\(\epsilon_1\) acima de \(z=0\), \(\epsilon_2\) abaixo). Fora da esfera, \(V=A/r\). Responda em termos de \(A\), \(R\), \(\epsilon_1\), \(\epsilon_2\) e \(\vec r\).</p>`,
itens:[R`Calcule \(V\) e \(\vec E\) dentro da esfera.`,R`Calcule \(\vec E\) e \(\vec D\) fora, em cada dielétrico.`,R`Quais são as densidades de carga livre na superfície da esfera junto a cada dielétrico?`,R`Há carga de polarização na interface entre os dielétricos? Se sim, quanto? Se não, justifique.`],
dica:R`\(\vec E\) radial é tangente ao plano \(z=0\), então \(E_t\) contínuo é automático; o que muda entre os meios é \(\vec D\).`,
solucao:R`<p><b>(a)</b> \(V=A/R\) (constante) e \(\vec E=0\).</p>
<p><b>(b)</b> \(\vec E=\dfrac{A}{r^2}\hat r\) nos dois meios; \(\vec D_1=\dfrac{\epsilon_1A}{r^2}\hat r\) e \(\vec D_2=\dfrac{\epsilon_2A}{r^2}\hat r\).</p>
<p><b>(c)</b> \(\sigma_1=\dfrac{\epsilon_1A}{R^2}\) e \(\sigma_2=\dfrac{\epsilon_2A}{R^2}\): a esfera tem mais carga livre do lado mais polarizável. (Carga total: \(2\pi A(\epsilon_1+\epsilon_2)\).)</p>
<p><b>(d)</b> Não: \(\vec P_i=(\epsilon_i-\epsilon_0)\vec E\) é radial, logo tangente ao plano \(z=0\), e \(\vec P\cdot\hat n=0\) dos dois lados. (Há carga de polarização na superfície da esfera, não na interface plana.)</p>`});

D({id:'emd-2019-2-q6', ano:2019, prova:'EUF 2º/2019 · Parte 2 · Q6', topicos:['pot','cond'],
enunciado:R`<p>Um capacitor de placas paralelas perpendiculares a \(z\) tem \(V=0\) em \(z=0\) e \(V=V_0\) em \(z=d\). Entre as placas há um dielétrico \(\epsilon\) com carga livre \(\rho_F=\rho_0e^{-\alpha z}\). Despreze efeitos de borda.</p>`,
itens:[R`Mostre que \(V(z)=A+Bz-\dfrac{\rho_0}{\epsilon\alpha^2}e^{-\alpha z}\).`,R`Determine \(A\) e \(B\).`,R`Determine o vetor campo elétrico.`],
dica:R`Poisson 1D: \(V''=-\rho_F/\epsilon\).`,
solucao:R`<p><b>(a)</b> \(\dfrac{d^2}{dz^2}\left(-\dfrac{\rho_0}{\epsilon\alpha^2}e^{-\alpha z}\right)=-\dfrac{\rho_0}{\epsilon}e^{-\alpha z}\) ✓; somando a solução homogênea \(A+Bz\).</p>
<p><b>(b)</b> \(A=\dfrac{\rho_0}{\epsilon\alpha^2}\) e \(B=\dfrac1d\left[V_0-\dfrac{\rho_0}{\epsilon\alpha^2}\left(1-e^{-\alpha d}\right)\right]\).</p>
<p><b>(c)</b> \(\vec E=-\dfrac{dV}{dz}\hat z=-\left[B+\dfrac{\rho_0}{\epsilon\alpha}e^{-\alpha z}\right]\hat z\).</p>`});

D({id:'emd-2019-2-q7', ano:2019, prova:'EUF 2º/2019 · Parte 2 · Q7', topicos:['magst'], fig:'fig/emd_19b_q7.png',
enunciado:R`<p>(a) Um segmento retilíneo de comprimento \(L\) transporta \(i\). Calcule \(B\) no ponto P, a uma distância \(R\) do segmento e equidistante das extremidades.</p>`,
itens:[R`(o item (a) está no enunciado acima)`,R`Obtenha \(B\) para \(R\ll L\) e compare com o fio infinito.`,R`Calcule \(B\) no centro S de uma espira quadrada de lado \(L\) com corrente \(i\).`,R`Uma espira quadrada de lado \(L\), sem corrente, está perto de um fio infinito com corrente \(i'\); o fio está a uma distância \(D\) do centro da espira (figura c). Determine o fluxo através da espira.`],
dica:R`Segmento finito: \(B=\dfrac{\mu_0i}{4\pi R}(\sin\theta_1+\sin\theta_2)\).`,
solucao:R`<p><b>(a)</b> \(\sin\theta=\dfrac{L/2}{\sqrt{R^2+L^2/4}}\Rightarrow B=\dfrac{\mu_0iL}{2\pi R\sqrt{L^2+4R^2}}\).</p>
<p><b>(b)</b> \(R\ll L\Rightarrow B\approx\dfrac{\mu_0i}{2\pi R}\), o resultado do fio infinito.</p>
<p><b>(c)</b> Cada lado, com \(R=L/2\): \(\dfrac{\mu_0i}{\sqrt2\pi L}\). Quatro lados: \(B=\dfrac{2\sqrt2\mu_0i}{\pi L}\).</p>
<p><b>(d)</b> \(\Phi=\displaystyle\int_{D-L/2}^{D+L/2}\frac{\mu_0i'}{2\pi r}L\,dr=\frac{\mu_0i'L}{2\pi}\ln\frac{2D+L}{2D-L}\).</p>`});

D({id:'emd-2020-1-q6', ano:2020, prova:'EUF 1º/2020 · Parte 2 · Q6', topicos:['induc','maxw'],
enunciado:R`<p>Um solenoide muito longo, de raio \(R\) e \(n\) voltas por comprimento, tem \(I(t)=I_0\sin\omega t\), com eixo em \(z\). Limite quase estático (\(\omega R\ll c\)); \(B=0\) fora.</p>`,
itens:[R`Calcule \(\vec B\) dentro.`,R`Calcule \(\vec E\) dentro.`,R`Calcule \(\vec E\) fora.`],
dica:R`Faraday num círculo de raio \(r\): \(E\,2\pi r=-\dot\Phi\).`,
solucao:R`<p><b>(a)</b> \(\vec B=\mu_0nI_0\sin\omega t\,\hat z\).</p>
<p><b>(b)</b> \(E\,2\pi r=-\pi r^2\dot B\Rightarrow\vec E=-\dfrac{\mu_0nI_0\omega r}{2}\cos\omega t\,\hat\varphi\).</p>
<p><b>(c)</b> \(\vec E=-\dfrac{\mu_0nI_0\omega R^2}{2r}\cos\omega t\,\hat\varphi\). Há campo elétrico fora, mesmo com \(B=0\) ali.</p>`});

D({id:'emd-2020-1-q7', ano:2020, prova:'EUF 1º/2020 · Parte 2 · Q7', topicos:['circ','maxw'],
enunciado:R`<p>Um circuito RC (resistor \(R\) em série com capacitor de discos de raio \(a\), separação \(d\ll a\), vácuo) é ligado a uma bateria \(V\) em \(t=0\), com o capacitor descarregado. Despreze efeitos de borda; limite quase estático.</p>`,
itens:[R`Calcule \(C\).`,R`Calcule \(I(t)\) para \(t>0\).`,R`Calcule \(\vec B\) nas bordas laterais entre as placas.`,R`Calcule o vetor de Poynting e a taxa de energia entrando na região entre as placas.`],
dica:R`Em \(r=a\), toda a corrente de deslocamento é envolvida: \(I_d=I\).`,
solucao:R`<p><b>(a)</b> \(C=\epsilon_0\pi a^2/d\).</p>
<p><b>(b)</b> \(I=\dfrac VRe^{-t/RC}\).</p>
<p><b>(c)</b> \(\vec B(a)=\dfrac{\mu_0I}{2\pi a}\hat\varphi=\dfrac{\mu_0V}{2\pi aR}e^{-t/RC}\hat\varphi\).</p>
<p><b>(d)</b> \(E=\dfrac Vd(1-e^{-t/RC})\). Em \(r=a\), \(\vec S\) aponta radialmente para dentro: \(|S|=\dfrac{V^2}{2\pi aRd}(1-e^{-t/RC})e^{-t/RC}\). Potência que entra: \(|S|\,2\pi ad=\dfrac{V^2}{R}(1-e^{-t/RC})e^{-t/RC}=\dfrac{d}{dt}\left(\tfrac12CV_C^2\right)\), como deve ser.</p>`});
})();
