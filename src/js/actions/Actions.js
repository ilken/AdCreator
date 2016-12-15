import dispatcher from '../dispatcher';

export function update (data) {
	dispatcher.dispatch({
		type: 'LOAD_AD_DATA',
		data
	});
}
export function updateBackgroundColour (data) {
	dispatcher.dispatch({
		type: 'BACKGROUND_COLOUR_CHANGE',
		data
	});
}
export function updateTextColour (data) {
	dispatcher.dispatch({
		type: 'TEXT_COLOUR_CHANGE',
		data
	});
}
export function updateButtonBackgroundColour (data) {
	dispatcher.dispatch({
		type: 'BUTTON_BACKGROUND_COLOUR_CHANGE',
		data
	});
}
export function updateButtonTextColour (data) {
	dispatcher.dispatch({
		type: 'BUTTON_TEXT_COLOUR_CHANGE',
		data
	});
}
