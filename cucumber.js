module.exports = {
    default: {
        require: [
            'features/step_definitions/*.js',
            'features/support/*.js'
        ],
        timeout: 30000,
        format: [
            'progress',
            'json:reports/report.json'
        ]
    }
};
