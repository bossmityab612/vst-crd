// const initialCards = [
// 	{
// 		name: 'Проект Место',
// 		link: 'https://bossmityab612.github.io/mesto-project/'
// 	},
// 	{
// 		name: 'Челябинская область',
// 		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
// 	},
// 	{
// 		name: 'Иваново',
// 		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
// 	},
// 	{
// 		name: 'Камчатка',
// 		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
// 	},
// 	{
// 		name: 'Холмогорский район',
// 		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
// 	},
// 	{
// 		name: 'Байкал',
// 		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
// 	}
// ];

// // Создание карточек на странице через шаблонный тег
// const containerPhoto = document.querySelector('.elements');
// const templateForm = document.querySelector('#template').content.querySelector('.element');

// const renderCards = (title) => {
// 	const templateForm = document.querySelector('#template');
// 	const element = templateForm.content.querySelector('.element').cloneNode(true); //Клонируем содержимое тега <template>
// 	element.querySelector('.projects__preview-image').src = title.link;
// 	element.querySelector('.element__description-text').textContent = title.name;
// 	containerPhoto.append(element);
// 	addLike(element);
// 	removeCards(element);
// 	return;
// };