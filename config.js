module.exports = {
    /*
    * Открываем доступ до веб интерфейса: Настройки программы (Ctrl+P) -> Дополнительно -> Веб интерфейс.
    * Ставим галку "Использовать веб-интерфейс".
    * Придумываем логин и пароль (без спецсимволов или экранируем их), при желании ставим галку "Альтернативный порт" и указываем другой порт.
    * Заполняем поля ниже.
    * */
    username: 'admin',
    password: 'admin',
    port: 8080,

    // Это интервал в миллисекундах с которым программа будет получать список IP адресов и блокировать их. 10000 миллисекунд = 10 секунд.
    interval: 10000,

    // Это фильтр версии, менять только при необходимости.
    filters: {
        // uTorrent
        mu: {major: 3, minor: 5},
        // BitTorrent
        bit: {major: 7, minor: 10},
        // uTorrent Mac
        muMac: {major: 0, minor: 0},
        // uTorrent web and BitTorrent web
        libtorrent: {major: 0, minor: 0, micro: 0},
        // Неопределившиеся версии (определение идёт с задержкой, по этой причине не блокируем)
        unknown: {major: 0, minor: 0},
    },

    /*
    * Расположение торрент клиента. На текущий момент только для работы с ipfilter.dat
    * Указывать если программа сама не смогла правильно определить директорию расположения клиента.
    * При указании пути необходимо экранировать обратные слэши, например: 'C:\\Users\\Administrator\\AppData\\Roaming\\uTorrent\\uTorrent.exe'
    * */
    torrentClientPath: '',

    /*
    * Очищать ipfilter.dat при запуске.
    * true - удалять историю.
    * false - только дописывать новые IP.
    * */
    flagClearIpFilter: true,

    /*
    * ВНИМАНИЕ! ФУНКЦИОНАЛ НЕ ЯВЛЯЕТСЯ НАДЕЖНЫМ, ВСЕ BTT МОГУТ ПРОПАСТЬ!
    * Автоматический вывод.
    * */
    autoBttTransfer: {
        /*
        * Включить автоматический перевод из IN APP в ON CHAIN
        * true - автоматический вывод включен.
        * false - автоматический вывод выключен.
        * */
        autoTransfer: false,
        // Порт со страницы SPEED, взять в адресной строке, пример https://speed.btt.network/gui/index.html?port=50458#/dashboard тут он будет 50458.
        port: 50458,
        interval: 1000,
        // Адрес получения информации.
        url: 'https://apiasia.tronscan.io:5566/api/account?address=TA1EHWb1PymZ1qpBNfNj9uTaxd18ubrC7a',
        // Максимальная сумма вывода, если баланс меньше то выведет максимально доступный. Выводит за вычетом 1 BTT.
        amountLimit: 99999,
        // Минимальный баланс на шлюзе при котором начинать попытку вывода.
        minBalance: 100000,
    },

    /*
    * ###############################################
    * #                                             #
    * #                НЕ ТРОГАЕМ                   #
    * #  ДАЛЕЕ НАСТРОЙКИ ДЛЯ ОПЫТНЫХ ПОЛЬЗОВАТЕЛЕЙ  #
    * #                                             #
    * ###############################################
    * */

    /*
    * Выводить больше логов, нужно для поиска ошибок
    * true - включен
    * false - выключен
    * */
    debugLog: false,

    apiTorrentUrl: 'http://127.0.0.1',
    apiBttUrl: 'http://127.0.0.1',
    authToken: '',

    /*
    * Включение автоматической настройки.
    * Значение флагов в autoConfig: Вкл = 1, Выкл = 0
    * Команда для запуска: node src/autoConfig/index.js
    * */
    setSetting: false,
    autoConfig: {
        /*
        * Куда качать файлы, путь до папки.
        * */
        dir_active_download_flag: 1,
        dir_active_download: 'C:\\Users\\Administrator\\Downloads\\torrents',

        /*
        * Автоматический запуск скачивания торрентов при появлении в указанной папке торрент файлов.
        * */
        dir_autoload_flag: 1,
        dir_autoload: 'C:\\Users\\Administrator\\Downloads\\torrent_files',

        /*
        * Удалять торрент файлы (с расширением .torrent) после автоматического скачивания.
        * */
        dir_autoload_delete: 1,

        max_active_torrent: 100,
        max_active_downloads: 100,
        conns_globally: 2000,
        conns_per_torrent: 20,
        ul_slots_per_torrent: 20,
        max_dl_rate: 0, // лимит загрузки
        max_ul_rate: 0, // лимит отдачи
        max_ul_rate_seed_flag: 0, // включить альтернативную скорость отдачи если нет загрузок. Значения: 0, 1
        max_ul_rate_seed: 0, // альтернативная скорость

        // 'webui.enable': 1,
        // 'webui.enable_listen': 1,
        // 'webui.port': 50000,
        // 'webui.username': 'I\'mSuperAdmin!',
        // 'webui.password': 'I\'mSuperPassword!',
    }
}
