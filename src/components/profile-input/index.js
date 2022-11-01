import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('chat-input', tpl);

export default (id, value) => {
	return tpl({ id, value });
}
