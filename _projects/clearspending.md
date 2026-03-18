---
layout: project

folder: clearspending
permalink: clearspending

title: Интерфейс системы мониторинга госзакупок «Госзатраты» 
meta: Интерфейс системы мониторинга госзакупок «Госзатраты» 

style: true
featured_image: cs-cover.png
full: false

cover: cs-cover.png
customer: Инфокультура
# src: https://chatterbox.one
role: Веб-дизайн, вёрстка
description: Под крылом Инфокультуры нарисовал интерфейс системы общественного мониторинга госзакупок в РФ. Проект нацелен на прозрачность государственных расходов и снижение коррупционных рисков.
---

<div class="row pb-5">
  <div class="col-10 text-center emerge" data-expose="true">
    <img src="{{site.baseurl}}/src/img/project_img/{{page.folder}}/cs-promo.png" class="img-fluid rounded mb-3" alt="Лендинг">
  </div>
</div>

### Проблема и контекст

Портал запустился 10 лет назад, и я был частью команды, которая разрабатывала его первую версию. Со временем дизайн устарел, интерфейс стал сложнее для пользователей, а некоторые начали путать агрегатор с официальным источником информации и обращаться за поддержкой.

Главными вызовами для меня были: создание дизайна, который останется актуальным надолго, сохранение структуры сайта для поддержки SEO и работа в условиях ограниченных ресурсов на исследования аудитории, так как проект некоммерческий и без стороннего финансирования на момент разработки редизайна. 


<div class="row pb-5 pt-3">
  <div class="col-10 col-lg-5 emerge" data-expose="true">
    <img src="{{site.baseurl}}/src/img/project_img/{{page.folder}}/cs-old.png" class="img-fluid rounded mb-3" alt="Старая версия">
  </div>
  <div class="col-10 col-lg-5 emerge" data-expose="true">
    <img src="{{site.baseurl}}/src/img/project_img/{{page.folder}}/cs-new.png" class="img-fluid rounded mb-3" alt="Новая версия">
  </div>
</div>

<!-- Процесс работы:
1. После постановки задачи я уточнял требования у менеджеров и разработчиков, выявлял технические ограничения.
2. Анализировал конкурентов, искал лучшие практики, формулировал гипотезы и разрабатывал варианты  решений.
3. Создавал макеты, иногда в нескольких версиях, чтобы выбрать лучший вариант.
4. На еженедельных созвонах мы обсуждали решения, после чего я готовил макеты для передачи в разработку.
5. Любой участник команды мог внести предложения и уточнения в процессе работы. -->

<!-- Процесс работы был построен следующим образом: уточнение требований и ограничений после постановки задачи → анализ конкурентов, поиск лучших практик, формулировка гипотез → проработка вариантов решений, создание макетов → обсуждение результатов, подготовка макетов для разработчиков. Любой участник команды мог внести предложения и уточнения в процессе работы.     -->

### Подход к аналитике

Из-за ограниченных ресурсов на исследования подобрали максимально доступные методики анализа. Благодаря анализу конкурентов, выявлению сильных и слабых сторон, пользовательских путей, удалось точнее проработать релевантные улучшения для нашего сервиса, которые стали возможны благодаря обновлённому API. С помощью визуального анализа выявили общие закономерности в реализации и определились с дизайн-концепцией.

<div class="row pb-5 pt-3">
  <div class="col-10 emerge" data-expose="true">
    <p class="mx-auto">
      <img src="{{site.baseurl}}/src/img/project_img/{{page.folder}}/cs-analysis.png" class="img-fluid rounded mb-3" alt="Аналитика">
    </p>
  </div>
</div>

Сформулированы десятки гипотез по улучшению.

<div class="row pb-5 pt-3">
  <div class="col-10 emerge" data-expose="true">
    <img src="{{site.baseurl}}/src/img/project_img/{{page.folder}}/cs-hypo.png" class="img-fluid rounded mb-3" alt="Гипотезы">
  </div>
</div>

<!-- Карта сайта претерпела не так много изменений в интересах SEO-оптимизации. -->

Вместе с аналитиком госзакупок мы структурировали всю выводимую на сервисе информацию. Каждому полю проставлены весовые значения по уровню пользы и информативности. Это помогло составить иерархию данных в карточках и на страницах.

<div class="row pb-5 pt-3">
  <div class="col-10 emerge" data-expose="true">
    <p class="mx-auto">
      <img src="{{site.baseurl}}/src/img/project_img/{{page.folder}}/cs-data.png" class="img-fluid rounded mb-3" alt="Данные">
    </p>
  </div>
</div>



### Итоговый дизайн и реализация

Переработал интерфейс, сделав его чище, понятнее и удобнее. Обновил визуальный стиль, добавил адаптивность и тёмную тему. Упорядочил стили и элементы интерфейса, избавился от лишнего.

<div class="row pb-5 pt-3">
  <div class="col-10 text-center emerge" data-expose="true">
    <img src="{{site.baseurl}}/src/img/project_img/{{page.folder}}/cs-adaptive.png" class="img-fluid rounded mb-3" alt="Адаптив">
  </div>
</div>

Во время работы был сформулирован принцип «данные сначала», который лежит в основе каждой созданной страницы. Особенно это заметно на страницах поиска — пользователь сразу видит контент, а затем уточняет его при необходимости.

<div class="row pb-5 pt-3">
  <div class="col-10 emerge" data-expose="true">
    <p class="mx-auto">
      <img src="{{site.baseurl}}/src/img/project_img/{{page.folder}}/Contracts-List-L.png" class="img-fluid rounded mb-3" alt="Список контрактов">
    </p>
  </div>
</div>

Страница контракта — самая информационно нагруженная страница сервиса:

<div class="row pb-5 pt-3">
  <div class="col-10 emerge" data-expose="true">
    <p class="mx-auto">
      <img src="{{site.baseurl}}/src/img/project_img/{{page.folder}}/Contracts-Item-L.png" class="img-fluid rounded mb-3" alt="Страница контракта">
    </p>
  </div>
</div>

Карточки сущностей прорабатывались с учётом иерархии данных, возможностью удобного сравнения показателей, учётом крайних значений, толерантностью к ошибкам в исходных данных и вниманием к формулировкам. 

<div class="row pb-5 pt-3">
  <div class="col-10 text-center emerge" data-expose="true">
    <p class="mx-auto">
      <img src="{{site.baseurl}}/src/img/project_img/{{page.folder}}/contract-card.png" class="img-fluid rounded mb-3" alt="Карточка контракта">
      <img src="{{site.baseurl}}/src/img/project_img/{{page.folder}}/customers-suppliers-card.png" class="img-fluid rounded mb-3" alt="Карточка контрагентов">
      <img src="{{site.baseurl}}/src/img/project_img/{{page.folder}}/regions-card.png" class="img-fluid rounded mb-3" alt="Карточка регионов">
      <img src="{{site.baseurl}}/src/img/project_img/{{page.folder}}/industry-card.png" class="img-fluid rounded mb-3" alt="Карточка подотрасли">
    </p>
  </div>
</div>

Кастомный набор иконок разбавляет сухость данных и помогает быстро отличить одинаковые по структуре, но разные по ролям сущности.

<div class="row pb-5 pt-3">
  <div class="col-10 text-center emerge" data-expose="true">
    <img src="{{site.baseurl}}/src/img/project_img/{{page.folder}}/cs-icons-alt.png" class="img-fluid rounded mb-3" alt="Иконки">
  </div>
</div>

### Результат

Для системы подготовлено несколько сотен экранов с главной страницей, внутренними контентными страницами, списками и профилями контрагентов, поиском по отраслям и регионам. 

<div class="row pb-5 pt-3">
  <div class="col-10 text-center emerge" data-expose="true">
    <img src="{{site.baseurl}}/src/img/project_img/{{page.folder}}/all-screens-S-alt-2.png" class="img-fluid rounded mb-3" alt="Все экраны на мобилке">
  </div>
</div> 

Активная фаза редизайна заняла 5 недель. Пока что проект находится в альфа-тестировании, но уже видно, что пользователям будет проще находить нужную информацию и новый дизайн останется актуальным на долгое время. Унификация интерфейса упростила работу разработчикам, а совместное проектирование решений с командой, вместе с коридорным тестированием, позволило быстрее принять дизайн без долгих правок. 

По итогу макеты и рабочий прототип оценивал и согласовывал Кудрин Алексей Леонидович. В результате согласований выделено дополнительное финансирование на продолжение разработки проекта. В планах добавление новых объёмных модулей.

<div class="pt-3"></div>
<hr>

<div class="row pb-3">
  <div class="col-3 col-lg-2">
    Роль в проекте
  </div>
  <div class="col-7 col-lg-4">
    Продуктовый дизайнер
  </div>
</div>
<div class="row pb-5">
  <div class="col-3 col-lg-2">
   Команда
  </div>
  <div class="col-7 col-lg-4">
    Два фронтент-разработчика, два бекенд-разработчика, системный аналитик, аналитик госзакупок, два аналитика данных, менеджеры и руководители проекта.
  </div>
</div>











