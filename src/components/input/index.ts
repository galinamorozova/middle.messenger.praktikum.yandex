import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('input', tpl);

const input = (id: string, value: string) => {
	return tpl({ id, value });
}

export default input
