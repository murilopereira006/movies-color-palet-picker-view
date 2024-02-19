# movies-color-palet-picker-view

### Propósito
Este aplicativo recebe arquivos de vídeo e filtra a verdadeira paleta de cores presente no vídeo, retornando o hexadecimal de cada frame.

### Método
O algoritmo que percorre os frames do arquivo também percorre cada pixel do quadro e calcula o valor médio do RGB de cada pixel. Após esse cálculo, o hexadecimal é oferecido como resposta e com um clique você copia para o clipboard.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh