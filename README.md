## Micro Frontends

Estudo sobre como montar micro frontends usando 'create-mf-app',
criou duas aplicações simulando um ambiente onde temos uma DSL desing system library (DSL) e uma aplicação frontend,
que vai consumir os serviços os componentes da DSL, com isso vamos explorar varias as técnicas de compartilhamento de código
e de self healing que é a habilidade de um micro frontend se auto reconfigurar quando ocorre algum problema.

## Primeiros passos 🏁

Clone o repositório.

```sh
git clone git@github.com:igor-cotrim/micro-frontends.git container
```

`cd` no diretório.

```sh
cd  container
```

Instale as dependências do diretório principal do projeto:

|**⚠️ usaremos yarn para gerenciar nossos pacotes**

```sh
cd dls
```

Instale as dependencias

```sh
yarn install
```

em seguida, entre no diretório dos nossos MFE's

```sh
cd host
```

Instale as dependencias

```sh
yarn install
```

Inicie o servidor de desenvolvimento em cada aplicação:

```sh
yarn  start
```

Com isso, você terá os aplicativos em execução em:

- [localhost:8080](http://localhost:8080/) (aplicativo host)
- [localhost:8081](http://localhost:8081/) (DSL)


Abra uma dessas portas no navegador de sua escolha e você estará pronto para integrar com o aplicativo inicial 🚀.


## Ferramentas Utilizadas 🧰

- [x] React como uma linguagem de IU
- [x] Webpack5 como module bundler
- [x] module-federation
- [x] Styled components como um gerenciador de estilos
- [x] TailwindCss UI como nosso kit de ferramentas de design
