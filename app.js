var state = {
	items: []
};


var listItemTemplate = {
	'<li>' +
	'<span class="shopping-item js-shopping-item"></span>' +
	'<div class="shopping-item-controls">' +
	'<button class="js-shopping-item-toggle">' +
	'<span class="button-label">check</span>' +
	'</button>' +
	'<button class="js-shopping-item-delete">' +
	'<span class="button-label">delete</span>' +
	'</button>' +
	'</div>' +
	'</li>'
	);

function addItem(state, item) {
	state.items.push({
		displayName: item,
		checkedOff: false
	});

}

function getItem(state, itemIndex) {
	return state.items[itemIndex];
}

function deleteItem(state, itemIndex) {
	state.items.splice(itemIndex, 1);
}

function updateItem(state, itemIndex, newItemState) {
	state.items[itemIndex] = newItemState;
}

function renderItem(item, itemId, itemTemplate, itemDataAttr) {
	var element = $(itemTemplate);
	element.find('js-shopping-item').text(item.displayName);
	if (item.checkedOff) {
		element.find('js-shopping-item').addClass('shopping-item_checked');
	}
	element.find('.js-shopping-item-toggle')
	element.attr(itemDataAttr, itemId);
	return element;
}

function renderList(state, listItem, itemDataAttr) {
	var element = $(itemTemplate);
	element.find('.js-shopping-item').text('item.displayName');
	if (item.checkedOff) {
		element.find('.js-shopping-item').addClass('shopping-item_checked');
	}
	element.find('.js-shopping-item-toggle')
	element.attr(itemDataAttr, itemId);
	return element;
}

function renderList(state, ListItem, itemDataAttr) {
	var itemsHTML = state.items.map (
		function(item, index) {
			return renderItem(item, index, listItemTemplate, itemDataAttr);
		});
	listElement.html(itemsHTML);
}




























