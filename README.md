# PT-BR - Versão em português

## deploy-sapui5-fiori-onpremisse
Como configurar seu projeto SAPUI5 para realizar deploy diretamente no ambiente FIORI on-premisse

## O que você irá aprender
Como fazer build e deploy da sua aplicação SAPUI5 em um ambiente local?
Como fazer deploy diretamente no seu ambiente FIORI através da linha de comando da sua IDE de desenvolvimento?

## Pré-requisitos
* Dentro do seu ambiente SAP acessar a transação SMICM, ir no menu "Ir Para > Serviços", anote o HOST e a PORTA para utilizar posteriormente

## Passo a passo

### 1. Copiando arquivos
Copie os arquivos .npmrc, Gruntfile.js desse projeto para seu projeto

### 2. Configurando package.json
Verifique o arquivo package.json desse projeto e adicione as dependências ao arquivo package.json do seu projeto
![package.json](https://github.com/MLDOliveira/deploy-sapui5-fiori-onpremisse/blob/master/webapp/images/package-json.png)

### 3. Configurando arquivo ui5.yaml
A configuração do arquivo ui5.yaml é importântissíma para o correto funcionando do build e deploy, leia abaixo como cada campo deve ser preenchido

Copie o trecho de código conforme a imagem abaixo para seu arquivo ui5.yaml

![ui5.yaml](https://github.com/MLDOliveira/deploy-sapui5-fiori-onpremisse/blob/master/webapp/images/ui5-yaml.png)

Após isso, preencha as informações abaixo conforme as instruções

* server: Aqui você deve informar a URL com porta (anotado nos pré-requisitos) para acesso ao seu ambiente FIORI, caso não saiba essa informação entre na transação 
* client: Mandante
* user: Usuário do SAP ERP
* password: Senha do usuário do SAP ERP
* language: Idioma e acesso do SAP ERP
* package: Pacote SAP onde os objetos serão gravados
* bspContainer: Nome da aplicação BSP que será gerada (Limite de 15 posições)
* bspContainerText: Descrição da aplicação BSP que será gerada
* transportNo: Número da request onde as alterações serão gravadas

### 4. Instalando dependências

Na linha de comando dentro da pasta do seu projeto execute o comando "npm install" e aguarde a finalização das instalações. 
Veja o log gerado e se necessário, execute o comando "npm audit fix" para corrigir erros da instalação de pacotes.

### 5. Fazendo build e deploy

Após essas configurações volte a linha de comando e execute o comando "npm run build", ao executar esse comando ele irá fazer o build do seu projeto criando a pasta /dist/ e em seguida irá fazer o upload dessa pasta para o seu ambiente SAP FIORI, o resultado deve algo parecido com a imagem abaixo.

![build](https://github.com/MLDOliveira/deploy-sapui5-fiori-onpremisse/blob/master/webapp/images/build.png)

### 6. Confirmando deploy no seu ambiente SAP ERP

Para confirmar que o deploy foi realizado com sucesso, acesse o seu ambiente SAP, entre na transação SE80, selecione aplicações BSP e procure pelo nome da aplicação informado no campo bspContainer do passo 3!.

## Fontes
* https://github.com/pfefferf/ui5-nwabap-deployer/blob/master/packages/grunt-nwabap-ui5uploader/README.md


# EN - Versão em inglês




