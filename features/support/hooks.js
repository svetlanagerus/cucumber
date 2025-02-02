const { Before, After, AfterAll } = require('@cucumber/cucumber');

// Для демонстрации храним глобально. В реальных проектах рекомендуется использовать World.
let scenarioStartTime = 0;

// Те же глобальные переменные для браузера/страницы (чтобы закрыть в AfterAll)
let browser;
let page;

/**
 * В хуке Before запоминаем время начала сценария.
 */
Before(function (scenario) {
    scenarioStartTime = Date.now();
});

/**
 * В хуке After считаем длительность сценария и выводим в консоль.
 */
After(function (scenario) {
    const scenarioEndTime = Date.now();
    const duration = scenarioEndTime - scenarioStartTime;
    console.log(`\n[${scenario.pickle.name}] duration: ${duration} ms`);
});

/**
 * В хуке AfterAll закрываем браузер, если он был открыт.
 */
AfterAll(async function () {
    if (page) {
        await page.close();
    }
    if (browser) {
        await browser.close();
    }
    console.log('\nБраузер закрыт после всех тестов.');
});

/**
 * Геттеры/сеттеры для доступа из шагов.
 */
function setBrowser(b) {
    browser = b;
}
function getBrowser() {
    return browser;
}
function setPage(p) {
    page = p;
}
function getPage() {
    return page;
}

module.exports = {
    setBrowser,
    getBrowser,
    setPage,
    getPage
};
