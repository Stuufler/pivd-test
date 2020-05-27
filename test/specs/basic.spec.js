import Pages from '../pages/pages.page';

describe('Basic suite', () => {
    // 1. My Accounts-Dashboard
    it('should view Dashboard of the site', () => {
        browser.url('http://practice.automationtesting.in/')

        Pages.myAccountBtn.click();
        Pages.username.setValue('stufler29@gmail.com');
        Pages.password.setValue('SuperSecr3tPWD!');
        Pages.loginBtn.click();
        expect(Pages.signOutBtn.getText()).toEqual('Sign out')
        
        Pages.dashboardBtn.click();
        expect(Pages.dashboardBtn.getText()).toEqual('Dashboard')
        expect(browser).toHaveTitle('My Account – Automation Practice Site');

    }),

    // 4. Home page - Arrivals-Images-Description
    // NOTE: Steps 7-9 are the same, weak design !!!
    it('should be a description regarding that book the user clicked on', () => {
        browser.url('http://practice.automationtesting.in/')

        Pages.shopBtn.click();      
        Pages.homeBtn.click();
        // expect(browser.execute(() => document.querySelectorAll('.products')).length).toEqual(3);
        expect($$('.products').length).toEqual(3);

                
        Pages.arrival.click();
        expect(Pages.addToBasketBtn.getText()).toEqual('ADD TO BASKET');
        
        Pages.addToBasketBtn.click();
        expect(Pages.basketCounter[0]).toEqual('1');

        Pages.descriptionTab.click();
        expect(Pages.descriptionTitle.getText()).toEqual('Product Description');

        // browser.deleteCookies();
        // browser.deleteSession();
    })

})