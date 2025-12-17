# CMS Posts Module – Refatoração e Testes Unitários

Este repositório contém a implementação de um **módulo de posts de um CMS**, desenvolvido para fins acadêmicos, com foco em **qualidade de código, refatoração e testes unitários**.

O projeto foi criado para atender aos requisitos de um trabalho prático que solicita a identificação de *code smells*, aplicação de técnicas de refatoração modernas e a escrita de testes unitários utilizando ferramentas do ecossistema JavaScript.

---

## Objetivos do Trabalho

* Selecionar um módulo de um CMS (Posts)
* Identificar *code smells* no código
* Aplicar refatoração utilizando:

  * `const` / `let`
  * Arrow functions
  * Destructuring
  * Simplificação de lógica condicional
  * Nomes de variáveis e funções mais semânticos
* Criar testes unitários para funções de lógica pura
* Testar cenários de sucesso e erro
* Configurar ferramentas de qualidade de código (ESLint e Prettier)

---

## Módulo Escolhido

**Módulo de Posts**

Responsável por:

* Criação de slug a partir do título
* Validação de dados de um post
* Filtragem de posts publicados

Embora o projeto utilize WordPress como CMS, não havia um módulo customizado previamente implementado. Assim, a lógica central do módulo de posts foi **isolada e simulada**, permitindo a aplicação das técnicas exigidas pelo trabalho.

---

## Estrutura do Projeto

```
cms-posts-module/
├── src/
│   └── post.js
├── tests/
│   └── post.test.js
├── .eslintrc.json
├── .prettierrc
├── package.json
└── README.md
```

---

## Tecnologias e Ferramentas Utilizadas

* JavaScript (ES2021)
* Node.js
* Jest – Testes unitários
* ESLint – Análise estática e qualidade de código
* Prettier – Padronização de formatação

---

## Funcionalidades Implementadas

### Criação de Slug

Gera um slug válido a partir do título do post.

### Validação de Post

Verifica se um post possui título e conteúdo válidos.

### Filtragem de Posts Publicados

Retorna apenas posts com status `published`.

Todas as funções são **funções puras**, sem efeitos colaterais, o que facilita testes e manutenção.

---

## Testes Unitários

Os testes foram escritos utilizando **Jest**, cobrindo:

* Casos de sucesso
* Casos de erro e invalidação
* Comportamento esperado das funções de lógica pura

### Executar os testes

```
npm test
```

---

## Qualidade de Código

### ESLint

Configurado para:

* Proibir uso de `var`
* Incentivar uso de `const`
* Evitar variáveis não utilizadas
* Garantir comparações seguras (`===`)

### Prettier

Responsável por:

* Padronização de estilo
* Melhor legibilidade
* Consistência no código

### Executar o lint

```
npm run lint
```

### Formatar o código

```
npm run format
```

---

## Considerações Finais

Este projeto demonstra a aplicação prática de conceitos fundamentais de **engenharia de software**, como refatoração, testes automatizados e padronização de código. O módulo de posts foi utilizado como estudo de caso para evidenciar melhorias na legibilidade, manutenibilidade e confiabilidade do código.

---

## Autor

* **Nome:** Vicente Sampaio
* **Curso:** Ciência da Computação
* **Instituição:** UFRR

---

## Licença

Este projeto foi desenvolvido exclusivamente para fins acadêmicos.
