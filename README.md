#

![Tela Principal](https://github.com/Maelzin13/Curriculo/blob/main/src/img/Principal.png)

## Estrutura

- `src/components/` — seções do currículo (Sobre, Experiência, Formação, Certificações, Idiomas, Tecnologias).
- `n8n/` — workflow de vagas com RAG do currículo (Serper · Firecrawl · Claude). Ver `n8n/README.md`.
- `curriculos/` — versões em DOCX/PDF do currículo (`CV_ISMAEL` e `ismael-currículo-XYZ`). **Fora do git** (`.gitignore`), pois contêm dados de contato pessoais.

## Rodando

```bash
npm install
npm run dev     # desenvolvimento
npm run build   # gera dist/
```
