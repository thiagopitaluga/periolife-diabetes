const whatsappHref =
  "https://wa.me/5561999603770?text=Ol%C3%A1%2C%20tenho%20diabetes%20e%20vim%20pela%20p%C3%A1gina%20da%20PerioLife.%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20periodontal.";

const symptoms = [
  "sangramento durante a escovação;",
  "gengiva vermelha ou inchada;",
  "mau hálito persistente;",
  "gosto ruim ou diferente na boca;",
  "retração gengival;",
  "dentes ficando mais sensíveis;",
  "alteração na posição dos dentes;",
  "dentes apresentando mobilidade.",
];

const recentDiagnosis = [
  "nunca tenha tido problemas importantes com os dentes;",
  "não sinta dor;",
  "não perceba sangramento;",
  "ache que sua gengiva está saudável.",
];

const longTermSigns = [
  "sangramento gengival",
  "mau hálito frequente",
  "dentes moles ou se movimentando",
  "retração da gengiva",
  "dentes mudando de posição",
  "perda de dentes",
  "dificuldade para controlar a glicemia",
  "histórico de doença periodontal",
];

function Cta({ final = false }: { final?: boolean }) {
  return (
    <a
      className={`cta ${final ? "cta-light" : ""}`}
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
    >
      {final ? "AGENDAR UMA AVALIAÇÃO PERIODONTAL" : "QUERO AVALIAR MINHA SAÚDE PERIODONTAL"}
      <span aria-hidden="true">→</span>
    </a>
  );
}

function Divider() {
  return <div className="editorial-divider" aria-hidden="true"><span>✦</span></div>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="PerioLife — início">
          <img src="/assets/periolife-logo.png" alt="PerioLife" />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#silenciosa">Doença silenciosa</a>
          <a href="#mao-dupla">Relação de mão dupla</a>
          <a href="#tratamento">Tratamento</a>
          <a href="#especialista">Periodontista</a>
        </nav>
        <a className="header-cta" href={whatsappHref} target="_blank" rel="noreferrer">
          Agendar <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="kicker">DIABETES + SAÚDE PERIODONTAL</p>
          <h1>Diabetes e saúde periodontal: <em>uma relação que você precisa conhecer</em></h1>
          <p className="hero-lead">Se você tem diabetes, cuidar da sua gengiva também faz parte do cuidado com a sua saúde.</p>
          <div className="hero-body">
            <p>Você provavelmente já sabe que o diabetes pode afetar os olhos, os rins, os nervos e o coração.</p>
            <p>Mas talvez ainda não saiba que existe outra relação importante — e muitas vezes esquecida:</p>
            <p className="hero-emphasis">o diabetes e a doença periodontal estão diretamente relacionados.</p>
            <p>E essa relação funciona nos dois sentidos.</p>
            <p>O diabetes pode aumentar o risco e a gravidade da doença periodontal. E a inflamação causada pela periodontite pode dificultar o controle da glicemia.</p>
            <p>Por isso, se você tem diabetes, sua boca também merece acompanhamento especializado.</p>
          </div>
          <Cta />
        </div>

        <div className="hero-art" aria-label="Representação da relação entre diabetes e periodontite">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="art-node diabetes-node"><span>DIABETES</span><b>Glicemia</b></div>
          <div className="art-link"><span>↕</span><small>relação bidirecional</small></div>
          <div className="art-node perio-node"><span>PERIODONTITE</span><b>Inflamação</b></div>
          <div className="art-caption">Duas condições.<br />Uma mesma saúde.</div>
        </div>
      </section>

      <section className="opening-statement">
        <p>Você tem diabetes? Então talvez esteja esquecendo de olhar para a sua gengiva.</p>
      </section>

      <section className="editorial-section two-column">
        <div className="section-number">01</div>
        <div className="content-narrow">
          <p>Quando falamos em controle do diabetes, pensamos em alimentação, atividade física, medicamentos e exames de sangue.</p>
          <p>Mas existe um cuidado que muitas vezes fica de fora: a saúde periodontal.</p>
          <p>Pessoas com diabetes, principalmente quando a glicemia está fora da meta, apresentam maior risco de desenvolver doença periodontal e podem apresentar formas mais graves e de progressão mais rápida.</p>
          <p>E existe um problema:</p>
          <p className="pull-quote">a periodontite pode evoluir durante muito tempo sem causar dor.</p>
          <p>Quando os sinais mais evidentes aparecem, a doença já pode ter provocado perda de osso e comprometimento dos tecidos que sustentam os dentes.</p>
          <p>Por isso, esperar doer não é uma boa estratégia.</p>
        </div>
      </section>

      <Divider />

      <section className="editorial-section silent-section" id="silenciosa">
        <div className="section-heading">
          <span>02 — ATENÇÃO AOS SINAIS</span>
          <h2>A doença periodontal pode ser silenciosa</h2>
        </div>
        <div className="silent-grid">
          <div className="prose">
            <p>A periodontite é uma doença inflamatória crônica que destrói, progressivamente, os tecidos que sustentam os dentes.</p>
            <p>Ela pode começar com sinais que parecem pequenos:</p>
          </div>
          <ul className="symptoms-list">
            {symptoms.map((symptom, index) => (
              <li key={symptom}><span>{String(index + 1).padStart(2, "0")}</span>{symptom}</li>
            ))}
          </ul>
        </div>
        <div className="after-list prose-wide">
          <p>Mas nem sempre existe dor.</p>
          <p>E é justamente por isso que muitas pessoas só procuram ajuda quando percebem que um dente está ficando mole.</p>
          <p>Nesse estágio, já pode existir uma perda significativa do suporte dentário.</p>
          <p className="closing-line">A melhor hora para diagnosticar a periodontite é antes de ela comprometer seus dentes.</p>
        </div>
      </section>

      <section className="cycle-section" id="mao-dupla">
        <div className="cycle-intro">
          <span>03 — ENTENDA A RELAÇÃO</span>
          <h2>Diabetes e periodontite: uma relação de mão dupla</h2>
          <p>Imagine duas condições alimentando uma à outra.</p>
        </div>
        <div className="cycle-flow">
          <article>
            <span>01</span>
            <h3>DIABETES</h3>
            <p>A hiperglicemia pode favorecer alterações na resposta inflamatória e na capacidade de defesa do organismo.</p>
          </article>
          <i aria-hidden="true">↓</i>
          <article>
            <span>02</span>
            <h3>MAIOR RISCO E GRAVIDADE DA PERIODONTITE</h3>
            <p>A inflamação periodontal pode se tornar mais intensa e a destruição dos tecidos de suporte dos dentes pode ser mais acelerada.</p>
          </article>
          <i aria-hidden="true">↓</i>
          <article>
            <span>03</span>
            <h3>INFLAMAÇÃO PERIODONTAL</h3>
            <p>A periodontite é uma fonte crônica de inflamação.</p>
          </article>
          <i aria-hidden="true">↓</i>
          <article>
            <span>04</span>
            <h3>MAIOR DIFICULDADE NO CONTROLE GLICÊMICO</h3>
            <p>A inflamação periodontal pode contribuir para alterações relacionadas à resistência à insulina e dificultar o alcance das metas glicêmicas.</p>
          </article>
        </div>
        <div className="cycle-conclusion">
          <p className="large">É uma relação bidirecional.</p>
          <p>Por isso, cuidar da periodontite não significa apenas cuidar dos dentes.</p>
          <p>Significa também cuidar de uma condição inflamatória que faz parte do contexto de saúde de uma pessoa com diabetes.</p>
          <p>
            A Sociedade Brasileira de Diabetes reconhece a importância dessa relação e orienta que a saúde bucal faça parte do cuidado da pessoa com diabetes. {" "}
            <a href="https://diabetes.org.br/tipos-de-diabetes/" target="_blank" rel="noreferrer">(Sociedade Brasileira de Diabetes⁠￼)</a>
          </p>
        </div>
      </section>

      <section className="evidence-section" id="tratamento">
        <div className="evidence-card">
          <span>REVISÃO COCHRANE · 2022</span>
          <strong>0,43</strong>
          <p>ponto percentual na HbA1c após 3 a 4 meses</p>
        </div>
        <div className="evidence-copy">
          <span>04 — EVIDÊNCIAS CIENTÍFICAS</span>
          <h2>O tratamento periodontal pode ajudar no controle da glicemia?</h2>
          <p>As evidências científicas apontam que sim.</p>
          <p>Estudos clínicos e revisões sistemáticas mostram que o tratamento da periodontite pode estar associado a uma redução da hemoglobina glicada (HbA1c), especialmente nos primeiros meses após o tratamento.</p>
          <p>
            Uma revisão Cochrane publicada em 2022, que reuniu 35 estudos e mais de 3.200 participantes, encontrou uma redução média de aproximadamente 0,43 ponto percentual na HbA1c após 3 a 4 meses do tratamento periodontal. {" "}
            <a href="https://pubmed.ncbi.nlm.nih.gov/35420698/" target="_blank" rel="noreferrer">(PubMed⁠￼)</a>
          </p>
          <p>Isso não significa que o tratamento periodontal substitua medicamentos, alimentação, atividade física ou o acompanhamento médico.</p>
          <p>Significa que controlar a inflamação periodontal pode fazer parte de uma estratégia mais completa para o cuidado da pessoa com diabetes.</p>
          <p>O cuidado precisa ser integrado.</p>
          <p className="care-team">Médico + endocrinologista + periodontista + paciente.</p>
          <p>Cada profissional cuidando de uma parte importante da mesma saúde.</p>
        </div>
      </section>

      <Divider />

      <section className="life-stage-section">
        <article>
          <span>05 — DIAGNÓSTICO RECENTE</span>
          <h2>Você descobriu que tem diabetes recentemente?</h2>
          <p>Então este é um ótimo momento para olhar também para a sua saúde periodontal.</p>
          <p>Mesmo que você:</p>
          <ul>
            {recentDiagnosis.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p>A periodontite pode estar presente sem sintomas evidentes.</p>
          <p>Uma avaliação periodontal permite identificar precocemente alterações na gengiva, no nível de inserção dos dentes e no osso que os sustenta.</p>
          <p className="stage-closing">Quanto mais cedo identificamos a doença, maiores são as possibilidades de preservar seus dentes e controlar sua evolução.</p>
        </article>

        <article className="dark-stage">
          <span>06 — DIABETES HÁ ANOS</span>
          <h2>E se você já tem diabetes há anos?</h2>
          <p>Também vale investigar.</p>
          <p>Principalmente se você apresenta:</p>
          <ul className="check-list">
            {longTermSigns.map((item) => <li key={item}>✓ {item}</li>)}
          </ul>
          <p className="stage-closing">Não espere a mobilidade dentária aparecer para procurar um especialista.</p>
        </article>
      </section>

      <section className="specialist-section" id="especialista">
        <div className="doctor-visual">
          <div className="doctor-halo" />
          <img src="/assets/dra-elisa-grilo.png" alt="Dra. Elisa Grilo" loading="lazy" />
        </div>
        <div className="specialist-copy">
          <span>07 — CUIDADO ESPECIALIZADO</span>
          <h2>Por que procurar um periodontista?</h2>
          <p>O periodontista é o dentista especializado no diagnóstico, prevenção e tratamento das doenças que afetam os tecidos que sustentam os dentes: gengiva, ligamento periodontal e osso.</p>
          <p>No paciente com diabetes, essa avaliação ganha ainda mais importância porque é necessário considerar não apenas o que acontece na boca, mas também a relação entre inflamação periodontal e condição metabólica.</p>
          <p>Na PerioLife, esse cuidado é realizado por uma profissional dedicada à Periodontia:</p>
          <div className="doctor-name">
            <strong>Dra. Elisa Grilo</strong>
            <span>Especialista em Periodontia</span>
          </div>
          <p>Um olhar especializado para diagnosticar a doença periodontal, determinar seu estágio e grau de evolução e definir um plano de tratamento individualizado.</p>
          <p>Porque tratar gengiva não é simplesmente “fazer uma limpeza”.</p>
          <p className="diagnosis-line">É diagnosticar. É controlar a inflamação. É preservar o suporte dos dentes. É acompanhar.</p>
        </div>
      </section>

      <section className="conversion-section">
        <div className="conversion-copy">
          <h2>Seu diabetes está sendo cuidado. E a sua gengiva?</h2>
          <p>Não espere sentir dor.</p>
          <p>Não espere o dente ficar mole.</p>
          <p>Não espere perder um dente para descobrir que havia uma doença silenciosa acontecendo.</p>
          <p>Se você tem diabetes, faça uma avaliação periodontal.</p>
          <p>Na PerioLife, você encontra atendimento especializado em Periodontia em Brasília.</p>
          <Cta final />
        </div>
        <div className="conversion-photo">
          <img src="/assets/clinica-consultorio.png" alt="Consultório da PerioLife em Brasília" loading="lazy" />
        </div>
      </section>

      <section className="information-section">
        <span>Cuidado integrado começa com informação.</span>
        <h2>A saúde da sua boca não está separada do restante do seu organismo.</h2>
        <div className="care-lines">
          <p>Cuide do diabetes.</p>
          <p>Cuide da gengiva.</p>
          <p>Cuide dos seus dentes.</p>
          <p>Cuide de você.</p>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <img src="/assets/periolife-logo.png" alt="PerioLife" />
          <div>
            <strong>PerioLife</strong>
            <p>Periodontia, Implantodontia e cuidado especializado com a saúde periodontal.</p>
          </div>
        </div>
        <p className="disclaimer">Conteúdo informativo. O acompanhamento periodontal não substitui o tratamento médico do diabetes e deve fazer parte de um cuidado integrado, individualizado para cada paciente.</p>
      </footer>

      <a className="floating-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Agendar uma avaliação periodontal">
        <span>W</span><b>Agendar avaliação</b>
      </a>
      <div className="mobile-sticky">
        <a href={whatsappHref} target="_blank" rel="noreferrer">AGENDAR UMA AVALIAÇÃO PERIODONTAL <span>→</span></a>
      </div>
    </main>
  );
}
