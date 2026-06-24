/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Service, Testimonial } from "./types";

export const HERO_BG_IMAGE =
  "https://raw.githubusercontent.com/WandesonAndrade/AM_ENGENHARIA/refs/heads/main/src/assets/images/hero_background_1781810209909.jpg";
export const DIRECTOR_AVATAR =
  "https://raw.githubusercontent.com/WandesonAndrade/AM_ENGENHARIA/refs/heads/main/src/assets/images/en_andre.jpeg";

export const SERVICES: Service[] = [
  {
    id: "eletrica",
    title: "Elétrica",
    description:
      "Dimensionamento de circuitos de força, subestações, luminotécnica avançada e diagramas unifilares em BIM.",
    detailedTitle: "Instalações Elétricas Prediais e Comerciais",
    detailedDesc:
      "Modelagem tridimensional de circuitos complexos de baixa e média tensão com balanceamento de fases minucioso. Elaboramos estudos de carga, seletividade de disjuntores, diagramas unifilares inteligentes e fiação estruturada para mitigar riscos de sobreaquecimentos ou perdas residenciais.",
    icon: "Zap",
    benefits: [
      "Cálculo preciso contra perdas e quedas de tensão.",
      "Projetos de luminotécnica avançada em harmonia arquitetônica.",
      "Estudos detalhados de seletividade de disjuntores técnicos.",
      "Sistemas de aterramento robustos integrando quadros seguros.",
    ],
  },
  {
    id: "hidrossanitario",
    title: "Hidrossanitário",
    description:
      "Projetos de água quente/fria, esgoto sanitário, pluvial e bombas de recalque em conformidade sanitária dinâmica.",
    detailedTitle: "Engenharia de Instalações Hidrossanitárias",
    detailedDesc:
      "Adução e distribuição hidráulica de águas frias, quentes e pluviais e escoamentos de esgotos sanitários de alto padrão. Calculamos perdas de carga, diâmetro exato de tubulações para pressões majestosas e poços estanques de recalque eficientes.",
    icon: "Droplet",
    benefits: [
      "Isométricos hidráulicos precisos gerando facilidade na montagem.",
      "Equilíbrio ótimo de pressão eliminando ruídos em tubulações.",
      "Reuso ecológico inteligente de captação pluvial.",
      "Dimensionamento de caixas de gordura e fossas sépticas eficientes.",
    ],
  },
  {
    id: "ppci",
    title: "PPCI",
    description:
      "Sistemas de prevenção, alarmes automáticos, redes de hidrantes e sprinklers e planos de evacuação coordenados.",
    detailedTitle: "Plano de Prevenção e Proteção Contra Incêndio (PPCI)",
    detailedDesc:
      "Desenhamos soluções integradas de combate e contenção de fogo em conformidade integral com as instruções técnicas do Corpo de Bombeiros. Projetamos redes completas de hidrantes, sinalização e iluminação fotoluminescente eficiente e rotas de fuga seguras.",
    icon: "Flame",
    benefits: [
      "Redes de hidrantes e sprinklers dimensionadas com precisão.",
      "Mapeamento seguro de rotas de fuga e saídas de pânico escolares.",
      "Alarmes e sensores automáticos rápidos de monóxido de carbono.",
      "Aprovações rápidas de alvarás de funcionamento predial sem embargos.",
    ],
  },
  {
    id: "cftv_cabeamento",
    title: "CFTV e Redes",
    description:
      "Projetos de cabeamento estruturado de alta densidade, câmeras IP inteligentes, barreiras ópticas e controle biométrico.",
    detailedTitle: "Segurança Eletrônica, CFTV IP e Cabeamento Estruturado",
    detailedDesc:
      "Mapeamos sua rede corporativa ou residencial de altíssima velocidade. Dispomos pontos Cat6, racks lógicos centrais de alta densidade (45U), câmeras PoE inteligentes de alta definição e barreiras perimetrais com catracas biométricas integradas.",
    icon: "Network",
    benefits: [
      "Racks lógicos organizados para fácil expansão estrutural.",
      "Atenuação física insignificante na transferência local de dados.",
      "Visualização remota integrada de câmeras PoE inteligentes.",
      "Controles automáticos de portões, cancelas e catracas PNE.",
    ],
  },
  {
    id: "spda",
    title: "SPDA",
    description:
      "Proteção contra descargas atmosféricas, malhas de captação, descidas e aterramentos diretos sob a NBR 5419.",
    detailedTitle: "Projetos de Proteção Contra Descargas Atmosféricas",
    detailedDesc:
      "Projetamos malhas físicas de dissipação de eletricidade atmosférica para prédios e galpões. Desenhamos captores certificados por ângulos de Franklin ou Gaiola de Faraday, com descidas isoladas até anéis enterrados de aterramento.",
    icon: "CloudLightning",
    benefits: [
      "Proteção rigorosa de aparelhos elétricos delicados contra surtos.",
      "Garantia de segurança humana em áreas cobertas adjacentes.",
      "Respeito absoluto aos limites exigidos pela norma NBR 5419.",
      "Laudos oficiais exigidos por seguradoras civis.",
    ],
  },
  {
    id: "gas",
    title: "Redes de Gás",
    description:
      "Instalações prediais para gás GLP ou Gás Natural em cobre ou multicamadas com centrais de medição vedadas renomadas.",
    detailedTitle: "Projetos e Distribuição Segura de Gás Predial",
    detailedDesc:
      "Abastecimento seguro para cozinhas, fornos e aquecedores de alta capacidade. Desenhamos redes em tubulação selada de cobre e multicamadas certificadas, com centrais coletivas reguladas e sistemas automáticos integrados de corte rápido de fluxo por segurança.",
    icon: "Wind",
    benefits: [
      "Conexões perfeitamente estancadas com testes hidrostáticos descritos.",
      "Reguladores duplos de pressão garantindo chamas uniformes.",
      "Dispositivos de cortes emergenciais físicos com fácil acesso.",
      "Atendimento completo a distâncias e ventilações exigidas.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "proj1",
    title: "Projeto Residencial/Comercial As-Built - Mauriane Freitas",
    category: "residencial",
    categoryLabel: "Residencial",
    description:
      "Levantamento cadastral completo sob metodologia As-Built de arquitetura predial e detalhamento executivo de esquadrias e plantas de situação.",
    image:
      "https://raw.githubusercontent.com/WandesonAndrade/AM_ENGENHARIA/refs/heads/main/src/assets/images/ARQ_Projeto.jpg",
    images: [
      "https://raw.githubusercontent.com/WandesonAndrade/AM_ENGENHARIA/refs/heads/main/src/assets/images/ARQ_Projeto.jpg",
      "https://raw.githubusercontent.com/WandesonAndrade/AM_ENGENHARIA/refs/heads/main/src/assets/images/ARQ_Projeto1.jpg",
    ],
    location: "Vila Lobão, Caxias - MA",
    year: "2026",
    area: "497 m²",
    highlights: [
      "Desenvolvimento de planta baixa do térreo e pavimento 1 com dimensões precisas",
      "Quadro de esquadrias detalhando portas de enrolar automáticas, Alumínio e Vidro",
      "Modelagem analítica em BIM de vãos e áreas construídas e telhado metálico",
      "Certificação e ART técnica registrada no CREA sob responsabilidade da Eng. Mauriane Raiane",
    ],
  },
  {
    id: "proj2",
    title: "Projeto de Instalações de Gás e Central de Medição",
    category: "instalacoes",
    categoryLabel: "Instalações / Gás",
    description:
      "Projeto executivo detalhado de instalações de gás, contemplando central de gás, central de medição e distribuição para pavimentos e cobertura, além do quadro quantitativo completo de materiais.",
    image:
      "https://raw.githubusercontent.com/WandesonAndrade/AM_ENGENHARIA/refs/heads/main/src/assets/images/PROJ_Gas.jpg",
    images: [
      "https://raw.githubusercontent.com/WandesonAndrade/AM_ENGENHARIA/refs/heads/main/src/assets/images/PROJ_Gas.jpg",
    ],
    location: "A definir", // O texto extraído não especifica a localização
    year: "2026",
    area: "N/A", // Área não especificada no detalhamento
    highlights: [
      "Dimensionamento de central de gás e central de medição com distribuição por pavimentos (Térreo e Cobertura)",
      "Quadro quantitativo detalhado contendo medidores de gás (G06) e reguladores de pressão (2 kg/h)",
      'Especificação técnica de rede com Tubos de Cobre (1/2"), Ferro Galvanizado (25mm) e Multicamadas Amarelo (15mm e 16mm)',
      "Detalhamento de ferragens de fixação, incluindo abraçadeiras tipo U verticais e suportes em barra chata",
    ],
  },
  {
    id: "proj3",
    title: "Projeto de CFTV e Cabeamento Estruturado (RCE)[cite: 2]",
    category: "tecnologia",
    categoryLabel: "Tecnologia / Segurança",
    description:
      "Projeto executivo detalhado de sistema de CFTV e Rede de Cabeamento Estruturado (RCE)[cite: 2], englobando distribuição no térreo e pavimentos adicionais[cite: 2], vistas isométricas[cite: 2], detalhamento de rack[cite: 2] e lista completa de materiais[cite: 2].",
    image:
      "https://raw.githubusercontent.com/WandesonAndrade/AM_ENGENHARIA/refs/heads/main/src/assets/images/PROJ_CFTV_RCE.jpg",
    images: [
      "https://raw.githubusercontent.com/WandesonAndrade/AM_ENGENHARIA/refs/heads/main/src/assets/images/PROJ_CFTV_RCE.jpg",
      "https://raw.githubusercontent.com/WandesonAndrade/AM_ENGENHARIA/refs/heads/main/src/assets/images/PROJ_CFTV_RCE1.jpg",
      "https://raw.githubusercontent.com/WandesonAndrade/AM_ENGENHARIA/refs/heads/main/src/assets/images/PROJ_CFTV_RCE2.jpg",
      "https://raw.githubusercontent.com/WandesonAndrade/AM_ENGENHARIA/refs/heads/main/src/assets/images/PROJ_CFTV_RCE3.jpg",
    ],
    location: "A definir",
    year: "2026",
    area: "N/A",
    highlights: [
      "Plantas de distribuição de CFTV e RCE contemplando o Térreo e os Pavimentos 01, 02 e 03[cite: 2]",
      "Especificação e quantificação de câmeras de segurança (Tipos Bullet, Dome e PTZ Speed Dome) divididas por tabelas de dispositivos para cada pavimento[cite: 2]",
      "Detalhamento frontal de montagem de Rack (Det. Rack 01) especificando a posição de equipamentos como Switch de 48 portas, Patch Panels de 24 portas, NVR de 16 canais, Servidor 2U e Nobreak[cite: 2]",
      "Lista de materiais completa contendo infraestrutura (eletrocalhas e eletrodutos) e componentes de rede estruturada (Módulos Keystone RJ45 e Roteadores Wireless)[cite: 2]",
    ],
  },
  {
    id: "proj4",
    title:
      "Projeto de SPDA - Sistema de Proteção contra Descargas Atmosféricas",
    category: "eletrica",
    categoryLabel: "Elétrica / SPDA",
    description:
      "Projeto executivo de SPDA (Sistema de Proteção contra Descargas Atmosféricas), contemplando o detalhamento elétrico em corte (fachada norte) e vista geral isométrica da edificação[cite: 3].",
    image:
      "https://raw.githubusercontent.com/WandesonAndrade/AM_ENGENHARIA/refs/heads/main/src/assets/images/PROJ_SPDA.jpg",
    images: [
      "https://raw.githubusercontent.com/WandesonAndrade/AM_ENGENHARIA/refs/heads/main/src/assets/images/PROJ_SPDA.jpg",
    ],
    location: "A definir",
    year: "2026",
    area: "N/A",
    highlights: [
      "Levantamento técnico e desenho em escala 1:100 para o sistema de proteção[cite: 3]",
      "Detalhamento da fachada Norte com indicação dos elementos do sistema elétrico[cite: 3]",
      "Representação em vista geral (isométrica) para análise espacial da proteção contra descargas atmosféricas[cite: 3]",
      "Documentação técnica desenvolvida sob responsabilidade da OF ENGENHARIA[cite: 3]",
    ],
  },
  {
    id: "proj5",
    title: "Projeto Hidrossanitário: Água Fria e Detalhes",
    category: "hidrossanitario",
    categoryLabel: "Hidrossanitário",
    description:
      "Projeto executivo de instalações hidrossanitárias, incluindo planta baixa de água fria, detalhes de áreas úmidas (cozinha, área de serviço, gourmet) e esquema de distribuição para pavimentos tipo e cobertura[cite: 4].",
    image:
      "https://raw.githubusercontent.com/WandesonAndrade/AM_ENGENHARIA/refs/heads/main/src/assets/images/PROJ_HIDROSSANITARIO.jpg",
    images: [
      "https://raw.githubusercontent.com/WandesonAndrade/AM_ENGENHARIA/refs/heads/main/src/assets/images/PROJ_HIDROSSANITARIO.jpg",
    ],
    location: "Vila Nova",
    year: "2026",
    area: "N/A",
    highlights: [
      "Desenvolvimento de planta baixa de água fria e esquema de distribuição de reservatórios superiores[cite: 4]",
      "Detalhamento específico para áreas de serviço, cozinhas, áreas gourmet e banheiros (padronizados para os pavimentos)[cite: 4]",
      "Definição da infraestrutura de tubos de queda e componentes hidrossanitários[cite: 4]",
      "Projeto técnico sob responsabilidade da empresa ILIK COMERCIO INDUSTRIA LTDA[cite: 4]",
    ],
  },
  {
    id: "proj6",
    title: "Projeto de Combate a Incêndio",
    category: "seguranca",
    categoryLabel: "Segurança / Combate a Incêndio",
    description:
      "Projeto executivo de sistemas de combate a incêndio, incluindo planta geral de instalações, detalhamento de hidrantes, casa de bombas, sinalização de emergência e esquemas isométricos[cite: 5].",
    image:
      "https://raw.githubusercontent.com/WandesonAndrade/AM_ENGENHARIA/refs/heads/main/src/assets/images/PROJ_COMBATE_INCENDIO.jpg",
    images: [
      "https://raw.githubusercontent.com/WandesonAndrade/AM_ENGENHARIA/refs/heads/main/src/assets/images/PROJ_COMBATE_INCENDIO.jpg",
      "https://raw.githubusercontent.com/WandesonAndrade/AM_ENGENHARIA/refs/heads/main/src/assets/images/PROJ_COMBATE_PLANTAS.jpg",
      "https://raw.githubusercontent.com/WandesonAndrade/AM_ENGENHARIA/refs/heads/main/src/assets/images/PROJ_COMBATE_DETALHES.jpg",
    ],
    location: "A definir",
    year: "2026",
    area: "N/A",
    highlights: [
      "Planta geral das instalações contemplando a disposição de hidrantes, alarmes e saídas de emergência[cite: 5]",
      "Legenda completa conforme IT 03, especificando simbologia para saídas de emergência, extintores, comandos manuais e sinalização fotoluminescente[cite: 5]",
      "Detalhamento técnico de sistemas, incluindo esquema isométrico do conjunto motor-bomba, detalhe do hidrante de recalque e detalhes de acionamento de alarme[cite: 5]",
      'Quadro quantitativo de materiais para a rede de hidrantes, especificando tubulações de Ferro Galvanizado (BSP) de diversos diâmetros (até 65mm / 2 1/2") e conexões[cite: 5]',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test1",
    name: "Ricardo S. de Almeida",
    role: "Proprietário de Residência",
    projectAssoc: "Residência Alphaville",
    quote:
      "A previsibilidade foi o que mais me impressionou. Eu sabia exatamente quanto ia gastar e quando a obra ia avançar. O engenheiro e sua equipe elevaram o padrão técnica e profissionalmente.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
  },
  {
    id: "test2",
    name: "Mariana L. Vasconcellos",
    role: "Diretora de Operações",
    projectAssoc: "Sede Siemens",
    quote:
      "Trabalho impecável na reforma corporativa da nossa sede. Uma transparência absoluta em todos os custos, além de relatórios semanais que deram muita segurança para a nossa diretoria.",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
  },
  {
    id: "test3",
    name: "Eng. Roberto Mendes",
    role: "Gestor de Construtora",
    projectAssoc: "Edifício Horizonte em Pinheiros",
    quote:
      "Terceirizamos o projeto estrutural e a consultoria com o engenheiro. O cálculo gerou economia de aço notável e passou fácil pela aprovação pública da prefeitura. Extremamente pontuais e detalhistas.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
  },
];

export const METHOD_STEPS = [
  {
    step: "01",
    title: "Diagnóstico & Viabilidade",
    description:
      "Análise detalhada do terreno, características geotécnicas e objetivos orçamentários do cliente. Definimos as diretrizes técnicas preliminares para assegurar a construtibilidade física e economia.",
  },
  {
    step: "02",
    title: "Engenharia & Modelagem BIM",
    description:
      "Dimensionamento milimétrico utilizando softwares de última geração e elaboração dos projetos de forma tridimensional integrada. Isso reduz em 98% a chance de incompatibilidades na obra.",
  },
  {
    step: "03",
    title: "Execução e Fiscalização Técnica",
    description:
      "Gerenciamento técnico presencial focado em qualidade impecável de materiais, segurança de equipe de operários e acompanhamento de cronograma executivo por metas estruturadas.",
  },
  {
    step: "04",
    title: "Entrega Blindada (Manual do Proprietário)",
    description:
      "Vantagem do contrato Turnkey da AM Engenharia. Entregamos a obra rigorosamente limpa, com todas as vistorias concluídas (Habite-se, Bombeiros, ART terminativa) e manual completo de uso do imóvel.",
  },
];

// Custos de Referência Base por m2 (Valores estimados baseados em fatores médios de mercado)
export const ESTIMATOR_CONSTANTS = {
  pricing: {
    residencial: {
      economico: 2100, // R$ por m2
      medio: 3200,
      premium: 5200,
    },
    comercial: {
      economico: 2400,
      medio: 3500,
      premium: 5800,
    },
    corporativo: {
      economico: 2200,
      medio: 3400,
      premium: 5500,
    },
    reformas: {
      economico: 1800,
      medio: 2900,
      premium: 4800,
    },
  },
  addons: [
    {
      id: "sondagem",
      label: "Estudo de Solo (Sondagem)",
      price: 4500,
      desc: "Indispensável para fundação",
    },
    {
      id: "estrutural",
      label: "Cálculo Estrutural Completo",
      price: 8500,
      desc: "Dimensionamento com ART",
    },
    {
      id: "instalacoes",
      label: "Projetos Hidro / Elétricos Coordenados",
      price: 6200,
      desc: "Modelagem 3D",
    },
    {
      id: "fiscalizacao",
      label: "Fiscalização Diária de Canteiro",
      price: 4000,
      desc: "Taxa fixa mensal de acompanhamento",
    },
  ],
};
