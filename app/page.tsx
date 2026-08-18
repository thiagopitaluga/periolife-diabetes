const whatsappHref =
  "https://wa.me/5561999603770?text=Ol%C3%A1%2C%20tenho%20diabetes%20e%20vim%20pela%20p%C3%A1gina%20da%20PerioLife.%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20periodontal.";

const signs = [
  "Sangramento ao escovar",
  "Gengiva vermelha ou inchada",
  "Mau hálito persistente",
  "Retração gengival",
  "Sensibilidade nos dentes",
  "Dentes mudando de posição",
  "Mobilidade dentária",
  "Gosto diferente na boca",
];

const relationSteps = [
  {
    number: "01",
    label: "Diabetes",
    text: "Quando a glicemia permanece fora da meta, a resposta de defesa do organismo pode se alterar.",
  },
  {
    number: "02",
    label: "Maior suscetibilidade",
    text: "A inflamação periodontal pode ser mais intensa e a destruição dos tecidos pode avançar mais rápido.",
  },
  {
    number: "03",
    label: "Periodontite",
    text: "A doença mantém uma fonte crônica de inflamação nos tecidos que sustentam os dentes.",
  },
  {
    number: "04",
    label: "Controle glicêmico",
    text: "Essa inflamação pode contribuir para maior dificuldade no alcance das metas glicêmicas.",
  },
];

const faqs = [
  {
    question: "Sangramento na gengiva é normal em quem tem diabetes?",
    answer:
      "Não. Sangramento frequente é um sinal de inflamação e merece avaliação, especialmente quando existe diabetes ou dificuldade de controle glicêmico.",
  },
  {
    question: "Não sinto dor. Ainda assim preciso avaliar?",
    answer:
      "Sim. A periodontite pode evoluir sem dor e, quando a mobilidade dentária aparece, já pode haver perda importante do suporte dos dentes.",
  },
  {
    question: "O tratamento periodontal substitui o tratamento do diabetes?",
    answer:
      "Não. Ele deve fazer parte de um cuidado integrado e não substitui medicamentos, alimentação, atividade física ou acompanhamento médico.",
  },
  {
    question: "Descobri o diabetes recentemente. Quando devo procurar?",
    answer:
      "Este é um bom momento para estabelecer uma avaliação inicial, mesmo sem sintomas. O exame permite identificar alterações precocemente e planejar o acompanhamento.",
  },
  {
    question: "Como funciona o primeiro atendimento?",
    answer:
      "A avaliação considera seu histórico de saúde, examina gengiva e tecidos de suporte e, quando indicado, orienta os próximos passos de forma individualizada.",
  },
];

function WhatsappButton({ className = "" }: { className?: string }) {
  return (
    <a
      className={`button primary ${className}`.trim()}
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
    >
      Agendar avaliação periodontal <span aria-hidden="true">→</span>
    </a>
  );
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "PerioLife",
    description:
      "Clínica de Periodontia e Implantodontia com atendimento especializado em Brasília.",
    telephone: "+55 61 99960-3770",
    email: "contato@periolife.com.br",
    address: {
      "@type": "PostalAddress",
      streetAddress: "SHLN Lote 09 Bloco A, Sala 212, Ed. Biosphere Health Center",
      addressLocality: "Brasília",
      addressRegion: "DF",
      addressCountry: "BR",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="PerioLife — início">
          <img src="/assets/periolife-logo.png" alt="PerioLife" />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#relacao">A relação</a>
          <a href="#sinais">Sinais</a>
          <a href="#evidencias">Evidências</a>
          <a href="#especialista">Especialista</a>
        </nav>
        <a className="header-cta" href={whatsappHref} target="_blank" rel="noreferrer">
          Agendar <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Saúde bucal &amp; diabetes</div>
          <h1>Seu diabetes está sendo cuidado. <em>E a sua gengiva?</em></h1>
          <p className="hero-lead">
            Diabetes e periodontite têm uma relação de mão dupla. Uma avaliação
            especializada ajuda a identificar a inflamação antes que ela comprometa seus dentes.
          </p>
          <div className="hero-actions">
            <WhatsappButton />
            <a className="text-link" href="#relacao">Entender essa relação</a>
          </div>
          <div className="trust-row" aria-label="Diferenciais do atendimento">
            <span><b>01</b> Avaliação especializada</span>
            <span><b>02</b> Cuidado integrado</span>
            <span><b>03</b> Atendimento em Brasília</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Relação entre diabetes e saúde periodontal">
          <div className="visual-orbit orbit-a" />
          <div className="visual-orbit orbit-b" />
          <div className="relation-card relation-diabetes">
            <small>Quando há</small>
            <strong>Glicemia<br />fora da meta</strong>
          </div>
          <span className="relation-line"><i>↕</i></span>
          <div className="relation-card relation-gum">
            <small>Pode haver</small>
            <strong>Mais inflamação<br />periodontal</strong>
          </div>
          <div className="science-note">
            <b>Relação bidirecional</b>
            <span>Uma condição pode influenciar a outra.</span>
          </div>
        </div>
      </section>

      <section className="intro-band" id="relacao">
        <div>
          <span>Um cuidado que muitas vezes fica de fora</span>
          <p>O cuidado com a sua boca também faz parte do cuidado com a sua saúde.</p>
        </div>
      </section>

      <section className="section warning-section" id="sinais">
        <div className="section-grid warning-grid">
          <div className="section-copy">
            <div className="eyebrow"><span /> A doença pode ser silenciosa</div>
            <h2>Esperar doer não é uma boa estratégia.</h2>
            <p>
              A periodontite destrói progressivamente a gengiva, o ligamento periodontal e o
              osso que sustentam os dentes. O problema é que ela pode evoluir por muito tempo
              sem causar dor.
            </p>
            <blockquote>
              “A melhor hora para diagnosticar é antes de o suporte dos dentes ser comprometido.”
            </blockquote>
          </div>
          <div className="signs-panel">
            <div className="signs-head">
              <span>Observe os sinais</span>
              <b>Não normalize mudanças na sua gengiva.</b>
            </div>
            <div className="signs-grid">
              {signs.map((sign, index) => (
                <div className="sign-item" key={sign}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{sign}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relation-section">
        <div className="section-grid relation-layout">
          <div className="relation-heading">
            <div className="eyebrow light"><span /> Entenda a mão dupla</div>
            <h2>Duas condições que podem alimentar uma à outra.</h2>
            <p>
              Cuidar da periodontite não é apenas cuidar dos dentes. É controlar uma fonte de
              inflamação dentro de um contexto maior de saúde.
            </p>
            <a
              href="https://diabetes.org.br/tipos-de-diabetes/"
              target="_blank"
              rel="noreferrer"
              className="source-link"
            >
              Ver orientação da Sociedade Brasileira de Diabetes ↗
            </a>
          </div>
          <div className="flow-list">
            {relationSteps.map((step, index) => (
              <div className="flow-card" key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.label}</h3>
                  <p>{step.text}</p>
                </div>
                {index < relationSteps.length - 1 && <i aria-hidden="true">↓</i>}
              </div>
            ))}
            <div className="loop-note"><span>↺</span> O ciclo pode continuar — até que a inflamação seja tratada.</div>
          </div>
        </div>
      </section>

      <section className="section evidence-section" id="evidencias">
        <div className="section-grid evidence-grid">
          <article className="evidence-card">
            <div className="evidence-label">O que a ciência encontrou</div>
            <strong>−0,43</strong>
            <span>ponto percentual na HbA1c</span>
            <p>
              Redução média observada de 3 a 4 meses após o tratamento periodontal, em comparação
              com ausência de tratamento ou cuidado usual.
            </p>
            <div className="evidence-meta">
              <span>30 estudos</span>
              <span>2.443 participantes</span>
              <span>Evidência moderada</span>
            </div>
          </article>
          <div className="section-copy evidence-copy">
            <div className="eyebrow"><span /> Evidência, sem promessas</div>
            <h2>O tratamento periodontal pode ajudar no controle da glicemia?</h2>
            <p>
              Uma revisão Cochrane de 2022 concluiu que o tratamento periodontal provavelmente
              melhora o controle glicêmico em pessoas que têm diabetes e periodontite.
            </p>
            <p>
              Isso não significa substituir medicamentos ou acompanhamento médico. Significa
              incluir o controle da inflamação periodontal em uma estratégia de cuidado mais completa.
            </p>
            <div className="care-equation" aria-label="Cuidado integrado">
              <span>Médico</span><i>+</i><span>Endócrino</span><i>+</i><span>Periodontista</span><i>+</i><span>Você</span>
            </div>
            <a
              href="https://www.cochrane.org/evidence/CD004714_does-treatment-gum-disease-help-people-diabetes-control-blood-sugar-levels"
              target="_blank"
              rel="noreferrer"
              className="text-link scientific"
            >
              Consultar a revisão Cochrane ↗
            </a>
          </div>
        </div>
      </section>

      <section className="section moment-section">
        <div className="section-heading center-heading">
          <div className="eyebrow"><span /> Qual é o seu momento?</div>
          <h2>A avaliação faz sentido agora.</h2>
          <p>Com ou sem sintomas, o exame periodontal estabelece um ponto de partida para o seu cuidado.</p>
        </div>
        <div className="moment-grid section-grid">
          <article className="moment-card new-diagnosis">
            <span>Se o diagnóstico é recente</span>
            <h3>Comece o cuidado de forma completa.</h3>
            <p>
              Mesmo sem dor ou sangramento, é possível identificar precocemente alterações na
              gengiva e nos tecidos de suporte dos dentes.
            </p>
            <ul>
              <li>Estabelecer uma avaliação inicial</li>
              <li>Reconhecer sinais que passam despercebidos</li>
              <li>Planejar prevenção e acompanhamento</li>
            </ul>
          </article>
          <article className="moment-card long-term">
            <span>Se você convive com diabetes há anos</span>
            <h3>Não deixe a gengiva fora do acompanhamento.</h3>
            <p>
              Vale investigar especialmente diante de sangramento, mau hálito, retração, perda de
              dentes ou dificuldade de manter a glicemia na meta.
            </p>
            <ul>
              <li>Avaliar sinais atuais e histórico</li>
              <li>Entender a condição dos tecidos de suporte</li>
              <li>Definir um plano individualizado</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="specialist-section" id="especialista">
        <div className="section-grid specialist-grid">
          <div className="doctor-visual">
            <div className="doctor-halo" />
            <img src="/assets/dra-elisa-grilo.png" alt="Dra. Elisa Grilo, especialista em Periodontia" loading="lazy" />
            <div className="doctor-signature">
              <span>Periodontia</span>
              <b>Diagnosticar. Controlar. Preservar.</b>
            </div>
          </div>
          <div className="specialist-copy">
            <div className="eyebrow light"><span /> Um olhar especializado</div>
            <h2>Dra. Elisa Grilo</h2>
            <h3>Especialista em Periodontia</h3>
            <p>
              No paciente com diabetes, a avaliação periodontal considera o que acontece na boca
              e também sua relação com a condição metabólica e inflamatória.
            </p>
            <p>
              Porque tratar gengiva não é simplesmente “fazer uma limpeza”. É diagnosticar a doença,
              compreender seu estágio, controlar a inflamação, preservar o suporte dos dentes e acompanhar.
            </p>
            <div className="specialist-points">
              <span>Exame periodontal cuidadoso</span>
              <span>Plano de tratamento individualizado</span>
              <span>Acompanhamento especializado</span>
            </div>
            <WhatsappButton className="on-dark" />
          </div>
        </div>
      </section>

      <section className="section appointment-section">
        <div className="section-grid appointment-panel">
          <div className="appointment-copy">
            <div className="eyebrow"><span /> Sua avaliação</div>
            <h2>Um primeiro passo simples para enxergar o que pode estar silencioso.</h2>
            <p>Você fala com a equipe pelo WhatsApp, escolhe o melhor horário e realiza a avaliação na PerioLife, em Brasília.</p>
            <WhatsappButton />
            <small>Conversa rápida pelo WhatsApp. Sem compromisso de tratamento.</small>
          </div>
          <div className="steps-list">
            <div><span>1</span><p><b>Conte seu momento</b>Informe que tem diabetes e quais sinais percebe.</p></div>
            <div><span>2</span><p><b>Agende seu horário</b>A equipe orienta as opções disponíveis.</p></div>
            <div><span>3</span><p><b>Faça a avaliação</b>Entenda a condição da sua gengiva e os próximos passos.</p></div>
          </div>
        </div>
      </section>

      <section className="clinic-section">
        <img src="/assets/clinica-consultorio.png" alt="Consultório da PerioLife em Brasília" loading="lazy" />
        <div className="clinic-card">
          <div className="eyebrow light"><span /> PerioLife Brasília</div>
          <h2>Cuidado especializado em um ambiente pensado para acolher.</h2>
          <p>SHLN Lote 09, Bloco A, Sala 212<br />Ed. Biosphere Health Center — Brasília/DF</p>
          <a href={whatsappHref} target="_blank" rel="noreferrer">Falar com a equipe ↗</a>
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-grid faq-layout">
          <div className="faq-heading">
            <div className="eyebrow"><span /> Dúvidas frequentes</div>
            <h2>Informação também é cuidado.</h2>
            <p>Respostas diretas para decidir seu próximo passo com tranquilidade.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary><span>{faq.question}</span><i>+</i></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <img src="/assets/clinica-periolife.jpg" alt="Ambiente da PerioLife" loading="lazy" />
        <div className="final-overlay" />
        <div className="final-content">
          <span>Seu diabetes está sendo cuidado.</span>
          <h2>E a sua gengiva?</h2>
          <p>Não espere sentir dor ou perceber um dente mole para procurar um especialista.</p>
          <WhatsappButton className="final-button" />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main section-grid">
          <div className="footer-brand">
            <img src="/assets/periolife-logo.png" alt="PerioLife" />
            <p>Periodontia, Implantodontia e cuidado especializado com a saúde periodontal.</p>
          </div>
          <div>
            <h3>Contato</h3>
            <a href="tel:+556137111818">(61) 3711-1818</a>
            <a href="tel:+5561999603770">(61) 99960-3770</a>
            <a href="mailto:contato@periolife.com.br">contato@periolife.com.br</a>
          </div>
          <div>
            <h3>Referências</h3>
            <a href="https://diabetes.org.br/tipos-de-diabetes/" target="_blank" rel="noreferrer">Sociedade Brasileira de Diabetes ↗</a>
            <a href="https://pubmed.ncbi.nlm.nih.gov/35420698/" target="_blank" rel="noreferrer">Revisão Cochrane / PubMed ↗</a>
            <a href="https://www.efp.org/for-patients/gum-disease-general-health/perio-diabetes/related-materials/faq-29191/" target="_blank" rel="noreferrer">European Federation of Periodontology ↗</a>
          </div>
        </div>
        <div className="disclaimer section-grid">
          <p>
            Conteúdo informativo. O acompanhamento periodontal não substitui o tratamento médico do
            diabetes e deve fazer parte de um cuidado integrado e individualizado.
          </p>
          <span>© PerioLife 2026</span>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Agendar avaliação pelo WhatsApp">
        <span>W</span><b>Agendar pelo WhatsApp</b>
      </a>
      <div className="mobile-sticky">
        <a href={whatsappHref} target="_blank" rel="noreferrer">Agendar avaliação <span>→</span></a>
      </div>
    </main>
  );
}
