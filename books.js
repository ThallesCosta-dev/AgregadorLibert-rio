const libertarianBooks = [
    {
        title: 'A Lei',
        author: 'Frédéric Bastiat',
        description: 'Ninguém como o economista e jornalista Frédéric Bastiat (1801-1850) transmitiu com brilho, simplicidade e extraordinário senso prático a importância moral e material da liberdade. Seus textos sempre curtos, mas repletos de um bom humor irônico, convidavam os adversários ao debate, ridicularizando praticamente todos os chavões intervencionistas. A lógica e o poder de síntese do pensador francês eram impressionantes. Viveu somente 49 anos, mas sua genialidade é eterna. Seus escritos abarcam sete volumes, sendo que A Lei, sem dúvida, é sua magnum opus.',
        pdfUrl: 'https://rothbardbrasil.com/wp-content/uploads/2022/04/A-Lei-miolo-capa-brochura.pdf',
        tags: ['lei', 'liberdade'],
        coverUrl: 'https://rothbardbrasil.com/wp-content/uploads/2015/04/a-lei-bastiat.jpg'
    },
    {
        title: 'Capitalismo e Liberdade',
        author: 'Milton Friedman',
        description: 'Obra clássica sobre o papel do livre mercado na sociedade.',
        pdfUrl: 'https://pdfcoffee.com/qdownload/capitalismo-e-liberdade-friedman-pdf-free.html',
        tags: ['capitalismo', 'economia'],
        coverUrl: 'https://m.media-amazon.com/images/I/6144ZMnK9lL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        title: 'O Caminho da Servidão',
        author: 'Friedrich Hayek',
        description: 'Crítica ao socialismo e defesa da liberdade econômica.',
        pdfUrl: 'https://exemplo.com/hayek.pdf',
        tags: ['política', 'socialismo'],
        coverUrl: 'https://m.media-amazon.com/images/I/61sLkoD93QL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        title: 'A Revolta de Atlas',
        author: 'Ayn Rand',
        description: 'Uma obra-prima que explora temas de individualismo e capitalismo através de uma narrativa distópica.',
        pdfUrl: 'https://exemplo.com/revolta-atlas.pdf',
        tags: ['filosofia', 'capitalismo'],
        coverUrl: 'https://exemplo.com/revolta-atlas.jpg'
    },
    {
        title: 'A Ética da Liberdade',
        author: 'Murray Rothbard',
        description: 'Uma análise profunda dos fundamentos éticos do libertarianismo.',
        pdfUrl: 'https://exemplo.com/etica-liberdade.pdf',
        tags: ['ética', 'libertarianismo'],
        coverUrl: 'https://exemplo.com/etica-liberdade.jpg'
    },
    {
        title: 'A Virtude do Egoísmo',
        author: 'Ayn Rand',
        description: 'Uma defesa filosófica do egoísmo racional e sua relação com a liberdade individual e o capitalismo.',
        pdfUrl: 'https://exemplo.com/virtude-egoismo.pdf',
        tags: ['filosofia', 'ética', 'capitalismo'],
        coverUrl: 'https://exemplo.com/virtude-egoismo.jpg'
    },
    {
        title: 'A Mão Invisível',
        author: 'Adam Smith',
        description: 'Obra fundamental sobre como o mercado livre se autorregula através dos interesses individuais.',
        pdfUrl: 'https://exemplo.com/mao-invisivel.pdf',
        tags: ['economia', 'mercado livre'],
        coverUrl: 'https://exemplo.com/mao-invisivel.jpg'
    },
    {
        title: 'Liberdade ou Igualdade',
        author: 'Frédéric Bastiat',
        description: 'Análise sobre o conflito entre liberdade individual e igualdade forçada pelo Estado.',
        pdfUrl: 'https://exemplo.com/liberdade-igualdade.pdf',
        tags: ['política', 'liberdade'],
        coverUrl: 'https://exemplo.com/liberdade-igualdade.jpg'
    },
    {
        title: 'O Futuro da Liberdade',
        author: 'Fareed Zakaria',
        description: 'Uma análise contemporânea dos desafios e perspectivas para a liberdade no mundo moderno.',
        pdfUrl: 'https://exemplo.com/futuro-liberdade.pdf',
        tags: ['política', 'democracia'],
        coverUrl: 'https://exemplo.com/futuro-liberdade.jpg'
    },
    {
        title: 'O Individualismo e a Economia',
        author: 'Herbert Spencer',
        description: 'Exploração da relação entre individualismo e prosperidade econômica.',
        pdfUrl: 'https://exemplo.com/individualismo-economia.pdf',
        tags: ['economia', 'individualismo'],
        coverUrl: 'https://exemplo.com/individualismo-economia.jpg'
    },
    {
        title: 'Teoria e História',
        author: 'Ludwig von Mises',
        description: 'Uma análise metodológica das ciências sociais e sua relação com a liberdade.',
        pdfUrl: 'https://exemplo.com/teoria-historia.pdf',
        tags: ['metodologia', 'economia'],
        coverUrl: 'https://exemplo.com/teoria-historia.jpg'
    },
    {
        title: 'O Princípio da Liberdade',
        author: 'John Stuart Mill',
        description: 'Clássico sobre os limites do poder social sobre o indivíduo.',
        pdfUrl: 'https://exemplo.com/principio-liberdade.pdf',
        tags: ['filosofia', 'liberdade'],
        coverUrl: 'https://exemplo.com/principio-liberdade.jpg'
    },
    {
        title: 'Anarquia, Estado e Utopia',
        author: 'Robert Nozick',
        description: 'Uma obra fundamental que examina os limites morais do Estado e defende uma visão libertária da justiça.',
        pdfUrl: 'https://exemplo.com/anarquia-estado-utopia.pdf',
        tags: ['filosofia política', 'libertarianismo', 'teoria do estado'],
        coverUrl: 'https://exemplo.com/anarquia-estado-utopia.jpg'
    },
    {
        title: 'Liberalismo',
        author: 'Ludwig von Mises',
        description: 'Uma exposição sistemática dos princípios do liberalismo clássico e sua importância para a civilização.',
        pdfUrl: 'https://exemplo.com/liberalismo.pdf',
        tags: ['liberalismo', 'economia', 'filosofia política'],
        coverUrl: 'https://exemplo.com/liberalismo.jpg'
    },
    {
        title: 'A Revolução dos Bichos',
        author: 'George Orwell',
        description: 'Uma alegoria satírica que critica o totalitarismo e demonstra como o poder pode corromper ideais de liberdade.',
        pdfUrl: 'https://exemplo.com/revolucao-bichos.pdf',
        tags: ['literatura', 'política', 'crítica social'],
        coverUrl: 'https://exemplo.com/revolucao-bichos.jpg'
    },
    {
        title: 'Desobediência Civil',
        author: 'Henry David Thoreau',
        description: 'Um manifesto clássico sobre a resistência individual contra a autoridade injusta do Estado.',
        pdfUrl: 'https://exemplo.com/desobediencia-civil.pdf',
        tags: ['filosofia', 'política', 'resistência'],
        coverUrl: 'https://exemplo.com/desobediencia-civil.jpg'
    },
    {
        title: 'Riqueza das Nações',
        author: 'Adam Smith',
        description: 'Obra seminal que estabelece os fundamentos da economia moderna e defende o livre mercado.',
        pdfUrl: 'https://exemplo.com/riqueza-nacoes.pdf',
        tags: ['economia', 'livre mercado', 'capitalismo'],
        coverUrl: 'https://exemplo.com/riqueza-nacoes.jpg'
    },
    {
        title: 'O Socialismo',
        author: 'Ludwig von Mises',
        description: 'Uma análise crítica abrangente do socialismo e suas falhas econômicas fundamentais.',
        pdfUrl: 'https://exemplo.com/socialismo.pdf',
        tags: ['economia', 'crítica ao socialismo', 'escola austríaca'],
        coverUrl: 'https://exemplo.com/socialismo.jpg'
    },
    {
        title: 'Uma Teoria da Justiça',
        author: 'John Rawls',
        description: 'Uma obra fundamental que propõe uma teoria da justiça baseada em princípios de equidade e liberdade individual.',
        pdfUrl: 'https://exemplo.com/teoria-justica.pdf',
        tags: ['filosofia política', 'justiça', 'teoria liberal'],
        coverUrl: 'https://exemplo.com/teoria-justica.jpg'
    },
    {
        title: 'Economia e Liberdade',
        author: 'Milton Friedman',
        description: 'Uma análise profunda da relação entre liberdade econômica e prosperidade social.',
        pdfUrl: 'https://exemplo.com/economia-liberdade.pdf',
        tags: ['economia', 'livre mercado', 'monetarismo'],
        coverUrl: 'https://exemplo.com/economia-liberdade.jpg'
    },
    {
        title: 'Fundamentos do Liberalismo',
        author: 'Michael Huemer',
        description: 'Uma exposição contemporânea dos princípios filosóficos que fundamentam o pensamento liberal.',
        pdfUrl: 'https://exemplo.com/fundamentos-liberalismo.pdf',
        tags: ['filosofia política', 'liberalismo', 'teoria política'],
        coverUrl: 'https://exemplo.com/fundamentos-liberalismo.jpg'
    },
    {
        title: 'A Economia do Bem Comum',
        author: 'Jean-Baptiste Say',
        description: 'Uma análise clássica sobre como o mercado livre promove o bem-estar social através da cooperação voluntária.',
        pdfUrl: 'https://exemplo.com/economia-bem-comum.pdf',
        tags: ['economia', 'bem comum', 'livre mercado'],
        coverUrl: 'https://exemplo.com/economia-bem-comum.jpg'
    },
    {
        title: 'Em Defesa da Propriedade Privada',
        author: 'Henry George',
        description: 'Uma defesa sistemática do direito à propriedade privada como fundamento da liberdade individual.',
        pdfUrl: 'https://exemplo.com/defesa-propriedade.pdf',
        tags: ['propriedade privada', 'direitos individuais', 'economia'],
        coverUrl: 'https://exemplo.com/defesa-propriedade.jpg'
    },
    {
        title: 'Propriedade, Mercado e Liberdade',
        author: 'Hans Hermann Hoppe',
        description: 'Uma análise da interrelação entre direitos de propriedade, mercados livres e liberdade individual.',
        pdfUrl: 'https://exemplo.com/propriedade-mercado.pdf',
        tags: ['economia austríaca', 'propriedade', 'libertarianismo'],
        coverUrl: 'https://exemplo.com/propriedade-mercado.jpg'
    },
    {
        title: 'A Filosofia da Liberdade',
        author: 'Hans Hermann Hoppe',
        description: 'Uma exploração profunda dos fundamentos filosóficos da liberdade individual e sua aplicação na sociedade moderna.',
        pdfUrl: 'https://exemplo.com/filosofia-liberdade.pdf',
        tags: ['filosofia', 'libertarianismo', 'teoria política'],
        coverUrl: 'https://exemplo.com/filosofia-liberdade.jpg'
    },
    {
        title: 'O Mercado e a Moral',
        author: 'Michael Novak',
        description: 'Uma análise da relação entre mercados livres e valores morais na sociedade contemporânea.',
        pdfUrl: 'https://exemplo.com/mercado-moral.pdf',
        tags: ['economia', 'ética', 'livre mercado'],
        coverUrl: 'https://exemplo.com/mercado-moral.jpg'
    },
    {
        title: 'Do Governo e do Mercado',
        author: 'James M. Buchanan',
        description: 'Uma investigação sobre as interações entre instituições governamentais e forças de mercado.',
        pdfUrl: 'https://exemplo.com/governo-mercado.pdf',
        tags: ['economia política', 'escolha pública', 'instituições'],
        coverUrl: 'https://exemplo.com/governo-mercado.jpg'
    },
    {
        title: 'A Liberdade em Perigo',
        author: 'Friedrich Hayek',
        description: 'Uma análise dos riscos contemporâneos à liberdade individual e as ameaças do poder centralizado.',
        pdfUrl: 'https://exemplo.com/liberdade-perigo.pdf',
        tags: ['política', 'liberdade', 'estado'],
        coverUrl: 'https://exemplo.com/liberdade-perigo.jpg'
    },
    {
        title: 'Desigualdade e Liberdade',
        author: 'Albert Hirschman',
        description: 'Um estudo sobre a relação entre desigualdade econômica e liberdade individual na sociedade capitalista.',
        pdfUrl: 'https://exemplo.com/desigualdade-liberdade.pdf',
        tags: ['economia', 'desigualdade', 'liberdade'],
        coverUrl: 'https://exemplo.com/desigualdade-liberdade.jpg'
    },
    {
        title: 'O Mito do Estado',
        author: 'Friedrich Hayek',
        description: 'Uma crítica à visão mítica do Estado como solucionador de problemas sociais.',
        pdfUrl: 'https://exemplo.com/mito-estado.pdf',
        tags: ['política', 'teoria do estado', 'crítica social'],
        coverUrl: 'https://exemplo.com/mito-estado.jpg'
    },
    {
        title: 'Reflexões sobre o Socialismo',
        author: 'Friedrich Hayek',
        description: 'Uma análise crítica das premissas e consequências do pensamento socialista na sociedade moderna.',
        pdfUrl: 'https://exemplo.com/reflexoes-socialismo.pdf',
        tags: ['política', 'crítica ao socialismo', 'economia'],
        coverUrl: 'https://exemplo.com/reflexoes-socialismo.jpg'
    },
    {
        title: 'O Caminho do Liberalismo',
        author: 'L. William Oliver',
        description: 'Uma exploração histórica e filosófica do desenvolvimento do pensamento liberal.',
        pdfUrl: 'https://exemplo.com/caminho-liberalismo.pdf',
        tags: ['liberalismo', 'história', 'filosofia política'],
        coverUrl: 'https://exemplo.com/caminho-liberalismo.jpg'
    },
    {
        title: 'Democracia e Economia',
        author: 'Adam Smith',
        description: 'Uma análise da relação entre sistemas democráticos e prosperidade econômica.',
        pdfUrl: 'https://exemplo.com/democracia-economia.pdf',
        tags: ['economia', 'democracia', 'instituições'],
        coverUrl: 'https://exemplo.com/democracia-economia.jpg'
    },
    {
        title: 'A Destruição da Liberdade',
        author: 'Walter Block',
        description: 'Um exame dos processos e políticas que ameaçam as liberdades individuais na sociedade contemporânea.',
        pdfUrl: 'https://exemplo.com/destruicao-liberdade.pdf',
        tags: ['libertarianismo', 'política', 'direitos individuais'],
        coverUrl: 'https://exemplo.com/destruicao-liberdade.jpg'
    },
    {
        title: 'Em Defesa da Liberdade de Expressão',
        author: 'Thomas Emerson',
        description: 'Uma defesa abrangente do direito fundamental à liberdade de expressão e suas implicações sociais.',
        pdfUrl: 'https://exemplo.com/liberdade-expressao.pdf',
        tags: ['direitos civis', 'liberdade', 'política'],
        coverUrl: 'https://exemplo.com/liberdade-expressao.jpg'
    },
    {
        title: 'Liberdade, Mercado e Justiça',
        author: 'Friedrich Hayek',
        description: 'Uma análise integrada da relação entre liberdade econômica, mercados e justiça social.',
        pdfUrl: 'https://exemplo.com/liberdade-mercado-justica.pdf',
        tags: ['economia', 'justiça social', 'livre mercado'],
        coverUrl: 'https://exemplo.com/liberdade-mercado-justica.jpg'
    },
    {
        title: 'Uma Teoria da Liberdade Econômica',
        author: 'Friedrich Hayek',
        description: 'Uma análise sistemática dos princípios fundamentais que regem a liberdade econômica e seus impactos sociais.',
        pdfUrl: 'https://exemplo.com/teoria-liberdade-economica.pdf',
        tags: ['economia', 'liberdade', 'teoria econômica'],
        coverUrl: 'https://exemplo.com/teoria-liberdade-economica.jpg'
    },
    {
        title: 'A Construção de uma Economia Liberal',
        author: 'Milton Friedman',
        description: 'Um guia abrangente sobre os princípios e práticas necessários para estabelecer uma economia verdadeiramente liberal.',
        pdfUrl: 'https://exemplo.com/economia-liberal.pdf',
        tags: ['economia', 'liberalismo', 'política econômica'],
        coverUrl: 'https://exemplo.com/economia-liberal.jpg'
    },
    {
        title: 'Liberalismo e a Liberdade dos Outros',
        author: 'Carl L. Becker',
        description: 'Uma exploração da relação entre liberdade individual e responsabilidade social na tradição liberal.',
        pdfUrl: 'https://exemplo.com/liberalismo-outros.pdf',
        tags: ['liberalismo', 'filosofia política', 'sociedade'],
        coverUrl: 'https://exemplo.com/liberalismo-outros.jpg'
    },
    {
        title: 'Liberdade e Governo',
        author: 'Murray Rothbard',
        description: 'Uma análise crítica da relação entre poder governamental e liberdade individual.',
        pdfUrl: 'https://exemplo.com/liberdade-governo.pdf',
        tags: ['libertarianismo', 'governo', 'política'],
        coverUrl: 'https://exemplo.com/liberdade-governo.jpg'
    },
    {
        title: 'Revolução pela Liberdade',
        author: 'Murray Rothbard',
        description: 'Um manifesto pela transformação social através dos princípios da liberdade individual.',
        pdfUrl: 'https://exemplo.com/revolucao-liberdade.pdf',
        tags: ['libertarianismo', 'revolução', 'mudança social'],
        coverUrl: 'https://exemplo.com/revolucao-liberdade.jpg'
    },
    {
        title: 'A Ética do Libertário',
        author: 'John Hospers',
        description: 'Uma exploração dos fundamentos éticos do pensamento libertário e suas implicações práticas.',
        pdfUrl: 'https://exemplo.com/etica-libertario.pdf',
        tags: ['ética', 'libertarianismo', 'filosofia'],
        coverUrl: 'https://exemplo.com/etica-libertario.jpg'
    },
    {
        title: 'Economia e Sociedade',
        author: 'Max Weber',
        description: 'Uma análise abrangente das relações entre estruturas econômicas e organização social, com foco na liberdade individual.',
        pdfUrl: 'https://exemplo.com/economia-sociedade.pdf',
        tags: ['sociologia', 'economia', 'teoria social'],
        coverUrl: 'https://exemplo.com/economia-sociedade.jpg'
    },
    {
        title: 'A Força do Mercado Livre',
        author: 'Milton Friedman',
        description: 'Uma defesa eloquente do poder dos mercados livres em promover prosperidade e liberdade individual.',
        pdfUrl: 'https://exemplo.com/forca-mercado-livre.pdf',
        tags: ['economia', 'livre mercado', 'prosperidade'],
        coverUrl: 'https://exemplo.com/forca-mercado-livre.jpg'
    },
    {
        title: 'A Economia das Liberdades',
        author: 'F.A. Hayek',
        description: 'Uma exploração profunda das conexões entre liberdades econômicas e direitos individuais.',
        pdfUrl: 'https://exemplo.com/economia-liberdades.pdf',
        tags: ['economia', 'liberdade', 'direitos individuais'],
        coverUrl: 'https://exemplo.com/economia-liberdades.jpg'
    },
    {
        title: 'O Estado e a Revolução',
        author: 'Vladimir Lenin',
        description: 'Uma análise crítica da teoria marxista do Estado e sua relação com a revolução proletária.',
        pdfUrl: 'https://exemplo.com/estado-revolucao.pdf',
        tags: ['marxismo', 'teoria do estado', 'revolução'],
        coverUrl: 'https://exemplo.com/estado-revolucao.jpg'
    },
    {
        title: 'O Manifesto Comunista',
        author: 'Karl Marx e Friedrich Engels',
        description: 'Obra fundamental que apresenta as bases do pensamento comunista e sua crítica ao capitalismo.',
        pdfUrl: 'https://exemplo.com/manifesto-comunista.pdf',
        tags: ['comunismo', 'marxismo', 'crítica ao capitalismo'],
        coverUrl: 'https://exemplo.com/manifesto-comunista.jpg'
    },
    {
        title: 'Do Liberalismo ao Socialismo',
        author: 'Ludwig von Mises',
        description: 'Uma análise da transformação histórica e ideológica do liberalismo clássico ao socialismo moderno.',
        pdfUrl: 'https://exemplo.com/liberalismo-socialismo.pdf',
        tags: ['liberalismo', 'socialismo', 'história política'],
        coverUrl: 'https://exemplo.com/liberalismo-socialismo.jpg'
    },
    {
        title: 'O Libertário',
        author: 'Roderick T. Long',
        description: 'Uma exposição sistemática dos princípios e valores do pensamento libertário.',
        pdfUrl: 'https://exemplo.com/libertario.pdf',
        tags: ['libertarianismo', 'filosofia política', 'teoria libertária'],
        coverUrl: 'https://exemplo.com/libertario.jpg'
    },
    {
        title: 'A Sociedade Industrial e Seu Futuro',
        author: 'Herbert Marcuse',
        description: 'Uma análise crítica da sociedade industrial moderna e suas implicações para a liberdade individual.',
        pdfUrl: 'https://exemplo.com/sociedade-industrial.pdf',
        tags: ['teoria crítica', 'sociedade industrial', 'liberdade'],
        coverUrl: 'https://exemplo.com/sociedade-industrial.jpg'
    },
    {
        title: 'O Império do Mal',
        author: 'M. Stanton Evans',
        description: 'Uma crítica ao poder estatal e sua tendência à expansão e opressão das liberdades individuais.',
        pdfUrl: 'https://exemplo.com/imperio-mal.pdf',
        tags: ['estado', 'liberdade', 'crítica política'],
        coverUrl: 'https://exemplo.com/imperio-mal.jpg'
    },
    {
        title: 'O Governo e o Mercado',
        author: 'James M. Buchanan e Gordon Tullock',
        description: 'Uma análise profunda da interação entre instituições governamentais e mecanismos de mercado.',
        pdfUrl: 'https://exemplo.com/governo-mercado-buchanan.pdf',
        tags: ['economia política', 'escolha pública', 'instituições'],
        coverUrl: 'https://exemplo.com/governo-mercado-buchanan.jpg'
    },
    {
        title: 'A Grande Farsa da Liberdade',
        author: 'F.A. Hayek',
        description: 'Uma crítica às falsas promessas de liberdade oferecidas por sistemas intervencionistas.',
        pdfUrl: 'https://exemplo.com/grande-farsa.pdf',
        tags: ['liberdade', 'crítica social', 'intervencionismo'],
        coverUrl: 'https://exemplo.com/grande-farsa.jpg'
    },
    {
        title: 'O Estado',
        author: 'Anthony de Jasay',
        description: 'Uma análise sistemática da natureza e função do Estado nas sociedades modernas.',
        pdfUrl: 'https://exemplo.com/estado-jasay.pdf',
        tags: ['teoria do estado', 'política', 'instituições'],
        coverUrl: 'https://exemplo.com/estado-jasay.jpg'
    },
    {
        title: 'O Pacto Social',
        author: 'Jean-Jacques Rousseau',
        description: 'Uma obra clássica sobre a origem e legitimidade do poder político e suas implicações para a liberdade.',
        pdfUrl: 'https://exemplo.com/pacto-social.pdf',
        tags: ['filosofia política', 'teoria do estado', 'contrato social'],
        coverUrl: 'https://exemplo.com/pacto-social.jpg'
    },
    {
        title: 'Governo, Mercado e Democracia',
        author: 'José Carlos Rodrigues',
        description: 'Uma análise das relações entre sistemas democráticos, mercados livres e governança.',
        pdfUrl: 'https://exemplo.com/governo-mercado-democracia.pdf',
        tags: ['democracia', 'economia política', 'instituições'],
        coverUrl: 'https://exemplo.com/governo-mercado-democracia.jpg'
    },
    {
        title: 'Vingança dos Oprimidos',
        author: 'Walter Lippmann',
        description: 'Uma análise crítica das consequências não intencionais das políticas intervencionistas.',
        pdfUrl: 'https://exemplo.com/vinganca-oprimidos.pdf',
        tags: ['política', 'crítica social', 'intervencionismo'],
        coverUrl: 'https://exemplo.com/vinganca-oprimidos.jpg'
    },
    {
        title: 'Estado e Mercado',
        author: 'Murray Rothbard',
        description: 'Uma análise profunda da dinâmica entre poder estatal e forças de mercado na sociedade moderna.',
        pdfUrl: 'https://exemplo.com/estado-mercado.pdf',
        tags: ['economia', 'estado', 'livre mercado'],
        coverUrl: 'https://exemplo.com/estado-mercado.jpg'
    },
    {
        title: 'A Filosofia do Direito',
        author: 'Georg Wilhelm Friedrich Hegel',
        description: 'Uma exploração filosófica dos fundamentos do direito e sua relação com a liberdade individual.',
        pdfUrl: 'https://exemplo.com/filosofia-direito.pdf',
        tags: ['filosofia', 'direito', 'liberdade'],
        coverUrl: 'https://exemplo.com/filosofia-direito.jpg'
    },
    {
        title: 'O Sistema Monetário Internacional',
        author: 'Milton Friedman',
        description: 'Uma análise crítica do sistema monetário global e suas implicações para a liberdade econômica.',
        pdfUrl: 'https://exemplo.com/sistema-monetario.pdf',
        tags: ['economia', 'sistema monetário', 'liberdade econômica'],
        coverUrl: 'https://exemplo.com/sistema-monetario.jpg'
    },
    {
        title: 'A Liberdade e seus Perigos',
        author: 'Friedrich Hayek',
        description: 'Uma exploração dos desafios e ameaças à liberdade individual na sociedade contemporânea.',
        pdfUrl: 'https://exemplo.com/liberdade-perigos.pdf',
        tags: ['liberdade', 'política', 'sociedade'],
        coverUrl: 'https://exemplo.com/liberdade-perigos.jpg'
    },
    {
        title: 'Liberdade e Igualdade',
        author: 'Isaias D. Costa',
        description: 'Uma análise da tensão entre os ideais de liberdade individual e igualdade social.',
        pdfUrl: 'https://exemplo.com/liberdade-igualdade-costa.pdf',
        tags: ['liberdade', 'igualdade', 'teoria política'],
        coverUrl: 'https://exemplo.com/liberdade-igualdade-costa.jpg'
    },
    {
        title: 'O Futuro da Liberdade',
        author: 'Nicholas Barr',
        description: 'Uma perspectiva contemporânea sobre os desafios e oportunidades para a liberdade no século XXI.',
        pdfUrl: 'https://exemplo.com/futuro-liberdade-barr.pdf',
        tags: ['liberdade', 'futuro', 'sociedade contemporânea'],
        coverUrl: 'https://exemplo.com/futuro-liberdade-barr.jpg'
    },
    {
        title: 'Libertarianismo: A Filosofia Política do Futuro',
        author: 'David D. Friedman',
        description: 'Uma visão abrangente do pensamento libertário e suas propostas para a organização social futura.',
        pdfUrl: 'https://exemplo.com/libertarianismo-futuro.pdf',
        tags: ['libertarianismo', 'filosofia política', 'teoria política'],
        coverUrl: 'https://exemplo.com/libertarianismo-futuro.jpg'
    },
    {
        title: 'O Mercado e a Moralidade',
        author: 'Bernard Mandeville',
        description: 'Uma análise da relação entre comportamento moral e dinâmica de mercado na sociedade.',
        pdfUrl: 'https://exemplo.com/mercado-moralidade.pdf',
        tags: ['economia', 'ética', 'moralidade'],
        coverUrl: 'https://exemplo.com/mercado-moralidade.jpg'
    },
    {
        title: 'A Crítica da Razão Pura',
        author: 'Immanuel Kant',
        description: 'Uma obra fundamental sobre os limites do conhecimento humano e suas implicações para a liberdade.',
        pdfUrl: 'https://exemplo.com/critica-razao-pura.pdf',
        tags: ['filosofia', 'epistemologia', 'liberdade'],
        coverUrl: 'https://exemplo.com/critica-razao-pura.jpg'
    },
    {
        title: 'O Mito da Riqueza',
        author: 'Ludwig von Mises',
        description: 'Uma desconstrução das falácias econômicas sobre a natureza da riqueza e sua criação.',
        pdfUrl: 'https://exemplo.com/mito-riqueza.pdf',
        tags: ['economia', 'riqueza', 'escola austríaca'],
        coverUrl: 'https://exemplo.com/mito-riqueza.jpg'
    },
    {
        title: 'Libertários do Mundo Unido',
        author: 'William H. Hutt',
        description: 'Um chamado à união global dos defensores da liberdade individual e do livre mercado.',
        pdfUrl: 'https://exemplo.com/libertarios-unidos.pdf',
        tags: ['libertarianismo', 'movimento libertário', 'cooperação'],
        coverUrl: 'https://exemplo.com/libertarios-unidos.jpg'
    },
    {
        title: 'A Liberdade Econômica',
        author: 'Friedrich Hayek',
        description: 'Uma análise abrangente dos fundamentos e benefícios da liberdade econômica.',
        pdfUrl: 'https://exemplo.com/liberdade-economica.pdf',
        tags: ['economia', 'liberdade econômica', 'livre mercado'],
        coverUrl: 'https://exemplo.com/liberdade-economica.jpg'
    },
    {
        title: 'Ética, Economia e Liberdade',
        author: 'L. Mises',
        description: 'Uma análise integrada das relações entre ética, economia e liberdade individual.',
        pdfUrl: 'https://exemplo.com/etica-economia-liberdade.pdf',
        tags: ['ética', 'economia', 'liberdade'],
        coverUrl: 'https://exemplo.com/etica-economia-liberdade.jpg'
    },
    {
        title: 'Principais Ideias de Um Governo sem Estado',
        author: 'Pierre Joseph Proudhon',
        description: 'Uma exploração das possibilidades de organização social sem a presença do Estado.',
        pdfUrl: 'https://exemplo.com/governo-sem-estado.pdf',
        tags: ['anarquismo', 'teoria política', 'organização social'],
        coverUrl: 'https://exemplo.com/governo-sem-estado.jpg'
    },
    {
        title: 'A Prática da Liberdade',
        author: 'Murray Rothbard',
        description: 'Um guia prático para a aplicação dos princípios libertários na vida cotidiana.',
        pdfUrl: 'https://exemplo.com/pratica-liberdade.pdf',
        tags: ['libertarianismo', 'prática', 'vida cotidiana'],
        coverUrl: 'https://exemplo.com/pratica-liberdade.jpg'
    },
    {
        title: 'Liberdade e Propriedade',
        author: 'James Buchanan',
        description: 'Uma análise da relação fundamental entre direitos de propriedade e liberdade individual.',
        pdfUrl: 'https://exemplo.com/liberdade-propriedade.pdf',
        tags: ['propriedade', 'liberdade', 'direitos individuais'],
        coverUrl: 'https://exemplo.com/liberdade-propriedade.jpg'
    },
    {
        title: 'A Origem das Espécies',
        author: 'Charles Darwin',
        description: 'Uma análise do impacto das ideias evolutivas na compreensão da competição e seleção natural no contexto libertário.',
        pdfUrl: 'https://exemplo.com/origem-especies.pdf',
        tags: ['evolução', 'competição', 'seleção natural'],
        coverUrl: 'https://exemplo.com/origem-especies.jpg'
    },
    {
        title: 'A Teoria do Valor Trabalho',
        author: 'David Ricardo',
        description: 'Uma análise crítica da teoria do valor trabalho e suas implicações para a economia de mercado.',
        pdfUrl: 'https://exemplo.com/teoria-valor-trabalho.pdf',
        tags: ['economia', 'teoria do valor', 'trabalho'],
        coverUrl: 'https://exemplo.com/teoria-valor-trabalho.jpg'
    },
    {
        title: 'Como a Liberdade Pode Levar ao Progresso',
        author: 'Milton Friedman',
        description: 'Uma análise de como a liberdade econômica e individual impulsiona o desenvolvimento social.',
        pdfUrl: 'https://exemplo.com/liberdade-progresso.pdf',
        tags: ['economia', 'progresso', 'liberdade'],
        coverUrl: 'https://exemplo.com/liberdade-progresso.jpg'
    },
    {
        title: 'Filosofia da Liberdade',
        author: 'Max Stirner',
        description: 'Uma exploração filosófica profunda dos fundamentos da liberdade individual.',
        pdfUrl: 'https://exemplo.com/filosofia-liberdade-stirner.pdf',
        tags: ['filosofia', 'liberdade', 'individualismo'],
        coverUrl: 'https://exemplo.com/filosofia-liberdade-stirner.jpg'
    },
    {
        title: 'Revolução da Liberdade',
        author: 'Walter Block',
        description: 'Uma análise das transformações sociais necessárias para alcançar uma sociedade verdadeiramente livre.',
        pdfUrl: 'https://exemplo.com/revolucao-liberdade-block.pdf',
        tags: ['libertarianismo', 'revolução', 'mudança social'],
        coverUrl: 'https://exemplo.com/revolucao-liberdade-block.jpg'
    },
    {
        title: 'Filosofia Política de Locke',
        author: 'John Locke',
        description: 'Uma exposição dos princípios fundamentais do pensamento político liberal clássico.',
        pdfUrl: 'https://exemplo.com/filosofia-locke.pdf',
        tags: ['filosofia política', 'liberalismo', 'teoria política'],
        coverUrl: 'https://exemplo.com/filosofia-locke.jpg'
    },
    {
        title: 'O Direito à Liberdade',
        author: 'John Stuart Mill',
        description: 'Uma defesa filosófica do direito fundamental à liberdade individual.',
        pdfUrl: 'https://exemplo.com/direito-liberdade.pdf',
        tags: ['filosofia', 'direitos', 'liberdade'],
        coverUrl: 'https://exemplo.com/direito-liberdade.jpg'
    },
    {
        title: 'A Anarquia ou o Estado?',
        author: 'Robert Nozick',
        description: 'Uma análise comparativa entre sistemas anárquicos e estatais de organização social.',
        pdfUrl: 'https://exemplo.com/anarquia-estado-nozick.pdf',
        tags: ['teoria política', 'anarquismo', 'estado'],
        coverUrl: 'https://exemplo.com/anarquia-estado-nozick.jpg'
    },
    {
        title: 'Em Defesa da Liberdade',
        author: 'Friedrich Hayek',
        description: 'Uma defesa abrangente dos princípios da liberdade individual e sua importância para a sociedade.',
        pdfUrl: 'https://exemplo.com/defesa-liberdade.pdf',
        tags: ['liberdade', 'filosofia política', 'sociedade'],
        coverUrl: 'https://exemplo.com/defesa-liberdade.jpg'
    },
    {
        title: 'O Desafio Liberal',
        author: 'J.R. Lucas',
        description: 'Uma análise dos desafios contemporâneos enfrentados pelo pensamento liberal.',
        pdfUrl: 'https://exemplo.com/desafio-liberal.pdf',
        tags: ['liberalismo', 'política contemporânea', 'teoria política'],
        coverUrl: 'https://exemplo.com/desafio-liberal.jpg'
    },
    {
        title: 'O Dinheiro e o Governo',
        author: 'Andrew F. Haughwout',
        description: 'Uma análise da relação entre política monetária e poder governamental.',
        pdfUrl: 'https://exemplo.com/dinheiro-governo.pdf',
        tags: ['economia', 'política monetária', 'governo'],
        coverUrl: 'https://exemplo.com/dinheiro-governo.jpg'
    },
    {
        title: 'Livre Mercado e o Governo',
        author: 'Ludwig von Mises',
        description: 'Uma exploração da dinâmica entre mercados livres e intervenção governamental.',
        pdfUrl: 'https://exemplo.com/livre-mercado-governo.pdf',
        tags: ['economia', 'livre mercado', 'intervenção estatal'],
        coverUrl: 'https://exemplo.com/livre-mercado-governo.jpg'
    },
    {
        title: 'Poder e Liberdade',
        author: 'Adam Smith',
        description: 'Uma análise da relação entre poder político e liberdade econômica.',
        pdfUrl: 'https://exemplo.com/poder-liberdade.pdf',
        tags: ['economia política', 'liberdade', 'poder'],
        coverUrl: 'https://exemplo.com/poder-liberdade.jpg'
    },
    {
        title: 'O Império do Mal',
        author: 'Ronald Reagan',
        description: 'Uma crítica ao poder estatal excessivo e seus efeitos sobre a liberdade individual.',
        pdfUrl: 'https://exemplo.com/imperio-mal-reagan.pdf',
        tags: ['política', 'estado', 'liberdade'],
        coverUrl: 'https://exemplo.com/imperio-mal-reagan.jpg'
    },
    {
        title: 'O Capital e os Trabalhadores',
        author: 'Karl Marx',
        description: 'Uma análise crítica das relações de trabalho e capital no sistema capitalista.',
        pdfUrl: 'https://exemplo.com/capital-trabalhadores.pdf',
        tags: ['marxismo', 'economia', 'trabalho'],
        coverUrl: 'https://exemplo.com/capital-trabalhadores.jpg'
    },
    {
        title: 'Do Estado ao Mercado',
        author: 'Vernon L. Smith',
        description: 'Uma análise da transição de sistemas estatais para sistemas de mercado.',
        pdfUrl: 'https://exemplo.com/estado-mercado-smith.pdf',
        tags: ['economia', 'estado', 'mercado'],
        coverUrl: 'https://exemplo.com/estado-mercado-smith.jpg'
    },
    {
        title: 'Noções Fundamentais de Economia',
        author: 'James M. Buchanan',
        description: 'Uma introdução aos princípios econômicos fundamentais sob uma perspectiva liberal.',
        pdfUrl: 'https://exemplo.com/nocoes-economia.pdf',
        tags: ['economia', 'princípios básicos', 'teoria econômica'],
        coverUrl: 'https://exemplo.com/nocoes-economia.jpg'
    },
    {
        title: 'A Defesa da Liberdade',
        author: 'John Stuart Mill',
        description: 'Uma defesa clássica dos princípios da liberdade individual e seus limites.',
        pdfUrl: 'https://exemplo.com/defesa-liberdade-mill.pdf',
        tags: ['filosofia política', 'liberdade', 'teoria liberal'],
        coverUrl: 'https://exemplo.com/defesa-liberdade-mill.jpg'
    },
    {
        title: 'O Liberalismo Econômico e os Princípios da Liberdade',
        author: 'Richard Ebeling',
        description: 'Uma análise dos fundamentos econômicos do liberalismo e sua relação com a liberdade.',
        pdfUrl: 'https://exemplo.com/liberalismo-economico-principios.pdf',
        tags: ['liberalismo', 'economia', 'liberdade'],
        coverUrl: 'https://exemplo.com/liberalismo-economico-principios.jpg'
    },
    {
        title: 'O Futuro da Liberdade',
        author: 'Fareed Zakaria',
        description: 'Uma análise das perspectivas futuras para a liberdade em um mundo em transformação.',
        pdfUrl: 'https://exemplo.com/futuro-liberdade-zakaria.pdf',
        tags: ['liberdade', 'política internacional', 'democracia'],
        coverUrl: 'https://exemplo.com/futuro-liberdade-zakaria.jpg'
    },
    {
        title: 'A Revolução Industrial e o Futuro da Sociedade',
        author: 'Henry Hazlitt',
        description: 'Uma análise do impacto da revolução industrial na organização social e econômica.',
        pdfUrl: 'https://exemplo.com/revolucao-industrial-futuro.pdf',
        tags: ['economia', 'história', 'desenvolvimento social'],
        coverUrl: 'https://exemplo.com/revolucao-industrial-futuro.jpg'
    },
    {
        title: 'Teoria da Justiça e Direito Natural',
        author: 'John Finnis',
        description: 'Uma exploração filosófica da relação entre justiça, direito natural e liberdade individual.',
        pdfUrl: 'https://exemplo.com/teoria-justica-direito.pdf',
        tags: ['filosofia do direito', 'justiça', 'direito natural'],
        coverUrl: 'https://exemplo.com/teoria-justica-direito.jpg'
    },
    {
        title: 'O Liberalismo e seus Princípios',
        author: 'Jean-Baptiste Say',
        description: 'Uma exposição sistemática dos princípios fundamentais do pensamento liberal.',
        pdfUrl: 'https://exemplo.com/liberalismo-principios.pdf',
        tags: ['liberalismo', 'teoria política', 'princípios'],
        coverUrl: 'https://exemplo.com/liberalismo-principios.jpg'
    },
    {
        title: 'Impostos e Liberdade',
        author: 'Murray Rothbard',
        description: 'Uma análise crítica do sistema tributário e seu impacto sobre a liberdade individual.',
        pdfUrl: 'https://exemplo.com/impostos-liberdade.pdf',
        tags: ['economia', 'impostos', 'liberdade'],
        coverUrl: 'https://exemplo.com/impostos-liberdade.jpg'
    },
    {
        title: 'A Crítica do Socialismo',
        author: 'Ludwig von Mises',
        description: 'Uma análise detalhada das falhas teóricas e práticas do sistema socialista.',
        pdfUrl: 'https://exemplo.com/critica-socialismo.pdf',
        tags: ['economia', 'socialismo', 'crítica'],
        coverUrl: 'https://exemplo.com/critica-socialismo.jpg'
    }
];

export default libertarianBooks; 