"use strict";
// Task 01
// Пример из реального фреймворка
// Создан абстрактный класс SignupFormAbstract. Создайте на его основе класс SignupForm, который реализуем свойства и методы абстрактного класса.
// Для метода validatePassword - реализуйте удаление пробелов по краям и вычисление длины. Если длина меньше 8 символов, возвращайте false,
// в остальных случаях - true. Значений свойств по умолчанию - пустые строки.
class SignupFormAbstract {
}
class SignupForm extends SignupFormAbstract {
    username = "";
    email = "";
    password = "";
    //   public validate: boolean = this.validatePassword(this.password);
    validatePassword(password) {
        password = password.trim();
        let out = password.length;
        return out < 8 ? false : true;
    }
}
// let test = new SignupForm();
// console.log(test);
// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.
// Task 02
// Создан абстрактный класс SignupFormAbstract. Создайте на его основе класс SignupForm_02,
// который реализуем свойства и методы абстрактного класса. Для метода validatePassword - реализуйте
// удаление пробелов по краям и вычисление длины. Если длина меньше 8 символов, возвращайте false,
// в остальных случаях - true. Значений свойств по умолчанию - пустые строки. Реализуйте в классе конструктор,
// который задает значения username, email, password при создании объекта.
class SignupForm_02 extends SignupFormAbstract {
    username = "";
    email = "";
    password = "";
    validate;
    constructor(username, email, password) {
        super();
        this.username = username;
        this.email = email;
        this.password = password.trim();
        this.validate = this.validatePassword(password);
    }
    validatePassword(password) {
        let out = password.trim().length;
        return out >= 8 ? true : false;
    }
}
// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.
// console.log(new SignupForm_02("abba", "abba@email.ua", "234"));
// Task 03
// Пример из реального фреймворка
// Создайте абстрактный класс CF. Класс содержит абстрактные поля name, email, subject, body, verifyCode все string,
// и абстрактный метод sendEmail, который принимает аргумент email, тип метода boolean.
class CF {
}
// Task 04
// Создайте класс ContactForm на основе класса CF. Свойства реализуйте как пустые строки, добавьте класс конструктор,
// который позволяет заполнить свойства name, email, subject, body, verifyCode при создании объекта. Метод sendEmail,
// реализуйте как функцию, возвращающую true.
class ContactForm extends CF {
    name = "";
    email = "";
    subject = "";
    body = "";
    verifyCode = "";
    constructor(name, email, subject, body, verifyCode) {
        super();
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.body = body;
        this.verifyCode = verifyCode;
    }
    sendEmail(email) {
        return true;
    }
}
// let test = new ContactForm("tom", "tom@mail.ua", "Math", "www", "22");
// console.log(test);
// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.
// Task 05
// Пример из реального фреймворка
// Создайте абстрактный класс User, который содержит абстрактные свойства id - number, username - string,
// email - string, status - number. Напишите абстрактный метод findByUsername, который принимает имя пользователя - username,
// и возвращает id пользователя или false.
class User {
}
// Task 06
// Создайте на основе абстрактного класса User класс Client, где реализуйте все необходимые свойства и методы.
// По умолчанию числовые значения равны 0, строковые пустой строке. Метод должен возвращать 0.
class Client extends User {
    id = 0;
    username = "";
    email = "";
    status = 0;
    findByUsername(username) {
        return this.id;
    }
}
// console.log(new Client());
// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.
// Task 07
// Пример из реального фреймворка
// Реализуйте абстрактный класс ArticleInstance содержащий абстрактные свойства:
// number article_id
// number author_id
// string language
// number created
// number updated
// string published
// number hits_count
// string intro_text
// string full_text
// string title
// string meta_keywords
// string meta_description
// Добавьте два readonly свойства общие для всех классов наследников PUBLISHED_YES = 'Yes', PUBLISHED_NO = 'No';
class ArticleInstance {
    PUBLISHED_YES = "Yes";
    PUBLISHED_NO = "No";
}
// Task 08
// Создайте на основе абстрактного класса ArticleInstance класс Article, где реализуйте все необходимые свойства и методы.
// По умолчанию числовые значения равны 0, строковые пустой строке.
class Article extends ArticleInstance {
    article_id = 0;
    author_id = 0;
    language = "";
    created = 0;
    updated = 0;
    published = "";
    hits_count = 0;
    intro_text = "";
    full_text = "";
    title = "";
    meta_keywords = "";
    meta_description = "";
    PUBLISHED_YES = "Yes";
    PUBLISHED_NO = "No";
}
// console.log(new Article());
// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.
// Task 09
// Пример из реального фреймворка
// Создайте абстрактный класс BundleCSS, содержащий абстрактные свойства:
// sourcePath - строка
// basePath - строка
// baseUrl - строка
// depends - массив строк
// сssOptions - массив строк
// Добавьте абстрактный метод init, void.
// Добавьте абстрактный метод publish, void.
class BundleCSS {
}
// Task 10
// Создайте на базе BundleCSS класс CssBundle, реализуйте свойства и методы. Задайте начальные значения для строк и массивов
// (пустые строки, пустые массивы);
class CssBundle extends BundleCSS {
    sourcePath = "";
    basePath = "";
    baseUrl = "";
    depends = [];
    сssOptions = [];
    init() { }
    publish() { }
}
console.log(new CssBundle());
// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.
//# sourceMappingURL=sprint_13.js.map