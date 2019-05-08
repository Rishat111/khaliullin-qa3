import assert from 'assert';

describe('№1', function () {

    describe('Exist email and confirm email', function () {

        it('Email fields', function () {
            browser.url('/');
            let input = $('#registration')
            input.click()
            let field = $('#email').isExisting()
            let field1 = $('#email_confirm').isExisting()
            assert.equal(field, true);
            assert.equal(field1, true, 'Field is not exist');
        })

    });
    describe('Exist email and confirm email', function () {

        it('Registration', function () {
            browser.url('/');
            let input = $('#registration');
            input.click();
            let field = $('#email');
            let field1 = $('#email_confirm');
            field.addValue('artur@mail.ru');
            field1.addValue('artur@mail.ru')
            //browser.pause(1000);
            input.click();
            let r = field.getValue();
            let r1 = field1.getValue();
            let field3 = $('#error').getText()
            assert.equal(r, r1, 'email is not match');

        })



    });
    describe('Exist email and confirm email', function () {

        it('Emails do not match', function () {
            browser.url('/');
            let input = $('#registration');
            input.click();
            let field = $('#email');
            let field1 = $('#email_confirm');
            field.addValue('artur@mail.ru');
            field1.addValue('arur@mail.ru')
            //browser.pause(1000);
            input.click();
            let field3 = $('#error').getText()
            //browser.pause(1000);
            assert.equal(field3, 'Emails do not match', 'email is right');
        })



    });

    describe('Exist email and confirm email', function () {

        it('Passwords do not match', function () {
            browser.url('/');
            let input = $('#registration');
            input.click();
            let field = $('#email');
            let field1 = $('#email_confirm');
            let field2 = $('#pass');
            let field3 = $('#pass_confirm');
            field.addValue('artur@mail.ru');
            field1.addValue('artur@mail.ru');
            field2.addValue('aa');
            field3.addValue('ab');
            browser.pause(1000);
            input.click();
            let field4 = $('#error').getText()
            //browser.pause(1000);
            assert.equal(field4, 'Passwords do not match', 'email and password are right');
        })



    });
});

describe('№2', function () {

    describe('Back button', function () {

        it('Verify that the button has text', function () {
            browser.url('/');
            let input = $('#registration')
            input.click()
            let field = $('#back').getText()
            console.log(field)
            assert.equal(field, '< Back', 'Text is not Back');

        })

    });
    describe('Back button', function () {

        it('Verify that the button has font size', function () {
            browser.url('/');
            let input = $('#registration')
            input.click()
            let field = $('#back')
            let fontsize = field.getCSSProperty('font-size').parsed.value
            console.log(fontsize)
            assert.equal(fontsize, '16', 'Font size is not right');

        })

    });
    describe('Back button', function () {

        it('Verify that the button has font weight', function () {
            browser.url('/');
            let input = $('#registration')
            input.click()
            let field = $('#back')
            let fontweight = field.getCSSProperty('font-weight').parsed.value
            console.log(fontweight)
            assert.equal(fontweight, '400', 'Font weight is not right');

        })

    });

    describe('Back button', function () {

        it('Verify that the button has font family', function () {
            browser.url('/');
            let input = $('#registration')
            input.click()
            let field = $('#back')
            let fontfamily = field.getCSSProperty('font-family').parsed.value[0];
            console.log(fontfamily)
            assert.equal(fontfamily, 'segoe ui', 'Font family is not right');

        })

    });
    describe('Back button', function () {

        it('Verify that the button has font color', function () {
            browser.url('/');
            let input = $('#registration');
            input.click();
            let field = $('#back');
            let fontcolor = field.getCSSProperty('color').parsed.hex;
            console.log(fontcolor)
            assert.equal(fontcolor, '#ffffff', 'Font color is not white');

        })

    });
    describe('Back button', function () {

        it('Verify that the button  color', function () {
            browser.url('/');
            let input = $('#registration');
            input.click();
            let field = $('#back');
            let buttoncolor = field.getCSSProperty('background-color').parsed.hex;
            console.log(buttoncolor)
            assert.equal(buttoncolor, '#17a2b8', 'Button color is not right');

        })

    });
    describe('Back button', function () {

        it('Verify that the button after hover color is', function () {
            browser.url('/');
            let input = $('#registration');
            input.click();
            let field = $('#back');
            field.moveTo()
            browser.pause(5000);
            let buttoncolor = field.getCSSProperty('background-color').parsed.hex;
            console.log(buttoncolor)
            assert.equal(buttoncolor, '#138496', 'Button color is not right');

        })

    });

});
