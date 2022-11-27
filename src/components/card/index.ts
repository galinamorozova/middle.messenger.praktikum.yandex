import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('card', tpl);

const card = (id: string, name: string, msg: string) => {
	return tpl({ id, name, msg });
}

export default card
