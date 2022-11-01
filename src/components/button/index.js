import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.css';

Handlebars.registerPartial('main-button', tpl);

export default (id, value) => {
	return tpl({ id, value });
}
