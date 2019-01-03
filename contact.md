---
layout: default

title: Заявка
permalink: /contact/
---


<section class="hero hero-index">
  <div class="container-fluid">
    <div class="row justify-content-lg-center">
      <div class="col col-lg-8"> 
        <h1>Закажите сайт</h1>
        <p>Оставьте заявку на&nbsp;создание сайта или&nbsp;напишите на&nbsp;почту по&nbsp;адресу <a href="mailto:hello@pavelmednikov.com?subject=Весточка с сайта-портфолио" onclick="yaCounter44663041.reachGoal('order_footer'); return true;">hello@pavelmednikov.com</a>, и&nbsp;я&nbsp;обазательно свяжусь с&nbsp;вами.</p>
      </div>
    </div>
  </div>
</section>

<section class="contact-form pt-0">
  <div class="container-fluid">
    <div class="row justify-content-lg-center">
      <div class="col col-lg-8">
      	<form action="https://formspree.io/hello@pavelmednikov.com" method="POST" data-parsley-validate="">
      		
			<div class="form-group row">
			  <div class="col-12 col-sm-6 mb-3 mb-sm-0">
			  <label for="formName">Ваше имя*</label>
			  <input type="text" name="full_name" class="form-control" id="formName" placeholder="Введите Ваше имя" required="">
			  </div>
			  <div class="col-12 col-sm-6 mb-3 mb-sm-0">
			    <label for="formEmail">E-mail*</label>
			    <input type="email" name="_replyto" class="form-control" id="formEmail" placeholder="Введите Ваш E-mail" required="">
			  </div>
			</div>
			<div class="form-group">
			  <label for="formMessage">Текст сообщения*</label>
			  <textarea name="message" class="form-control" id="formMessage" rows="3" placeholder="Опишите проект" required=""></textarea>
			</div>
			<div class="form-group">
			  <p class="small mb-0">Нажимая на&nbsp;кнопку «Отправить сообщение», вы&nbsp;даёте <a href="{{site.baseurl}}/agreement/">согласие</a> на&nbsp;обработку своих персональных&nbsp;данных.</p> 
			</div>

			<input type="hidden" name="_subject" value="Весточка с сайта-портфолио">
			<!-- <input type="hidden" name="__redirect" value="http://pavelmednikov.com/thanks"> -->
			<input type="hidden" name="_next" value="http://pavelmednikov.com/thanks">
			<input type="hidden" name="_language" value="ru" />

			<div class="form-group text-center mb-0">
				<input class="btn" type="submit" value="Отправить заявку"  onclick="yaCounter44663041.reachGoal('make_order'); return true;">
			</div>

      	</form>
      </div>
    </div>
  </div>
</section>



