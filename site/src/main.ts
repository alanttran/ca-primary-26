import './styles/main.scss';
import { ballotData, renderApp } from './render-app.ts';

const root = document.querySelector<HTMLDivElement>('#app');
if (!root) throw new Error('#app missing');
renderApp(root, ballotData);
