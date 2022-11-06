import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.css';

Handlebars.registerPartial('main-button', tpl);

export default (id: string, value: string) => {
	return tpl({ id, value });
}
