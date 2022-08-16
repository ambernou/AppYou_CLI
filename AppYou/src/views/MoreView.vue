<template>
  <div id="app_more" class="justify-content-center" style="margin-top: 20px;padding-bottom: 90px;">
    <div class="container" id="forusers">
      <div class="row">
        <div class="col"><span class="app_block_title"><strong>Пользователю</strong><br></span></div>
      </div>
      <div class="accordion" role="tablist" id="accordion-1" style="margin-top: 15px;">
        <div class="accordion-item">
          <h2 class="accordion-header" role="tab"><button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1" aria-expanded="false" aria-controls="accordion-1 .item-1">В чём отличие от Google play и App store?<br></button></h2>
          <div class="accordion-collapse collapse item-1" role="tabpanel" data-bs-parent="#accordion-1">
            <div class="accordion-body">
              <p class="mb-0">
                1. Универсальный магазин, который сам определить ваше устройство и предложит подходящее приложение<br>
                2. Работает независимо от решений Google и Apple<br>3. Создан в России
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" role="tab"><button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-2" aria-expanded="false" aria-controls="accordion-1 .item-2">Как установить AppYou.ru ?</button></h2>
          <div class="accordion-collapse collapse item-2" role="tabpanel" data-bs-parent="#accordion-1">
            <div class="accordion-body">
              <p class="mb-0">
                <a class="btn btn-primary btn-sm" data-bs-toggle="offcanvas" href="#offcanvas-android" role="button" aria-controls="offcanvas-android" style="margin-bottom:10px;margin-right:30px;">Инструкция для Android</a>
                <a class="btn btn-primary btn-sm" data-bs-toggle="offcanvas" href="#offcanvas-iphone" role="button" aria-controls="offcanvas-iphone" style="margin-bottom:10px">Инструкция для iPhone</a>
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" role="tab"><button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-3" aria-expanded="false" aria-controls="accordion-1 .item-3">Как следить за новостями?</button></h2>
          <div class="accordion-collapse collapse item-3" role="tabpanel" data-bs-parent="#accordion-1">
            <div class="accordion-body"><a class="btn btn-warning btn-sm rounded-3" href="https://t.me/+csIQ7tvWFz01ZDhi" style="margin-top: 20px;margin-left: 15px;color: rgb(54,40,0);opacity: 0.90;">Подписаться на Телеграм<br></a></div>
          </div>
        </div>
      </div>
    </div>

    <div class="container" id="fordevs">
      <hr style="color: rgb(255,255,255);">
      <div class="row">
        <div class="col"><span class="app_block_title"><strong>Разработчику</strong><br></span></div>
      </div>
      <div class="accordion" role="tablist" id="accordion-2" style="margin-top: 15px;">
        <div class="accordion-item">
          <h2 class="accordion-header" role="tab"><button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-2 .item-1" aria-expanded="false" aria-controls="accordion-2 .item-1">Хочу разместить своё приложение?</button></h2>
          <div class="accordion-collapse collapse item-1" role="tabpanel" data-bs-parent="#accordion-2">
            <div class="accordion-body">
              <p class="mb-0">Вот тут можно добавить&nbsp;<a href="https://docs.google.com/forms/d/e/1FAIpQLSc4G09X5x7d_qfTewphnxwAxtxWftIzRiHW6_sDrAEUChfNKA/viewform" target="_blank">Форма для добавления</a></p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" role="tab"><button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-2 .item-2" aria-expanded="false" aria-controls="accordion-2 .item-2">Какая стоимость размещения?</button></h2>
          <div class="accordion-collapse collapse item-2" role="tabpanel" data-bs-parent="#accordion-2">
            <div class="accordion-body">
              <p class="mb-0">Бесплатно для самых быстрых. 500 первых приложений.&nbsp;</p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" role="tab"><button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-2 .item-3" aria-expanded="false" aria-controls="accordion-2 .item-3">Как происходит модерация приложений?</button></h2>
          <div class="accordion-collapse collapse item-3" role="tabpanel" data-bs-parent="#accordion-2">
            <div class="accordion-body">
              <p class="mb-0">Приложения для крупного бизнеса и товарных знаков должны быть размещены только на официальном сайте и содержать APK и PWA.&nbsp;<br>Проверяем ссылки на приложения на наличие вирусов. Если возникают сомнения связываемся с разработчиком.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="text-center py-4">
      <p class="text-muted my-2">Контакты для связи:&nbsp;<a href="mailto:appyou-dev@mail.ru"><br>appyou-dev@mail.ru<br><br></a><br></p>
      <div class="container">
        <div class="row row-cols-1 row-cols-lg-3">
          <div class="col-lg-12">
            <p class="text-muted my-2">Copyright&nbsp;© 2022 AppYou</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
</style>
