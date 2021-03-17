'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#cron-tasks
 */

let allowCron = false;

module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */
  // '0 1 * * 1': () => {
  //
  // }

  '* * * * * *': async () => {

    if (allowCron) {
      let date = new Date(Date.now());
      console.log('Cron start', date.toLocaleTimeString());
      console.log('***** START send email');

      await strapi.plugins.email.services.email.send({
        from: "ggvlasov@gmail.com",
        fromName: "Гайрат",
        to: "ggvlasov@rusagrotrans.in",
        toName: "Гайрат",
        subject: "👋🏓📣🍽🌈💔 Привет!",
        // text: `Text version of your email`,
        html: `<p> <b>Привект</b> школа танкц </p>`,
      });

      console.log('***** END send email')
      allowCron=false;
    }
  }
};
