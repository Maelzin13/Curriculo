# n8n — Vagas + RAG do Currículo

Workflow que busca vagas automaticamente, lê cada vaga e a empresa, compara com o meu perfil e gera
material de candidatura sob medida (score, gaps, resumo de CV, experiências em destaque, carta e
perguntas prováveis de entrevista).

```
Agendado (seg–sex 8h/13h/18h) ─┐
Executar manualmente ──────────┴─► Configuração ─► Carregar perfil (RAG) ─► Montar buscas
  ─► Serper (Google: LinkedIn, Gupy, Programathor, Sólides…) ─► Filtrar e deduplicar
  ─► Firecrawl (lê a vaga → JSON) ─► Normalizar vaga ─► Serper (pesquisa a empresa)
  ─► Montar prompt ─► Claude (match + CV sob medida, JSON validado) ─► Interpretar análise
  ─► Score ≥ mínimo? ─► Data Table `vagas_analisadas` (aprovadas e descartadas)
```

## Arquivos

| Arquivo | O que é |
|---|---|
| `perfil-profissional.md` | **Base de conhecimento (RAG).** Fonte da verdade do currículo. O workflow lê a versão da `main` no GitHub a cada execução — atualize aqui e o robô já usa. |
| `workflow-vagas-rag.json` | Workflow para importar no n8n. **Gerado** — não edite à mão. |
| `build_workflow.py` | Gerador do JSON (buscas, prompts e código dos nós). Edite e rode `python n8n/build_workflow.py`. |

## Instalação (uma vez)

1. **Credenciais** (n8n → *Credentials → Add credential*):
   - **Serper** → tipo *Header Auth*: Name `X-API-KEY`, Value = chave do serper.dev
   - **Firecrawl** → tipo *Header Auth*: Name `Authorization`, Value = `Bearer fc-…`
   - **Claude** → tipo *Anthropic*: chave da Anthropic Console
2. **Data Table** (n8n → *Overview → Data tables → Create*) chamada `vagas_analisadas` com as colunas:

   | Coluna | Tipo |
   |---|---|
   | `url`, `fonte`, `titulo`, `empresa`, `local`, `modalidade`, `senioridade`, `salario` | String |
   | `score` | Number |
   | `aprovada` | Boolean |
   | `veredito`, `motivos`, `gaps`, `palavras_chave`, `titulo_cv`, `resumo_cv`, `experiencias_destaque`, `competencias_destaque`, `carta_apresentacao`, `perguntas_entrevista`, `modelo`, `erro`, `analisada_em` | String |

3. **Importar**: *Workflows → Import from file* → `workflow-vagas-rag.json`.
4. Abrir os nós e selecionar as credenciais:
   - `Serper – buscar vagas` e `Serper – pesquisar empresa` → Serper
   - `Firecrawl – ler vaga` → Firecrawl
   - `Claude – analisar match` → Claude
   - `Salvar vaga aprovada` / `Salvar vaga descartada` → conferir se a tabela `vagas_analisadas` está selecionada
5. **Executar manualmente** uma vez para testar, depois **ativar** o workflow.

## Ajustes no nó "Configuração"

- `queries` — o que buscar (operadores do Google valem: `site:`, aspas, `-palavra`).
- `periodo` — `qdr:d` (24h) ou `qdr:w` (7 dias).
- `maxVagasPorExecucao` — teto de vagas analisadas por execução (controla custo).
- `scoreMinimo` — corte para "aprovada" (padrão 70).
- `modelo` — `claude-opus-5-5`.

## Comportamento importante

- **Deduplicação**: vagas analisadas com sucesso ficam guardadas na memória do workflow e não são
  reanalisadas. Essa memória só persiste em execuções do workflow **ativo** (execução manual não grava).
- **LinkedIn**: o Firecrawl não lê páginas do LinkedIn; nesses casos a análise usa título e trecho do
  Google (menos detalhe). Gupy, Programathor e Sólides são lidos por completo.
- **Fallback do Claude**: a chamada usa `fallbacks: "default"` (beta `server-side-fallback-2026-07-01`):
  se o modelo recusar por política, a API reprocessa automaticamente em outro modelo.
- **Sem invenção**: o prompt obriga a IA a usar só fatos do `perfil-profissional.md`; o conteúdo das
  páginas é tratado como dado, não como instrução.

## Custo aproximado por vaga

- Serper: 2 buscas · Firecrawl: 1 scrape (+ créditos do JSON mode)
- Claude Opus 5.5 (effort `medium`): ~6–10 mil tokens de entrada + ~2–3 mil de saída ≈ US$ 0,05–0,10
- Com 8 vagas × 3 execuções/dia útil ≈ 500 vagas/mês no máximo → ajuste `maxVagasPorExecucao` e as buscas.
