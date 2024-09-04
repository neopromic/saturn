#!/usr/bin/env node

const { program } = require('commander');
const { prompt } = require('enquirer');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Função para executar scripts
const runScript = (script) => {
  console.log(`Executando o script: ${script}`);
  exec(`npm run ${script}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o script: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Erro: ${stderr}`);
      return;
    }
    console.log(`Saída:\n${stdout}`);
  });
};

// Função para ler os scripts do package.json
const getScriptsFromPackageJson = () => {
  const packageJsonPath = path.resolve(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
  return packageJson.scripts;
};

// Função para exibir o menu interativo
const showMenu = async () => {
  const scripts = getScriptsFromPackageJson();
  const choices = Object.keys(scripts).map((scriptName) => ({
    name: scriptName,
    value: scriptName,
  }));

  // Configuração da pergunta de lista de escolha usando enquirer
  const question = {
    type: 'select',
    name: 'selectedScript',
    message: 'Escolha um script para executar:',
    choices: choices.map(choice => ({ name: choice.name, value: choice.value })),
  };

  try {
    const answers = await prompt(question);
    // Use a resposta correta para executar o script
    runScript(answers.selectedScript);
  } catch (error) {
    console.error('Erro ao exibir o menu:', error);
  }
};

// Configuração do Commander para CLI
program.version('1.0.0').description('CLI para gerenciar scripts do projeto');

// Comando para exibir o menu interativo
program
  .command('start')
  .description('Exibe o menu de seleção de scripts')
  .action(showMenu);

program.parse(process.argv);
