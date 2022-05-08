# Employees list react application
<<<<<<< HEAD

Одностраничный сайт-приложение в котором реализованы базовые функции CRUD
Приложение отображает список сотрудников записанных в базе данных и позволяет производить поиск и фильтрацию, ставить пометки о повышении (звёздочка) и премировании (печенька), а также добавлять и удалять сотрудников из списка.

# Обновление 18.12.2021

В данный момент истинный список сотрудников подгружается из базы данных в app.js и любые изменения в приложении меняют лишь копию этих данных. При перезагрузке страницы данные вновь возвращаются к исходным.

# Модули приложения

1. app.js - производит импорт всех остальных модулей в себя, содержит базу данных.
2. index.js - формирует DOM подгружая в себя app модуль
3. app-filter - позволяет фильтровать список по критериям
4. app-info - формирует header страницы и выводит общую информацию о базе данных
5. employee-list - формирует список сотрудников
6. employee-list-item - позволяет взаимодействовать с отдельным элементом списка
7. employee-add-form - дает возможность добавлять новых сотрудников
8. search-panel - производит поиск по отображаемому списку сотрудников
=======
Одностраничный сайт-приложение в котором реализованы базовые функции CRUD
Приложение отображает список сотрудников записанных в локальной базе данных и позволяет:
1) Производить поиск и фильтрацию
2) Ставить пометки о повышении при клилке на имя (звёздочка) и премировании (печенька)
3) Добавлять (footer панель) и удалять (корзина) сотрудников из списка

# Деплой можно посмотреть по ссылке: https://employees-list-react-app.herokuapp.com/

# Обновление 18.01.2022
Первый деплой на heroku + исправлен readme

# Обновление 18.12.2021
В данный момент истинный список сотрудников подгружается из базы данных в app.js и любые изменения в приложении меняют лишь копию этих данных. При перезагрузке страницы данные вновь возвращаются к исходным.

# Модули приложения
1. app.js - производит импорт всех остальных модулей в себя, содержит базу данных.
2. index.js - формирует DOM подгружая в себя app модуль
3. app-filter - позволяет фильтровать список по критериям
4. app-info - формирует header страницы и выводит общую информацию о базе данных
5. employee-list - формирует список сотрудников
6. employee-list-item - позволяет взаимодействовать с отдельным элементом списка
7. employee-add-form - дает возможность добавлять новых сотрудников
8. search-panel - производит поиск по отображаемому списку сотрудников 


>>>>>>> 670bb4146739673beee8d4e634ebc0e09b22796a
