import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('chat-input', tpl);

const profileInput = (id: string, value: string) => {
	return tpl({ id, value });
}

export default profileInput
