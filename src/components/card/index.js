import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('card', tpl);

export default (id, name, msg) => {
	return tpl({ id, name, msg });
}
