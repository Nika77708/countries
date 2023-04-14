// HTTP-запросы
// Используй публичный API Rest Countries, а именно ресурс name, возвращающий массив объектов стран
// удовлетворивших критерий поиска. Добавь минимальное оформление элементов интерфейса.

// Напиши функцию fetchCountries(name) которая делает HTTP-запрос на ресурс name и возвращает промис с
// массивом стран - результатом запроса. Вынеси её в отдельный файл fetchCountries.js и сделай именованный
// экспорт.

const SEARCH_URL = 'https://restcountries.com/v3.1/name/';

const searchParams = new URLSearchParams({
  fields: ['name', 'capital', 'population', 'flags', 'languages'],
});

export const fetchCountries = name => {
  return fetch(`${SEARCH_URL}${name}?${searchParams}`).then(response => {
    if (!response.ok) {
        throw new Error (response.status);
    }
     return response.json();
  });
};

