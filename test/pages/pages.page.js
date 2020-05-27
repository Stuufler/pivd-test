import Page from './page'

class Pages extends Page {
  // My account
  get myAccountBtn() {return $('[href="http://practice.automationtesting.in/my-account/"]');}
  get username() {return $('#username');}
  get password() {return $('#password');}
  get loginBtn() {return $('[name="login"]');}
  get signOutBtn() {return $('a*=Sign out');}
  get dashboardBtn() {return $('a*=Dashboard');}

  // Home-Shop
  // get signOutBtn() {return $('');}
  get shopBtn() {return $('a*=Shop');}
  get homeBtn() {return $('a*=Home');}
  get arrival() {return $('[title="Selenium Ruby"')}
  get addToBasketBtn() {return $('button*=Add to basket');}
  get basketCounter() {return $('.cartcontents').getText()}
  get descriptionTab() {return $('[href="#tab-description"]');}
  get descriptionTitle() {return $('#tab-description > h2');}
}

export default new Pages()