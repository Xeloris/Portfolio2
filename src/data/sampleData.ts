import { 
  AboutMe,
  Article,
  Experience,
  Education,
  Skill,
  Service,
} from '../types';

export const aboutMe: AboutMe = {
  name: "Mehdi Blal",
  title: "Ingénieur Full Stack",
  description: "Enthousiaste à l'idée d'explorer les multiples facettes de l'apprentissage, je suis actuellement étudiant dans deux écoles distinctes, illustrant ainsi ma détermination à élargir mes horizons et à saisir toutes les opportunités qui se présentent à moi. Mon parcours académique polyvalent reflète ma soif de connaissances et ma volonté d'affronter des défis variés. Passionné par les casse-tête logiques, je trouve ma satisfaction à travers la programmation, où chaque ligne de code est une nouvelle énigme à résoudre.",
  image: "/photo.jpg",
  resumeUrl: "/cv.pdf",
  email: "mehdi.blal94@gmail.com",
  location: "Saint Maur des Fossés, France",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/Xeloris",
      icon: "github"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/mehdi-blal/",
      icon: "linkedin"
    },
  ]
};

export const articles: Article[] = [
  {
    id: "1",
    title: "Ce que le langage C m'a appris sur la rigueur et la logique",
    content: `## Ma Définition Personnelle

Le langage C représente pour moi le fondement de ma pensée algorithmique. C'est un langage qui se situe très près du matériel, ce qui m'a permis de mieux comprendre le fonctionnement réel des ordinateurs en profondeur. Sa syntaxe compacte et la nécessité de gérer manuellement la mémoire avec les pointeurs demandent une rigueur particulière, mais c'est précisément ce qui rend l'apprentissage si formateur. Cette caractéristique fait sa force, car elle permet un contrôle précis des ressources système tout en visant des performances maximales.

## Contexte Professionnel et Actualité

Dans le domaine du développement logiciel, la maîtrise du C reste une compétence fondamentale, particulièrement dans des contextes où la performance est cruciale, comme les systèmes embarqués ou les logiciels qui interagissent directement avec le matériel. Cette compétence me permet non seulement d'optimiser le fonctionnement des programmes que je développe, mais aussi de mieux comprendre des architectures matérielles plus complexes. Dans le milieu professionnel, le C est considéré comme une compétence de base essentielle.

## Mise en Œuvre : Mes Éléments de Preuve

Un exemple concret de l'application de cette compétence se trouve dans mon projet de conception d'un shell Unix. À travers ce projet, j'ai dû manipuler des processus, gérer des signaux et utiliser la bibliothèque standard du langage C. Ce défi m'a permis de comprendre en profondeur le fonctionnement du noyau d'un système d'exploitation dans la gestion des ressources. Le travail direct avec les appels systèmes m'a offert une compréhension approfondie du fonctionnement "derrière l'écran". Ce projet m'a particulièrement appris sur la gestion des processus et la communication inter-processus.

## Mon Bilan Critique

Je considère avoir un niveau avancé dans cette compétence, particulièrement en ce qui concerne la gestion de la mémoire et les structures de données. Cependant, je continue à progresser, notamment dans des aspects plus avancés comme la programmation concurrente ou les environnements fortement multi-threadés. La principale difficulté réside dans la complexité de certains concepts avancés et la nécessité de maintenir un code robuste et sécurisé.
Avec l'expérience acquise, je conseille de toujours bien documenter le code, particulièrement la gestion de la mémoire, et de maintenir une approche rigoureuse dans le développement. Cette compétence est devenue un élément essentiel de mon profil technique, me permettant d'aborder des projets complexes avec confiance.

## Projet Personnel-Professionnel

À moyen terme, je souhaite renforcer cette compétence en approfondissant les aspects de programmation concurrente et de développement de systèmes d'exploitation. Le C restera un langage fondamental dans ma carrière, particulièrement si je me dirige vers des domaines comme les systèmes embarqués ou les systèmes d'exploitation. Je compte continuer à développer des projets personnels en C pour maintenir et améliorer mes compétences.`,
    category: "Compétences techniques",
    image: "https://trustmyscience.com/wp-content/uploads/2020/01/langage-c-popularite.jpg"
  },
  {
    id: "2",
    title: "Java : de l'apprentissage à la transmission",
    content: `## Ma Définition Personnelle

Le Java représente pour moi un langage fondamental dans le développement d'applications d'entreprise. Sa robustesse, sa portabilité et son écosystème riche en font un outil essentiel dans mon arsenal de développeur. La programmation orientée objet en Java m'a permis de développer une approche structurée et modulaire du développement logiciel. La capacité à créer des applications robustes et évolutives grâce aux frameworks modernes a enrichi ma vision du développement.

## Contexte Professionnel et Actualité

Dans le domaine du développement d'applications d'entreprise, Java reste une technologie de référence. La demande pour des développeurs Java qualifiés reste forte, particulièrement dans le développement d'APIs REST et d'applications web. L'émergence de microservices et l'évolution constante des frameworks rendent ces compétences plus pertinentes que jamais. La capacité à concevoir et maintenir des APIs robustes est devenue un atout majeur dans le marché du travail.

## Mise en Œuvre : Mes Éléments de Preuve

Un exemple concret de l'application de ces compétences se trouve dans mes projets de développement d'APIs. J'ai conçu et implémenté plusieurs APIs RESTful, en mettant en œuvre les meilleures pratiques de développement et en assurant une architecture propre et maintenable. Ma valeur ajoutée a été de créer des APIs performantes, bien documentées et facilement évolutives.

Mon expérience dans l'enseignement de la POO en Java lors de journées portes ouvertes et auprès de lycéens témoigne également de ma maîtrise du langage. Cette expérience m'a permis de développer mes compétences en communication technique et en vulgarisation de concepts complexes.

## Mon Bilan Critique

Je considère avoir un niveau avancé dans cette technologie, particulièrement dans le développement d'APIs et la conception orientée objet. Cependant, je continue à progresser, notamment dans les aspects plus avancés comme la programmation réactive ou l'optimisation des performances d'applications Java. La principale difficulté réside dans le maintien d'une architecture propre et évolutive dans des projets complexes.

Avec l'expérience acquise, je conseille de toujours privilégier une architecture modulaire et de bien documenter le code, particulièrement les APIs. Cette compétence est devenue un élément essentiel de mon profil technique, me permettant d'aborder des projets d'entreprise avec confiance.

## Projet Personnel-Professionnel

À moyen terme, je souhaite renforcer ces compétences en approfondissant les aspects de microservices et de programmation réactive. Je vise également à améliorer mes compétences en architecture logicielle et en conception de systèmes distribués. Ces compétences seront cruciales pour ma progression vers des rôles plus seniors dans le développement d'applications d'entreprise.`,
    category: "Compétences techniques",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
  },
  {
    id: "3",
    title: "Git : un outil essentiel pour collaborer",
    content: `## Ma Définition Personnelle

Git représente pour moi un outil fondamental dans le développement logiciel moderne. Bien plus qu'un simple système de contrôle de version, Git est devenu un élément essentiel de mon workflow quotidien. Sa capacité à gérer efficacement les versions de code, à faciliter la collaboration et à maintenir l'intégrité du code source en fait un outil indispensable. La maîtrise de Git implique non seulement la compréhension de ses commandes de base, mais aussi une connaissance approfondie de ses concepts fondamentaux comme les branches, les merges et les rebases.

## Contexte Professionnel et Actualité

Dans le domaine du développement logiciel, Git est devenu le standard de facto pour le contrôle de version. La capacité à utiliser Git efficacement est devenue une compétence essentielle pour tout développeur. Dans un contexte professionnel où la collaboration et le travail en équipe sont primordiaux, la maîtrise de Git permet d'assurer une gestion fluide du code source et une collaboration efficace entre les membres de l'équipe. L'émergence de pratiques comme le DevOps et l'intégration continue rendent cette compétence plus cruciale que jamais.

## Mise en Œuvre : Mes Éléments de Preuve

Un exemple concret de l'application de cette compétence se trouve dans mes projets collaboratifs à l'école 42 et dans mes expériences professionnelles. J'ai dû gérer des workflows Git complexes, impliquant plusieurs branches, des merges et des résolutions de conflits. Ma valeur ajoutée a été de maintenir un historique de code propre et cohérent, tout en facilitant la collaboration entre les membres de l'équipe.

J'ai également mis en place des stratégies de branching efficaces pour différents types de projets, adaptant les workflows Git aux besoins spécifiques de chaque situation. Cette expérience m'a permis de développer une approche structurée de la gestion de versions.

## Mon Bilan Critique

Je considère avoir un niveau avancé dans cette compétence, particulièrement dans la gestion de workflows complexes et la résolution de conflits. Cependant, je continue à progresser, notamment dans l'optimisation des workflows Git pour des projets de grande envergure et dans l'automatisation des processus de déploiement. La principale difficulté réside dans la maintenance d'un historique de code propre dans des projets avec de nombreux contributeurs.

Avec l'expérience acquise, je conseille de toujours maintenir des commits atomiques et bien documentés, et d'établir des conventions de nommage claires pour les branches. Cette compétence est devenue un élément essentiel de mon profil technique, me permettant de contribuer efficacement à des projets collaboratifs.

## Projet Personnel-Professionnel

À moyen terme, je souhaite renforcer cette compétence en approfondissant les aspects d'automatisation et d'intégration continue avec Git. Je vise également à améliorer mes compétences en gestion de workflows Git pour des projets distribués à grande échelle. Ces compétences seront cruciales pour ma progression vers des rôles plus seniors dans le développement logiciel.`,
    category: "Compétences techniques",
    image: "https://dyma.fr/blog/content/images/2024/08/git1200x628-3.webp"
  },
  {
    id: "4",
    title: "Analyser pour résoudre les problèmes",
    content: `## Ma Définition Personnelle

Être analyste, c'est adopter une posture active et critique face à l'information. Cette compétence va au-delà de la simple analyse de données ou de plans techniques. Elle implique une vigilance constante, une capacité à identifier rapidement les incohérences et à poser les bonnes questions. La rigueur, la curiosité et l'aptitude à synthétiser sont des qualités essentielles pour exercer cette compétence efficacement.

## Contexte Professionnel et Actualité

Dans le domaine du développement logiciel, cette compétence est fondamentale. Elle me permet d'anticiper les évolutions des projets et d'identifier rapidement les points d'attention. Par exemple, face à une interface utilisateur incomplète, je dois être capable de remonter les incohérences plutôt que d'implémenter aveuglément les spécifications.

L'émergence de l'IA dans notre domaine rend cette compétence plus cruciale que jamais. En effet, face aux limitations des outils d'IA qui peuvent produire des implémentations incorrectes ou manquer de contexte, mon rôle d'analyste devient essentiel pour assurer la qualité du code.

## Mise en Œuvre : Mes Éléments de Preuve

Un exemple concret de l'application de cette compétence se trouve dans mon projet de reprise de données pour l'ARPP. J'ai dû analyser deux structures de bases de données distinctes, comprenant des centaines de tables et plusieurs millions de données. La différence de langage métier entre les deux bases a nécessité une analyse approfondie pour établir les correspondances correctes. Ma valeur ajoutée a été d'identifier les incohérences dans les structures de données, de proposer des solutions d'optimisation pour réduire les coûts et le temps de traitement, et d'établir une méthodologie claire pour la reprise des données.

## Mon Bilan Critique

Je considère avoir un niveau avancé dans cette compétence, particulièrement dans l'analyse technique et la résolution de problèmes complexes. Cependant, je continue à progresser, notamment dans l'analyse des impacts métiers lors de l'ajout d'une évolution sur les projets d'entreprise que je travails actuellement. La principale difficulté réside dans l'équilibre entre analyse approfondie et action. Il est crucial de ne pas tomber dans le piège de l'analyse excessive qui peut paralyser la prise de décision. Le contexte (urgence, impact, sensibilité) doit toujours guider le niveau d'analyse approprié.

Avec l'expérience acquise, je conseille de maintenir une approche structurée dans l'analyse et de s'adapter selon le contexte. Cette compétence est devenue un élément essentiel de mon efficacité professionnelle, me permettant d'apporter de la valeur dans des situations complexes et de réagir rapidement aux changements d'attentes des spécifications.

## Projet Personnel-Professionnel

À moyen terme, je souhaite renforcer cette compétence en développant mes capacités d'analyse des technologies à utiliser lors de la création d'un projet ou encore de comment bien structurer un projet lors de sa création si je veux par la suite évoluer vers un rôle de leader technique.`,
    category: "Compétences transverses",
    image: "https://online.edhec.edu/wp-content/uploads/2022/04/pexels-tima-miroshnichenko-7567561-1-scaled.jpg"
  },
  {
    id: "5",
    title: "S'adapter en continu : mon quotidien entre ESIEA et 42",
    content: `## Ma Définition Personnelle

L'adaptabilité, c'est la capacité à évoluer et à s'ajuster face aux changements constants de l'environnement professionnel. Cette compétence va au-delà de la simple flexibilité, elle implique une réelle capacité à comprendre rapidement de nouveaux contextes, à modifier son approche selon les situations et à maintenir son efficacité dans des environnements changeants. La curiosité, l'ouverture d'esprit et la résilience sont des qualités essentielles pour exercer cette compétence efficacement.

## Contexte Professionnel et Actualité

Cette compétence me permet de m'adapter rapidement aux nouvelles technologies, aux changements de priorités et aux différentes méthodologies de travail. Par exemple, face à un changement de stack technique en cours de projet, je dois être capable de m'adapter rapidement tout en maintenant la qualité du code.

L'évolution rapide des technologies et l'émergence constante de nouveaux outils rendent cette compétence plus cruciale que jamais. En effet, face à la nécessité de rester à jour et de s'adapter aux nouvelles pratiques de développement, mon adaptabilité devient un atout majeur pour maintenir ma pertinence professionnelle.

## Mise en Œuvre : Mes Éléments de Preuve

Un exemple concret de l'application de cette compétence se trouve dans mon expérience à l'école 42. J'ai dû m'adapter à un environnement d'apprentissage totalement différent de ce que j'avais connu auparavant, avec une pédagogie basée sur la pratique et l'autonomie. La transition vers ce nouveau mode d'apprentissage a nécessité une adaptation rapide de mes méthodes de travail. Ma valeur ajoutée a été de développer rapidement une autonomie constante, de m'adapter aux différents projets et contraintes, et d'établir un rythme de travail efficace dans ce contexte où je devais travailler en parallèle avec mon alternance à l'ESIEA.

## Mon Bilan Critique

Je considère avoir un niveau avancé dans cette compétence, particulièrement dans l'adaptation a un nouvel environnement de travail et à de nouvelles méthodologies de développement. Je continue à progresser notamment dans l'adaptation aux différents contextes d'entreprise et aux changements organisationnels. La principale difficulté réside dans l'équilibre entre adaptation rapide et maintien de la qualité du travail. Il est crucial de ne pas sacrifier la rigueur au profit de la rapidité d'adaptation.

Avec l'expérience acquise, je conseille de maintenir une veille technologique constante et de cultiver une approche flexible face aux changements. Cette compétence est devenue un élément essentiel de mon efficacité professionnelle, me permettant de rester pertinent dans un domaine en constante évolution et de m'intégrer rapidement dans de nouveaux projets ou équipes.

## Projet Personnel-Professionnel

À moyen terme, je souhaite renforcer cette compétence en développant ma capacité à m'adapter aux différents rôles et responsabilités que je pourrais avoir si je vise le rôle de leader technique. Je vise à améliorer mon adaptabilité lors de changement de projet qui peuvent avoir plusieurs structures ou manières de coder différentes. Cette compétence sera cruciale pour ma progression vers des rôles plus stratégiques dans le développement logiciel.`,
    category: "Compétences transverses",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9DvYtte3yEMyRDauGcl6hH9oK38ClGoWtAw&s"
  },
  {
    id: "6",
    title: "Le respect et la bienveillance, moteurs de mon travail en équipe",
    content: `## Ma Définition Personnelle

Le respect, c'est la capacité à considérer et à valoriser les autres, leur temps, leur travail et leurs idées. Cette compétence va au-delà de la simple politesse, elle implique une réelle considération pour l'environnement de travail et les personnes qui le composent. La ponctualité, l'écoute active et la considération des contraintes de chacun sont des qualités essentielles pour exercer cette compétence efficacement.

## Contexte Professionnel et Actualité

Dans le domaine du développement logiciel, cette compétence est fondamentale. Elle me permet de maintenir des relations professionnelles saines et de contribuer à un environnement de travail positif. Par exemple, ma ponctualité systématique aux réunions et aux rendez-vous témoigne de mon respect pour le temps des autres. Dans un contexte où les projets sont de plus en plus collaboratifs et où les équipes sont souvent distribuées, le respect mutuel devient un élément clé de la réussite.

L'évolution vers des méthodologies agiles et le travail en équipe rendent cette compétence plus cruciale que jamais. En effet, face à la nécessité de collaborer efficacement avec des profils variés et dans des contextes différents, le respect devient un pilier essentiel de la cohésion d'équipe.

## Mise en Œuvre : Mes Éléments de Preuve

Un exemple concret de l'application de cette compétence se trouve dans mon expérience à l'école 42. Dans un environnement où la collaboration est essentielle, j'ai toujours veillé à respecter les délais convenus pour les projets en binôme, à être ponctuel aux sessions de travail, et à considérer les contraintes de mes partenaires. Ma valeur ajoutée a été de créer un climat de confiance et de respect mutuel qui a facilité la collaboration et amélioré la qualité du travail produit.

## Mon Bilan Critique

Je considère avoir un niveau avancé dans cette compétence, particulièrement dans la ponctualité et le respect des engagements. Cependant, je continue à progresser, notamment dans la gestion des situations de conflit et dans l'adaptation de ma communication selon les différents profils. La principale difficulté réside dans l'équilibre entre respect des autres et affirmation de ses propres besoins ou contraintes.

Avec l'expérience acquise, je conseille de toujours communiquer clairement sur ses contraintes et ses disponibilités, et de respecter systématiquement les engagements pris. Cette compétence est devenue un élément essentiel de mon efficacité professionnelle, me permettant de maintenir des relations de travail constructives et de contribuer à un environnement de travail positif.

## Projet Personnel-Professionnel

À moyen terme, je souhaite renforcer cette compétence en développant ma capacité à gérer des situations de conflit de manière respectueuse et constructive. Je vise à améliorer mon respect des différentes perspectives et à mieux adapter ma communication selon les contextes culturels et professionnels. Cette compétence sera cruciale pour ma progression vers des rôles de leadership, où le respect mutuel est fondamental pour la cohésion d'équipe et la réussite des projets.`,
    category: "Compétences transverses",
    image: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg"
  },
  {
    id: "7",
    title: "ARPP : réussir une reprise de données",
    content: `## Une Expérience Enrichissante

La reprise de données pour le site ARPP a été une expérience particulièrement enrichissante dans mon parcours professionnel. Ce projet de migration, bien que techniquement complexe, m'a permis de développer des compétences essentielles en gestion de bases de données et en communication client. La réduction réussie de 500 tables à 30, tout en préservant l'intégrité des données, témoigne de l'efficacité de notre approche méthodique.

## Contexte et Objectifs

Ce projet s'inscrivait dans un contexte de transfert de marché, où il était impératif de recréer le site depuis zéro pour des raisons contractuelles. La tâche principale consistait à récupérer l'intégralité des données clients de l'ancien site, à les transformer, et à les intégrer dans une nouvelle base de données PostgreSQL. Les enjeux étaient majeurs : assurer la continuité du service tout en modernisant l'architecture technique.

## Réalisations Concrètes

La première étape a été l'analyse approfondie de l'ancienne base de données, qui contenait plus de 500 tables et des dizaines de millions de lignes. J'ai dû identifier les données critiques, comprendre les relations entre les tables, et détecter les incohérences. Une des contraintes majeures était la transition d'une API SOAP vers une API REST, nécessitant des ajustements significatifs dans la gestion des données.

## Déroulement et Interactions

Mon rôle principal était de structurer et préparer les données pour la migration. J'ai travaillé en étroite collaboration avec mon maître de stage, qui se chargeait de la conversion des données vers PostgreSQL, tandis que je développais les scripts SQL nécessaires. Pour optimiser les performances, j'ai proposé l'utilisation de tables temporaires, réduisant significativement les temps d'insertion. J'ai également créé des vues SQL pour simplifier l'accès aux données complexes.

## Résultats et Impact

Le projet a été mené à bien en un mois, un délai court pour une tâche de cette ampleur. La structure de la base de données a été réduite de 500 à 30 tables, tout en maintenant l'intégrité des données. La nouvelle architecture, optimisée pour les besoins futurs, a permis une transition fluide vers le nouveau site en production.

## Enseignements et Évolution

Cette expérience m'a appris l'importance d'une approche méthodique dans la gestion de projets complexes. La communication régulière avec le client, à travers des points hebdomadaires, a été cruciale pour identifier et résoudre rapidement les problèmes. J'ai également développé une expertise précieuse en optimisation de bases de données et en transformation de données.

## Regard Critique

Ce projet a été un véritable défi technique et organisationnel. La rigueur et la méthodologie adoptées ont été déterminantes pour sa réussite. Les compétences acquises en gestion de bases de données et en communication client continuent d'être précieuses dans mes projets actuels. Cette expérience a renforcé ma capacité à gérer des projets complexes sous contraintes de temps, tout en maintenant une qualité de service élevée.`,
    category: "Réalisations",
    image: "https://www.carenews.com/sites/default/files/styles/large_actualites/public/2020-10/Asso-Donnees-CRM-Migration.jpg?itok=Ob8D3Zrd"
  },
  {
    id: "8",
    title: "MiniShell : mon immersion dans la programmation système",
    content: `## Une Expérience Fondamentale

Le projet de mini shell à l'école 42 a été une expérience fondamentale dans ma compréhension des systèmes d'exploitation. Ce projet m'a permis de plonger au cœur même du fonctionnement d'un shell Unix, en implémentant ses fonctionnalités de base. La réussite de ce projet a renforcé ma compréhension des processus, des signaux et de la gestion des ressources système.

## Contexte et Objectifs

Ce projet s'inscrivait dans le cadre de ma formation à l'école 42, visant à comprendre les mécanismes fondamentaux des systèmes d'exploitation. L'objectif était de créer un shell minimaliste mais fonctionnel, capable d'exécuter des commandes, de gérer les processus, et d'implémenter les fonctionnalités de base d'un shell Unix. Les enjeux étaient techniques : comprendre et implémenter les appels système, gérer les processus et les signaux, et assurer une communication efficace entre les différents composants.

## Réalisations Concrètes

J'ai développé un shell capable d'exécuter des commandes simples, de gérer les pipes, les redirections, et les signaux. L'implémentation incluait la gestion des processus parents et enfants, la gestion de la mémoire, et l'interprétation des commandes. J'ai notamment travaillé sur la gestion des signaux comme SIGINT (Ctrl+C) et SIGQUIT, ainsi que sur l'implémentation des builtins comme cd, echo, et exit.

## Déroulement et Interactions

Le développement s'est fait de manière itérative, en commençant par les fonctionnalités de base avant d'ajouter des fonctionnalités plus avancées. J'ai travaillé en binôme, ce qui a nécessité une coordination efficace et un partage clair des responsabilités. Les échanges avec les autres étudiants et les retours des évaluations ont été précieux pour améliorer le code et la compréhension des concepts.

## Résultats et Impact

Le shell final était capable d'exécuter des commandes basiques, de gérer les pipes et les redirections, et de traiter correctement les signaux. La réussite du projet a validé ma compréhension des mécanismes fondamentaux des systèmes d'exploitation et m'a donné une base solide pour comprendre le fonctionnement des shells modernes.

## Enseignements et Évolution

Ce projet m'a appris l'importance de la gestion de la mémoire et des ressources système. La compréhension des processus et des signaux a été particulièrement enrichissante. J'ai également développé une meilleure compréhension de l'interface entre le système d'exploitation et les applications utilisateur.

## Regard Critique

Cette expérience a été déterminante dans mon parcours. Elle m'a permis de comprendre en profondeur le fonctionnement des systèmes d'exploitation, une connaissance qui reste précieuse dans mon travail quotidien. La rigueur nécessaire pour gérer les processus et la mémoire a influencé ma façon d'aborder le développement logiciel. Cette compétence est particulièrement utile dans le développement de systèmes critiques ou de logiciels nécessitant une gestion fine des ressources.`,
    category: "Réalisations",
    image: "https://miro.medium.com/v2/da:true/resize:fit:1200/0*NsEzq9V2YGD6ocBH"
  },
  {
    id: "9",
    title: "AFIT : un défi entre compléxité et mathématique",
    content: `## Une Expérience Déterminante

L'AFIT (Algorithmique et Fondements de l'Informatique Théorique) d'EPITA a été une expérience déterminante dans mon parcours. Ma performance, me plaçant dans le top 1% des notes, témoigne non seulement de ma maîtrise technique mais aussi de ma capacité à exceller dans un environnement académique exigeant. Cette réalisation a renforcé ma confiance en mes capacités d'analyse et de résolution de problèmes complexes.

## Contexte et Objectifs

L'AFIT est un module d'algorithmique avancée qui se concentre sur les fondements théoriques de l'informatique. Ce projet académique s'inscrivait dans le cadre de ma formation à EPITA, visant à développer une compréhension approfondie des algorithmes et de leur complexité. Les objectifs étaient clairs : maîtriser les concepts fondamentaux de l'algorithmique, développer des compétences en analyse de complexité, et résoudre des problèmes algorithmiques complexes. Le contexte était exigeant, avec une forte compétition entre étudiants et des contraintes de temps importantes.

## Réalisations Concrètes

Durant ce module, j'ai travaillé sur des problèmes algorithmiques variés et complexes. J'ai notamment implémenté des algorithmes mathématiques fondamentaux comme le crible d'Érathostène pour la génération de nombres premiers. La partie la plus enrichissante a été la réimplémentation de ces algorithmes en binaire, ce qui m'a permis d'approfondir ma compréhension de la scalabilité et de l'optimisation des performances. J'ai également développé des systèmes de cryptographie, notamment l'encryptage César et l'encryptage RSA, en travaillant sur les concepts de modulo et d'inverses modulaires.

## Résultats et Impact

Les résultats ont dépassé mes attentes. Mon classement dans le top 1% des notes a validé mes compétences et a démontré mon excellence dans ce domaine. Cette performance m'a permis d'approfondir significativement mes connaissances en algorithmique, particulièrement dans le domaine de la scalabilité et de l'optimisation des performances.

## Enseignements et Évolution

Cette expérience m'a appris l'importance de la persévérance dans l'apprentissage et de la gestion du temps sous pression. Les compétences acquises lors de l'AFIT continuent d'être pertinentes dans mon travail actuel. La rigueur dans l'analyse des problèmes et l'efficacité dans la résolution de problèmes complexes sont devenues des atouts majeurs dans mes projets actuels.

## Regard Critique

Les enseignements tirés de cette expérience continuent d'influencer positivement mon approche du développement logiciel et de la résolution de problèmes. La méthodologie de travail que j'ai développée pendant l'AFIT reste un fondement solide de ma pratique professionnelle actuelle.`,
    category: "Réalisations",
    image: "https://sciences.sorbonne-universite.fr/sites/default/files/styles/large/public/media/2019-12/Illustration_mathematiques.jpg?itok=81hbCpnM"
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Ouidou",
    role: "Stage et Alternance",
    duration: "2023 - 2025",
    description: [
      "Au sein de l'équipe de développement du site de l'éco-organisme Valobat, j'ai pris part à des missions variées, allant de la conception de la fonctionnalité multi-rep à la création d'une section dédiée aux factures. J'ai notamment assuré l'intégration des API SAGE et Valobat, la mise en place d'un batch automatisé pour l'export Salesforce, ainsi que la création d'une API externe de consultation. J'ai également repris les données issues du site ARPP et contribué à la mise à niveau de la pipeline de déploiement pour l'environnement de staging de Valobat."
    ],
    technologies: []
  },
];

export const education: Education[] = [
  {
    id: "1",
    institution: "42",
    degree: "42",
    duration: "2022 - 2026",
    description: "En assimilant les bonnes pratiques de programmation à travers une norme de code rigoureuse à 42, j'ai renforcé ma capacité à concevoir des solutions informatiques plus robustes et fiables."
  },
  {
    id: "2",
    institution: "INTECH / ESIEA",
    degree: "INTECH / ESIEA",
    duration: "2021 - 2025",
    description: "Au cours de ma formation à l'INTECH, j'ai eu l'opportunité de participer à des projets informatiques diverses. J'ai pu développer des sites web (événementiel, vente, etc.) mais également concevoir et animer une formation ou encore organiser un événement au sein de l'école."
  },
  {
    id: "3",
    institution: "EPITA",
    degree: "EPITA",
    duration: "2020 - 2021",
    description: "Au sein de l'EPITA, mon parcours académique s'est développé autour d'une classe préparatoire intégrée. En parallèle, j'ai eu l'opportunité de m'impliquer activement dans des projets stimulants, allant de la résolution de problèmes complexes en programmation arithmétique à la conception et au développement d'un jeu vidéo."
  },
  {
    id: "4",
    institution: "Lycée d'Arsonval",
    degree: "Lycée d'Arsonval",
    duration: "2017 - 2020",
    description: "Au lycée d'Arsonval mon parcours s'est orienté vers la spécialité Sciences de l'Ingénieur, me permettant d'acquérir une base solide en conception mécanique, modélisation et électronique. Cette formation m'a offert l'opportunité de participer à plusieurs projets concrets, comme l'analyse de structures via des outils de simulation."
  },
];

export const skills: Skill[] = [
  { name: "React", level: 5, category: 'frontend' },
  { name: "JavaScript", level: 5, category: 'frontend' },
  { name: "TypeScript", level: 4, category: 'frontend' },
  { name: "HTML/CSS", level: 5, category: 'frontend' },
  { name: "Redux", level: 4, category: 'frontend' },
  { name: "TailwindCSS", level: 4, category: 'frontend' },
  { name: "Node.js", level: 4, category: 'backend' },
  { name: "Express", level: 4, category: 'backend' },
  { name: "MongoDB", level: 3, category: 'backend' },
  { name: "PostgreSQL", level: 3, category: 'backend' },
  { name: "AWS", level: 3, category: 'backend' },
  { name: "Docker", level: 3, category: 'backend' },
  { name: "Git", level: 4, category: 'other' },
  { name: "Figma", level: 3, category: 'design' },
  { name: "UI/UX Design", level: 3, category: 'design' }
];

export const services: Service[] = [
  {
    id: "1",
    title: "Développement Web",
    description: "Sites web et applications web personnalisés construits avec des technologies modernes et les meilleures pratiques.",
    icon: "code"
  },
  {
    id: "2",
    title: "Développement Frontend",
    description: "Interfaces utilisateur réactives et interactives utilisant React et les frameworks JavaScript modernes.",
    icon: "layout"
  },
  {
    id: "3",
    title: "Développement Backend",
    description: "Solutions côté serveur robustes, APIs et architecture de base de données pour des applications évolutives.",
    icon: "server"
  },
  {
    id: "4",
    title: "UI/UX Design",
    description: "Design centré utilisateur combinant esthétique et fonctionnalité pour créer des expériences numériques intuitives.",
    icon: "paintbrush"
  }
];