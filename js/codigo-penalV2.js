var codigoPenal = [
    {
        numero: 0.1,
        crime: "Atrapalhar Recrutamento",
        multa: 40000,
        sentenca: 20,
        direito_a_fianca: false,
        valor_fianca: 0,
        categoria: "Ordem Pública",
        definicao: "Quando alguém atrapalhar recrutamentos, fazendo ou não parte do mesmo."
    },
    {
        numero: 0.2,
        crime: "Pisão Militar",
        multa: 0,
        sentenca: 50,
        direito_a_fianca: false,
        valor_fianca: 0,
        categoria: "Ordem Pública",
        definicao: "Insubordinação a Oficial Superior. (Desobediência a Oficial Superior)"
    },
    {
        numero: 0.3,
        crime: "Desacato",
        multa: 10000,
        sentenca: 10,
        direito_a_fianca: false,
        valor_fianca: 0,
        categoria: "Ordem Pública",
        definicao: "Desacato, desobediência ou desrespeito perante um funcionário público na forma de comportamento que se opõe ou desafia a autoridade. O acusado perde o direito a Fiança, demais direitos, como: Réu Primário, Presença de Adv. Constituído, etc, devem ser mantidos."
    },
    {
        numero: 0.4,
        crime: "Prevaricação",
        multa: 15000,
        sentenca: 40,
        direito_a_fianca: false,
        valor_fianca: 0,
        categoria: "Ordem Pública",
        definicao: "Crime praticado por funcionário público contra a administração em geral que consiste em retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal."
    },
    {
        numero: 0.5,
        crime: "QRR Ilegal",
        multa: 10000,
        sentenca: 10,
        direito_a_fianca: false,
        valor_fianca: 40000,
        categoria: "Ordem Pública",
        definicao: "FAZER COMUNICAÇÃO EXTERNA PÓS VOZ DE PRISÃO."
    },
    {
        numero: 0.6,
        crime: "Corrupção Passiva (Funcionário Público)",
        multa: 350000,
        sentenca: 40,
        direito_a_fianca: false,
        valor_fianca: 0,
        categoria: "Ordem Pública",
        definicao: "É a atitude do funcionário público em solicitar ou receber vantagem ou promessa de vantagem em troca de algum tipo de favor ou benefício ao particular. Art. sujeito a Exoneração."
    },
    {
        numero: 1.1,
        crime: "Homicídio Doloso Qualificado",
        multa: 120000,
        sentenca: 60,
        direito_a_fianca: false,
        valor_fianca: 0,
        categoria: "Contra a Vida",
        definicao: "Quando uma pessoa toma qualquer ação premeditada para causar intencionalmente a morte de outra pessoa."
    },
    {
        numero: 1.2,
        crime: "Homicidio Funcionário Público",
        multa: 120000,
        sentenca: 70,
        direito_a_fianca: false,
        valor_fianca: 0,
        categoria: "Contra a Vida",
        definicao: "O acusado permanecerá detido em Delegacia Civil ou Militar, até que o caso em questão seja analisado por um Promotor do Estado e julgado por um Juiz responsável. Após o procedimento, o acusado será encaminhado a Penitenciária do Estado para o cumprimento da pena imposta."
    },
    {
        numero: 1.3,
        crime: "Tentativa de Homicídio",
        multa: 35000,
        sentenca: 30,
        direito_a_fianca: false,
        valor_fianca: 0,
        categoria: "Contra a Vida",
        definicao: "Quando uma pessoa toma alguma ação, ou deliberada e maliciosamente, com a intenção de causar a morte de outra pessoa e não tem sucesso."
    },
    {
        numero: 2.1,
        crime: "Homicídio Doloso",
        multa: 40000,
        sentenca: 50,
        direito_a_fianca: false,
        valor_fianca: 20000,
        categoria: "Violentos",
        definicao: "Causar danos significativos a outra pessoa através do toque intencional ofensivo ou prejudicial a essa pessoa sem o seu consentimento. Nota: A Lesão Corporal só se aplica se o indivíduo estiver incapacitado (derrubado)."
    },
    {
        numero: 2.2,
        crime: "Sequestro",
        multa: 20000,
        sentenca: 50,
        direito_a_fianca: false,
        valor_fianca: 0,
        categoria: "Violentos",
        definicao: "Apreender e levar ilegalmente uma pessoa pela força ou fraude, ou apreender e deter uma pessoa contra a sua vontade com a intenção de levar essa pessoa embora mais tarde. No caso em que vários reféns são tomados de uma só vez, apenas uma cobrança será apresentada."
    },

    {
        "numero": 2.3,
        "crime": "Furto",
        "multa": 35000,
        "sentenca": 30,
        "direito_a_fianca": true,
        "valor_fianca": 40000,
        "categoria": "Contra o Patrimônio",
        "definicao": "Subtrair, para si ou para outrem, coisa alheia móvel, mas por circunstâncias não previstas pelo agente, não se consuma o pretendido.  (LOTEAMENTO EM FLAGANTE)"
    },
    {
        "numero": 2.4,
        "crime": "Receptação de Veículos",
        "multa": 35000,
        "sentenca": 30,
        "direito_a_fianca": true,
        "valor_fianca": 40000,
        "categoria": "Contra o Patrimônio",
        "definicao": "Estar de posse de qualquer veículo roubado"
    },
    {
        "numero": 2.5,
        "crime": "Roubo",
        "multa": 20000,
        "sentenca": 30,
        "direito_a_fianca": true,
        "valor_fianca": 40000,
        "categoria": "Roubos e da Extorsão",
        "definicao": "Subtrair coisa móvel alheia, para si ou para outrem, mediante grave ameaça ou violência a pessoa, ou depois de havê-la, por qualquer meio, reduzido à impossibilidade de resistência (LOTEAMENTO EM FLAGANTE, SUPEITO ARMADO)"
    },
    {
        "numero": 2.6,
        "crime": "Roubo de caixa",
        "multa": 34000,
        "sentenca": 30,
        "direito_a_fianca": false,
        "valor_fianca": 0,
        "categoria": "Roubos e da Extorsão",
        "definicao": "Furtar um caixa eletrônico / Registradora"
    },
    {
        "numero": 2.7,
        "crime": "Extorsão",
        "multa": 35000,
        "sentenca": 40,
        "direito_a_fianca": true,
        "valor_fianca": 40000,
        "categoria": "Roubos e da Extorsão",
        "definicao": "Constranger alguém, mediante violência ou grave ameaça, e com o intuito de obter para si ou para outrem indevida vantagem econômica, a fazer, tolerar que se faça ou deixar de fazer alguma coisa"
    },
    {
        "numero": 2.8,
        "crime": "Posse de peças de armas",
        "multa": 15000,
        "sentenca": 10,
        "direito_a_fianca": true,
        "valor_fianca": 20000,
        "categoria": "Armas e Itens Ilegais",
        "definicao": "Posse de componentes de fabricação de armas"
    },
    {
        "numero": 2.9,
        "crime": "Posse de Cápsula",
        "multa": 20000,
        "sentenca": 10,
        "direito_a_fianca": true,
        "valor_fianca": 10000,
        "categoria": "Armas e Itens Ilegais",
        "definicao": "Posse de componentes de fabricação de munição",
    },
    {
        "numero": 3.0,
        "crime": "Tráfico de armas",
        "multa": 100000,
        "sentenca": 70,
        "direito_a_fianca": true,
        "valor_fianca": 135000,
        "categoria": "Armas e Itens Ilegais",
        "definicao": "3 ou mais armamentos, de igual modelo"
    },
    {
        "numero": 3.1,
        "crime": "Porte de arma Pesada",
        "multa": 40000,
        "sentenca": 45,
        "direito_a_fianca": false,
        "valor_fianca": 0,
        "categoria": "Armas e Itens Ilegais",
        "definicao": "Fuzil ou similar de qualquer tipo"
    },
    {
        "numero": 3.2,
        "crime": "Porte de arma Leve",
        "multa": 20000,
        "sentenca": 30,
        "direito_a_fianca": true,
        "valor_fianca": 25000,
        "categoria": "Armas e Itens Ilegais",
        "definicao": "Porte de FIVE-SEVEN, .50, GLOCK (cada) (Limitado a 2 armas leves) (OBS:Portar -50 de munição sem possuir o porte)"
    },
    {
        "numero": 3.3,
        "crime": "Tráfico de munição (+50)",
        "multa": 20000,
        "sentenca": 20,
        "direito_a_fianca": true,
        "valor_fianca": 35000,
        "categoria": "Armas e Itens Ilegais",
        "definicao": "Se enquadra como tráfico de munições a partir de 50 ou mais munições independente do tipo."
    },
    {
        "numero": 3.4,
        "crime": "Trafico de Remedios (+10)",
        "multa": 34000,
        "sentenca": 30,
        "direito_a_fianca": true,
        "valor_fianca": 35000,
        "categoria": "Narcotráfico",
        "definicao": "Posse de carregamento de drogas no intuito de delivery a outros civis. (Entrega de drogas)"
    },
    {
        "numero": 3.5,
        "crime": "Posse de Componentes (+50)",
        "multa": 40000,
        "sentenca": 20,
        "direito_a_fianca": true,
        "valor_fianca": 35000,
        "categoria": "Narcotráfico",
        "definicao": "Posse de matéria-prima usada para fabricação de narcóticos"
    },
    {
        "numero": 3.6,
        "crime": "Posse de Drogas",
        "multa": 25000,
        "sentenca": 30,
        "direito_a_fianca": true,
        "valor_fianca": 400000,
        "categoria": "Narcotráfico",
        "definicao": "Mais de 5 unidades considera-se posse de Drogas"
    },
    {
        "numero": 3.7,
        "crime": "Tráfico de drogas",
        "multa": 25000,
        "sentenca": 60,
        "direito_a_fianca": true,
        "valor_fianca": 400000,
        "categoria": "Narcotráfico",
        "definicao": "Mais de 30 unidades considera-se tráfico"
    },
    {
        "numero": 3.8,
        "crime": "Dinheiro Sujo",
        "multa": 25000,
        "sentenca": 10,
        "direito_a_fianca": true,
        "valor_fianca": 400000,
        "categoria": "Dinheiro Sujo",
        "definicao": "Até R$10.000,00 apenas apreender o valor e liberar o indivíduo, a partir de R$10.001,00 aplicar a pena segundo o código penal"
    },
    {
        "numero": 3.9,
        "crime": "Dinheiro Sujo com AGRAVO",
        "multa": 95000,
        "sentenca": 60,
        "direito_a_fianca": true,
        "valor_fianca": 600000,
        "categoria": "Dinheiro Sujo",
        "definicao": "Apreensões de dinheiro sujo acima de R$ 499.999,99"
    },
    {
        "numero": 4.0,
        "crime": "Falsidade Ideológica",
        "multa": 40000,
        "sentenca": 30,
        "direito_a_fianca": true,
        "valor_fianca": 100000,
        "categoria": "Aleatórios / outros",
        "definicao": "Se passar por um advogado certificado ou funcionário do governo (incluindo policiais, membros do Departamento de Justiça, etc.)"
    },
    {
        "numero": 4.1,
        "crime": "Formação de quadrilha",
        "multa": 20000,
        "sentenca": 40,
        "direito_a_fianca": false,
        "valor_fianca": 0,
        "categoria": "Aleatórios / outros",
        "definicao": "Consiste na associação de quatro ou mais pessoas que se dedicam a cometer um ou mais delitos. (POR PESSOA)"
    },
    {
        "numero": 4.2,
        "crime": "Uso indevido de 190/02",
        "multa": 20000,
        "sentenca": 20,
        "direito_a_fianca": true,
        "valor_fianca": 90000,
        "categoria": "Infrações e crimes menores",
        "definicao": "Se alguém for um infrator reincidente, ele pode ser enviado para a cadeia, use seu melhor julgamento."
    },
    {
        "numero": 4.3,
        "crime": "Posse de itens ilegais",
        "multa": 40000,
        "sentenca": 20,
        "direito_a_fianca": true,
        "valor_fianca": 35000,
        "categoria": "Infrações e crimes menores",
        "definicao": "ITENS ILEGAIS: LOCKPICK, CAPUZ, ALGEMAS, C4. *Munição menor que 50 unidades, apenas permitida para quem tem o porte de armas, com porte de armas so pode ter munição de glock, se for outro tipo de munição é item ilegal. Exceto para oficiais públicos podem ter outras munições."
    },
    {
        "numero": 4.4,
        "crime": "Suborno",
        "multa": 60000,
        "sentenca": 60,
        "direito_a_fianca": false,
        "valor_fianca": 0,
        "categoria": "Infrações e crimes menores",
        "definicao": "Suborno ato ou efeito de subornar, compra, dinheiro ou valor que se suborna ou se tenta subornar."
    },

    {
        "numero": 4.5,
        "crime": "Vandalismo",
        "multa": 20000,
        "sentenca": 20,
        "direito_a_fianca": true,
        "valor_fianca": 40000,
        "categoria": "Infrações e crimes menores",
        "definicao": "Intencionalmente causou danos a propriedades que eles não possuem."
    },
    {
        "numero": 4.6,
        "crime": "Vandalismo de propriedade do governo",
        "multa": 40000,
        "sentenca": 20,
        "direito_a_fianca": true,
        "valor_fianca": 35000,
        "categoria": "Infrações e crimes menores",
        "definicao": "Intencionalmente causou danos à propriedade do Governo (Delegacias, Hospitais, Repartições Públicas)"
    },
    {
        "numero": 4.7,
        "crime": "Abuso de Autoridade",
        "multa": 35000,
        "sentenca": 20,
        "direito_a_fianca": true,
        "valor_fianca": 10000,
        "categoria": "Infrações e crimes menores",
        "definicao": "Quando o Agente usa das suas atribuições do cargo para constranger, ameaçar, agredir ou qualquer outro ato que atinja um cidadão. (DEVERÁ NESSE CASO SER ANALISADO PELA HIERARQUIA SUPERIOR DA POLÍCIA)"
    },
    {
        "numero": 4.8,
        "crime": "Ocultação Facial",
        "multa": 10000,
        "sentenca": 10,
        "direito_a_fianca": true,
        "valor_fianca": 20000,
        "categoria": "Infrações e crimes menores",
        "definicao": "Usar máscara ou qualquer outra coisa que impeça o Agente de identificar um cidadão."
    },
    {
        "numero": 4.9,
        "crime": "Falsa comunicação de crime",
        "multa": 20000,
        "sentenca": 25,
        "direito_a_fianca": true,
        "valor_fianca": 40000,
        "categoria": "Infrações e crimes menores",
        "definicao": "Intencionalmente fazendo uma declaração falsa para um funcionário da lei em serviço ou 190 mensagem de envio."
    },
    {
        "numero": 5.0,
        "crime": "Perturbação da ordem",
        "multa": 10000,
        "sentenca": 10,
        "direito_a_fianca": true,
        "valor_fianca": 20000,
        "categoria": "Infrações e crimes menores",
        "definicao": "Pessoa está se comportando de maneira disruptiva, mas não apresenta sério perigo público."
    },
    {
        "numero": 5.1,
        "crime": "carcere Privado",
        "multa": 20000,
        "sentenca": 25,
        "direito_a_fianca": true,
        "valor_fianca": 35000,
        "categoria": "Infrações e crimes menores",
        "definicao": "Deixar de prestar assistência, quando possível fazê-lo sem risco pessoal, à criança abandonada ou extraviada, ou à pessoa inválida ou ferida, ao desamparo ou em grave e iminente perigo, ou não pedir, nesses casos, o socorro da autoridade pública."
    },
    {
        "numero": 5.2,
        "crime": "Tráfico de influência",
        "multa": 20000,
        "sentenca": 10,
        "direito_a_fianca": false,
        "valor_fianca": 0,
        "categoria": "Infrações e crimes menores",
        "definicao": "Consiste na prática ilegal de uma pessoa se aproveitar da sua posição privilegiada dentro de uma empresa ou entidade, ou das suas conexões com pessoas em posição de autoridade, para obter favores ou benefícios para si própria ou terceiros, geralmente em troca de favores ou pagamento."
    },
    {
        "numero": 5.3,
        "crime": "Lesão corporal",
        "multa": 20000,
        "sentenca": 40,
        "direito_a_fianca": false,
        "valor_fianca": 40000,
        "categoria": "Infrações e crimes menores",
        "definicao": "Desacato a ordem de parada pela autoridade policial."
    },
    {
        "numero": 5.4,
        "crime": "Obstrução de Justiça",
        "multa": 35000,
        "sentenca": 20,
        "direito_a_fianca": false,
        "valor_fianca": 0,
        "categoria": "Infrações e crimes menores",
        "definicao": "Qualquer ato ou omissão empreendida de maneira planejada por um indivíduo ou mais, com o intuito de causar dificuldades nas investigações de algum caso em apreço, tanto no âmbito policial tanto em fase judicial."
    },
    {
        "numero": 5.5,
        "crime": "Ocultação de Provas",
        "multa": 100000,
        "sentenca": 40,
        "direito_a_fianca": true,
        "valor_fianca": 20000,
        "categoria": "Infrações e crimes menores",
        "definicao": "Tentativa ou Ocultação comprovada de Provas"
    },
    {
        "numero": 5.6,
        "crime": "Omissão de socorro",
        "multa": 20000,
        "sentenca": 30,
        "direito_a_fianca": false,
        "valor_fianca": 0,
        "categoria": "Trânsito",
        "definicao": "Condução descuidada, condução inadequada ou condução sem o devido cuidado e atenção e é frequentemente punível com multas, prisão ou suspensão ou revogação da carteira de motorista."
    },
    {
        "numero": 5.7,
        "crime": "Estelionato",
        "multa": 10000,
        "sentenca": 30,
        "direito_a_fianca": true,
        "valor_fianca": 0,
        "categoria": "Trânsito",
        "definicao": "O estelionato é comumente classificado como um crime contra o patrimônio e é considerado uma forma de fraude. Em muitos sistemas legais, incluindo o sistema jurídico brasileiro, o estelionato é enquadrado como um crime contra a propriedade ou o patrimônio Portanto, a categoria do estelionato seria relacionada ao patrimônio, e poderia ser classificado dentro de uma categoria mais ampla, como crimes contra o patrimônio ou crimes contra a propriedade. Essas categorias podem variar ligeiramente dependendo do sistema legal específico em que o crime está sendo avaliado."
    },
    {
        "numero": 5.8,
        "crime": "Tentativa de Homicídio Funcionario Publico",
        "multa": 40000,
        "sentenca": 30,
        "direito_a_fianca": false,
        "valor_fianca": 0,
        "categoria": "Trânsito",
        "definicao": "Velocidade máxima nas estradas: 200 km Velocidade máxima em frente aos departamentos policiais: 100 km/h"
    },
    {
        "numero": 5.9,
        "crime": "Poluição Sonora",
        "multa": 10000,
        "sentenca": 0,
        "direito_a_fianca": true,
        "valor_fianca": 0,
        "categoria": "Trânsito",
        "definicao": "Buzinas, buzinas de música ou motores de aceleração que causam um incômodo público. Os indivíduos devem ter a oportunidade de deixar de ser multados."
    },
    {
        "numero": 6.0,
        "crime": "Corridas ilegais",
        "multa": 35000,
        "sentenca": 50,
        "direito_a_fianca": true,
        "valor_fianca": 40000,
        "categoria": "Trânsito",
        "definicao": "Participar e/ou organizar corridas ilegais. Condução imprudente sobre vias públicas e zonas rurais. (POR PESSOA). Sendo a Polícia Civil autorizada a investigar corridas ilegais."
    },
    {
        "numero": 6.1,
        "crime": "Uso Excessivo de insulfilm",
        "multa": 10000,
        "sentenca": 0,
        "direito_a_fianca": true,
        "valor_fianca": 0,
        "categoria": "Trânsito",
        "definicao": "Se você não puder ver a pessoa no veículo, a tonalidade está muito escura 30%+."
    },
    {
        "numero": 6.2,
        "crime": "Veiculo Muito Danificado",
        "multa": 25000,
        "sentenca": 0,
        "direito_a_fianca": true,
        "valor_fianca": 0,
        "categoria": "Trânsito",
        "definicao": "Veículo fortemente danificado. (Reboque obrigatório do veículo, o bilhete pode ser emitido a critério do oficial)"
    },
    {
        "numero": 6.3,
        "crime": "Veículo ilegalmente estacionado",
        "multa": 5000,
        "sentenca": 0,
        "direito_a_fianca": true,
        "valor_fianca": 0,
        "categoria": "Trânsito",
        "definicao": "Estacionar em área proibida ou local que não seja uma vaga de estacionamento, em uma pista de incêndio, bloqueando uma pista aliada ou a menos de 5 metros de um hidrante, o veículo é abandonado. Aplicar DV (pátio)"
    },

    {
        "numero": 6.4,
        "crime": "Fraude",
        "multa": 10000,
        "sentenca": 15,
        "direito_a_fianca": true,
        "valor_fianca": 20000,
        "categoria": "Trânsito",
        "definicao": "Estacionar em área proibida ou local que não seja uma vaga de estacionamento, em uma pista de incêndio, bloqueando uma pista aliada ou a menos de 5 metros de um hidrante, o veículo é abandonado. Aplicar DV (pátio)"
    },

    {
        "numero": 6.5,
        "crime": "Direção Perigosa",
        "multa": 20000,
        "sentenca": 10,
        "direito_a_fianca": true,
        "valor_fianca": 0,
        "categoria": "Trânsito",
        "definicao": "Estacionar em área proibida ou local que não seja uma vaga de estacionamento, em uma pista de incêndio, bloqueando uma pista aliada ou a menos de 5 metros de um hidrante, o veículo é abandonado. Aplicar DV (pátio)"
    },

    {
        "numero": 6.6,
        "crime": "Desobediência a Ordem Policial",
        "multa": 2000,
        "sentenca": 15,
        "direito_a_fianca": false,
        "valor_fianca": 0,
        "categoria": "Trânsito",
        "definicao": "Estacionar em área proibida ou local que não seja uma vaga de estacionamento, em uma pista de incêndio, bloqueando uma pista aliada ou a menos de 5 metros de um hidrante, o veículo é abandonado. Aplicar DV (pátio)"
    },

    {
        "numero": 6.7,
        "crime": "assedio",
        "multa": 50000,
        "sentenca": 60,
        "direito_a_fianca": false,
        "valor_fianca": 0,
        "categoria": "Trânsito",
        "definicao": "Estacionar em área proibida ou local que não seja uma vaga de estacionamento, em uma pista de incêndio, bloqueando uma pista aliada ou a menos de 5 metros de um hidrante, o veículo é abandonado. Aplicar DV (pátio)"
    },

    {
        "numero": 6.8,
        "crime": "ameaça",
        "multa": 40000,
        "sentenca": 50,
        "direito_a_fianca": false,
        "valor_fianca": 0,
        "categoria": "Trânsito",
        "definicao": "Estacionar em área proibida ou local que não seja uma vaga de estacionamento, em uma pista de incêndio, bloqueando uma pista aliada ou a menos de 5 metros de um hidrante, o veículo é abandonado. Aplicar DV (pátio)"
    },

    {
        "numero": 6.9,
        "crime": "Fardado sem ponto batido (Funcionário Público)",
        "multa": 50000,
        "sentenca": 0,
        "direito_a_fianca": false,
        "valor_fianca": 0,
        "categoria": "Trânsito",
        "definicao": "Estacionar em área proibida ou local que não seja uma vaga de estacionamento, em uma pista de incêndio, bloqueando uma pista aliada ou a menos de 5 metros de um hidrante, o veículo é abandonado. Aplicar DV (pátio)"
    },

    {
        "numero": 7.0,
        "crime": "Ponto batido sem farda (Funcionário Público)",
        "multa": 50000,
        "sentenca": 0,
        "direito_a_fianca": false,
        "valor_fianca": 0,
        "categoria": "Trânsito",
        "definicao": "Estacionar em área proibida ou local que não seja uma vaga de estacionamento, em uma pista de incêndio, bloqueando uma pista aliada ou a menos de 5 metros de um hidrante, o veículo é abandonado. Aplicar DV (pátio)"
    },

    {
        "numero": 7.1,
        "crime": "Quebra de Sigilo",
        "multa": 90000,
        "sentenca": 30,
        "direito_a_fianca": false,
        "valor_fianca": 0,
        "categoria": "Trânsito",
        "definicao": "Estacionar em área proibida ou local que não seja uma vaga de estacionamento, em uma pista de incêndio, bloqueando uma pista aliada ou a menos de 5 metros de um hidrante, o veículo é abandonado. Aplicar DV (pátio)"
    },

    {
        "numero": 7.2,
        "crime": "Homicídio Culposo",
        "multa": 40000,
        "sentenca": 30,
        "direito_a_fianca": true,
           "valor_fianca": 90000,
        "categoria": "Trânsito",
        "definicao": "Estacionar em área proibida ou local que não seja uma vaga de estacionamento, em uma pista de incêndio, bloqueando uma pista aliada ou a menos de 5 metros de um hidrante, o veículo é abandonado. Aplicar DV (pátio)"
    },

    {
        "numero": 7.3,
        "crime": "Porte de teazer",
        "multa": 20000,
        "sentenca": 30,
        "direito_a_fianca": true,
           "valor_fianca": 90000,
        "categoria": "Trânsito",
        "definicao": "Estacionar em área proibida ou local que não seja uma vaga de estacionamento, em uma pista de incêndio, bloqueando uma pista aliada ou a menos de 5 metros de um hidrante, o veículo é abandonado. Aplicar DV (pátio)"
    },

    {
        "numero": 7.4,
        "crime": "Fuga",
        "multa": 10000,
        "sentenca": 10,
        "direito_a_fianca": false,
           "valor_fianca": 90000,
        "categoria": "Trânsito",
        "definicao": "Estacionar em área proibida ou local que não seja uma vaga de estacionamento, em uma pista de incêndio, bloqueando uma pista aliada ou a menos de 5 metros de um hidrante, o veículo é abandonado. Aplicar DV (pátio)"
    },

    {
        "numero": 7.5,
        "crime": "Dirigindo Sem CNH",
        "multa": 13000,
        "sentenca": 0,
        "direito_a_fianca": false,
           "valor_fianca": 90000,
        "categoria": "Trânsito",
        "definicao": "Estacionar em área proibida ou local que não seja uma vaga de estacionamento, em uma pista de incêndio, bloqueando uma pista aliada ou a menos de 5 metros de um hidrante, o veículo é abandonado. Aplicar DV (pátio)"
    },

    {
        "numero": 7.6,
        "crime": "Uso De Coldre",
        "multa": 10000,
        "sentenca": 0,
        "direito_a_fianca": false,
           "valor_fianca": 90000,
        "categoria": "Trânsito",
        "definicao": "Estacionar em área proibida ou local que não seja uma vaga de estacionamento, em uma pista de incêndio, bloqueando uma pista aliada ou a menos de 5 metros de um hidrante, o veículo é abandonado. Aplicar DV (pátio)"
    },

];

var atenuantes = [
    {
        "numero": 5,
        "tipo": "Advogado Constituído",
        "reducao": 0.2,
        "obs": "O acusado tera direito à 30% de redução de pena e direito a fiança caso opte por este recurso, não obrigatório. Sendo direito do acusado o aguarde do Defensor Público (Advogado) em até 10 minutos."
    },
    {
        "numero": 1,
        "tipo": "Réu Primário",
        "reducao": 0.2,
        "obs": "APENAS COM ADVOGADO PRESENTE."
    },
    {
        "numero": 2,
        "tipo": "Réu Confesso",
        "reducao": 0.1,
        "obs": "APENAS COM ADVOGADO PRESENTE. Tera direito a 10% de redução na pena o acusado que confessar o crime."
    },
    {
        "numero": 3,
        "tipo": "Colaboração",
        "reducao": 0.2,
        "obs": "Colaborar com o processo de apreensão, prisão."
    },
    {
        "numero": 4,
        "tipo": "Delação Premiada",
        "reducao": 0.5,
        "obs": "AUTORIZADA APENAS EM PRISÕES EFETUADAS PELAS POLÍCIAS INVESTIGATIVAS. DEVEM SER AGENDADO DEPOIMENTO NA PRESENÇA DE INVESTIGADORES, ADVOGADO DO DELATOR (HONORÁRIOS - R$ 200.000,00) E PROMOTOR."
    },

    {
        "numero": 6,
        "tipo": "Cumplicidade",
        "reducao": 0.5,
        "obs": "AUTORIZADA APENAS EM PRISÕES EFETUADAS PELAS POLÍCIAS INVESTIGATIVAS. DEVEM SER AGENDADO DEPOIMENTO NA PRESENÇA DE INVESTIGADORES, ADVOGADO DO DELATOR (HONORÁRIOS - R$ 200.000,00) E PROMOTOR."
    },

    {
        "numero": 7,
        "tipo": "não lida da lei de miranda",
        "reducao": 0.1,
        "obs": "O acusado tera direito à 20% de redução de pena e direito a fiança caso opte por este recurso, não obrigatório. Sendo direito do acusado o aguarde do Defensor Público (Advogado) em até 10 minutos."
    },

    {
        "numero": 8,
        "tipo": "Nenhuma",
        "reducao": 0,
        "obs": "Quando não tiver deduções"
    }
];

var crimeListDiv = document.getElementById('crimeList');
var noResultsMessage = document.getElementById('noResultsMessage');
var selectedCrimes = [];

// Função para renderizar a lista de crimes
function renderCrimeList(crimes) {
    crimeListDiv.innerHTML = '';
    noResultsMessage.style.display = 'none';

    if (crimes.length === 0) {
        noResultsMessage.style.display = 'block';
        return;
    }

    crimes.forEach(function (element) {
        var crime = document.createElement("a");
        crime.setAttribute("class", "list-group-item rounded-0 list-group-item-action mx-2");
        crime.setAttribute("id", "list-" + element.numero);
        crime.setAttribute("data-toggle", "list");
        crime.setAttribute("href", "#list" );
        crime.setAttribute("role", "tab");
        crime.setAttribute("aria-controls", "home");
        crime.textContent = element.crime;

        // Verifica se o elemento está no array selectedCrimes e adiciona a classe
        if (selectedCrimes.some(function (selectedElement) {
            return selectedElement.numero === element.numero;
        })) {
            crime.classList.add("selectedOption");
        }

        crime.addEventListener("click", function () {
            crime.classList.toggle("selectedOption");
            var index = selectedCrimes.findIndex(function (selectedElement) {
                return selectedElement.numero === element.numero;
            });

            if (crime.classList.contains("selectedOption")) {
                if (index === -1) {
                    selectedCrimes.push(element);
                }
            } else {
                if (index !== -1) {
                    selectedCrimes.splice(index, 1);
                }
            }

            console.log(selectedCrimes);
        });

        crimeListDiv.appendChild(crime);
    });
}

// Event listener para o input do campo de busca
document.getElementById('crimeSearchInput').addEventListener('input', function () {
    var searchTerm = this.value.toLowerCase();

    // Filtra os crimes com base no termo de busca
    var filteredCrimes = codigoPenal.filter(function (element) {
        return element.crime.toLowerCase().includes(searchTerm);
    });

    // Atualiza a lista de crimes renderizada
    renderCrimeList(filteredCrimes);
});

// Renderiza a lista de crimes inicialmente
renderCrimeList(codigoPenal);

// -------------------------------------
var atenuanteListDiv = document.getElementById('atenuantesList');
var noResultsMessageAte = document.getElementById('noResultsMessage2');
var selectedAtenuantes = [];

function renderAtenuantesList(atenuantesResp) {
    atenuanteListDiv.innerHTML = '';
    noResultsMessageAte.style.display = 'none';

    if (atenuantesResp.length === 0) {
        noResultsMessageAte.style.display = 'block';
        return;
    }

    atenuantesResp.forEach(function (element) {
        var atenu = document.createElement("a");
        atenu.setAttribute("class", "list-group-item rounded-0 list-group-item-action mx-2");
        atenu.setAttribute("id", "list-" + element.numero);
        atenu.setAttribute("data-toggle", "list");
        atenu.setAttribute("href", "#list-" );
        atenu.setAttribute("role", "tab");
        atenu.setAttribute("aria-controls", "home");
        atenu.textContent = element.tipo;

        // Verifica se o elemento está no array selectedAtenuantes e adiciona a classe
        if (selectedAtenuantes.some(function (selectedElement) {
            return selectedElement.numero === element.numero;
        })) {
            atenu.classList.add("selectedOption");
        }

        atenu.addEventListener("click", function () {
            atenu.classList.toggle("selectedOption");
            var index = selectedAtenuantes.findIndex(function (selectedElement) {
                return selectedElement.numero === element.numero;
            });

            if (atenu.classList.contains("selectedOption")) {
                if (index === -1) {
                    selectedAtenuantes.push(element);
                }
            } else {
                if (index !== -1) {
                    selectedAtenuantes.splice(index, 1);
                }
            }

            console.log(selectedAtenuantes);
        });

        atenuanteListDiv.appendChild(atenu);
    });
}
// Event listener para o input do campo de busca atenuantes
document.getElementById('atenuantesSearchInput').addEventListener('input', function () {
    var searchAte = this.value.toLowerCase();

    // Filtrar os atenuantes com base no termo de busca
    var filteredAtenuantes = atenuantes.filter(function (element) {
        return element.tipo.toLowerCase().includes(searchAte);
    });

    // Atualizar a lista de atenuantes renderizada
    renderAtenuantesList(filteredAtenuantes);
});

// Renderizar a lista de atenuantes inicialmente
renderAtenuantesList(atenuantes);

// capitura de dados
const radioYes = document.getElementById('customRadio1');
const radioNo = document.getElementById('customRadio2');
var radioValue = false
var inputNomeAcusado = document.getElementById("inputNomeAcusado");
var inputIdAcusado = document.getElementById("inputIdAcusado");
var valuePrisonFine = document.getElementById('valuePrisonFine');
var valueBailAmount = document.getElementById('valueBailAmount')
var numberMonths = document.getElementById('monthsPrison')
var penalReduction = document.getElementById('penalReduction')
const allCrimesText = document.createElement('span'); //onde fica armazenado os crimes
const allAtenuantesText = document.createElement('span'); //onde fica armazenado os crimes

var crimeValue = 0;
var bailAmount = 0;
var monthsPrisonValue = 0;
var valuePenalReduction = 0;

radioYes.addEventListener('click', function () {
    radioValue = true
});

radioNo.addEventListener('click', function () {
    radioValue = false
});

// verifica inafiançavel
function checkBailForCrime() {
    var criminalBail = selectedCrimes.some(function (item) {
        return item.direito_a_fianca === false;
    })
    console.log(criminalBail)
    return criminalBail
}

// insere dinamicamente no formulario
function insertDataForm(rightBail) {
    let tempName = document.getElementById('acusadoNome')
    let tempId = document.getElementById('acusadoPassaporte')
    let tempTotalSentence = document.getElementById('TotalSentence')
    let tempAppliedReduction = document.getElementById('AppliedReduction')
    let tempTotalReducedSentence = document.getElementById('TotalReducedSentence')
    let tempTotalFine = document.getElementById('TotalFine')
    let tempTotalBailAmount = document.getElementById('TotalBailAmount')
    let tempPaidBail = document.getElementById('PaidBail')
    let tempTotalCrimes = document.getElementById('CommittedCrimes')
    let tempTotalAtenuantes = document.getElementById('selectedAtenuantes')

    tempName.textContent = inputNomeAcusado.value
    tempId.textContent = inputIdAcusado.value
    tempTotalSentence.textContent = monthsPrisonValue + ' meses '
    tempTotalReducedSentence.textContent = monthsPrisonValue - (monthsPrisonValue * valuePenalReduction) + ' meses';
    numberMonths.textContent = monthsPrisonValue - (monthsPrisonValue * valuePenalReduction) 
    tempAppliedReduction.textContent = valuePenalReduction * 100 + '%'
    tempTotalFine.textContent = crimeValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    if (rightBail) {
        tempTotalBailAmount.textContent = bailAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    } else {
        tempTotalBailAmount.textContent = 'Devido a crimes inafiançáveis, a fiança é zerada e o réu perde o direito.'
    }
    tempTotalCrimes.appendChild(allCrimesText);
    tempTotalAtenuantes.appendChild(allAtenuantesText);
    tempPaidBail.textContent = `${radioValue ? 'Sim' : 'Não'}`
}

// calcular fiança
function calculateBail() {
    crimeValue = 0;
    bailAmount = 0;
    let rightBail = true
    monthsPrisonValue = 0;
    valuePenalReduction = 0;
    allCrimesText.textContent = ''
    allAtenuantesText.textContent = ''

    selectedCrimes.forEach(crime => {
        crimeValue += crime.multa;
        bailAmount += crime.valor_fianca
        monthsPrisonValue += crime.sentenca

        allCrimesText.textContent += crime.crime + ', ';
    });

    selectedAtenuantes.forEach(atenuante => {
        valuePenalReduction += atenuante.reducao
        allAtenuantesText.textContent += atenuante.tipo + ', ';

    });

    // Exibir o valor da multa no  HTML 
    valuePrisonFine.textContent = crimeValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // caso exista crime inafiançavel fiança fica em 0
    if (checkBailForCrime()) {
        bailAmount = 0;
        rightBail = false
    }

    // Exibir o valor da fiança no  HTML 
    valueBailAmount.textContent = bailAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    // Exibir sentença  HTML 
    // numberMonths.textContent = monthsPrisonValue - (monthsPrisonValue * valuePenalReduction)

    if (monthsPrisonValue > 120) {
        monthsPrisonValue = 120
    }

    if (bailAmount > 700000) {
        bailAmount = 700000
    }

    if (crimeValue > 300000) {
        crimeValue = 300000
    }

    // Exibir redução no  HTML 
    if (valuePenalReduction > 0.5) {
        valuePenalReduction = 0.5

    }

    var tempValueRedution = valuePenalReduction


    penalReduction.textContent = `${tempValueRedution * 100} %`

    insertDataForm(rightBail)
}
