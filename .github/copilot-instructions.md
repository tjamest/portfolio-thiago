# Instruções para o GitHub Copilot

Siga estas regras ao sugerir, editar ou revisar código neste repositório.

## Antes de codificar

- Confirme o contexto no código existente e declare premissas importantes.
- Se houver ambiguidade relevante ou alternativas com impactos diferentes, explique-as e peça esclarecimento em vez de assumir.
- Sugira a opção mais simples que atenda ao pedido e sinalize complexidade desnecessária.

## Ao implementar

- Faça a menor alteração necessária; não acrescente recursos, configurações ou abstrações não solicitadas.
- Não refatore código adjacente, nem altere comentários ou formatação fora do escopo.
- Siga o estilo e os padrões já presentes no repositório.
- Não remova código morto preexistente. Remova somente artefatos que a própria alteração tornar obsoletos.
- Garanta que cada alteração possa ser justificada pelo objetivo da tarefa.

## Verificação

- Converta pedidos em critérios verificáveis de sucesso.
- Para correções, reproduza o defeito antes de corrigi-lo quando isso for viável.
- Adicione ou atualize testes proporcionais à alteração, incluindo entradas inválidas quando forem relevantes.
- Execute ou recomende os testes, análise estática e build adequados antes de concluir.
- Não afirme que algo funciona sem uma verificação correspondente.

## Proporção

Use rigor proporcional: uma mudança pequena e inequívoca deve permanecer simples, sem processo excessivo.
