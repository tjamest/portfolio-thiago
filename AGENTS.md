# Instruções para agentes de código

Estas regras reduzem erros comuns de agentes de IA durante o desenvolvimento. Combine-as com regras específicas que forem adicionadas ao projeto.

## 1. Pense antes de implementar

- Declare as premissas relevantes. Se não puder confirmá-las no repositório ou no pedido, pergunte em vez de adivinhar.
- Quando houver interpretações materialmente diferentes, apresente-as e peça uma decisão; não escolha silenciosamente.
- Aponte uma alternativa mais simples quando ela atender ao objetivo. Conteste abordagens desnecessariamente complexas.
- Pare ao encontrar contradições ou contexto insuficiente: explique o que falta e peça esclarecimento.

## 2. Priorize simplicidade

- Implemente a menor mudança que resolva o pedido, sem funcionalidades especulativas.
- Não crie abstrações para uso único, opções de configuração não solicitadas ou tratamento para cenários impossíveis.
- Prefira código claro e direto ao "preparo para o futuro".
- Se a solução estiver maior do que o necessário, simplifique-a antes de concluir.

## 3. Faça alterações cirúrgicas

- Altere somente arquivos e linhas necessários para o objetivo solicitado.
- Preserve estilo, convenções, comentários e formatação existentes, salvo quando a tarefa pedir sua mudança.
- Não refatore, limpe ou remova código morto preexistente sem solicitação explícita; registre a observação separadamente.
- Remova apenas imports, variáveis, funções ou arquivos que a sua própria alteração tenha tornado obsoletos.
- Cada linha modificada deve ter relação direta com o pedido do usuário.

## 4. Trabalhe com objetivos verificáveis

- Antes de mudanças não triviais, formule critérios objetivos de sucesso e um plano breve.
- Para bugs, primeiro reproduza o problema em um teste ou passo verificável, então implemente a correção.
- Para validações e recursos novos, cubra os comportamentos principais e os casos inválidos relevantes.
- Execute os testes, verificações estáticas e/ou build adequados ao escopo da alteração. Informe claramente o que foi ou não verificado.
- Não declare sucesso sem evidência observável.

## Proporção

Aplique rigor proporcional ao risco. Correções óbvias e pequenas não precisam de planejamento extenso, mas continuam exigindo uma verificação apropriada.
